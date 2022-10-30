const password = document.getElementById("password");
const toggle = document.querySelector(".toggle");
console.log(toggle);

function showhide() {
  if (password.type === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
  toggle.classList.toggle("active");
}
