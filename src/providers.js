import { StrictMode } from 'react'
import { Store } from './store/'
import { Theme } from './theme/'
import { ErrorBoundary } from './errors/'

export function Providers({ children }) {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Store>
          <Theme>{children}</Theme>
        </Store>
      </ErrorBoundary>
    </StrictMode>
  )
}
