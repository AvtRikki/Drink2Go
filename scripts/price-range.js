var t={MIN:0,MAX:980,STEP:1,START:[0,900]},l=document.querySelector(".form__slider"),i=document.querySelector(".form__slider-min"),o=document.querySelector(".form__slider-max"),c=()=>{noUiSlider.create(l,{range:{min:t.MIN,max:t.MAX},step:t.STEP,start:t.START,connect:!0,cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle no-ui-slider__handle",handleLower:"handleLower",handleUpper:"handleUpper",touchArea:"touch-area no-ui-slider__touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect no-ui-slider__connect",connects:"connects no-ui-slider__connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}})},s=(e,r)=>{let a=[i,o];a[r].value=Number(e[r])},n=(e,r)=>{let a=[null,null];a[e]=r,l.noUiSlider.set(a)},u=()=>{l.noUiSlider.on("update",s),i.addEventListener("change",e=>n(0,e.target.value)),o.addEventListener("change",e=>n(1,e.target.value))},d=()=>{c(),u()};export{d as initializePriceRange};