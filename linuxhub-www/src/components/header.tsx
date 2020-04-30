import * as React from "react";

class Header extends React.Component {
    public render() {
        return(
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a id="navbar-logo" class="navbar-item" href="/">
                        <span>Linux</span><span>hub</span>
                    </a>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
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