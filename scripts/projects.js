let projects = [];

const getProjects = async () => {
    const data = await fetch("../data/project-data.json");
    const jsonData = await data.json();
    projects = jsonData;
    console.log(jsonData);
}

function getFeaturedProjects() {
   const featuredProjects =  projects.filter((item) => item.isFeatured == true)
   
}

await getProjects();

const renderProjects = () => {
    const projectGrid = document.getElementById("projects");
    if(projectGrid) {
        projectGrid.innerHTML = "";
        projects.forEach((element) => {
            const link = `./ProjectDetails.html?id=${element.id}`;
            const card = createCard(element, "col-6");
            blogGrid.appendChild(card);
        }); 
    }
}

const createCard = (element, colClass, link) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList = colClass;

    const card = document.createElement("div");
    card.classList = "card"; 

    const img = document.createElement("img");
    img.classList = "card-img-top";
    img.src = element.imgUrl;
    img.alt = element.title;

    const cardBody= document.createElement("div");
    cardBody.classList = "card-body";

    const title = document.createElement("h5");
    title.innerText = element.title;
    title.classList = "card-title";

    const paragraph = document.createElement("p");
    paragraph.classList = "card-text";
    paragraph.innerText = element.content;

    const button = document.createElement("a");
    button.classList = "btn btn-primary";
    button.innerText = "View";
    button.href = link;

    cardBody.appendChild(title);
    cardBody.appendChild(paragraph);
    cardBody.appendChild(button);

    card.appendChild(img);
    card.appendChild(cardBody);
    cardDiv.appendChild(card);

    return cardDiv;

}

export {projects, getFeaturedProjects};