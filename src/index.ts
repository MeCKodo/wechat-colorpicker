import './style.css';
import Picker from './picker/index';
import Event from './event';
import RecentComponent from './recent-color/index';
import BaseComponent from './base-color/index';
import ToolBarComponent from './toolbar/index';
import { CHANGE_TAB, CLEAR_COLOR, GET_COLOR } from './events-type';

interface Options {
  el: string;
  click(color: string): void;
  clear(): void;
  change?(color: string): void;
}

class WeChatColorPicker {
  private picker;
  private options: Options;
  private domWrapper: HTMLElement = document.createElement('div');
  public event = new Event();
  private recentComponent = new RecentComponent(this);
  private baseComponent = new BaseComponent(this);
  private toolbarComponent = new ToolBarComponent(this);

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
        color: '#000',
        parent: this,
      });
      const el = this.domWrapper.querySelector('.wechat-picker-box')!;
      this.picker.appendTo(el);
    });

    this.event.on(GET_COLOR, this.getColor.bind(this));
    this.event.on(CLEAR_COLOR, this.clear.bind(this));
    this.event.on(CHANGE_TAB, this.changeTab.bind(this));
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
    this.recentComponent.destroy();
    this.baseComponent.destroy();
    this.toolbarComponent.destroy();
    this.picker.remove();

    this.event.off(GET_COLOR, this.getColor.bind(this));
    this.event.off(CLEAR_COLOR, this.clear.bind(this));
    this.event.off(CHANGE_TAB, this.changeTab.bind(this));

    if (this.domWrapper.parentElement) {
      this.domWrapper.parentElement.removeChild(this.domWrapper);
    }
  }

}

if (window) {
  window.WeChatColorPicker = WeChatColorPicker;
}

export default WeChatColorPicker;
