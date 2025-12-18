import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';
import logo from '../../assets/react.svg'; // Logo của bạn

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <h1 className="site-title">Website của tôi</h1>
      </div>
      <div className='site-title'>
        <span>Shop trái cây</span>
      </div>
      <div>
        <span className='site-title'>Nguyễn Cát Tường</span>
      </div>
      
    </header>
  );
};

export default Header;
