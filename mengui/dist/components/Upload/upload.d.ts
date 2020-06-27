import { FC } from 'react';
export declare type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';
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
    beforeUpload?: (file: File) => boolean | Promise<File>;
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
    headers?: {
        [key: string]: any;
    };
    /**上传文件的key值 */
    name?: string;
    /**上传时，附带的一些数据 */
    data?: {
        [key: string]: any;
    };
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
export declare const Upload: FC<UploadProps>;
export default Upload;
