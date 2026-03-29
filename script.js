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


/* UTIL */

function shuffle(arr){
return [...arr].sort(()=>0.5-Math.random());
}

function formatViews(v){
return Number(v).toLocaleString()+" views";
}

function formatDate(date){

const d=new Date(date);
const now=new Date();

const diff=Math.floor((now-d)/1000/60/60/24);

if(diff<30)return diff+" days ago";
if(diff<365)return Math.floor(diff/30)+" months ago";
return Math.floor(diff/365)+" years ago";

}


/* ISO duration → detik */

function isoDurationToSeconds(duration){

const match = duration.match(/PT(?:(\d+)M)?(?:(\d+)S)?/);

const minutes = parseInt(match?.[1] || 0);
const seconds = parseInt(match?.[2] || 0);

return minutes*60 + seconds;

}


/* FETCH STATS */

async function getStats(ids){

const url=`${API}/videos?part=snippet,statistics,contentDetails&id=${ids.join(",")}&key=${API_KEY}`;

const res=await fetch(url);
const data=await res.json();

return data.items;

}


/* CHANNEL INFO */

async function loadChannel(){

try{

const url=`${API}/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

const res=await fetch(url);
const data=await res.json();

const ch=data.items[0];

logo.src=ch.snippet.thumbnails.high.url;
name.innerText=ch.snippet.title;
handle.innerText=ch.snippet.customUrl || ch.snippet.title;

subs.innerText=
Number(ch.statistics.subscriberCount).toLocaleString()+" subscribers";

}catch(e){

console.log("channel fallback");

}

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

/* fallback database */

const id = DATA.videos[0];

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

/* fallback */

const fallback = shuffle(DATA.videos).slice(0,5);

fallback.forEach(id=>{

trending.innerHTML+=`

<a href="https://youtube.com/watch?v=${id}" target="_blank" class="trend-card">

<img src="https://i.ytimg.com/vi/${id}/mqdefault.jpg">

<p class="video-title">Video</p>

</a>

`;

});

}

}


/* RENDER VIDEO */

async function renderVideos(container,ids,limit=6){

container.innerHTML="";

const shuffled=shuffle(ids).slice(0,limit);

const stats=await getStats(shuffled);

stats.forEach(v=>{

const id=v.id;
const title=v.snippet.title;
const thumb=v.snippet.thumbnails.medium.url;

const views=formatViews(v.statistics.viewCount);
const date=formatDate(v.snippet.publishedAt);

container.innerHTML+=`

<a href="https://youtube.com/watch?v=${id}" target="_blank" class="video-card">

<img src="${thumb}">

<p class="video-title">${title}</p>

<div class="video-meta">
${views} • ${date}
</div>

</a>

`;

});

}


/* SHORTS */

async function renderShorts(container,ids,limit=6){

container.innerHTML="";

const shuffled=shuffle(ids);

const stats=await getStats(shuffled);

let count=0;

stats.forEach(v=>{

if(count>=limit) return;

const duration = isoDurationToSeconds(v.contentDetails.duration);

/* hanya <= 60 detik */

if(duration <= 60){

const id=v.id;

const views=formatViews(v.statistics.viewCount);
const date=formatDate(v.snippet.publishedAt);

container.innerHTML+=`

<a href="https://youtube.com/shorts/${id}" target="_blank" class="short-card">

<div class="short-video">

<img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg">

</div>

<div class="short-meta">
<span>${views}</span>
<span>${date}</span>
</div>

</a>

`;

count++;

}

});

}


/* PAST LIVE */

async function loadPastLive(){

pastLive.innerHTML="";

try{

const url=`${API}/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&maxResults=6&key=${API_KEY}`;

const res=await fetch(url);
const data=await res.json();

data.items.forEach(v=>{

const id=v.id.videoId;
const title=v.snippet.title;
const thumb=v.snippet.thumbnails.medium.url;

pastLive.innerHTML+=`

<a href="https://youtube.com/watch?v=${id}" target="_blank" class="video-card">

<img src="${thumb}">

<p class="video-title">${title}</p>

</a>

`;

});

}catch(e){

console.log("past live fallback");

}

}


/* DATABASE RENDER */

async function loadDatabase(){

renderShorts(shorts,DATA.shorts,6);

renderVideos(videos,DATA.videos,6);

renderVideos(populer,DATA.populer,6);

renderVideos(live,DATA.live,6);

}


/* POPUP */

const popup = document.getElementById("popup");
const moreBtn = document.getElementById("more-btn");
const closePopup = document.getElementById("close-popup");

moreBtn.onclick = () => popup.style.display = "flex";
closePopup.onclick = () => popup.style.display = "none";

document.addEventListener("keydown",(e)=>{
if(e.key==="Escape"){
popup.style.display="none";
}
});


/* LOAD */

loadChannel();

loadHero();

loadTrending();

loadPastLive();

loadDatabase();
