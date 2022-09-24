// Get form elements
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const submitButton = document.getElementById("submit-button");

// Get DOM elements for showing response
const responseMessage = document.getElementById("response-message");
const responseTitle = document.getElementById("response-title");
const responseId = document.getElementById("response-id");
const responseContent = document.getElementById("response-content");

const loadApi = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleInput.value,
        body: contentInput.value,
      }),
    });
    if (!data.ok) {
      throw new Error(`Failed to fetch post: ${data.status}`);
    }
    return data.json();
  } catch (error) {
    console.log(error);
  }
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  loadApi().then((data) => {
    responseId.textContent = `ID: ${data.id}`;
    responseTitle.textContent = `Title: ${data.title}`;
    responseContent.textContent = `Content: ${data.body}`;
  
  });
});
