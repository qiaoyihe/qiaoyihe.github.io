!function(){const e=document.querySelector(".btn-backtotop"),t=document.querySelector(".content ");window.addEventListener("scroll",(function(){let n=document.documentElement.scrollTop>t.offsetTop?1:0;e.style.opacity=n})),e.addEventListener("click",(function(){document.documentElement.scrollTop=0}))}(),function(){const e=document.querySelectorAll(".categories-a"),t=document.querySelectorAll(".page-content .classtest-link");function n(){return`${parseInt(256*Math.random())},${parseInt(256*Math.random())},${parseInt(256*Math.random())}`}e.forEach((e=>{const t=parseInt(13*Math.random())+12,o=n();e.style.color=`rgba(${o})`,e.style.fontSize=`${t}px`})),t.forEach((e=>{const t=parseInt(13*Math.random())+12,o=n();e.style.color=`rgba(${o})`,e.style.fontSize=`${t}px`}))}(),window.addEventListener("scroll",(function(){const e=document.querySelector(".right-toc"),t=document.querySelector(".post-copyright");let n=document.documentElement.scrollTop;e&&(n>=e.offsetTop&&(e.classList.add("catalogue"),n<259&&e.classList.remove("catalogue")),n>=t.offsetTop-400&&e.classList.remove("catalogue"))})),function(){const e=document.querySelector("#local-search-input"),t=document.querySelector(".local-search-content");function n(e){t.contains(e.target)||"block"===t.style.display&&(t.style.display="none"),"none"===t.style.display&&document.removeEventListener("click",n)}e.addEventListener("focus",(function(){t.style.display="block",setTimeout((function(){document.addEventListener("click",n)}),300)}))}(),function(){const e=document.querySelector(".header-nav-items"),t=document.querySelectorAll(".header-nav-item-child");let n=0;function o(){t.forEach((e=>{e.style.display="none",clearTimeout(n)}))}e.addEventListener("mouseover",(function(e){clearTimeout(n),"header-nav-page"===e.target.className&&(o(),e.target.nextElementSibling.style.display="block")})),t.forEach((e=>{clearTimeout(n),e.addEventListener("mouseleave",(function(){this.style.display="none"}))})),e.addEventListener("mouseleave",(function(){clearTimeout(n),n=setTimeout((function(){o()}),50)})),document.querySelector(".header-nav-items").addEventListener("click",(function(e){"SPAN"===e.target.tagName&&(o(),e.target.parentNode.nextElementSibling.style.display="block")}))}(),function(){const e=document.querySelector(".sidebar");function t(n){e.querySelector(".sidebar-content").contains(n.target)||(e.classList.remove("sidebar-open"),e.querySelector(".sidebar-content").classList.remove("sidebar-content-open"),document.body.style.overflow="scroll",document.body.style.position="relative"),document.querySelector(".sidebar-open")||document.removeEventListener("click",t)}document.querySelector(".header-nav-fenlei").addEventListener("click",(function(){clearTimeout(0),document.querySelector(".sidebar-open")||(e.classList.add("sidebar-open"),e.querySelector(".sidebar-content").classList.add("sidebar-content-open"),document.body.style.position="fixed",document.body.style.overflow="hidden",setTimeout((function(){document.addEventListener("click",t)}),300))}))}();