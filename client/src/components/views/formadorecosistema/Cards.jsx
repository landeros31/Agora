import React from "react";
import Card from "./Card";

import agora from "../../../assets/static/agora.png";
import redsocial from "../../../assets/static/red-social.png";
import convocatorias from "../../../assets/static/convocatorias.png";

const cards = [
    {
        id: 1,
        title: "Agora",
        image: agora,
        url: "https://google.com",
    },
    {
        id: 2,
        title: "Red social",
        image: redsocial,
        url: "https://google.com",
    },
    {
        id: 3,
        title: "Convocatorias",
        image: convocatorias,
        url: "https://google.com",
    },
];

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="texto">
                <h2>Ecosistema de aplicaciones</h2>
                <div className="row">
                    {cards.map(({ title, image, url, id }) => (
                        <div className="col-md-3" key={id}>
                            <Card imageSource={image} title={title} url={url} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Cards;
