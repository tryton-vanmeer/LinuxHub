# LinuxHub

## Building

### LinuxHub Front-End

```
$ cd linuxhub-www
$ npm i
$ npm run build
```

### Container

```
$ podman build -t linuxhub .
```

## Running

### Container

```
$ podman run --rm -p 8080:80 -it linuxhub
```