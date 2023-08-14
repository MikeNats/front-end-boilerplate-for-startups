
variable "vpc_cidr" {
  type    = string
}

variable "aws_region" {
  type    = string
}
  

variable "cidr_allow_access" {
  type    = string
}

variable "k8s_cluster_version" {
  type    = string
}

variable "k8s_spot_max_price" {
  type    = string
}

variable "k8s_spot_instance" {
  type    = bool
}
  
variable "k8s_cluster_log_retention_in_days" {
  type    = number
}

variable "k8s_labels_environment" {
  type    = string
}

variable "k8s_cluster_enabled_log_types" {
  type    = list(string)
}

variable "k8s_node_instances" {
  type = list(object({
    name                         = string
    desired_capacity             = number
    max_capacity                 = number
    min_capacity                 = number
    instance_type                = string
    instance_count               = number
  }))
}

variable "k8s_cluster_name" {
  type    = string
}

variable "project_prefix" {
  type    = string
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
