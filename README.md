# LinuxHub

## Running

### Back-End

```
$ cd linuxhub-api

# Create and source virtualenv

$ pip install -r requirements.txt
$ uvicorn --reload main:app
```

### Front-End

```
$ cd linuxhub-www
$ npm i
$ npm run start

# Point your web browser to http://localhost:8080
```

## Container

Running the example container.

```
$ cd linuxhub-www
# npm run build
```

```
$ podman build -t linuxhub .
$ podman run --rm -p 8080:80 -it linuxhub
```