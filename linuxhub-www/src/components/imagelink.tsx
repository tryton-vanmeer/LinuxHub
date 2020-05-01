import * as React from "react";

interface ImageLinkProps {
    link: string;
    img: string;
    title: string;
};

class ImageLink extends React.Component<ImageLinkProps, {}> {
    public render() {
        const {link, img, title} = this.props;

        return (
            <a className="imagelink" href={link}>
                <img src={img} alt={title + " Logo"}/>
                <p>{title}</p>
            </a>
        );
    }
}

export default ImageLink;