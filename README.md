# LinuxHub

## Deploying Example Container

### Build

```sh
podman build -t linuxhub .
```

### Run

```sh
podman run --rm -p 8080:80 -it linuxhub
```