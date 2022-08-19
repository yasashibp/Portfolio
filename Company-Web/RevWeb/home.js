// LOADING JAVASCRIPT
const loader = document.querySelector('.loader');
const bdy = document.querySelector('body');

// SCROLL NAVIGASI DESKTOP

const navDes = document.querySelector('.nav');
window.addEventListener('scroll', function () {
  navDes.classList.toggle('Active', window.scrollY > 50);
});
const glbCont = document.querySelector('.glbCont');
const glbContentS = document.querySelector('.glbContent');
let glbMap = glbCont.offsetTop;
let glbMs = glbContentS.offsetTop;
// const hghg =  window.scrollY > glbMap - 300;
window.addEventListener('scroll', function () {
  navDes.classList.toggle('on', window.scrollY > glbMap - 300);
  navDes.classList.toggle('op', window.scrollY > glbMs - 200);
});
// SCROLL NAVIGASI MOBILE
// MENU MOBILE

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

// TEMBAK GAMBAR & ISINYA
const imageS = document.querySelectorAll('.safetyImg');
const imageQ = document.querySelectorAll('.safetyImgQ');
const imageE = document.querySelectorAll('.safetyImgE');
// TEMBAK MENU YANG DIATASNYA
const safety = document.querySelector('.liS');
const quality = document.querySelector('.liQ');
const efficiency = document.querySelector('.liE');
const underLine = document.querySelector('.underL');
// TEMBAK TOMBOL SLDE & DOTNYA
const arrowDot = document.querySelectorAll('.arrowDot');
const Dot = document.querySelectorAll('.dot');
const dotClub = document.querySelectorAll('.dotClub');

// BUAT GAMBAR SAFETY /ATURAN DEFAULTNYA
function load() {
  imageS[0].style.display = 'flex';
  loader.style.display = 'none';
  bdy.style.overflow = 'visible';
  imageQ[0].style.display = 'none';

  imageE[0].style.display = 'none';
  for (let i = 0; i < dotClub.length; i++) {
    if (i < 1) {
      dotClub[i].style.display = 'flex';
    }
    if (i > 0) {
      dotClub[i].style.display = 'none';
    }
  }
}
// EVENT BUAT TOMBOL MENU 3 PILIHAN DENGAN GARIS BAWAHNYA
safety.addEventListener('click', funcSafety);
quality.addEventListener('click', funcQuality);
efficiency.addEventListener('click', funEffy);
// FUNCTIONNYA BUAT 3 PILIHAN
function funcSafety() {
  imageS[0].style.display = 'flex';
  for (let g = 0; g < imageQ.length; g++) {
    imageQ[g].style.display = 'none';
  }
  for (let g = 0; g < imageE.length; g++) {
    imageE[g].style.display = 'none';
  }
  safety.classList.remove('qua', 'eff');
  quality.classList.remove('qua', 'eff');
  efficiency.classList.remove('qua', 'eff');
  underLine.classList.remove('qua', 'eff');
  // UNTUK DOTNYA
  for (let i = 0; i < dotClub.length; i++) {
    if (i < 1) {
      dotClub[i].style.display = 'flex';
    }
    if (i > 0) {
      dotClub[i].style.display = 'none';
    }
  }
}
function funcQuality() {
  quality.classList.remove('eff');
  underLine.classList.remove('eff');
  safety.classList.remove('eff');
  efficiency.classList.remove('eff');
  quality.classList.add('qua');
  safety.classList.add('qua');
  underLine.classList.add('qua');
  // gambarnya
  // for(let g = 1; g < imageQ.length; g++) {
  imageQ[0].style.display = 'flex';
  // }
  for (let g = 0; g < imageS.length; g++) {
    imageS[g].style.display = 'none';
  }
  for (let g = 0; g < imageE.length; g++) {
    imageE[g].style.display = 'none';
  }
  // UNTUK DOTNYA
  for (let i = 0; i < dotClub.length; i++) {
    if (i === 1) {
      dotClub[i].style.display = 'flex';
    } else {
      dotClub[i].style.display = 'none';
    }
  }
}
function funEffy() {
  efficiency.classList.remove('qua');
  quality.classList.remove('qua');
  underLine.classList.remove('qua');
  efficiency.classList.add('eff');
  quality.classList.add('eff');
  safety.classList.add('eff');
  underLine.classList.add('eff');
  // gambarnya
  for (let g = 0; g < imageQ.length; g++) {
    imageQ[g].style.display = 'none';
  }
  for (let g = 0; g < imageS.length; g++) {
    imageS[g].style.display = 'none';
  }
  imageE[0].style.display = 'flex';
  // UNTUK DOTNYA
  for (let i = 0; i < dotClub.length; i++) {
    if (i === 2) {
      dotClub[i].style.display = 'flex';
    } else {
      dotClub[i].style.display = 'none';
    }
  }
}

