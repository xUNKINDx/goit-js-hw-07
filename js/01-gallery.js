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

const imageModalInstance = basicLightbox.create(`<img src="" class="gallery__image">`,
        {
            onClose: () => {
                document.removeEventListener("keydown", onModalKeydownHandler)
            }
        });

gallery.addEventListener("click", onGalleryClickHandler);

function onGalleryClickHandler(event) {
    event.preventDefault();

    imageModalInstance.element().firstElementChild.innerHTML = `<img src="${event.target.dataset.source}" class="gallery__image">`
    imageModalInstance.show();
    document.addEventListener("keydown", onModalKeydownHandler);
}

function onModalKeydownHandler(event){
    if (event.key === "Escape") {
        imageModalInstance.close();
    } 
}

