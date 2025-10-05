import { fetchAndDisplayProjects } from "./helpers.js";

let API_BASE_URL = "#{API_URL}";
if (API_BASE_URL.startsWith("#{")) {
  API_BASE_URL = "http://localhost:3000"; 
}

const API_URL = `${API_BASE_URL}/api/projects`;

const projectsContainer = document.getElementById("projects-container");

document.addEventListener("DOMContentLoaded", () => {
  projectsContainer.innerHTML =
    '<p class="text-center col-span-full text-white">Loading projects...</p>';
  fetchAndDisplayProjects(API_URL, projectsContainer);
});
