vpc_cidr             = "10.124.0.0/16"
cidr_allow_access    = "0.0.0.0/0"
# key_name             = "mtc_key"
# public_key_path      = "~/.ssh/mtc_key.pub"
db_allocated_storage = 5
db_instance_class    = "db.t3.nano"
db_engine            = "postgres"
db_engine_version    = "13.4"
k8s_node_instances = [{
  name             = "dsp-eks-worker-node"
  desired_capacity = 1
  max_capacity     = 1
  min_capacity     = 0
  instance_type    = "t2.nano"
  instance_count   = 1
}]
k8s_cluster_enabled_log_types     = ["api", "audit", "authenticator", "controllerManager", "scheduler"]
k8s_cluster_log_retention_in_days = 3
k8s_cluster_version               = "1.26"
k8s_spot_max_price                = "0.05"
k8s_spot_instance                 = true
k8s_labels_environment            = "dev"
project_prefix                    = "dsp"
k8s_cluster_name                  = "main"
db_publicly_accessible            = false
security_groups = {
  public = {
    name              = "dsp-public-sg"
    description       = "public access"
    cidr_allow_access = true
    ingress = {
      ssh = {
        from     = 22
        to       = 22
        protocol = "tcp"
      }
      http = {
        from     = 80
        to       = 80
        protocol = "tcp"
      }
    }
  }
  postres = {
    name              = "dsp-postres-sg"
    description       = "postres access"
    cidr_allow_access = false
    ingress = {
      postres = {
        from     = 5432
        to       = 5432
        protocol = "tcp"
      }
    }
  }
}
db_backup_retention_period = 3

db_identifier                      = "postgresddb"
db_username                        = "postgres"
db_password                        = "qwerty01!!aA"
db_parameter_group_name            = "default.postgres13"
db_monitoring_interval             = 60
db_enabled_cloudwatch_logs_exports = ["postgresql"]