
import './scss/menu.scss';

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
            <img className="logo__img" width={36} height={36} src="/img/logo.svg" alt="logo" />
            <h3 className="logo__text">Devias Kit</h3>
        </div>
        <div className="pro-version">
          <button>FREE</button>
          <p>See our PRO version for more design components & coded in React follow this link:</p>
          <a href="https://devias.io/products/devias-kit-pro">https://devias.io/products/devias-kit-pro</a>
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
      <div className="main">
        <aside className="menu">
          <div className="menu__header">
            <img className="item__img" width={100} height={100} src="/img/avatar.png" alt="Avatar" />
            <h3>Roman Kutepov</h3>
            <p>Brain Director</p>
          </div>
          <hr></hr>
          <nav className="menu__item">
            <ul>
              <li className="item">
                <img className="item__img" width={19} height={19} src="/img/dashboard.svg" alt="Dashboard" />
                <p>Dashboard</p>
              </li>
              <li className="item">
                <img className="item__img" width={19} height={19} src="/img/users.svg" alt="Users" />
                <p>Users</p>
              </li>
              <li className="item">
                <img className="item__img" width={19} height={19} src="/img/products.svg" alt="Products" />
                <p>Products</p>
              </li>
              <li className="item">
                <img className="item__img" width={19} height={19} src="/img/auth.svg" alt="Authentication" />
                <p>Authentication</p>
              </li>
              <li className="item">
                <img className="item__img" width={19} height={19} src="/img/typography.svg" alt="Typography" />
                <p>Typography</p>
              </li>
              <li className="item">
                <img className="item__img" width={19} height={19} src="/img/icons-images.svg" alt="Icons & Images" />
                <p>Icons & Images</p>
              </li>
              <hr className="hr-bottom"></hr>
              <p className="item-footer">Support</p>
              <li className="item">
                <img className="item__img" width={19} height={19} src="/img/support.svg" alt="Support" />
                <p>Support</p>
              </li>
            </ul>
          </nav>
        </aside>
        <section>
          <p>Section</p>
        </section>
      </div>
    </div>
  );
}

export default App;
