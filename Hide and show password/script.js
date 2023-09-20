const icon = document.getElementById("icon");
const password = document.getElementById("password");

icon.onclick = function showPassword() {
  if (password.type == "password") {
    password.type = "text";
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
  } else {
    password.type = "password";
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");
  }
};
