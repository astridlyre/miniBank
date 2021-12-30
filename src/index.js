import { StrictMode } from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { Store } from './store/'

render(
  <StrictMode>
    <Store>
      <App />
    </Store>
  </StrictMode>,
  document.getElementById('root'),
)
