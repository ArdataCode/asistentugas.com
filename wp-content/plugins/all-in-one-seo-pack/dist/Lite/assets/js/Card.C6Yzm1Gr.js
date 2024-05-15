import{e as y}from"./links.CKSg78-h.js";import{C as k}from"./Tooltip.DcUmvaHX.js";import{a as b,S as p}from"./Caret.Cuasz9Up.js";import{a as B}from"./index.DX4OhBfI.js";import{T}from"./Slide.BfXXFx9A.js";import{y as l,o,c as r,I as g,a as i,q as a,H as q,t as w,l as c,m as u,D as A,d as n}from"./vue.esm-bundler.DzelZkHk.js";import{_ as H}from"./_plugin-vue_export-helper.BN1snXvA.js";const N={setup(){return{settingsStore:y()}},emits:["close-card","toggle-card"],components:{CoreTooltip:k,SvgCaret:b,SvgCircleQuestionMark:B,SvgClose:p,TransitionSlide:T},props:{slug:{type:String,required:!0},headerText:String,toggles:{type:Boolean,default(){return!0}},hideHeader:Boolean,noSlide:Boolean,closes:Boolean,saveToggleStatus:{type:Boolean,default(){return!0}},disabled:Boolean,cardClass:{type:Object,default(){return{}}}},watch:{toggles(t){const s=this.slug;t&&!this.settingsStore.settings.toggledCards[s]&&this.settingsStore.toggleCard({slug:s,shouldSave:!0})}},methods:{toggleCard(){this.settingsStore.toggleCard({slug:this.slug,shouldSave:this.saveToggleStatus}),this.$emit("toggle-card")}}},V={class:"text"},D={class:"header-icon"},L={class:"header-extra"},M={key:1,class:"content"},j={key:0,class:"content"},z={key:1,class:"content"};function E(t,s,e,d,I,m){const f=l("svg-circle-question-mark"),C=l("core-tooltip"),S=l("svg-caret"),v=l("svg-close"),h=l("transition-slide");return o(),r("div",{class:g(["aioseo-card",{disabled:e.disabled,...e.cardClass}])},[e.hideHeader?n("",!0):(o(),r("div",{key:0,class:g(["header",[{toggles:e.toggles}]]),onClick:s[2]||(s[2]=(..._)=>m.toggleCard&&m.toggleCard(..._))},[i("div",V,[i("div",D,[a(t.$slots,"header-icon")]),i("div",{class:"header-title",onClick:s[0]||(s[0]=q(()=>{},["stop"]))},[a(t.$slots,"header",{},()=>[i("span",null,w(e.headerText),1)])]),t.$slots.tooltip?(o(),c(C,{key:0},{tooltip:u(()=>[a(t.$slots,"tooltip")]),default:u(()=>[A(f)]),_:3})):n("",!0),i("div",L,[a(t.$slots,"header-extra")])]),!e.closes&&e.toggles&&d.settingsStore.settings.toggledCards&&!e.noSlide&&!e.disabled?(o(),c(S,{key:0,class:g({rotated:!d.settingsStore.settings.toggledCards[e.slug]})},null,8,["class"])):n("",!0),e.closes?(o(),c(v,{key:1,onClick:s[1]||(s[1]=_=>t.$emit("close-card",!0))})):n("",!0)],2)),t.$slots.disabled&&e.disabled?(o(),r("div",M,[a(t.$slots,"disabled")])):n("",!0),(d.settingsStore.settings.toggledCards||e.noSlide)&&!e.disabled?(o(),c(h,{key:2,active:d.settingsStore.settings.toggledCards[e.slug]&&e.toggles||e.noSlide},{default:u(()=>[t.$slots["before-tabs"]?(o(),r("div",j,[a(t.$slots,"before-tabs")])):n("",!0),a(t.$slots,"tabs"),t.$slots.default?(o(),r("div",z,[a(t.$slots,"default")])):n("",!0)]),_:3},8,["active"])):n("",!0)],2)}const J=H(N,[["render",E]]);export{J as C};
