// DARK MODE / LIGHT MODE
const root = document.documentElement;
const favIcon = document.querySelector("link[rel='icon']");
const lsKey = "ADVANCED-CSS-CHALLENGE-professional-portfolio-mikeyrod22";
root.setAttribute("data-theme", localStorage.getItem(lsKey));

localStorage.getItem(lsKey)
  ? (favIcon.href = "./assets/favicon-light.ico")
  : (favIcon.href = "./assets/favicon-dark.ico");

function toggleTheme() {
  const lsTheme = localStorage.getItem(lsKey);
  if (lsTheme === "invert") {
    localStorage.setItem(lsKey, "");
    root.setAttribute("data-theme", "");
    favIcon.href = "./assets/favicon-dark.ico";
  } else {
    localStorage.setItem(lsKey, "invert");
    root.setAttribute("data-theme", "invert");
    favIcon.href = "./assets/favicon-light.ico";
  }
}

// MOBILE NAV

const navList = document.getElementById("nav-list");

function toggleOverlay() {
  navList.classList.toggle("active");
}

for (let i = 0; i < navList.childElementCount; i++) {
  navList.children[i].addEventListener("click", toggleOverlay);
}

// MY WORK SECTION
const projects = [
  {
    title: "Weather Dashboard",
    imgUrl: "./assets/images/project-screenshots/weather-dashboard.png",
    githubUrl:
      "https://github.com/mikeyrod22/SERVER-SIDE-API-CHALLENGE-weather-dashboard",
    demoType: "Deployed Site",
    demoUrl:
      "https://mikeyrod22.github.io/SERVER-SIDE-API-CHALLENGE-weather-dashboard/",
    tags: ["HTTP Requests", "Local Storage", "Async / Await"],
    description:
      "This is a simple weather dashboard that I created from scratch. Users are able to search by city name and view current / upcoming weather conditions. It works by making an HTTP request to the Open Weather Map API. Once the relevant data is retrieved and parsed, the DOM is then dynamically updated. Searches are also saved to local storage, allowing users to quickly and easily search for their regular cities.",
  },
  {
    title: "Weather Dashboard",
    imgUrl: "./assets/images/project-screenshots/weather-dashboard.png",
    githubUrl:
      "https://github.com/mikeyrod22/SERVER-SIDE-API-CHALLENGE-weather-dashboard",
    demoType: "Deployed Site",
    demoUrl:
      "https://mikeyrod22.github.io/SERVER-SIDE-API-CHALLENGE-weather-dashboard/",
    tags: ["HTTP Requests", "Local Storage", "Async / Await"],
    description:
      "This is a simple weather dashboard that I created from scratch. Users are able to search by city name and view current / upcoming weather conditions. It works by making an HTTP request to the Open Weather Map API. Once the relevant data is retrieved and parsed, the DOM is then dynamically updated. Searches are also saved to local storage, allowing users to quickly and easily search for their regular cities.",
  },
  {
    title: "Weather Dashboard",
    imgUrl: "./assets/images/project-screenshots/weather-dashboard.png",
    githubUrl:
      "https://github.com/mikeyrod22/SERVER-SIDE-API-CHALLENGE-weather-dashboard",
    demoType: "Deployed Site",
    demoUrl:
      "https://mikeyrod22.github.io/SERVER-SIDE-API-CHALLENGE-weather-dashboard/",
    tags: ["HTTP Requests", "Local Storage", "Async / Await"],
    description:
      "This is a simple weather dashboard that I created from scratch. Users are able to search by city name and view current / upcoming weather conditions. It works by making an HTTP request to the Open Weather Map API. Once the relevant data is retrieved and parsed, the DOM is then dynamically updated. Searches are also saved to local storage, allowing users to quickly and easily search for their regular cities.",
  },
  {
    title: "Weather Dashboard",
    imgUrl: "./assets/images/project-screenshots/weather-dashboard.png",
    githubUrl:
      "https://github.com/mikeyrod22/SERVER-SIDE-API-CHALLENGE-weather-dashboard",
    demoType: "Deployed Site",
    demoUrl:
      "https://mikeyrod22.github.io/SERVER-SIDE-API-CHALLENGE-weather-dashboard/",
    tags: ["HTTP Requests", "Local Storage", "Async / Await"],
    description:
      "This is a simple weather dashboard that I created from scratch. Users are able to search by city name and view current / upcoming weather conditions. It works by making an HTTP request to the Open Weather Map API. Once the relevant data is retrieved and parsed, the DOM is then dynamically updated. Searches are also saved to local storage, allowing users to quickly and easily search for their regular cities.",
  },
  {
    title: "Weather Dashboard",
    imgUrl: "./assets/images/project-screenshots/weather-dashboard.png",
    githubUrl:
      "https://github.com/mikeyrod22/SERVER-SIDE-API-CHALLENGE-weather-dashboard",
    demoType: "Deployed Site",
    demoUrl:
      "https://mikeyrod22.github.io/SERVER-SIDE-API-CHALLENGE-weather-dashboard/",
    tags: ["HTTP Requests", "Local Storage", "Async / Await"],
    description:
      "This is a simple weather dashboard that I created from scratch. Users are able to search by city name and view current / upcoming weather conditions. It works by making an HTTP request to the Open Weather Map API. Once the relevant data is retrieved and parsed, the DOM is then dynamically updated. Searches are also saved to local storage, allowing users to quickly and easily search for their regular cities.",
  },
];

function renderProjects() {
  for (let i = 0; i < projects.length; i++) {
    const project = document.createElement("div");
    project.className = "project";

    const title = document.createElement("h3");
    title.innerText = projects[i].title;
    project.appendChild(title);

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "project-screenshot-wrapper";
    imgWrapper.innerHTML = `
      <img
        src="${projects[i].imgUrl}"
        alt="Screenshot of ${projects[i].title}"
        class="project-screenshot"
      />
      <div id="overlay-${i}" class="project-screenshot-overlay">
        <div class="project-links">
          <a href="${projects[i].githubUrl}" target="_blank" title="Github Repository">
            <i class="fab fa-github"></i>
          </a>
          <a href="${projects[i].demoUrl}" target="_blank" title="${projects[i].demoType}">
            <i class="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    `;
    project.appendChild(imgWrapper);

    const expandIcon = document.createElement("i");
    expandIcon.className = "fa fa-angle-down project-expand";
    expandIcon.id = `expand-${i}`;
    expandIcon.onclick = function () {
      document.getElementById(`overlay-${i}`).classList.toggle("active");
      document.getElementById(`expand-${i}`).classList.toggle("active");
      document.getElementById(`description-${i}`).classList.toggle("active");
    };
    project.appendChild(expandIcon);

    const renderTags = (tags) => {
      let output = "";
      tags.forEach((tag) => (output += `<li>${tag}</li>`));
      return output;
    };
    const description = document.createElement("div");
    description.className = "project-description";
    description.innerHTML = `
      <ul>
        ${renderTags(projects[i].tags)}
      </ul>
      <p>${projects[i].description}</p>
    `;
    description.id = `description-${i}`;
    project.appendChild(description);

    document.getElementById("projects-wrapper").appendChild(project);
  }
}

renderProjects();
