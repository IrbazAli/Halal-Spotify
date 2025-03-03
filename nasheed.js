//variables
let arti=document.querySelector(".artist-pic");
let artType_N=document.querySelector(".artist-type");
let name_N=document.querySelector(".artist-title");
let populateSongs_N=document.querySelector("#playlist");
let id_N=document.querySelector("#nasheed");

let nasheed = [
    {songName: "ana tahir", filePath: "nasheed/ana tahir.m4a", coverPath: "nasheed/nasheed.jpg",duration:"03:00"},
    {songName: "Kun Anta", filePath: "nasheed/Kun Anta.m4a", coverPath: "nasheed/nasheed.jpg",duration:"03:00"},
    {songName: "Wedding Nasheed", filePath: "nasheed/Wedding Nasheed.m4a", coverPath: "nasheed/nasheed.jpg",duration:"03:00"},
]

//writing songs
function populate_N(){
nasheed.forEach((song=>{
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

    populateSongs_N.appendChild(newSong);
}))
}
//selecing image and title
function change_N(){
arti.style.backgroundImage = "url('nasheed/nasheed.jpg')";
artType_N.innerText="Nasheed";
name_N.innerText="Arabic Nasheed";
}

id_N.addEventListener("click",()=>{
    console.log("clicked");
    let hidden=document.querySelector("#hidden");
    hidden.classList.add("hidden");
    let unhide=document.querySelector("#unhide");
    unhide.classList.remove("hidden");
    populate_N();
    change_N();
})