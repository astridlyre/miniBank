import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { Store } from './store/'
import { ErrorBoundary } from './errors/'

render(
  <StrictMode>
    <ErrorBoundary>
      <Store>
        <App />
      </Store>
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root'),
)
