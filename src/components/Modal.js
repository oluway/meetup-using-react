function Modal(props){
    return (
    <div className="modal">
        <h1>Are you sure?</h1>
        <button className="btn btn--alt" onClick={ props.onClick }>Cancel</button>
        <button className="btn"onClick={ props.onClick } >Confirm</button>
    </div>
    );
}

export default Modal