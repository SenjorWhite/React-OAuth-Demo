import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: this.props.auth
        }
    }

    renderButton() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li><a href="/api/auth/google">Sign in with Google</a></li>
                );
            default:
                return <li><a href="/api/auth/logout">Logout</a></li>
        }
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <ul href="#" className="brand-logo">Google Oauth Demo</ul>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            {this.renderButton()}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;