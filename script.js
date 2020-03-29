
//Burger button

const menu = document.getElementById('header__burger-menu');
const button = document.getElementById('burger-menu__btn');
const BUTTON = document.getElementById('button');
const CLOSEBUTTON = document.getElementById('close-button');

button.addEventListener("click", (event) => {
  event.preventDefault();
  menu.classList.toggle("burger-menu_active");
});

// Scroll to content blocks
document.addEventListener('scroll', onScroll);

function onScroll(event){
  const curPos = window.scrollY;
  const header = document.getElementById('header');
  const services = document.getElementById('services');
  const portfolio = document.getElementById('portfolio');
  const about = document.getElementById('about');
  const contact = document.getElementById('contact');
  const blocks = [
  header,
  services,
  portfolio,
  about,
  contact];
  const links = document.querySelectorAll('#header__menu .content-links');
  blocks.forEach((el) => {
    if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos){
    	links.forEach((a) => {
        a.classList.remove('active-link');
        if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
        	a.classList.add('active-link');
        }
    	});
    }
  });
}



// Slider
let items = document.querySelectorAll('.slider__item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n){
	currentItem = (n + items.length) % items.length;
}

function hideItem(direction){
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener("animationend", function(){
    this.classList.remove("active", direction);
  });
}

function showItem(direction){
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener("animationend", function(){
    this.classList.remove('next', direction);
    this.classList.add('active');
    isEnabled = true;
  });
}

function previousItem(n){
	hideItem("to-right");
	changeCurrentItem(n - 1);
	showItem("from-left");
}

function nextItem(n){
  hideItem("to-left");
	changeCurrentItem(n + 1);
	showItem("from-right");
}

document.querySelector('.slider__control.left').addEventListener("click", function() {
  if(isEnabled){
  	nextItem(currentItem);
  }
  if(items[currentItem].classList.contains('slider__item2')){
  document.querySelector('.slider').style.backgroundColor = "#648bf0";
  document.querySelector('.slider').style.borderBottom = "6px solid #6475cc";
  document.querySelector('.slider').style.transition = "0.1s";
}else{
  document.querySelector('.slider').style.backgroundColor = "#f06c64";
  document.querySelector('.slider').style.borderBottom = "6px solid #ea676b";
  document.querySelector('.slider').style.transition = "0.5s";
}
});

document.querySelector('.slider__control.right').addEventListener("click", function() {
  if(isEnabled){
  	previousItem(currentItem);
  }
  if(items[currentItem].classList.contains('slider__item2')){
  document.querySelector('.slider').style.backgroundColor = "#648bf0";
  document.querySelector('.slider').style.borderBottom = "6px solid #6475cc";
  document.querySelector('.slider').style.transition = "0.1s";
}else{
  document.querySelector('.slider').style.backgroundColor = "#f06c64";
  document.querySelector('.slider').style.borderBottom = "6px solid #ea676b";
  document.querySelector('.slider').style.transition = "0.5s";
}
});
// Black screen on phones
document.querySelector('.slider__item__wrapper-vertical').addEventListener("click", () => {
  document.querySelector('.slider__item__wrapper-vertical__black-screen').classList.toggle('hidden');
});

document.querySelector('.slider__item__wrapper-horizontal').addEventListener("click", () => {
  document.querySelector('.slider__item__wrapper-horizontal__black-screen').classList.toggle('hidden');
});


// Portfolio toggles
const PORTFOLIONAV = document.querySelector(".portfolio__nav__ul");
PORTFOLIONAV.addEventListener("click", (event) => {
  PORTFOLIONAV.querySelectorAll("li").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});

//Portfolio red border

const PORTFOLIOUL = document.getElementById('portfolio__flexbox__ul');

PORTFOLIOUL.addEventListener("click", (event) => {
  PORTFOLIOUL.querySelectorAll('div').forEach(el => el.classList.remove('portfolio-img-outline'));
  event.target.classList.add('portfolio-img-outline');
});

//FORM

BUTTON.addEventListener("click", (event) => {
  const subject = document.getElementById('subject').value.toString();
  const description = document.getElementById('description').value.toString();
  event.preventDefault();
	if(document.getElementById('name').value && document.getElementById('mail').value){
    if (document.getElementById('subject').value) {
    	document.getElementById('message-theme').innerText = subject;
    }else{
      document.getElementById('message-theme-paragraph').innerText = 'Без темы';
    }
    if (document.getElementById('description').value) {
    	document.getElementById('message-description').innerText = description;
    }else{
      document.getElementById('message-description-paragraph').innerText = 'Без описания';
    }
    document.getElementById('message-block').classList.remove('hidden');
	}
});

CLOSEBUTTON.addEventListener("click", () => {
  if (document.getElementById('subject').value) {
    	document.getElementById('message-theme').innerText = '';
    }else{
      document.getElementById('message-theme-paragraph').innerText = 'Тема: ';
    }
    if (document.getElementById('description').value) {
    	document.getElementById('message-description').innerText = '';
    }else{
      document.getElementById('message-description-paragraph').innerText = 'Описание: ';
   }
  document.getElementById('form').reset();
  document.getElementById('message-block').classList.add('hidden');
});

