import { useState } from 'react';

import './scss/menu.scss';
import './scss/section.scss';
import './scss/media.scss';

import Header from './components/Header';
import Menu from './components/Menu';
import SettingMenu from './components/SettingMenu';
import UploadPicture from './components/UploadPicture';
import BasicInfo from './components/BasicInfo';
import Notifications from './components/Notifications';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = (status) => {
    setOpenMenu(status);
  };

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Menu toggleOpenMenu={toggleOpenMenu} />

        {openMenu ?
        <aside className="menu--mobile">
          <button className="menu-icon menu-icon--cancel" onClick={() => toggleOpenMenu(false)}>
            <img src="./img/cancel.svg"/>
          </button>
          <div className="menu__header">
            <img className="item__img" src="/img/avatar.png" alt="Avatar" />
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
        :
        false}
        
        <section className='setting__profile'>
          <SettingMenu toggleOpenMenu={toggleOpenMenu} />
          <hr className="setting__hr"></hr>
          <div className="profile__blocks"> 
            <div className="block-1"> 
              <UploadPicture />
            </div>
            <div className="block-2"> 
              <BasicInfo />
              <Notifications />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
