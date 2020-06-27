import React, { useContext } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'

export interface MenuItemProps {
    /**当前菜单项的索引 */
    index?: string;
    /**是否禁用该菜单项 */
    disabled?: boolean;
    /**自定义类名 */
    className?: string;
    /**自定义样式 */
    style?:React.CSSProperties
}

const MenuItem:React.FC<MenuItemProps> = (props) => {
    const {
        index,
        disabled,
        className,
        style,
        children
    } = props;
    const context = useContext(MenuContext)
    const classes = classNames('menu-item', className, {
        'is-disabled':disabled,
        'is-active': context.index === index
    })
    const handleClick = () => {
        if(context.onSelect && !disabled && typeof(index) === 'string'){
            context.onSelect(index)
        }
    }
    return (
        <li className={classes} style={style} onClick={handleClick}>
            {children} 
        </li>
    )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem