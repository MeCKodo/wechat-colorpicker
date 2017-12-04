import './style.css';
import SimpleColorPicker from './picker/index';
import RecentComponent from './recent-color/index';
import BaseComponent from './base-color/index';

/* const colorPicker = new SimpleColorPicker({
    el: '#box',
    color: '#fff',
    background: '#fff'
});

colorPicker.onChange(function(hexStringColor) {
    document.body.style.backgroundColor = hexStringColor;
    // document.querySelector('h1 a').style.color = colorPicker.color.isDark() ? '#FFFFFF' : '#000000';
}); */

interface Options {
  el: string,
}

class WeChatColorPicker {
  private domWrapper = document.createElement('div');

  constructor(options: Options) {

    this.domWrapper.className = 'wechat-colorpicker';
    this.domWrapper.appendChild(new RecentComponent().dom);
    this.domWrapper.appendChild(new BaseComponent().dom);

    if (options.el) {
      document.querySelector(options.el)!.appendChild(this.domWrapper);
    } else {
      console.error('必须指定el参数');
    }
  }
}

new WeChatColorPicker({
  el: '#container'
});