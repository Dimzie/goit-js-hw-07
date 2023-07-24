import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");
console.log(galleryListEl);

const addImageInList = imagesList => {
    return imagesList.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </li>`;
    }).join("");
}

galleryListEl.insertAdjacentHTML("afterbegin", addImageInList(galleryItems));

galleryListEl.addEventListener("click", onItemsGalleryListClick);

function onItemsGalleryListClick(evt) {
    evt.preventDefault();
    if(evt.target.nodeName !== "IMG") {
        return;
    }
    
    console.log(evt.target);

    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`)

    instance.show()
}
