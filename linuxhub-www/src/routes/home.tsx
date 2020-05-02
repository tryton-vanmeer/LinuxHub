import * as React from "react";
import ImageLink from "../components/imagelink";

class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <main>
                <div className="columns is-desktop">
                    <div className="column">
                        <ImageLink
                            link="/distro/fedora"
                            title="Fedora"
                            img="https://gitlab.gnome.org/GNOME/gnome-boxes-logos/-/raw/master/logos/fedora.svg"
                        />
                    </div>
                    <div className="column">
                        <ImageLink
                            link="/distro/silverblue"
                            title="Silverblue"
                            img="https://gitlab.gnome.org/GNOME/gnome-boxes-logos/-/raw/master/logos/silverblue.svg"
                        />
                    </div>
                    <div className="column">
                        <ImageLink
                            link="/distro/ubuntu"
                            title="Ubuntu"
                            img="https://gitlab.gnome.org/GNOME/gnome-boxes-logos/-/raw/master/logos/ubuntu.svg"
                        />
                    </div>
                    <div className="column">
                        <ImageLink
                            link="/distro/debian"
                            title="Debian"
                            img="https://gitlab.gnome.org/GNOME/gnome-boxes-logos/-/raw/master/logos/debian.svg"
                        />
                    </div>
                </div>
            </main>
        )
    }
}

export default Index;