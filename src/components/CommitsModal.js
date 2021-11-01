import React, { useContext, useRef, useState } from 'react';
import Modal from './Modal';
import axios from 'axios';

function CommitsModal({branch, selectedRepo}) {

    const [modalToggle, setModalToggle] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [commits, setCommits] = useState([])

    const fetchCommits = async () => {
        setError(false);
        setLoading(true);
        setCommits([]);
          try {
              const response = await axios(`https://api.github.com/repos/${selectedRepo.owner}/${selectedRepo.name}/commits?sha=${branch.name}`);
              response.data.forEach( (newCommit) => {
                setCommits(currCommits => [...currCommits, newCommit]);
              })
            } catch (error) {
              setError(true);
            }
        setLoading(false);
    };

    const modalToggler = () => {
        setModalToggle(!modalToggle);
        fetchCommits();
    }

    const makeList = () => {

        let commitList = commits.map( (commit, index) => {
            console.log(commit);
            let options = { year: 'numeric', month: 'short', day: 'numeric' };
            let date = new Date(commit.commit.author.date).toLocaleDateString("en-US", options);
            return (
            <div key={index} className='issue-item' >
                <strong>{date}</strong>
                <p>{commit.commit.message}</p>
                {
                    commit.committer !== null ?
                    <div style={{display:'flex'}}>
                    <img src={commit.committer.avatar_url} alt="avatar"></img>
                    <p>{commit?.committer.login}</p>
                    </div> : ( <div style={{display:'flex'}}>
                    <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="avatar"></img>
                    <p>{commit.commit.author.name}</p>
                    </div> )
                }
               
            </div>
            )
        });    
        return commitList
      }


    return (
        <React.Fragment>
        <div  className="branch-item" onClick={e => modalToggler(e)} >
            <strong>{branch.name}</strong>
        </div> 
        <Modal pre="COMMITS :" header={branch.name} show={modalToggle} onClose={e => modalToggler(e)}>
            {isError && <div>Something went wrong ...</div>}
                 {isLoading ? (
                    <div>Loading ...</div>
                ) : (
                makeList()
             )}
        </Modal>
        </React.Fragment>
    )
}

export default CommitsModal