document.addEventListener('click', (e) => {
    const menu = document.querySelector('.right_menu');
    const checkbox = document.querySelector('.header_box');
    const hamburger = document.querySelector('.button__header label');

    if (!menu.contains(e.target) && !checkbox.contains(e.target) && !hamburger.contains(e.target)) {
      checkbox.checked = false; 
    }
  });

  
//------------------------------------------------------

  
  
 
const dataFeatured = `[
  {
    "img_card": "./img/cards1.jpg",
    "newImg": "./img/Image5.svg",
    "title_card": "ELLERY X M'O CAPSULE",
    "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "262",
    "name": "MANGO  PEOPLE T-SHIRT",
    "color_cart": "black",
    "size_cart": "S",
    "quantity": 1,
    "total": ""
  },
  {
    "img_card": "./img/cards2.jpg",
    "newImg": "./img/Image1.svg",
    "title_card": "ELLERY X M'O CAPSULE",
    "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "52",
    "name": "MANGO  PEOPLE T-SHIRT",
    "color_cart": "red",
    "size_cart": "M",
    "quantity": 2,
    "total": ""
  },
  {
    "img_card": "./img/cards3.jpg",
    "newImg": "./img/Image4.svg",
    "title_card": "ELLERY X M'O CAPSULE",
    "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "42",
    "name": "MANGO  PEOPLE T-SHIRT",
    "color_cart": "green",
    "size_cart": "Xl",
    "quantity": 1,
    "total": ""
  },
  {
    "img_card": "./img/cards4.jpg",
    "newImg": "./img/Image2.svg",
    "title_card": "ELLERY X M'O CAPSULE",
    "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "12",
    "name": "MANGO  PEOPLE T-SHIRT",
    "color_cart": "black",
    "size_cart": "XXl",
    "quantity": 2,
    "total": ""
  },
  {
    "img_card": "./img/cards5.jpg",
    "newImg": "./img/Image6.svg",
    "title_card": "ELLERY X M'O CAPSULE",
    "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "92",
    "name": "MANGO  PEOPLE T-SHIRT",
    "color_cart": "blue",
    "size_cart": "X",
    "quantity": 3,
    "total": ""
  },
  {
    "img_card": "./img/cards6.jpg",
    "newImg": "./img/Image3.svg",
    "title_card": "ELLERY X M'O CAPSULE",
    "name": "MANGO  PEOPLE T-SHIRT",
    "text_card": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
    "price_card": "32",
    "color_cart": "red",
    "size_cart": "l",
    "quantity": 1,
    "total": ""
  }
]`;

 
const product = JSON.parse(dataFeatured);
const cardsProduct = document.querySelector('.cards__product');
const totalE = document.querySelector('.shopping__total');

 


//закрытие карточки и сч
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('basket__cart__one__info__title__close')) {
    e.preventDefault();

    const card = e.target.closest('.basket__cart__one');
    if (card) {
      
      card.style.animation = 'ani2 1.0s forwards';
      setTimeout(() => {
        card.remove();
        caunt--;
        if (caunt < 0) {
          caunt = 0;
        }
        spanEl.textContent = caunt;
        if (caunt === 0) {
          cauntEl.style.display = 'none';
          const remainingCards = document.querySelectorAll('.basket__cart__one');
        if (remainingCards.length === 0) {
        const basket = document.querySelector('.basket__new');
        basket.style.animation = "slide 0.5s ease forwards";
         basket.style.display = 'none';
    }
        }
      }, 1000);
    }

     
  }
}); 



