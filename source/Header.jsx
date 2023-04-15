import React from 'react'

export default ({className,headerText}) => {
    return <h1 className={className || 'simple-header'}>{headerText}</h1>
}