data "aws_availability_zones" "available" {
  state = "available"
}

resource "random_string" "db_subnet_group_suffix" {
  length  = 8
  special = false
  upper   = false
  numeric  = false
}

module "iam" {
  source = "../iam"
}

resource "aws_vpc" "this" {
  cidr_block = var.vpc_cidr
  tags = {
    Name = "${var.project_prefix}-vpc"
  }
  
  lifecycle {
    create_before_destroy = true
  }
}

# ---------------------- Public ---------------------------- #

resource "aws_internet_gateway" "this" {
  vpc_id = aws_vpc.this.id
}

resource "aws_route_table" "ds_public_route_table" {
  vpc_id = aws_vpc.this.id
}

resource "aws_route" "ds_internet_access" {
  route_table_id         = aws_route_table.ds_public_route_table.id
  destination_cidr_block = var.cidr_allow_access
  gateway_id             = aws_internet_gateway.this.id
}

resource "aws_subnet" "ds_public_subnets" {
  count                   = length(local.azs)
  cidr_block              = cidrsubnet(var.vpc_cidr, 8, count.index)
  vpc_id                  = aws_vpc.this.id
  availability_zone       = local.azs[count.index]
  map_public_ip_on_launch = true
  tags = {
    Name = "${var.project_prefix}-public-subnet-${count.index + 1}"
  }
}

resource "aws_route_table_association" "ds_public_route_table_assoc" {
  count          = length(local.azs)
  subnet_id      = aws_subnet.ds_public_subnets.*.id[count.index]
  route_table_id = aws_route_table.ds_public_route_table.id
}

# ---------------------- Private ---------------------------- #


resource "aws_subnet" "ds_private_subnets" {
  count                   = length(local.azs)
  vpc_id                  = aws_vpc.this.id
  cidr_block              = cidrsubnet(var.vpc_cidr, 8, length(local.azs) + count.index)
  map_public_ip_on_launch = false
  availability_zone       = local.azs[count.index]

  tags = {
    Name = "${var.project_prefix}-private-subnet-${count.index + 1}"
  }
}

resource "aws_db_subnet_group" "ds_db_subnet_group" {
  name       = "${var.project_prefix}-database-subnet-group-${random_string.db_subnet_group_suffix.result}"
  subnet_ids = aws_subnet.ds_private_subnets.*.id

  tags = {
    Name = "${var.project_prefix}-database-subnet-group-${random_string.db_subnet_group_suffix.result}"
  }
}

# ------------------------ Security Groups -------------------------- #

resource "aws_security_group" "ds_sgs" {
  for_each    = var.security_groups
  name        = each.value.name
  description = each.value.description
  vpc_id      = aws_vpc.this.id

  dynamic "ingress" {
    for_each = each.value.ingress
    content {
      from_port   = ingress.value.from
      to_port     = ingress.value.to
      protocol    = ingress.value.protocol
      cidr_blocks = each.value.cidr_allow_access ? [var.cidr_allow_access] : concat(aws_subnet.ds_private_subnets.*.cidr_block, [])
    }
  }

  ingress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = concat(aws_subnet.ds_public_subnets.*.cidr_block, [])
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = concat(aws_subnet.ds_private_subnets.*.cidr_block, aws_subnet.ds_public_subnets.*.cidr_block, [])
  }
}



