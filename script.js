const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp')


function playPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function updateIcon() {
    if (video.paused) {
        play.innerHTML = `<i class="fa fa-play fa-2x"></i>`;
    } else {
        play.innerHTML = `<i class="fa fa-pause fa-2x"></i>`
    }
}

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

function updateProgress () {
    progress.value = (video.currentTime / video.duration) * 100;

    // Get minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10){
        minutes = '0' + String(minutes);
    }

    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }
    timestamp.innerHTML = `${minutes}:${seconds}`
}
// to play when I click on a video or play button
video.addEventListener('click', playPause);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
video.addEventListener('timeupdate', updateProgress)

play.addEventListener('click', playPause);
stop.addEventListener('click', stopVideo);

