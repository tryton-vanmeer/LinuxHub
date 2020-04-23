#!/usr/bin/env python3

from enum import Enum
import gi
gi.require_version("Libosinfo", "1.0")
from gi.repository import Libosinfo  # noqa: I202


class Distros(str, Enum):
    fedora = "fedora"
    ubuntu = "ubuntu"
    archlinux = "archlinux"
    debian = "debian"

    @property
    def string(self):
        if self.name == "fedora":
            return "Fedora"
        elif self.name == "ubuntu":
            return "Ubuntu"
        elif self.name == "archlinux":
            return "Arch Linux"
        elif self.name == "debian":
            return "Debian"


class OSInfo():
    """
    Wrapper around Libosinfo.
    """

    def __init__(self):
        self._init_db()
        self._init_os_list()

    def _init_db(self):
        """
        Initialize the internal Libosinfo.Db object.
        """
        loader = Libosinfo.Loader()
        loader.process_default_path()
        self._db = loader.get_db()

    def _init_os_list(self):
        """
        Initialize the internal OS List.
        """
        _list = self._db.get_os_list()
        # Create a list of Libosinfo.Os objects
        _os_list = [_list.get_nth(i) for i in range(_list.get_length())]
        # Filter list to contain only Linux
        self.os_list = [os for os in _os_list if os.get_family() == "linux"]

    def get_distro_os_list(self, distro_name):
        return [os for os in self.os_list if os.get_distro() == distro_name]


if __name__ == "__main__":
    osinfo = OSInfo()

    distros = [os.get_distro() for os in osinfo.os_list]

    print(set(distros))
