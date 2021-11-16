import React from 'react';
import "./ViewAnnounce.jsx";
import img from "../../../../assets/static/cara.jpg"

const ViewAnnounce = () => {
    return (
        <div>
            <h1>Anuncios</h1>
            <div class="container2" id="search">
		        <form action="">
			        <input type="text" class="search-bar" id="search-bar" placeholder="Buscar..." />
		        </form>	
		    </div>
            <div className="container-comment">
                <img src={img} className="image-comment" /><p className="name-comment">Laura Melissa Gonzales Suesca</p>
                <p className="comment">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi expedita consequuntur eius, adipisci tempore! Odit nostrum possimus deserunt quod at. Nostrum obcaecati ea suscipit sed delectus dolorem qui magni?</p>
                <hr />
            </div>
            <div className="container-comment">
                <img src={img} className="image-comment" /><p className="name-comment">Laura Melissa Gonzales Suesca</p>
                <p className="comment">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi expedita consequuntur eius, adipisci tempore! Odit nostrum possimus deserunt quod at. Nostrum obcaecati ea suscipit sed delectus dolorem qui magni?</p>
                <hr />
            </div><div className="container-comment">
                <img src={img} className="image-comment" /><p className="name-comment">Laura Melissa Gonzales Suesca</p>
                <p className="comment">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi expedita consequuntur eius, adipisci tempore! Odit nostrum possimus deserunt quod at. Nostrum obcaecati ea suscipit sed delectus dolorem qui magni?</p>
                <hr />
            </div>
            <div className="container-comment">
                <img src={img} className="image-comment" /><p className="name-comment">Laura Melissa Gonzales Suesca</p>
                <p className="comment">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi expedita consequuntur eius, adipisci tempore! Odit nostrum possimus deserunt quod at. Nostrum obcaecati ea suscipit sed delectus dolorem qui magni?</p>
                <hr />
            </div><div className="container-comment">
                <img src={img} className="image-comment" /><p className="name-comment">Laura Melissa Gonzales Suesca</p>
                <p className="comment">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam commodi expedita consequuntur eius, adipisci tempore! Odit nostrum possimus deserunt quod at. Nostrum obcaecati ea suscipit sed delectus dolorem qui magni?</p>
                <hr />
            </div>
        </div>
    );
};

export default ViewAnnounce; 