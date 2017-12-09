import './style.css';
import EventBus from '../eventBus';
import { UPDATE_RECENT, GET_COLOR, CLEAR_COLOR } from '../events-type';

class RecentComponent {

  private maxColorLen: number = 8;
  private storagePrefix: string = '__wechat__picker__color__';
  public dom: HTMLElement = document.createElement('div');

  constructor() {
    this.dom.className = 'wechat-recent-color';
    this.dom.addEventListener('click', RecentComponent.getRecentColor);

    this.render();
    EventBus.on(UPDATE_RECENT, (color) => {
      this.setRecentColor(color);
      this.render();
    });
  }

  private setRecentColor(color) {
    const ls = window.localStorage;
    let colorArr: string | null = ls.getItem(this.storagePrefix);
    if (colorArr) { // 如果已经存过颜色了，最多不超过8个
      const temp = colorArr.split(',');
      const hasColor = temp.indexOf(color);
      if (hasColor > -1) { // 如果最近已经选过这颜色
        temp.splice(hasColor, 1);
      }
      temp.unshift(color);
      if (temp.length > this.maxColorLen) { // 不超过8个
        temp.pop();
      }
      colorArr = temp.join(',');
    }
    ls.setItem(this.storagePrefix, colorArr ? colorArr : color);
  }

  static getRecentColor(e: MouseEvent) {
    const target = <HTMLElement>e.target;
    if (target.tagName === 'LI') {
      if (target.classList.contains('wechat-recent-item')) {
        EventBus.emit(GET_COLOR, target.getAttribute('data-color'));
      } else {
        EventBus.emit(CLEAR_COLOR);
      }
    }
  }

  private genList(): string {
    const li = color => `<li class="wechat-recent-item" 
                              data-color="${color}" 
                              style="background: ${color}">
                        </li>`;
    const ls = window.localStorage;
    const colorArr: string | null = ls.getItem(this.storagePrefix);
    return colorArr ?
      colorArr.split(',').map(color => li(color)).join('') :
      '';
  }

  private render() {
    this.dom.innerHTML = `
                        <p>最近使用颜色</p>
                        <ul>
                          <li class="wechat-clear-color"></li>  
                        </ul>
                        `;
    this.dom.querySelector('.wechat-clear-color')!.insertAdjacentHTML('afterend', this.genList());
  }


}

export default RecentComponent;
