const toastBox = document.getElementById("toast-Box");

let success = '<i class="fa-solid fa-circle-check"></i>  successfully submitted';
let error   = '<i class="fa-solid fa-circle-xmark"></i> please fix the error';
let invalid = '<i class="fa-solid fa-circle-exclamation"></i> invalid input check again';

function showToast(message) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = message;
  toastBox.appendChild(toast);

  if (message.includes("error")) {
    toast.classList.add("error");
  }

  if (message.includes("invalid")) {
    toast.classList.add("invalid");
  }

  setTimeout(() => {
    toast.remove();
  }, 5000);
}
