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
src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJ3sWQy9DHOT4gY0YH4Qw_6NvdeoAv_BO5wKMtraytnkSbVykLD1dwji_k-TPq9Em89c4gZhtMgrv1utGKNro4Jiza54bBZdgp5k-iBHXI3YMEuQDaqTCK0UHuFPAgeDW0QXaznouIcMrjwmsbyBbDnkID1Xp50-DAqhUBWNC_XM1C-ZU6Ywu6xKAIKUY/s1920/player.PNG"
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
width:90px;
height:90px;
background:rgba(255,255,255,0.85);
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
box-shadow:0 10px 30px rgba(0,0,0,0.6);
">

<div style="
width:0;
height:0;
border-left:28px solid black;
border-top:18px solid transparent;
border-bottom:18px solid transparent;
margin-left:6px;
"></div>

</div>

<!-- JUDUL (NAIK DI ATAS SEEKBAR) -->

<div style="
position:absolute;
left:0;
right:0;
bottom:60px;
padding:18px;
background:linear-gradient(to top,rgba(0,0,0,0.85),transparent);
color:white;
">

<h2 style="
margin:0;
font-size:22px;
line-height:1.35;
text-shadow:0 2px 6px rgba(0,0,0,0.7);
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

/* INIT */

loadHero();
loadTrending();
loadDatabase();
