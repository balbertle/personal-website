/**
 * Fetches project data from an API and renders it into a container element.
 * @param {string} apiUrl The URL of the API endpoint.
 * @param {HTMLElement} container The container element to display projects in.
 */
export async function fetchAndDisplayDiary(apiUrl, container) {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const projects = await response.json();

    container.innerHTML = "";

    if (projects.length === 0) {
      container.innerHTML =
        '<p class="text-center col-span-full text-gray-500">No projects found.</p>';
      return;
    }

    projects.forEach((project) => {

      const link = document.createElement('a')
      link.href = `entry.html?id=${project.id}`;
      link.className = 'block';

      const card = document.createElement("div");
      card.className = "";
      

      const image = document.createElement("img");
      image.src = project.imageUrl;
      image.alt = project.title;
      image.className = "w-full h-full object-cover";
      image.onerror = () => {
        image.src = "https://placehold.co/600x400/F00/FFF?text=Image+Error";
        image.alt = "Error loading image";
      };

      const contentDiv = document.createElement("div");

      const description = document.createElement("p");
      description.className = "text-gray-700 mt-2 text-left";
      description.textContent = project.title;
      contentDiv.appendChild(description);

      card.appendChild(image);
      card.appendChild(contentDiv);

      link.appendChild(card);
      container.appendChild(link);
    });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    container.innerHTML = `<p class="text-center col-span-full text-red-500 bg-red-100 p-4 rounded-lg">Error: Could not load projects. Make sure the API server is running.</p>`;
  }
}

/**
 * Fetches project data from an API and renders it into a container element.
 * @param {string} apiUrl The URL of the API endpoint.
 * @param {HTMLElement} container The container element to display projects in.
 */
export async function fetchAndDisplayProjects(apiUrl, container) {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const projects = await response.json();

    container.innerHTML = "";

    if (projects.length === 0) {
      container.innerHTML =
        '<p class="text-center col-span-full text-gray-500">No projects found.</p>';
      return;
    }

    projects.forEach((project) => {

      const link = document.createElement('a')
      link.href = `project-detail.html?id=${project.id}`;
      link.className = 'block';

      const card = document.createElement("div");
      card.className = "";
      

      const image = document.createElement("img");
      image.src = project.mainImageUrl;
      image.alt = project.title;
      image.className = "w-full h-full object-cover";
      image.onerror = () => {
        image.src = "https://placehold.co/600x400/F00/FFF?text=Image+Error";
        image.alt = "Error loading image";
      };

      const contentDiv = document.createElement("div");

      const title = document.createElement("p");
      title.className = "text-white mt-2 text-left";
      title.textContent = project.title;
      const description = document.createElement("p1");
      description.className = "text-white mt-1 text-left text-xs";
      description.textContent = project.shortDescription;
      
      contentDiv.appendChild(title);
      contentDiv.appendChild(description);

      card.appendChild(image);
      card.appendChild(contentDiv);
      
      link.appendChild(card);
      container.appendChild(link);
    });
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    container.innerHTML = `<p class="text-center col-span-full text-red-500 bg-red-100 p-4 rounded-lg">Error: Could not load projects. Make sure the API server is running.</p>`;
  }
}