import * as React from "react";
import Header from "./header";
import ImageLink from "./imagelink";

class App extends React.Component<{}, {}> {
    public render() {
        return (
            <>
            <Header />
            <ImageLink
                title="Fedora"
                img="https://gitlab.gnome.org/GNOME/gnome-boxes-logos/-/raw/master/logos/fedora.svg"
            />
            </>
        );
    }
}

export default App;