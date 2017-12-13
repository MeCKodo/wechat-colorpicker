import './style.css';
import Component from '../component';
import { UPDATE_RECENT, CHANGE_TAB, GET_COLOR } from '../events-type';

class BaseComponent extends Component {
  // tslint:disable-next-line
  private baseColorArr: string[] = ['ffffff', 'ffd7d5', 'ffdaa9', 'fffed5', 'd4fa00', '73fcd6', 'a5c8ff', 'ffacd5', 'ff7faa', 'd6d6d6', 'ffacaa', 'ffb995', 'fffb00', '73fa79', '00fcff', '78acfe', 'd84fa9', 'ff4f79', 'b2b2b2', 'd7aba9', 'ff6827', 'ffda51', '00d100', '00d5ff', '0080ff', 'ac39ff', 'ff2941', '888888', '7a4442', 'ff4c00', 'ffa900', '3da742', '3daad6', '0052ff', '7a4fd6', 'd92142', '000000', '7b0c00', 'ff4c41', 'd6a841', '407600', '007aaa', '021eaa', '797baa', 'ab1942'];

  public dom: HTMLElement = document.createElement('div');

  constructor(parent) {
    super(parent);
    this.dom.className = 'wechat-picker-box';
    this.dom.innerHTML = `<p>
                          <i data-type="base">基本色</i><i data-type="more">更多颜色</i>
                        </p>
                        <div class="wechat-base-wrapper">
                          ${this.genBaseList()}
                        </div>`;

    this.dom.addEventListener('click', this.clickHandler.bind(this));
  }

  private genBaseList(): string {
    const span = color => `<span data-color="${color}" style="background: ${color}"></span>`;
    return this.baseColorArr.map(color => span(`#${color}`)).join('');
  }

  private clickHandler(e: MouseEvent) {
    const target = e.target as HTMLElement;
    if (target.tagName === 'SPAN') {
      this.selectColor(target);
    } else if (target.tagName === 'I') {
      this.switchTab(target.getAttribute('data-type'));
    }
  }

  private switchTab(type: string | null) {
    if (!type) return;
    this.emit(CHANGE_TAB, type === 'base' ? 'base-color' : 'more-color');
  }

  public selectColor(target: HTMLElement) {
    const color: string = target.getAttribute('data-color')!;
    this.$parent.event.emit(UPDATE_RECENT, color);
    this.$parent.event.emit(GET_COLOR, color);
  }

  public destroy() {
    this.dom.removeEventListener('click', this.clickHandler.bind(this));
  }

}

export default BaseComponent;
