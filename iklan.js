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
text:"🔥SARUNG 50RBAN GAJAH DUDUK - AFFILIATE!!🔥",
link:"https://s.shopee.co.id/3fzaLkU7p5"
},

{
text:"⚡OBAT RUMPUT LIAR 5 LITER - AFFILIATE!!⚡",
link:"https://s.shopee.co.id/9AKWtxoD6c"
},

{
text:"💰KABEL PREMIUM SPEAKER AUDIO 20M - AFFILIATE!!💰",
link:"https://s.shopee.co.id/W2YaEBt71"
},

{
text:"🎁SPEAKER BLUETOOTH CHARGE PORTABLE - AFFILIATE!!🎁",
link:"https://s.shopee.co.id/5fkejoGwPG"
},

{
text:"🚀LAMPU EMERGENCY TAHAN 50 JAM - AFFILIATE!!🚀",
link:"https://s.shopee.co.id/3LMjxdIOG3"
},

{
text:"💎ALAT SEMPROT ELEKTRIK 18 LITER - AFFILIATE!!💎",
link:"https://s.shopee.co.id/1Vv5mQ3f8c"
},

{
text:"🔥JAS HUJAN 50RBAN TEBAL REMBES - AFFILIATE!!🔥",
link:"https://s.shopee.co.id/1gEVyp5pSd"
},

{
text:"🎯BAN MOTOR TUBLES - AFFILIATE!!🎯",
link:"https://s.shopee.co.id/AAD46fBWps"
},

{
text:"⚡AKI SELIS 12V 20AH - AFFILIATE!!⚡",
link:"https://s.shopee.co.id/3qJ0Z5m306"
},

{
text:"💥ALAT CUKUR MINI ELEKTRIK USB  - AFFILIATE!!💥",
link:"https://s.shopee.co.id/AAD46xQOSw"
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
text:"🔦 SENTER KEPALA 20RBAN CHARGER - AFFILIATE!!",
link:"https://s.shopee.co.id/Lj7qwXRkT"
},

{
text:"🏷️ DISKON MENTOK SET KUNCI SHOCK + OBENG - AFFILIATE!! ",
link:"https://s.shopee.co.id/4qBXDb2UoK"
},

{
text:"🏷️ COVER JOK MOTOR INSTAN TINGGAL PASANG - AFFILIATE!!",
link:"https://affiliate3.com"
},

{
text:" 🎧 USB MINI MIXER AUDIO -  AFFILIATE !! ",
link:"https://s.shopee.co.id/7VCIOxPa4P"
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
