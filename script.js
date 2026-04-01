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

/* HERO 16:9 AUTO CROP */

function loadHero(){

if(!hero || !HERO) return;

const v = HERO[0];

hero.innerHTML=`

<div style="
position:relative;
width:100%;
aspect-ratio:16/9;
overflow:hidden;
border-radius:12px;
">

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

<a href="https://youtube.com/watch?v=${v.id}"
target="_blank"
style="
position:absolute;
top:14px;
right:14px;
background:rgba(0,0,0,0.65);
color:white;
padding:8px 12px;
border-radius:6px;
font-size:13px;
text-decoration:none;
backdrop-filter:blur(3px);
">

Watch on YouTube

</a>

<div style="
position:absolute;
left:0;
right:0;
bottom:0;
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

</div>

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
