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
        <div className="modal-content" id="descr">
          <h1 className="modal-title">{project.title}</h1>
          <p className="modal-description" >
            <div><b>Year:</b> {project.year}</div>
            <div><b>Made with:</b> {project.technologies}</div>
            <br></br>
            {project.description}
          </p>​
          <div className="images-container">

          {project.videos && (
          <div>
            {project.videos.map(_vid =>
              _vid.endsWith(".mp4") || _vid.endsWith(".mov") ? (
                <video controls muted className="images">
                  <source src={`/${_vid}`} type="video/mp4"/>
                </video>
                 //{document.getElementById('vid').play();}

              ) :

              _vid.endsWith(".gif") ? (
                <img
                  src={`/${_vid}`}
                  alt={process.env.PUBLIC_URL + _vid}
                  className="images"
                />
              ) : (
                <iframe
                  className="images"
                  src={_vid}
                  title="YouTube video player"
                  allow="fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              )
          )}
          </div>
          )}
          </div>
          <h2>Gallery</h2>
          <div className="images-container">
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
