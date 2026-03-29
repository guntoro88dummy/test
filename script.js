const API = "https://www.googleapis.com/youtube/v3";

const hero = document.getElementById("hero-video");
const trending = document.getElementById("trending");
const shorts = document.getElementById("shorts");
const videos = document.getElementById("videos");
const live = document.getElementById("live");

const logo = document.getElementById("channel-logo");
const name = document.getElementById("channel-name");
const handle = document.getElementById("channel-handle");
const subs = document.getElementById("subscriber-count");

function shuffle(arr){
return arr.sort(()=>0.5-Math.random());
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

async function getStats(ids){

const url=`${API}/videos?part=snippet,statistics&id=${ids.join(",")}&key=${API_KEY}`;

const res=await fetch(url);
const data=await res.json();

return data.items;

}

async function loadChannel(){

const url=`${API}/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

const res=await fetch(url);
const data=await res.json();

const ch=data.items[0];

logo.src=ch.snippet.thumbnails.high.url;
name.innerText=ch.snippet.title;
handle.innerText=ch.snippet.customUrl || ch.snippet.title;

subs.innerText=
Number(ch.statistics.subscriberCount).toLocaleString()+" subscribers";

}

async function loadHero(){

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

}

async function loadTrending(){

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

}

async function renderSection(container,ids){

const shuffled=shuffle(ids).slice(0,12);

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

async function loadDatabase(){

renderSection(videos,DATA.videos);
renderSection(shorts,DATA.shorts);
renderSection(live,DATA.live);

}

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

loadChannel();
loadHero();
loadTrending();
loadDatabase();
