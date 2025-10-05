// --- CONFIGURATION ---
let API_BASE_URL = "#{API_URL}";
if (API_BASE_URL.startsWith("#{")) {
  API_BASE_URL = "http://localhost:3000";
}
const API_URL = `${API_BASE_URL}/api/projects`;

/**
 * Fetches and displays a single project's details.
 */
async function loadProjectDetails() {
  // --- DOM ELEMENTS ---
  const titleEl = document.getElementById("project-title");
  const descriptionEl = document.getElementById("project-description");
  const imagesContainerEl = document.getElementById("project-images");

  // 1. Get the project ID from the URL
  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  if (!projectId) {
    titleEl.innerText = "Project not found!";
    return;
  }

  try {
    // 2. Fetch the data for the specific project from your API
    const response = await fetch(`${API_BASE_URL}/${projectId}`);
    if (!response.ok) {
      throw new Error(
        `Project could not be loaded. Status: ${response.status}`
      );
    }
    const project = await response.json();

    // 3. Populate the HTML with the fetched data
    document.title = project.title; // Update the page title
    titleEl.innerText = project.title;
    descriptionEl.innerText = project.detailedDescription;

    // Clear any existing content
    imagesContainerEl.innerHTML = "";

    // Loop through the images array and create img elements
    if (project.images && project.images.length > 0) {
      const imagesPerRow = 2;
      let captionIndex = 0;

      for (let i = 0; i < project.images.length; i += imagesPerRow) {
        const section = document.createElement("div");
        section.className = "mb-8"; // space between groups

        // Row for images, center them
        const row = document.createElement("div");
        row.className =
          "grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center";

        for (
          let j = i;
          j < i + imagesPerRow && j < project.images.length;
          j++
        ) {
          const img = document.createElement("img");
          img.src = project.images[j];
          img.alt = project.title;
          img.className = "h-auto shadow-md"; // remove w-full to prevent stretching
          row.appendChild(img);
        }

        section.appendChild(row);

        // Add caption BELOW row, left-aligned
        if (project.captions && project.captions[captionIndex]) {
          const textBlock = document.createElement("p");
          textBlock.innerText = project.captions[captionIndex];
          textBlock.className = "text-white text-left mt-4"; // left-aligned
          section.appendChild(textBlock);
          captionIndex++;
        }

        imagesContainerEl.appendChild(section);
      }

      // Extra captions at the bottom, also left-aligned
      while (project.captions && captionIndex < project.captions.length) {
        const textBlock = document.createElement("p");
        textBlock.innerText = project.captions[captionIndex];
        textBlock.className = "text-white text-left my-1"; // left-aligned
        imagesContainerEl.appendChild(textBlock);
        captionIndex++;
      }
    } else {
      imagesContainerEl.innerHTML =
        '<p class="text-gray-500">No additional images for this project.</p>';
    }
  } catch (error) {
    console.error("Error fetching project:", error);
    titleEl.innerText = "Error loading project.";
    descriptionEl.innerText =
      "Could not retrieve project details. Please ensure the API is running and the project ID is correct.";
  }
}

// --- INITIALIZATION ---
// Add a single event listener to run the function once the DOM is ready.
document.addEventListener("DOMContentLoaded", loadProjectDetails);
