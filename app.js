Array.from(document.getElementsByTagName("input")).forEach((e, i) => {
  e.addEventListener("keyup", (el) => {
    if (e.value.length > 0) {
      document.getElementsByClassName("bi-caret-down-fill")[i].style.transform =
        "rotate(180deg)";
    } else {
      document.getElementsByClassName("bi-caret-down-fill")[i].style.transform =
        "rotate(0deg)";
    }
  });
});

// Get the modal element
var modal = document.getElementById("login-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Handle form submission
var loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  modal.style.display = "none";
  window.location.href = "index.html";
});

const emailInput = document.getElementById("email-input");
const subscribeBtn = document.getElementById("subscribe-btn");

subscribeBtn.addEventListener("click", () => {
  emailInput.value = "";
});
