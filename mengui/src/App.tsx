import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import Button from  './components/Button/button'

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'

import Icon from './components/Icon/icon'
library.add(fas)

function App() {
  const [open, setOpen] = useState(true)

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    console.log(files)
    if(files){
      const uploadedFile = files[0]
      const formData = new FormData()
      formData.append(uploadedFile.name, uploadedFile)
      axios.post("http://jsonplaceholder.typicode.com/posts", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(resp => {
        console.log(resp)
      }).catch(err => {
        console.log(err)
      })
    }
  }
  return (
    <div>
      {/* Button */}
      <section className="Button">
        <Button onClick={(e) => {e.preventDefault();alert('ddd')}}> Default </Button>
        <Button btnType="primary">Primary</Button>
        <Button btnType="danger"> Danger </Button>
        <Button disabled> Hello </Button>
        <Button size="sm">small</Button>
        <Button size="sm">Large</Button>
        <Button btnType="link" href={'http://www.baidu.com'} target="_blank"> Link </Button>
        <Button btnType="link" href={'http://www.baidu.com'} disabled> Disabled Link </Button>
      </section>
      {/* Menu */}
      <section className="Menu">
        <Menu defaultIndex='0' 
          onSelect={(index) => {alert(index)}} 
          defaultOpenSubMenus={['2']}
          >
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
      {/* icon */}
      <section className="icon">
        <Icon icon="arrow-down" theme="primary" size="4x"/>
      </section>
      {/* form */}
      <section className="form">
        <div>
            <input type="file" name="myFile" onChange={handleFileChange}/>
        </div>
      </section>
    </div>
  );
}

export default App;
