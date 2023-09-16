const progress = document.getElementById("progress");
const song = document.getElementById("song");
const handleIcn = document.getElementById("Icon");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

function playPause() {
  if (handleIcn.classList.contains("fa-pause")) {
    song.pause();
    handleIcn.classList.remove("fa-pause");
    handleIcn.classList.add("fa-play");
  } else {
    song.play();
    handleIcn.classList.remove("fa-play");
    handleIcn.classList.add("fa-pause");
  }
}

if (song.play) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  handleIcn.classList.remove("fa-pause");
  handleIcn.classList.add("fa-play");
};
