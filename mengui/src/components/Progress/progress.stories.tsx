import React, { useState } from 'react'
import { storiesOf } from '@storybook/react'
import { Progress } from './progress'
const defaultProgress = () => (
  <Progress
    percent={30}>
  </Progress>
)

const customerHeightProgress = () => (
    <>
        <p>高度为10</p>
        <Progress
        percent={30}
        strokeHeight={10}
        >
        </Progress>
        <div style={{height:'50px'}}></div>
        <p>高度为20</p>
        <Progress
        percent={45}
        strokeHeight={20}
        >
    </Progress>
   </>
  )

const showTextProgress = () => (
    <>
        <p>不显示进度数据</p>
        <Progress
        showText={false}
        percent={30}
        />
        <div style={{height:'50px'}}></div>
        <p>显示进度数据</p>
        <Progress
        showText={true}
        percent={45}
        />
    </>
)

const themeProgress = () => (
    <>
        <p>primary</p>
        <Progress
        theme="primary"
        showText={false}
        percent={30}
        />
        <div style={{height:'50px'}}></div>
        <p>success</p>
        <Progress
        theme="success"
        showText={true}
        percent={45}
        />
        <div style={{height:'50px'}}></div>
        <p>danger</p>
        <Progress
        theme="danger"
        showText={true}
        percent={45}
        />
    </>
)

storiesOf('Progress component', module)
  .add('Progress', defaultProgress)
  .add('不同高度的Progress', customerHeightProgress,{
      info: {
          text: `
            通过 **strokeHeight** 控制进度条高度。
            ### 示例代码
            ~~~js
            <Progress
                percent={30}
                strokeHeight={10}
                >
            ~~~
            ***
            ~~~js
            <Progress
                percent={45}
                strokeHeight={20}
                >
            ~~~
          `
      }
  })
  .add('是否显示进度数据', showTextProgress, {
    info: {
        text: `
          通过 **showText** 控制是否显示进度数据。
          ### 示例代码
          ~~~js
          <Progress
            showText={false}
            percent={30}
            />
          ~~~
          ***
          ~~~js
          <Progress
            showText={true}
            percent={45}
            />
          ~~~
        `
    }
  })
  .add('不同主题的Progress',themeProgress, {
    info: {
        text: `
          通过 **theme** 控制进度条的主题，主题的分类跟 **Button**的分类类似。
          ### 示例代码
          ~~~js
          <Progress
            theme="primary"
            showText={false}
            percent={30}
            />
          ~~~
          ***
          ~~~js
          <Progress
            theme="success"
            showText={true}
            percent={45}
            />
          ~~~
          ***
          ~~~js
          <Progress
            theme="danger"
            showText={true}
            percent={45}
            />
          ~~~
        `
    }
  })