class Event {
  private events = {};

  public on(type: string, fn) {
    if (this.events[type]) {
      this.events[type].push(fn);
    } else {
      this.events[type] = [fn];
    }
  }

  public emit(type: string, ...args) {
    if (!this.events[type]) {
      return;
    }
    this.events[type].forEach((fn) => {
      fn(...args);
    });
  }

  public off(type: string, fn) {
    const typeArr = this.events[type];
    if (!typeArr) {
      return;
    }
    typeArr.forEach((cb, index) => {
      if (fn === cb) {
        this.events[type].splice(index, 1);
      }
    });
  }

}

export default Event;
