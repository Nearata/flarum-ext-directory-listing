(()=>{var t={n:r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},d:(r,e)=>{for(var a in e)t.o(e,a)&&!t.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:e[a]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};(()=>{"use strict";function e(t,r){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},e(t,r)}function a(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,e(t,r)}t.r(r);const o=flarum.core.compat["common/resolvers/DefaultResolver"];var n=function(t){function r(){return t.apply(this,arguments)||this}return a(r,t),r.prototype.makeKey=function(){var t=m.route.param("path");return t||(t=""),t},r}(t.n(o)());const i=flarum.core.compat["forum/app"];var c=t.n(i),s=function(){function t(){this.loading=void 0,this.data=void 0,this.loading=!0,this.data=[]}var r=t.prototype;return r.isLoading=function(){return this.loading},r.loadData=function(){var t=this;this.data=[],this.loading=!0;var r=m.route.param("path");r||(r=""),c().request({method:"POST",url:c().forum.attribute("apiUrl")+"/nearata/directoryListing",body:{path:r}}).then((function(r){t.data=r.data,t.loading=!1,m.redraw()})).catch((function(){t.loading=!1,m.redraw()}))},r.getData=function(){return this.data},t}();const l=flarum.core.compat["common/Component"];var u=t.n(l);const p=flarum.core.compat["common/components/Link"];var d=t.n(p);const f=flarum.core.compat["common/helpers/icon"];var h=t.n(f),y=function(t){function r(){return t.apply(this,arguments)||this}a(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r)},e.oncreate=function(r){t.prototype.oncreate.call(this,r)},e.view=function(){var t=m.route.param().path;if(t){var r=t.split("/");r.pop();var e=c().route("nearataDirectoryListing",{path:r.join()});return m(d(),{class:"DirectoryTreeBackItem",href:e},m("div",{class:"icon"},h()("fas fa-level-up-alt")),m("div",null,".."))}},r}(u()),v=function(t){function r(){return t.apply(this,arguments)||this}a(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r)},e.oncreate=function(r){t.prototype.oncreate.call(this,r);for(var e=this.element.querySelectorAll(".item"),a=0;a<e.length-1;a++){var o=document.createElement("div");o.classList.add("separator"),o.innerHTML="/",e[a].after(o)}},e.view=function(){var t=m.route.param("path"),r="";return m("div",{class:"DirectoryTreeBreadcrumb"},m(d(),{class:"item",href:c().route("nearataDirectoryListing")},c().translator.trans("nearata-directory-listing.forum.breadcrumb_home_label")),t&&t.split("/").map((function(t,e,a){return r+=e>0?"/"+t:t,m(d(),{class:"item",href:c().route("nearataDirectoryListing",{path:r})},t)})))},r}(u());const g=flarum.core.compat["common/helpers/humanTime"];var b=t.n(g);function D(){return D=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},D.apply(this,arguments)}var x=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],B=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],L=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],S=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],w=function(t,r,e){var a=t;return"string"==typeof r||Array.isArray(r)?a=t.toLocaleString(r,e):!0!==r&&void 0===e||(a=t.toLocaleString(void 0,e)),a},P=function(t){function r(){for(var r,e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return(r=t.call.apply(t,[this].concat(a))||this).data=void 0,r.external=void 0,r.externalHref=void 0,r}a(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r),this.data=this.attrs.data,this.external="dir"!==this.data.type,this.externalHref=this.external&&location.origin+"/assets/nearataDirectoryListing/"+this.data.path},e.oncreate=function(r){t.prototype.oncreate.call(this,r)},e.view=function(){return m(d(),{class:"DirectoryTreeItem",external:this.external,href:this.external?this.externalHref:c().route("nearataDirectoryListing",{path:this.data.path})},m("div",{class:"icon"},this.external?h()("fas fa-file"):h()("fas fa-folder")),m("div",{class:"fileName"},this.data.filename,this.data.extension&&"."+this.data.extension),m("div",{class:"size"},this.data.size?function(t,r){if(!Number.isFinite(t))throw new TypeError("Expected a finite number, got "+typeof t+": "+t);var e=(r=D({bits:!1,binary:!1,space:!0},r)).bits?r.binary?S:L:r.binary?B:x,a=r.space?" ":"";if(r.signed&&0===t)return" 0"+a+e[0];var o,n=t<0,i=n?"-":r.signed?"+":"";if(n&&(t=-t),void 0!==r.minimumFractionDigits&&(o={minimumFractionDigits:r.minimumFractionDigits}),void 0!==r.maximumFractionDigits&&(o=D({maximumFractionDigits:r.maximumFractionDigits},o)),t<1)return i+w(t,r.locale,o)+a+e[0];var c=Math.min(Math.floor(r.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),e.length-1);return t/=Math.pow(r.binary?1024:1e3,c),o||(t=t.toPrecision(3)),i+w(Number(t),r.locale,o)+a+e[c]}(this.data.size):"-"),m("div",{class:"date"},b()(window.dayjs.unix(this.data.timestamp).toISOString())))},r}(u());const T=flarum.core.compat["common/components/LoadingIndicator"];var _=t.n(T);const O=flarum.core.compat["common/components/Placeholder"];var M=t.n(O),I=function(t){function r(){for(var r,e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return(r=t.call.apply(t,[this].concat(a))||this).directoryState=void 0,r}a(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r),this.directoryState=this.attrs.state,this.directoryState.loadData()},e.oncreate=function(r){t.prototype.oncreate.call(this,r)},e.view=function(){var t=c().translator.trans("nearata-directory-listing.forum.placeholder_empty_folder_text");return m("div",{class:"DirectoryTree"},m(v,null),m(y,null),this.directoryState.isLoading()&&m(_(),null),this.directoryState.isLoading()||!this.directoryState.getData().length&&m(M(),{text:t}),m("div",{class:"DirectoryTreeList"},this.directoryState.getData().map((function(t){return m(P,{data:t})}))))},r}(u());const j=flarum.core.compat["common/components/Button"];var N=t.n(j);const k=flarum.core.compat["common/components/Page"];var A=t.n(k);const E=flarum.core.compat["common/helpers/listItems"];var F=t.n(E);const z=flarum.core.compat["common/utils/ItemList"];var C=t.n(z);const G=flarum.core.compat["common/utils/extractText"];var H=t.n(G);const Y=flarum.core.compat["forum/components/IndexPage"];var Z=t.n(Y),q=function(t){function r(){for(var r,e=arguments.length,a=new Array(e),o=0;o<e;o++)a[o]=arguments[o];return(r=t.call.apply(t,[this].concat(a))||this).directoryState=void 0,r}a(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r),this.directoryState=new s},e.oncreate=function(r){t.prototype.oncreate.call(this,r),c().setTitle(H()(c().translator.trans("nearata-directory-listing.forum.page_title"))),c().setTitleCount(0)},e.actionItems=function(){var t=this,r=new(C());return r.add("refresh",N().component({title:c().translator.trans("nearata-directory-listing.forum.refresh_action_button_label"),icon:"fas fa-sync",className:"Button Button--icon",onclick:function(){return t.directoryState.loadData()}})),r},e.view=function(){return m("div",{className:"NearataDirectoryListing"},Z().prototype.hero(),m("div",{className:"container"},m("div",{class:"sideNavContainer"},m("nav",{class:"IndexPage-nav sideNav"},m("ul",null,F()(Z().prototype.sidebarItems().toArray()))),m("div",{class:"IndexPage-results sideNavOffset"},m("div",{className:"DirectoryListingPage-toolbar"},m("ul",{className:"action"},F()(this.actionItems().toArray()))),m(I,{state:this.directoryState})))))},r}(A());const K=flarum.core.compat["common/components/LinkButton"];var R=t.n(K);const U=flarum.core.compat["common/extend"];c().initializers.add("nearata-directory-listing",(function(){c().routes.nearataDirectoryListing={path:"/directoryListing",component:q,resolverClass:n},(0,U.extend)(Z().prototype,"navItems",(function(t){t.add("nearataDirectoryListing",m(R(),{icon:"fas fa-folder",href:c().route("nearataDirectoryListing")},c().translator.trans("nearata-directory-listing.forum.page_title")),-1)}))}))})(),module.exports=r})();
//# sourceMappingURL=forum.js.map