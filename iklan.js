/* =========================
   SIDEBAR AFFILIATE ADS
========================= */

const ADS_SIDEBAR = [

{
img:"https://govemployee.com/wp-content/uploads/sites/7/2022/08/Your-Ad-Here.jpg",
link:"https://affiliate-link-1.com"
},

{
img:"https://govemployee.com/wp-content/uploads/sites/7/2022/08/Your-Ad-Here.jpg",
link:"https://affiliate-link-2.com"
},

{
img:"https://govemployee.com/wp-content/uploads/sites/7/2022/08/Your-Ad-Here.jpg",
link:"https://affiliate-link-3.com"
},

{
img:"https://govemployee.com/wp-content/uploads/sites/7/2022/08/Your-Ad-Here.jpg",
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
   SEARCH BAR ADS ROTATOR
========================= */

const SEARCH_ADS = [

{
text:"🎤 Mic Wireless Diskon 50% BIKIN VLOG MU MAKIN CIAMIK",
link:"https://affiliate1.com"
},

{
text:"🔊 Speaker Aktif Promo Besar SPESIAL JEDUG JEDUG, HOREG MANIA",
link:"https://affiliate2.com"
},

{
text:"📷 Kamera Live Streaming Murah RAMAH DI KANTONG YUTUBER!!",
link:"https://affiliate3.com"
},

{
text:"💡 Lampu Panggung Diskon MURAH GILAKKK !! ( AFFILIATOR )",
link:"https://affiliate4.com"
}

];

const searchAdText = document.getElementById("search-ad-text");
const searchAdLink = document.getElementById("search-ad-link");

let searchIndex = 0;

function rotateSearchAd(){

if(!searchAdText || !searchAdLink) return;

const ad = SEARCH_ADS[searchIndex];

searchAdText.innerText = ad.text;
searchAdLink.href = ad.link;

searchIndex++;

if(searchIndex >= SEARCH_ADS.length){
searchIndex = 0;
}

}

rotateSearchAd();

setInterval(rotateSearchAd,4000);
