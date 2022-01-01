import { useEffect, useRef } from 'react'

const DEFAULT_OPTIONS = {
  restoreOnUnmount: false,
}

export function useTitle(title, options = DEFAULT_OPTIONS) {
  const previousTitleRef = useRef(document.title)

  if (document.title !== title) document.title = title

  useEffect(() => {
    if (options?.restoreOnUnmount) {
      const previousTitle = previousTitleRef.current
      return () => (document.title = previousTitle)
    }
    return null
  }, [options, previousTitleRef])
}
