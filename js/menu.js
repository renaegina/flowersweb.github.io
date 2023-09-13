// Default in HTML
const carouselInner = document.querySelector(".carousel-menu");
const rightMenuImage = document.querySelector(".right-img-menu");
carouselInner.innerHTML = carouselMenuImage("rose1.png", "rose2.png", "rose3.png");

// More Menu (Rose)
const rose = document.querySelector(".rose");
rose.addEventListener("click", (e) => {
  imgRose(e);
  textRose();
  animateOnClick();
});
// More Menu (Baby)
const baby = document.querySelector(".baby");
baby.addEventListener("click", (e) => {
  imgBaby(e);
  textBaby();
  animateOnClick();
});
// More Menu (Aster)
const aster = document.querySelector(".aster");
aster.addEventListener("click", (e) => {
  imgAster(e);
  textAster();
  animateOnClick();
});

function carouselMenuImage(img1, img2, img3) {
  return `<div class="carousel-item border-menu-image active">
            <img src="img/menu/${img1}" alt="" class="img-fluid menu-image" />
        </div>
        <div class="carousel-item border-menu-image">
            <img src="img/menu/${img2}" alt="" class="img-fluid menu-image" />
        </div>
        <div class="carousel-item border-menu-image">
            <img src="img/menu/${img3}" alt="" class="img-fluid menu-image"/>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>`;
}

function rightImage(image) {
  return `<img src="img/menu/${image}" alt="" class="img-fluid right-menu-image" />`;
}

function animateOnClick() {
  const menuList = document.querySelector(".menu-list");
  const menuText = document.querySelector(".menu-text-header");

  carouselInner.classList.add("fade");
  rightMenuImage.classList.add("fade");
  menuList.classList.add("slideIn");
  menuText.classList.add("fade");
  setTimeout(() => {
    carouselInner.classList.remove("fade");
    rightMenuImage.classList.remove("fade");
    menuList.classList.remove("slideIn");
    menuText.classList.remove("fade");
  }, 600);
}

function imgRose(e) {
  e.preventDefault();
  carouselInner.innerHTML = carouselMenuImage("rose1.png", "rose2.png", "rose3.png");
}
function imgBaby(e) {
  e.preventDefault();
  carouselInner.innerHTML = carouselMenuImage("baby1.png", "baby2.png", "baby3.png");
}
function imgAster(e) {
  e.preventDefault();
  carouselInner.innerHTML = carouselMenuImage("aster1.png", "aster2.png", "aster3.png");
}

const menuText1 = document.querySelector(".menu-text h5");
const menuText2 = document.querySelector(".menu-text h3:nth-child(2)");
const menuText3 = document.querySelector(".menu-text h3:nth-child(3)");
const menuText4 = document.querySelector(".menu-text p");
const menuList1 = document.querySelector(".menu-list p:nth-child(1)");
const menuList2 = document.querySelector(".menu-list p:nth-child(3)");
const menuList3 = document.querySelector(".menu-list p:nth-child(5)");

function textRose() {
  menuText1.textContent = "Our Roses";
  menuText2.textContent = "Choose Your";
  menuText3.textContent = "Favorite Flower";
  menuText4.textContent = "More than 30+ type of rose are ready to serve by our professionals.";
  menuList1.textContent = "Red";
  menuList2.textContent = "White";
  menuList3.textContent = "Purple";
}
function textBaby() {
  menuText1.textContent = "Our Baby Breath";
  menuText2.textContent = "Choose Your";
  menuText3.textContent = "Favorite Baby";
  menuText4.textContent = "The dazzling white charm is only in baby breath!";
  menuList1.textContent = "Rainbow";
  menuList2.textContent = "Summer Sparkles";
  menuList3.textContent = "Sophila Repens"; 
}
function textAster() {
  menuText1.textContent = "Our Aster";
  menuText2.textContent = "Start your day";
  menuText3.textContent = "With beautiful Aster ";
  menuText4.textContent = "All happiness is created from the beauty of the eye!";
  menuList1.textContent = "Dumosus";
  menuList2.textContent = "Novae-angliae";
  menuList3.textContent = "Alpinus";
}
