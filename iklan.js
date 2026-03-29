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
   RENDER SIDEBAR ADS
========================= */

const adsContainer = document.getElementById("ads-sidebar");

if(adsContainer){

ADS_SIDEBAR.forEach(ad=>{

adsContainer.innerHTML += `

<a href="${ad.link}" target="_blank" class="ads-item">

<img src="${ad.img}">

</a>

`;

});

}



/* =========================
   FLOATING PROMO ROTATOR
========================= */

const promoBar = document.getElementById("promo-bar");
const promoText = document.getElementById("promo-text");

let promoIndex = 0;

function rotatePromo(){

const p = PROMO_TEXT[promoIndex];

promoText.innerHTML =
`<a href="${p.link}" target="_blank">${p.text}</a>`;

promoIndex++;

if(promoIndex >= PROMO_TEXT.length){

promoIndex = 0;

}

}

rotatePromo();

setInterval(rotatePromo,5000);



/* =========================
   CLOSE BUTTON
========================= */

document.getElementById("promo-close").onclick=()=>{

promoBar.style.display="none";

};
