//variables
let singleSong=document.querySelector(".Singles");

let single = [
    {songName: "Maula_Ya_Salli", filePath: "single/Maula_Ya_Salli_Wa_Sallim.m4a", coverPath: "single/1.jpeg"},
    {songName: "Allah_Hu_Allah", filePath: "single/Allah_Hu_Allah.m4a", coverPath: "single/2.jpg"},
    {songName: "Ayisha_Basith", filePath: "single/Ayisha_Abdul_Basith.m4a", coverPath: "single/3.jpg"},
    {songName: "Balaghal_Ula", filePath: "single/Balaghal_Ula_Be_Kamalihi.mp3", coverPath: "single/4.jpg"},
    {songName: "Qurban_Zamana", filePath: "single/Ek_Main_Hi_Nahi_Un_Par_Qurban_Zamana.mp3", coverPath: "single/6.jpeg"},
    {songName: "Hum_ne_Ankhon_se", filePath: "single/Hum_ne_Ankhon_se_dekha_nhi_hai.m4a", coverPath: "single/7.jpeg"},
    {songName: "Jaga_Ji_Lagane_Ki", filePath: "single/Jaga_Ji_Lagane_Ki_Dunya_Nahi_Hai.m4a", coverPath: "single/1.jpeg"},
    {songName: "Kabe_Ki_Ronak", filePath: "single/Kabe_Ki_Ronak.m4a", coverPath: "single/2.jpg"},
    {songName: "Khudi_Ka_Sir", filePath: "single/Khudi_Ka_Sir_re_Nyha_La_ilaha_illa_allah.m4a", coverPath: "single/3.jpg"},
    {songName: "Wo_Mera_Nabi", filePath: "single/Wo_Mera_Nabi_Hai.m4a", coverPath: "single/4.jpg"},
    {songName: "Meri_Baat_Ban", filePath: "single/Meri_Baat_Ban_Gayi_Ha.m4a", coverPath: "single/6.jpeg"},
    {songName: "MUSTAFA_JAAN_E", filePath: "single/MUSTAFA_JAAN_E_REHMAT.m4a", coverPath: "single/7.jpeg"},
    {songName: "Na_Tera_Khuda", filePath: "single/Na_Tera_Khuda_Koi_Aur_Hai.m4a", coverPath: "single/1.jpeg"},
    {songName: "Meri_Ulfat", filePath: "single/Meri_Ulfat_Madine_Se_Youn_He_Nhi.mp3", coverPath: "single/2.jpg"},
]
//to load each object
single.forEach(song => {
    let newElement=document.createElement('li');
    newElement.classList.add("song-card");

    let img=document.createElement("img");
    img.src=song.coverPath;
    // img.classList.add("rounded");
    newElement.appendChild(img);

    let para=document.createElement("p");
    para.innerText=song.songName;
    para.classList.add("artist-name");
    newElement.appendChild(para);

    let p=document.createElement("p");
    p.innerText="Unknown";
    p.classList.add("art-type");
    newElement.appendChild(p);

    let greenBtnCon=document.createElement("div");
    greenBtnCon.classList.add("green-btn-container");
    let greenBtn=document.createElement("div");
    greenBtn.classList.add("green-btn");
    let image=document.createElement("img");
    image.src="svg/play.svg";
    greenBtn.appendChild(image);
    greenBtnCon.appendChild(greenBtn);
    newElement.appendChild(greenBtnCon);

    singleSong.appendChild(newElement);
});