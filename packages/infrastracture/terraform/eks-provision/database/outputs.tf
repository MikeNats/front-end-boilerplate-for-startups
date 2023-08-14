output "db_endpoint" {
  description = "The connection endpoint for the RDS database"
  value       = aws_db_instance.default.*.endpoint
}

output "db_password" {
  description = "The password for connecting to the RDS database. Be careful with this!"
  value       = aws_db_instance.default.*.password
  sensitive   = true
}

