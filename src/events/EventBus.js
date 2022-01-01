import { immutable } from '@ebflat9/fp'

const listeners = new Map()

export const EventBus = immutable({
  on(event, listener, options) {
    return this.addListener(event, { listener, options })
  },
  off(event, listener) {
    return this.removeListener(event, listener)
  },
  removeListener(event, listener) {
    const currentListeners = listeners.get(event) ?? []
    listeners.set(
      event,
      currentListeners.filter((l) => l.listener !== listener),
    )
    return this
  },
  addListener(event, listener) {
    const currentListeners = listeners.get(event) ?? []
    currentListeners.push(listener)
    listeners.set(event, currentListeners)
    return this
  },
  removeAllListeners(event) {
    listeners.delete(event)
    return this
  },
  emit(event) {
    const listenerGroup = listeners.get(event)

    if (listenerGroup) {
      const toRemove = []

      listenerGroup.forEach(({ listener, options }) => {
        listener(event)
        options.once && toRemove.push(listener)
      })

      toRemove.forEach((listener) => this.removeListener(event, listener))
    }

    return this
  },
})
