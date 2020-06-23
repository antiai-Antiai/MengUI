import React from 'react';
import Button, { ButtonType, ButtonSize } from  './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

function App() {
  return (
    <div>
      {/* Button */}
      <section className="Button">
        <Button onClick={(e) => {e.preventDefault();alert('ddd')}}> Default </Button>
        <Button btnType={ButtonType.Primary}>Primary</Button>
        <Button btnType={ButtonType.Danger}> Danger </Button>
        <Button disabled> Hello </Button>
        <Button size={ButtonSize.Small}>small</Button>
        <Button size={ButtonSize.large}>Large</Button>
        <Button btnType={ButtonType.Link} href={'http://www.baidu.com'} target="_blank"> Link </Button>
        <Button btnType={ButtonType.Link} href={'http://www.baidu.com'} disabled> Disabled Link </Button>
      </section>
      {/* Menu */}
      <section className="Menu">
        <Menu defaultIndex='0' 
          onSelect={(index) => {alert(index)}} 
          defaultOpenSubMenus={['2']}
          mode={'vertical'}>
          <MenuItem disabled>
            cool link
          </MenuItem>
          <MenuItem>
            cool link2
          </MenuItem>
          <SubMenu title="dropdown">
            <MenuItem>
              cool link3 1
            </MenuItem>
            <MenuItem>
              cool link3 2
            </MenuItem>
          </SubMenu>
          <MenuItem>
            cool link3
          </MenuItem>
        </Menu>
      </section>
    </div>
  );
}

export default App;
