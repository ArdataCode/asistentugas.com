import{U as b}from"./AnimatedNumber.BZqhDXvl.js";import{o as n,c as r,q as x,y as c,d as i,F as _,L as k,a as o,D as v,m as g,l as h,t as w,k as N,E as $,I as L,x as M}from"./vue.esm-bundler.DzelZkHk.js";import{_ as f}from"./_plugin-vue_export-helper.BN1snXvA.js";const z={emits:["resize"],props:{targetLineCount:{default:1,type:Number},unit:{default:"px",type:String},min:{default:12,type:Number},max:{default:36,type:Number},constrainToElement:{type:[Boolean,Element],default(){return!1}},elementPadding:{type:Number,default(){return 0}}},data(){return{observer:null}},methods:{calculate(){const t=this.$el,a=this.unit==="px"?1:.05;let e=this.max;if(t.style.display="inline-block",t.style.lineHeight="1px",t.style.fontSize=e+this.unit,this.constrainToElement)for(;t.offsetWidth>this.constrainToElement.offsetWidth-this.elementPadding&&e>this.min;)e-=a,t.style.fontSize=e+this.unit;else for(;t.offsetHeight>this.targetLineCount&&e>this.min;)e-=a,t.style.fontSize=e+this.unit;this.$emit("resize",{size:e,unit:this.unit}),t.style.display=null,t.style.lineHeight=null}},mounted(){this.calculate(),"MutationObserver"in window&&this.observer===null&&(this.observer=new MutationObserver(this.calculate),this.observer.observe(this.$el,{subtree:!0,characterData:!0})),window.addEventListener("resize",this.calculate)},beforeUnmount:function(){this.observer.disconnect(),window.removeEventListener("resize",this.calculate)}};function C(t,a,e,y,p,u){return n(),r("span",null,[x(t.$slots,"default")])}const S=f(z,[["render",C]]),T={components:{UtilAnimatedNumber:b,UtilFitText:S},props:{parts:{type:Array,required:!0},label:{type:String,required:!0},total:{type:Number,required:!0},animatedNumber:{type:Boolean,default(){return!0}}}},F={class:"aioseo-donut-chart"},B={key:0,viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"},E=o("circle",{class:"aioseo-donut-chart-score__circle",stroke:"#e8e8eb","stroke-dasharray":"100","stroke-linecap":"round","stroke-width":2,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,-1),H=[E],q={key:1,viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"},A=["stroke-dasharray"],D=["stroke","stroke-dasharray"],P={class:"total-amount-wrapper"},I={class:"total-amount"},U={class:"total"},V=["innerHTML"],W={class:"label"};function O(t,a,e,y,p,u){const d=c("util-animated-number"),m=c("util-fit-text");return n(),r("div",F,[e.total===0?(n(),r("svg",B,H)):i("",!0),0<e.total?(n(),r("svg",q,[(n(!0),r(_,null,k(e.parts,(s,l)=>(n(),r(_,{key:l},[Math.round(s.ratio)&&l!==0?(n(),r("circle",{key:0,class:"aioseo-donut-chart-score__circle",stroke:"#FFFFFF","stroke-dasharray":`${Math.round(s.ratio)} ${parseFloat(99-Math.round(s.ratio))}`,"stroke-linecap":"round","stroke-width":2.5,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,8,A)):i("",!0),Math.round(s.ratio)?(n(),r("circle",{key:1,class:"aioseo-donut-chart-score__circle",stroke:s.color,"stroke-dasharray":`${Math.round(s.ratio)===100?100:Math.round(s.ratio)-1} 100`,"stroke-linecap":"round","stroke-width":2,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,8,D)):i("",!0)],64))),128))])):i("",!0),o("div",P,[o("div",I,[o("div",U,[v(m,{max:32,"constrain-to-element":t.$el},{default:g(()=>[e.animatedNumber?(n(),h(d,{key:0,number:parseInt(e.total)},null,8,["number"])):(n(),r("div",{key:1,innerHTML:parseInt(e.total)},null,8,V))]),_:1},8,["constrain-to-element"])]),o("div",W,w(e.label),1)])])])}const R=f(T,[["render",O]]),j={components:{CoreDonutChart:R,UtilAnimatedNumber:b},props:{parts:{type:Array,required:!0},total:{type:Number,required:!0},label:{type:String,required:!0},link:{type:String,required:!1},animatedNumber:{type:Boolean,default(){return!0}}},computed:{sortedParts(){const t=this.parts.map(a=>a);return t.forEach(function(a,e){a.last&&(t.push(t[e]),t.splice(e,1))}),t}}},G={class:"aioseo-donut-chart-with-legend"},J={class:"chart-left"},K={class:"chart-right"},Q={class:"legend-amount"},X=["innerHTML"],Y={key:0,class:"chart-more"},Z=["innerHTML"];function ee(t,a,e,y,p,u){const d=c("core-donut-chart"),m=c("util-animated-number");return n(),r("div",G,[o("div",J,[v(d,{parts:e.parts,total:e.total,label:e.label,animatedNumber:e.animatedNumber},null,8,["parts","total","label","animatedNumber"])]),o("div",K,[(n(!0),r(_,null,k(u.sortedParts,(s,l)=>(n(),r("div",{class:"legend",key:l},[o("div",{class:"legend-bullet",style:N(`background-color: ${s.color}`)},null,4),o("span",Q,[e.animatedNumber?(n(),h(m,{key:0,number:parseInt(s.count)},null,8,["number"])):(n(),r("div",{key:1,innerHTML:parseInt(s.count)},null,8,X))]),(n(),h(M(s.link?"a":"span"),{href:s.link||null,class:L(["legend-label",{"is-link":s.link}])},{default:g(()=>[$(w(s.name),1)]),_:2},1032,["href","class"]))]))),128)),e.link&&e.total>0?(n(),r("div",Y,[o("span",{innerHTML:e.link},null,8,Z)])):i("",!0)])])}const re=f(j,[["render",ee]]);export{re as C};
