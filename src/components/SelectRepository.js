import React from 'react'
import ListRepos from './ListRepos'

function SelectRepository() {
    return (
        <div className='select-repo'>
            <ListRepos/>
            <div className='add-repo-container'>
                <button className='add-repo-button'> + </button>
            </div>
        </div>
    )
}

export default SelectRepository
