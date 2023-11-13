const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */

const alt = {
    'pic1.jpg' : 'first image',
    'pic2.jpg' : 'first image',
    'pic3.jpg' : 'first image',
    'pic4.jpg' : 'first image',
    'pic5.jpg' : 'first image'
}
/* Looping through images */

for (const img of images) {
    const newImage = document.createElement('img');
        newImage.setAttribute('src', img);
        newImage.setAttribute('alt', alt[img]);
        thumbBar.appendChild(newImage);

        newImage.addEventListener('click', e => {
            displayedImage.src = e.target.src;
            displayedImage.alt = e.target.alt;
        })
}

/* Wiring up the Darken/Lighten button */

function dark(){
    if (btn.className === 'dark') {
        btn.className = 'light';
        btn.textContent = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
    } else if (btn.className === 'light'){
        btn.className = 'dark';
        btn.textContent = 'darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
    }
    btn.addEventListener('click', dark);

thumbBar.addEventListener('click', (e) => {
  if(e.target && e.target.nodeName == "IMG") {
    displayedImage.src = e.target.src;
}
}); 