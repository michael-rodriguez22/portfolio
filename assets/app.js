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

const navList = document.getElementById("nav-list");

function toggleOverlay() {
  navList.classList.toggle("active");
}

for (let i = 0; i < navList.childElementCount; i++) {
  navList.children[i].addEventListener("click", toggleOverlay);
}
