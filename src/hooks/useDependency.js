import { useState, useMemo, useEffect, useCallback } from 'react'
import { strategy } from '../services/'

export function useDependency(content) {
  const [data, setData] = useState(null)

  const dataStrategy = useMemo(() => strategy(content), [content])

  const getter = useCallback(
    async () => setData(await dataStrategy.load(content)),
    [content, dataStrategy],
  )

  useEffect(() => getter(), [getter])

  return useMemo(
    () => ({
      [content]: data,
      refresh: getter,
    }),
    [content, data, getter],
  )
}
