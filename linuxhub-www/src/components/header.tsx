import * as React from "react";

class Header extends React.Component<{}, {}> {
    public render() {
        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a id="navbar-logo" className="navbar-item" href="/">
                        <span>Linux</span><span>hub</span>
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>About</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;