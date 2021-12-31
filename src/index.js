import { render } from 'react-dom'
import { App } from './App'
import { Providers } from './providers'
import { ThemeSwitcher } from './theme/'

render(
  <Providers>
    <App />
    <ThemeSwitcher />
  </Providers>,
  document.getElementById('root'),
)
