import { useState } from 'react';

import './scss/main.scss';
import './scss/menu.scss';
import './scss/media.scss';

import Header from './components/Header';
import MenuDesctop from './components/MenuDesctop';
import MenuMobile from './components/MenuMobile';
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
        <MenuDesctop toggleOpenMenu={toggleOpenMenu} />
        {openMenu ?
          <MenuMobile toggleOpenMenu={toggleOpenMenu}/>
          :false
        }
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
