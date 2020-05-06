import * as React from "react";
import { RouteProps } from 'react-router';
import { withRouter } from "react-router-dom";

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
        return (
            <main>
                <h1 className="distro-header">{this.state.name}</h1>

                {this.state.os_list.map((os => (
                    <p>{os.name} => {os.id}</p>
                )))}
            </main>
        );
    }
}

export default withRouter(Distro);