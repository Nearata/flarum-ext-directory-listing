(()=>{var t={n:r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},d:(r,e)=>{for(var a in e)t.o(e,a)&&!t.o(r,a)&&Object.defineProperty(r,a,{enumerable:!0,get:e[a]})},o:(t,r)=>Object.prototype.hasOwnProperty.call(t,r),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},r={};(()=>{"use strict";function e(t,r){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},e(t,r)}function a(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,e(t,r)}t.r(r);const i=flarum.core.compat["common/resolvers/DefaultResolver"];var n=function(t){function r(){return t.apply(this,arguments)||this}return a(r,t),r.prototype.makeKey=function(){var t=m.route.param("path");return t||(t=""),t},r}(t.n(i)());const o=flarum.core.compat["forum/app"];var c=t.n(o),s=function(){function t(){this.loading=void 0,this.data=void 0,this.loading=!0,this.data=[]}var r=t.prototype;return r.isLoading=function(){return this.loading},r.loadData=function(){var t=this,r=m.route.param("path");r||(r=""),c().request({method:"POST",url:c().forum.attribute("apiUrl")+"/nearata/directoryListing",body:{path:r}}).then((function(r){t.data=r.data,t.loading=!1,m.redraw()})).catch((function(){t.loading=!1,m.redraw()}))},r.getData=function(){return this.data},t}();const l=flarum.core.compat["common/Component"];var u=t.n(l);const p=flarum.core.compat["common/components/Link"];var f=t.n(p);const d=flarum.core.compat["common/helpers/icon"];var h=t.n(d),y=function(t){function r(){return t.apply(this,arguments)||this}a(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r)},e.oncreate=function(r){t.prototype.oncreate.call(this,r)},e.view=function(){var t=m.route.param().path;if(t){var r=t.split("/");r.pop();var e=c().route("nearataDirectoryListing",{path:r.join()});return m(f(),{class:"DirectoryTreeBackItem",href:e},m("div",{class:"icon"},h()("fas fa-level-up-alt")),m("div",null,".."))}},r}(u()),v=function(t){function r(){return t.apply(this,arguments)||this}a(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r)},e.oncreate=function(r){t.prototype.oncreate.call(this,r)},e.view=function(){var t=m.route.param("path"),r="";return m("div",{class:"DirectoryTreeBreadcrumb"},m(f(),{class:"item",href:c().route("nearataDirectoryListing")},"Home"),t&&t.split("/").map((function(t,e,a){return r+=""+t,e!==a.length-1&&(r+="/"),m(f(),{class:"item",href:c().route("nearataDirectoryListing",{path:r})},t)})))},r}(u());const g=flarum.core.compat["common/utils/humanTime"];var b=t.n(g);function x(){return x=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t},x.apply(this,arguments)}var D=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],B=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],L=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],S=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],w=function(t,r,e){var a=t;return"string"==typeof r||Array.isArray(r)?a=t.toLocaleString(r,e):!0!==r&&void 0===e||(a=t.toLocaleString(void 0,e)),a},P=function(t){function r(){for(var r,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return(r=t.call.apply(t,[this].concat(a))||this).data=void 0,r.external=void 0,r.externalHref=void 0,r}a(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r),this.data=this.attrs.data,this.external="dir"!==this.data.type,this.externalHref=this.external&&location.origin+"/assets/nearataDirectoryListing/"+this.data.path},e.oncreate=function(r){t.prototype.oncreate.call(this,r)},e.view=function(){return m(f(),{class:"DirectoryTreeItem",external:this.external,href:this.external?this.externalHref:c().route("nearataDirectoryListing",{path:this.data.path})},m("div",{class:"icon"},this.external?h()("fas fa-file"):h()("fas fa-folder")),m("div",{class:"fileName"},this.data.filename,this.data.extension&&"."+this.data.extension),m("div",{class:"size"},this.data.size?function(t,r){if(!Number.isFinite(t))throw new TypeError("Expected a finite number, got "+typeof t+": "+t);var e=(r=x({bits:!1,binary:!1,space:!0},r)).bits?r.binary?S:L:r.binary?B:D,a=r.space?" ":"";if(r.signed&&0===t)return" 0"+a+e[0];var i,n=t<0,o=n?"-":r.signed?"+":"";if(n&&(t=-t),void 0!==r.minimumFractionDigits&&(i={minimumFractionDigits:r.minimumFractionDigits}),void 0!==r.maximumFractionDigits&&(i=x({maximumFractionDigits:r.maximumFractionDigits},i)),t<1)return o+w(t,r.locale,i)+a+e[0];var c=Math.min(Math.floor(r.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),e.length-1);return t/=Math.pow(r.binary?1024:1e3,c),i||(t=t.toPrecision(3)),o+w(Number(t),r.locale,i)+a+e[c]}(this.data.size):"-"),m("div",{class:"date"},b()(window.dayjs.unix(this.data.timestamp).toISOString())))},r}(u());const O=flarum.core.compat["common/components/LoadingIndicator"];var T=t.n(O);const M=flarum.core.compat["common/components/Placeholder"];var _=t.n(M),j=function(t){function r(){for(var r,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return(r=t.call.apply(t,[this].concat(a))||this).directoryState=void 0,r}a(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r),this.directoryState=this.attrs.state,this.directoryState.loadData()},e.oncreate=function(r){t.prototype.oncreate.call(this,r)},e.view=function(){if(this.directoryState.isLoading())return m(T(),null);var t=c().translator.trans("nearata-directory-listing.forum.placeholder_empty_folder_text");return m("div",{class:"DirectoryTreeList"},m(v,null),m(y,null),!this.directoryState.getData().length&&m(_(),{text:t}),this.directoryState.getData().map((function(t){return m(P,{data:t})})))},r}(u());const I=flarum.core.compat["common/components/Page"];var N=t.n(I);const k=flarum.core.compat["common/helpers/listItems"];var F=t.n(k);const A=flarum.core.compat["common/utils/extractText"];var E=t.n(A);const z=flarum.core.compat["forum/components/IndexPage"];var C=t.n(z),G=function(t){function r(){for(var r,e=arguments.length,a=new Array(e),i=0;i<e;i++)a[i]=arguments[i];return(r=t.call.apply(t,[this].concat(a))||this).directoryState=void 0,r}a(r,t);var e=r.prototype;return e.oninit=function(r){t.prototype.oninit.call(this,r),this.directoryState=new s},e.oncreate=function(r){t.prototype.oncreate.call(this,r),c().setTitle(E()(c().translator.trans("nearata-directory-listing.forum.page_title"))),c().setTitleCount(0)},e.view=function(){return m("div",{className:"NearataDirectoryListing"},C().prototype.hero(),m("div",{className:"container"},m("div",{class:"sideNavContainer"},m("nav",{class:"IndexPage-nav sideNav"},m("ul",null,F()(C().prototype.sidebarItems().toArray()))),m("div",{class:"IndexPage-results sideNavOffset"},m(j,{state:this.directoryState})))))},r}(N());const H=flarum.core.compat["common/components/LinkButton"];var Y=t.n(H);const Z=flarum.core.compat["common/extend"];c().initializers.add("nearata-directory-listing",(function(){c().routes.nearataDirectoryListing={path:"/directoryListing",component:G,resolverClass:n},(0,Z.extend)(C().prototype,"navItems",(function(t){t.add("nearataDirectoryListing",m(Y(),{icon:"fas fa-folder",href:c().route("nearataDirectoryListing")},c().translator.trans("nearata-directory-listing.forum.page_title")),-1)}))}))})(),module.exports=r})();
//# sourceMappingURL=forum.js.map