Reveal.addEventListener('ready', event => asyncAsciinemaPlay(event));

async function asyncAsciinemaPlay(event) {
    var casts = document.getElementsByClassName("asciicast");
    casts.forEach((item, index) => {
        AsciinemaPlayer.create(item.dataset.cast, item, {
            terminalFontSize: "30px",
            autoPlay: item.dataset.autoplay || false,
            theme: "monokai",
            fit: false,
            rows: item.dataset.rows || 10,
            speed: item.dataset.speed || 1,
        });
    })
}
