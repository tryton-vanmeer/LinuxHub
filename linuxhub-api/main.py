from fastapi import FastAPI, HTTPException
from osinfo import OSInfo, Distro

app = FastAPI()
osinfo = OSInfo()


@app.get("/distro")
def read_distros():
    data = []
    for distro in Distro:
        data.append({"id": distro.value, "name": distro.string})

    return data


@app.get("/distro/{distro_id}")
def read_distro(distro_id: Distro):
    data = []
    os_list = osinfo.get_distro_os_list(distro_id)

    for os in os_list:
        data.append({"id": os.get_version(), "name": os.get_name()})

    return data


@app.get("/distro/{distro_id}/{os_id}")
def read_distro_os(distro_id: Distro, os_id: str):
    os = osinfo.get_distro_os(distro_id, os_id)

    if os is None:
        raise HTTPException(status_code=404, detail="OS not found")

    return {
        "distro_id": distro_id.value,
        "distro_name": distro_id.string,
        "name": os.name,
        "codename": os.codename,
        "eol": os.eol,
        "version": os.version,
    }
