import './style.css';
import Picker from './picker/index';
import RecentComponent from './recent-color/index';
import BaseComponent from './base-color/index';
import ToolBarComponent from './toolbar/index';
import EventBusInstance from './eventBus';
import { CHANGE_TAB, CLEAR_COLOR, GET_COLOR } from './events-type';

export const EventBus = new EventBusInstance();

interface Options {
  el: string;
  click(color: string): void;
  clear(): void;
  change?(color: string): void;
}

class WeChatColorPicker {
  private picker;
  private options:Options;
  private domWrapper: HTMLElement = document.createElement('div');
  private recentComponent = new RecentComponent();
  private baseComponent = new BaseComponent();
  private toolbarComponent = new ToolBarComponent();

  constructor(options: Options) {

    if (!options.el) {
      console.error('必须指定el参数');
      return;
    }

    this.options = options;
    const dogFrg = document.createDocumentFragment();
    dogFrg.appendChild(this.recentComponent.dom);
    dogFrg.appendChild(this.baseComponent.dom);
    dogFrg.appendChild(this.toolbarComponent.dom);

    this.domWrapper.className = 'wechat-colorpicker base-color';
    this.domWrapper.appendChild(dogFrg);

    // 下一个tick再初始化
    setTimeout(() => {
      this.picker = new Picker({
        el: '.wechat-picker-box',
        color: '#000',
      });
    });

    EventBus.on(GET_COLOR, this.getColor.bind(this));
    EventBus.on(CLEAR_COLOR, this.clear.bind(this));
    EventBus.on(CHANGE_TAB, this.changeTab.bind(this));

    document.querySelector(options.el)!.appendChild(this.domWrapper);

  }

  private changeTab(type) {
    this.domWrapper.className = `wechat-colorpicker ${type}`;
  }

  private getColor(color) {
    this.options.click(color);
  }

  private clear() {
    this.options.clear();
  }

  public destroy() {
    console.log('destroy');
    this.recentComponent.destroy();
    this.baseComponent.destroy();
    this.toolbarComponent.destroy();
    this.picker.remove();

    EventBus.off(GET_COLOR, this.getColor.bind(this));
    EventBus.off(CLEAR_COLOR, this.clear.bind(this));
    EventBus.off(CHANGE_TAB, this.changeTab.bind(this));

    if (this.domWrapper.parentElement) {
      this.domWrapper.parentElement.removeChild(this.domWrapper);
    }
  }

}

if (window) {
  window.WeChatColorPicker = WeChatColorPicker;
}

export default WeChatColorPicker;
