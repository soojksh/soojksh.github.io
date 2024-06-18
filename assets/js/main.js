const darkModeToggle = document.querySelector('.dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Change the icon based on the current mode
  const darkModeIcon = darkModeToggle.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    darkModeIcon.classList.remove('uil-moon');
    darkModeIcon.classList.add('uil-sun');
  } else {
    darkModeIcon.classList.remove('uil-sun');
    darkModeIcon.classList.add('uil-moon');
  }
});



/* ------Resume Download --------*/
document.querySelector('.resume-btn').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default link behavior
  const link = e.currentTarget;
  const fileName = link.getAttribute('href');

  // Create a new anchor element
  const downloadLink = document.createElement('a');
  downloadLink.setAttribute('href', fileName);
  downloadLink.setAttribute('download', fileName.split('/').pop());
  downloadLink.style.display = 'none';

  // Append the anchor element to the document body
  document.body.appendChild(downloadLink);

  // Click the anchor element to initiate the download
  downloadLink.click();

  // Remove the anchor element from the document body
  document.body.removeChild(downloadLink);
});


/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Developer","Software Engineer", "Writer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})
sr.reveal('.skill-description', {interval:200})

sr.reveal('.skill-buttons',{interval: 200})
/* -- PROJECT BOX -- */
sr.reveal('.ProjectCard_card_con__29uVq', {interval:200})
sr.reveal('.story-card',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

/* ----- SCROLL TO TOP----- */
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});




const skillBtns = document.querySelectorAll('.skill-btn');
const skillTitle = document.getElementById('skill-title');
const skillDescription = document.getElementById('skill-description');
const skillConfidence = document.getElementById('skill-confidence');
const skillExperience = document.getElementById('skill-experience');

skillBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    skillTitle.textContent = btn.dataset.title;
    skillDescription.textContent = btn.dataset.description;
    skillConfidence.innerHTML =  btn.dataset.confidence;
    skillExperience.textContent =  btn.dataset.experience;

    // Remove active class from all buttons
    skillBtns.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    btn.classList.add('active');
  });
});

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)