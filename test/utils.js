import WeChatColorPicker from '../src';

export function newInstance() {
  document.body.innerHTML = `<div id="container"></div>`;
  return new WeChatColorPicker({
    el: '#container',
    click(color) {
      console.log(`获得的基础颜色是${color}`);
    },
    clear() {
      console.log('清除');
    },
  });
}
