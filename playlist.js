//variables
let songs= document.querySelector("#left-playlist");

let playList = [
    { songName: "ana tahir", filePath: "nasheed/ana tahir.m4a", coverPath: "nasheed/nasheed.jpg", duration: "03:00" },
    { songName: "Qasida Burda Shareef", filePath: "arabic/Qasida Burda Shareef.m4a", coverPath: "arabic/Arabic_Naat.webp", duration: "03:00" },
    { songName: "Taiba Ko Chalo", filePath: "bhapa/Taiba Ko Chalo.mp3", coverPath: "bhapa/bhappa jani.jpeg", duration: "03:00" },
    { songName: "mera dil badal de", filePath: "junaid/mera dil badal de.mp3", coverPath: "junaid/junaid-jamshed.jpg", duration: "03:00" },
    { songName: "faslon ko takaluf", filePath: "waheed/faslon ko takaluf.mp3", coverPath: "waheed/waheed-zafar.jpg", duration: "03:00" },
]

//writing songs
function populate() {
    playList.forEach((song => {
        let newSong = document.createElement("li");
        newSong.classList.add("song-info");

        //append img
        let img = document.createElement("img");
        img.src = song.coverPath;
        img.alt = "song-cover";
        newSong.appendChild(img);
        //append title
        let title = document.createElement("p");
        title.innerText = song.songName;
        newSong.appendChild(title);
        //append duration
        let time = document.createElement("p");
        time.innerText = song.duration;
        newSong.appendChild(time);

        songs.appendChild(newSong);
    }))
}
populate();