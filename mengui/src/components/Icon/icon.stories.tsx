import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Icon from './icon' 

const defaultIcon = () => (
  <>
  <table>
    <tr>
      <td><Icon icon="ad" size="3x"/><p>ad</p></td>
      <td><Icon icon="address-book" size="3x"/><p>address-book</p></td>
      <td><Icon icon="address-card" size="3x"/><p>address-card</p></td>
      <td><Icon icon="adjust" size="3x"/><p>adjust</p></td>
      <td><Icon icon="align-center" size="3x"/><p>align-center</p></td>
      <td><Icon icon="align-justify" size="3x"/><p>align-justify</p></td>
      <td><Icon icon="align-left" size="3x"/><p>align-left</p></td>
    </tr>
    <tr>
      <td><Icon icon="align-right" size="3x"/><p>align-right</p></td>
      <td><Icon icon="angle-down" size="3x"/><p>angle-down</p></td>
      <td><Icon icon="angle-left" size="3x"/><p>angle-left</p></td>
      <td><Icon icon="angle-right" size="3x"/><p>angle-right</p></td>
      <td><Icon icon="angle-up" size="3x"/><p>angle-up</p></td>
      <td><Icon icon="arrow-up" size="3x"/><p>arrow-up</p></td>
      <td><Icon icon="arrow-down" size="3x"/><p>arrow-down</p></td>
    </tr>
    <tr>
      <td><Icon icon="arrow-left" size="3x"/><p>arrow-left</p></td>
      <td><Icon icon="arrow-right" size="3x"/><p>arrow-right</p></td>
      <td><Icon icon="home" size="3x"/><p>home</p></td>
      <td><Icon icon="house-user" size="3x"/><p>house-user</p></td>
      <td><Icon icon="phone-volume" size="3x"/><p>phone-volume</p></td>
      <td><Icon icon="phone" size="3x"/><p>phone</p></td>
      <td><Icon icon="phone-alt" size="3x"/><p>phone-alt</p></td>
    </tr>
    <tr>
      <td><Icon icon="headphones" size="3x"/><p>headphones</p></td>
      <td><Icon icon="headphones-alt" size="3x"/><p>headphones-alt</p></td>
      <td><Icon icon="microphone" size="3x"/><p>microphone</p></td>
      <td><Icon icon="microphone-alt" size="3x"/><p>microphone-alt</p></td>
      <td><Icon icon="receipt" size="3x"/><p>receipt</p></td>
      <td><Icon icon="shopping-cart" size="3x"/><p>shopping-cart</p></td>
      <td><Icon icon="thumbs-up" size="3x"/><p>thumbs-up</p></td>
    </tr>
    <tr>
      <td><Icon icon="thumbs-down" size="3x"/><p>thumbs-down</p></td>
      <td><Icon icon="star" size="3x"/><p>star</p></td>
      <td><Icon icon="heart" size="3x"/><p>heart</p></td>
      <td><Icon icon="bell" size="3x"/><p>bell</p></td>
      <td><Icon icon="camera" size="3x"/><p>camera</p></td>
      <td><Icon icon="bookmark" size="3x"/><p>bookmark</p></td>
    </tr>
  </table>
  </>
) 

// 不同主题的icon
const themeIcon = () => (
  <>
    <table>
    <tr>
      <td><Icon icon="star" size="3x"/><p>star</p></td>
      <td><Icon icon="star" size="3x" theme="primary"/><p>primary</p></td>
      <td><Icon icon="star" size="3x" theme="danger"/><p>danger</p></td>
      <td><Icon icon="star" size="3x" theme="secondary"/><p>secondary</p></td>
      <td><Icon icon="star" size="3x" theme="success"/><p>success</p></td>
      <td><Icon icon="star" size="3x" theme="info"/><p>info</p></td>
      <td><Icon icon="star" size="3x" theme="warning"/><p>warning</p></td>
    </tr>
    <tr>
    <td><Icon icon="star" size="3x" theme="light"/><p>light</p></td>
    <td><Icon icon="star" size="3x" theme="dark"/><p>dark</p></td>
    </tr>
    </table>
  </>
) 

// 不同尺寸的图标
const sizeIcon = () => (
  <>
    <table>
      <tr>
        <td><Icon icon="heart"/><p>default</p></td>
        <td><Icon icon="heart" size="sm"/><p>sm</p></td>
        <td><Icon icon="heart" size="lg"/><p>lg</p></td>
        <td><Icon icon="heart" size="1x"/><p>1x</p></td>
        <td><Icon icon="heart" size="2x"/><p>2x</p></td>
        <td><Icon icon="heart" size="3x"/><p>3x</p></td>
        <td><Icon icon="heart" size="4x"/><p>4x</p></td>
        <td><Icon icon="heart" size="5x"/><p>5x</p></td>
      </tr>
    <tr>
        <td><Icon icon="heart" size="6x"/><p>6x</p></td>
        <td><Icon icon="heart" size="7x"/><p>7x</p></td>
        <td><Icon icon="heart" size="8x"/><p>8x</p></td>
        <td><Icon icon="heart" size="9x"/><p>9x</p></td>
        <td><Icon icon="heart" size="10x"/><p>10x</p></td>
    </tr>
    </table>
  </>
)
storiesOf('Icon Component', module)
  .add('Icon', defaultIcon)
  .add('不同主题的Icon', themeIcon, {
    info: {
      text:`
        这里我们预设了9中主题，分别是默认主题、primary、danger、secondary、success、info、
        warning、light和dark
        当然你也可以直接通过给Icon添加color属性来改变其颜色。mengqu-ui支持fontawesome原先所有的API
        ### 代码展示
        ~~~js
        <Icon icon="star" size="3x" theme="primary"/>
        <Icon icon="star" size="3x" theme="danger"/>
        <Icon icon="star" size="3x" theme="secondary"/>
        <Icon icon="star" size="3x" theme="success"/>
        ...
        ~~~
      `
    }
  })
  .add('不同尺寸的Icon', sizeIcon, {
    info: {
      text:`
        mengqu-ui 可以通过 size 属性来控制图标的大小。size的值 从从小到大，总共有以下几种类型
        sm、lg、1x-10x
        ### 代码展示
        ~~~js
        <Icon icon="heart" size="sm"/>
        <Icon icon="heart" size="lg"/>
        <Icon icon="heart" size="1x"/>
        ...
        ~~~
      `
    }
  })