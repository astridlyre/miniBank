import { useMemo, useState } from 'react'

export function useMap(initialMap = {}) {
  const [map, set] = useState(initialMap)

  const stableActions = useMemo(() => {
    return {
      set(key, value) {
        set((previousState) => ({
          ...previousState,
          [key]: value,
        }))
        return value
      },
      setAll(newMap) {
        set(newMap)
        return newMap
      },
      remove(key) {
        set((previousState) => ({
          ...previousState,
          [key]: undefined,
        }))
      },
    }
  }, [set])

  return useMemo(() => {
    return {
      ...stableActions,
      get(key) {
        return map[key]
      },
    }
  }, [map, stableActions])
}
