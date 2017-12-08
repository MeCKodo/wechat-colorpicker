import './style.css';
import EventBus from '../eventBus';

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
  }

  private setColor() {
    EventBus.on('changeColor', (color) => {
      this.i.style.background = color;
      this.input.value = color.substr(1);
    });
  }

  private clickButton() {
    EventBus.emit('update', `#${this.input.value}`);
  }

  private render() {
    this.dom.innerHTML = `
                        <i></i>
                        <div><span>#</span><input maxlength="6" type="text"></div>
                        <button>确认</button>
                        `;
  }

}

export default Toolbar;