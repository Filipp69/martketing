window.onload = function () {
  document.body.classList.add('loaded_hiding');
  window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
      
      // Здесь начнется анимация GSAP после окончания прелоадера
      let heroTL = gsap.timeline();
      heroTL.from(".glass-1, .glass-2", {x: -200, opacity: 0, duration: .6, ease: "sine"}, 0)
            .from(".title-1, .title-2, .title-3", {opacity: 0, duration: .6, ease: "sine"}, 0)
            .from(".title-1", {x: -300, duration: .6, ease: "sine"}, 0)
            .from(".title-3", {x: 300, duration: .6, ease: "sine"}, 0);
  });
}

gsap.registerPlugin(ScrollTrigger);

gsap.from(".glass-3, .glass-4",{x: -200, opacity: 0, duration: .6, ease: "sine",
    scrollTrigger: {
        trigger: ".anim-container-2",
        start: "top 40%",
        end: "bottom bottom",
    }    
}, 0)

gsap.from(".title-4, .title-5",{opacity: 0, duration: .6, ease: "sine",
    scrollTrigger: {
        trigger: ".anim-container-2",
        start: "top 40%",
        end: "bottom bottom",
    }    
}, 0)

gsap.from(".glass-5, .glass-6",{x: -200, opacity: 0, duration: .6, ease: "sine",
    scrollTrigger: {
        trigger: ".anim-container-3",
        start: "top 40%",
        end: "bottom bottom",
    }    
}, 0)

gsap.from(".title-6, .title-7",{opacity: 0, duration: .6, ease: "sine",
    scrollTrigger: {
        trigger: ".anim-container-3",
        start: "top 40%",
        end: "bottom bottom",
    }    
}, 0)

gsap.from(".glass-7, .glass-8",{x: -200, opacity: 0, duration: .6, ease: "sine",
    scrollTrigger: {
        trigger: ".anim-container-4",
        start: "top 40%",
        end: "99% bottom",
    }    
}, 0)

document.getElementById("openMenu").addEventListener("click", function() {
  document.getElementById("menu").style.bottom = "0";
});

document.getElementById("closeMenu").addEventListener("click", function() {
  document.getElementById("menu").style.bottom = "-100vh";
});

document.querySelectorAll(".menu__item").forEach(function(link) {
  link.addEventListener("click", function() {
      document.getElementById("menu").style.bottom = "-100vh";
  });
});

document.addEventListener("click", function(event) {
  if (event.target.class === "menu") {
      document.getElementById("menu").style.bottom = "-100vh";
  }
});

function showOverlay() {
  document.getElementById("overlay").style.display = "block";
}

function hideOverlay() {
  document.getElementById("overlay").style.display = "none";
}

window.addEventListener("orientationchange", function() {
  if (window.orientation === 90 || window.orientation === -90) {
      showOverlay();
  } else {
      hideOverlay();
  }
});

if (window.location.hash) {
  history.replaceState(null, null, window.location.pathname + window.location.search);
}
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlideText = document.querySelector('.current-slide-text');
let currentSlideIndex = 0;

function showSlide(index) {
    slides[currentSlideIndex].classList.remove('slide-active');
    slides[index].classList.add('slide-active');
    currentSlideIndex = index;
    currentSlideText.textContent = slides[index].querySelector('.slide-text').textContent;
}

prevBtn.addEventListener('click', () => {
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(prevIndex);
});

nextBtn.addEventListener('click', () => {
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(nextIndex);
});

showSlide(currentSlideIndex);

const blocks = document.querySelectorAll('.block');
let currentBlock = 0;

function showNextBlock() {
  const current = blocks[currentBlock];
  const next = blocks[(currentBlock + 1) % blocks.length];

  gsap.to(current, { opacity: 0, filter: "blur(3px)", duration: 0.5, onComplete: () => {
    gsap.to(next, { opacity: 1, filter: "blur(0px)", duration: 0.5 });
  }});

  currentBlock = (currentBlock + 1) % blocks.length;
}

gsap.to(blocks[currentBlock], { opacity: 1, filter: "blur(0px)", duration: 0.5 });
setInterval(showNextBlock, 3000);
