import * as React from "react";
import { RouteProps } from 'react-router';
import { withRouter } from "react-router-dom";

class Distro extends React.Component<RouteProps, {}> {
    state = {
        name: "",
        data: []
    }

    public componentDidMount() {
        const id = this.props.match.params.id;

        fetch("/api/distro")
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            this.setState({
                name: data[id]["name"]
            });
        })
        .catch(console.log);

        fetch("/api/distro/" + id)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                data: data
            });
        })
        .catch(console.log);
    }

    public render() {
        return (
            <main>
                <h1 className="distro-header">{this.state.name}</h1>

                <div>
                    {JSON.stringify(this.state.data, null, 2)}
                </div>
            </main>
        );
    }
}

export default withRouter(Distro);