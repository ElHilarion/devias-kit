
import './scss/menu.scss';
import './scss/section.scss';
import './scss/media.scss';
import { useState } from 'react';


function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleOpenMenu = (status) => {
    setOpenMenu(status);
  };

  console.log(openMenu);

  return (
    <div className="App">
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
      <div className="main">
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
          <hr className="setting__hr"></hr>
          <div className="profile__blocks"> 
            <div className="block-1"> 
              <div className="upload-picture">
                <div className="upload__info">
                  <div className="picture-info">
                    <h1>Adrian Stefan</h1>
                    <p>Rm. Valcea, Romania</p>
                    <p>4:32PM (GMT-4)</p>
                  </div>
                  <img className="upload__img" width={140} height={140} src="/img/adrian_stefan.png" alt="uploaded picture" />
                </div>
                <hr className="upload-hr"></hr>
                <div className="upload-buttons">
                  <button className="btn btn__upload">UPLOAD PICTURE</button>
                  <button className="btn btn__remove">REMOVE PICTURE</button>
                </div>
              </div>
            </div>

            <div className="block-2"> 
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
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
}

export default App;
