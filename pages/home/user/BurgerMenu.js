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
      <div style={{ position: 'relative', top: '20px', left: '20px'  }}>
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
                    background: '#373a47',
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
                    color: '#b8b7ad',
                    padding: '0.8em'
                  },
                  bmItem: {
                    display: 'inline-block'
                  },
                  bmOverlay: {
                    background: 'rgba(0, 0, 0, 0.3)'
                  }
            }}
          >

<CloseButton onClick={this.handleMenuClick} size="md" position="absolute" top="0" right="0" m="4" />
            <br/>
            <a id="inicio"  className="menu-item" href="/home/user">Inicio</a>
            <br />
            <a id="viajes"  className="menu-item" href="/home/main-menu">Mis Viajes</a>
            <br />
            <a id="notificaciones"  className="menu-item" href="/home/notificaciones">Notificaciones</a>
          </Menu>
        </div>
      </div>
    );
  }
}

export default BurgerMenu;

    
