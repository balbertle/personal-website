const API_URL = "https://localhost:3000/api/projects";

const form = document.getElementById("add-project-form");
const statusMessage = document.getElementById("status-message");

/**
 * Handles form submission
 *
 * @param {Event} event the form submission event
 */
async function handleFormSubmit(event) {
  event.preventDefault();

  const formData = newFormData(form);
  const projectData = {
    title: formData.get("title"),
    imageUrl: formData.get("imageUrl"),
  };
  statusMessage.textContent = "submitting...";
  statusMessage.className = "text-black-600";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || `http error ${response.status}`);
    }

    const result = await response.json();
    statusMessage.textContent = "success";
    statusMessage.className = "text-green-600";
    form.reset();
  } catch (error) {
    console.error("error");
    statusMessage.textContent = "error";
    statusMessage.className = "text-red-600";
  }
}
form.addEventListener("submit", handleFormSubmit);
