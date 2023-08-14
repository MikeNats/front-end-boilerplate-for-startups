module "networking" {
  source            = "../networking"
  vpc_cidr          = var.vpc_cidr
  cidr_allow_access = var.cidr_allow_access
   security_groups  = var.security_groups
   project_prefix   = var.project_prefix
}

module "iam" {
  source = "../iam"
}

resource "random_string" "aws_db_instance_suffix" {
  count   = length(module.networking.azs)
  length  = 8
  special = false
  upper   = false
  numeric  = false
  keepers = {
    db_instance_index = count.index
  }

}

resource "aws_db_instance" "default" {
  count                                = length(module.networking.azs)
  engine                               = var.db_engine
  engine_version                       = var.db_engine_version
  allocated_storage                    = var.db_allocated_storage
  instance_class                       = var.db_instance_class
  identifier                           = "${var.db_identifier}-${count.index}-${element(random_string.aws_db_instance_suffix.*.result, count.index)}"
  username                             = var.db_username 
  password                             = var.db_password
  parameter_group_name                 = var.db_parameter_group_name
  publicly_accessible                  = var.db_publicly_accessible
  vpc_security_group_ids               = [module.networking.postgres_sg_id]
  monitoring_interval                  = var.db_monitoring_interval
  monitoring_role_arn                  = module.iam.rds_cloudwatch_logs_role.arn
  enabled_cloudwatch_logs_exports      = var.db_enabled_cloudwatch_logs_exports 
  iam_database_authentication_enabled  = true
  skip_final_snapshot       = true
  # final_snapshot_identifier = "${var.db_identifier}-${count.index}-${element(random_string.aws_db_instance_suffix.*.result, count.index)}"
  db_subnet_group_name                 = "${module.networking.aws_db_subnet_group_name}"
  availability_zone                    = module.networking.azs[count.index]
  backup_retention_period              = var.db_backup_retention_period
  tags = {
    Name                               = "${var.project_prefix}-${var.db_engine}-${count.index + 1}-${random_string.aws_db_instance_suffix[count.index].result}"
  }
}
