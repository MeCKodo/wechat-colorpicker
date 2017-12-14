
## wechat-colorpicker

[![CircleCI](https://img.shields.io/circleci/project/github/MeCKodo/wechat-colorpicker.svg)](https://circleci.com/gh/MeCKodo/wechat-colorpicker) [![npm](https://img.shields.io/npm/dt/wechat-colorpicker.svg)](https://www.npmjs.com/package/wechat-colorpicker) [![npm](https://img.shields.io/npm/v/wechat-colorpicker.svg)](https://www.npmjs.com/package/wechat-colorpicker) 
> 颜色选择器（UI取自微信公众号后台编辑器）

[demo](https://meckodo.github.io/wechat-colorpicker/)

## 安装

```bash
npm i wechat-colorpicker -S
```

## 栗子

```javascript
import WeChatColorPicker from 'wechat-colorpicker';

const example = new WeChatColorPicker({
  el: '#container', // 插入的dom
  click(color) {
    console.log(`获得的基础颜色是${color}`);
  },
  change(color) {
    // picker 选择触发 这个方法可选
  },
  clear() {
    console.log('清除');
  },
});

example.destroy(); // 销毁实例

```

## MIT

MIT LICENSE
