import React from 'react';
import './index.css';
import Pdata from './Pdata';

const Card = ({ setSelectedImg }) => {
    return (
        <>
         <div className="cards"> 
                { Pdata.map(doc => (
                    <div className="card" onClick={() => setSelectedImg(doc.imgscr)} >
                    <img src={doc.imgscr} alt="myImg" className="card__img" />
                     <div className="card__info">
                    <span className="card__category">Image by: {doc.uploader}</span>
                </div> 
                </div>
                ))}
             </div> 
        </>
    );
}

export default Card;