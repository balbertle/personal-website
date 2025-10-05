import { fetchAndDisplayDiary, fetchAndDisplayProjects } from './helpers.js';

let API_BASE_URL = "#{API_URL}";
if (API_BASE_URL.startsWith("#{")) {
  API_BASE_URL = "http://localhost:3000"; 
}

const API_URL = `${API_BASE_URL}/api/journal`;
const projectsContainer = document.getElementById('projects-container');


document.addEventListener('DOMContentLoaded', () => {
    projectsContainer.innerHTML = '<p class="text-center col-span-full text-gray-500">Loading projects...</p>';
    
    fetchAndDisplayDiary(API_URL, projectsContainer);
});
