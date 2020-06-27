import React  from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Upload } from './upload'
import Button from '../Button/button'
import Icon from '../Icon/icon'
const checkFileSize = (file: File) => {
  if((Math.round(file.size) / 1024) > 50){
    alert('file too big')
    return false
  }
  return true
}

const filePromise = (file: File) => {
  const newFile = new File([file], 'new_name.docx', {type: file.type})
  return Promise.resolve(newFile)
}
const SimpleUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      onRemove={action('removed')}
    >
      <Button btnType="primary"> Upload File </Button>
    </Upload>
  )
}
const checkFileSizeUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      onRemove={action('removed')}
      beforeUpload={ checkFileSize }
    >
      <Button btnType="primary"> Upload File </Button>
    </Upload>
  )
}

const renameUpload = () => (
  <>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      onRemove={action('removed')}
      beforeUpload={ filePromise }
    >
      <Button btnType="primary"> Upload File </Button>
    </Upload>
  </>
)

const DragUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      onRemove={action('removed')}
      name="fileName"
      multiple
      drag
    >
      <Icon icon="upload" size="5x" theme="secondary" />
      <br/>
      <p>Drag file over to upload</p>
    </Upload>
  )
}

storiesOf('Upload component', module)
  .add('Upload', SimpleUpload)
  .add('文件上传前校验文件大小', checkFileSizeUpload, {
    info: {
      text: `
        可以通过 **beforeUpload** 钩子函数在文件上传前对文件大小进行验证
        ### 示例代码
        ~~~js
        const filePromise = (file: File) => {
          const newFile = new File([file], 'new_name.docx', {type: file.type})
          return Promise.resolve(newFile)
        }

        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onChange={action('changed')}
          onRemove={action('removed')}
          beforeUpload={ checkFileSize }
        >
          <Button btnType="primary"> Upload File </Button>
        </Upload>
        ~~~
      `,
      disable: true
    },
  })
  .add('文件上传前对文件重命名', renameUpload, {
    info: {
      text: `
        可以通过 **beforeUpload** 钩子函数在文件上传前对文件进行重命名
        ### 示例代码
        ~~~js
        const checkFileSize = (file: File) => {
          if((Math.round(file.size) / 1024) > 50){
            alert('file too big')
            return false
          }
          return true
        }

        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onChange={action('changed')}
          onRemove={action('removed')}
          beforeUpload={ filePromise }
        >
          <Button btnType="primary"> Upload File </Button>
        </Upload>
        ~~~
      `
    }
  })
.add('拖拽上传文件',DragUpload, {
  info: {
    text: `
      Upload组件也完美的支持 **拖拽上传**
      ### 示例代码
      ~~~js
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        onChange={action('changed')}
        onRemove={action('removed')}
        name="fileName"
        multiple
        drag
      >
        <Icon icon="upload" size="5x" theme="secondary" />
        <br/>
        <p>Drag file over to upload</p>
      </Upload>
      ~~~
    `
  }
})