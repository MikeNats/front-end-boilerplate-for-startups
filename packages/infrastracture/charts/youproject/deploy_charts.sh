#!/bin/bash
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" >/dev/null 2>&1 && pwd)"

#### @TODO: ADD IMAHGE TAGS TO VALUES FILE ####
#### >>>> sh deploy_charts.sh local 0.1.0 v1 channel ingres persistentvolumeclaims postgres secrtes shell volumepostgres  <<<< ###


# Get the 'local' part of the values file from the first script argument
enviroment=$1
# Get the chart version from the second script argument
chart_version=$2
# Get the release version from the third script argument
release_version=$3
# Cluster ID and region
cluster_id=$4
region_name=$5
# Shift the argument list to remove the first five arguments
shift 5

# Remaining arguments are the chart names
chart_names=("$@")

# aws eks update-kubeconfig --region $region_name --name $cluster_id


# Remove any existing chart packages
rm -f ./charts/*.tgz

# Package each subcharts dependencies
for chart_name in "${chart_names[@]}"
do
   helm dependency update $SCRIPT_DIR/charts/$chart_name
done

# Package each subcharts
# helm dependency update

# If the environment is 'local', enable the ingress addon else install the ingress controller
# if [ "$enviroment" = "local" ]; then
#    minikube addons enable ingress
# else
   # helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
   # helm repo update
   # helm install my-nginx ingress-nginx/ingress-nginx
# fi

# for each chart, install the chart using the values file for the environment
# for chart_name in "${chart_names[@]}"
# do
#    release_name="${chart_name}-${release_version}"

#    helm upgrade --install $release_name $SCRIPT_DIR/charts/$chart_name-$chart_version.tgz -f $SCRIPT_DIR/charts/$chart_name/values.$enviroment.yaml
# done

