import React from "react";
//import logo from "../../assets/static/logosWhite.png";
//import projectIcon from "../../assets/static/icons/projects-icon.svg";
//import dashboardIcon from "../../assets/static/icons/dashboard-icon.svg";
//import forumIcon from "../../assets/static/icons/forum-icon.svg";

import "./headerFooterStyles.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="headerContainer">
          <div className="hamburguerMenu">
            <box-icon name="menu"></box-icon>
          </div>

          <img className="Logo" src="" alt="Prográmate-logotipo" />

          <div className="iconsContainer">
            <div>
              <img src="" alt="dashboardIcon" />
              <a href="https://www.google.com">Dashboard</a>
            </div>

            <div>
              <img src="" alt="projectIcon" />
              <a href="https://www.google.com">Projectos</a>
            </div>

            <div>
              <img src="" alt="forumIcon" />
              <a href="https://www.google.com">Foro</a>
            </div>
          </div>

          <div className="notificationsConfigContainer">
            <box-icon name="bell"></box-icon>
            <b>
              <span> 3</span>
            </b>
            <a className="btnConfig" href="https://www.google.com">
              ⚙
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
