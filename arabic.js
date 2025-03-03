//variables
let artisti=document.querySelector(".artist-pic");
let art_A=document.querySelector(".artist-type");
let A_name=document.querySelector(".artist-title");
let populateSongs_A=document.querySelector("#playlist")
let id_A=document.querySelector("#Arabic_Naat");

let arabic = [
    {songName: "mustafa", filePath: "arabic/mustafa.m4a", coverPath: "arabic/Arabic_Naat.webp",duration:"03:00"},
    {songName: "Qasida Burda Shareef", filePath: "arabic/Qasida Burda Shareef.m4a", coverPath: "arabic/Arabic_Naat.webp",duration:"03:00"},
    {songName: "rehman ya rehman", filePath: "arabic/rehman ya rehman.m4a", coverPath: "arabic/Arabic_Naat.webp",duration:"03:00"},
]

//writing songs
function populate_A(){
arabic.forEach((song=>{
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
 
    populateSongs_A.appendChild(newSong);
}))
}

//selecing image and title
function change_A(){
artisti.style.backgroundImage = "url('arabic/Arabic_Naat.webp')";
art_A.innerText="Naats";
A_name.innerText="Arabic Naats";
}

id_A.addEventListener("click",()=>{
    console.log("clicked");
    let hidden=document.querySelector("#hidden");
    hidden.classList.add("hidden");
    let unhide=document.querySelector("#unhide");
    unhide.classList.remove("hidden");
    populate_A();
    change_A();
})