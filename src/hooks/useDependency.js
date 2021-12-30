import { multi, method } from '@ebflat9/fp'
import { useState, useMemo, useEffect, useCallback } from 'react'

const strategy = multi(
  method(
    (key) => key === 'user',
    (key, setter) => setter(JSON.parse(localStorage.getItem(key))),
  ),
)

export function useDependency(content) {
  const [data, setData] = useState(null)

  const getter = useCallback(
    () => strategy(content, setData),
    [content, setData],
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
