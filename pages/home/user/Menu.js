import React from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';

const Menu = () => {
  return (
    <BurgerMenu
      width={ 280 }
      styles={ {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px',
        },
        bmBurgerBars: {
          background: '#373a47',
        },
        bmCrossButton: {
          height: '24px',
          width: '24px',
        },
        bmCross: {
          background: '#bdc3c7',
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%',
        },
        bmMenu: {
          background: '#373a47',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em',
        },
        bmMorphShape: {
          fill: '#373a47',
        },
        bmItemList: {
          color: '#b8b7ad',
          padding: '0.8em',
        },
        bmItem: {
          display: 'inline-block',
          marginBottom: '10px',
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)',
        },
      } }
    >
      <a className="menu-item" href="/">Home</a>
      <a className="menu-item" href="/about">About</a>
      <a className="menu-item" href="/contact">Contact</a>
    </BurgerMenu>
  );
};

export default Menu;
