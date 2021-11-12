import React from 'react';
import "./Viewproject.css";
import img from '../../../assets/static/img.jpg'

const Viewproject = () => {
    return (
        <div>
            {/*<div className="container-one">            
                    <button type="button" className="btn btn-return">Volver</button>
            </div>*/}
            <div className="containers">
                <img src={img} alt="" />
                <h1>Proyecto Final - Prográmate II</h1>

                <p>Bienvenido a tu proyecto final de desarrollo web full stack , te felicitamos por haber llegado hasta este punto de tu formación. Sabemos que tienes todas las capacidades para ser un profesional altamente exitoso y por eso te presentamos el último reto académico de Prográmate y Simplon, antes de salir al mundo laboral.   Pertenecerás a un equipo de desarrollo  en el cual deberás desempeñar un role como desarrollador y llegar al MVP de la aplicación que esté propuesta en el brief de proyecto detallado.  El cual deberá seguir los estándares propuestos detallados en el documento "Guía de competencias a evaluar" y que será desarrollado con el stack MERN. Este será tu proyecto master con el que lograrás corroborar todas las competencias necesarias para certificarte como desarrollador web Full Stack con Prográmate y Simplon.</p>
            </div>
            <div className="containers"> 
                <h2>Marcos de competencias</h2>
                <p>Desarrollador web y web móvil</p>
            </div>
            <div className="containers">
                <h2>Recurso(s)</h2>
                <p><a href="#">Recursos Gráficos y Plantillas</a></p>
            </div>
            <div className="containers">
                <h2>Contexto del proyecto</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi voluptas inventore velit aliquam doloremque ut nemo, praesentium, omnis neque odit similique est numquam, laudantium eveniet maiores nihil debitis sunt nulla.</p>
            </div>
            <div className="containers">
                <h2>Modalidades pedagógicas</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi voluptas inventore velit aliquam doloremque ut nemo, praesentium, omnis neque odit similique est numquam, laudantium eveniet maiores nihil debitis sunt nulla.</p>
            </div>
            <div className="containers">
                <h2>Criterios de rendimiento</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi voluptas inventore velit aliquam doloremque ut nemo, praesentium, omnis neque odit similique est numquam, laudantium eveniet maiores nihil debitis sunt nulla.</p>
            </div>
            <div className="containers">
                <h2>Modalidades de evaluación</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi voluptas inventore velit aliquam doloremque ut nemo, praesentium, omnis neque odit similique est numquam, laudantium eveniet maiores nihil debitis sunt nulla.</p>
            </div>
            <div className="containers">
                <h2>Entregables</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi voluptas inventore velit aliquam doloremque ut nemo, praesentium, omnis neque odit similique est numquam, laudantium eveniet maiores nihil debitis sunt nulla.</p>
            </div>
            <div className="containers">
                <h2>Fecha de entrega</h2>
                <p>xx/xx/xx</p>
            </div>
        </div>
    );
};

export default Viewproject; 