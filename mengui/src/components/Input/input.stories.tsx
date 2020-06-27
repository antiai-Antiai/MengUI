import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Input } from './input'
const defaultInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="placeholder"
    onChange={action('changed')}
  />
)
const disabledInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="disabled input"
    disabled 
  />
)

const iconInput = () => (
  <Input
    style={{width: '300px'}}
    placeholder="input with icon"
    icon="search"
  />  
)

const sizeInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      defaultValue="large size"
      size="lg"
    />
    <Input
      style={{width: '300px'}}
      placeholder="small size"
      size="sm"
    />
  </>
)

const pandInput = () => (
  <>
    <Input
      style={{width: '300px'}}
      defaultValue="prepend text"
      prepend="https://"
    />
    <Input
      style={{width: '300px'}}
      defaultValue="google"
      append=".com"
    />
    
  </>
)


storiesOf('Input component', module)
  .add('Input', defaultInput, {
    info: {
      text:`
        ### 代码展示
        ~~~js
        <Input
          style={{width: '300px'}}
          placeholder="placeholder"
          onChange={action('changed')}
        />
        ~~~
      `
    }
  })
  .add('被禁用的 Input', disabledInput, {
    info:{
      text:`
        可以通过传递disabled的参数来禁用输入框。
        ### 代码展示
        ~~~js
        <Input
          style={{width: '300px'}}
          placeholder="disabled input"
          disabled 
        />
        ~~~
      `
    }
  })
  .add('带图标的 Input', iconInput, {
    info:{
      text:`
        也可以在 Input 组件中传入图标。
        ### 代码展示
        ~~~js
        <Input
          style={{width: '300px'}}
          placeholder="input with icon"
          icon="search"
        />  
        ~~~
      `
    }
  })
  .add('大小不同的 Input', sizeInput, {
    info:{
      text:`
        可以通过size的来控制 Input框 的大小，可选择的值有 sm 和 lg。
        ### 代码展示
        ~~~js
        <Input
          style={{width: '300px'}}
          defaultValue="large size"
          size="lg"
        />
        ~~~
        ***
        ~~~js
        <Input
          style={{width: '300px'}}
          placeholder="small size"
          size="sm"
        />
        ~~~
      `
    }
  })
  .add('带前后缀的 Input', pandInput, {
    info:{
      text:`
        通过传入 prepend 参数来指定 Input框默认的前缀名称。
        ### 代码展示
        ~~~js
        <Input
          style={{width: '300px'}}
          defaultValue="prepend text"
          prepend="https://"
        />
        ~~~
        通过传入 append 参数来指定 Input框默认的后缀名称。
        ~~~js
        <Input
          style={{width: '300px'}}
          defaultValue="google"
          append=".com"
        />
        ~~~
      `
    }
  })
