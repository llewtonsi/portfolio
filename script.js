const musicButton = document.getElementById('music-button');
const musicDescription = document.getElementById('music-desc');
const music = new Audio('sound/lofi_music.mp3');
music.loop = true;

musicButton.addEventListener('click', async () => {
    if (music.paused) {
        try {
            await music.play();
            musicDescription.textContent = 'Pause the music';
            musicButton.setAttribute('aria-label', 'Pause background music');
        } catch {
            musicDescription.textContent = 'Music could not be played';
        }
    } else {
        music.pause();
        musicDescription.textContent = 'Play some lo-fi';
        musicButton.setAttribute('aria-label', 'Play background music');
    }
});

document.getElementById('year').textContent = new Date().getFullYear();
