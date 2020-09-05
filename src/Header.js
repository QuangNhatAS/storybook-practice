import React from 'react';
import './Header.css';
import settingsIcon from './icon/settings.svg';
import menuIcon1 from './icon/menu.svg';
import menuIcon2 from './icon/menu2.svg';

function Header() {
  return (
    <div className='header'>
      <div className="header__top">
        <h1>Bài viết</h1>
        <div className="header__btn">
          <button>
            <img src={settingsIcon} width={20} />
            <h3>Bộ lọc</h3>
          </button>
          <button>
            <img src={settingsIcon} width={20}/>
            <h3>Quản lý bài viết</h3>
          </button>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__menu">
          <img src={menuIcon1} width={32}/>
          <p>Xem theo danh sách</p>
        </div>
        <div className="header__menu">
          <img src={menuIcon2} width={32}/>
          <p>Xem theo danh sách</p>
        </div>
      </div>
    </div>
  )
}

export default Header
