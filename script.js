const API = "https://www.googleapis.com/youtube/v3";

/* ELEMENT */
const hero = document.getElementById("hero-video");
const trending = document.getElementById("trending");

const shorts = document.getElementById("shorts-row");
const pastLive = document.getElementById("past-live");
const videos = document.getElementById("videos");
const populer = document.getElementById("populer");
const live = document.getElementById("live");

const logo = document.getElementById("channel-logo");
const name = document.getElementById("channel-name");
const handle = document.getElementById("channel-handle");
const subs = document.getElementById("subscriber-count");

/* CHANNEL INFO */

logo.src="https://yt3.googleusercontent.com/I0hZhWUt1nFTaHCpN_ZTko0C5yCDa_-ofvu78AK5mWNbgN9cuFKx9oNKRANomISQ34vraEXkIZQ=s160-c-k-c0x00ffffff-no-rj";

name.innerText="Aji Mangkara";
handle.innerText="@ajimangkara";
subs.innerText="";

function shuffle(arr){
return [...arr].sort(()=>0.5-Math.random());
}

/* VIDEO CARD */

function renderVideoCard(container,video){

if(!container || !video) return;

container.innerHTML+=`

<a href="https://youtube.com/watch?v=${video.id}" target="_blank" class="video-card">

<img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg">

<p class="video-title">${video.title}</p>

<p class="video-meta">${video.views} views • ${video.date}</p>

</a>

`;

}

/* SHORTS */

function renderShorts(container,data,limit=6){

if(!container || !data) return;

container.innerHTML="";

shuffle(data).slice(0,limit).forEach(v=>{

container.innerHTML+=`

<a href="https://youtube.com/shorts/${v.id}" target="_blank" class="short-card">

<div class="short-video">
<img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg">
</div>

</a>

`;

});

}

/* HERO 16:9 */

function loadHero(){

if(!hero || !HERO) return;

const v = HERO[0];

hero.innerHTML=`

<a href="https://youtube.com/watch?v=${v.id}" target="_blank"
style="
display:block;
position:relative;
width:100%;
aspect-ratio:16/9;
overflow:hidden;
border-radius:12px;
text-decoration:none;
">

<!-- THUMBNAIL -->

<img 
src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg"
style="
position:absolute;
width:100%;
height:100%;
object-fit:cover;
left:0;
top:0;
">

<!-- FAKE PLAYER OVERLAY -->

<img 
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7YBScMgQ-rqs_5HcYykbzUdlafF5HwKB45NTJRs45DUid4Bit9HSAWsI6v2lYOWskbRWqFOVi4SgxpzRNe_z_cWBHluXgerIvoDzkX4mpwUaj8SFk60yyydAf3M1LKOl_NCmAE15mHNVmPNU8tLkULxGR4WK2prXk5b6VgkojQzOQW_vUZjmCAOzYnAo/s1920/player.PNG"
style="
position:absolute;
width:100%;
height:100%;
object-fit:cover;
left:0;
top:0;
pointer-events:none;
opacity:0.95;
">

<!-- PLAY BUTTON -->

<div style="
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
width:clamp(60px, 12vw, 90px);
height:clamp(60px, 12vw, 90px);
background:rgba(255,255,255,0.85);
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
box-shadow:0 10px 30px rgba(0,0,0,0.6);
animation:pulse 1.6s infinite;
">

<div style="
width:0;
height:0;
border-left:clamp(18px, 4vw, 28px) solid black;
border-top:clamp(12px, 3vw, 18px) solid transparent;
border-bottom:clamp(12px, 3vw, 18px) solid transparent;
margin-left:4px;
"></div>

</div>

<!-- JUDUL RESPONSIVE -->

<div style="
position:absolute;
left:0;
right:0;
bottom:clamp(50px, 8vw, 70px);
padding:clamp(10px, 3vw, 18px);
background:linear-gradient(to top,rgba(0,0,0,0.85),transparent);
color:white;
">

<h2 style="
margin:0;
font-size:clamp(14px, 4vw, 22px);
line-height:1.3;
text-shadow:0 2px 6px rgba(0,0,0,0.7);
display:-webkit-box;
-webkit-line-clamp:2;
-webkit-box-orient:vertical;
overflow:hidden;
">

${v.title}

</h2>

</div>

<!-- LABEL YOUTUBE -->

<div style="
position:absolute;
right:14px;
bottom:20px;
background:rgba(0,0,0,0.75);
color:white;
padding:6px 10px;
border-radius:4px;
font-size:13px;
display:flex;
align-items:center;
gap:6px;
">

Watch on

<span style="
background:red;
padding:2px 4px;
border-radius:3px;
font-weight:bold;
font-size:11px;
">

YouTube

</span>

</div>

</a>

`;

}

/* TRENDING */

function loadTrending(){

if(!trending || !TRENDING) return;

trending.innerHTML="";

shuffle(TRENDING).slice(0,5).forEach(v=>{

trending.innerHTML+=`

<a href="https://youtube.com/watch?v=${v.id}" target="_blank" class="trend-card">

<img src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg">

<p class="video-title">${v.title}</p>

</a>

`;

});

}

/* PAST LIVE */

function loadPastLive(){

if(!pastLive || !LIVE) return;

pastLive.innerHTML="";

const sorted=[...LIVE].sort((a,b)=> new Date(b.date) - new Date(a.date));

sorted.slice(0,6).forEach(v=>{
renderVideoCard(pastLive,v);
});

}

/* VIDEOS */

function loadVideos(){

if(!videos || !VIDEO) return;

videos.innerHTML="";

const sorted=[...VIDEO].sort((a,b)=> new Date(b.date) - new Date(a.date));

sorted.slice(0,6).forEach(v=>{
renderVideoCard(videos,v);
});

}

