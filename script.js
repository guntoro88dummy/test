// ============================
// CHANNEL INFO
// ============================

fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

if(!data.items) return

let channel=data.items[0]

document.getElementById("channel-logo").src =
channel.snippet.thumbnails.medium.url

document.getElementById("channel-name").innerText =
channel.snippet.title

document.getElementById("subscriber-count").innerText =
Number(channel.statistics.subscriberCount).toLocaleString()+" subscribers"

document.getElementById("channel-desc").innerText =
channel.snippet.description

})



// ============================
// LOAD VIDEOS
// ============================

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=20&order=date&type=video&key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

if(!data.items) return

let videos=data.items

loadHero(videos[0])
loadSections(videos)

})



// ============================
// HERO VIDEO
// ============================

function loadHero(video){

document.getElementById("hero-video").innerHTML=`

<iframe 
src="https://www.youtube.com/embed/${video.id.videoId}"
allowfullscreen>
</iframe>

`

}



// ============================
// VIDEO SECTIONS
// ============================

function loadSections(videos){

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

if(index<6) videosHTML+=card
if(index<6) shortsHTML+=card
if(index<6) liveHTML+=card
if(index<4) trendingHTML+=card

})

document.getElementById("videos").innerHTML=videosHTML
document.getElementById("shorts").innerHTML=shortsHTML
document.getElementById("live").innerHTML=liveHTML
document.getElementById("trending").innerHTML=trendingHTML

}



// ============================
// OPEN VIDEO
// ============================

function openVideo(id){
window.open("https://youtube.com/watch?v="+id,"_blank")
}



// ============================
// POPUP INFO
// ============================

const moreBtn = document.getElementById("more-btn")
const popup = document.getElementById("info-popup")
const popupClose = document.getElementById("popup-close")

if(moreBtn && popup){

moreBtn.addEventListener("click",()=>{

popup.style.display="flex"

document.getElementById("popup-title").innerText =
document.getElementById("channel-name").innerText

document.getElementById("popup-desc").innerText =
document.getElementById("channel-desc").innerText

})

}



// ============================
// CLOSE POPUP BUTTON
// ============================

if(popupClose){

popupClose.addEventListener("click",()=>{

popup.style.display="none"

})

}



// ============================
// ESC CLOSE
// ============================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape" && popup){
popup.style.display="none"
}

})
