output "eks_role_name" {
  description = "The IAM role name for EKS"
  value       = aws_iam_role.eks_role.name
}


# output "flowlogs" {
#   description = "The IAM role flowlogs"
#   value       = aws_iam_role.flowlogs
# }

# output "flowlogs_policy_attachment" {
#   description = "The IAM role flowlogs"
#   value       = aws_iam_role_policy_attachment.flowlogs_policy_attachment
# }

output "rds_cloudwatch_logs_role" {
  description = "The IAM role rds_cloudwatch_log_role"
  value       = aws_iam_role.rds_cloudwatch_logs_role
}