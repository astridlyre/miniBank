import { useCallback, useEffect, useRef } from 'react'

export function useTimeoutFn(fn, ms) {
  const ready = useRef(false)
  const timeout = useRef(null)
  const callback = useRef(fn)
  const isReady = useCallback(() => ready.current, [])

  const set = useCallback(() => {
    ready.current = false
    timeout.current && clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      ready.current = true
      callback.current()
    }, ms)
  }, [ms])

  const clear = useCallback(() => {
    ready.current = null
    timeout.current && clearTimeout(timeout.current)
  }, [])

  useEffect(() => {
    callback.current = fn
  }, [fn])

  useEffect(() => (set(), clear), [ms, set, clear])

  return [isReady, clear, set]
}
