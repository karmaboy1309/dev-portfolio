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