// buat safety image
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let image = document.querySelectorAll('.safetyImg');
  let Dot = document.querySelectorAll('.dot');
  let txt = document.querySelectorAll('.Txt');
  if (n > image.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < txt.length; i++) {
    txt[i].className = txt[i].className.replace('on', '');
  }
  for (i = 0; i < image.length; i++) {
    image[i].style.display = 'none';
  }
  for (let i = 0; i < Dot.length; i++) {
    Dot[i].className = Dot[i].className.replace('Active', '');
  }
  image[slideIndex - 1].style.display = 'flex';
  Dot[slideIndex - 1].className += ' Active';
  txt[slideIndex - 1].className += ' on';
}

// BUAT QUALITY IMAGE
let slideIndexQ = 1;
showSlidesQ(slideIndexQ);

function plusSlideQ(n) {
  showSlidesQ((slideIndexQ += n));
}

function currentSlideQ(n) {
  showSlidesQ((slideIndexQ = n));
}

function showSlidesQ(n) {
  let i;
  let imageQ = document.querySelectorAll('.safetyImgQ');
  let DotQ = document.querySelectorAll('.dotQ');
  let txtQ = document.querySelectorAll('.TxtQ');
  if (n > imageQ.length) {
    slideIndexQ = 1;
  }
  if (n < 1) {
    slideIndexQ = imageQ.length;
  }
  for (let i = 0; i < txtQ.length; i++) {
    txtQ[i].className = txtQ[i].className.replace(' on', '');
  }
  for (i = 0; i < imageQ.length; i++) {
    imageQ[i].style.display = 'none';
  }
  for (let i = 0; i < DotQ.length; i++) {
    DotQ[i].className = DotQ[i].className.replace(' Active', '');
  }
  // imageQ[slideIndexQ+1].className += " pre"
  imageQ[slideIndexQ - 1].style.display = 'flex';
  DotQ[slideIndexQ - 1].className += ' Active';
  txtQ[slideIndexQ - 1].className += ' on';
}

// BUAT EFFECIENCY GROUP
let slideIndexE = 1;
showSlidesE(slideIndexE);

function plusSlideE(n) {
  showSlidesE((slideIndexE += n));
}

function currentSlideE(n) {
  showSlidesE((slideIndexE = n));
}

function showSlidesE(n) {
  let i;
  let imageE = document.querySelectorAll('.safetyImgE');
  let DotE = document.querySelectorAll('.dotE');
  let txtE = document.querySelectorAll('.TxtE');
  if (n > imageE.length) {
    slideIndexE = 1;
  }
  if (n < 1) {
    slideIndexE = imageE.length;
  }
  for (let i = 0; i < txtE.length; i++) {
    txtE[i].className = txtE[i].className.replace('on', '');
  }
  for (i = 0; i < imageE.length; i++) {
    // image[i].style.display = "none";
    imageE[i].style.display = 'none';
  }
  for (let i = 0; i < DotE.length; i++) {
    DotE[i].className = DotE[i].className.replace('Active', '');
  }
  imageE[slideIndexE - 1].style.display = 'flex';
  DotE[slideIndexE - 1].className += ' Active';
  txtE[slideIndexE - 1].className += ' on';
}

const cek = document.querySelector('.cekLayar');
cek.textContent = `lebar ${window.innerWidth} px tinggi ${window.innerHeight} px`;
// KLIK UNTUK MEMUNCULKAN TEXTNYA

