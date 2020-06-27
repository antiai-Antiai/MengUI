import { FC } from 'react';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
export declare type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';
export interface IconProps extends FontAwesomeIconProps {
    /**主题 */
    theme?: ThemeProps;
}
/**
 * 页面中最常用的的按字体图标元素，下面只列出了一些常用的
 * mengqu-ui字体图标库基于fontawesome，
 * 如果不能满足您的开发，可以点击https://fontawesome.com/icons?d=gallery&q=pay&s=solid&m=free 查看更多的图标
 * ### 引用方法
 *
 * ~~~js
 * import { Icon } from 'mengqu-ui'
 * ~~~
 *
 *
 * ### 使用方法
 * ~~~js
 * <Icon icon="ad" size="3x"/>
 * <Icon icon="address-book" size="3x"/>
 * ~~~
 */
export declare const Icon: FC<IconProps>;
export default Icon;
