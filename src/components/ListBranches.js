import React, {useState,useEffect,useMemo} from 'react'
import axios from 'axios';
import CommitsModal from './CommitsModal';
import ErrorMessage from './ErrorMessage';
import LoadingSpinner from './LoadingSpinner';

function ListBranches({selectedRepo}) {

  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)
  const [branches, setBranches] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");


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
            setErrorMsg(error.toString());
          }
      setLoading(false);
    };
    fetchData()
  }, [selectedRepo]);

  const makeList = () => {

    let repoList = branches.map( (branch, index) => {
        // return (
        // <div key={index} className='branch-item' onClick={() => clickHandler(branch)}>
        //     <strong>{branch.name}</strong>
        // </div>
        // )

        return <CommitsModal branch={branch} selectedRepo={selectedRepo}/>
    });

    console.log(repoList)

    return repoList
  }


    return (
        <div className='details-list'>
             {isError && <ErrorMessage errMsg={errorMsg}/>}
 
 {isLoading ? (
<LoadingSpinner/> ) : (
  makeList()
 )}
        </div>
    )
}

export default ListBranches
