document.addEventListener("DOMContentLoaded", () => {
    // Booking Navigation
    const bookingNav = document.querySelector(".booking__nav");
    const bookingNavItems = bookingNav.querySelectorAll("span");
  
    bookingNavItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        bookingNavItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
      });
    });
  
    // Form Inputs
    const formGroups = document.querySelectorAll(".form__group");
  
    formGroups.forEach((group) => {
      const input = group.querySelector("input");
      const label = group.querySelector("label");
  
      input.addEventListener("focus", () => {
        label.classList.add("active");
      });
  
      input.addEventListener("blur", () => {
        if (input.value === "") {
          label.classList.remove("active");
        }
      });
    });
  
    // Scroll to sections on nav link click
    const navLinks = document.querySelectorAll(".nav__links a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Subscribe Form
    const subscribeForm = document.querySelector(".subscribe__form");
    const subscribeInput = subscribeForm.querySelector("input");
  
    subscribeForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validateEmail(subscribeInput.value)) {
        alert("Subscribed successfully!");
        subscribeInput.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  
    function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(String(email).toLowerCase());
    }
  });
  