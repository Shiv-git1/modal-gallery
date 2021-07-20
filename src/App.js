import React, { useState } from 'react';
import Card from './Card';
import Modal from './Modal';

function App() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <>
            <h1 className="heading">Photographer's Showcase</h1>
            <hr />
            <Card setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </>
    );
}

export default App;