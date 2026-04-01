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

/* CHANNEL INFO MANUAL */

logo.src="https://yt3.googleusercontent.com/I0hZhWUt1nFTaHCpN_ZTko0C5yCDa_-ofvu78AK5mWNbgN9cuFKx9oNKRANomISQ34vraEXkIZQ=s160-c-k-c0x00ffffff-no-rj";

name.innerText="Aji Mangkara";

handle.innerText="@ajimangkara";

subs.innerText="";


function shuffle(arr){
return [...arr].sort(()=>0.5-Math.random());
}


/* SIMPLE VIDEO RENDER (NO API) */

function renderSimpleVideos(container,ids,limit=6){

if(!container || !ids) return;

container.innerHTML="";

shuffle(ids).slice(0,limit).forEach(id=>{

container.innerHTML+=`
<a href="https://youtube.com/watch?v=${id}" target="_blank" class="video-card">

<img src="https://i.ytimg.com/vi/${id}/mqdefault.jpg">

<p class="video-title">YouTube Video</p>

</a>
`;

});

}


/* SHORTS RENDER */

function renderShorts(container,ids,limit=6){

if(!container || !ids) return;

container.innerHTML="";

shuffle(ids).slice(0,limit).forEach(id=>{

container.innerHTML+=`
<a href="https://youtube.com/shorts/${id}" target="_blank" class="short-card">

<div class="short-video">
<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg">
</div>

</a>
`;

});

}


/* HERO */

async function loadHero(){

try{

const url=`${API}/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=1&key=${API_KEY}`;

const res=await fetch(url);
const data=await res.json();

const id=data.items[0].id.videoId;

hero.innerHTML=`
<iframe
src="https://www.youtube.com/embed/${id}"
frameborder="0"
allowfullscreen>
</iframe>
`;

}catch(e){

const id = DATA.hero?.[0] || DATA.videos?.[0];

hero.innerHTML=`
<iframe
src="https://www.youtube.com/embed/${id}"
frameborder="0"
allowfullscreen>
</iframe>
`;

}

}


/* TRENDING */

async function loadTrending(){

if(!trending) return;

trending.innerHTML="";

try{

const url=`${API}/search?part=snippet,id&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=5&key=${API_KEY}`;

const res=await fetch(url);
const data=await res.json();

data.items.forEach(v=>{

const id=v.id.videoId;
const title=v.snippet.title;
const thumb=v.snippet.thumbnails.medium.url;

trending.innerHTML+=`

<a href="https://youtube.com/watch?v=${id}" target="_blank" class="trend-card">

<img src="${thumb}">

<p class="video-title">${title}</p>

</a>

`;

});

}catch(e){

const fallback = shuffle(DATA.trending || DATA.videos).slice(0,5);

fallback.forEach(id=>{

trending.innerHTML+=`

<a href="https://youtube.com/watch?v=${id}" target="_blank" class="trend-card">

<img src="https://i.ytimg.com/vi/${id}/mqdefault.jpg">

<p class="video-title">YouTube Video</p>

</a>

`;

});

}

}


/* DATABASE CONTENT */

function loadDatabase(){

renderShorts(shorts, DATA.shorts || DATA.videos, 6);

renderSimpleVideos(videos, DATA.videos, 6);

renderSimpleVideos(populer, DATA.populer || DATA.videos, 6);

renderSimpleVideos(live, DATA.live || DATA.videos, 6);

/* Past Live sengaja dikosongkan jika API gagal */

if(pastLive){
pastLive.innerHTML="";
}

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

/* ================= SIDEBAR MENU ================= */

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

menuToggle.onclick = function(){

if(sidebar.classList.contains("active")){
closeMenu();
}else{
openMenu();
}

}

/* klik luar menu */

overlay.onclick = function(){
closeMenu();
}


/* INIT */

loadHero();
loadTrending();
loadDatabase();
