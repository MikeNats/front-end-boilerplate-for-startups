module "networking" {
  source            = "../networking"
  vpc_cidr          = var.vpc_cidr
  cidr_allow_access = var.cidr_allow_access
  security_groups = var.security_groups
  project_prefix = var.project_prefix
}

module "iam" {
  source = "../iam"
}

resource "random_string" "eks_suffix" {
  length  = 8
  special = false
  upper   = false
  numeric  = false
}

module "eks" {
  source  = "terraform-aws-modules/eks/aws" 
  version = "19.13.1"
  vpc_id  = module.networking.vpc_id
  subnet_ids = concat(module.networking.subnet_ids, [])

  cluster_name                  = "${var.project_prefix}-${var.k8s_cluster_name}-${random_string.eks_suffix.result}"
  cluster_version               = var.k8s_cluster_version
  iam_role_name         = module.iam.eks_role_name
  cluster_security_group_id     = module.networking.public_sg_id

  eks_managed_node_groups = [
    for az in module.networking.azs : {
      instances = {
        for idx, instance in var.k8s_node_instances : "${instance.name}-${idx}-${az}" => {
            additional_security_group_ids = [module.networking.public_sg_id]
            desired_capacity             = instance.desired_capacity
            max_capacity                 = instance.max_capacity
            min_capacity                 = instance.min_capacity
            instance_type                = instance.instance_type
            instance_count               = instance.instance_count

            availability_zone            = az
            k8s_labels = {
              Environment = "${var.k8s_labels_environment}"
              Name        = "${var.project_prefix}-eks-worker-node-${idx}-${az}"
            }
            additional_tags = {
              Environment = "${var.k8s_labels_environment}"
              Name        = "${var.project_prefix}-eks-worker-node-${idx}-${az}"
            }
            spot_instance  = var.k8s_spot_instance
            spot_max_price = var.k8s_spot_max_price

        }

      }
      launch_template_name = "${var.project_prefix}-eks-lt-${az}"

    }
  ]
}


resource "null_resource" "update_kubeconfig" {
  depends_on = [module.eks]

  provisioner "local-exec" {
    command = "aws eks update-kubeconfig --region ${var.aws_region} --name ${module.eks.cluster_name}"
  }
}
