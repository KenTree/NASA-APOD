console.log("Welcome");

const NASA_API_KEY = "qMRxpcXWQcmuMA74tpHqY7EAp2J4BVvsES27oc0p";

// Fetch and Display Functions

function clicked() {

  let date = document.getElementById("user-input").value;

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=qMRxpcXWQcmuMA74tpHqY7EAp2J4BVvsES27oc0p&date=${date}`)
    .then(response => response.json())
    .then(receiveData);
}

function receiveData(renderData) {
  // Log all data that is entered for debugging
  console.log(renderData);
  let data = renderData
  document.getElementById("article-output").innerHTML = `
        <div class ="dayofspace">
            <h1 class="textcolor">${data.date}</h1>
            <h2 class="textcolor">${data.title}</h2>
            <img src="${data.hdurl}" class="imagesize" onclick="openImage(this.src)"/>
            <div class="paragraphFormat">${data.explanation}</div>
        </div>

        <div id="fullscreen-image-container" class="fullscreen-container" onclick="closeImage()">
            <span class="close-button">&times;</span>
            <img id="fullscreen-image" class="fullscreen-content" />
        </div>
    `;
}

// Open Image and Close Image Functions
function openImage(imgSrc) {

  // We assigned the IDs when we receiveData on line 29-32 
  const container = document.getElementById("fullscreen-image-container");
  const image = document.getElementById("fullscreen-image");

  // Fullscreen Container is set to no display by default, we change it once open image is called to block
  container.style.display = "block";
  image.src = imgSrc;

}

function closeImage() {

  // Close the image by setting our display back to none after being clicked
  document.getElementById("fullscreen-image-container").style.display = "none";

}

// Cover Screen Fade-Out
document.addEventListener("DOMContentLoaded", () => {
  const cover = document.getElementById("cover-screen");
  const enterBtn = document.getElementById("enter-button");

  enterBtn.addEventListener("click", () => {
    cover.classList.add("fade-out");
    setTimeout(() => cover.remove(), 1500); // matches transition
  });
});


