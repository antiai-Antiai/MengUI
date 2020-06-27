import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button' 

const blank_block = {
  width: '20px',
  display:'inline-block'
}
const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
) 

const buttonWithSize = () => (
  <> 
    <Button size="sm"> Small button </Button>
    <span style={blank_block}></span>
    <Button size="lg"> Large button </Button>
  </>
)

const buttonWithType = () => (
  <>
    <Button btnType="primary"> primary button </Button>
    <span style={blank_block}></span>
    <Button btnType="danger"> danger button </Button>
    <span style={blank_block}></span>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </>
)

const disabledButton = () => (
  <>
    <Button disabled>Disabled Button</Button>
    <span style={blank_block}></span>
    <Button disabled href="https://google.com"> Disabled Button </Button>
  </>
)
storiesOf('Button Component', module)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)
  .add('禁用状态下的 Button', disabledButton)