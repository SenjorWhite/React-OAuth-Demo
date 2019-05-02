import React from 'react';

function Dashboard(props) {
    return (
        <div className="row">
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{getGreeting(props.userInfo)}</span>
                    <p>Thank you for coming here.</p>
                </div>
                <div className="card-action">
                    <a href="https://www.linkedin.com/in/senjorpai/">Go to Senjor's LinkedIn</a>
                </div>
            </div>
        </div>
    );

}

function getGreeting(userInfo) {
    return (
        "Welcome, " + userInfo.userName + "!"
    );
}

export default Dashboard;