product.forEach((element) => {
    const itemHtml = `
        <div class="catalog__cards">
            <img class="img__product" src="${element.img_card}" alt="card">
            <div class="info__cards">
                <h2 class="title__cards">${element.title_card}</h2>
                <p class="text__carsd">${element.text_card}</p>
                <a class="cash__cards" href="#">$ ${element.price_card}</a>
            </div>
            <a href="#" class="add__card">
                <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9509 23.2667H21.8386C21.2294 23.2667 20.7177 22.7671 20.6735 22.1294C20.629 21.4607 21.1175 20.8785 21.7626 20.8346C21.788 20.8329 21.8145 20.832 21.8405 20.832C22.4575 20.832 22.9743 21.3219 23.0201 21.9487C23.0319 22.1971 22.9914 22.5514 22.736 22.8439L22.73 22.8507L22.7242 22.8575C22.5275 23.0912 22.2607 23.2321 21.9509 23.2667ZM8.21887 23.2604C7.5683 23.2604 7.03906 22.7174 7.03906 22.05C7.03906 21.3832 7.5683 20.8406 8.21887 20.8406C8.86945 20.8406 9.39868 21.3832 9.39868 22.05C9.39868 22.7174 8.86945 23.2604 8.21887 23.2604Z" fill="white"></path>
                    <path d="M21.876 22.2662C21.921 22.2549 21.9423 22.2339 21.96 22.2129C21.9678 22.2037 21.9756 22.1946 21.9835 22.1855C22.02 22.1438 22.0233 22.0553 22.0224 22.0105C22.0092 21.9044 21.9185 21.8315 21.8412 21.8315C21.8375 21.8315 21.8336 21.8317 21.8312 21.8318C21.7531 21.8372 21.6653 21.9409 21.6719 22.0625C21.6813 22.1793 21.7675 22.2662 21.8392 22.2662H21.876ZM8.21954 22.2599C8.31873 22.2599 8.39935 22.1655 8.39935 22.0496C8.39935 21.9341 8.31873 21.8401 8.21954 21.8401C8.12042 21.8401 8.03973 21.9341 8.03973 22.0496C8.03973 22.1655 8.12042 22.2599 8.21954 22.2599ZM21.9995 24.2662C21.9517 24.2662 21.8878 24.2662 21.8392 24.2662C20.7017 24.2662 19.7567 23.3545 19.6765 22.198C19.5964 20.9929 20.4937 19.9183 21.6953 19.8364C21.7441 19.8331 21.7928 19.8315 21.8412 19.8315C22.9799 19.8315 23.9413 20.7324 24.019 21.8884C24.0505 22.4915 23.8741 23.0612 23.4898 23.5012C23.1055 23.9575 22.5764 24.2177 21.9995 24.2662ZM8.21954 24.2599C7.01532 24.2599 6.03973 23.2709 6.03973 22.0496C6.03973 20.8291 7.01532 19.8401 8.21954 19.8401C9.42371 19.8401 10.3994 20.8291 10.3994 22.0496C10.3994 23.2709 9.42371 24.2599 8.21954 24.2599ZM21.1984 17.3938H9.13306C8.70013 17.3938 8.31586 17.1005 8.20331 16.6775L4.27753 2.24768H1.52173C0.993408 2.24768 0.560547 1.80859 0.560547 1.27039C0.560547 0.733032 0.993408 0.292969 1.52173 0.292969H4.99933C5.43134 0.292969 5.81561 0.586304 5.9281 1.01025L9.85394 15.4391H20.5576L24.1144 7.13379H12.2578C11.7286 7.13379 11.2957 6.69373 11.2957 6.15649C11.2957 5.61914 11.7286 5.17908 12.2578 5.17908H25.5886C25.9091 5.17908 26.2141 5.34192 26.3896 5.61914C26.566 5.89539 26.5984 6.23743 26.4697 6.547L22.0795 16.807C21.9193 17.1653 21.5827 17.3938 21.1984 17.3938Z" fill="white"></path>
                </svg>
                Add to Cart
            </a>
        </div>
    `;
   cardsProduct.insertAdjacentHTML('beforeend', itemHtml);

  });



  const featureDiv = document.querySelector('.feature');
 const backetDiv = document.createElement('div');
  backetDiv.className = 'basket__new center';
  
  const titleBasket = document.createElement('h3');
  titleBasket.classList.add('basket__title');
  titleBasket.textContent = 'Cart Items';
  backetDiv.appendChild(titleBasket);
  
  featureDiv.parentNode.insertBefore(backetDiv, featureDiv.nextSibling);
 
 



  const spanEl = document.querySelector('.cardCount');
  const cauntEl = document.querySelector('.caunt');
  let caunt = 0;  
  
  //создание карточка и + счетчик ув на 1
  const addCards = document.querySelectorAll('.add__card');
  addCards.forEach(addCard => {
    addCard.addEventListener("click", function(event) {
      event.preventDefault();
      
      const productCard = addCard.closest('.catalog__cards');
      const imgSrc = productCard.querySelector('.img__product').src;
      const title = productCard.querySelector('.title__cards').textContent;
      const text = productCard.querySelector('.text__carsd').textContent;
      const price = productCard.querySelector('.cash__cards').textContent;
  
      const newItem = `
          <div class="basket__cart__one">
              <img src="${imgSrc}" alt="photo" style="width: 262px;">
              <div class="basket__cart__one__info">
                  <div class="basket__cart__one__info__title">
                      <h3 class="basket__cart__one__info__title__text">${title}</h3>
                      <button class="basket__cart__one__info__title__close" href="#">
                         &#128473;
                         
                      </button>
                  </div>
                  <p class="basket__cart__one__info__price">Price: <span class="basket__cart__one__info__price__color">${price}</span></p>
                  <p class="basket__cart__one__info__fonts">Color: <span class="basket__cart__one__info__fonts__colors">Black</span></p>
                  <p class="basket__cart__one__info__fonts">Size: <span class="basket__cart__one__info__fonts__colors">S</span></p>
                  <div class="basket__cart__one__info__quantity">
                      <p class="basket__cart__one__info__fonts">Quantity:</p>
                      <input class="basket__cart__one__info__quantity__pieces" type="text" value="1">
                  </div>
              </div>
          </div>
      `;
      const basket = document.querySelector('.basket__new');
       
      basket.insertAdjacentHTML('beforeend', newItem);

      
      


      basket.style.display = "block";
      basket.style.animation = 'ani3 2.0s forwards';
     
     
      caunt++;
      spanEl.textContent = caunt;
      cauntEl.style.display = 'block';
    });
  });
  
 




 
  
 

 
 
 

 

 