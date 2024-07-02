import { galleryItems } from "./gallery-items.js";
// Change code below this line
const unorderedListElement = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listEl = document.createElement("li");
  listEl.classList.add("gallery__item");
  listEl.innerHTML = `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>`;
  
  unorderedListElement.append(listEl);
});

let lightboxInstance = basicLightbox.create("<div></div>");
function openImageInModal(event) {
  event.preventDefault();
  const clickedOn = event.target;
  const image = clickedOn.getAttribute("data-source");
  lightboxInstance = basicLightbox.create(`
		<img width="1400" height="900" src="${image}">
	`);
  lightboxInstance.show();
}

unorderedListElement.addEventListener("click", openImageInModal);

document.addEventListener("keydown", (event) => {
  if (event.key == "Escape") {
    lightboxInstance.close();
  }
})
