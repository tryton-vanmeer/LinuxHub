import * as React from "react";
import ImageLink from "../components/imagelink";

class Home extends React.Component<{}, {}> {
    public render() {
        return (
            <main>
                <div className="columns is-desktop">
                    <div className="column">
                        <ImageLink
                            link="/fedora"
                            title="Fedora"
                            img={require("../assets/fedora.svg").default}
                        />
                    </div>
                    <div className="column">
                        <ImageLink
                            link="/silverblue"
                            title="Silverblue"
                            img={require("../assets/silverblue.svg").default}
                        />
                    </div>
                    <div className="column">
                        <ImageLink
                            link="/ubuntu"
                            title="Ubuntu"
                            img={require("../assets/ubuntu.svg").default}
                        />
                    </div>
                    <div className="column">
                        <ImageLink
                            link="/debian"
                            title="Debian"
                            img={require("../assets/debian.svg").default}
                        />
                    </div>
                </div>
            </main>
        )
    }
}

export default Home;