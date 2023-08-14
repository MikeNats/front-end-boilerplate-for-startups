module "networking" {
  source            = "./networking"
  vpc_cidr          = var.vpc_cidr
  cidr_allow_access = var.cidr_allow_access
  security_groups   = var.security_groups
  project_prefix    = var.project_prefix
}

module "iam" {
  source = "./iam"
}

module "compute" {
  source                            = "./compute"
  vpc_cidr                          = var.vpc_cidr
  cidr_allow_access                 = var.cidr_allow_access
  k8s_node_instances                = var.k8s_node_instances
  k8s_cluster_enabled_log_types     = var.k8s_cluster_enabled_log_types
  k8s_cluster_log_retention_in_days = var.k8s_cluster_log_retention_in_days
  k8s_spot_max_price                = var.k8s_spot_max_price
  k8s_spot_instance                 = var.k8s_spot_instance
  k8s_cluster_version               = var.k8s_cluster_version
  k8s_labels_environment            = var.k8s_labels_environment
  k8s_cluster_name                  = var.k8s_cluster_name
  project_prefix                    = var.project_prefix
  security_groups                   = var.security_groups
  aws_region                        = var.aws_region

}

module "database" {
  source                             = "./database"
  vpc_cidr                           = var.vpc_cidr
  cidr_allow_access                  = var.cidr_allow_access
  db_instance_class                  = var.db_instance_class
  db_allocated_storage               = var.db_allocated_storage
  db_engine                          = var.db_engine
  db_engine_version                  = var.db_engine_version
  project_prefix                     = var.project_prefix
  security_groups                    = var.security_groups
  db_publicly_accessible             = var.db_publicly_accessible
  db_backup_retention_period         = var.db_backup_retention_period
  db_identifier                      = var.db_identifier
  db_username                        = var.db_username
  db_password                        = var.db_password
  db_parameter_group_name            = var.db_parameter_group_name
  db_monitoring_interval             = var.db_monitoring_interval
  db_enabled_cloudwatch_logs_exports = var.db_enabled_cloudwatch_logs_exports
}

