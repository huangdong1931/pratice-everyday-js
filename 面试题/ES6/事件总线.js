class EventBus {
  constructor() {
    this.events = this.events || new Map()
  }
  add(type, event) {
    if (!this.events.has(type)) {
      this.events.set(type, [])
    }
    this.events.get(type).push(event)
  }
  remove(type, event) {
    if (this.events.has(type)) {
      const linsteners = this.events.get(type);
      this.events.splice(linsteners.indexOf(event), 1)
    }
  }
  emit(type, data) {
    if (this.events.has(type)) {
      const linsteners = this.events.get(type);
      linsteners.forEach(linstener => linstener(data))
    }
  }
  emitOnce(type, data) {
    if (this.events.has(type)) {
      const linsteners = this.events.get(type)
      for (let fn of linsteners) {
        fn.apply(this, data)
        this.remove(type, fn)
      }
    }
  }
}