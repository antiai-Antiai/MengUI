import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Menu from './menu' 
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const defaultMenu = () => (
  <>
    <Menu>
        <MenuItem>
            菜单一
        </MenuItem>
        <MenuItem>
            菜单二
        </MenuItem>
        <MenuItem>
            菜单三
        </MenuItem>
    </Menu>
  </>
) 

const verticalMenu = () => (
    <>
    <Menu mode="vertical">
        <MenuItem>
            菜单一
        </MenuItem>
        <MenuItem>
            菜单二
        </MenuItem>
        <MenuItem>
            菜单三
        </MenuItem>
    </Menu>
    </>
)
const hasHorizontalSub = () => (
    <>
        <Menu>
            <MenuItem>
                菜单一
            </MenuItem>
            <MenuItem>
                菜单二
            </MenuItem>
            <SubMenu title="菜单三">
                <MenuItem>
                    菜单三-1
                </MenuItem>
                <MenuItem>
                    菜单三-1
                </MenuItem>
            </SubMenu>
        </Menu>
    </>
)

const hasVerticalSub = () => (
    <>
        <Menu mode="vertical">
            <MenuItem>
                菜单一
            </MenuItem>
            <MenuItem>
                菜单二
            </MenuItem>
            <SubMenu title="菜单三">
                <MenuItem>
                    菜单三-1
                </MenuItem>
                <MenuItem>
                    菜单三-1
                </MenuItem>
            </SubMenu>
        </Menu>
    </>
)

storiesOf('Menu Component', module)
  .add('Menu', defaultMenu, {
      info: {
          text: `
            页面中最常用的菜单组件

            ### 引用方法
            ~~~js
            import { Menu, MenuItem } from 'mengqu-ui'
            ~~~

            ### 使用方法
            ~~~js
            <Menu>
                <MenuItem>
                    菜单一
                </MenuItem>
                <MenuItem>
                    菜单二
                </MenuItem>
                <MenuItem>
                    菜单三
                </MenuItem>
            </Menu>
            ~~~
          `
      }
  })
  .add('垂直菜单列表',verticalMenu,{
      info: {
          text: `
            垂直菜单列表。可以给Menu组件传入mode属性来控制菜单水平/垂直显示。
            ### 引用方法
            ~~~js
            import { Menu, MenuItem } from 'mengqu-ui'
            ~~~

            ### 使用方法
            ~~~js
            <Menu mode="vertical">
                <MenuItem>
                    菜单一
                </MenuItem>
                <MenuItem>
                    菜单二
                </MenuItem>
                <MenuItem>
                    菜单三
                </MenuItem>
            </Menu>
            ~~~
          `
      }
  })
  .add('水平方向带有子菜单的Menu',hasHorizontalSub, {
      info:{
          text: `
          ### 引用方法
          ~~~js
          import { Menu, MenuItem, SubMenu } from 'mengqu-ui'
          ~~~

          ### 使用方法
          ~~~js
          <Menu>
            <MenuItem>
                菜单一
            </MenuItem>
            <MenuItem>
                菜单二
            </MenuItem>
            <SubMenu title="菜单三">
                <MenuItem>
                    菜单三-1
                </MenuItem>
                <MenuItem>
                    菜单三-1
                </MenuItem>
            </SubMenu>
        </Menu>
          ~~~
          `
      }
  })
  .add('垂直方向带有子菜单的Menu', hasVerticalSub, {
    info: {
        text: `
          ### 引用方法
          ~~~js
          import { Menu, MenuItem } from 'mengqu-ui'
          ~~~

          ### 使用方法
          ~~~js
          <Menu mode="vertical">
                <MenuItem>
                    菜单一
                </MenuItem>
                <MenuItem>
                    菜单二
                </MenuItem>
                <SubMenu title="菜单三">
                    <MenuItem>
                        菜单三-1
                    </MenuItem>
                    <MenuItem>
                        菜单三-1
                    </MenuItem>
                </SubMenu>
            </Menu>
          ~~~
        `
    }
  })
  