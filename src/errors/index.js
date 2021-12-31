import { Component } from 'react'

export class ErrorBoundary extends Component {
  static getDerivedStateFromError(error) {
    return error ? { hasError: true } : null
  }

  state = { hasError: false }

  componentDidCatch(error, info) {
    console.error(error)
    console.info(info)
  }

  render() {
    return this.state.hasError ? (
      <div>
        <p>Whoops! Something went wrong</p>
      </div>
    ) : (
      this.props.children
    )
  }
}
