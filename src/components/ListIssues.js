import React, {useState,useEffect,useMemo} from 'react'
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

function ListIssues({selectedRepo}) {

  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [issues, setIssues] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      setIssues([]);
        try {
            const response = await axios(`https://api.github.com/repos/${selectedRepo.owner}/${selectedRepo.name}/issues`);
            response.data.forEach( (newIssues) => {
              setIssues(currIssues => [...currIssues, newIssues]);
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

    let issueList = issues.map( (issue, index) => {
        return (
        <div key={index} className='issue-item' >
            <strong>{issue.title}</strong>
            <div style={{display:'flex'}}>
            <img src={issue.user.avatar_url} alt="avatar"></img>
            <p>{issue.user.login}</p>
            </div>       
        </div>
        )
    });

    console.log(issueList)

    return issueList
  }


    return (
        <div className='details-list'>
             {isError && <ErrorMessage errMsg={errorMsg}/>}
 
 {isLoading ? (
   <LoadingSpinner/>
 ) : (
  makeList()
 )}
        </div>
    )
}

export default ListIssues
