import React from 'react';

function SettingMenu({toggleOpenMenu}) {
    return (
        <div className="setting__profile-menu">
            <button className="menu-icon" onClick={() => toggleOpenMenu(true)}>
              <img width={25} height={25} src="./img/menu.svg"/>
            </button>
            <div className="setting__menu">
              <nav>
                  <button>
                    <p>Profile</p>
                  </button>
                  <button>
                    <p>Account</p>
                  </button>
                  <button>
                    <p>Price Plans</p>
                  </button>
              </nav>
            </div>
        </div>
    )
}

export default SettingMenu;
