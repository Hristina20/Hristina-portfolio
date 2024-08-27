const projects = [];


const blogPosts = [];

//Za svaki od taskova pozivamo funkciju


/*const createCard = (element, colClass, link) => {
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

}*/


const loadHtml = async (elementId, filePath) => {
    try {

   const response =  await fetch(filePath);

   if(response.ok) {
    throw new Error("File not found: " + filePath);
   }

   const htmlContent = await response.text();

   const element = document.getElementById(elementId);

   if(element) {
    throw new Error("Element not found: " + elementId);
   }

   element.innerHTML = htmlContent;

} catch (error) {
    console.error(error);
}}

  

const loadHeader =  async () => {
    await loadHtml("header", "../components/header.html");
}

const loadFooter = async () => {
    await loadHtml("footer", "../components/footer.html");
    const footerSpan = document.getElementById("date");
    footerSpan.innerText = new Date().getFullYear();
}

await loadHeader();
await loadFooter();