const klikPop = document.querySelectorAll('.bImgSteel');
// function set time out
for (let i = 0; i < klikPop.length; i++) {
  klikPop[i].addEventListener('click', function () {
    klikPop[i].classList.toggle('Active');
  });
}
// const alert = document.querySelector('.alert');
// function lert() {
//   alert.classList.remove('on');
// }
// function lert2(s, j) {
//   alert.classList.add(s);
//   alert.textContent = j;
// }

// ZOOM IMAGE
let zi = 1;
let zo = 1;
function zoomInM() {
  const mapImg = document.querySelector('.contGlbImgMob .svgimg');
  const currWidth = mapImg.clientWidth;
  // const tmeO = setTimeout(lert, 3000);
  if (zi + zo == 8) {
    zi *= 1;
    zo *= 1;
    // lert2('on', 'Zoom In Maximum');
    // tmeO;
    console.log(`(in)zi + zo = ${zi + zo}`);
  } else {
    mapImg.style.width = currWidth + 200 + 'px';
    mapImg.style.marginLeft = currWidth + 10 + 'px';
    zi++;
    zo++;
    console.log(`(in)zi + zo = ${zi + zo}`);
  }
}

function zoomOutM() {
  const mapImg = document.querySelector('.contGlbImgMob .svgimg');
  const currWidth = mapImg.clientWidth;
  // const tmeO = setTimeout(lert, 4000);
  if (zi + zo == 2) {
    mapImg.style.marginLeft = currWidth * 0 + 'px';
    zi *= 1;
    zo *= 1;
    // lert2('on', 'Zoom Out Maximum');
    // tmeO;
    console.log(`(out If) zi + zo = ${zi + zo}`);
  } else {
    mapImg.style.width = currWidth - 200 + 'px';
    mapImg.style.marginLeft = currWidth - 200 + 'px';
    zi -= 1;
    zo -= 1;
    console.log(`(out else) zi + zo = ${zi + zo}`);
  }
}

// KLIK IN IN MAPS
const klikMaps = document.querySelectorAll('.glbContent ul > div');
const underKlik = document.querySelectorAll('.underGlbImg');
const circle = document.querySelectorAll('.contGlbImgMob circle');
const circleDes = document.querySelectorAll('.contGlbImgDes circle');

function klikMaps1() {
  let i = 23;
  while (i >= 18) {
    circle[i].classList.toggle('on');
    circleDes[i].classList.toggle('on');
    i--;
  }
}
function klikMaps2() {
  let i = 17;
  while (i >= 0) {
    circle[i].classList.toggle('on');
    circleDes[i].classList.toggle('on');
    i--;
  }
}
function klikMaps3() {
  let i = 37;
  while (i >= 24) {
    circle[i].classList.toggle('on');
    circleDes[i].classList.toggle('on');
    i--;
  }
}
function out() {
  for (let i = 0; i < circle.length; i++) {
    circle[i].classList.remove('on');
    circleDes[i].classList.remove('on');
  }
}

// SCROLL EFFECT DESKTOP
const navDesActive = document.querySelector('.nav.Active');

// SCROLL EFFEC ZOOM

const circ = document.querySelector('.cb2');
const mapImg = document.querySelector('.contGlbImgMob');
const theMap = document.querySelector('.mapImg');
let someBsc = document.querySelector('.glbContent');
let locMap = document.querySelector('.contOurPro');
let bscImg = someBsc.offsetTop;
let postImg = locMap.offsetTop;
let leftImg = locMap.offsetLeft;
const zoom = document.querySelector('.zoomGroup');
window.addEventListener('scroll', function () {
  zoom.classList.toggle('Active', window.scrollY > postImg - 200);
  sideMenu.classList.toggle('Active', window.scrollY > postImg - 200);
  zoom.classList.toggle('none', window.scrollY > bscImg - 500);
  sideMenu.classList.toggle('none', window.scrollY > bscImg - 500);
});
// console.log(window.scrollY);

let locImg = mapImg.getBoundingClientRect();

function coo(ev) {
  const x = ev.clientX;
  const y = ev.clientY;
  const dinat = `X = ${x} and Y ${y}`;
  console.log();
}

function coo2(ev) {
  const x = ev.pageX;
  const y = ev.pageY;
  const dinat = `X = ${x} and Y ${y}`;
  console.log(dinat);
}

