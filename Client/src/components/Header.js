import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: null
        }
    }

    componentDidMount() {
        fetch("/api/current_user", { method: "GET" })
            .then(res => res.json())
            .then(userInfo => {
                console.log("fetch");
                console.log(userInfo);
                if (userInfo.userID) {
                    this.setState({
                        auth: true
                    })
                } else {
                    this.setState({
                        auth: false
                    })
                }
            })
            .catch(error => {
                console.log("error");
                console.log(error);
            })
    }

    renderButton() {
        switch (this.state.auth) {
            case true:
                return <li><a href="/api/auth/logout">Logout</a></li>;
            case false:
                return (
                    <li><a href="/api/auth/google">Sign in with Google</a></li>
                );
            default:
                return;

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