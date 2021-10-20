const root = document.documentElement;
const lsKey = "ADVANCED-CSS-CHALLENGE-professional-portfolio-mikeyrod22";
root.setAttribute("data-theme", localStorage.getItem(lsKey));

function toggleTheme() {
  const lsTheme = localStorage.getItem(lsKey);
  if (lsTheme === "invert") {
    localStorage.setItem(lsKey, "");
    root.setAttribute("data-theme", "");
  } else {
    localStorage.setItem(lsKey, "invert");
    root.setAttribute("data-theme", "invert");
  }
}

const navList = document.getElementById("nav-list");

function toggleOverlay() {
  navList.classList.toggle("active");
}

for (let i = 0; i < navList.childElementCount; i++) {
  navList.children[i].addEventListener("click", toggleOverlay);
}
