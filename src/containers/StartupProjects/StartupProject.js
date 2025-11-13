import React, {useState, useContext} from "react";
import {createPortal} from "react-dom";
import "./StartupProjects.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

import {Modal} from "../../components/projectDescription/Modal";
import projectDetailsData from "../../data/projectDetailsData";

export default function StartupProject({ data, idhref }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleButtonClick = value => {
    setModalOpen(false);
  };

  const showPopup = id => {
    window.scrollBy(0, 1);
    const project = projectDetailsData.find(p => p.id === id);
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const {isDark} = useContext(StyleContext);
  if (!data.display) {
    return null;
  }
  return (
    <div>
      {modalOpen &&
        createPortal(
          <Modal
            closeModal={handleButtonClick}
            project={selectedProject}
          ></Modal>,
          document.body
        )}
      <Fade bottom duration={1000} distance="20px">
        <div className="main" id={idhref}>
          <div>
            <h1 className="skills-heading">{data.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {data.subtitle}
            </p>

            <div className="projects-container">
              {data.projects.map((project, i) => {
                return (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    {/* <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                  </h5> */}
 
                    {project.image ? (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-image-proj"
                        ></img>
                      </div>
                    ) : null}
                    <span className="project-detail" onClick={() => showPopup(project.projectId)}>
                      See More
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
