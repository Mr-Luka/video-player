const video = document.querySelector('#video');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const progress = document.querySelector('#progress');
const timestamp = document.querySelector('#timestamp')

play.addEventListener('click', ()=> video.play());
stop.addEventListener('click', ()=> video.pause());
progress.addEventListener('input', ()=> video.currentTime = progress.value);