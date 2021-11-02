import React, {useState,useEffect,useMemo} from 'react'
import axios from 'axios';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';

function ListRepos({selectedRepo, setSelectedRepo, repos, setRepos}) {

  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("");

  const INITIAL_REPOS = useMemo(() => [
      {"owner":"facebook", "repo":"react"},
      {"owner":"reduxjs", "repo":"redux"},
      {"owner":"microsoft", "repo":"TypeScript"}
  ],[]) 

  useEffect(() => {
    const fetchData = () => {
      setError(false);
      setLoading(true);
  
      INITIAL_REPOS.forEach( async (object) => {
        try {
            const response = await axios(`https://api.github.com/repos/${object.owner}/${object.repo}`);
            const newRepo = {"name": response.data.name, "description": response.data.description, "owner": response.data.owner.login, "fullName": response.data.full_name}
            setRepos(currRepos => [...currRepos, newRepo]);
          } catch (error) {
            setError(true);
            setErrorMsg(error.toString());
          }
      })
      setLoading(false);
    };
    fetchData()
  }, [INITIAL_REPOS]);

  const makeList = () => {

    let repoList = repos.map( (repo, index) => {
        const className = selectedRepo?.name === repo.name ? 'repo-item repo-item-active': 'repo-item';
        console.log(selectedRepo)
        return (
        <div key={index} className={className} onClick={() => clickHandler(repo)}>
            <strong>{repo.name}</strong>
            <p>{repo.description}</p>
        </div>
        )
    });

    return repoList
  }

  const clickHandler = (repo) => {
    setSelectedRepo(repo)
  }

    return (
        <div className='repo-list'>
             {isError && <ErrorMessage errMsg={errorMsg}/>}
 
 {isLoading ? (
   <LoadingSpinner/>
 ) : (
  makeList()
 )}
        </div>
    )
}

export default ListRepos
