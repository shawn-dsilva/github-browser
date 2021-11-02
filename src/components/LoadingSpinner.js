import React from 'react'

function LoadingSpinner() {
    return (
        <div className="loading-container">
            <div className="lds-dual-ring"></div>
            <span>LOADING</span>
        </div>
    )
}

export default LoadingSpinner
