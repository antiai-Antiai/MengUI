本项目由追梦人团队开发维护，旨在提供一套基于React的高质量的UI框架，组件尚在加速构建中，欢迎您的关注，我们时刻期待您的加入！

## 安装和使用方式

您可以在项目中，按照下面的方法使用mengqu-ui。

### 安装mengqu-ui

```
npm i mengqu-ui
```

### 使用方式
#### 1、全局引入css
```
import 'mengqu-ui/dist/index.css'
```
#### 2、按需引入组件
```
import { Button } from 'mengqu-ui'
```
#### 3、在组件中使用
```
<Button btnType="danger">primary</Button>
```


## 组件列表

### 一、Button
#### 引入方式
```
    import { Button } from 'mengqu-ui'
```
#### 使用方式
```
    <Button>Button</Button>
```
#### 参数列表
<table>
    <tr>
        <td>属性值</td>
        <td>值类型</td>
        <td>是否必传</td>
        <td>默认值</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>className</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>设置 Button 的自定义类名</td>
    </tr>
    <tr>
        <td>disabled</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
        <td>设置 Button 的禁用</td>
    </tr>
    <tr>
        <td>size</td>
        <td>"lg"、"sm"</td>
        <td>-</td>
        <td>false</td>
        <td>设置 Button 的禁用</td>
    </tr>
    <tr>
        <td>btnType</td>
        <td>oneOf "primary" | "default" | "danger" | "link"</td>
        <td>-</td>
        <td>false</td>
        <td>设置 Button 的禁用</td>
    </tr>
    <tr>
        <td>href</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>为链接按钮时，按钮链接</td>
    </tr>
</table>



