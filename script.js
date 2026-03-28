fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

let channel=data.items[0]

document.getElementById("channel-logo").src=
channel.snippet.thumbnails.medium.url

document.getElementById("channel-name").innerText=
channel.snippet.title

document.getElementById("subscriber-count").innerText=
channel.statistics.subscriberCount+" subscribers"

document.getElementById("channel-desc").innerText=
channel.snippet.description

})



fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=20&order=date&type=video&key=${API_KEY}`)
.then(res=>res.json())
.then(data=>{

let videos=data.items

loadHero(videos[0])
loadSections(videos)

})



function loadHero(video){

document.getElementById("hero-video").innerHTML=`
<iframe src="https://www.youtube.com/embed/${video.id.videoId}" allowfullscreen></iframe>
`

}



function loadSections(videos){

let videosHTML=""
let shortsHTML=""
let liveHTML=""
let trendingHTML=""

videos.forEach((v,index)=>{

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



function openVideo(id){
window.location="https://youtube.com/watch?v="+id
}



/* MORE BUTTON */

const moreBtn = document.getElementById("more-btn");
const desc = document.querySelector(".channel-desc");

let expanded = false;

if(moreBtn){

moreBtn.addEventListener("click",()=>{

if(!expanded){
desc.style.maxHeight="none"
moreBtn.innerText="Less"
expanded=true
}else{
desc.style.maxHeight="45px"
moreBtn.innerText="More"
expanded=false
}

})

}

const moreBtn = document.getElementById("more-btn");

if(moreBtn){

moreBtn.addEventListener("click",()=>{

document.getElementById("info-popup").style.display="flex"

document.getElementById("popup-title").innerText=
document.getElementById("channel-name").innerText

document.getElementById("popup-desc").innerText=
document.getElementById("channel-desc").innerText

})

}



/* CLOSE POPUP */

document.getElementById("close-popup").onclick=function(){
document.getElementById("info-popup").style.display="none"
}

window.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){
document.getElementById("info-popup").style.display="none"
}

})
