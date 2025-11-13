import React from "react";
import "./Modal.scss";

export const Modal = ({closeModal, project, children}) => {
  return (
    <div
      className="modal-container"
      onClick={e => {
        if (e.target.className === "modal-container")
          closeModal("Modal was closed");
        document.body.style.overflow = "auto";
      }}
    >
      <div className="modal">
        <div
          className="modal-header"
          onClick={() => closeModal("Modal was closed")}
        >
          <p className="close">&times;</p>
        </div>
        <div className="modal-content">
          <h1>{project.title}</h1>
          <p>{project.description}</p>​
          {project.videos.map(_vid =>
            _vid.endsWith(".mp4") ? (
              <video className="images" controls>
                <source src={`/${_vid}`} type="video/mp4"/>
              </video>
            ) :

            _vid.endsWith(".gif") ? (
              <img
                src={`/${_vid}`}
                alt={process.env.PUBLIC_URL + _vid}
                className="images"
              />
            ) : (
              <iframe
                width="560"
                height="315"
                src={_vid}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            )
          )}
          <h2>Gallery</h2>
          <div className="images-container">
            ​
            {project.images.map(_img => (
              <img
                src={`/${_img}`}
                alt={`/${_img}`}
                className="images"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
