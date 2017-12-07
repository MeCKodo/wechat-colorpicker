import './style.css';
import EventBus from '../eventBus';

class RecentComponent {

  private storagePrefix: string = '__wx__color__';
  public dom: HTMLElement = document.createElement('div');

  constructor() {
    this.dom.className = 'wechat-recent-color';
    this.dom.addEventListener('click', RecentComponent.getRecentColor);

    this.render();
    EventBus.on('update', () => {
      this.render();
    });
  }

  static getRecentColor(e: MouseEvent) {
    const target = <HTMLElement>e.target;
    if (target.tagName === 'LI') {
      if (target.classList.contains('wechat-recent-item')) {
        alert(target.getAttribute('data-color'));
      } else {
        alert('清除颜色');
      }
    }
  }

  private genList(): string {
    const li = color => `<li class="wechat-recent-item" data-color="${color}" style="background: ${color}"></li>`;
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