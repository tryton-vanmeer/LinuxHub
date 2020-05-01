import * as React from "react";
import Header from "../components/header";
import ImageLink from "../components/imagelink";

class Index extends React.Component<{}, {}> {
    public render() {
        return (
            <>
            <Header />
            <ImageLink
                link="/fedora"
                title="Fedora"
                img="https://gitlab.gnome.org/GNOME/gnome-boxes-logos/-/raw/master/logos/fedora.svg"
            />
            </>
        )
    }
}

export default Index;