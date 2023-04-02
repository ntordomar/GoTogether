import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { IconButton, CloseButton  } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  } 

  handleMenuClick() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <div style={{ position: 'relative', top: '15px', left: '20px'  }}>
        <IconButton variant='outline'
            colorScheme='teal'
            aria-label='Menu'
            icon={<HamburgerIcon />} 
            fontSize='20px'
            onClick={this.handleMenuClick}/>
        <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
          <Menu
            isOpen={this.state.menuOpen}
            onStateChange={(state) => this.setState({ menuOpen: state.isOpen })}
            width={280}
            styles={{
              bmMenu: {
                background: '#f6e3da',
                padding: '2.5em 1.5em 0',
                fontSize: '1.15em'
              },
              bmBurgerButton: {
                position: 'absolute',
                width: '36px',
                height: '30px',
                left: '0',
                top: '0'
              },
              bmMenuWrap: {
                top: 0
              },
              bmItemList: {
                color: '#000000',
                padding: '0.8em',
                fontSize: '1.2rem', // ajusta el tamaño de fuente
                lineHeight: '1.8', // ajusta la altura de línea
                fontFamily: 'Montserrat, sans-serif', // ajusta la familia de fuentes
                fontWeight: '600' ,// ajusta el peso de fuente
                textDecoration: 'underline'

              },
              bmItem: {
                display: 'inline-block'
              },
              bmOverlay: {
                background: 'rgba(0, 0, 0, 0.3)'
              }
            }}
          >

<CloseButton onClick={this.handleMenuClick} size="l" position="absolute" top="0" right="0" m="4" />
            <br/> 
            <br/>
            <a id="inicio"  className="menu-item" href="/home/user">Inicio</a>
            <br />
             <br/>
            <a id="viajes"  className="menu-item" href="/home/main-menu">Mis Viajes</a>
            <br />
             <br/>
            <a id="notificaciones"  className="menu-item" href="/home/notificaciones">Notificaciones</a>
            <br /> 
            <br/>
            <a id="Sign out"  className="menu-item" href="/home">Sign out</a>
          </Menu>
        </div>
      </div>
    );
  }
}

export default BurgerMenu;

    
