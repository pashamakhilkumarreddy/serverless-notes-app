import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: true,
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      <Error />
    }
    return this.props.children;
  }
}

const Error = () => {
  return (
    <div></div>
  )
}

export default ErrorBoundary;
