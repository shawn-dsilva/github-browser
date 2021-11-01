import React from 'react'
import AddRepositoryModal from './AddRepositoryModal'
import ListRepos from './ListRepos'

function SelectRepository({selectedRepo,setSelectedRepo}) {
    return (
        <div className='select-repo'>
            <ListRepos selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo}/>
            <AddRepositoryModal/>
        </div>
    )
}

export default SelectRepository
