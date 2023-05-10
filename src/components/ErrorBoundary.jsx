import React from 'react'

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }
    render() {
        if (this.state.hasError) {
            return <p>Something went wrong</p>
        }
        return this.props.children
    }
}