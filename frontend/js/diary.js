import { fetchAndDisplayDiary, fetchAndDisplayProjects } from './helpers.js';

const API_BASE_URL = "https://personal-website-55m0.onrender.com";

const API_URL = `${API_BASE_URL}/api/journal`;
const projectsContainer = document.getElementById('projects-container');


document.addEventListener('DOMContentLoaded', () => {
    projectsContainer.innerHTML = '<p class="text-center col-span-full text-gray-500">Loading projects (may take up to 50 seconds if website has been inactive)...</p>';
    
    fetchAndDisplayDiary(API_URL, projectsContainer);
});
