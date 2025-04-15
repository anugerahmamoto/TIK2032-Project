// Vanilla Tilt untuk efek 3D hover pada item gallery dan project
VanillaTilt.init(document.querySelectorAll(".service-item, .project-item"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
  });
  
  // Scroll reveal sederhana
  const revealElements = document.querySelectorAll(".service-item, .project-item, .about-img, .col-right");
  
  function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;
  
    revealElements.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
  
      if (boxTop < triggerBottom) {
        el.classList.add("show");
      } else {
        el.classList.remove("show");
      }
    });
  }
  
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // initial check
  
  // Animated text di hero section
  const heroTexts = document.querySelectorAll("#hero h1 span");
  const words = [ "Kenalan Yuk!", "👨‍💻"];
  let idx = 0;
  
  setInterval(() => {
    heroTexts.forEach(span => {
      span.textContent = words[idx];
    });
    idx = (idx + 1) % words.length;
  }, 2000);
  