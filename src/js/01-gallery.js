// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);




const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createGalleryMarkup(galleryItems);


new SimpleLightbox('.gallery a', { 
   captionsData: 'alt',
   captionDelay: 250
});




function createGalleryMarkup(gallery) {
   return galleryItems.map(({original, preview, description}) => `
   <a class="gallery__link" href="${original}">
   <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
      />
      </a>`).join('');
}