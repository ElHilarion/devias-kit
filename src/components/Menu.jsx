import React from 'react'

function Menu({toggleOpenMenu}) {
    return (
        <aside className="menu--desctop">
          <button className="menu-icon menu-icon--cancel" onClick={() => toggleOpenMenu(false)}>
            <img width={30} height={30} src="./img/cancel.svg"/>
          </button>
          <div className="menu__header">
            <img className="item__img" width={100} height={100} src="/img/avatar.png" alt="Avatar" />
            <h3>Roman Kutepov</h3>
            <p>Brain Director</p>
          </div>
          <nav className="menu__item">
              <hr></hr>
              <button className="item">
                <img className="item__img" width={19} height={19} src="/img/dashboard.svg" alt="Dashboard" />
                <p>Dashboard</p>
              </button>
              <button className="item">
                <img className="item__img" width={19} height={19} src="/img/users.svg" alt="Users" />
                <p>Users</p>
              </button>
              <button className="item">
                <img className="item__img" width={19} height={19} src="/img/products.svg" alt="Products" />
                <p>Products</p>
              </button>
              <button className="item">
                <img className="item__img" width={19} height={19} src="/img/auth.svg" alt="Authentication" />
                <p>Authentication</p>
              </button>
              <button className="item">
                <img className="item__img" width={19} height={19} src="/img/typography.svg" alt="Typography" />
                <p>Typography</p>
              </button>
              <button className="item">
                <img className="item__img" width={19} height={19} src="/img/icons-images.svg" alt="Icons & Images" />
                <p>Icons & Images</p>
              </button>
              <hr className="hr-bottom"></hr>
              <p className="item-footer">Support</p>
              <button className="item">
                <img className="item__img" width={19} height={19} src="/img/support.svg" alt="Support" />
                <p>Support</p>
              </button>
          </nav>
        </aside>
    )
}

export default Menu;
