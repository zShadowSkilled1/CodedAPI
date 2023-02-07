setTimeout(function(){
// API endpoint to retrieve list of images in a repository
const apiUrl = "https://api.github.com/repos/zShadowSkilled1/APIs/contents/Images";

// Reference to the image element in the HTML
const imgElement = document.getElementById("random-image");

if (imgElement) {
  // Fetch list of images from the repository
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Get a random image from the list of images
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomImage = data[randomIndex];
      
      // Set the src attribute of the image element to the URL of the random image
      imgElement.src = randomImage.download_url;
      imgElement.alt = randomImage.name;
    })
    .catch(error => {
      console.error("Error retrieving images:", error);
    });
} else {
  console.error("Error: Element with ID 'random-image' not found in the HTML.");
}
}, 5);
