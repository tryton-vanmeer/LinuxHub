from fastapi import FastAPI
from osinfo import OSInfo, Distros

app = FastAPI()
osinfo = OSInfo()


@app.get("/distro")
def read_distros():
    data = []
    for distro in Distros:
        data.append({"id": distro.name, "name": distro.value})

    return data


@app.get("/distro/{id}")
def read_distro(id: str):
    pass
