import React, { useState } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
library.add(fas);
function App() {
    var _a = useState(true), open = _a[0], setOpen = _a[1];
    var handleFileChange = function (e) {
        var files = e.target.files;
        console.log(files);
        if (files) {
            var uploadedFile = files[0];
            var formData = new FormData();
            formData.append(uploadedFile.name, uploadedFile);
            axios.post("http://jsonplaceholder.typicode.com/posts", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (resp) {
                console.log(resp);
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    return (React.createElement("div", null,
        React.createElement("section", { className: "Button" },
            React.createElement(Button, { onClick: function (e) { e.preventDefault(); alert('ddd'); } }, " Default "),
            React.createElement(Button, { btnType: "primary" }, "Primary"),
            React.createElement(Button, { btnType: "danger" }, " Danger "),
            React.createElement(Button, { disabled: true }, " Hello "),
            React.createElement(Button, { size: "sm" }, "small"),
            React.createElement(Button, { size: "sm" }, "Large"),
            React.createElement(Button, { btnType: "link", href: 'http://www.baidu.com', target: "_blank" }, " Link "),
            React.createElement(Button, { btnType: "link", href: 'http://www.baidu.com', disabled: true }, " Disabled Link ")),
        React.createElement("section", { className: "Menu" },
            React.createElement(Menu, { defaultIndex: '0', onSelect: function (index) { alert(index); }, defaultOpenSubMenus: ['2'] },
                React.createElement(MenuItem, { disabled: true }, "cool link"),
                React.createElement(MenuItem, null, "cool link2"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "cool link3 1"),
                    React.createElement(MenuItem, null, "cool link3 2")),
                React.createElement(MenuItem, null, "cool link3"))),
        React.createElement("section", { className: "icon" },
            React.createElement(Icon, { icon: "arrow-down", theme: "primary", size: "4x" })),
        React.createElement("section", { className: "form" },
            React.createElement("div", null,
                React.createElement("input", { type: "file", name: "myFile", onChange: handleFileChange })))));
}
export default App;
