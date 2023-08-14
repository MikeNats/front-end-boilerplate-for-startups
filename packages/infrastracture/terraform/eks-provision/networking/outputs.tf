output "vpc_id" {
  description = "The ID of the VPC"
  value       = aws_vpc.this.id
}

output "subnet_ids" {
  description = "The ID of the subnet"
  value       = aws_subnet.ds_public_subnets.*.id
}

output "aws_db_subnet_group_name" {
  description = "The db subnet group name"
  value       = aws_db_subnet_group.ds_db_subnet_group.name
}

output "postgres_sg_id" {
  description = "The db subnet group allow_postgres id"
  value       = aws_security_group.ds_sgs["postres"].id
}

output "public_sg_id" {
  description = "The public "
  value       = aws_security_group.ds_sgs["public"].id
}

output "azs" {
  description = "Availability Zones"
  value       = local.azs
}





