import './style.css';

class BaseComponent {
  private baseColorArr:string[] = ["ffffff", "ffd7d5", "ffdaa9", "fffed5", "d4fa00", "73fcd6", "a5c8ff", "ffacd5", "ff7faa", "d6d6d6", "ffacaa", "ffb995", "fffb00", "73fa79", "00fcff", "78acfe", "d84fa9", "ff4f79", "b2b2b2", "d7aba9", "ff6827", "ffda51", "00d100", "00d5ff", "0080ff", "ac39ff", "ff2941", "888888", "7a4442", "ff4c00", "ffa900", "3da742", "3daad6", "0052ff", "7a4fd6", "d92142", "000000", "7b0c00", "ff4c41", "d6a841", "407600", "007aaa", "021eaa", "797baa", "ab1942"];
  private genBaseList():string {
    const span = color => `<span style="background: ${color}"></span>`;
    return this.baseColorArr.map((color) => {
      return span(`#${color}`);
    }).join('');
  }
  public dom:HTMLElement = document.createElement('div');
  constructor() {
    this.dom.className = 'wechat-base-wrapper';
    this.dom.innerHTML = this.genBaseList();
  }
}

export default BaseComponent;