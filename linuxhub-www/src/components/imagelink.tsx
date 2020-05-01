import * as React from "react";

interface ImageLinkProps {
    title: string;
    img: string;
};

class ImageLink extends React.Component<ImageLinkProps, {}> {
    public render() {
        const {title, img} = this.props;

        return (
            <a className="imagelink">
                <img src={img} alt={title + " Logo"}/>
                <p>{title}</p>
            </a>
        );
    }
}

export default ImageLink;