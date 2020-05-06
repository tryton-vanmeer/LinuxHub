import * as React from "react";
import { RouteProps } from 'react-router';

class Os extends React.Component<RouteProps, {}> {
    public render() {
        const os = this.props.match.params.os;

        return(
            <main>
                <h1 className="distro-header">{os}</h1>
            </main>
        )
    }
}

export default Os;