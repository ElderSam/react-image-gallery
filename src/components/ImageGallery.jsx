import React from 'react'

import './ImageGallery.css';

function ImageGallery() {
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

            {/* <div className="modal">
                <div className="modal_content">
                    <img src="images/01-small.png" id="modal_img" alt="modal example"/>
                </div>
                <span id="bt_close">&times;</span>
            </div> */}


                <div id="imagens" className="container">
                    <a href="#imagens"><h2>IMAGENS</h2></a>
                    <div className="row">

                        {arrImgs.map((item, index) => {
                            let imageName = `images/0${index+1}-small.png`;

                            return <div className="card_body">
                                <div className="card_img">
                                    <img src={imageName} className="small_img" alt={item.text} />
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
