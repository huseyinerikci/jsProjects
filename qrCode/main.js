const qrText = document.getElementById("qr-text");
const qrImg = document.getElementById("qr-img");
const imgBox = document.querySelector(".img-box");
const qrBtn = document.getElementById("qr-btn");
const container = document.querySelector(".container");

function generatorQR() {
  if (qrText.value.length > 0) {
    qrImg.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;

    imgBox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}

qrBtn.addEventListener("click", (e) => {
  generatorQR();
});
document.addEventListener("click", (e) => {
  if (!container.contains(e.target)) {
    imgBox.classList.remove("show-img");
    qrText.value = "";
  }
});
