function getCookie(name){let matches=document.cookie.match(new RegExp("(?:^|; )"+name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,'\\$1')+"=([^;]*)"));return matches?decodeURIComponent(matches[1]):undefined;}
let ua=navigator.userAgent.toLowerCase();let isAndroid=ua.indexOf("android")>-1;let date=new Date(Date.now()+86400e3);date=date.toUTCString();let smartBanner=document.createElement('div')
smartBanner.classList.add('smart-banner')
smartBanner.innerHTML='<div class="smart-banner__close"><button>×</button></div><div class="smart-banner__logo"><img src="/img/bosslike/logo_bsl_app_100.png"></div><div class="smart-banner__info"><div class="smart-banner__title">Bosslike – биржа заданий</div><div class="smart-banner__publisher">BOSSLABS</div></div><a href="https://play.google.com/store/apps/details?id=com.bosslike.bosslike" target="_blank" class="smart-banner__link">ОТКРЫТЬ</a>'
if(isAndroid&&(getCookie('market-cookie')===undefined)){document.cookie="market-cookie=true; expires="+date;document.body.appendChild(smartBanner)
document.querySelector('.page').classList.add('page_with_smart-banner')}
const smartBannerClose=document.querySelector('.smart-banner__close button')
if(smartBannerClose!==null){smartBannerClose.onclick=function(){document.body.removeChild(document.querySelector('.smart-banner'))
document.querySelector('.page').classList.remove('page_with_smart-banner')}}