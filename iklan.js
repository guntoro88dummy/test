/* =========================
   SIDEBAR AFFILIATE ADS
========================= */

const ADS_SIDEBAR = [

{
img:"https://down-id.img.susercontent.com/file/id-11134207-7r98r-m0cielumxwl31c_tn",
link:"https://affiliate-link-1.com"
},

{
img:"https://down-id.img.susercontent.com/file/id-11134207-7r992-lnwmjmuc76h574.webp",
link:"https://affiliate-link-2.com"
},

{
img:"https://down-id.img.susercontent.com/file/id-11134207-7rasj-m3otud0i9044ba.webp",
link:"https://affiliate-link-3.com"
},

{
img:"https://down-id.img.susercontent.com/file/id-11134207-82251-mk37cj6hk1z616.webp",
link:"https://affiliate-link-4.com"
}

];


/* =========================
   FLOATING PROMO TEXT
========================= */

const PROMO_TEXT = [

{
text:"🔥 PROMO DISKON BESAR HARI INI 🔥",
link:"https://affiliate-link-1.com"
},

{
text:"⚡ FLASH SALE TERBATAS ⚡",
link:"https://affiliate-link-2.com"
},

{
text:"💰 GRATIS ONGKIR SELURUH INDONESIA 💰",
link:"https://affiliate-link-3.com"
},

{
text:"🎁 BONUS PEMBELIAN SPESIAL 🎁",
link:"https://affiliate-link-4.com"
},

{
text:"🚀 PRODUK TERLARIS BULAN INI 🚀",
link:"https://affiliate-link-5.com"
},

{
text:"💎 PROMO MEMBER KHUSUS 💎",
link:"https://affiliate-link-6.com"
},

{
text:"🔥 HARGA TERMURAH ONLINE 🔥",
link:"https://affiliate-link-7.com"
},

{
text:"🎯 DISKON KHUSUS HARI INI 🎯",
link:"https://affiliate-link-8.com"
},

{
text:"⚡ BELI SEKARANG SEBELUM HABIS ⚡",
link:"https://affiliate-link-9.com"
},

{
text:"💥 PROMO TERBESAR TAHUN INI 💥",
link:"https://affiliate-link-10.com"
}

];


/* =========================
   HEADER ADS ROTATE
========================= */

const HEADER_ADS = [

{
text:"🎤 Mic Wireless Diskon 50%",
link:"https://affiliate1.com"
},

{
text:"🔊 Speaker Aktif Promo Besar",
link:"https://affiliate2.com"
},

{
text:"📷 Kamera Live Streaming Murah",
link:"https://affiliate3.com"
},

{
text:"💡 Lampu Panggung Diskon",
link:"https://affiliate4.com"
}

];


/* =========================
   RENDER SIDEBAR ADS
========================= */

const adsContainer = document.getElementById("ads-sidebar");

if(adsContainer){

let adsHTML = "";

ADS_SIDEBAR.forEach(ad=>{

adsHTML += `

<a href="${ad.link}" target="_blank" rel="noopener" class="ads-item">
<img src="${ad.img}" alt="Affiliate Ads" loading="lazy">
</a>

`;

});

adsContainer.innerHTML = adsHTML;

}


/* =========================
   FLOATING PROMO ROTATOR
========================= */

const promoBar = document.getElementById("promo-bar");
const promoText = document.getElementById("promo-text");

let promoIndex = 0;

function rotatePromo(){

if(!promoText) return;

const p = PROMO_TEXT[promoIndex];

promoText.innerHTML = `
<a href="${p.link}" target="_blank" rel="noopener">
${p.text}
</a>
`;

promoIndex++;

if(promoIndex >= PROMO_TEXT.length){
promoIndex = 0;
}

}

if(promoText){

rotatePromo();

setInterval(rotatePromo,5000);

}


/* =========================
   CLOSE PROMO BUTTON
========================= */

const promoClose = document.getElementById("promo-close");

if(promoClose){

promoClose.onclick = ()=>{

if(promoBar){
promoBar.style.display="none";
}

};

}


/* =========================
   HEADER ADS ROTATOR
========================= */

const headerAds = document.getElementById("header-ads");

let headerIndex = 0;

function showHeaderAd(){

if(!headerAds) return;

const ad = HEADER_ADS[headerIndex];

headerAds.innerHTML = `
<a href="${ad.link}" target="_blank" rel="noopener">
${ad.text}
</a>
`;

headerIndex++;

if(headerIndex >= HEADER_ADS.length){
headerIndex = 0;
}

}

if(headerAds){

showHeaderAd();

setInterval(showHeaderAd,4000);

}
