import * as React from "react";
import { RouteProps } from 'react-router';
import { withRouter } from "react-router-dom";

class Distro extends React.Component<RouteProps, {}> {
    state = {
        id: "",
        data: []
    }

    public componentDidMount() {
        const id = this.props.match.params.id;

        fetch("/api/distro/" + id)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                id: id,
                data: data
            });
            console.log(data);
        })
        .catch(console.log);
    }

    public render() {
        return (
            <main>
                <h1 className="distro-header">{this.state.id}</h1>

                <div>
                    {JSON.stringify(this.state.data, null, 2)}
                </div>
            </main>
        );
    }
}

export default withRouter(Distro);