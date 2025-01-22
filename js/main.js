gsap.registerPlugin(ScrollTrigger);

let heroTL = gsap.timeline();
heroTL.from(".title1, .title2, .title3, .title4", {x: -200, duration: .6, ease: "sine"})
let heroTL1 = gsap.timeline();
heroTL1.from(".title5, .title6, .title7", {x: 200, duration: .6, ease: "sine"})

gsap.fromTo(".title1",{y: 0} , {
    y: 39,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -5%",
        end: "bottom 520%",
        scrub: 2.5,
    }    
})

gsap.fromTo(".title2",{y: 0} , {
    y: 184,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -5%",
        end: "bottom 520%",
        scrub: 2.5,
    }    
})

gsap.fromTo(".title3",{y: 0} , {
    y: -50,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -5%",
        end: "bottom 520%",
        scrub: 2.5,
    }    
})

gsap.fromTo(".title5, .title7",{y: 0} , {
    y: -165,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -5%",
        end: "bottom 520%",
        scrub: 2.5,
    }    
})

gsap.fromTo(".title6",{y: 0} , {
    y: -310,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -5%",
        end: "bottom 520%",
        scrub: 2.5,
    }    
})


gsap.fromTo(".glass1, .glass2, .glass3",{x: 0} , {
    x: -4000,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "bottom 510%",
        scrub: 2.5, 
    }    
})

gsap.fromTo(".glass4, .glass5, .glass6, .glass7",{x: 0} , {
    x: 5000,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "bottom 510%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".hero__img, .plug",{scale: 1, opacity: 1} , {
    scale: 1.5,
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "bottom 510%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".heroimg-1",{x: 0, y: 0} , {
    x: -200,
    y: 200,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "bottom 510%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".heroimg-2",{x: 0, y: 0} , {
    x: -200,
    y: -200,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "bottom 510%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".heroimg-3",{x: 0, y: 0} , {
    x: 200,
    y: 200,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "bottom 510%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".heroimg-4",{x: 0, y: 0} , {
    x: 200,
    y: -200,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "bottom 510%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".z17",{display: ""} , {
    display: "none",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "bottom 510%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".card-1",{scale: 0.7} , {
    scale: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "bottom 510%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".card-2",{scale: 0.5} , {
    scale: 0.8,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -20%",
        end: "bottom 510%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".card-1",{scale: 1, opacity: 1, y: 0, display:""} , {
    scale: 3,
    opacity: 0,
    y: 500,
    display: "none",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -50%",
        end: "bottom 480%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".s3",{display:""} , {
    display: "none",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -50%",
        end: "bottom 480%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".card-2",{scale: 0.8, filter: "brightness(0.3)"} , {
    scale: 1,
    filter: "brightness(1)",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -51%",
        end: "bottom 479%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".advtitle-2",{opacity: 0} , {
    opacity: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -51%",
        end: "bottom 479%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".card-2",{scale: 1, opacity: 1, y: 0, display:""} , {
    scale: 3,
    opacity: 0,
    y: 500,
    display: "none",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -70%",
        end: "bottom 460%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".s4",{display:""} , {
    display: "none",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -70%",
        end: "bottom 460%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".card-3",{display: "none"} , {
    display: "",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -51%",
        end: "bottom 479%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".card-3",{scale: 0.8, filter: "brightness(0.3)"} , {
    scale: 1,
    filter: "brightness(1)",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -70%",
        end: "bottom 460%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".advtitle-3",{opacity: 0} , {
    opacity: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -70%",
        end: "bottom 460%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".advimg-5",{y: 0} , {
    y: 50,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -70%",
        end: "bottom 460%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".advimg-6",{right: ""} , {
    right: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -70%",
        end: "bottom 460%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".card-3",{display: ""} , {
    display: "none",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -90%",
        end: "bottom 440%",
        scrub: 2.5,
    }  
})


