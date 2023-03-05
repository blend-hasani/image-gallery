const switchers = document.querySelector(".switchers");
const bigImage = document.getElementById("big-image");

switchers.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const imageURL = event.target.getAttribute("src");
    bigImage.style.backgroundImage = `url(${imageURL})`;
  }
});
