import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
   const [showModal, setModalisOpen] = useState(false);
   
   function deleteHandler() {
       setModalisOpen(true)
   }

   function closeModalHandler(){
    setModalisOpen(false)
   }

  return (
    <div className="card">
      <h2>{props.text} </h2>
      <div className="actions">
        <button className="btn" onClick={ deleteHandler }>Delete</button>
      </div>
      {/* if modal is true, render it. Otherwise, don't render anything. */}
      { showModal ? <Modal onClick={ closeModalHandler }/> : null}
      { showModal ? <Backdrop onClick={ closeModalHandler }/> : null}
      
    </div>
  );
}

export default Todo;