gsap.fromTo(".z13",{display: "none"} , {
    display: "flex",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -90%",
        end: "bottom 440%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".advtitle-3, .advantages__descr, .advimg-5, .advimg-6, .advimg-7, .advimg-8",{display: ""} , {
    opacity: 0,
    display: "none",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -90%",
        end: "bottom 440%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".glass8, .glass9, .glass10, .glass11, .glass12, .glass13, .glass14",{x: -220, opacity: 0} , {
    x: 0,
    opacity: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -90%",
        end: "bottom 440%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".hero__img2",{opacity: 0} , {
    opacity: 0.3,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -90%",
        end: "bottom 440%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".titlez13",{x: -200} , {
    x: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -90%",
        end: "bottom 440%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".glass8, .glass9, .glass10, .glass11, .glass12, .glass13, .glass14",{left: "0"} , {
    left: "-100vw",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -110%",
        end: "bottom 420%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".hero__img2",{x: 0} , {
    x: "-65vw",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -110%",
        end: "bottom 420%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".rightanim",{left: "100vw"} , {
    left: "0vw",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -110%",
        end: "bottom 420%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title13, .title14, .title15",{x: -500} , {
    x: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -110%",
        end: "bottom 420%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".rightanim",{bottom: "0vh"} , {
    bottom: "100vh",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -130%",
        end: "bottom 400%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".hero__img2",{y: 0} , {
    y: -1000,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -130%",
        end: "bottom 400%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".downanim",{bottom: "-100vh"} , {
    bottom: "0vh",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -130%",
        end: "bottom 400%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title16, .title17, .title18, .title19",{x: -200} , {
    x: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -130%",
        end: "bottom 400%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".downanim",{left: "0vw"} , {
    left: "100vw",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -160%",
        end: "bottom 370%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".leftanim",{left: "-100vw"} , {
    left: "0vw",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -160%",
        end: "bottom 370%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".who-img",{x: "", zIndex: ""} , {
    x: "-57vw",
    zIndex: -1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -160%",
        end: "bottom 370%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".titlez16",{x: -600} , {
    x: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -160%",
        end: "bottom 370%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".logo",{opacity: 1} , {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -160%",
        end: "bottom 370%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title26, .title27, .title28, .title29, .title30",{opacity: 1} , {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".glass23, .glass24, .glass25, .glass26, .glass27, .glass28, .glass29",{opacity: 1, x: 0} , {
    opacity: 0,
    x: -200,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".who-img",{opacity: 0.3} , {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".s9",{display: ""} , {
    display: "none",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".logo",{} , {
    opacity: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".gallery",{opacity: 0, pointerEvents: "none"} , {
    opacity: 1,
    pointerEvents: "auto",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".gallery__title, .gallery__btn",{x: 400} , {
    x: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-2",{y: 0} , {
    y: -20,
    scale: 0.95,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-3",{y: 0} , {
    y: -40,
    scale: 0.9,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-4",{y: 0} , {
    y: -60,
    scale: 0.85,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-5",{y: 0} , {
    y: -80,
    scale: 0.8,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-6",{y: 0} , {
    y: -100,
    scale: 0.75,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -190%",
        end: "bottom 340%",
        scrub: 2.5,
    }  
})


// gallery 1 slide

gsap.fromTo(".galimg-1",{} , {
    scale: 3,
    y: 1000,
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -210%",
        end: "bottom 320%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title25",{} , {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -210%",
        end: "bottom 320%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title26",{opacity: 0, display: "none"} , {
    opacity: 1,
    display: "block",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -210%",
        end: "bottom 320%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-2",{} , {
    y: 0,
    scale: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -210%",
        end: "bottom 320%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-3",{} , {
    y: -20,
    scale: 0.95,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -210%",
        end: "bottom 320%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-4",{} , {
    y: -40,
    scale: 0.90,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -210%",
        end: "bottom 320%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-5",{} , {
    y: -60,
    scale: 0.85,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -210%",
        end: "bottom 320%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-6",{} , {
    y: -80,
    scale: 0.8,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -210%",
        end: "bottom 320%",
        scrub: 2.5,
    }  
})

// gallery 2 slide

gsap.fromTo(".galimg-2",{} , {
    scale: 3,
    y: 1000,
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -230%",
        end: "bottom 290%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title26",{} , {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -230%",
        end: "bottom 290%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title27",{opacity: 0, display: "none"} , {
    opacity: 1,
    display: "block",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -230%",
        end: "bottom 290%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-3",{} , {
    y: 0,
    scale: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -230%",
        end: "bottom 290%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-4",{} , {
    y: -20,
    scale: 0.95,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -230%",
        end: "bottom 290%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-5",{} , {
    y: -40,
    scale: 0.90,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -230%",
        end: "bottom 290%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-6",{} , {
    y: -60,
    scale: 0.85,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -230%",
        end: "bottom 290%",
        scrub: 2.5,
    }  
})

// gallery 3 slide

gsap.fromTo(".galimg-3",{} , {
    scale: 3,
    y: 1000,
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -250%",
        end: "bottom 270%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title27",{} , {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -250%",
        end: "bottom 270%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title28",{opacity: 0, display: "none"} , {
    opacity: 1,
    display: "block",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -250%",
        end: "bottom 270%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-4",{} , {
    y: 0,
    scale: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -250%",
        end: "bottom 270%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-5",{} , {
    y: -20,
    scale: 0.95,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -250%",
        end: "bottom 270%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-6",{} , {
    y: -40,
    scale: 0.90,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -250%",
        end: "bottom 270%",
        scrub: 2.5,
    }  
})

// gallery 4 slide

gsap.fromTo(".galimg-4",{} , {
    scale: 3,
    y: 1000,
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -270%",
        end: "bottom 250%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title28",{} , {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -270%",
        end: "bottom 250%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title29",{opacity: 0, display: "none"} , {
    opacity: 1,
    display: "block",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -270%",
        end: "bottom 250%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-5",{} , {
    y: 0,
    scale: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -270%",
        end: "bottom 250%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-6",{} , {
    y: -20,
    scale: 0.95,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -270%",
        end: "bottom 250%",
        scrub: 2.5,
    }  
})

// gallery 5 slide

gsap.fromTo(".galimg-5",{} , {
    scale: 3,
    y: 1000,
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -290%",
        end: "bottom 230%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title29",{} , {
    opacity: 0,
    display: "none",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -290%",
        end: "bottom 230%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".title30",{opacity: 0, display: "none"} , {
    opacity: 1,
    display: "block",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -290%",
        end: "bottom 230%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-6",{} , {
    y: 0,
    scale: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -290%",
        end: "bottom 230%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".gallery__descr, .title30, .gallery__btn",{} , {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -310%",
        end: "bottom 210%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-6",{} , {
    x: "-50vw",
    opacity: 0.3,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -310%",
        end: "bottom 210%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".rightanim2",{x: "100vw"} , {
    x: "0vw",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -310%",
        end: "bottom 210%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".rightanim2",{} , {
    y: "-100vh",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -330%",
        end: "bottom 190%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".galimg-6",{} , {
    y: "-100vw",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -330%",
        end: "bottom 190%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".s12",{display: "none"} , {
    display: "",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -330%",
        end: "bottom 190%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".hblock1",{y: "100vh"} , {
    y: "0vh",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -330%",
        end: "bottom 190%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".hblock2",{y: "130vh"} , {
    y: "0vh",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -330%",
        end: "bottom 190%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".hblock3",{y: "160vh"} , {
    y: "0vh",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -330%",
        end: "bottom 190%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".hblock4",{y: "190vh"} , {
    y: "0vh",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -330%",
        end: "bottom 190%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".hblock5",{y: "220vh"} , {
    y: "0vh",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -330%",
        end: "bottom 190%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".downanim2",{x: 0} , {
    x: "-100vw",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -360%",
        end: "bottom 160%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".leftanim2",{x: "100vw"} , {
    x: "0vw",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -360%",
        end: "bottom 160%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".logo",{} , {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -360%",
        end: "bottom 160%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".glass30, .glass31, .glass32, .glass33, .glass34, .glass35, .glass36",{x: "100vw"} , {
    x: "0vw",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -360%",
        end: "bottom 160%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".contacts, .contacts2",{opacity: 1} , {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -380%",
        end: "bottom 155%",
        scrub: 1,
    }  
})

gsap.fromTo(".title31, .title32, .title33, .title34, .title35",{} , {
    y: "100vh",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -380%",
        end: "bottom 130%",
        scrub: 2.5,
    }  
})

gsap.fromTo(".hero__img3",{y:"-60vh"} , {
    y: "0vh",
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "body",
        start: "top -380%",
        end: "bottom 130%",
        scrub: 2.5,
    }  
})


// tablet animation
const tabletAnimation = window.matchMedia('(max-width: 1024.5px)')
if(tabletAnimation.matches) {

    gsap.fromTo(".galimg-6",{} , {
        x: "-100vw",

        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -310%",
            end: "bottom 210%",
            scrub: 2.5,
        }  
    })

    gsap.fromTo(".title-tb1",{y: 0} , {
        y: "3vh",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -5%",
            end: "bottom 520%",
            scrub: 2.5,
        }    
    })

    gsap.fromTo(".title-tb2, .title-tb3",{y: 0} , {
        y: "18vh",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -5%",
            end: "bottom 520%",
            scrub: 2.5,
        }    
    })

    gsap.fromTo(".title-tb4",{y: 0} , {
        y: "-3vh",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -5%",
            end: "bottom 520%",
            scrub: 2.5,
        }    
    })

    gsap.fromTo(".title-tb6, .title-tb9",{y: 0} , {
        y: "-3vh",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -5%",
            end: "bottom 520%",
            scrub: 2.5,
        }    
    })

    gsap.fromTo(".title-tb7, .title-tb8",{y: 0} , {
        y: "-18vh",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -5%",
            end: "bottom 520%",
            scrub: 2.5,
        }    
    })

    gsap.fromTo(".title-tb10",{opacity: 0, left: "-100vw"} , {
        opacity: 1,
        left: "0vw",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -90%",
            end: "bottom 440%",
            scrub: 2.5,
        }  
    })
    
    gsap.fromTo(".title-tb10",{} , {
        left: "-100vw",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -110%",
            end: "bottom 420%",
            scrub: 2.5,
        }  
    })

    gsap.fromTo(".title-tb13",{} , {
        x: "-100vw",
        opacity: 0,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -190%",
            end: "bottom 340%",
            scrub: 2.5,
        }  
    })

    gsap.fromTo(".title-tb14",{} , {
        y: "100vh",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -425%",
            end: "bottom 450%",
            scrub: 2.5,
        }  
    })

    gsap.fromTo(".hero__img3",{y:"-80vh"} , {
        y: "0vh",
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: "body",
            start: "top -380%",
            end: "bottom 130%",
            scrub: 2.5,
        }  
    })
}



window.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
      event.preventDefault();
      window.scrollBy({
        top: 100,
        behavior: 'smooth'
      });
    }
  });


SmoothScroll({
    animationTime    : 1000,
    stepSize         : 20,
    accelerationDelta : 0,  
    accelerationMax   : 0,   
    keyboardSupport   : true,  
    arrowScroll       : 50,
    touchpadSupport   : true,
    
})

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
}

function scrollToPercentage(percentage) {
    if (percentage >= 0 && percentage <= 100) {
        showBlackoutScreen();
        const windowHeight = window.innerHeight;
        const totalScrollableHeight = document.documentElement.scrollHeight - windowHeight;
        const scrollToPosition = (totalScrollableHeight * percentage) / 100;
        setTimeout(() => {
            window.scrollTo(0, scrollToPosition);
            setTimeout(() => {
                hideBlackoutScreen();
            }, 600);
        }, 600);
    } else {
        console.error("Значение процента должно быть в диапазоне от 0 до 100.");
    }
}

function showBlackoutScreen() {
    const blackoutScreen = document.createElement("div");
    blackoutScreen.classList.add("blackout-screen");
    document.body.appendChild(blackoutScreen);
    setTimeout(() => {
        blackoutScreen.style.opacity = "1";
    }, 0);
}

function hideBlackoutScreen() {
    const blackoutScreen = document.querySelector(".blackout-screen");
    if (blackoutScreen) {
        setTimeout(() => {
            blackoutScreen.style.opacity = "0";
            blackoutScreen.addEventListener("transitionend", () => {
                blackoutScreen.parentNode.removeChild(blackoutScreen);
            });
        }, 600);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const scrollButtons = document.querySelectorAll(".scrollButton");
    scrollButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const percentage = parseInt(button.dataset.percent);
            scrollToPercentage(percentage);
        });
    });
});

const infiniteScroll = window.matchMedia('(min-width: 576px)')
if(infiniteScroll.matches) {

    document.addEventListener("scroll", function() {
        const windowHeight = window.innerHeight;
        const totalScrollableHeight = document.documentElement.scrollHeight - windowHeight;
        const currentScrollPosition = window.scrollY;
        const currentScrollPercentage = (currentScrollPosition / totalScrollableHeight) * 100;
      
        if (currentScrollPercentage >= 100) {

          showBlackoutScreen();

          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'instant' });

            setTimeout(() => {
              hideBlackoutScreen();
            }, 500);
          }, 500);
        }
      });
}

const navLinks = document.querySelectorAll('.scrollButton');
const sections = document.querySelectorAll('section');
const targetScrollRanges = [
  { start: 28, end: 33 },
  { start: 33, end: 48 },
  { start: 48, end: 84 },
  { start: 84, end: 92 },
  { start: 92, end: 100 },
  { start: 48, end: 53 },
  { start: 75, end: 88 },
]
document.addEventListener("scroll", function() {
  const windowHeight = window.innerHeight;
  const totalScrollableHeight = document.documentElement.scrollHeight - windowHeight;
  const currentScrollPosition = window.scrollY;
  const currentScrollPercentage = (currentScrollPosition / totalScrollableHeight) * 100;

  navLinks.forEach(function(link, index) {
    const { start, end } = targetScrollRanges[index];
    const isActive = currentScrollPercentage >= start && currentScrollPercentage < end;

    if (isActive) {
      link.classList.add("link_active");
    } else {
      link.classList.remove("link_active");
    }
  });
});

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let currentWidth = window.innerWidth;

window.addEventListener('resize', function() {
  if (window.innerWidth !== currentWidth) {
    currentWidth = window.innerWidth;
    location.reload();
  }
});


let tooltipElem;

document.onmouseover = function(event) {
  let target = event.target;

  let tooltipHtml = target.dataset.tooltip;
  if (!tooltipHtml) return;

  tooltipElem = document.createElement('div');
  tooltipElem.className = 'tooltip';
  tooltipElem.innerHTML = tooltipHtml;
  document.body.append(tooltipElem);

  let coords = target.getBoundingClientRect();

  let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth);
  if (left < 0) left = 0;

  let top = coords.top - tooltipElem.offsetHeight - 15;
  if (top < 0) {
    top = coords.top + target.offsetHeight + 5;
  }

  tooltipElem.style.left = left + 'px';
  tooltipElem.style.top = top + 'px';
};

document.onmouseout = function(e) {

  if (tooltipElem) {
    tooltipElem.remove();
    tooltipElem = null;
  }

};

const galimgElements = document.querySelectorAll('.gallery__img');

const texts = ["Daria Emelyanova", "Tripura", "malyshki 18:22", "Olya Kroytor", "Takashi Kuribayashi", "Tripura"];

galimgElements.forEach((element, index) => {
  element.setAttribute('data-text', texts[index]);
});

document.getElementById('btnleft').addEventListener('click', function() {
const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
);

const scrollAmount = Math.floor(documentHeight * 0.055);

window.scrollBy(0, -scrollAmount);
});

document.getElementById('btnright').addEventListener('click', function() {
const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
);

const scrollAmount = Math.floor(documentHeight * 0.055);

window.scrollBy(0, scrollAmount);
});

if (screen.width <= 767) {
    window.location = "m.html";
  }