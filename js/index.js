!function(){const e=document.querySelector(".btn-backtotop"),t=document.querySelector(".content ");window.addEventListener("scroll",(function(){let n=document.documentElement.scrollTop>t.offsetTop?1:0;e.style.opacity=n})),e.addEventListener("click",(function(){document.documentElement.scrollTop=0}))}(),function(){const e=document.querySelectorAll(".categories-a"),t=document.querySelectorAll(".page-content .classtest-link");function n(){return`${parseInt(256*Math.random())},${parseInt(256*Math.random())},${parseInt(256*Math.random())}`}e.forEach((e=>{const t=parseInt(13*Math.random())+12,o=n();e.style.color=`rgba(${o})`,e.style.fontSize=`${t}px`})),t.forEach((e=>{const t=parseInt(13*Math.random())+12,o=n();e.style.color=`rgba(${o})`,e.style.fontSize=`${t}px`}))}(),window.addEventListener("scroll",(function(){const e=document.querySelector(".right-toc"),t=document.querySelector(".post-copyright");let n=document.documentElement.scrollTop;e&&(n>=e.offsetTop&&(e.classList.add("catalogue"),n<259&&e.classList.remove("catalogue")),n>=t.offsetTop-400&&e.classList.remove("catalogue"))})),function(){const e=document.querySelector("#local-search-input"),t=document.querySelector(".local-search-content"),n=document.querySelector(".search");function o(s){n.contains(s.target)||("block"===t.style.display&&(t.style.display="none"),e.value=""),"none"===t.style.display&&document.removeEventListener("click",o)}e&&e.addEventListener("focus",(function(){t.style.display="block",(t.style.display="none")&&(t.style.display="block"),setTimeout((function(){document.addEventListener("click",o)}),300)}))}(),function(){const e=document.querySelector(".header-nav-items");e.addEventListener("mouseover",(function(t){if("header-nav-page"===t.target.className){const n=e.querySelector(".header-nav-flag");n&&n.classList.remove("header-nav-flag"),t.target.nextElementSibling.classList.add("header-nav-flag")}})),e.addEventListener("mouseleave",(function(){const t=e.querySelector(".header-nav-flag");t&&t.classList.remove("header-nav-flag")}))}(),function(){const e=document.querySelector(".sidebar"),t=document.querySelector(".header-nav-fenlei");function n(t){e.querySelector(".sidebar-content").contains(t.target)||(e.classList.remove("sidebar-open"),e.querySelector(".sidebar-content").classList.remove("sidebar-content-open"),document.body.style.overflow="scroll",document.body.style.position="relative"),document.querySelector(".sidebar-open")||document.removeEventListener("click",n)}t.addEventListener("click",(function(){clearTimeout(0),document.querySelector(".sidebar-open")||(e.classList.add("sidebar-open"),e.querySelector(".sidebar-content").classList.add("sidebar-content-open"),setTimeout((function(){document.addEventListener("click",n)}),300))}))}(),function(){photosLoading=document.querySelector(".animation-loading");let e=document.querySelectorAll(".photos"),t=document.querySelector(".photo-img");if(!t)return;let n=t.querySelectorAll("img");function o(){if(!t)return;let n=t.offsetWidth,o=e[0].offsetWidth,c=Math.floor(n/o),a=(n-o*c)/(c+1),l=[];for(let e=0;e<c;e++){let t={x:Math.floor((e+1)*a+o*e),y:10};l.push(t)}for(let t=0;t<e.length;t++){let n=s(l);e[t].style.left=l[n].x+"px",e[t].style.top=l[n].y+"px",l[n].y+=e[t].offsetHeight+10}const r=e[e.length-1],d=[...e].splice(-3).map((e=>e.offsetHeight));t.style.height=+r.style.top.replace(/px/,"")+Math.max(...d)+"px",t.style.opacity=1,window.matchMedia("(max-width: 620px)").matches&&(t.style.height=+r.style.top.replace(/px/,"")+r.offsetHeight+"px"),t.style.opacity&&(photosLoading.style.display="none"),"none"===photosLoading.style.display&&i()}function s(e){let t=e[0].y,n=0;for(let o=0;o<e.length;o++)e[o].y<t&&(t=e[o].y,n=o);return n}window.onload=function(){o()},window.onresize=function(){o()};let c=[];function i(){n.forEach((e=>{let t=e.height;c.push(e.src),e.src="",e.style.backgroundColor=`${function(){let e=Math.floor(255*Math.random()),t=Math.floor(255*Math.random()),n=Math.floor(255*Math.random());return"rgba("+e+","+t+","+n+",0.8)"}()}`,e.height=t}));const e=[...n];var t=new IntersectionObserver((e=>{e.forEach((({isIntersecting:e,target:n})=>{e&&(setTimeout((()=>{n.src=c[n.dataset.id]}),300),t.unobserve(n))}))}));e.forEach((e=>t.observe(e)))}}(),function(){const e=document.createElement("div"),t=document.createElement("img"),n=document.createElement("span"),o=document.createElement("b"),s=document.createElement("i"),c=document.createElement("div");e.classList.add("bigDivks");let i="";const a=document.querySelector(".left .talks");a&&a.addEventListener("click",(function(e){if("IMG"===e.target.tagName){const t=a.querySelector(".active");t&&t.classList.remove("active"),u(e.target.src,e.target.dataset.id),e.target.parentNode.parentNode.classList.add("active"),m()}i=a.querySelectorAll(".active img")}));const l=document.querySelector(".left .post-content");if(l){const e=document.querySelectorAll(".left .post-content img");i=document.querySelectorAll(".left .post-content img"),l.addEventListener("click",(function(t){"IMG"===t.target.tagName&&(e.forEach(((e,t)=>{e.dataset.id=t})),u(t.target.src,t.target.dataset.id),m())}))}const r=document.querySelector(".photo .left .page-item");function d(t){e.contains(t.target)||(e.style.display="none",c.style.display="none",e.classList.add("bigDivks"),document.removeEventListener("click",d))}function u(i,a){c.classList.add("maskBigDiv"),c.style.display="block",document.body.appendChild(c),e.style.display="block",e.classList.add("bigDiv"),e.classList.add("bigDivs"),t.classList.add("bigPicture"),t.src=i,t.dataset.id=a,e.appendChild(t),n.classList.add("closePicture"),n.innerText="X",e.appendChild(n),document.body.appendChild(e),setTimeout((()=>{document.addEventListener("click",d)}),100),o.classList.add("pictureSpan"),o.classList.add("pictureSpan1"),o.innerText="<",s.classList.add("pictureSpan"),s.classList.add("pictureSpan2"),s.innerText=">",e.appendChild(o),e.appendChild(s)}function m(){e.style.backgroundColor="",setTimeout((()=>{e.style.backgroundColor="rgba(0, 0, 0, .9)"}),700)}r&&(i=r.querySelectorAll(".photo-img .photos img"),r.addEventListener("click",(function(e){"IMG"===e.target.tagName&&(u(e.target.src,e.target.dataset.id),m())}))),n.addEventListener("click",(function(){e.style.display="none",c.style.display="none",e.classList.add("bigDivks"),document.removeEventListener("click",d)})),e.addEventListener("click",(function(t){if(i)if("B"===t.target.tagName){const n=t.target.previousElementSibling.previousElementSibling;let o;i.forEach(((e,t)=>{e.src===n.src&&e.dataset.id===n.dataset.id&&(o=t)})),e.classList.remove("bigDivks"),o||(o=i.length),u(i[o-1].src,i[o-1].dataset.id)}else if("I"===t.target.tagName){const n=t.target.previousElementSibling.previousElementSibling;let o;i.forEach(((e,t)=>{e.src===n.previousElementSibling.src&&e.dataset.id===n.previousElementSibling.dataset.id&&(o=t)})),e.classList.remove("bigDivks"),o===i.length-1&&(o=-1),u(i[o+1].src,i[o+1].dataset.id)}}))}(),function(){const e=document.querySelector(".link-alert-btn"),t=document.querySelector(".link-alert"),n=document.createElement("div");if(!e)return;function o(e){t.contains(e.target)||s()}function s(){t.classList.remove("bigDiv"),t.style.display="none",n.classList.remove("maskBigDiv"),document.removeEventListener("click",o)}e.addEventListener("click",(function(){t.classList.add("bigDivs"),t.style.display="block",n.classList.add("maskBigDiv"),n.style.display="block",document.body.appendChild(n),setTimeout((()=>{document.addEventListener("click",o)}),100)})),t.querySelector(".link-alert-title div").addEventListener("click",(function(){s()}));t.querySelector(".link-alert-form").addEventListener("submit",(function(e){e.preventDefault();const t=this.querySelector("div"),n=this.querySelectorAll("input"),o=[...n].every((e=>e.value));let s={};if(o){n.forEach((e=>{s[e.name]=e.value}));let e=[];for(let t in s)e.push(`${t}=${s[t]}`);t.style.opacity=1,t.innerText="申请成功,请等待审核,审核通过后会邮箱提醒!!!",this.reset();const o=new XMLHttpRequest;o.open("post","https://apis.isqqq.com/link"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.send(e.join("&"))}else t.style.opacity=1,t.innerText="内容不能为空"}))}();