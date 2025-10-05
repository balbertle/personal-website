import { fetchAndDisplayDiary, fetchAndDisplayProjects } from './helpers.js';

const API_URL = 'http://localhost:3000/api/journal';
const projectsContainer = document.getElementById('projects-container');


document.addEventListener('DOMContentLoaded', () => {
    projectsContainer.innerHTML = '<p class="text-center col-span-full text-gray-500">Loading projects...</p>';
    
    fetchAndDisplayDiary(API_URL, projectsContainer);
});
