# LinuxHub

Explore Linux distros and their versions.

See the READMEs in the linuxhub-api and linuxhub-www subprojects for more information.

## Screenshots

![Home](screenshots/home.png)

![Distro - Ubuntu](screenshots/distro_ubuntu.png)

![OS - Ubuntu 20.04](screenshots/os_ubuntu_20_04.png)

![Distro - Fedora](screenshots/distro_fedora.png)

![OS - Fedora 31](screenshots/os_fedora_31.png)

## Container

When running the containers, as documented in subproject READMEs, make sure the `linuxhub` pod exists.

`podman pod create --name linuxhub -p 8080:80 -p 8000:8000`

Running `podman-compose.sh` will automate building the containers and starting them in a pod.