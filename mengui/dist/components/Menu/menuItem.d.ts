import React from 'react';
export interface MenuItemProps {
    /**当前菜单项的索引 */
    index?: string;
    /**是否禁用该菜单项 */
    disabled?: boolean;
    /**自定义类名 */
    className?: string;
    /**自定义样式 */
    style?: React.CSSProperties;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
