import React from 'react'
import AddRepositoryModal from './AddRepositoryModal'
import ListRepos from './ListRepos'

function SelectRepository({selectedRepo,setSelectedRepo, repos, setRepos}) {
    return (
        <div className='select-repo'>
            <ListRepos selectedRepo={selectedRepo} setSelectedRepo={setSelectedRepo} repos={repos} setRepos={setRepos}/>
            <AddRepositoryModal repos={repos} setRepos={setRepos}/>
        </div>
    )
}

export default SelectRepository
