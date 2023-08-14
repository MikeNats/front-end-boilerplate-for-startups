variable "vpc_cidr" {
  type    = string
  default = "10.124.0.0/16"
}

variable "cidr_allow_access" {
  type    = string
  default = "0.0.0.0/0"
}

variable "aws_region" {
  type    = string
  default = "eu-central-1"
}

variable "db_allocated_storage" {
  type    = number
  default = 1
}

variable "db_instance_class" {
  type    = string
  default = "db.t2.nano"
}

variable "db_engine" {
  type    = string
  default = "postgres"
}

variable "db_engine_version" {
  type    = string
  default = "13.3"
}

variable "k8s_cluster_log_retention_in_days" {
  type    = number
  default = 3
}

variable "k8s_cluster_enabled_log_types" {
  type    = list(string)
  default = ["api", "audit", "authenticator", "controllerManager", "scheduler"]
}

variable "k8s_node_instances" {
  type = list(object({
    name             = string
    desired_capacity = number
    max_capacity     = number
    min_capacity     = number
    instance_type    = string
    instance_count   = number
  }))
}

variable "k8s_cluster_version" {
  type    = string
  default = "1.26"
}

variable "k8s_spot_max_price" {
  type    = string
  default = "0.05"
}

variable "k8s_spot_instance" {
  type    = bool
  default = true
}

variable "k8s_labels_environment" {
  type    = string
  default = "dev"
}

variable "k8s_cluster_name" {
  type    = string
  default = "dev"
}

variable "project_prefix" {
  type    = string
  default = "ds"
}

variable "db_publicly_accessible" {
  type    = bool
  default = false
}

variable "security_groups" {
  type = object({
    public = object({
      name              = string
      description       = string
      cidr_allow_access = bool
      ingress = object({
        ssh = object({
          from     = number
          to       = number
          protocol = string
        })
        http = object({
          from     = number
          to       = number
          protocol = string
        })
      })
    })
    postres = object({
      name              = string
      description       = string
      cidr_allow_access = bool
      ingress = object({
        postres = object({
          from     = number
          to       = number
          protocol = string
        })
      })
    })
  })
}

variable "db_backup_retention_period" {
  type    = number
  default = 3
}

variable "db_identifier" {
  type    = string
  default = "ds-postgres"
}

variable "db_username" {
  type    = string
  default = "postgres"
}

variable "db_password" {
  type    = string
  default = "postgres"
}

variable "db_parameter_group_name" {
  type    = string
  default = "default.postgres13"
}

variable "db_monitoring_interval" {
  type    = number
  default = 60
}

variable "db_enabled_cloudwatch_logs_exports" {
  type    = list(string)
  default = ["postgresql"]
}
