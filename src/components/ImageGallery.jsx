import React from 'react'

import './ImageGallery.css';

function ImageGallery({openModal}) {

    const arrImgs = [
        { text: 'people and radio', category: 'Música' },
        { text: 'black dog in car', category: 'Pet' },
        { text: 'cat', category: 'Pet' },
        { text: 'laptop on the table', category: 'Tecnologia' },
        { text: 'box on chair', category: 'Design' },
        { text: 'book', category: 'Design' },
    ];

    return (
        <div>
            <div id="imagens" className="container">
                <a href="#imagens"><h2>IMAGENS</h2></a>
                <div className="row">

                    {arrImgs.map((item, index) => {
                        let imageName = `images/0${index+1}-small.png`;

                        return <div key={index} className="card_body">
                            <div className="card_img">
                                <img src={imageName} className="small_img" onClick={() => openModal(index)} alt={item.text} />
                            </div>
                            <p>{item.text}</p>
                            <small>{item.category}</small>
                        </div>
                    })}

                </div>
                <div className="btn-back-home">
                    <a href="#home">Voltar para a Home</a> 
                </div>                 
            </div>

        </div>
    )
}

export default ImageGallery;
