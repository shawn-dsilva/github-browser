import React, {useState} from 'react'
import Modal from './Modal'
import axios from 'axios';
import ErrorMessage from './ErrorMessage';

function AddRepositoryModal({repos,setRepos}) {

    const [modalToggle, setModalToggle] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [owner, setOwner] = useState("");
    const [repoName, setRepoName] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const fetchRepo = async () => {
        setError(false);
        setLoading(true);
          try {
              const response = await axios(`https://api.github.com/repos/${owner}/${repoName}`)
              const newRepo = {"name": response.data.name, "description": response.data.description, "owner": response.data.owner.login, "fullName": response.data.full_name};               
               setRepos(currRepos => [...currRepos, newRepo]);
            } catch (error) {
              setError(true);
              console.log('Error');
              console.log(error);
              setErrorMsg(error.toString());
            }
        setLoading(false);
    };

    const modalToggler = () => {
        setModalToggle(!modalToggle);
    }

    const handleSubmit = (event) => {
        fetchRepo();
    }
    return (
      <>
        <div className="add-repo-container" onClick={(e) => modalToggler(e)}>
          <button className="add-repo-button"> + </button>
        </div>
        <Modal
          size={"small"}
          header={"Add New Repository"}
          show={modalToggle}
          onClose={(e) => modalToggler(e)}
        >
                <label>Owner / Organization </label>
                <input
                    type="text"
                    value={owner}
                    name="owner"
                    onChange={(e) => setOwner(e.target.value)}
                ></input>

                <label>Repository Name</label>
                <input
                    type="text"
                    value={repoName}
                    name="repoName"
                    onChange={(e) => setRepoName(e.target.value)}
                ></input>
                <button className="modal-submit" onClick={(e) => handleSubmit(e)}>
                <i class="far fa-plus-square"></i> ADD
                </button>
                { isError ? <ErrorMessage errMsg={errorMsg}/> : ""}
        </Modal>
      </>
    );
}

export default AddRepositoryModal
