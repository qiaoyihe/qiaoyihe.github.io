function link(e){return new Promise((n=>{const t=new XMLHttpRequest;t.open("get",e),t.send(),t.addEventListener("load",(()=>{n(JSON.parse(t.response))}))}))}