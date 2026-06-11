import React from 'react';
import './projects.css';
import EventManagement from '../../assets/Event_Management.png';
import FlowerShop1 from '../../assets/flower_shop_1.png';
import FlowerShop2 from '../../assets/flower_shop_2.png'
import Finance from '../../assets/finance.png';

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "University Event Management System",
      description: "A comprehensive web application developed to manage university events, campus activities, and schedules, allowing smooth organization and student participation tracking.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      github: "https://github.com/PamodyaNethmi/web_project_ca01", 
      image: EventManagement
    },
    {
      id: 2,
      title: "Bloom & Petal Flower Shop",
      description: "An elegant e-commerce web application developed for a modern flower shop, featuring beautiful floral displays and a seamless, user-friendly shopping experience.",
      tech: ["React.js+Vite", "CSS", "HTML", "JS"],
      github: "https://github.com/PamodyaNethmi/flower_shop_react",
      image: FlowerShop1,
      imageHover: FlowerShop2
    },
    {
      id: 3,
      title: "Finance Management System",
      description: "A secure and efficient web application designed to track personal expenses, manage monthly budgets, and provide insightful visual summaries of financial habits.",
      tech: ["Vue", "Go", "JS", "CSS", "HTML"],
      github: "https://github.com/Rukshanmohottige/Erp_Finance_Module",
      image: Finance
    }
  ];

  return (
    <section id="projectsPage">
      <h1 className="projectsTitle">My Projects</h1>
      <span className="projectsDesc">
        Here are some of the recent projects I have worked on, combining creative UI/UX design with clean, scalable code.
      </span>
      
      <div className="projectsContainer">
        {projectData.map((project) => (
          <div className="projectCard" key={project.id}>
            <div className="projectImgContainer">
            <img src={project.image} alt={project.title} className={`projectImg mainImg ${project.imageHover ? 'has-slideshow' : ''}`} />
            {project.imageHover && (
                <img 
                  src={project.imageHover} 
                  alt={project.title} 
                  className={`projectImg hoverImg has-slideshow`} 
                />
              )}
            </div>
            <div className="projectDetails">
              <h2 className="projectCardTitle">{project.title}</h2>
              <p className="projectCardDesc">{project.description}</p>
              
              <div className="projectTechTags">
                {project.tech.map((tech, index) => (
                  <span className="techTag" key={index}>{tech}</span>
                ))}
              </div>
              
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="projectLinkBtn">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;