let blogPosts = [];

const getBlogPosts = async () => {
    const data = await fetch("../data/blog-data.json");
    const jsonData = await data.json();
    blogPosts = jsonData;
    console.log(jsonData);
}

await getBlogPosts();

const renderBlogPosts = () => {
    const blogGrid = document.getElementById("blog");
    if(blogGrid) {
        blogGrid.innerHTML = null;
        blogPosts.forEach((element) => {
        const link = `./BlogDetails.html?id=${element.id}`;
        const card = createCard(element, "col-3");
        blogGrid.appendChild(card);
        }); 
    } 
}

const getMinutesToRead = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount/wordsPerMinute);
}

/*const renderBlogDetails = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const blogId = urlParams.get("id");
    if(blogId) {
        const blog = blogPosts.find((blog) => blog.id == blogId);
        console.log(blog);

        const blogImg = document.getElementById("blog-img");
        blogImg.src = blog.imageUrl;

        const blogTitle = document.getElementById("blog-title");
        blogTitle.innerText = blog.title;

        const blogReadingTime = document.getElementById("blog-reading-time");
        blogReadingTime.innerText = getMinutesToRead(blog.content);

        const blogCreated = document.getElementById("blog-created-at");
        blogCreated.innerText = blog.createdAt;

        const blogContent = document.getElementById("blog-content");
        blogContent.innerText = blog.content;
    }
}
*/

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
