#!/usr/bin/bash

echo "Building linux-www"
cd linuxhub-www || exit
npm i &> /dev/null
npm run build &> /dev/null
cd "$OLDPWD" || exit

echo "Building linuxhub-api container"
podman build linuxhub-api -t linuxhub-api &> /dev/null
echo "Building linuxhub-www container"
podman build linuxhub-www -t linuxhub-www &> /dev/null

echo "Creating pod"
podman pod create --name linuxhub -p 8080:80 -p 8000:8000 &> /dev/null

echo "Starting containers"
podman run --rm --pod linuxhub -dt linuxhub-api &> /dev/null
podman run --rm --pod linuxhub -dt linuxhub-www &> /dev/null

echo "Go to http://localhost:8080"