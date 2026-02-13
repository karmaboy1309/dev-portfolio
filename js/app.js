// ------------ THEME TOGGLE ------------
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", 
    document.body.classList.contains("dark") ? "dark" : "light"
  );
});

// Load theme on startup
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
}


// ------------ LOAD PROJECTS ------------
async function loadProjects() {
  const projectGrid = document.getElementById("project-grid");
  try {
    const res = await fetch("/projects/projects.json");
    const data = await res.json();

    data.forEach((project) => {
      const card = document.createElement("div");
      card.className = "project-card";

      card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      `;

      projectGrid.appendChild(card);
    });
  } catch (e) {
    console.error("Error loading projects:", e);
  }
}
loadProjects();

// ---------- SMOOTH SCROLL ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
  });
});

// ---------- HERO TYPEWRITER ----------
const roles = [
  "Frontend Developer",
  "UI Designer",
  "Web Developer",
  "Creative Coder"
];


let index = 0;
let charIndex = 0;
const typeEl = document.querySelector(".typewriter");

function typeEffect() {
  if (charIndex < roles[index].length) {
    typeEl.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1200);
  }
}


function eraseEffect() {
  if (charIndex > 0) {
    typeEl.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 400);
  }
}


typeEffect();


// ---------- HERO FADE-IN ----------
document.querySelector("#hero").classList.add("fade-in");
