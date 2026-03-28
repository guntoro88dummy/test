// ============================
// CHANNEL INFO
// ============================

fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

let channel=data.items[0]

document.getElementById("channel-logo").src =
channel.snippet.thumbnails.medium.url

document.getElementById("channel-name").innerText =
channel.snippet.title

document.getElementById("subscriber-count").innerText =
Number(channel.statistics.subscriberCount).toLocaleString()+" subscribers"

})



// ============================
// HERO PRIORITY
// ============================

async function loadHero(){

try{

let upcoming=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=upcoming&type=video&maxResults=1&key=${API_KEY}`)
.then(r=>r.json())

if(upcoming.items.length>0){

renderHero(upcoming.items[0])
return

}

let past=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&eventType=completed&type=video&maxResults=1&key=${API_KEY}`)
.then(r=>r.json())

if(past.items.length>0){

renderHero(past.items[0])
return

}

let video=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&order=date&type=video&maxResults=1&key=${API_KEY}`)
.then(r=>r.json())

renderHero(video.items[0])

}catch(e){

console.log(e)

}

}

loadHero()



function renderHero(video){

let videoId=video.id.videoId

document.getElementById("hero-video").innerHTML=`

<div class="hero-thumb" onclick="openVideo('${videoId}')">

<img src="${video.snippet.thumbnails.high.url}">

<div class="hero-play">
<i class="fa-solid fa-play"></i>
</div>

<div class="hero-title">
${video.snippet.title}
</div>

</div>

`

}



// ============================
// VIDEO LIST
// ============================

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=20&order=date&type=video&key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

let videos=data.items

let videosHTML=""
let shortsHTML=""
let liveHTML=""
let trendingHTML=""

videos.forEach((v,index)=>{

if(!v.id.videoId) return

let videoId=v.id.videoId

let card=`

<div class="video-card" onclick="openVideo('${videoId}')">

<img src="${v.snippet.thumbnails.medium.url}">
<p>${v.snippet.title}</p>

</div>

`

if(index<VIDEO_LIMIT) videosHTML+=card
if(index<VIDEO_LIMIT) shortsHTML+=card
if(index<VIDEO_LIMIT) liveHTML+=card
if(index<TRENDING_LIMIT) trendingHTML+=card

})

document.getElementById("videos").innerHTML=videosHTML
document.getElementById("shorts").innerHTML=shortsHTML
document.getElementById("live").innerHTML=liveHTML
document.getElementById("trending").innerHTML=trendingHTML

})



function openVideo(id){

window.open("https://youtube.com/watch?v="+id,"_blank")

}
