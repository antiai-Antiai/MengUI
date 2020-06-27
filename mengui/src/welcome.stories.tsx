import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <h1>欢迎来到 mengqu-ui 组件库</h1>
        <p>mengqu-ui 是由追梦人团队推出的一套组件库。基于React Hook、typescript构建。欢迎您的使用！</p>
        <h3>安装试试</h3>
        <code>
          npm install mengqu-ui --save
        </code>
      </>
    )
  }, { info : { disable: true }})