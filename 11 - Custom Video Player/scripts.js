// Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.fullscreen')

// Define functions
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function openFullscreen() {
  video.requestFullscreen()
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function updateScreenButton() {
  console.log("Change Fullscreen Button NOW")
}

function skipPlay() {
  // console.log("Skipping!", this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  console.log(this.value, this.name);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) *
   100;
   progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log("scrub");
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

// Connect to event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

fullscreen.addEventListener('click', openFullscreen);

skipButtons.forEach(button => button.addEventListener('click', skipPlay));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

