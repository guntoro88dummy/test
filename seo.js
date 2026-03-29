/* ===============================
   VIDEO SEO SCHEMA GENERATOR
   otomatis dari DATA.js
================================ */

const SITE_NAME = "Aji Mangkara Channel";
const SITE_URL = window.location.origin;


/* ambil semua video dari database */

let allVideos = [];

if(typeof DATA !== "undefined"){

if(DATA.videos) allVideos = allVideos.concat(DATA.videos);
if(DATA.populer) allVideos = allVideos.concat(DATA.populer);
if(DATA.live) allVideos = allVideos.concat(DATA.live);

}


/* hapus duplikat */

allVideos = [...new Set(allVideos)];


/* generate schema */

const videoSchema = allVideos.map(id => {

return {

"@context":"https://schema.org",
"@type":"VideoObject",

"name":"Video Wayang Kulit - Aji Mangkara",

"description":"Video live wayang kulit malam ini terbaru dari channel Aji Mangkara. Tonton live streaming limbukan lucu wayang kulit dan koleksi video wayang terbaru.",

"thumbnailUrl":[
`https://i.ytimg.com/vi/${id}/hqdefault.jpg`
],

"uploadDate":"2024-01-01",

"embedUrl":
`https://www.youtube.com/embed/${id}`,

"contentUrl":
`https://www.youtube.com/watch?v=${id}`,

"publisher":{
"@type":"Organization",
"name":SITE_NAME,
"logo":{
"@type":"ImageObject",
"url":"https://yt3.googleusercontent.com/I0hZhWUt1nFTaHCpN_ZTko0C5yCDa_-ofvu78AK5mWNbgN9cuFKx9oNKRANomISQ34vraEXkIZQ=s160"
}
}

};

});


/* inject ke halaman */

const script = document.createElement("script");

script.type = "application/ld+json";

script.textContent = JSON.stringify(videoSchema);

document.head.appendChild(script);
