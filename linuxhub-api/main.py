from fastapi import FastAPI
from osinfo import OSInfo

app = FastAPI()
osinfo = OSInfo()


@app.get("/distro")
def read_distro():
    return osinfo.DISTROS
