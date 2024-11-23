console.log('welcome to js program');
//initializeing the variables
let songIndex = 0;
let audioElement = new Audio('components\\songs\\2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs = [
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "Salam-e-Isq", filePath: "components/song/1.mp3",
    coverPath: "components/cover/1.jpg"
  }
]

//audioElement.play();

// handle play/pause click

masterPlay.addEventListener('click', () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    // audioElement.volume = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
  }
  else {
    audioElement.pause();
    masterPlay.classList.add('fa-play-circle');
    masterPlay.classList.remove('fa-pause-circle');
    gif.style.opacity = 0;
  }

});


// listen to events
audioElement.addEventListener('timeupdate', () => {
  console.log('timeupdate');

})