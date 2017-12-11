import './style.css';
import EventBus from '../eventBus';
import { CHANGE_COLOR, UPDATE_RECENT, GET_COLOR } from '../events-type';

class Toolbar {
  public dom: HTMLElement = document.createElement('div');
  private i: HTMLElement;
  private input: HTMLInputElement;
  private button: HTMLElement;

  constructor() {
    this.dom.className = 'wechat-picker-toolbar';
    this.render();

    this.i = this.dom.querySelector('i')!;
    this.input = this.dom.querySelector('input')!;
    this.button = this.dom.querySelector('button')!;

    this.setColor();
    this.button.addEventListener('click', this.clickButton.bind(this));
    this.input.addEventListener('input', this.onChange.bind(this));
  }

  private setColor() {
    EventBus.on(CHANGE_COLOR, (color) => {
      this.i.style.background = color;
      this.input.value = color.substr(1);
    });
  }

  private clickButton() {
    const color = `#${this.input.value}`;
    if (!/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(color)) {
      return;
    }
    EventBus.emit(UPDATE_RECENT, color);
    EventBus.emit(GET_COLOR, color);
  }

  private onChange() {
    this.i.style.backgroundColor = `#${this.input.value}`;
  }

  private render() {
    this.dom.innerHTML = `
                        <i></i>
                        <div><span>#</span><input maxlength="6" type="text"></div>
                        <button>确认</button>
                        `;
  }

  public destroy() {
    this.button.removeEventListener('click', this.clickButton.bind(this));
    this.input.removeEventListener('input', this.onChange.bind(this));
  }

}

export default Toolbar;
