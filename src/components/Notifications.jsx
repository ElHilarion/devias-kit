import React from 'react';

function Notifications() {
    return (
        <div className="notifications">
            <div className="info__title">
                <h1>Notifications</h1>
                <p>Mange the notifications emailing</p>
            </div>
            <hr className="basic-info__hr"></hr>
            <div className="not-checkboxes">
                <div className="not__items">
                <h3>Notifications</h3>
                <div className="not__item">
                    <input id="not-email" type="checkbox" className="not__input"/>
                    <label for="not-email">Email</label>
                </div>
                <div className="not__item">
                    <input id="not-push" type="checkbox" className="not__input"/>
                    <label for="not-push">Push Notifications</label>
                </div>
                <p>For your mobile or tablet device</p>
                <div className="not__item">
                    <input id="not-messages" type="checkbox" className="not__input"/>
                    <label for="not-messages">Text Messages</label>
                </div>
                <div className="not__item">
                    <input id="not-calls" type="checkbox" className="not__input"/>
                    <label for="not-calls">Phone Calls</label>
                </div>
                </div>

                <div className="not__items">
                <h3>Messages</h3>
                <div className="not__item">
                    <input id="mess-email" type="checkbox" className="not__input"/>
                    <label for="mess-email">Email</label>
                </div>
                <div className="not__item">
                    <input id="mess-push" type="checkbox" className="not__input"/>
                    <label for="mess-push">Push Notifications</label>
                </div>
                <div className="not__item">
                    <input id="mess-text" type="checkbox" className="not__input"/>
                    <label for="mess-text">Text Messages</label>
                </div>
                </div>
            </div>
            <hr className="basic-info__hr"></hr>
            <button className="btn-save">
                Save
            </button>
        </div>
    )
}

export default Notifications;
