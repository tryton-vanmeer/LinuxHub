import * as React from "react";
import {Link} from "react-router-dom";

interface ImageLinkProps {
    link: string;
    img: string;
    title: string;
};

class ImageLink extends React.Component<ImageLinkProps, {}> {
    public render() {
        const {link, img, title} = this.props;

        return (
            <Link to={link} className="imagelink">
                <img src={img} alt={title + " Logo"}/>
                <p>{title}</p>
            </Link>
        );
    }
}

export default ImageLink;