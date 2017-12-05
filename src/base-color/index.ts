import './style.css';

class BaseComponent {
  private storagePrefix: string = '__wx__color__';
  private baseColorArr: string[] = ["ffffff", "ffd7d5", "ffdaa9", "fffed5", "d4fa00", "73fcd6", "a5c8ff", "ffacd5", "ff7faa", "d6d6d6", "ffacaa", "ffb995", "fffb00", "73fa79", "00fcff", "78acfe", "d84fa9", "ff4f79", "b2b2b2", "d7aba9", "ff6827", "ffda51", "00d100", "00d5ff", "0080ff", "ac39ff", "ff2941", "888888", "7a4442", "ff4c00", "ffa900", "3da742", "3daad6", "0052ff", "7a4fd6", "d92142", "000000", "7b0c00", "ff4c41", "d6a841", "407600", "007aaa", "021eaa", "797baa", "ab1942"];

  private genBaseList(): string {
    const span = color => `<span data-color="${color}" style="background: ${color}"></span>`;
    return this.baseColorArr.map((color) => {
      return span(`#${color}`);
    }).join('');
  }

  public dom: HTMLElement = document.createElement('div');

  constructor() {
    this.dom.className = 'wechat-base-wrapper';
    this.dom.innerHTML = this.genBaseList();
    this.dom.addEventListener('click', this.clickHandler.bind(this));
  }

  private clickHandler(e: MouseEvent) {
    const target = <HTMLElement>e.target;
    if (target.tagName === 'SPAN') {
      // TODO 存localstorage
      const ls = window.localStorage;
      let colorArr:string|null = ls.getItem(this.storagePrefix);
      const color: string = target.getAttribute('data-color')!;
      if (colorArr) { // 如果已经存过颜色了，最多不超过8个
        if (colorArr.split(',').length >= 8) {
          const temp = colorArr.split(',');
          temp.pop();
          colorArr = temp.join(',');
        }
      }
      ls.setItem(
        this.storagePrefix,
        (!colorArr ? color : `${color},${colorArr}`)
      );
    }
  }

  destory() {
    this.dom.removeEventListener('click', this.clickHandler);
  }
}

export default BaseComponent;
