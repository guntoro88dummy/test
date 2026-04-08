/* =========================
   SIDEBAR AFFILIATE ADS
========================= */

const ADS_SIDEBAR = [

{
img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgL3XMEKGZ8pyuEXQZr9Wz5L7ZvkSc5UzdEbBYdzQiWVHXYbO0pEStWmnuJef6R4tKom95er59HQ9nIAn65Hu1cxIFV96neEN5DzSjlu87C1ai4wsTj2Fcd1JvbdNfx2oyh2EdYQnHzOPRzUtYoqWDrlBslMLor0Py2-it3l0kQQLAXaaFwQ_huBB-trPc/s1600/CELANA%20KARGO.jpg",
link:"https://s.shopee.co.id/1Lbfde4eTk"
},

{
img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_JUGBsxIl5B7wgHS-UWzlOAjf-m-FRZXJJFXWn230z5S3gz8oengaG-yxxIf1-XoBeHbkG7NymKmZw8J-ImAP_-M2GdOrh59OafQv6BFrizO-4mLwXM3J7wU27TvHJkCQRyjvqYAIl2audzY4imLRygplYgPGetUkbgbcI0I0lbjtJMFJTOxRIMUsPnE/s1600/COOLPAD%20LAPTOP.jpg",
link:"https://s.shopee.co.id/70G2O6Tys8"
},

{
img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgjtovtimNJqiPP_aSLzd1CENzf27vgGvGZMDBzu2AK4NKgxgFLIiBtY1uqm8aidMN1o15TlGW_oZWaI0SrxxfruU2kvYDu1JxDku63rf4-u5mZUWxaqCH3pEF3mWV56RcJcpNt76MsaPJ3VdrU26ARdGBE4bl9iJMpVFRkrYNELySQ9e-yLhme6n6ejRo/s1600/POWER%20STRIP.jpg",
link:"https://s.shopee.co.id/6fdBzWhqay"
},

{
img:"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEghLmb67jjopUhR7IJgdn8fQ-_fPdnRl1Xsb6LCvrb5dDkIqxFna-cjby61zJxiADqo2Zp04UBSnOulprmDcxY4DrhNY_TTrnMof-f4PbUqSj10SWmgn81RPVRCGC-zpr51PreOOStVkcqG3a2RFQfAHIX7bhkNbiFXm20Cho1hukW4Xrbtvk2-jnkkOfY/s1600/POWERBANK.jpg",
link:"https://s.shopee.co.id/60NVCKsRgo"
},
   
{
img:"https://down-id.img.susercontent.com/file/id-11134207-7r98p-lwgzcgklp9qia4.webp" width="259" height="194",
link:"https://s.shopee.co.id/60NVCKsRgo"
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
