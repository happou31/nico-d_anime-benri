!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n){const t=((e,n,t)=>null==e?[]:e.split(n,t))(document.querySelector(".contentHeader > h1 > span").innerText,/\s/).filter(e=>!e.match(/[dD]アニメストア/)).join(" ");t.length>0&&confirm(`'${t}'を、dアニメストア ニコニコ支店 で検索しますか？`)&&(location.href=`http://ch.nicovideo.jp/search/${encodeURIComponent(t)}?channel_id=ch2632720&mode=s&sort=f&order=a&type=video`)}]);