import * as React from "react";
import { RouteProps } from 'react-router';
import { withRouter } from "react-router-dom";
import ImageLink from "../components/imagelink";

class Distro extends React.Component<RouteProps, {}> {
    state = {
        name: "",
        os_list: []
    }

    public componentDidMount() {
        const id = this.props.match.params.id;

        fetch("/api/distro")
        .then(res => res.json())
        .then((data) => {
            this.setState({
                name: data[id]["name"]
            });
        })
        .catch(console.log);

        fetch("/api/distro/" + id)
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
        const id = this.props.match.params.id;
        const logo = require("../assets/" + id + ".svg").default

        return (
            <main>
                <h1 className="distro-header">{this.state.name}</h1>

                <div className="columns is-multiline is-desktop">
                    {this.state.os_list.map((os => (
                        <div className="column is-one-quarter" key={os.id}>
                            <ImageLink
                                link={"/distro/" + id + "/" + os.id}
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

export default withRouter(Distro);