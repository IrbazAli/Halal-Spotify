//variables
let artis=document.querySelector(".artist-pic");
let artType_J=document.querySelector(".artist-type");
let name_J=document.querySelector(".artist-title");
let populateSongs_J=document.querySelector("#playlist")
let id_J=document.querySelector("#junaid-jamshed");

let junaid = [
    {songName: "Ae rasool e ameen", filePath: "junaid/Ae rasool e ameen.mp3", coverPath: "junaid/junaid-jamshed.jpg",duration:"03:00"},
    {songName: "Ilahi Teri Chaukhat Per", filePath: "junaid/Ilahi Teri Chaukhat Per.mp3", coverPath: "junaid/junaid-jamshed.jpg",duration:"03:00"},
    {songName: "Main To Ummati Hoon", filePath: "junaid/Main To Ummati Hoon.mp3", coverPath: "junaid/junaid-jamshed.jpg",duration:"03:00"},
    {songName: "mera dil badal de", filePath: "junaid/mera dil badal de.mp3", coverPath: "junaid/junaid-jamshed.jpg",duration:"03:00"},
    {songName: "Meray Nabi Pyare Nabi", filePath: "junaid/Meray Nabi Pyare Nabi.mp3", coverPath: "junaid/junaid-jamshed.jpg",duration:"03:00"},
]

//writing songs
function populate_J(){
junaid.forEach((song=>{
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

    populateSongs_J.appendChild(newSong);
}))
}

//selecing image and title
function change_J(){
artis.style.backgroundImage = "url('junaid/junaid-jamshed.jpg')";
artType_J.innerText="Naats";
name_J.innerText="Junaid Jamshed";
}

id_J.addEventListener("click",()=>{
    let hidden=document.querySelector("#hidden");
    hidden.classList.add("hidden");
    let unhide=document.querySelector("#unhide");
    unhide.classList.remove("hidden");
    populate_J();
    change_J();
})