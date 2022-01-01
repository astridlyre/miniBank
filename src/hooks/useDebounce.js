import { useEffect } from 'react'
import { useTimeoutFn } from './useTimeoutFn'

export function useDebounce(fn, ms, deps) {
  const [isReady, cancel, reset] = useTimeoutFn(fn, ms)

  useEffect(reset, deps)

  return [isReady, cancel]
}
