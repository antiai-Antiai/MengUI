import React, { FC } from 'react';
import { ThemeProps } from '../Icon/icon';
export interface ProgressProps {
    /**当前的进度 */
    percent: number;
    /**进度条的高度 */
    strokeHeight?: number;
    /**是否显示当前进度数据 */
    showText?: boolean;
    /**用户自定义样式 */
    styles?: React.CSSProperties;
    /**进度条主题 */
    theme?: ThemeProps;
}
/**
 * Progress 进度条组件，可用于图片上传，任务管理等业务中。
 * ### 引用方式
 * ~~~js
 * import { Progress } from 'mengqu-ui'
 * ~~~
 * ***
 * ### 使用方式
 * ~~~js
 * <Progress
    percent={30}>
  </Progress>
 * ~~~
 *
 */
export declare const Progress: FC<ProgressProps>;
export default Progress;
