import './style.css';
import Picker from './picker/index';
import RecentComponent from './recent-color/index';
import BaseComponent from './base-color/index';
import ToolBarComponent from './toolbar/index';

import EventBus from './eventBus';

/**
 * changeTab 事件 切换基本色和更多颜色
 * changeColor 事件 picker选择颜色
 * update 事件 更新 最近使用的颜色
 * getColor 事件 点击获取当前颜色
 * clearColor 事件 触发清除颜色事件
 */

interface Options {
  el: string;
  click(color: string): void;
  clear(): void;
  change?(color: string): void;
}

class WeChatColorPicker {
  private domWrapper = document.createElement('div');
  private recentComponent = new RecentComponent();
  private baseComponent = new BaseComponent();
  private toolbarComponent = new ToolBarComponent();

  constructor(options: Options) {

    if (!options.el) {
      console.error('必须指定el参数');
      return;
    }

    const dogFrg = document.createDocumentFragment();
    dogFrg.appendChild(this.recentComponent.dom);
    dogFrg.appendChild(this.baseComponent.dom);
    dogFrg.appendChild(this.toolbarComponent.dom);

    this.domWrapper.className = 'wechat-colorpicker base-color';
    this.domWrapper.appendChild(dogFrg);

    // 下一个tick再初始化
    setTimeout(() => {
      new Picker({
        el: '.wechat-picker-box',
        color: '#000',
      });
    });

    EventBus.on('getColor', (color) => options.click(color));
    EventBus.on('clearColor', () => options.clear());
    EventBus.on('changeTab', (type) => {
      this.domWrapper.className = `wechat-colorpicker ${type}`;
    });

    document.querySelector(options.el)!.appendChild(this.domWrapper);

  }

}

new WeChatColorPicker({
  el: '#container',
  click(color) {
    console.log(`获得的基础颜色是${color}`);
  },
  clear() {
    console.log('清除');
  },
});