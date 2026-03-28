document.addEventListener("DOMContentLoaded", function () {

const heroContainer = document.getElementById("hero")
const videosContainer = document.getElementById("videos")
const trendingContainer = document.getElementById("trending")
const shortsContainer = document.getElementById("shorts")
const liveContainer = document.getElementById("live")

async function loadVideos(){

const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=20&order=date&type=video&key=${API_KEY}`

const res = await fetch(url)
const data = await res.json()

const videos = data.items

let videosHTML = ""
let trendingHTML = ""
let shortsHTML = ""
let liveHTML = ""

let heroSet = false

videos.forEach((v,index)=>{

const videoId = v.id.videoId || v.id

if(!videoId) return

const thumb = v.snippet.thumbnails.medium.url
const title = v.snippet.title

const card = `
<div class="video-card" onclick="openVideo('${videoId}')">
<img src="${thumb}">
<p>${title}</p>
</div>
`

// hero video
if(!heroSet){

heroContainer.innerHTML = `
<div class="hero-video" onclick="openVideo('${videoId}')">
<img src="${v.snippet.thumbnails.high.url}">
<div class="hero-play">▶</div>
<h2>${title}</h2>
</div>
`

heroSet = true
}

// videos
if(index < VIDEO_LIMIT){
videosHTML += card
}

// trending
if(index < TRENDING_LIMIT){
trendingHTML += card
}

// shorts (simple filter portrait)
const thumbW = v.snippet.thumbnails.medium.width
const thumbH = v.snippet.thumbnails.medium.height

if(thumbH > thumbW){
shortsHTML += card
}

// live (simple detect title)
if(title.toLowerCase().includes("live")){
liveHTML += card
}

})

videosContainer.innerHTML = videosHTML
trendingContainer.innerHTML = trendingHTML
shortsContainer.innerHTML = shortsHTML
liveContainer.innerHTML = liveHTML

}

loadVideos()

})

function openVideo(id){

window.open(`https://youtube.com/watch?v=${id}`,"_blank")

}
