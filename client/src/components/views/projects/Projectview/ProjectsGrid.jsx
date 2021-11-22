import React from "react";
import ProjectsCard from "./ProjectsCard";
import { Link } from "react-router-dom";

const data = [
  {
    id: "1",
    title: "Portafolio",
    Img: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, aecenas porttitor congue massa. Fusce posuere, magna sed pulvinar.",
  },
  {
    id: "2",
    title: "web tributo",
    Img: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Yml0Y29pbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, aecenas porttitor congue massa. Fusce posuere, magna sed pulvinar.",
  },
  {
    id: "3",
    title: "E-Commerce App",
    Img: "https://images.unsplash.com/photo-1557821552-17105176677c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, aecenas porttitor congue massa. Fusce posuere, magna sed pulvinar.",
  },
  {
    id: "4",
    title: "Chatapp",
    Img: "https://images.unsplash.com/photo-1552068751-34cb5cf055b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=465&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, aecenas porttitor congue massa. Fusce posuere, magna sed pulvinar.",
  },
  {
    id: "5",
    title: "Crud",
    Img: "https://www.paradavisual.com/wp-content/uploads/2020/01/1-mzMIXN2JodV2taEBzmUKLg-1024x486.png",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, aecenas porttitor congue massa. Fusce posuere, magna sed pulvinar.",
  },
  {
    id: "6",
    title: "Lading Page",
    Img: "https://blog.hotmart.com/blog/2019/09/670x419-O-que-e-Landing-Page-e-como-criar-uma.webp",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, aecenas porttitor congue massa. Fusce posuere, magna sed pulvinar.",
  },
];

function ProjectsGrid() {
  return (
    <> 
    
     <div className="container-btn">  
     <p className="display-4">Briefs de la promoción</p>
          <Link to="#">
            <button className="btn">Agregar Proyectos</button>
          </Link>
          </div>
      <div className="container d-flex justify-content-center align-items-center">
     
        <div className="row">
          
          {data.map(({ id, title, Img, description }) => (
            <div className="col-12 col-md-4 col-sm-2" key={id}>
              <ProjectsCard Img={Img} title={title} description={description} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsGrid;