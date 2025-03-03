//variables
let art=document.querySelector(".artist-pic");
let artType_W=document.querySelector(".artist-type");
let name_W=document.querySelector(".artist-title");
let populateSongs_W=document.querySelector("#playlist")
let id_W=document.querySelector("#waheed-zafar");

let waheed = [
    {songName: "Allah Ho Allah Ho", filePath: "waheed/Allah Ho Allah Ho.mp3", coverPath: "waheed/waheed-zafar.jpg",duration:"03:00"},
    {songName: "faslon ko takaluf", filePath: "waheed/faslon ko takaluf.mp3", coverPath: "waheed/waheed-zafar.jpg",duration:"03:00"},
    {songName: "Lab Per Naat Pak Ka Naghma", filePath: "waheed/Lab Per Naat Pak Ka Naghma.mp3", coverPath: "waheed/waheed-zafar.jpg",duration:"03:00"},
    {songName: "Zahe Muqaddar Huzoor e Haq Se", filePath: "waheed/Zahe Muqaddar Huzoor e Haq Se.mp3", coverPath: "waheed/waheed-zafar.jpg",duration:"03:00"},
]

//writing songs
function populate_W(){
waheed.forEach((song=>{
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
    
    populateSongs_W.appendChild(newSong);
}))
console.log(populateSongs_W);//
}
//selecing image and title
function change_W(){
art.style.backgroundImage = "url('waheed/waheed-zafar.jpg')";
artType_W.innerText="Naats";
name_W.innerText="Waheed Zafar";
}

id_W.addEventListener("click",()=>{
    let hidden=document.querySelector("#hidden");
    hidden.classList.add("hidden");
    let unhide=document.querySelector("#unhide");
    unhide.classList.remove("hidden");
    populate_W();
    change_W();
})