import { createContext, useState, useRef, useCallback } from 'react'
import { nanoid } from '@ebflat9/fp'
import { Header } from './Header'
import { Content } from './Content'

export const ExpandableContext = createContext({ expanded: false })

const createInitialStateFromProp = (value, expandableId) => ({
  expanded: !!value,
  expandableId,
})

export function Expandable({ children, className, expanded, initialState }) {
  const expandableId = useRef(nanoid())
  const [state, setState] = useState(
    createInitialStateFromProp(initialState ?? expanded, expandableId),
  )

  const toggle = useCallback(
    () =>
      setState((previousState) => ({
        ...previousState,
        expanded: !previousState.expanded,
      })),
    [setState],
  )

  return (
    <ExpandableContext.Provider value={[state, toggle]}>
      <div className={className}>{children}</div>
    </ExpandableContext.Provider>
  )
}

Expandable.Header = Header
Expandable.Content = Content
