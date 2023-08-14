variable "vpc_cidr" {
  type    = string
}

variable "cidr_allow_access" {
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