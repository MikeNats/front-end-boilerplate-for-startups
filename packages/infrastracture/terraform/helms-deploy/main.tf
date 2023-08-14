resource "helm_release" "nginx_ingress" {
  name       = "my-nginx"
  namespace  = "default"

  repository {
    name = "ingress-nginx"
    url  = "https://kubernetes.github.io/ingress-nginx"
  }

  chart = "ingress-nginx"
}


 resource "helm_release" "ingres" {
  name       = "ingres"
  chart      = "your-path/packages/infrastracture/charts/dyonisus/charts/ingres"
  namespace = "default"
    values = [
    file("your-path/packages/infrastracture/charts/dyonisus/charts/ingres/values.local.yaml")
  ]
 }


resource "helm_release" "volumepostgres" {
  name       = "volumepostgres"
  chart      = "your-path/packages/infrastracture/charts/dyonisus/charts/volumepostgres"
  namespace = "default"
    values = [
    file("your-path/packages/infrastracture/charts/dyonisus/charts/volumepostgres/values.local.yaml")
  ]
}

 resource "helm_release" "shell" {
  name       = "shell"
  chart      = "your-path/packages/infrastracture/charts/dyonisus/charts/shell"
  namespace = "default"
    values = [
    file("your-path/packages/infrastracture/charts/dyonisus/charts/shell/values.local.yaml")
  ]
 }

  resource "helm_release" "home" {
  name       = "home"
  chart      = "your-path/packages/infrastracture/charts/dyonisus/charts/home"
  namespace = "default"
    values = [
    file("your-path/packages/infrastracture/charts/dyonisus/charts/home/values.local.yaml")
  ]
 }

resource "helm_release" "postgres" {
  name       = "postgres"
  chart      = "your-path/packages/infrastracture/charts/dyonisus/charts/postgres"
  namespace = "default"
    values = [
    file("your-path/packages/infrastracture/charts/dyonisus/charts/postgres/values.local.yaml")
  ]
 }

resource "helm_release" "persistentvolumeclaims" {
  name       = "persistentvolumeclaims"
  chart      = "your-path/packages/infrastracture/charts/dyonisus/charts/persistentvolumeclaims"
  namespace = "default"
    values = [
    file("your-path/packages/infrastracture/charts/dyonisus/charts/persistentvolumeclaims/values.local.yaml")
  ]
}

resource "helm_release" "secrtes" {
  name       = "secrtes"
  chart      = "your-path/packages/infrastracture/charts/dyonisus/charts/secrtes"
  namespace = "default"
    values = [
    file("your-path/packages/infrastracture/charts/dyonisus/charts/secrtes/values.local.yaml")
  ]
}

