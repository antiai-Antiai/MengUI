import React from 'react';
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
export var Progress = function (props) {
    var percent = props.percent, strokeHeight = props.strokeHeight, showText = props.showText, styles = props.styles, theme = props.theme;
    return (React.createElement("div", { className: "meng-progress-bar", style: styles },
        React.createElement("div", { className: "meng-progress-bar-outer", style: { height: strokeHeight + "px" } },
            React.createElement("div", { className: "meng-progress-bar-inner color-" + theme, style: { width: percent + "%" } }, showText && React.createElement("span", { className: "inner-text" }, percent + "%")))));
};
Progress.defaultProps = {
    strokeHeight: 15,
    showText: true,
    theme: "primary",
};
export default Progress;
