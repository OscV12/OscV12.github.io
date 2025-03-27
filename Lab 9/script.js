document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (email && message) {
      alert("Thank you for your message! I will get back to you soon.");
      contactForm.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
});
