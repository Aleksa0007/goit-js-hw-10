import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                          */import{i as r}from"./assets/vendor-BbbuE1sJ.js";const i=document.querySelector(".form");let o=!0;i.addEventListener("submit",t=>{t.preventDefault();const e=parseInt(i.elements.delay.value.trim(),10);o=i.querySelector('input[name="state"]:checked').value=="fulfilled",c(e).then(()=>{r.success({title:"success",message:`✅ Fulfilled promise in ${e}ms`})}).catch(()=>{r.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})});function c(t){return new Promise((e,s)=>{setTimeout(()=>{o?e():s()},t)})}
//# sourceMappingURL=2-snackbar.js.map
