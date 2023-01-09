import { galleryItems } from './gallery-items.js';

// Change code below this line

const gallery = document.querySelector(".gallery");
const markup = galleryItems.map(photo => 
    `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
        <img
        class="gallery__image"
        src="${photo.preview}"
        data-source="${photo.original}"
        alt="${photo.description}"
        />
    </a>
    </div>`)
    .join("");
gallery.insertAdjacentHTML('beforeend', markup);

gallery.addEventListener("click", onGalleryClickHandler);

function onGalleryClickHandler(event) {
    event.preventDefault();
    console.log(event.target);
    const instance = basicLightbox.create(`
            <img src="${event.target.dataset.source}" class="gallery__image">
        `)

    instance.show();

    document.addEventListener("keydown", onModalKeydownHandler, instance);
}

function onModalKeydownHandler(event, options){
    if (event.key === "Escape") {
        console.log("Kill modal");
        options.hide();
    }
}

