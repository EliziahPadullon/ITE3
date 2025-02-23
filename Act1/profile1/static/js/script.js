const projects = [
    {
        title: "Student Portfolio Profile",
        images: [
            { src: "/static/images/unfold1.png", title: "Login Page", description: "This is where you login and create accounts" },
            { src: "/static/images/unfold2.png", title: "Project Dashboard", description: "Here is where students can add, edit, and delete their projects" },
            { src: "/static/images/unfold3.png", title: "About", description: "This is the student's profile page" },
            { src: "/static/images/unfold4.png", title: "Portfolio Feed", description: "The newsfeed for finding students" },
        ]
    },
    {
        title: "Weather App",
        images: [
            { src: "/static/images/weather.png", title: "Weather app", description: "Angular project for our assessment" },
        ]
    },
    {
        title: "Online Marketplace for Independent Artists",
        images: [
            { src: "/static/images/omia1.png", title: "Login Page", description: "" },
            { src: "/static/images/omia2.png", title: "Home Page", description: "Showcasing independent artists' products" },
        ]
    },
    {
        title: "Philippine Map",
        images: [
            { src: "/static/images/map1.png", title: "PH Map", description: "This is the home page where you can choose what island to go" },
            { src: "/static/images/map2.png", title: "Luzon Map", description: "Here are 3 places in the Luzon area" },
            { src: "/static/images/map3.png", title: "About Zambales", description: "A brief introduction about Zambales" },
            { src: "/static/images/map4.png", title: "Zambales Info", description: "A gallery of tourist spots in Zambales" },
            { src: "/static/images/map5.png", title: "About Quirino", description: "A brief introduction about Quirino" },
            { src: "/static/images/map6.png", title: "Quirino Info", description: "A gallery of tourist spots in Quirino" },
        ]
    }
];

const container = document.getElementById("projects-container");

projects.forEach(project => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    projectDiv.innerHTML = `
        <h2>${project.title}</h2>
        <div class="grid">
            ${project.images.map(image => `
                <div class="card">
                    <img src="${image.src}" alt="${image.title}">
                    <div class="overlay">
                        <div>
                            <h3>${image.title}</h3>
                            <p>${image.description}</p>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    container.appendChild(projectDiv);
});