// FUNCTION FOR SOME BASI CHOOSEN
const listOrder = document.querySelector('.liO');
const listDeliv = document.querySelector('.liD');
const listPack = document.querySelector('.liP');
const bscUnderLine = document.querySelector('.underLB');
const bscUnderLineDes = document.querySelector('.underLBDes');
// FOR IMG
const orderGroup = document.querySelector('.imgAllOrder');
const delivGroup = document.querySelector('.imgAllDelivery');
const packGroup = document.querySelector('.imgAllPackaging');
const arrowBsc = document.querySelectorAll('.arrowDotBasic');
const dot = document.querySelectorAll('.dotBasic');
// FOR GROUP
const grupOrder = document.querySelectorAll('.oI');
const grupDlv = document.querySelectorAll('.Dl');
const grupPack = document.querySelectorAll('.iP');
// FOR BUTTON
const dotBasic = document.querySelector('.bsic');
// ADD EVENT LISTENER FOR LIST
listOrder.addEventListener('click', ordList);
listDeliv.addEventListener('click', delivList);
listPack.addEventListener('click', packList);
// FUNCTION FOR LIST
// default
function ordList() {
  listDeliv.style.opacity = '0.3';
  listPack.style.opacity = '0.3';
  listOrder.style.opacity = '10';
  // UNDER lINE
  bscUnderLine.style.left = '0px';
  bscUnderLineDes.style.left = '0';
  // group
  orderGroup.style.display = 'inline-block';
  delivGroup.style.display = 'none';
  packGroup.style.display = 'none';
  // GROUP IMAGE
  for (let i = 0; i < grupOrder.length; i++) {
    i == 0 ? (grupOrder[i].style.display = 'flex') : (grupOrder[i].style.display = 'none');
  }

  // ARROW
  arrowBsc[0].setAttribute(`onclick`, `plusSlideOrd(-1)`);
  arrowBsc[1].setAttribute(`onclick`, `plusSlideOrd(1)`);
  for (let i = 0; i < dot.length; i++) {
    if (i == 2) {
      dot[i].style.display = 'flex';
    }
    if (i == 0) {
      dot[i].classList.add('Active');
    } else {
      dot[i].className = dot[i].className.replace('Active', '');
    }
    dot[i].setAttribute(`onclick`, `currentSlideOrd(${i + 1})`);
  }
}
function delivList() {
  listDeliv.style.opacity = '10';
  listOrder.style.opacity = '0.3';
  listPack.style.opacity = '0.3';
  // UNDER lINE
  bscUnderLine.style.left = '74px';
  bscUnderLineDes.style.left = '33%';
  // group
  orderGroup.style.display = 'none';
  delivGroup.style.display = 'inline-block';
  packGroup.style.display = 'none';
  // GROUP image
  for (let i = 0; i < grupDlv.length; i++) {
    i == 0 ? (grupDlv[i].style.display = 'flex') : (grupDlv[i].style.display = 'none');
  }
  // ARROW
  arrowBsc[0].setAttribute(`onclick`, `plusSlideDlv(-1)`);
  arrowBsc[1].setAttribute(`onclick`, `plusSlideDlv(1)`);
  // DOT
  for (let i = 0; i < dot.length; i++) {
    if (i == 2) {
      dot[i].style.display = 'none';
    }
    if (i == 0) {
      dot[i].classList.add('Active');
    } else {
      dot[i].className = dot[i].className.replace('Active', '');
    }
    dot[i].setAttribute(`onclick`, `currentSlideDlv(${i + 1})`);
  }
}
function packList() {
  listOrder.style.opacity = '0.3';
  listDeliv.style.opacity = '0.3';
  listPack.style.opacity = '10';
  // UNDER lINE
  bscUnderLine.style.left = '172px';
  bscUnderLineDes.style.left = '74%';
  // group
  orderGroup.style.display = 'none';
  delivGroup.style.display = 'none';
  packGroup.style.display = 'inline-block';
  // GROUP IMAGE
  for (let i = 0; i < grupPack.length; i++) {
    i == 0 ? (grupPack[i].style.display = 'flex') : (grupPack[i].style.display = 'none');
  }
  // ARROW
  arrowBsc[0].setAttribute(`onclick`, `plusSlidePack(-1)`);
  arrowBsc[1].setAttribute(`onclick`, `plusSlidePack(1)`);
  for (let i = 0; i < dot.length; i++) {
    if (i == 2) {
      dot[i].style.display = 'flex';
    }
    if (i == 0) {
      dot[i].classList.add('Active');
    } else {
      dot[i].className = dot[i].className.replace('Active', '');
    }
    dot[i].setAttribute(`onclick`, `currentSlidePack(${i + 1})`);
  }
}

