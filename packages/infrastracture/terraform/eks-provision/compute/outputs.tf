output "eks" {
  description = "The EKS cluster."
  value       = module.eks
}

output "cluster_id" {
  description = "The ID of the EKS cluster."
  value       = module.eks.cluster_name
}

output "cluster_endpoint" {
  description = "The endpoint of the EKS cluster."
  value       = module.eks.cluster_endpoint
}

output "cluster_certificate_authority_data" {
  description = "The certificate authority data of the EKS cluster."
  value       = module.eks.cluster_certificate_authority_data
}