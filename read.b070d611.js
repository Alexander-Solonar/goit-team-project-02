var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},c={},d=e.parcelRequired7c6;null==d&&((d=function(e){if(e in o)return o[e].exports;if(e in c){var d=c[e];delete c[e];var r={id:e,exports:{}};return o[e]=r,d.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,o){c[e]=o},e.parcelRequired7c6=d),d("bUb57"),d("i6owy"),d("i6owy");((e,o=!0)=>{const c=(e||document).querySelectorAll(".accordion-card");if(c.length){const d=e=>({head:e.querySelector(".accordion-card__head"),body:e.querySelector(".accordion-card__body")}),r=(e,o)=>{e.classList.remove("accordion-card__head--active"),o.classList.remove("accordion-card__body--active"),o.style.height=0},a=(e,o)=>{e.classList.add("accordion-card__head--active"),o.classList.add("accordion-card__body--active"),o.style.height=o.scrollHeight+"px"},i=()=>{c.forEach((e=>{const{head:o,body:c}=d(e);r(o,c)}))};c.forEach((c=>{const{head:t,body:n}=d(c),s=()=>{const c=t.classList.contains("accordion-card__head--active");e&&!1===o&&i(),c?r(t,n):a(t,n)};s(),t.addEventListener("click",s)}))}})(),d("5yrW8"),d("9tydV");
//# sourceMappingURL=read.b070d611.js.map