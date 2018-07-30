'use strict';

window.addEventListener('load', function() {
  const posts = [
    {
      title: 'Parturient Sollicitudin Malesuada',
      date: 'Jan 1, 2018',
      img: 'img/matt-nelson-259365-unsplash.jpg',
      body: 'Photo by Matt Nelson on Unsplash. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.\nDonec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      likes: '34',
    },
    {
      title: 'Parturient Sollicitudin Malesuada',
      date: 'May 2, 2018',
      img: 'img/will-langenberg-11534-unsplash.jpg',
      body: 'Photo by Will Langenberg on Unsplash. Nullam quis risus eget urna mollis ornare vel eu leo. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui.',
      likes: '0',
    },
    {
      title: 'Parturient Sollicitudin Malesuada',
      date: 'June 21, 2018',
      img: 'img/anoir-chafik-37957-unsplash.jpg',
      body: 'Photo by Anoir Chafik on Unsplash. Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor.\nDonec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      likes: '34',
    },
    {
      title: 'Lorem Ornare Fermentum Vulputate',
      date: 'Jan 1, 2018',
      img: 'img/matthew-henry-20172-unsplash.jpg',
      body: 'Photo by Matthew Henry on Unsplash. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam quis risus eget urna mollis ornare vel eu leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec sed odio dui.\nNullam quis risus eget urna mollis ornare vel eu leo. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
      likes: '28',
    },
    {
      title: 'Sollicitudin',
      date: 'Jan 2, 2018',
      img: 'img/patrick-hendry-221863-unsplash.jpg',
      body: 'Photo by Patrick Hendry on Unsplash. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam id dolor id nibh ultricies vehicula ut id elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.\nFusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      likes: '136',
    },
  ];

  const div = document.getElementById('posts');

  posts.forEach(post => {
    const container = document.createElement('div');
    container.classList.add('post-container');
    div.appendChild(container);

    const img = document.createElement('img');
    img.src = post.img;
    img.classList.add('post-image');

    const title = document.createElement('p');
    title.classList.add('post-title');
    title.innerText = post.title;

    const date = document.createElement('p');
    date.classList.add('post-date');
    date.innerText = post.date;

    const body = document.createElement('p');
    body.classList.add('post-body');
    body.innerText = post.body;

    const share = document.createElement('button');
    share.classList.add('post-share');
    share.innerText = 'Share';

    const likes = document.createElement('p');
    likes.classList.add('post-likes');
    likes.innerText = `${post.likes} Likes`;

    const social = document.createElement('div');
    social.classList.add('post-social');
    social.appendChild(share);
    social.appendChild(likes);

    const p = [img, title, date, body, social];
    p.forEach(e => container.appendChild(e));
  });
});
