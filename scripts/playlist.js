let songIndex = 0;

const audio = document.querySelector('.audio');
const song = document.querySelector('.song');
const imgSrc = document.querySelector('.imgSrc');
const playlist = document.querySelector('.playlist');
const prevBtn = document.querySelector('.prevBtn');
const playBtn = document.querySelector('.playBtn');
const nextBtn = document.querySelector('.nextBtn');

const songs = ['ДДТ - Что такое осень', 'Ария - Беспечный ангел', 'КИНО - Место для шага вперёд'];

function init() {
  song.innerHTML = songs[songIndex];
  audio.src = `../audio/${songs[songIndex]}.mp3`;
}

function playAudio() {
  playlist.classList.add('active');
  audio.play();
}

function pauseAudio() {
  playlist.classList.remove('active');
  audio.pause();
}

function prevAudio() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  init();
  nextPrevPlay();
}

function nextPrevPlay() {
  const isPlaying = playlist.classList.contains('active');
  if (isPlaying) {
    playAudio();
  }
}

function nextAudio() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  init();
  nextPrevPlay();
}

playBtn.addEventListener('click', () => {
  const isPlaying = playlist.classList.contains('active');
  if (isPlaying) {
    pauseAudio();
    imgSrc.src = '../images/icons/play.png';
  } else {
    playAudio();
    imgSrc.src = '../images/icons/pause.png';
  }
});

prevBtn.addEventListener('click', () => {
  prevAudio();
});

nextBtn.addEventListener('click', () => {
  nextAudio();
});
