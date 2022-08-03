import React from 'react';

import "../scss/header.scss";

function Header() {
    return (
        <div className="header">
            <header>
            <div className="logo">
                <img className="logo__img" width={36} height={36} src="/img/logo.svg" alt="logo" />
                <h3 className="logo__text">Devias Kit</h3>
            </div>
            <div className="pro-version">
                <button>FREE</button>
                <p>
                See our PRO version for more design components & coded in React follow this link:
                <a href="https://devias.io/products/devias-kit-pro">https://devias.io/products/devias-kit-pro</a>
                </p>
            </div>
            <div className="icon">
                <button className="icon__notice">
                <img width={16} height={19} src="/img/notice.svg" alt="notice" />
                </button>
                <button className="icon__log-in-out">
                <img width={19} height={19} src="/img/log-in-out.svg" alt="log-in-out" />
                </button>
            </div>
            </header>
        </div>
    )
}

export default Header;
