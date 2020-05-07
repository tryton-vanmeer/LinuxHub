import * as React from "react";

interface DownloadPanelProps {
    media: object[],
}

class DownloadPanel extends React.Component<DownloadPanelProps, {}> {
    public render() {
        const { media } = this.props;

        return(
            <article className="panel is-link">
                <p className="panel-heading">
                    DOWNLOAD
                </p>
                <a className="panel-block">
                    <span className="panel-icon">
                        <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    bulma
                </a>
            </article>
        );
    }
}

export default DownloadPanel;