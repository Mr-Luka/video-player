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
// to play when I click on a video or play button
video.addEventListener('click', playPause);
play.addEventListener('click', playPause);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);

