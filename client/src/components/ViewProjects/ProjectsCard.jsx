import React from 'react'
import './Viewprojects.css'
import { Link } from 'react-router-dom'



function ProjectsCard({ title, Img, description}) {
    return (
        <div className='container'>
                <div className="card">
                <div className="overflow">
                <img className='img' src={Img} alt="projects" />
                </div>
                    <div className="card-body">    
                        <h2 className="card-title">{title}</h2>
                        <p className="card-text text-secondary">{description}</p>
                    </div>
                    <Link to="#">
                    <button className="card_btn">ver más</button>
                    </Link>
                </div>
         
                </div>
    )
}

export default ProjectsCard
