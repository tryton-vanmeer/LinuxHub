# LinuxHub WWW

Frontend for LinuxHub API using React and TypeScript.

## Running

### Install dependencies

`npm i`

### Start Dev Server

`npm run start`

## Container

### Build frontend

`npm run build`

### Build the image

`podman build . -t linuxhub-www`

### Run the container

`podman run --rm --pod linuxhub -it linuxhub-www`