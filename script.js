const API_KEY = "YOUR_API_KEY"
const CHANNEL_ID = "UCxxxxxxxxxxxx"



/* CHANNEL INFO */

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



/* HERO PRIORITY */

async function loadHero(){

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

}

loadHero()



function renderHero(video){

let id=video.id.videoId

document.getElementById("hero-video").innerHTML=`

<div class="hero-thumb" onclick="openVideo('${id}')">

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



/* VIDEO LIST */

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=20&order=date&type=video&key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

let videos=data.items

let v=""
let s=""
let l=""
let t=""

videos.forEach((video,i)=>{

if(!video.id.videoId) return

let id=video.id.videoId

let card=`

<div class="video-card" onclick="openVideo('${id}')">

<img src="${video.snippet.thumbnails.medium.url}">

<p>${video.snippet.title}</p>

</div>

`

if(i<6) v+=card
if(i<6) s+=card
if(i<6) l+=card
if(i<4) t+=card

})

document.getElementById("videos").innerHTML=v
document.getElementById("shorts").innerHTML=s
document.getElementById("live").innerHTML=l
document.getElementById("trending").innerHTML=t

})



function openVideo(id){

window.open("https://youtube.com/watch?v="+id,"_blank")

}
