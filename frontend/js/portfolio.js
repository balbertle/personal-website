import { fetchAndDisplayProjects } from './helpers.js';

const API_URL = 'http://localhost:3000/api/projects';
const projectsContainer = document.getElementById('projects-container');


document.addEventListener('DOMContentLoaded', () => {
    projectsContainer.innerHTML = '<p class="text-center col-span-full text-white">Loading projects...</p>';
    fetchAndDisplayProjects(API_URL, projectsContainer);
});
