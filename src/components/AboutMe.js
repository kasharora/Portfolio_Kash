import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpeg";
import resume from './resume.pdf'

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="aboutMe-text">
  <h3>Hey there, 👋</h3>
  I'm <span>Kashish</span>, a recent graduate who completed <span>B.Tech in CSE</span> in 2023. I have hands-on experience in building websites with a strong focus on responsiveness, accessibility, and clean design aesthetics. My 6-month internship experience in <span>ReactJS</span> has allowed me to sharpen my skills in frontend development and deliver efficient and organized code. Currently, I'm diving into the world of <span>freelancing</span>, where I specialize in crafting engaging user experiences and exploring <span>backend technologies.</span> I'm always on the lookout for <span>new opportunities</span> to collaborate and create impactful software solutions. Let's connect and build something amazing together.
  <br /> <br />
  Beyond coding, <span>I'm an explorer at heart❤️</span> – always eager to learn new things and take on challenges. When I'm not coding, I enjoy reading, traveling, and discovering new technologies. It's my way of staying inspired and keeping my creativity alive.
  Want to know more about me? Feel free to <a
  className="resume"
  href= {resume} // Make sure to provide the correct path to your resume file
  download="Kashish_Resume.pdf"   // This sets the default name for the downloaded file
  target="_blank"
  rel="noopener noreferrer"
>
  Explore my resume.
</a>
</div>

        <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="img" src={myProfile} alt="Profile"></img>
        </div>
        <div className="name">Kashish</div>
      </div>
  );
}
