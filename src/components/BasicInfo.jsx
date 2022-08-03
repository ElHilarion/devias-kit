import React from 'react';

import "../scss/basicInfo.scss";

function BasicInfo() {
    return (
        <div className="basic-info">
            <div className="info__title">
                <h1>Basic Profile</h1>
                <p>The information can be edited from yuor profile page</p>
            </div>
            <hr className="basic-info__hr"></hr>
            <form>
                <div className="form-group">
                <input type="text" id="name" className="form__input" required/>
                <label for="name">First name</label>
                <p className="label-bottom">Please specify the first name</p>
                </div>
                <div className="form-group">
                <input type="text" id="last-name" className="form__name"  required/>
                <label for="last-name">Last name</label>
                <p className="label-bottom">Assistive text</p>
                </div>
                <div className="form-group">
                <input type="text" id="email" className="form__name" required/>
                <label for="email">Email</label>
                </div>
                <div className="form-group">
                <input type="tel" id="phone" className="form__name"  required/>
                <label for="phone">Phone</label>
                </div>
                <div className="form-group">
                <input type="text" id="country" className="form__name"  required/>
                <label for="phone">Country</label>
                </div>
                <div className="form-group">
                <input type="text" id="city" className="form__name"  required/>
                <label for="city">City</label>
                </div>
            </form>
            <hr className="basic-info__hr"></hr>
            <button className="btn-save">
                Save settings
            </button>
        </div>
    )
}

export default BasicInfo;
