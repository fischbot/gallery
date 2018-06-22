'use strict';

window.addEventListener('load', function() {
  const imageGallery = [
    {"img": "http://via.placeholder.com/510x510", "title": "Malesuada"},
    {"img": "http://via.placeholder.com/510x510", "title": "Magna"},
    {"img": "http://via.placeholder.com/510x510", "title": "Fermentum"},
    {"img": "http://via.placeholder.com/510x510", "title": "Mollis"},
    {"img": "http://via.placeholder.com/510x510", "title": "Dapibus"},
    {"img": "http://via.placeholder.com/510x510", "title": "Justo"},
    {"img": "http://via.placeholder.com/510x510", "title": "Commodo"},
    {"img": "http://via.placeholder.com/510x510", "title": "Ridiculus"},
    {"img": "http://via.placeholder.com/510x510", "title": "Pharetra"},
    {"img": "http://via.placeholder.com/510x510", "title": "Adipiscing"},
    {"img": "http://via.placeholder.com/510x510", "title": "Vestibulum"},
    {"img": "http://via.placeholder.com/510x510", "title": "Nullam"}
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
