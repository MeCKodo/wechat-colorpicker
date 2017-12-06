import './style.css';

class BaseComponent {
  private maxColorLen: number = 8;
  private storagePrefix: string = '__wx__color__';
  private baseColorArr: string[] = ["ffffff", "ffd7d5", "ffdaa9", "fffed5", "d4fa00", "73fcd6", "a5c8ff", "ffacd5", "ff7faa", "d6d6d6", "ffacaa", "ffb995", "fffb00", "73fa79", "00fcff", "78acfe", "d84fa9", "ff4f79", "b2b2b2", "d7aba9", "ff6827", "ffda51", "00d100", "00d5ff", "0080ff", "ac39ff", "ff2941", "888888", "7a4442", "ff4c00", "ffa900", "3da742", "3daad6", "0052ff", "7a4fd6", "d92142", "000000", "7b0c00", "ff4c41", "d6a841", "407600", "007aaa", "021eaa", "797baa", "ab1942"];

  private genBaseList(): string {
    const span = color => `<span data-color="${color}" style="background: ${color}"></span>`;
    return this.baseColorArr.map(color => span(`#${color}`)).join('');
  }

  public dom: HTMLElement = document.createElement('div');

  constructor() {
    this.dom.className = 'wechat-picker-box';
    this.dom.innerHTML = `<p>
                          <i data-type="base">基本色</i><i data-type="more">更多颜色</i>
                        </p>
                        <div class="wechat-base-wrapper">
                          ${this.genBaseList()}
                        </div>`;

    this.dom.addEventListener('click', this.clickHandler.bind(this));
  }

  private clickHandler(e: MouseEvent) {
    const target = <HTMLElement>e.target;
    if (target.tagName === 'SPAN') {
      this.selectColor(target);
    } else if (target.tagName === 'I') {
      BaseComponent.switchTab(target.getAttribute('data-type'));
    }
  }

  private selectColor(target: HTMLElement) {
    const ls = window.localStorage;
    let colorArr: string | null = ls.getItem(this.storagePrefix);
    const color: string = target.getAttribute('data-color')!;
    if (colorArr) { // 如果已经存过颜色了，最多不超过8个
      const temp = colorArr.split(',');
      const hasColor = temp.indexOf(color);
      console.log(temp, hasColor);
      if (hasColor > -1) { // 如果最近已经选过这颜色
        temp.splice(hasColor, 1);
      }
      temp.unshift(color);
      if (temp.length > this.maxColorLen) {
        temp.pop();
      }
      colorArr = temp.join(',');
    }
    ls.setItem(this.storagePrefix, colorArr ? colorArr : color);
    // TODO 最近颜色更新DOM
    console.log(color);
  }

  static switchTab(type: string | null) {
    if (!type) return;
    if (type === 'base') {
      // TODO 切换base
      console.log('TODO 切换base');
    } else if (type === 'more') {
      // TODO 切换picker
      console.log('TODO 切换picker');
    }
  }

  public destory() {
    this.dom.removeEventListener('click', this.clickHandler.bind(this));
  }

}

export default BaseComponent;
