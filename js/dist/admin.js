(()=>{var e={n:t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},d:(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};(()=>{"use strict";e.r(t);const r=flarum.core.compat["admin/app"];var a=e.n(r);a().initializers.add("nearata-directory-listing",(function(){a().extensionData.for("nearata-directory-listing").registerSetting({setting:"nearata-directory-listing.proxy_download",type:"boolean",label:a().translator.trans("nearata-directory-listing.admin.settings.proxy_download.label")}).registerSetting({setting:"nearata-directory-listing.folder_suffix",type:"text",label:a().translator.trans("nearata-directory-listing.admin.settings.folder_suffix.label")}).registerPermission({icon:"fas fa-download",label:a().translator.trans("nearata-directory-listing.admin.permissions.download_files_label"),permission:"nearata-directory-listing.download-files",allowGuest:!0},"view")}))})(),module.exports=t})();
//# sourceMappingURL=admin.js.map