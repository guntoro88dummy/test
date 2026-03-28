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

async function loadChannel(){

try{

const res = await fetch(`${API}/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`);
const data = await res.json();

const ch = data.items[0];

logo.src = ch.snippet.thumbnails.high.url;
name.innerText = ch.snippet.title;

if(ch.snippet.customUrl){
handle.innerText = ch.snippet.customUrl;
}else{
handle.innerText = ch.snippet.title;
}

subs.innerText = Number(ch.statistics.subscriberCount).toLocaleString()+" subscribers";

}catch(e){
console.log("Channel load error",e);
}

}

async function loadVideos(){

try{

const res = await fetch(`${API}/search?part=snippet,id&channelId=${CHANNEL_ID}&order=date&maxResults=20&type=video&key=${API_KEY}`);
const data = await res.json();

let heroSet=false;

data.items.forEach((item,i)=>{

if(!item.id.videoId) return;

const id=item.id.videoId;
const title=item.snippet.title;
const thumb=item.snippet.thumbnails.medium.url;

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

videos.innerHTML+=`
<a href="https://youtube.com/watch?v=${id}" target="_blank" class="video-card">
<img src="${thumb}">
<p class="video-title">${title}</p>
</a>
`;

shorts.innerHTML+=`
<a href="https://youtube.com/watch?v=${id}" target="_blank" class="short-card">
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

}catch(e){
console.log("Video load error",e);
}

}

async function loadLive(){

try{

const res=await fetch(`${API}/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&maxResults=6&key=${API_KEY}`);
const data=await res.json();

data.items.forEach(v=>{

if(!v.id.videoId) return;

const id=v.id.videoId;
const title=v.snippet.title;
const thumb=v.snippet.thumbnails.medium.url;

live.innerHTML+=`
<a href="https://youtube.com/watch?v=${id}" target="_blank" class="video-card">
<img src="${thumb}">
<p class="video-title">${title}</p>
</a>
`;

});

}catch(e){
console.log("Live load error",e);
}

}

loadChannel();
loadVideos();
loadLive();
