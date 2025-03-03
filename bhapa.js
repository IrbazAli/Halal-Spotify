//variables
let artist=document.querySelector(".artist-pic");
let artType_B=document.querySelector(".artist-type");
let name_B=document.querySelector(".artist-title");
let populateSongs_B=document.querySelector("#playlist")
let id_B=document.querySelector("#bhapa");

let bhapa = [
    {songName: "bapa jani", filePath: "bhapa/bapa jani.mp3", coverPath: "bhapa/bhappa jani.jpeg",duration:"03:00"},
    {songName: "Karachi Da Attar Bara Sohnra", filePath: "bhapa/Karachi Da Attar Bara Sohnra.mp3", coverPath: "bhapa/bhappa jani.jpeg",duration:"03:00"},
    {songName: "Maslak Ka Tu Imam Hai", filePath: "bhapa/Maslak Ka Tu Imam Hai.mp3", coverPath: "bhapa/bhappa jani.jpeg",duration:"03:00"},
    {songName: "Mera Peer", filePath: "bhapa/Mera Peer.mp3", coverPath: "bhapa/bhappa jani.jpeg",duration:"03:00"},
    {songName: "Taiba Ko Chalo", filePath: "bhapa/Taiba Ko Chalo.mp3", coverPath: "bhapa/bhappa jani.jpeg",duration:"03:00"},
]
//writing songs
function populate_B(){
bhapa.forEach((song=>{
    let newSong=document.createElement("li");
    newSong.classList.add("song-info");
    
    //append img
    let img = document.createElement("img");
    img.src = song.coverPath;
    img.alt = "song-cover";
    newSong.appendChild(img);
    //append title
    let title=document.createElement("p");
    title.innerText=song.songName;
    newSong.appendChild(title);
    //append duration
    let time=document.createElement("p");
    time.innerText=song.duration;
    newSong.appendChild(time);

    populateSongs_B.appendChild(newSong);
}))
}

//selecing image and title
function change_B(){
artist.style.backgroundImage = "url('bhapa/bhappa jani.jpeg')";
name_B.innerText="Bhapa Jani";
artType_B.innerText="Murshad-e-Azam";
}

id_B.addEventListener("click",()=>{
    let hidden=document.querySelector("#hidden");
    hidden.classList.add("hidden");
    let unhide=document.querySelector("#unhide");
    unhide.classList.remove("hidden");
    populate_B();
    change_B();
})