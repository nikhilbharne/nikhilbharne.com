import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import avatarImage from '../assets/images/avatar_circle.png';


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
        <img src={avatarImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nikhilbharne" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nikhil-bharne/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Nikhil Bharne</h1>
          <div className="animated-text">
              <p>DevOps Engineer</p>
         </div>

          <div className="mobile_social_icons">
            <a href="https://github.com/nikhilbharne" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/nikhil-bharne/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;