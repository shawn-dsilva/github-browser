import React, {useState} from 'react'
import Modal from './Modal'

function AddRepositoryModal() {

    const [modalToggle, setModalToggle] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    const modalToggler = () => {
        setModalToggle(!modalToggle);
    }

    return (
        <>
        <div  className='add-repo-container' onClick={e => modalToggler(e)} >
            <button className='add-repo-button'> + </button>
        </div> 
             <Modal header={"Add New Repository"} show={modalToggle} onClose={e => modalToggler(e)}>
            
        </Modal>
        </>
    )
}

export default AddRepositoryModal
