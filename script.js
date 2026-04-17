
let slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');
  index = (index + 1) % slides.length;
}, 3000);

function sendToWhatsApp() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let phone = "923161550026";

  let text =
`Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(text), "_blank");
}



