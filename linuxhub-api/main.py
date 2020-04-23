from fastapi import FastAPI
from osinfo import OSInfo, Distros

app = FastAPI()
osinfo = OSInfo()


@app.get("/distro")
def read_distros():
    data = []
    for distro in Distros:
        data.append({"id": distro.value, "name": distro.string})

    return data


@app.get("/distro/{distro_id}")
def read_distro(distro_id: Distros):
    data = []
    os_list = osinfo.get_os_list_by_distro(distro_id)

    for os in os_list:
        data.append({"id": os.get_short_id(), "name": os.get_name()})

    return data
