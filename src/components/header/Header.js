import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  educationInfo,
  bigProjects,
  personalProjects
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  //const {isDark} = true
  const viewExperience = workExperiences.display;
  const viewEducationInfo = educationInfo.display;
  const viewBigProjects = bigProjects.display;
  const viewPersonalProjects = personalProjects.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewEducationInfo && (
            <li>
              <a href="#education">Education</a>
            </li>
          )}
          {viewBigProjects && (
            <li>
              <a href="#projects">School Projects</a>
            </li>
          )}
          {viewPersonalProjects && (
            <li>
              <a href="#personalProjects">Personal Projects</a>
            </li>
          )}
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
