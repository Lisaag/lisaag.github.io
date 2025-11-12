import React, {useState, useContext} from "react";
import {createPortal} from "react-dom";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

import {Modal} from "../../components/projectDescription/Modal";
import projectDetailsData from "../../data/projectDetailsData";

export default function StartupProject() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleButtonClick = value => {
    setModalOpen(false);
  };

  const showPopup = id => {
    const project = projectDetailsData.find(p => p.id === id);
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
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
        <div className="main" id="projects">
          <div>
            <h1 className="skills-heading">{bigProjects.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode project-subtitle"
                  : "subTitle project-subtitle"
              }
            >
              {bigProjects.subtitle}
            </p>

            <div className="projects-container">
              {bigProjects.projects.map((project, i) => {
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
                    <div className="project-detail">
                      {project.footerLink ? (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, i) => {
                            return (
                              <span
                                key={i}
                                className={
                                  isDark ? "dark-mode see-more" : "see-more"
                                }
                                onClick={() => showPopup(project.projectId)}
                              >
                                {link.name}
                              </span>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
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
