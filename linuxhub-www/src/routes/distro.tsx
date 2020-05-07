import * as React from "react";
import { RouteProps } from 'react-router';
import ImageLink from "../components/imagelink";

class Distro extends React.Component<RouteProps, {}> {
    state = {
        name: "",
        os_list: []
    }

    public componentDidMount() {
        const { distro } = this.props.match.params;

        fetch("/api/distro")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                name: data[distro]["name"]
            });
        })
        .catch(console.log);

        fetch("/api/distro/" + distro)
        .then(res => res.json())
        .then((data) => {
            // Sort OS newest to oldest
            data = data.sort((a, b) => {
                // Some Distros have non-numeric id/versions.

                // Fedora Rawhide
                if (b.id == "Rawhide") {
                    return 1;
                }

                // Debian Testing
                if (b.id == "testing") {
                    return 1;
                }

                return (parseFloat(a.id) < parseFloat(b.id)) ? 1 : -1;
            });

            this.setState({
                os_list: data
            });
        })
    }

    public render() {
        const distro = this.props.match.params.distro;
        const logo = require("../assets/" + distro + ".svg").default

        return(
            <main>
                <h1>{this.state.name}</h1>

                <div className="columns is-multiline is-desktop">
                    {this.state.os_list.map((os => (
                        <div className="column is-one-quarter" key={os.id}>
                            <ImageLink
                                link={`/distro/${distro}/${os.id}`}
                                title={os.name}
                                img={logo}
                            />
                        </div>
                    )))}
                </div>
            </main>
        );
    }
}

export default Distro;