const music_button = document.getElementById('music-button');
const music = new Audio('sound/lofi_music.mp3');

music_button.addEventListener("click", () => {
    music.play();
})