import React, {useState,useEffect,useMemo} from 'react'
import axios from 'axios';

function ListBranches({selectedRepo}) {

  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [branches, setBranches] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      setBranches([]);
        try {
            const response = await axios(`https://api.github.com/repos/${selectedRepo.owner}/${selectedRepo.name}/branches`);
            response.data.forEach( (newBranch) => {
              setBranches(currBranches => [...currBranches, newBranch]);
            })
          } catch (error) {
            setError(true);
          }
      setLoading(false);
    };
    fetchData()
  }, [selectedRepo]);

  const makeList = () => {

    let repoList = branches.map( (branch, index) => {
        return (
        <div key={index} className='branch-item' onClick={() => clickHandler(branch)}>
            <strong>{branch.name}</strong>
        </div>
        )
    });

    console.log(repoList)

    return repoList
  }

  const clickHandler = (branch) => {
    console.log(branch.name);
  }

    return (
        <div className='details-list'>
             {isError && <div>Something went wrong ...</div>}
 
 {isLoading ? (
   <div>Loading ...</div>
 ) : (
  makeList()
 )}
        </div>
    )
}

export default ListBranches
