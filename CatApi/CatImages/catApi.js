setTimeout(function(){
const apiUrl = "https://api.github.com/repos/zShadowSkilled1/APIs/contents/Images";
const imgElement = document.getElementById("random-image");

if (imgElement) {
  fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error retrieving images");
    })
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomImage = data[randomIndex];

        imgElement.src = randomImage.download_url;
        imgElement.alt = randomImage.name;
      } else {
        console.error("Error: No images found in the repository");
      }
    })
    .catch(error => {
      console.error("Error retrieving images:", error);
    });
} else {
  console.error("Error: Element with ID 'random-image' not found in the HTML.");
}
}, 5);
