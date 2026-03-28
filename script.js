const API = "https://www.googleapis.com/youtube/v3";

const hero = document.getElementById("hero-video");
const trendingContainer = document.getElementById("trending");
const shortsContainer = document.getElementById("shorts");
const videosContainer = document.getElementById("videos");
const liveContainer = document.getElementById("live");

const channelLogo = document.getElementById("channel-logo");
const channelName = document.getElementById("channel-name");
const channelHandle = document.getElementById("channel-handle");
const subscriberCount = document.getElementById("subscriber-count");

async function loadChannel(){

const url = `${API}/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

const res = await fetch(url);
const data = await res.json();

const channel = data.items[0];

channelLogo.src = channel.snippet.thumbnails.high.url;
channelName.innerText = channel.snippet.title;

if(channel.snippet.customUrl){
channelHandle.innerText = "@" + channel.snippet.customUrl;
}else{
channelHandle.innerText = "@channel";
}

const subs = Number(channel.statistics.subscriberCount).toLocaleString();
subscriberCount.innerText = `${subs} subscribers`;

}



async function loadVideos(){

const url = `${API}/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=25`;

const res = await fetch(url);
const data = await res.json();

let heroSet = false;
let liveCount = 0;

data.items.forEach((item,index)=>{

if(item.id.kind !== "youtube#video") return;

const videoId = item.id.videoId;
const title = item.snippet.title;
const thumb = item.snippet.thumbnails.medium.url;


/* HERO */

if(!heroSet){

hero.innerHTML = `
<iframe
src="https://www.youtube.com/embed/${videoId}"
frameborder="0"
allowfullscreen>
</iframe>
`;

heroSet = true;

}


/* SHORTS */

if(index < VIDEO_LIMIT){

shortsContainer.innerHTML += `
<a href="https://youtube.com/watch?v=${videoId}" target="_blank" class="short-card">
<img src="${thumb}">
<p class="video-title">${title}</p>
</a>
`;

}


/* VIDEOS */

if(index < VIDEO_LIMIT){

videosContainer.innerHTML += `
<a href="https://youtube.com/watch?v=${videoId}" target="_blank" class="video-card">
<img src="${thumb}">
<p class="video-title">${title}</p>
</a>
`;

}


/* TRENDING */

if(index < TRENDING_LIMIT){

trendingContainer.innerHTML += `
<a href="https://youtube.com/watch?v=${videoId}" target="_blank" class="trend-card">
<img src="${thumb}">
<p class="video-title">${title}</p>
</a>
`;

}


/* PAST LIVE */

if(title.toLowerCase().includes("live") && liveCount < 6){

liveContainer.innerHTML += `
<a href="https://youtube.com/watch?v=${videoId}" target="_blank" class="video-card">
<img src="${thumb}">
<p class="video-title">${title}</p>
</a>
`;

liveCount++;

}

});

}

loadChannel();
loadVideos();
