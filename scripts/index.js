var l=document.querySelector(".main-nav"),S=document.querySelector(".main-nav__toggle"),L=()=>{l.classList.toggle("main-nav--closed"),l.classList.toggle("main-nav--opened")},d=()=>{S.addEventListener("click",L)};var m=document.querySelector(".hero__page-button--before"),u=document.querySelector(".hero__page-button--after"),i=document.querySelectorAll(".hero__item"),o=document.querySelectorAll(".hero__page-item"),c=e=>Array.from(e).findIndex(n=>n.classList.contains("hero__item--active")),a=(e,t)=>{i[e].classList.remove("hero__item--active"),o[e].classList.remove("hero__page-item--active"),i[t].classList.add("hero__item--active"),o[t].classList.add("hero__page-item--active"),m.disabled=t===0,u.disabled=t===Array.from(i).length-1},h=()=>{let e=c(i);e>0&&a(e,e-1)},A=()=>{let e=c(i);e>=0&&e<i.length-1&&a(e,e+1)},y=({target:e})=>{let t=c(o),n=Array.from(o).indexOf(e);n!==-1&&n!==t&&a(t,n)},g=()=>{m.addEventListener("click",h),u.addEventListener("click",A),o.forEach(e=>e.addEventListener("click",y))};var r={MIN:0,MAX:980,STEP:1,START:[0,900]},s=document.querySelector(".form__slider"),v=document.querySelector(".form__slider-min"),f=document.querySelector(".form__slider-max"),x=()=>{noUiSlider.create(s,{range:{min:r.MIN,max:r.MAX},step:r.STEP,start:r.START,connect:!0})},E=(e,t)=>{let n=[v,f];n[t].value=Number(e[t])},_=(e,t)=>{let n=[null,null];n[e]=t,s.noUiSlider.set(n)},q=()=>{s.noUiSlider.on("update",E),v.addEventListener("change",e=>_(0,e.target.value)),f.addEventListener("change",e=>_(1,e.target.value))},p=()=>{x(),q()};d();g();p();
