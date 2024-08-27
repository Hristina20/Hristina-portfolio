import getFeaturedProjects from "../pages/projects.js";
import { createCard } from "./utils.js";

const featuredProject = getFeaturedProjects();
console.log(getFeaturedProjects);
const card = createCard("https://plus.unsplash.com/premium_photo-1723901829993-56f5582053e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D", "title", "#");
console.log(card);

const renderProjectsSection = () => {
    const featuredProjects = getFeaturedProjects();
    console.log(featuredProjects);
    const projectGrid = document.getElementById("projectsGrid");
    featuredProjects.featuredProject((project) => {
        const card = createCard(project.imgUrl, project.title, project.content, "col-4", "#");
        projectGrid.appendChild(card);

    })
}

renderProjectsSection();