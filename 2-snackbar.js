import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                          */import{i as s}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector(".form");let r=null,c=!0;i.addEventListener("submit",t=>{t.preventDefault();const e=i.elements.delay.value.trim();c=i.querySelector('input[name="state"]:checked').value=="fulfilled",o(e).then(()=>{s.success({title:"success",message:`✅ Fulfilled promise in ${e}ms`}),clearTimeout(r)}).catch(()=>{s.error({title:"Error",message:`❌ Rejected promise in ${e}ms`}),clearTimeout(r)})});function o(t){return new Promise((e,l)=>{r=setInterval(()=>{c?e():l()},t)})}
//# sourceMappingURL=2-snackbar.js.map
