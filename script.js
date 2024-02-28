function playVideo() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('video-container').style.display = 'flex';
    document.getElementById('video').playbackRate= 1.5;
    document.getElementById('video').play();

}

function showWebpageButton() {
    document.getElementById('webpage-link').style.display = 'block';
}

function openWebpage() {
    window.location.href = 'thankyou.html';
}