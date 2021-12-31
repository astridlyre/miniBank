import {
  createContext,
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from 'react'
import { nanoid, isFunction } from '@ebflat9/fp'
import { Header } from './Header'
import { Content } from './Content'

export const ExpandableContext = createContext({ expanded: false })

const createStateFromProp = (value, expandableId) => ({
  expanded: !!value,
  expandableId,
})

export function Expandable({
  children,
  className,
  expanded,
  onUpdate,
  initialState,
}) {
  const expandableId = useRef(nanoid())
  const controlled = useMemo(() => isFunction(onUpdate), [onUpdate])
  const [state, setState] = useState(
    createStateFromProp(expanded ?? initialState, expandableId.current),
  )

  const toggle = useCallback(() => {
    const newState = { ...state, expanded: !state.expanded }
    if (isFunction(onUpdate)) {
      return onUpdate(newState)
    }
    return setState(newState)
  }, [state, setState, onUpdate])

  useEffect(() => {
    if (controlled) {
      setState(createStateFromProp(expanded, expandableId.current))
    }
  }, [expanded, controlled])

  return (
    <ExpandableContext.Provider value={[state, toggle]}>
      <div className={className}>{children}</div>
    </ExpandableContext.Provider>
  )
}

Expandable.Header = Header
Expandable.Content = Content
