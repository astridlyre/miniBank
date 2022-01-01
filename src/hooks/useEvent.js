import { useEffect } from 'react'
import { EventBus } from '../events/'

const DEFAULT_OPTIONS = { once: false }

export function useEvent(event, handler, options = DEFAULT_OPTIONS) {
  useEffect(() => {
    if (handler) {
      EventBus.on(event, handler, options)
      return () => EventBus.removeListener(event, handler, options)
    }
    return null
  }, [event, handler, options])
}
