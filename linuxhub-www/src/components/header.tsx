import * as React from "react";

class Header extends React.Component<{}, {}> {
    private connect_hamburger() {
        document.addEventListener("DOMContentLoaded", () => {
            const $burger = document.querySelector(".navbar-burger");

            $burger.addEventListener("click", () => {
                const $target = document.getElementById("nav-menu");

                $burger.classList.toggle("is-active");
                $target.classList.toggle("is-active");
            });
        });
    }

    public render() {
        this.connect_hamburger();

        return(
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a id="navbar-logo" className="navbar-item" href="/">
                        <span>Linux</span><span>hub</span>
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="nav-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="nav-menu" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>About</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;