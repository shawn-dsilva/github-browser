import React, {useState} from 'react'
import Modal from './Modal'

function AddRepositoryModal() {

    const [modalToggle, setModalToggle] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);
    const [owner, setOwner] = useState("");
    const [repoName, setRepoName] = useState("");

    const modalToggler = () => {
        setModalToggle(!modalToggle);
    }

    const handleSubmit = (event) => {

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
        </Modal>
      </>
    );
}

export default AddRepositoryModal
