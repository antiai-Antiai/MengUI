var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
export var Icon = function (props) {
    var _a;
    // icon-primary
    var className = props.className, theme = props.theme, restProps = __rest(props, ["className", "theme"]);
    var classes = classNames('meng-icon', className, (_a = {},
        _a["icon-" + theme] = theme,
        _a));
    return (React.createElement(FontAwesomeIcon, __assign({ className: classes }, restProps)));
};
export default Icon;
