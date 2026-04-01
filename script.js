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

/* CHANNEL INFO MANUAL */

if(logo){
logo.src="https://yt3.googleusercontent.com/I0hZhWUt1nFTaHCpN_ZTko0C5yCDa_-ofvu78AK5mWNbgN9cuFKx9oNKRANomISQ34vraEXkIZQ=s160-c-k-c0x00ffffff-no-rj";
}

if(name){
name.innerText="Aji Mangkara";
}

if(handle){
handle.innerText="@ajimangkara";
}

if(subs){
subs.innerText="";
}

function shuffle(arr){
return [...arr].sort(()=>0.5-Math.random());
}

/* SIMPLE VIDEO CARD */

function renderVideoCard(container,video){

container.innerHTML+=`
<a href="https://youtube.com/watch?v=${video.id}" target="_blank" class="video-card">

<img src="${video.thumb}">

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
<img src="${v.thumb}">
</div>

</a>
`;

});

}

/* HERO */

function loadHero(){

if(!hero || typeof HERO==="undefined") return;

const v = HERO[0];

hero.innerHTML=`
<a href="https://youtube.com/watch?v=${v.id}" target="_blank">

<img src="${v.thumb}">

<div class="hero-title">${v.title}</div>

</a>
`;

}

/* TRENDING RANDOM */

function loadTrending(){

if(!trending || typeof TRENDING==="undefined") return;

trending.innerHTML="";

shuffle(TRENDING).slice(0,5).forEach(v=>{

trending.innerHTML+=`

<a href="https://youtube.com/watch?v=${v.id}" target="_blank" class="trend-card">

<img src="${v.thumb}">

<p class="video-title">${v.title}</p>

</a>

`;

});

}

/* PAST LIVE (TERBARU) */

function loadPastLive(){

if(!pastLive || typeof LIVE==="undefined") return;

pastLive.innerHTML="";

const sorted=[...LIVE].sort((a,b)=> new Date(b.date) - new Date(a.date));

sorted.slice(0,6).forEach(v=>{
renderVideoCard(pastLive,v);
});

}

/* VIDEOS TERBARU */

function loadVideos(){

if(!videos || typeof VIDEOS==="undefined") return;

videos.innerHTML="";

const sorted=[...VIDEOS].sort((a,b)=> new Date(b.date) - new Date(a.date));

sorted.slice(0,6).forEach(v=>{
renderVideoCard(videos,v);
});

}

/* VIDEO POPULER */

function loadPopuler(){

if(!populer || typeof VIDEOS==="undefined") return;

populer.innerHTML="";

const sorted=[...VIDEOS].sort((a,b)=> b.views - a.views);

sorted.slice(0,6).forEach(v=>{
renderVideoCard(populer,v);
});

}

/* LIVE RANDOM */

function loadLiveRandom(){

if(!live || typeof LIVE==="undefined") return;

live.innerHTML="";

shuffle(LIVE).slice(0,6).forEach(v=>{
renderVideoCard(live,v);
});

}

/* DATABASE CONTENT */

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
if(e.key==="Escape" && popup){
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

if(menuToggle){

menuToggle.onclick = function(){

if(sidebar.classList.contains("active")){
closeMenu();
}else{
openMenu();
}

}

}

if(overlay){
overlay.onclick = function(){
closeMenu();
}
}

/* INIT */

loadHero();
loadTrending();
loadDatabase();
