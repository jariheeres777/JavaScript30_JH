const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');



function togglePlay() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚'
    toggle.textContent = icon
}

function skipVideo(e) {
    video.currentTime += parseFloat(this.dataset.skip)
}

function rangeSlider() {
    video[this.name] = this.value
}

function videoTimestamp(){
const timeOff = (video.currentTime / video.duration)*100
progressBar.style.flexBasis = `${timeOff}%`
}

function changeVideoTime(e){
    const timeProcent = (e.offsetX / progress.offsetWidth)*video.duration 
    video.currentTime = timeProcent
}

video.addEventListener(`click`, togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener(`timeupdate`, videoTimestamp)

toggle.addEventListener(`click`, togglePlay)

skipButtons.forEach(e => e.addEventListener(`click`, skipVideo))

ranges.forEach(e => e.addEventListener('change', rangeSlider))
ranges.forEach(e => e.addEventListener('mousemove', rangeSlider))

progress.addEventListener('click',changeVideoTime)