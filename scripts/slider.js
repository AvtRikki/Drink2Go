var s=document.querySelector(".hero__page-button--before"),a=document.querySelector(".hero__page-button--after"),o=document.querySelectorAll(".hero__item"),r=document.querySelectorAll(".hero__page-item"),i=e=>Array.from(e).findIndex(c=>c.classList.contains("hero__item--active")),n=(e,t)=>{o[e].classList.remove("hero__item--active"),r[e].classList.remove("hero__page-item--active"),o[t].classList.add("hero__item--active"),r[t].classList.add("hero__page-item--active"),s.disabled=t===0,a.disabled=t===Array.from(o).length-1},l=()=>{let e=i(o);e>0&&n(e,e-1)},d=()=>{let e=i(o);e>=0&&e<o.length-1&&n(e,e+1)},g=({target:e})=>{let t=i(r),c=Array.from(r).indexOf(e);c!==-1&&c!==t&&n(t,c)},m=()=>{s.addEventListener("click",l),a.addEventListener("click",d),r.forEach(e=>e.addEventListener("click",g))};export{m as initializeSlider};
