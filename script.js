// CONFIG dari config.js
const API = "https://www.googleapis.com/youtube/v3";

// ambil elemen
const hero = document.getElementById("hero-video");
const trendingContainer = document.getElementById("trending");
const shortsContainer = document.getElementById("shorts");
const videosContainer = document.getElementById("videos");
const liveContainer = document.getElementById("live");

// channel info
const channelLogo = document.getElementById("channel-logo");
const channelName = document.getElementById("channel-name");
const subscriberCount = document.getElementById("subscriber-count");


// LOAD CHANNEL INFO
async function loadChannel() {

const url = `${API}/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`;

const res = await fetch(url);
const data = await res.json();

const channel = data.items[0];

channelLogo.src = channel.snippet.thumbnails.high.url;
channelName.innerText = channel.snippet.title;

const subs = Number(channel.statistics.subscriberCount).toLocaleString();
subscriberCount.innerText = `${subs} subscribers`;

}



// LOAD VIDEOS
async function loadVideos() {

const url = `${API}/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=20`;

const res = await fetch(url);
const data = await res.json();

let heroSet = false;

data.items.forEach((item,index)=>{

if(item.id.kind !== "youtube#video") return;

const videoId = item.id.videoId;
const title = item.snippet.title;
const thumb = item.snippet.thumbnails.medium.url;


// HERO
if(!heroSet){

hero.innerHTML = `
<iframe
width="100%"
height="400"
src="https://www.youtube.com/embed/${videoId}"
frameborder="0"
allowfullscreen>
</iframe>
`;

heroSet = true;

}


// SHORTS (rasio tinggi)
if(index < VIDEO_LIMIT){

shortsContainer.innerHTML += `
<a href="https://youtube.com/watch?v=${videoId}" target="_blank" class="short-card">

<img src="${thumb}">
<p>${title}</p>

</a>
`;

}


// VIDEOS
if(index < VIDEO_LIMIT){

videosContainer.innerHTML += `
<a href="https://youtube.com/watch?v=${videoId}" target="_blank" class="video-card">

<img src="${thumb}">
<p>${title}</p>

</a>
`;

}


// TRENDING
if(index < TRENDING_LIMIT){

trendingContainer.innerHTML += `
<a href="https://youtube.com/watch?v=${videoId}" target="_blank" class="trend-card">

<img src="${thumb}">
<p>${title}</p>

</a>
`;

}


// PAST LIVE (dummy filter sementara)
if(title.toLowerCase().includes("live")){

liveContainer.innerHTML += `
<a href="https://youtube.com/watch?v=${videoId}" target="_blank" class="video-card">

<img src="${thumb}">
<p>${title}</p>

</a>
`;

}

});

}



// INIT
loadChannel();
loadVideos();
