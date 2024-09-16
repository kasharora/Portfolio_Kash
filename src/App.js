import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Real-Time Communication App Using MERN Stack"
        projectDesc="A real-time chat application built using the MERN stack, featuring user authentication, instant messaging, group chats, and responsive UI for seamless communication across devices."
        projectLink="https://chat-application-front-end-gohp.onrender.com"
        // deployedProjectLink="https://wiggles.vercel.app"
        projectImg={require('./images/projectWiggles1.PNG')}
      />

      <ProjectCard
        projectTitle="Responsive Website with HTML, CSS, and JavaScript"
        projectDesc="A responsive website crafted with HTML, CSS, and JavaScript, featuring interactive elements, dynamic content, and a modern design approach for enhanced user experience across all devices."
        projectLink="https://www.electrifuel.com/"
        projectImg={require('./images/projectGlassmorphism1.png')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="Dynamic and Interactive Portfolio Built with ReactJS"
        projectDesc="Explore portfolio, a dynamic and interactive showcase developed with ReactJS. Featuring modern UI/UX designs, seamless navigation, and responsive layouts, this portfolio demonstrates my proficiency in building engaging web applications using cutting-edge technologies."
        projectLink="https://vaibhavparihar.in/"
        // deployedProjectLink="https://deepajha14.github.io/Rog-Free/"
        projectImg={require('./images/projectRogfree1.png')}
      />

<ProjectCard
        projectTitle="Text Case Converter"
        projectDesc="Convert text to upper case, lower case, or capitalize sentences instantly. A user-friendly interface powered by ReactJS ensures fast, seamless interactions with real-time text transformation."
        projectLink="https://kasharora.github.io/Textutils/"
        projectImg={require('./images/4thproject.PNG')}
      />

      
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
