# LinuxHub API

Python API backed by [libosinfo](https://libosinfo.org/),
using the [FastAPI](https://github.com/tiangolo/fastapi) framework.

## Running

### Create your virtualenv and activate it

`virtualenv3 .venv`

Source the activate script for your shell.

`source .venv/bin/activate`

### Install dependencies

`pip install -r requirements.txt`

### Run

`uvicorn --reload linuxhub.api:app`

## Container

### Build the image

`podman build . -t linuxhub-api`

### Run the container

`podman run --rm --pod linuxhub -it linuxhub-api`