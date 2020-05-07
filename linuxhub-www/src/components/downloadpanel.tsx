import * as React from "react";
import * as Path from "path";

interface Media {
    url: string,
    name: string,
    arch: string
}

interface DownloadPanelProps {
    media: Media[],
}

class DownloadPanel extends React.Component<DownloadPanelProps, {}> {
    private get_name(media: Media) {
        var name = media.name;

        if (name == null) {
            // Get the filename
            var name = Path.basename(media.url);

            // Remove the extension
            name = name.slice(0, -4);

            //Replace hyphens with spaces, except between numbers
            name = name.replace(new RegExp("([a-z])[-]([a-z])", "gi"), "$1 $2");
            name = name.replace(new RegExp("([a-z])[-]([0-9])", "gi"), "$1 $2");
            name = name.replace(new RegExp("([0-9])[-]([a-z])", "gi"), "$1 $2");

            // Remove arch
            name = name.replace(new RegExp("x86_64[-]?"), "");
            name = name.replace(new RegExp("amd64[-]?"), "");
            name = name.replace(new RegExp("aarch64[-]?"), "");
            name = name.replace(new RegExp("arm64[-]?"), "");
            name = name.replace(new RegExp("armhfp[-]?"), "");
            name = name.replace(new RegExp("ppc64el[-]?"), "");
            name = name.replace(new RegExp("s390x[-]?"), "");
        }

        return name;
    }

    public render() {
        const { media } = this.props;

        return(
            <article className="panel is-link">
                <p className="panel-heading">
                    DOWNLOAD
                </p>

                {this.props.media.map((media => (
                    <a className="panel-block" href={media.url}>
                        <span className="panel-icon">
                            <i className="fas fa-compact-disc" aria-hidden="true" />
                        </span>
                        {this.get_name(media)} ({media.arch})
                    </a>
                )))}
            </article>
        );
    }
}

export default DownloadPanel;