/* VIDEO POPULER */

function loadPopuler(){

if(!populer || !VIDEO) return;

populer.innerHTML="";

const sorted=[...VIDEO].sort((a,b)=> b.views - a.views);

sorted.slice(0,6).forEach(v=>{
renderVideoCard(populer,v);
});

}

/* LIVE RANDOM */

function loadLiveRandom(){

if(!live || !LIVE) return;

live.innerHTML="";

shuffle(LIVE).slice(0,6).forEach(v=>{
renderVideoCard(live,v);
});

}

/* DATABASE LOAD */

function loadDatabase(){

renderShorts(shorts, SHORTS, 6);

loadPastLive();

loadVideos();

loadPopuler();

loadLiveRandom();

}

/* POPUP */

const popup = document.getElementById("popup");
const moreBtn = document.getElementById("more-btn");
const closePopup = document.getElementById("close-popup");

if(moreBtn){
moreBtn.onclick = () => popup.style.display = "flex";
}

if(closePopup){
closePopup.onclick = () => popup.style.display = "none";
}

document.addEventListener("keydown",(e)=>{
if(e.key==="Escape"){
popup.style.display="none";
}
});

/* SIDEBAR MENU */

const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("menu-overlay");

function openMenu(){
sidebar.classList.add("active");
overlay.classList.add("active");
}

function closeMenu(){
sidebar.classList.remove("active");
overlay.classList.remove("active");
}

menuToggle.onclick=function(){

if(sidebar.classList.contains("active")){
closeMenu();
}else{
openMenu();
}

}

overlay.onclick=function(){
closeMenu();
}

/* =========================
   JADWAL WAYANG HARI INI
========================= */

function getTodayTanggal() {
  const bulan = [
    "Januari","Februari","Maret","April","Mei","Juni",
    "Juli","Agustus","September","Oktober","November","Desember"
  ];

  const now = new Date();
  const tgl = String(now.getDate()).padStart(2, "0");
  const bln = bulan[now.getMonth()];
  const thn = now.getFullYear();

  return `${tgl} ${bln} ${thn}`;
}

function formatTanggalFull() {
  const hari = [
    "Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"
  ];

  const now = new Date();

  return `${hari[now.getDay()]}, ${getTodayTanggal()}`;
}

function loadJadwal() {

  if (!trending || typeof JADWAL_WAYANG === "undefined") return;

  const today = getTodayTanggal();

  const dataHariIni = JADWAL_WAYANG.filter(j => j.tanggal === today);

  let listHTML = "";

  if (dataHariIni.length === 0) {
    listHTML = `<p style="opacity:.7;font-size:13px;">Belum ada jadwal hari ini</p>`;
  } else {
    dataHariIni.slice(0, 6).forEach(j => {
      listHTML += `
      <div class="jadwal-item">
        <div class="dalang">${j.dalang.toUpperCase()}</div>
        <div class="lokasi">${j.lokasi.toUpperCase()}</div>
      </div>
      `;
    });
  }

  trending.innerHTML = `
  
<div class="jadwal-box">

<h3 class="jadwal-title">

<span class="jadwal-icon">
<i class="fa-solid fa-calendar-days"></i>
</span>

<span class="jadwal-text">
JADWAL WAYANG KULIT HARI INI
</span>

</h3>

<div class="jadwal-date">
${formatTanggalFull()}
</div>

<div class="jadwal-list">
${listHTML}
</div>

    <a href="jadwal/jadwal-wayang-april-2026.html" class="jadwal-btn">
      LIHAT JADWAL TANGGAL LAIN →
    </a>

    <div class="jadwal-note">
      <p> ⚠️ PERHATIAN 📢 </p>
      <p>JADWAL BISA BERUBAH - UBAH SEWAKTU WAKTU</p>
      <p>JADWAL DIAMBIL DARI BERBAGAI SUMBER, MOHON MAAF BILA SALAH TULIS</p>
      <p>SUMBER JADWAL DAN TERIMA KASIH KEPADA :</p>
      <p>KLUBAN.NET, GRUP WMC (WAYANG MANIA COMUNITY ), INFO HIBURAN PLAT AE, DLL</p>
    </div>

  </div>
  
  `;
}

/* =============================
   MOBILE INLINE ADS
============================= */

window.addEventListener("load", function(){

if(window.innerWidth > 900) return;

/* shuffle iklan */

const shuffledAds = [...ADS_SIDEBAR].sort(()=>0.5 - Math.random());

let adsIndex = 0;

/* daftar section video */

const sections = [
document.getElementById("shorts-row"),
document.getElementById("past-live"),
document.getElementById("videos"),
document.getElementById("populer"),
document.getElementById("live")
];

sections.forEach(section=>{

if(!section) return;

const videos = section.children;

if(videos.length < 6) return;

/* ambil 2 iklan berbeda */

const adsToShow = shuffledAds.slice(adsIndex, adsIndex+2);

adsIndex += 2;

/* jika iklan habis mulai lagi dari awal */

if(adsIndex >= shuffledAds.length){
adsIndex = 0;
}

const adsBlock = document.createElement("div");
adsBlock.className = "mobile-inline-ads";

let adsHTML = "";

adsToShow.forEach(ad=>{

adsHTML += `
<a href="${ad.link}" target="_blank" class="ads-item">
<img src="${ad.img}" loading="lazy">
${ad.title ? `<div class="ads-overlay">${ad.title}</div>` : ""}
</a>
`;

});

adsBlock.innerHTML = adsHTML;

section.after(adsBlock);

});

});


/* INIT */

loadHero();
loadJadwal(); // 🔥 GANTI TRENDING
loadDatabase();
