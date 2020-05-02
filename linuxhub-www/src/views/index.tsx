import * as React from "react";
import ImageLink from "../components/imagelink";

class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <main id="view-index">
                <div className="columns is-desktop">
                    <div className="column">
                        <ImageLink
                            link="/fedora"
                            title="Fedora"
                            img="https://gitlab.gnome.org/GNOME/gnome-boxes-logos/-/raw/master/logos/fedora.svg"
                        />
                    </div>
                    <div className="column">
                        <ImageLink
                            link="/silverblue"
                            title="Silverblue"
                            img="https://gitlab.gnome.org/GNOME/gnome-boxes-logos/-/raw/master/logos/silverblue.svg"
                        />
                    </div>
                    <div className="column">
                        <ImageLink
                            link="/ubuntu"
                            title="Ubuntu"
                            img="https://gitlab.gnome.org/GNOME/gnome-boxes-logos/-/raw/master/logos/ubuntu.svg"
                        />
                    </div>
                    <div className="column">
                        <ImageLink
                            link="/debian"
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