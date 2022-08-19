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

const openWindw = document.querySelectorAll('.btn');
for (let i = 0; i < openWindw.length; i++) {
  openWindw[i].addEventListener('click', function () {
    window.open('aboutUs.html', '_self');
  });
}
