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

### 二、Icon
#### 引入方式
```
    import { Icon } from 'mengqu-ui'
```
#### 使用方式
```
    <Icon icon="ad" size="3x"/>
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
        <td>theme</td>
        <td>oneOf "primary" | "danger" | "secondary" | "success" | "info" | "warning" | "light" | "dark"</td>
        <td>-</td>
        <td>-</td>
        <td>主题</td>
    </tr>
</table>

上面只列出了一些常用的 mengqu-ui字体图标库基于fontawesome， 如果不能满足您的开发，可以点击https://fontawesome.com/icons?d=gallery&q=pay&s=solid&m=free 查看更多的图标

### 三、Iput
#### 引入方式
```
import { Input } from 'mengqu-ui'
```
#### 使用方式
```
<Input
  style={{width: '300px'}}
  placeholder="placeholder"
  onChange={action('changed')}
/>
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
        <td>disabled</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
        <td>是否禁用 Input</td>
    </tr>
    <tr>
        <td>size</td>
        <td>oneOf "lg" | "sm"</td>
        <td>-</td>
        <td>sm</td>
        <td>设置 input 大小，支持 lg 或者是 sm</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>string</td>
        <td>-</td>
        <td>sm</td>
        <td>添加图标，在右侧悬浮添加一个图标，用于提示</td>
    </tr>
    <tr>
        <td>prepend</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>添加前缀 用于配置一些固定组合</td>
    </tr>
    <tr>
        <td>append</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>添加后缀 用于配置一些固定组合</td>
    </tr>
    <tr>
        <td>onChange</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>input框值改变后触发的事件</td>
    </tr>
</table>

### 四、AutoComplete
#### 引入方式
```
import { autoComplete } from 'mengqu-ui'
```
#### 使用方式
```
<AutoComplete 
    fetchSuggestions={handleFetch}
    onSelect={action('selected')}
    //renderOption={renderOption}
  />

const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']

const handleFetch = (query: string) => {
  return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
}
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
        <td>fetchSuggestions</td>
        <td>-</td>
        <td>必须传递</td>
        <td>-</td>
        <td>数据过滤函数,用户可定义要显示的下拉条目数据</td>
    </tr>
    <tr>
        <td>onSelect</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>选定条目后触发函数，用户选定条目，按下回车键之后触发的数据</td>
    </tr>
    <tr>
        <td>renderOption</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>自定义模版。用户可以自定义下拉框的模版</td>
    </tr>
</table>

### 五、AutoComplete
#### 引入方式
```
import { Menu, MenuItem } from 'mengqu-ui'
```
#### 使用方式
```
<Menu>
    <MenuItem>
        菜单一
    </MenuItem>
    <MenuItem>
        菜单二
    </MenuItem>
    <MenuItem>
        菜单三
    </MenuItem>
</Menu>
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
        <td>defaultIndex</td>
        <td>string</td>
        <td>-</td>
        <td>0</td>
        <td>指定被选中的子项</td>
    </tr>
    <tr>
        <td>className</td>
        <td>string</td>
        <td>-</td>
        <td>0</td>
        <td>自定义类名</td>
    </tr>
    <tr>
        <td>mode</td>
        <td>oneOf "horizontal" | "vertical"</td>
        <td>-</td>
        <td>horizontal</td>
        <td>菜单显示方向</td>
    </tr>
    <tr>
        <td>mode</td>
        <td>oneOf "horizontal" | "vertical"</td>
        <td>-</td>
        <td>horizontal</td>
        <td>菜单显示方向</td>
    </tr>
    <tr>
        <td>onSelect</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>菜单选中后调用的回调</td>
    </tr>
    <tr>
        <td>defaultOpenSubMenus</td>
        <td>string[]</td>
        <td>-</td>
        <td>horizontal</td>
        <td>默认打开的子菜单</td>
    </tr>
</table>

### 六、Progress
#### 引入方式
```
import { Progress } from 'mengqu-ui'
```
#### 使用方式
```
<Progress percent={30}></Progress>
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
        <td>percent</td>
        <td>number</td>
        <td>必须传递</td>
        <td>-</td>
        <td>当前的进度</td>
    </tr>
    <tr>
        <td>strokeHeight</td>
        <td>number</td>
        <td>-</td>
        <td>15</td>
        <td>进度条的高度</td>
    </tr>
    <tr>
        <td>showText</td>
        <td>boolean</td>
        <td>-</td>
        <td>true</td>
        <td>是否显示当前进度数据</td>
    </tr>
    <tr>
        <td>styles</td>
        <td>any</td>
        <td>-</td>
        <td>-</td>
        <td>用户自定义样式</td>
    </tr>
    <tr>
        <td>theme</td>
        <td>-</td>
        <td>-</td>
        <td>primary</td>
        <td>进度条主题</td>
    </tr>
</table>

### 七、Upload
#### 引入方式
```
import { Upload } from 'mengqu-ui'
```
#### 使用方式
```
<Upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    onChange={action('changed')}
    onRemove={action('removed')}
  >
    <Button btnType="primary"> Upload File </Button>
  </Upload>
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
        <td>action</td>
        <td>string</td>
        <td>必须传递</td>
        <td>-</td>
        <td>文件上传地址</td>
    </tr>
    <tr>
        <td>beforeUpload</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>上传回调函数</td>
    </tr>
    <tr>
        <td>onProgress</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>文件上传中回调事件</td>
    </tr>
    <tr>
        <td>onSuccess</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>文件上传成功后回调事件</td>
    </tr>
    <tr>
        <td>onError</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>文件上传错误后回调事件</td>
    </tr>
    <tr>
        <td>onChange</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>文件上传结束后触发事件</td>
    </tr>
    <tr>
        <td>onRemove</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>上传文件移除后触发事件</td>
    </tr>
    <tr>
        <td>headers</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>文件上传http头信息</td>
    </tr>
    <tr>
        <td>name</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>上传文件的key值</td>
    </tr>
    <tr>
        <td>data</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>上传时，附带的一些数据</td>
    </tr>
    <tr>
        <td>withCredentials</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>是否携带cookie</td>
    </tr>
    <tr>
        <td>accept</td>
        <td>string</td>
        <td>-</td>
        <td>-</td>
        <td>上传文件的类型</td>
    </tr>
    <tr>
        <td>multiple</td>
        <td>boolean</td>
        <td>-</td>
        <td>-</td>
        <td>是否支持多文件上传</td>
    </tr>
    <tr>
        <td>drag</td>
        <td>boolean</td>
        <td>-</td>
        <td>-</td>
        <td>是否支持拖拽上传</td>
    </tr>
</table>