!function(){const e=document.querySelector(".btn-backtotop"),t=document.querySelector(".content ");window.addEventListener("scroll",(function(){let n=document.documentElement.scrollTop>t.offsetTop?1:0;e.style.opacity=n})),e.addEventListener("click",(function(){document.documentElement.scrollTop=0}))}(),function(){const e=document.querySelectorAll(".categories-a"),t=document.querySelectorAll(".page-content .classtest-link");function n(){return`${parseInt(256*Math.random())},${parseInt(256*Math.random())},${parseInt(256*Math.random())}`}e.forEach((e=>{const t=parseInt(13*Math.random())+12,o=n();e.style.color=`rgba(${o})`,e.style.fontSize=`${t}px`})),t.forEach((e=>{const t=parseInt(13*Math.random())+12,o=n();e.style.color=`rgba(${o})`,e.style.fontSize=`${t}px`}))}(),window.addEventListener("scroll",(function(){const e=document.querySelector(".right-toc"),t=document.querySelector(".post-copyright");let n=document.documentElement.scrollTop;e&&(n>=e.offsetTop&&(e.classList.add("catalogue"),n<259&&e.classList.remove("catalogue")),n>=t.offsetTop-400&&e.classList.remove("catalogue"))})),function(){const e=document.querySelector("#local-search-input"),t=document.querySelector(".local-search-content");function n(e){let o=t.contains(e.target);console.log(111),o||"block"===t.style.display&&(t.style.display="none"),"none"===t.style.display&&document.removeEventListener("click",n)}e.addEventListener("focus",(function(){t.style.display="block",setTimeout((function(){document.addEventListener("click",n)}),300)}))}(),function(){const e=document.querySelector(".header-nav-items"),t=document.querySelectorAll(".header-nav-item-child");let n=0;e.addEventListener("mouseover",(function(e){if(clearTimeout(n),"header-nav-page"===e.target.className){o(),e.target.nextElementSibling.style.display="block"}})),t.forEach((e=>{clearTimeout(n),e.addEventListener("mouseleave",(function(){this.style.display="none"}))})),e.addEventListener("mouseleave",(function(){clearTimeout(n),n=setTimeout((function(){o()}),50)}));function o(){t.forEach((e=>{e.style.display="none",clearTimeout(n)}))}document.querySelector(".header-nav-items").addEventListener("click",(function(e){if("SPAN"===e.target.tagName){o(),e.target.parentNode.nextElementSibling.style.display="block"}}))}(),function(){const e=document.querySelector(".sidebar"),t=document.querySelector(".header-nav-fenlei");function n(t){e.querySelector(".sidebar-content").contains(t.target)||(e.classList.remove("sidebar-open"),e.querySelector(".sidebar-content").classList.remove("sidebar-content-open"),document.body.style.overflow="scroll",document.body.style.position="relative"),document.querySelector(".sidebar-open")||document.removeEventListener("click",n)}t.addEventListener("click",(function(){clearTimeout(0),document.querySelector(".sidebar-open")||(e.classList.add("sidebar-open"),e.querySelector(".sidebar-content").classList.add("sidebar-content-open"),document.body.style.position="fixed",document.body.style.overflow="hidden",setTimeout((function(){document.addEventListener("click",n)}),300))}))}(),function(){const e=document.createElement("div"),t=document.createElement("img"),n=document.createElement("span"),o=document.querySelector(".photo .left .page-item"),c=document.createElement("b"),i=document.createElement("i"),a=document.createElement("div"),s=document.querySelector(".left .post-content");function l(t){e.contains(t.target)||(e.style.display="none",a.style.display="none",document.removeEventListener("click",l))}function d(o,s){a.classList.add("maskBigDiv"),a.style.display="block",document.body.appendChild(a),e.style.display="block",e.classList.add("bigDiv"),t.classList.add("bigPicture"),t.src=o,t.dataset.id=s,e.appendChild(t),n.classList.add("closePicture"),n.innerText="X",e.appendChild(n),document.body.appendChild(e),setTimeout((()=>{document.addEventListener("click",l)}),100),c.classList.add("pictureSpan"),c.classList.add("pictureSpan1"),c.innerText="<",i.classList.add("pictureSpan"),i.classList.add("pictureSpan2"),i.innerText=">",e.appendChild(c),e.appendChild(i)}s&&s.addEventListener("click",(function(e){"IMG"===e.target.tagName&&d(e.target.src,e.target.dataset.id)})),o&&o.addEventListener("click",(function(e){"IMG"===e.target.tagName&&d(e.target.src,e.target.dataset.id)})),n.addEventListener("click",(function(){e.style.display="none",a.style.display="none",document.removeEventListener("click",l)})),e.addEventListener("click",(function(e){const t=o.querySelectorAll("img");if("B"===e.target.tagName){let n=Number(e.target.previousElementSibling.previousElementSibling.dataset.id);n||(n=t.length),d(t[n-1].src,t[n-1].dataset.id)}else if("I"===e.target.tagName){let n=Number(e.target.previousElementSibling.previousElementSibling.previousElementSibling.dataset.id);n===t.length-1&&(n=-1),d(t[n+1].src,t[n+1].dataset.id)}}))}();