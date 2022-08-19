// CLOSE NAV
const navClose = document.querySelector('.navbar-toggler-icon')

navClose.addEventListener('click', function(){
    navClose.classList.toggle("change")
})

// NAV LINK 
const navLink = document.querySelectorAll('.nav-link.active')
const aboutMe = document.querySelector('#about')
const project = document.querySelector('#project')
const contact = document.querySelector('#contact')
const whyMe = document.querySelector('#Why')
const navbar = document.querySelector('.navbar-brand')


navbar.addEventListener('click', e => {
    e.preventDefault()
    window.scrollTo(window.outerHeight, 0)
})
navLink[0].addEventListener('click', () => {
    const wdw = (window.outerHeight/2.3)
    window.scrollTo(aboutMe, window.outerHeight-wdw)
})
navLink[1].addEventListener('click', () => {
    const wdw = (window.outerHeight/2.5)
    window.scrollTo(project, window.outerHeight+wdw)
})
navLink[2].addEventListener('click', () => {
    const wdw = (window.outerHeight*2.8)
    window.scrollTo(contact, window.outerHeight+wdw)
})
navLink[3].addEventListener('click', () => {
  const wdw = (window.outerHeight*4)
  window.scrollTo(contact, window.outerHeight+wdw)
})

// EMAIL BUTTON
const button = document.querySelectorAll('.btnEmail')
const emailSide = document.querySelector('.row .email')

button.forEach((i,m) => {
    button[m].addEventListener('click', () => {
        location.href ="mailto:yasashibriliantp@gmail.com"
    })
})

emailSide.addEventListener('click', () => {
    location.href ="mailto:yasashibriliantp@gmail.com"})

// instagram link
const instagram = document.querySelector('.instagram-img')
const igMOb = document.querySelector('.instagram-img-mob')
instagram.addEventListener('click', () => {
    window.open('https://www.instagram.com/yasashi_bp/', '_blank')})
    igMOb.addEventListener('click', () => {
        window.open('https://www.instagram.com/yasashi_bp/', '_blank')})

    // VISIT WEB
    const buttonVst = document.querySelector('.visitWeb')
    buttonVst.addEventListener('click', () => {
        window.open('https://hanwa-indonesia.co.id/', '_blank')})

        // scroll effect
const scrollElm = document.querySelectorAll(".scroll-element")

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop <=
      (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
    
  };

  const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  };
  
  const displayScrollElement = (element) => {
    element.classList.add("scrolled");
  };
  
  const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
  
  const handleScrollAnimation = () => {
    scrollElm.forEach((el) => {
      if (elementInView(el, 1.20)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el)
      }
    })
  }
  
  window.addEventListener("scroll", () => { 
    handleScrollAnimation();
  });

const svgExpert = document.querySelectorAll('#EXPERTBRO path')
const perParthExp = document.querySelectorAll('.TextExp')

for(let i = 0; i < svgExpert.length; i++){
  svgExpert[i].classList.toggle("end")
}


// animation mouse
document.addEventListener("mousemove", parallax)

function parallax(e) {
  this.querySelectorAll(".moveLayer").forEach(layer => {
    const speed = layer.getAttribute("data-speed")
    const speed2 = layer.getAttribute("data-speed2")
    const x = (window.innerWidth + e.pageX*speed)/100
    const y = (window.innerHeight + e.pageX*speed)/100
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  } )
      // mouse traill
      var elem = document.createElement('div')
      elem.setAttribute('class', 'trail')
      elem.setAttribute('style', `left: ${e.clientX - 10}px; top: ${e.clientY - 10}px`)
  
      elem.onanimationend=() => {
        elem.remove();
      }
      bdy.insertAdjacentElement('beforeend', elem)
}