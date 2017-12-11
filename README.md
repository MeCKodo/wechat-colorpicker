## wechat-colorpicker

> 颜色选择器（UI取自微信公众号后台编辑器）

## 栗子

```javascript
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

example.destroy();

```

## MIT

MIT LICENSE