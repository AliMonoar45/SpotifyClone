console.log('welcome to js program');
//initializeing the variables
let songIndex = 0;
let audioElement = new Audio('components\\songs\\1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem')) ;



let songs = [
  {
    songName: "Salam-e-Isq", filePath: "components/songs/1.mp3",
    coverPath: "components/cover/1.jpg"
  },
  {
    songName: "1Salam-e-Isq", filePath: "components/songs/2.mp3",
    coverPath: "components/cover/2.jpg"
  },
  {
    songName: "2Salam-e-Isq", filePath: "components/songs/3.mp3",
    coverPath: "components/cover/3.jpg"
  },
  {
    songName: "3Salam-e-Isq", filePath: "components/songs/4.mp3",
    coverPath: "components/cover/4.jpg"
  },
  {
    songName: "4Salam-e-Isq", filePath: "components/songs/5.mp3",
    coverPath: "components/cover/5.jpg"
  },
  {
    songName: "5Salam-e-Isq", filePath: "components/songs/6.mp3",
    coverPath: "components/cover/6.jpg"
  },
  {
    songName: "6Salam-e-Isq", filePath: "components/songs/7.mp3",
    coverPath: "components/cover/7.jpg"
  },
  {
    songName: "7Salam-e-Isq", filePath: "components/songs/8.mp3",
    coverPath: "components/cover/8.jpg"
  },
  {
    songName: "8Salam-e-Isq", filePath: "components/songs/9.mp3",
    coverPath: "components/cover/9.jpg"
  },
  {
    songName: "9Salam-e-Isq", filePath: "components/songs/10.mp3",
    coverPath: "components/cover/10.jpg"
  }
]

songItems.forEach((elements, i)=>{
  
  
 elements.getElementsByTagName("img")[0].src = songs[i].coverPath;
 elements.getElementsByClassName("songName")[0].innerText = songs[i].songName;
 
})

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
  // update seek bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
  myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
  audioElement.currentTime = (myProgressBar.value / 100) * audioElement.duration;
})

// Function to reset all song item play icons to play
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.classList.remove('fa-circle-pause'); // Remove pause icon
    element.classList.add('fa-circle-play'); // Add play icon
  });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element, i) => {
  element.addEventListener('click', (e) => {
    // Check if the clicked song is already playing
    if (songIndex === i && !audioElement.paused) {
      // If it is playing, pause it
      audioElement.pause();
      e.target.classList.remove('fa-circle-pause'); // Remove pause icon
      e.target.classList.add('fa-circle-play'); // Add play icon
      gif.style.opacity = 0; // Hide the gif
    } else {
      // Reset all icons to play
      makeAllPlays();
      songIndex = i;

      // Change the clicked icon to pause
      e.target.classList.remove('fa-circle-play'); // Remove play icon
      e.target.classList.add('fa-circle-pause'); // Add pause icon
      audioElement.src = `components/songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove('fa-circle-play');
      masterPlay.classList.add('fa-circle-pause');
      gif.style.opacity = 1;
    }
  });
});

// Change to the next song button
document.getElementById('next').addEventListener('click', () => { 
  if (songIndex >= 9) {
      songIndex = 0;
  }
  else{
    songIndex += 1;
  }
  audioElement.src = `components/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});
// Change to the previous song button
document.getElementById('previous').addEventListener('click', () => { 
  if (songIndex <= 0) {
      songIndex = 0;
  }
  else{
    songIndex -= 1;
  }
  audioElement.src = `components/songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity = 1;
});