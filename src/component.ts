class Component {
  public $parent;
  private props;

  constructor(parent, props = {}) {
    this.$parent = parent;
    this.props = props;
  }

  // proxy
  on(type: string, fn) {
    this.$parent.event['on'].call(this.$parent.event, type, fn);
  }

  off(type: string, fn) {
    return this.$parent.event['off'].call(this.$parent.event, type, fn);
  }

  emit(type: string, ...args) {
    return this.$parent.event['emit'].call(this.$parent.event, type, ...args);
  }

}

export default Component;
