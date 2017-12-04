class RecentComponent {

  // private maxColorLen:Number = 8;
  // private storagePrefix:String = '__wx__color__';
  public dom:HTMLElement = document.createElement('div');

  constructor() {
    this.dom.className = 'wechat-recent-color';
    this.dom.addEventListener('click', this.clickEvent);
    this.dom.appendChild(this.genTitleDom());
  }

  private genTitleDom():HTMLElement {
    const p: HTMLElement = document.createElement('p');
    p.innerHTML = '最近使用颜色';
    return p;
  }
  private genList():HTMLElement {
    const ul: HTMLElement = document.createElement('ul');

    return ul;
  }

  clickEvent(e: MouseEvent) {
    if((<HTMLElement>e.target).tagName === 'LI') {

    }
  }

}

export default RecentComponent;