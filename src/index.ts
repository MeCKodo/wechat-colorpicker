import './style.css';
import Picker from './picker/index';
import RecentComponent from './recent-color/index';
import BaseComponent from './base-color/index';
import ToolBarComponent from './toolbar/index';

import EventBus from './eventBus';
import { CHANGE_TAB, CLEAR_COLOR, GET_COLOR } from './events-type';

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

    EventBus.on(GET_COLOR, (color) => options.click(color));
    EventBus.on(CLEAR_COLOR, () => options.clear());
    EventBus.on(CHANGE_TAB, (type) => {
      this.domWrapper.className = `wechat-colorpicker ${type}`;
    });

    document.querySelector(options.el)!.appendChild(this.domWrapper);

  }

}

export default WeChatColorPicker;
