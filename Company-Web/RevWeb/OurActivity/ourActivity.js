const menuMobile = document.querySelector('.menuHam');
const menuOp = document.querySelector('.menu');
const arrowR = document.querySelector('.top');
const navBtn = document.querySelector('.navSideMobile');
const sideMenu = document.querySelector('.sideMenu');

navBtn.addEventListener('click', function () {
  menuMobile.classList.toggle('open');
  menuOp.classList.toggle('open');
  navBtn.classList.toggle('open');
});
arrowR.addEventListener('click', function () {
  menuOp.classList.remove('open');
  menuMobile.classList.remove('open');
  navBtn.classList.remove('open');
});

// LOADING FUNCTION
const loader = document.querySelector('.loader');
const bdy = document.querySelector('body');
function load() {
  loader.style.display = 'none';
  bdy.style.overflow = 'visible';
}

// FOOTER
const qna = document.querySelectorAll('.footer > div > div > div > div');
const qnaArr = document.querySelectorAll('.footer > div > div > div > div > div div');
const yy = document.querySelectorAll('.footer > div > div > div:nth-child(3) ');
for (let i = 0; i < qnaArr.length; i++) {
  qnaArr[i].addEventListener('click', function () {
    qna[i].classList.toggle('on');
    qnaArr[i].classList.toggle('on');
  });
}
const footer = document.querySelector('.footer');
let footerLoc = footer.offsetTop;
window.addEventListener('scroll', function () {
  sideMenu.classList.toggle('foot', window.scrollY > footerLoc - 700);
});

// LIST ITEM FUNCTION
const text = document.querySelector('.contGreen > div:first-child');
const text2 = document.querySelector('.contGreen > div:nth-child(2)');
const liFire = document.querySelector('.contGreen > div ul > li:nth-child(1)');
const liMedic = document.querySelector('.contGreen > div ul > li:nth-child(2)');
const liOffice = document.querySelector('.contGreen > div ul > li:nth-child(3)');
const underL = document.querySelector('.underLOur');
const nC = '0.3';
const tC = '10';
const dotGroup = document.querySelector('.dotClubBasic');
// const Display
const imgDis = document.querySelectorAll('.imgSrc');
const imgInDis = document.querySelectorAll('.imgSrc > img');
const flex = 'flex';
const none = 'none';
const block = 'block';
function imgIndex(n) {
  if (n == 0) {
    imgDis[n].style.display = flex;
    imgDis[n + 1].style.display = none;
    imgDis[n + 2].style.display = none;
    console.log(`${n} on, ${n + 1} off, ${n + 2} off`);
  }
  if (n == 1) {
    imgDis[n].style.display = flex;
    imgDis[n - 1].style.display = none;
    imgDis[n + 1].style.display = none;
    console.log(`${n} on, ${n - 1} off, ${n + 1} off`);
  }
  if (n == 2) {
    imgDis[n].style.display = flex;
    imgDis[n - 1].style.display = none;
    imgDis[n - 2].style.display = none;
    console.log(`${n} on, ${n - 1} off, ${n - 2} off`);
  }
}
const fireT = `This is Our Activity in Training <br />
            case fire`;
const medicT = `This is Our Activity in Training <br />
            case Medic`;
const officeT = `This is Our Activity in Training <br /> for new employe`;
const fireT2 = `This is Our Activity in <br /> Training case fire`;
const medicT2 = `This is Our Activity in  <br /> Training case Medic`;
const officeT2 = `This is Our Activity in  <br />  Training for new employe`;
// DOT GROUP
const dotG = document.querySelectorAll('.dotGroup');
dotG[0].style.display = block;
dotG[1].style.display = none;
dotG[2].style.display = none;
// Add event listener
liFire.addEventListener('click', liFireFunc);
liMedic.addEventListener('click', liMedicFunc);
liOffice.addEventListener('click', liOfficeFunc);
// default set

// function for above
function liFireFunc() {
  liFire.style.opacity = tC;
  liMedic.style.opacity = nC;
  liOffice.style.opacity = nC;
  // img dis
  imgIndex(0);
  // text
  text.innerHTML = fireT;
  text2.innerHTML = fireT2;
  // dotG
  dotG[0].style.display = block;
  dotG[1].style.display = none;
  dotG[2].style.display = none;
  // UNDERL
  underL.classList.remove('M');
  underL.classList.remove('O');
}
function liMedicFunc() {
  liFire.style.opacity = nC;
  liMedic.style.opacity = tC;
  liOffice.style.opacity = nC;
  // img dis
  imgIndex(1);
  // text
  text.innerHTML = medicT;
  text2.innerHTML = medicT2;
  // dotG
  dotG[0].style.display = none;
  dotG[1].style.display = block;
  dotG[2].style.display = none;
  // UNDERL
  underL.classList.add('M');
  underL.classList.remove('O');
}
function liOfficeFunc() {
  liFire.style.opacity = nC;
  liMedic.style.opacity = nC;
  liOffice.style.opacity = tC;
  // img dis
  imgIndex(2);
  text.innerHTML = officeT;
  text2.innerHTML = officeT2;
  // dotG
  dotG[0].style.display = none;
  dotG[1].style.display = none;
  dotG[2].style.display = block;
  // UNDERL
  underL.classList.remove('M');
  underL.classList.add('O');
}

// FIRE FUNCTION
let slideFire = 1;
showSlideFire(slideFire);

function currentSlideFire(n) {
  showSlideFire((slideFire = n));
}

function plusSlideFire(n) {
  showSlideFire((slideFire += n));
}

function showSlideFire(n) {
  let i;
  let slide = document.querySelectorAll('.imgSrc.fire > img');
  let dot = document.querySelectorAll('.dotBasic');
  if (n > slide.length) {
    slideFire = 1;
  }
  if (n < 1) {
    slideFire = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' Active', '');
  }
  slide[slideFire - 1].style.display = 'flex';
  dot[slideFire - 1].className += ' Active';
}

// MEDICAL FUNCTION
let slideMedic = 1;
showSlideMedic(slideMedic);

function currentSlideMedic(n) {
  showSlideMedic((slideMedic = n));
}

function plusSlideMedic(n) {
  showSlideMedic((slideMedic += n));
}
function showSlideMedic(n) {
  let i;
  let slide = document.querySelectorAll('.imgSrc.Medic > img');
  let dot = document.querySelectorAll('.dotBasicM');
  if (n > slide.length) {
    slideMedic = 1;
  }
  if (n < 1) {
    slideMedic = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' Active', '');
  }
  slide[slideMedic - 1].style.display = 'flex';
  dot[slideMedic - 1].className += ' Active';
}

// OFFICE FUNCTION
let slideOff = 1;
showSlideOff(slideOff);

function currentSlideOff(n) {
  showSlideOff((slideOff = n));
}

function plusSlideOff(n) {
  showSlideOff((slideOff += n));
}

function showSlideOff(n) {
  let i;
  let slide = document.querySelectorAll('.imgSrc.Off > img');
  let dot = document.querySelectorAll('.dotBasicO');
  if (n > slide.length) {
    slideOff = 1;
  }
  if (n < 1) {
    slideOff = slide.length;
  }
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = 'none';
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(' Active', '');
  }
  slide[slideOff - 1].style.display = 'flex';
  dot[slideOff - 1].className += ' Active';
}

const openWindw = document.querySelectorAll('.btn');

for (let i = 0; i < openWindw.length; i++) {
  openWindw[i].addEventListener('click', function () {
    window.open('../AboutUs/aboutUs.html', '_self');
  });
}