// FUNCTION FOR DOT
let slideIndexOrd = 1;
showSlideOrd(slideIndexOrd);

function plusSlideOrd(n) {
  showSlideOrd((slideIndexOrd += n));
  console.log(`(1.1)pluss order ${slideIndexOrd}`);
}
function currentSlideOrd(n) {
  showSlideOrd((slideIndexOrd = n));
}
function showSlideOrd(n) {
  const dot = document.querySelectorAll('.dotBasic');
  const grupOrder = document.querySelectorAll('.oI');
  if (n > grupOrder.length) {
    slideIndexOrd = 1;
  }
  if (n < 1) {
    slideIndexOrd = grupOrder.length;
  }
  for (let i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace('Active', '');
  }
  for (let i = 0; i < grupOrder.length; i++) {
    grupOrder[i].style.display = 'none';
  }
  grupOrder[slideIndexOrd - 1].style.display = 'flex';
  dot[slideIndexOrd - 1].className += ' Active';
}

// FUNCTION FOR DOT delivery
const listbsc = document.querySelector('.ListBsic');
let slideIndexDlv = 1;
showSlideDlv(slideIndexDlv);

function plusSlideDlv(n) {
  showSlideDlv((slideIndexDlv += n));
  window.location = '#listBsc';
  console.log(`(2.1)pluss Deliv ${slideIndexDlv}`);
}
function currentSlideDlv(n) {
  showSlideDlv((slideIndexDlv = n));
}
function showSlideDlv(n) {
  const dot = document.querySelectorAll('.dotBasic');
  const grupDlv = document.querySelectorAll('.Dl');
  if (n > grupDlv.length) {
    slideIndexDlv = 1;
  }
  if (n < 1) {
    slideIndexDlv = grupDlv.length;
  }
  for (let i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace('Active', '');
  }
  for (let i = 0; i < grupDlv.length; i++) {
    grupDlv[i].style.display = 'none';
  }
  grupDlv[slideIndexDlv - 1].style.display = 'flex';
  dot[slideIndexDlv - 1].className += ' Active';
}

// FUNCTION FOR DOT Packaging
let slideIndexPack = 1;
showSlidePack(slideIndexPack);

function plusSlidePack(n) {
  showSlidePack((slideIndexPack += n));
  console.log(`pluss (3.1) ${slideIndexPack}`);
}
function currentSlidePack(n) {
  showSlidePack((slideIndexPack = n));
}
function showSlidePack(n) {
  const dot = document.querySelectorAll('.dotBasic');
  const grupPack = document.querySelectorAll('.iP');
  if (n > grupPack.length) {
    slideIndexPack = 1;
  }
  if (n < 1) {
    slideIndexPack = grupPack.length;
  }
  for (let i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace('Active', '');
  }
  for (let i = 0; i < grupPack.length; i++) {
    grupPack[i].style.display = 'none';
  }
  grupPack[slideIndexPack - 1].style.display = 'flex';
  dot[slideIndexPack - 1].className += ' Active';
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
  zoom.classList.toggle('foot', window.scrollY > footerLoc - 700);
  sideMenu.classList.toggle('foot', window.scrollY > footerLoc - 700);
});

const openWindw = document.querySelectorAll('.btn');

for (let i = 0; i < openWindw.length; i++) {
  openWindw[i].addEventListener('click', function () {
    window.open('RevWeb/AboutUs/aboutUs.html', '_self');
  });
}

const imgDl = document.querySelectorAll('.sqr img');
const divImg = document.querySelectorAll('.sqr');
const fullNav = document.querySelector('nav');

for (let i = 0; i < divImg.length; i++) {
  imgDl[i].addEventListener('click', fixed);
}

function fixed() {
  divImg.forEach((e, i) => {
    divImg[i].classList.toggle('on');
  });

  fullNav.classList.toggle('sqr');
}
