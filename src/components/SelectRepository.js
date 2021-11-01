import React from 'react'
import ListRepos from './ListRepos'

function SelectRepository({selectedRepo,setSelectedRepo}) {
    return (
        <div className='select-repo'>
            <ListRepos selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo}/>
            <div className='add-repo-container'>
                <button className='add-repo-button'> + </button>
            </div>
        </div>
    )
}

export default SelectRepository
