
function loadImages() {
    const container = document.getElementById('cards-container');
    container.innerHTML = ''; 

    const sizeFilter = document.getElementById('size-filter');
    const selectedSize = sizeFilter.value;

    images.forEach(image => {
        if (selectedSize === 'all' || image.size === selectedSize) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${image.src}" alt="Image">
                <div class="card-content">
                    <h3>${image.title}</h3>
                    <p>${image.description}</p>
                </div>
            `;
            container.appendChild(card);
        }
    });
}


function filterImages() {
    loadImages();
}
const images = [
    { src: 'media\\image1.jpg', size: 'small', title: 'Котик Овен © Маріанна Пащук RBS53998', description: 'Ціна: 210 грн. Розмір: 30x40 см' },
    { src: 'media\\image2.jpg', size: 'medium', title: 'Кольорове село BS53968', description: 'Ціна: 245 грн. Розмір: 40x50 см' },
    { src: 'media\\image3.jpg', size: 'large', title: 'Молитва серця © Каріна Зіміна BS53970L', description: 'Ціна: 295 грн. Розмір: 48x60 см' },
    { src: 'media\\image4.jpg', size: 'small', title: 'Єдиноріг у сердечках KBS0074', description: 'Ціна: 210 грн. Розмір: 30x40 см' },
    { src: 'media\\image8.jpg', size: 'medium', title: 'Котики Риби © Маріанна Пащук BS53971', description: 'Ціна: 245 грн. Розмір: 40x50 см' },
    { src: 'media\\image11.jpg', size: 'large', title: 'Поцілунок у квітучому саду BS53897L', description: 'Ціна: 295 грн. Розмір: 48x60 см' },
    { src: 'media\\image5.jpg', size: 'small', title: 'Лисичка в квітах KBS0001', description: 'Ціна: 210 грн. Розмір: 30x40 см' },
    { src: 'media\\image0.jpg', size: 'medium', title: 'Підводний вальс BS53967', description: 'Ціна: 245 грн. Розмір: 40x50 см' },
    { src: 'media\\image12.jpg', size: 'large', title: 'Дух лісу BS53928L', description: 'Ціна: 295 грн. Розмір: 48x60 см' },
    { src: 'media\\image6.jpg', size: 'small', title: 'Веселковий єдиноріг KBS7125', description: 'Ціна: 210 грн. Розмір: 30x40 см' },
    { src: 'media\\image9.jpg', size: 'medium', title: 'Захоплені вітром BS53963', description: 'Ціна: 245 грн. Розмір: 40x50 см' },
    { src: 'media\\image13.jpg', size: 'large', title: 'Синій Трепіт BS53938L', description: 'Ціна: 295 грн. Розмір: 48x60 см' },
    { src: 'media\\image7.jpg', size: 'small', title: 'Малинова пісня © Alena Dirizhenko KBS0117', description: 'Ціна: 210 грн. Розмір: 30x40 см' },
    { src: 'media\\image10.jpg', size: 'medium', title: 'Барвистий коргі BS53927', description: 'Ціна: 245 грн. Розмір: 40x50 см' },
    { src: 'media\\image14.jpg', size: 'large', title: 'Грошовий кіт BS8911L', description: 'Ціна: 295 грн. Розмір: 48x60 см' },
    
];

function displaySubscribeModal() {
    const modal = document.getElementById('subscribe-modal');
    const closeButton = modal.querySelector('.close');
    const subscribeButton = modal.querySelector('#subscribe-btn');
    const closeButtonOutside = modal.querySelector('#close-btn');

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    closeButtonOutside.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    modal.style.display = 'block';

    subscribeButton.onclick = function() {
        const emailInput = document.getElementById('email-input').value;

        modal.style.display = 'none';
    }
}

function displayAdModal() {
    const modal = document.getElementById('ad-modal');
    const closeButton = modal.querySelector('.close');

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    setTimeout(function() {
        modal.style.display = 'block';
    }, 5000); 
  
}


window.onload = loadImages;


document.getElementById('size-filter').addEventListener('change', filterImages);


displaySubscribeModal();


displayAdModal();
