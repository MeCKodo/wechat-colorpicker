import './style.css';
import SimpleColorPicker from './picker/index';
import RecentComponent from './recent-color/index';
import BaseComponent from './base-color/index';

import EventBus from './eventBus';

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
  click(color: string): void,
  clear(): void,
}

class WeChatColorPicker {
  private domWrapper = document.createElement('div');
  private recentComponent = new RecentComponent();
  private baseComponent = new BaseComponent();

  constructor(options: Options) {

    if (!options.el) {
      console.error('必须指定el参数');
      return;
    }

    this.domWrapper.className = 'wechat-colorpicker';
    this.domWrapper.appendChild(this.recentComponent.dom);
    this.domWrapper.appendChild(this.baseComponent.dom);

    EventBus.on('getColor', (color) => options.click(color));
    EventBus.on('clearColor', () => options.clear());
    document.querySelector(options.el)!.appendChild(this.domWrapper);

  }

}

new WeChatColorPicker({
  el: '#container',
  click(color) {
    console.log('获得的颜色是' + color);
  },
  clear() {
    console.log('清除');
  },
});