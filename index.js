// Declare variables
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const text = document.querySelector("#text");
const message = document.querySelector("#message");
const button = document.querySelector("#contact-submit");

// Submit listener
button.addEventListener("click", event => {
  event.preventDefault();
  validate()
})

// Email RegEx
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Function validate
const validate = () => {
  if (name.value == "") {
    alert('Name cannot be blank')
  } else if (name.value.length < 4) {
    alert('Name should be at least 4 characters')
  } else if (email.value == "") {
    alert('Enter an email address');
  } else if (!(email.value.match(mailformat))) {
    alert('Enter a valid email address');
  } else if (document.getElementById('message').value.length < 20) {
    alert('Enter a message of 20 characters or more');
  } else {
    sendMail()
    alert("Thanks! I would get back to you")
  }
}

// Function sendmail
const sendMail = () => {
  const link = "mailto:fegoworks@hotmail.com" +
    "?cc=fegoworks@hotmail.com" +
    "&subject=" + escape(text) +
    "&body=" + escape(message.value);

  window.location.href = link;
}