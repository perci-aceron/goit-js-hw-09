function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var r=i("1GAPJ");function d(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}Notify.Init(),document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("promisesForm").addEventListener("submit",(function(t){t.preventDefault();const n=parseInt(document.getElementsByName("delay")[0].value),o=parseInt(document.getElementsByName("step")[0].value);!function(t,n,o){for(let i=1;i<=t;i++){d(i,n+(i-1)*o).then((({position:t,delay:n})=>{e(r).Notify.Success("✅ Fulfilled promise 1 in 1000ms")})).catch((({position:t,delay:n})=>{e(r).Notify.Failure("❌ Rejected promise 2 in 2000ms")}))}}(parseInt(document.getElementsByName("amount")[0].value),n,o)}))}));
//# sourceMappingURL=03-promises.789eb6bb.js.map
