'use strict';

window.addEventListener('load', function() {
  const imageGallery = [
    {"img": "img/1.jpg", "title": "Malesuada"},
    {"img": "img/2.jpg", "title": "Magna"},
    {"img": "img/3.jpg", "title": "Fermentum"},
    {"img": "img/4.jpg", "title": "Mollis"},
    {"img": "img/5.jpg", "title": "Dapibus"},
    {"img": "img/6.jpg", "title": "Justo"},
    {"img": "img/7.jpg", "title": "Commodo"},
    {"img": "img/8.jpg", "title": "Ridiculus"},
    {"img": "img/9.jpg", "title": "Pharetra"},
    {"img": "img/10.jpg", "title": "Adipiscing"},
    {"img": "img/11.jpg", "title": "Vestibulum"},
    {"img": "img/12.jpg", "title": "Nullam"}
  ];


  const div = document.getElementById('gallery');

  imageGallery.forEach(image => {
    const container = document.createElement('div');
    container.classList.add('image-container');
    div.appendChild(container);
    const img = document.createElement('img');
    img.src = image.img;
    img.classList.add('gallery-image');
    container.appendChild(img);
    const title = document.createElement('p');
    title.classList.add('image-title');
    title.innerText = image.title;
    container.appendChild(title);
  });

})
