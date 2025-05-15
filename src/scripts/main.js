const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Isotope-like gallery filter functionality
const buttons = document.querySelectorAll('.button');
const galleryItems = document.querySelectorAll('.item');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Activate selected filter button
    buttons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    
    const filter = this.getAttribute('data-filter');
    
    galleryItems.forEach(item => {
      if (filter === '*' || item.classList.contains(filter.substring(1))) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


// Get modal element
const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);

// Get all overlay links (View More)
const overlays = document.querySelectorAll('.overlay a');

// Loop through each overlay and add click event listener
overlays.forEach((overlay) => {
  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Get the image source (src) of the image inside the clicked item
    const imgSrc = overlay.closest('.item').querySelector('img').src;
    
    // Create the modal content with the image
    modal.innerHTML = `
      <span class="close">&times;</span>
      <img src="${imgSrc}" alt="Expanded Image">
    `;
    
    // Display the modal
    modal.style.display = 'flex';
    
    // Close the modal when the "close" button is clicked
    modal.querySelector('.close').addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    // Close the modal if clicked outside the image
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});
