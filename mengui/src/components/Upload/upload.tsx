import React, { FC, useRef, ChangeEvent, useState } from 'react'
import axios from 'axios'
import UploadList from './uploadList'
import Dragger from './dragger'
export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}
export interface UploadProps {
  /**文件上传地址 */
  action: string;
  /**默认文件上传列表 */
  defaultFileList?: UploadFile[];
  /**上传回调函数 */
  beforeUpload? : (file: File) => boolean | Promise<File>;
  /**文件上传中回调事件 */
  onProgress?: (percentage: number, file: File) => void;
  /**文件上传成功后回调事件 */
  onSuccess?: (data: any, file: File) => void;
  /**文件上传错误后回调事件 */
  onError?: (err: any, file: File) => void;
  /**文件上传结束后触发事件 */
  onChange?: (file: File) => void;
  /**上传文件移除后触发事件 */
  onRemove?: (file: UploadFile) => void;
  /**文件上传http头信息 */
  headers?: {[key: string]: any };
  /**上传文件的key值 */
  name?: string;
  /**上传时，附带的一些数据 */
  data?: {[key: string]: any };
  /**是否携带cookie */
  withCredentials?: boolean;
  /**上传文件的类型 */
  accept?: string;
  /**是否支持多文件上传 */
  multiple?: boolean;
  /**是否支持拖拽上传 */
  drag?: boolean;
}

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互
 * ### 引用方法
 * 
 * ~~~js
 * import { Upload } from 'mengqu-ui'
 * ~~~
 * ***
 * ### 示例代码
 * 
 * ~~~js
 * <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action('changed')}
      onRemove={action('removed')}
    >
      <Button btnType="primary"> Upload File </Button>
    </Upload>
 * ~~~
 */
export const Upload: FC<UploadProps> = (props) => {
  const {
    action,
    defaultFileList,
    beforeUpload,
    onProgress,
    onSuccess,
    onError,
    onChange,
    onRemove,
    name,
    headers,
    data,
    withCredentials,
    accept,
    multiple,
    children,
    drag,
  } = props
  const fileInput = useRef<HTMLInputElement>(null)
  const [ fileList, setFileList ] = useState<UploadFile[]>(defaultFileList || [])
  const updateFileList = (updateFile: UploadFile, updateObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj }
        } else {
          return file
        }
      })
    })
  }
  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if(!files) {
      return
    }
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return prevList.filter(item => item.uid !== file.uid)
    })
    if (onRemove) {
      onRemove(file)
    }
  }
  const uploadFiles = (files: FileList) => {
    let postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) {
        post(file)
      } else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => {
            post(processedFile)
          })
        } else if (result !== false) {
          post(file)
        }
      }
    })
  }
  const post = (file: File) => {
    let _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file
    }
    //setFileList([_file, ...fileList])
    setFileList(prevList => {
      return [_file, ...prevList]
    })
    const formData = new FormData()
    formData.append(name || 'file', file)
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key])
      })
    } 
    axios.post(action, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data'
      },
      withCredentials,
      onUploadProgress: (e) => {
        let percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100) {
          updateFileList(_file, { percent: percentage, status: 'uploading'})
          if (onProgress) {
            onProgress(percentage, file)
          }
        }
      }
    }).then(resp => {
      updateFileList(_file, {status: 'success', response: resp.data})
      if (onSuccess) {
        onSuccess(resp.data, file)
      }
      if (onChange) {
        onChange(file)
      }
    }).catch(err => {
      updateFileList(_file, { status: 'error', error: err})
      if (onError) {
        onError(err, file)
      }
      if (onChange) {
        onChange(file)
      }
    })
  }

  return (
    <div 
      className="meng-upload-component"
    >
      <div className="meng-upload-input"
        style={{display: 'inline-block'}}
        onClick={handleClick}>
          {drag ? 
            <Dragger onFile={(files) => {uploadFiles(files)}}>
              {children}
            </Dragger>:
            children
          }
        <input
          className="meng-file-input"
          style={{display: 'none'}}
          ref={fileInput}
          onChange={handleFileChange}
          type="file"
          accept={accept}
          multiple={multiple}
        />
      </div>

      <UploadList 
        fileList={fileList}
        onRemove={handleRemove}
      />
    </div>
  )
}

Upload.defaultProps = {
  name: 'file'
}
export default Upload;