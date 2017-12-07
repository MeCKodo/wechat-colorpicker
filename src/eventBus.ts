
class EventBus {
  private events = {};

  public on(type, fn) {
    if (this.events[type]) {
      this.events[type].push(fn);
    } else {
      this.events[type] = [fn];
    }
  }

  public emit(type, ...args) {
    if (!this.events[type]) return;
    this.events[type].forEach((fn) => {
      fn(...args);
    });
  }

  public off(type, fn) {
    const typeArr = this.events[type];
    if (!typeArr) return;
    typeArr.forEach((cb, index) => {
      if (fn === cb) {
        this.events[type].splice(index, 1);
      }
    })
  }

}

export default new EventBus();
