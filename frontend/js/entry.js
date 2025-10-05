// --- CONFIGURATION ---

let APIURL = "__API_URL__";

if (APIURL.startsWith("__")) {
  APIURL = "http://localhost:3000";
}

const API_BASE_URL = `${APIURL}/api/journal`;

// --- DOM ELEMENTS ---
const projectContent = document.getElementById("project-content");

/**
 * Fetches and displays a single project's details.
 */
async function loadProjectDetails() {
  try {
    // 1. Get the project ID from the URL's query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id");

    // If there's no ID, show an error
    if (!projectId) {
      throw new Error("No project ID specified in the URL.");
    }

    // 2. Fetch the data for this specific project
    const response = await fetch(`${API_BASE_URL}/${projectId}`);
    if (!response.ok) {
      throw new Error(`Could not find project. Status: ${response.status}`);
    }
    const project = await response.json();

    // 3. Update the page title
    document.title = project.title;

    // 4. Clear the loading message and build the HTML
    projectContent.innerHTML = `
            <div class="flex justify-between items-center mb-8">
                <h1 class="text-4xl md:text-5xl font-bold text-gray-900">${project.title}</h1>
                <a href="index.html" class="text-black-600 hover:text-indigo-800 flex-shrink-0 ml-4">&larr; back</a>
            </div>
            <div class = "flex flex-col md:flex-row gap-8 items-start">
                <img id="project-image" src="${project.imageUrl}" alt="${project.title}" class="w-full md:w-2/5 h-auto rounded-lg shadow-lg flex-shrink-0">
                <div class="prose max-w-none float">
                    <h2 class="text-2xl font-semibold mb-4">${project.description}</h2>
                    <p>${project.diaryText}</p>
                </div> 
            </div>
            
        `;

    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const projectImage = document.getElementById("project-image");

    if (projectImage && modal && modalImage) {
      projectImage.addEventListener("click", () => {
        modalImage.src = projectImage.src;
        modal.classList.remove("hidden");
      });

      modal.addEventListener("click", () => {
        modal.classList.add("hidden");
      });
    }
  } catch (error) {
    console.error("Error loading project:", error);
    projectContent.innerHTML = `<p class="text-center text-red-500 bg-red-100 p-4 rounded-lg">Error: ${error.message}</p>`;
  }
}

document.addEventListener("DOMContentLoaded", loadProjectDetails);
