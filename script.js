document.addEventListener("DOMContentLoaded", function () {

  // ================= MENU TOGGLE =================
  // FIXED: Changed to querySelector to correctly target your HTML class ".nav-links"
  const navLinks = document.querySelector(".nav-links");

  window.toggleMenu = function () {
    if (navLinks) {
      navLinks.classList.toggle("active");
    }
  };

  // Close mobile menu automatically when a link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      if (navLinks) navLinks.classList.remove("active");
    });
  });

  // ================= PARTICLES BACKGROUND =================
  if (typeof particlesJS !== "undefined" && document.getElementById("particles-js")) {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80 },
        color: { value: "#38bdf8" },
        shape: { type: "circle" },
        opacity: { value: 0.5 },
        size: { value: 3 },
        line_linked: {
          enable: true,
          color: "#38bdf8",
          opacity: 0.4
        },
        move: {
          enable: true,
          speed: 2
        }
      }
    });
  }

  // ================= CONTACT FORM SUBMISSION =================
  const contactForm = document.querySelector(".ui-contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const phone = contactForm.querySelector('input[type="tel"]').value;
      // Fixed extraction to safely target the second text element for the message input
      const textInputs = contactForm.querySelectorAll('input[type="text"]');
      const message = textInputs[1] ? textInputs[1].value : "";

      console.log("Form Submitted Successfully!");
      console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);

      alert(`Thank you, ${name}! Your message has been sent successfully.`);
      contactForm.reset();
    });
  }

  // ================= PROJECT CARDS ACCORDION =================
  // Cleaned up and bound directly to your dynamic click listeners safely
  document.querySelectorAll(".project-title").forEach((title) => {
    title.addEventListener("click", () => {
      const card = title.parentElement;
      if (card) {
        card.classList.toggle("active");
      }
    });
  });

  // Global helper window fallback matching your inline HTML triggers
  window.toggleProject = function (element) {
    if (element) {
      const card = element.parentElement;
      if (card) card.classList.toggle("active");
    }
  };

  // ================= UTILITY: COPY TO CLIPBOARD =================
  window.copyText = function (text) {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied: " + text);
    }).catch(err => {
      console.error("Could not copy text: ", err);
    });
  };

  // ================= TYPING ANIMATION =================
  const textArray = [
    "Full Stack Developer",
    "Java Programmer",
    "Web Developer",
    "Frontend Developer"
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingElement = document.getElementById("typing");

  function typeEffect() {
    if (!typingElement) return;

    let currentText = textArray[textIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingElement.textContent = currentText.substring(0, charIndex);

    let speed = isDeleting ? 70 : 120;

    if (!isDeleting && charIndex === currentText.length) {
      speed = 1000;
      isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
    }

    setTimeout(typeEffect, speed);
  }

  typeEffect();

  // ================= SCROLL REVEAL (FADE ANIMATION) =================
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  // ================= ACTIVE NAV LINK ON SCROLL =================
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active-link");
      const href = item.getAttribute("href");
      if (href && href.includes(current)) {
        item.classList.add("active-link");
      }
    });
  });
});

// ================= LOADER HIDE =================
// Placed globally outside DOM wrappers to guarantee it clears out even if files load slowly
window.addEventListener("load", function () {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.display = "none";
  }
});
