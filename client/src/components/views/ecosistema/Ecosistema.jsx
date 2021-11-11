import React from "react";
import PropTypes from "prop-types";

import "./ecosistema.css";

function Ecosistema({ imageSource, title, url }) {
    return (
        <div className="card text-center bg-white animate__animated ">
            <div className="overflow">
                <img
                    src={imageSource}
                    alt="a wallpaper"
                    className="card-img-top"
                />
            </div>
            <div className="card-body text-light">
                <a
                    href={url ? url : "#!"}
                    target="_blank"
                    className="btn btn-outline-secondary border-0"
                    rel="noreferrer"
                >
                    <h4 className="card-title">{title}</h4>
                </a>
            </div>
        </div>
    );
}

Ecosistema.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    imageSource: PropTypes.string,
};

export default Ecosistema;
