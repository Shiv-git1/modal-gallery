import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('close')){
        setSelectedImg(null);
        }
    }

    return (
        <div className="backdrop" onClick={handleClick}>
            <button type="submit" class="close">
               <span class="close">&times;</span> 
            </button>
            <img src={selectedImg} alt="popup pic" />
        </div>
    )
}

export default Modal;