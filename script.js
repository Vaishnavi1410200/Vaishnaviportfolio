document.addEventListener("DOMContentLoaded", function () {

  // ================= MENU TOGGLE =================
  const navLinks = document.getElementById("navLinks");

  window.toggleMenu = function () {
    navLinks.classList.toggle("active");
  };

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

// ================= NEW CONTACT FORM SUBMISSION =================
  const contactForm = document.querySelector(".ui-contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // Prevents the browser from reloading the page on submit
      event.preventDefault();

      // Grabbing the values from the form inputs
      const name = contactForm.querySelector('input[type="text"]').value;
      const email = contactForm.querySelector('input[type="email"]').value;
      const phone = contactForm.querySelector('input[type="tel"]').value;
      // Selecting the second text input which is used as the message field
      const message = contactForm.querySelectorAll('input[type="text"]')[1].value;

      // Log data to console for testing/debugging
      console.log("Form Submitted Successfully!");
      console.log(`Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`);

      // Optional: Trigger a clean success alert
      alert(`Thank you, ${name}! Your message has been sent successfully.`);

      // Resets the input fields back to empty
      contactForm.reset();
    });
  }

function toggleProject(element) {
  const card = element.parentElement;
  card.classList.toggle("active");
}

window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
});


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

  // ================= SCROLL REVEAL =================
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

  function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copied: " + text);
}
  sections.forEach((section) => {
    section.classList.add("hidden");
    observer.observe(section);
  });

  function toggleProject(element) {
  const card = element.parentElement;

  card.classList.toggle("active");
}
function toggleProject(element) {
  const card = element.parentElement;
  card.classList.toggle("active");
}
document.querySelectorAll(".project-title").forEach((title) => {
  title.addEventListener("click", () => {
    const card = title.parentElement;
    card.classList.toggle("active");
  });
});

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copied: " + text);
}

  // ================= ACTIVE NAV LINK ON SCROLL =================
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;

      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("active-link");

      if (item.getAttribute("href").includes(current)) {
        item.classList.add("active-link");
      }
    });
  });

});