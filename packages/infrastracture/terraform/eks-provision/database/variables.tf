variable "vpc_cidr" {
  type    = string
}

variable "cidr_allow_access" {
  type    = string
}

variable "db_engine" {
  type    = string
}

variable "db_engine_version" {
  type    = string
}

variable "db_allocated_storage" {
  type    = number
}

variable "db_instance_class" {
  type    = string
}

variable "project_prefix" {
  type    = string
}

variable "db_publicly_accessible" {
  type    = bool
}


variable "security_groups" {
  type = object({
    public = object({ 
      name              = string
      description       = string
      cidr_allow_access = bool
      ingress           = object({
        ssh             = object({ 
          from          = number
          to            = number
          protocol      = string 
        })
        http            = object({ 
          from          = number
          to            = number
          protocol      = string
       })
      }) 
    })
    postres = object({
      name         = string
      description  = string
      cidr_allow_access = bool
      ingress      = object({
        postres    = object({ 
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
}


variable "db_identifier" {
  type    = string
}

variable "db_username" {
  type    = string
}

variable "db_password" {
  type    = string
}

variable "db_parameter_group_name" {
  type    = string
}

variable "db_monitoring_interval" {
  type    = number
}

variable "db_enabled_cloudwatch_logs_exports" {
  type    = list(string)
}

