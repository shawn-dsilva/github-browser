import React from 'react'

function ErrorMessage({errMsg}) {
    return (
        <div className='error-container'>
            <i class="fas fa-exclamation-triangle"></i>
            <span>{errMsg}</span>
        </div>
    )
}

export default ErrorMessage
