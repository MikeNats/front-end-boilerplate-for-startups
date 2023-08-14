resource "random_integer" "random_int" {
  min = 0
  max = 100000

  keepers = {
    timestamp = timestamp()
  }
}

resource "aws_iam_role" "eks_role" {
  
  name = "ds-eks-role-${random_integer.random_int.id}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
      }
    ]
  })
  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_iam_role_policy_attachment" "AmazonEKSClusterPolicy" {
  role       = aws_iam_role.eks_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
}

resource "aws_iam_role_policy_attachment" "AmazonEKSVPCResourceController" {
  role       = aws_iam_role.eks_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSVPCResourceController"
}


resource "aws_iam_role_policy_attachment" "AmazonEKSWorkerNodePolicy" {
  role       = aws_iam_role.eks_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSWorkerNodePolicy"
}

resource "aws_iam_role_policy_attachment" "AmazonSSMManagedInstanceCore" {
  role       = aws_iam_role.eks_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}


# resource "aws_iam_role" "flowlogs" {
#   name = "flowlogs-${random_integer.random_int.id}"
#   assume_role_policy = jsonencode({
#     Version = "2012-10-17"
#     Statement = [{
#       Action = "sts:AssumeRole"
#       Effect = "Allow"
#       Principal = {
#         Service = "vpc-flow-logs.amazonaws.com"
#       }
#       Sid = ""
#     }]
#   })

#   lifecycle {
#     create_before_destroy = true
#   }
# }

# resource "aws_iam_role_policy_attachment" "flowlogs_policy_attachment" {
#   policy_arn = "arn:aws:iam::aws:policy/CloudWatchLogsFullAccess"
#   role       = aws_iam_role.flowlogs.name
# }




data "aws_iam_policy_document" "rds_cloudwatch_logs_policy" {
  statement {
    effect = "Allow"
    actions = [
      "logs:CreateLogStream",
      "logs:PutLogEvents",
      "cloudwatch:PutMetricData",
    ]
    resources = [
      "*",
    ]
  }
}



resource "aws_iam_policy" "rds_cloudwatch_logs_policy" {
  name        = "rds_cloudwatch_logs_policy-${random_integer.random_int.id}"
  policy      = data.aws_iam_policy_document.rds_cloudwatch_logs_policy.json
}

resource "aws_iam_role_policy_attachment" "rds_cloudwatch_logs_policy" {
  policy_arn = aws_iam_policy.rds_cloudwatch_logs_policy.arn
  role       = aws_iam_role.rds_cloudwatch_logs_role.name
}

resource "aws_iam_role" "rds_cloudwatch_logs_role" {
  name = "rds_cloudwatch_logs_role-${random_integer.random_int.id}"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = ["monitoring.rds.amazonaws.com", "rds.amazonaws.com"]
        }
      }
    ]
  })

  lifecycle {
    create_before_destroy = true
  }
}
