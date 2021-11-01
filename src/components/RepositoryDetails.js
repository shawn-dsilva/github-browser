import React, { useState } from 'react'
import ListBranches from './ListBranches';

function RepositoryDetails({selectedRepo}) {

    const [activeTab, setActiveTab] = useState('branches');

    return (
        <div className="repo-details">
            <div className='details-header'>
            <h1>{selectedRepo.fullName}</h1>
            <button>DELETE</button>
            </div>
            <div className="details-tabs-container">
                <div className={ activeTab === 'branches' ? 'details-tabs-active':'details-tabs'}                       
                onClick={() => setActiveTab('branches')}><i class="fas fa-code-branch"></i> BRANCHES</div>

                <div className={ activeTab === 'issues' ? 'details-tabs-active':'details-tabs'}
                onClick={() => setActiveTab('issues')}><i class="far fa-dot-circle"></i> ISSUES</div>
            </div>
            <div className='details-list'>
                {activeTab === 'branches' ? <ListBranches selectedRepo={selectedRepo}/> : null}
            </div>
        </div>
    )
}

export default RepositoryDetails
