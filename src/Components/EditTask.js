import { Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTask } from '../Redux/TodoSlice/TodoSlice';



function EditTask({id}) {
    const [show, setShow] = useState(false);
     const dispatch =useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [edited, setedited] = useState({title:"",
  description:""})
  return (
    <div>  <Button variant="primary" onClick={handleShow}>
   Edit Task
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body  classename='inps' >
    <input type='texte' placeholder='enter task title' 
        onChange={(e)=>{setedited({...edited, title: e.target.value})}} />
      <input type='texte' placeholder='enter task title' 
        onChange={(e)=>{setedited({...edited, description: e.target.value})}}/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick= {()=>{
    dispatch( updateTask({id:id, edited}));handleClose(); }} >
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default EditTask