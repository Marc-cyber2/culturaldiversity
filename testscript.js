// Get the modal, images, and close button elements
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.getElementById('close-modal');

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-image');

// Add event listeners for each image to open in the modal
galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImage.src = image.src; // Set the modal image to the clicked image
  });
});

// When the user clicks the close button, close the modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// When the user clicks anywhere outside the modal image, close the modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});