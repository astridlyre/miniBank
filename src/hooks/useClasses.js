import { useMemo } from 'react'

export function useClasses(classes, deps) {
  return useMemo(() => classes.filter(Boolean).join(' '), deps)
}
