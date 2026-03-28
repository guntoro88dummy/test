
// CHANNEL INFO

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



// VIDEO DATA

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=20&order=date&type=video&key=${API_KEY}`)

.then(res=>res.json())

.then(data=>{

let videos=data.items

loadHero(videos[0])
loadVideos(videos)

})



function loadHero(video){

document.getElementById("hero-video").innerHTML=`

<iframe src="https://www.youtube.com/embed/${video.id.videoId}">
</iframe>

`

}


function loadVideos(videos){

let html=""

videos.slice(0,6).forEach(v=>{

html+=`

<div class="video-card" onclick="openVideo('${v.id.videoId}')">

<img src="${v.snippet.thumbnails.medium.url}">

<p>${v.snippet.title}</p>

</div>

`

})

document.getElementById("videos").innerHTML=html

document.getElementById("shorts").innerHTML=html

document.getElementById("live").innerHTML=html

document.getElementById("trending").innerHTML=html

}


function openVideo(id){

window.location=
"https://youtube.com/watch?v="+id

}