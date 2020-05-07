import * as React from "react";
import { RouteProps } from "react-router";
import DownloadPanel from "../components/downloadpanel";

class Os extends React.Component<RouteProps, {}> {
    state = {
        name: "",
        codename: "",
        eol: "",
        media: []
    }

    public componentDidMount() {
        const distro = this.props.match.params.distro;
        const version = this.props.match.params.os;

        fetch(`/api/distro/${distro}/${version}`)
        .then(res => res.json())
        .then((data) => {
            this.setState({
                name: data["name"],
                codename: data["codename"],
                eol: data["eol"],
                media: data["media"],
            });
        });
    }

    public render() {
        return(
            <main>
                <h1 className="distro-header">{this.state.name}</h1>
                <h2 className="distro-header">{this.state.codename}</h2>
                <br/>

                {/* <p>{this.state.eol}</p> */}

                <DownloadPanel media={this.state.media} />
            </main>
        )
    }
}

export default Os;