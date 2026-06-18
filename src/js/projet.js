import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

let lightbox = null;

function initProjectLightbox() {
  const gallery = document.querySelector('.grid');
  if (!gallery) {
    return;
  }

  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }

  lightbox = new PhotoSwipeLightbox({
    gallery: '.grid',
    children: 'a',
    showHideAnimationType: 'zoom',
    pswpModule: () => import('photoswipe'),
    initialZoomLevel: 'fit',
  });

  lightbox.init();
}

window.addEventListener('DOMContentLoaded', initProjectLightbox);
window.addEventListener('swup:updated', initProjectLightbox);
window.addEventListener('swup:beforeChange', () => {
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
});

export { initProjectLightbox };