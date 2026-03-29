const API = "https://www.googleapis.com/youtube/v3";

const VIDEO_LIMIT = 8;
const TRENDING_LIMIT = 5;

const hero = document.getElementById("hero-video");
const trending = document.getElementById("trending");
const shorts = document.getElementById("shorts");
const videos = document.getElementById("videos");
const live = document.getElementById("live");

const logo = document.getElementById("channel-logo");
const name = document.getElementById("channel-name");
const handle = document.getElementById("channel-handle");
const subs = document.getElementById("subscriber-count");

async function loadChannel(){

const url = `${API}/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

const res = await fetch(url);
const data = await res.json();

const ch = data.items[0];

logo.src = ch.snippet.thumbnails.high.url;
name.innerText = ch.snippet.title;

if(ch.snippet.customUrl){
handle.innerText = ch.snippet.customUrl;
}else{
handle.innerText = ch.snippet.title;
}

subs.innerText =
Number(ch.statistics.subscriberCount).toLocaleString()+" subscribers";

}



async function loadVideos(){

const url =
`${API}/search?part=snippet,id&channelId=${CHANNEL_ID}&order=date&maxResults=20&type=video&key=${API_KEY}`;

const res = await fetch(url);
const data = await res.json();

let heroSet=false;

data.items.forEach((item,i)=>{

const id=item.id.videoId;
const title=item.snippet.title;

const thumb=`https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

if(!heroSet){

hero.innerHTML=`
<iframe
src="https://www.youtube.com/embed/${id}"
frameborder="0"
allowfullscreen>
</iframe>
`;

heroSet=true;

}



if(i<VIDEO_LIMIT){

shorts.innerHTML+=`
<a href="https://youtube.com/watch?v=${id}" target="_blank" class="short-card">
<img src="${thumb}">
<p class="video-title">${title}</p>
</a>
`;

videos.innerHTML+=`
<a href="https://youtube.com/watch?v=${id}" target="_blank" class="video-card">
<img src="${thumb}">
<p class="video-title">${title}</p>
</a>
`;

}



if(i<TRENDING_LIMIT){

trending.innerHTML+=`
<a href="https://youtube.com/watch?v=${id}" target="_blank" class="trend-card">
<img src="${thumb}">
<p class="video-title">${title}</p>
</a>
`;

}

});

}



async function loadLive(){

const url =
`${API}/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&maxResults=6&key=${API_KEY}`;

const res = await fetch(url);
const data = await res.json();

data.items.forEach(v=>{

const id=v.id.videoId;
const title=v.snippet.title;
const thumb=`https://i.ytimg.com/vi/${id}/mqdefault.jpg`;

live.innerHTML+=`
<a href="https://youtube.com/watch?v=${id}" target="_blank" class="video-card">
<img src="${thumb}">
<p class="video-title">${title}</p>
</a>
`;

});

}



const popup = document.getElementById("popup");
const moreBtn = document.getElementById("more-btn");
const closePopup = document.getElementById("close-popup");

if(moreBtn){

moreBtn.onclick = () => popup.style.display = "flex";

closePopup.onclick = () => popup.style.display = "none";

document.addEventListener("keydown",(e)=>{
if(e.key==="Escape"){
popup.style.display="none";
}
});

}



loadChannel();
loadVideos();
loadLive();
