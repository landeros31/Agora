import React from "react";
import Ecosistema from "./Ecosistema";

import agora from "../../../assets/static/agora.png";
import redsocial from "../../../assets/static/red-social.png";
import convocatorias from "../../../assets/static/convocatorias.png";
import administrador from "../../../assets/static/administrador.png";

const ecosistemas = [
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
    {
        id: 4,
        title: "Administrador",
        image: administrador,
        url: "https://google.com",
    },
];

function Ecosistemas() {
    return (
        <div className="boton-salir">
            <button type="button" class="btn btn-link col-md-1 ">
                Salir
            </button>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="texto">
                    <h2>Ecosistema de aplicaciones</h2>
                    <div className="row">
                        {ecosistemas.map(({ title, image, url, id }) => (
                            <div className="col-md-3" key={id}>
                                <Ecosistema
                                    imageSource={image}
                                    title={title}
                                    url={url}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ecosistemas;
