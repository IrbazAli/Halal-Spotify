let crntAudio = null;
let songTitle = document.querySelector(".song-title");
let timeDisplay = document.querySelector(".player_time");
let playPause = document.querySelector("#play");
let previous = document.querySelector("#previous");
let next = document.querySelector("#next");
let playing = document.querySelector("#playing");
let volumeSlider = document.querySelector("#volume");

document.addEventListener("DOMContentLoaded", () => {
    let allSongs = [arabic, bhapa, junaid, nasheed, single, waheed];
    let playlist = document.querySelector("#left-playlist");
    let playlist1 = document.querySelector("#playlist");
    let singles = document.querySelector(".Singles");
    //finds the song in every album
    if (playlist || playlist1 || singles) {
        playlist.addEventListener("click", (e) => {
            // Check if the clicked element has the class "song-info"
            if (e.target.closest(".song-info")) {
                let songElement = e.target.closest(".song-info");
                let song = songElement.querySelector("p").innerText;
                find_song(song);
            }
        })
        singles.addEventListener("click", (e) => {
            // Check if the clicked element has the class "song-info"
            if (e.target.closest(".song-card")) {
                let songElement = e.target.closest(".song-card");
                let song = songElement.querySelector("p").innerText;
                find_song(song);
            }
        })
        playlist1.addEventListener("click", (e) => {
            // Check if the clicked element has the class "song-info"
            if (e.target.closest(".song-info")) {
                let songElement = e.target.closest(".song-info");
                let song = songElement.querySelector("p").innerText;
                find_song(song);
            }
        })
    }
    function find_song(song) {
        let newSong = song;
        allSongs.forEach((e) => {
            for (let val of e) {
                if (newSong === val.songName) {
                    let songPath = val.filePath;
                    let songName = val.songName;
                    play_audio(songName, songPath);
                }
            }
        })
    }
});
function play_audio(name, path) {
    if (crntAudio) {
        crntAudio.pause();
        crntAudio.currentTime = 0
    }
    crntAudio = new Audio(path);
    crntAudio.play();
    // Add a timeupdate event listener to track current time
    crntAudio.addEventListener("timeupdate", () => {
        let currentTime = crntAudio.currentTime; // Get current playback time in seconds
        formatTime(currentTime);
        next.addEventListener("click", () => {
            if (crntAudio) {
                console.log(currentTime);
                crntAudio.currentTime = currentTime + 10;
                console.log(currentTime);
            }
        })
        previous.addEventListener("click", () => {
            if (crntAudio) {
                console.log(currentTime);
                if (currentTime - 10 > 0) {
                    crntAudio.currentTime = currentTime - 10;
                }
                console.log(currentTime);
            }
        })
    });
    update_credentials(name);
}

playPause.addEventListener("click", () => {
    let src = playPause.src;
    if (src === "http://127.0.0.1:3000/svg/pause.svg") {
        src = "http://127.0.0.1:3000/svg/play1.svg";
        playPause.src = src;
        crntAudio.pause();
    }
    else {
        src = "http://127.0.0.1:3000/svg/pause.svg";
        playPause.src = src;
        crntAudio.play();
    }
})
// Helper function to format time as MM:SS,this also sets the %value of song playing
function formatTime(seconds) {
    const minutesDuration = Math.floor(crntAudio.duration / 60);
    const remainingSecondsDuration = Math.floor(crntAudio.duration % 60);
    const minutes = Math.floor(seconds / 60);
    let remainingSeconds = Math.floor(seconds % 60);
    playing.value = (((minutes * 60) + (remainingSeconds)) * 100 / ((minutesDuration * 60) + (remainingSecondsDuration)));
    timeDisplay.innerText = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")} / ${String(minutesDuration).padStart(2, "0")}:${String(remainingSecondsDuration).padStart(2, "0")}`;
}

function update_credentials(name) {
    songTitle.innerText = name;
}

volumeSlider.addEventListener("input", () => {
    if (crntAudio) {
        crntAudio.volume = volumeSlider.value / 100; 
    }
});
//returning to home screen
let home=document.querySelector(".home-img");
home.addEventListener("click",()=>{
    let hidden=document.querySelector("#hidden");
    hidden.classList.remove("hidden");
    let hide=document.querySelector("#unhide");
    hide.classList.add("hidden");
})
