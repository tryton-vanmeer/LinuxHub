import * as React from "react";
import { RouteProps } from 'react-router';
import { withRouter } from "react-router-dom";

class Distro extends React.Component<RouteProps, {}> {
    public render() {
        const { id } = this.props.match.params;

        return (
            <main>
                <h1>{id}</h1>
            </main>
        );
    }
}

export default withRouter(Distro);