import{o as c,c as f,a as n,b as y,n as x,m as v,e as _,f as g,g as d,h as a,i as r,T as h,j as m,v as p,t as u,w as C,k}from"./app.d515fec7.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";var H=[{lang:"zh-CN","demo-block":{"hide-text":"\u9690\u85CF\u4EE3\u7801","show-text":"\u663E\u793A\u4EE3\u7801","copy-text":"\u590D\u5236\u4EE3\u7801","copy-success":"\u590D\u5236\u6210\u529F"}},{lang:"en-US","demo-block":{"hide-text":"Hide","show-text":"Expand","copy-text":"Copy","copy-success":"Successful"}}];const b={data(){return{hovering:!1,copied:!1,isExpanded:!1,fixedControl:!1,codeContentWidth:0,scrollParent:null}},props:{description:{type:String,required:!0},source:{type:String,required:!0},componentName:{type:String,required:!0},options:{type:Object,default:()=>({})}},computed:{decoded(){return decodeURIComponent(this.source)},decodeDesc(){return decodeURIComponent(this.description)},compoLang(){return this.options.locales||H},langConfig(){return this.compoLang.filter(e=>e.lang===this.$lang)[0]["demo-block"]},blockClass(){return`demo-${this.$lang} demo-${this.$route.path.split("/").pop().replace(".html","")}`},iconClass(){return this.isExpanded?"caret-top":"caret-bottom"},controlText(){return this.isExpanded?this.langConfig["hide-text"]:this.langConfig["show-text"]},copiedText(){return this.copied?this.langConfig["copy-success"]:this.langConfig["copy-text"]},codeArea(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("code-content")[0].clientHeight+30:this.$el.getElementsByClassName("code-content")[0].clientHeight+20}},methods:{copyCode(){if(this.copied)return;const e=this.$el.querySelectorAll("pre")[0];e.setAttribute("contenteditable","true"),e.focus(),document.execCommand("selectAll",!1,null),this.copied=document.execCommand("copy"),e.removeAttribute("contenteditable"),setTimeout(()=>{this.copied=!1},1500)},scrollHandler(){this.$nextTick(()=>{if(this.$refs&&this.$refs.meta&&this.$refs.meta.getBoundingClientRect){const{top:e,bottom:o,left:l}=this.$refs.meta.getBoundingClientRect();this.fixedControl=o>document.documentElement.clientHeight&&e+44<=document.documentElement.clientHeight,this.$refs.control.style.left=this.fixedControl?`${l+1}px`:"0"}})},removeScrollHandler(){this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.scrollHandler)}},watch:{isExpanded(e){if(this.codeArea.style.height=e?`${this.codeAreaHeight+1}px`:"0",!e){this.fixedControl=!1,this.$refs.control.style.left="0",this.removeScrollHandler();return}setTimeout(()=>{this.scrollParent=document,this.scrollParent&&this.scrollParent.addEventListener("scroll",this.scrollHandler),this.scrollHandler()},200)}},mounted(){this.$nextTick(()=>{let e=this.$el.getElementsByClassName("code-content")[0];this.codeContentWidth=this.$el.offsetWidth,this.$el.getElementsByClassName("description").length===0&&(e.style.width="100%",e.borderRight="none")})},beforeDestroy(){this.removeScrollHandler()}},B={class:"demo-content"},T={class:"meta",ref:"meta"},N=["innerHTML"],w=["innerHTML"];function S(e,o,l,D,t,s){return c(),f("div",{class:r(["demo-block",[s.blockClass,{hover:t.hovering}]]),onMouseenter:o[3]||(o[3]=i=>t.hovering=!0),onMouseleave:o[4]||(o[4]=i=>t.hovering=!1)},[n("div",B,[l.componentName?(c(),y(_(l.componentName),x(v({key:0},e.$attrs)),null,16)):g("",!0)]),n("div",T,[s.decodeDesc?(c(),f("div",{key:0,class:"description",innerHTML:s.decodeDesc},null,8,N)):g("",!0),n("div",{class:"code-content",innerHTML:s.decoded},null,8,w)],512),n("div",{class:r(["demo-block-control",{"is-fixed":t.fixedControl}]),style:k({width:t.fixedControl?`${t.codeContentWidth}px`:"unset"}),ref:"control",onClick:o[2]||(o[2]=i=>t.isExpanded=!t.isExpanded)},[d(h,{name:"arrow-slide"},{default:a(()=>[n("i",{class:r([s.iconClass,{hovering:t.hovering},"icon"])},null,2)]),_:1}),d(h,{name:"text-slide"},{default:a(()=>[m(n("span",null,u(s.controlText),513),[[p,t.hovering]])]),_:1}),m(n("span",{class:r(["copy-action",{"copying ":t.copied}]),onClick:o[0]||(o[0]=C((...i)=>s.copyCode&&s.copyCode(...i),["stop"]))},u(s.copiedText),3),[[p,!t.copied&&t.isExpanded]]),d(h,{name:"fade"},{default:a(()=>[m(n("span",{class:"copy-action copy-action-success",onClick:o[1]||(o[1]=C((...i)=>s.copyCode&&s.copyCode(...i),["stop"]))},u(s.copiedText),513),[[p,t.copied]])]),_:1})],6)],34)}var P=E(b,[["render",S],["__scopeId","data-v-28dc8296"]]);export{P as default};
