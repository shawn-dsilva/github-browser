import React, {useState,useEffect} from 'react'
import axios from 'axios';

function ListRepos() {

  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [repos, setRepos] = useState([]);
 

    const INITIAL_REPOS = [
        {"owner":"facebook", "repo":"react"},
        {"owner":"reduxjs", "repo":"redux"},
        {"owner":"microsoft", "repo":"TypeScript"}
    ]

  useEffect(() => {
    const fetchData = () => {
      setError(false);
      setLoading(true);
  
      INITIAL_REPOS.forEach( async (object) => {
        try {
            const response = await axios(`https://api.github.com/repos/${object.owner}/${object.repo}`);
            const newRepo = {"name": response.data.name, "description": response.data.description}
            setRepos(currRepos => [...currRepos, newRepo]);
          } catch (error) {
            setError(true);
          }
      })
      setLoading(false);
    };
    fetchData()
  }, []);

  const makeList = () => {

    let repoList = repos.map( (repo) => {
        return (
        <div className='repo-item'>
            <strong>{repo.name}</strong>
            <p>{repo.description}</p>
        </div>
        )
    });

    console.log(repoList)

    return repoList
  }


    return (
        <div className='repo-list'>
             {isError && <div>Something went wrong ...</div>}
 
 {isLoading ? (
   <div>Loading ...</div>
 ) : (
  makeList()
 )}
        </div>
    )
}

export default ListRepos
