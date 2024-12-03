// Creamos las instancias de audio con el objeto Audio
const cowAudio = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_d4bdc04b80.mp3');
const dogAudio = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_2a0a51193f.mp3');
const catAudio = new Audio('https://cdn.pixabay.com/audio/2022/03/15/audio_639f3fb4fe.mp3');
const chickenAudio = new Audio('https://cdn.pixabay.com/audio/2023/10/14/audio_47c67083c2.mp3');
const beeAudio = new Audio('https://cdn.pixabay.com/audio/2024/06/27/audio_19c01bd847.mp3');
const sheepAudio = new Audio('https://cdn.pixabay.com/audio/2022/10/09/audio_78a133db61.mp3');
const backgroundAudio = new Audio('https://cdn.pixabay.com/audio/2024/10/03/audio_da0b1a096f.mp3');

// Seleccionamos los botones creados en HTML
const cowBtn = document.querySelector('#cow-btn');
const dogBtn = document.querySelector('#dog-btn');
const catBtn = document.querySelector('#cat-btn');
const chickenBtn = document.querySelector('#chicken-btn');
const beeBtn = document.querySelector('#bee-btn');
const sheepBtn = document.querySelector('#sheep-btn');
const playBtn = document.querySelector('#play-btn');
const pauseBtn = document.querySelector('#pause-btn');
const stopBtn = document.querySelector('#stop-btn');

// Hacemos que el audio de fondo suene
playBtn.addEventListener('click', () => {
    backgroundAudio.volume = 0.25;
    backgroundAudio.play();
})

pauseBtn.addEventListener('click', () => {
    backgroundAudio.pause();
})

stopBtn.addEventListener('click', () => {
    backgroundAudio.pause();
    backgroundAudio.currentTime = 0;
})

// Hacemos que al hacer clic en el boton suene el audio correpsondiente
cowBtn.addEventListener('click', () => {
    cowAudio.play();
});

dogBtn.addEventListener('click', () => {
    dogAudio.play();
});

catBtn.addEventListener('click', () => {
    catAudio.play();
});

chickenBtn.addEventListener('click', () => {
    chickenAudio.play();
});

beeBtn.addEventListener('click', () => {
    beeAudio.play();
});

sheepBtn.addEventListener('click', () => {
    sheepAudio.play();
});
