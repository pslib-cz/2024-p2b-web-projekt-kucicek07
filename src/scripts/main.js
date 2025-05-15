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

const buttons = document.querySelectorAll('.button');
const galleryItems = document.querySelectorAll('.item');

buttons.forEach(button => {
  button.addEventListener('click', function() {
   
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



const modal = document.createElement('div');
modal.classList.add('modal');
document.body.appendChild(modal);


const overlays = document.querySelectorAll('.overlay a');


overlays.forEach((overlay) => {
  overlay.addEventListener('click', (e) => {
    e.preventDefault();
    
    
    const imgSrc = overlay.closest('.item').querySelector('img').src;
    
    
    modal.innerHTML = `
      <span class="close">&times;</span>
      <img src="${imgSrc}" alt="Expanded Image">
    `;
    
    
    modal.style.display = 'flex';
    
    
    modal.querySelector('.close').addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
  
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});