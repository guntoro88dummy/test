/* =========================
   SIDEBAR AFFILIATE ADS
========================= */

const ADS_SIDEBAR = [

{
img:"https://down-id.img.susercontent.com/file/360979ecbac962bcbf9aa258a8e7b48f.webp",
link:"https://s.shopee.co.id/1Lbfde4eTk",
title:"PROMO CELANA KARGO 50RBAN"
},

{
img:"https://down-id.img.susercontent.com/file/id-11134207-7ra0u-mdsfybxcsbo284_tn",
link:"https://s.shopee.co.id/70G2O6Tys8",
title:"ALAT WAJIB BIAR LAPTOP DINGIN"
},

{
img:"https://down-id.img.susercontent.com/file/sg-11134201-824ia-mf9e39mke42040_tn",
link:"https://s.shopee.co.id/6fdBzWhqay",
title:"COLOKAN MULTI FUNGSI AC DC"
},

{
img:"https://down-id.img.susercontent.com/file/id-11134207-822wi-mlydckp2zsb3dd_tn",
link:"https://s.shopee.co.id/60NVCKsRgo",
title:"POWERBANK RASA GENSET PORTABLE"
},

{
img:"https://down-id.img.susercontent.com/file/id-11134207-7r98p-lxnlh45dxvze6b_tn",
link:"https://s.shopee.co.id/6pwcLkaq2Y",
title:"MIXER EQUALIZER ASHLEY STEREO "
},

{
img:"https://down-id.img.susercontent.com/file/id-11134207-8224v-mhislwexiccj85_tn",
link:"https://s.shopee.co.id/7fVjBSK1AN",
title:"UPGRADE GAYAMU DENGAN TWS"
},

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

${ad.title ? `
<div class="ads-overlay">
<p>${ad.title}</p>
</div>
` : ""}

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
