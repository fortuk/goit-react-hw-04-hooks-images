(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={Button:"Button_Button__2jem8"}},13:function(e,t,a){e.exports={container:"Container_container__CKuq9"}},15:function(e,t,a){e.exports={loader:"loader_loader__2vueo"}},16:function(e,t,a){e.exports={App:"App_App__2_lM2","App-logo":"App_App-logo__28zTy","App-logo-spin":"App_App-logo-spin__H26LS","App-header":"App_App-header__1BdEd","App-link":"App_App-link__1rAto",container:"App_container__3yynG"}},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2r0tK",SearchForm:"Searchbar_SearchForm__1j5I2",SearchFormButton:"Searchbar_SearchFormButton__Es3GD",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3QDYO",SearchFormInput:"Searchbar_SearchFormInput__qsQdr"}},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),l=a(10),i=a(3),s=(a(21),a(4)),u=a.n(s),m=a(0);var d=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(m.jsx)("header",{className:u.a.Searchbar,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?t(c):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},className:u.a.SearchForm,children:[Object(m.jsx)("button",{type:"submit",className:u.a.SearchFormButton,children:Object(m.jsx)("span",{className:u.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:u.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.target.value),console.log(e.target.value)}})]})})},h=a(7),b=a.n(h),j=function(e){var t=e.src,a=e.tags,n=e.dataSrc,r=e.onClick;return Object(m.jsx)("li",{onClick:r,children:Object(m.jsx)("img",{src:t,"data-src":n,alt:a,className:b.a.ImageGalleryItemImage})})};a(23);var p=function(e){var t=e.gallery,a=e.onClickImg;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:b.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(m.jsx)(j,{src:n,dataSrc:r,tags:c,onClick:a},t)}))})})};var g={fetchImagesWithQuery:function(e,t){var a="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23027480-c70d45ac3781d0e477b4a7117","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.json()}))}},_=a(12),f=a.n(_);function O(e){var t=e.handleClickBtn;return Object(m.jsx)("button",{type:"button",className:f.a.Button,onClick:t,children:"Load more"})}var v=a(8),S=a.n(v);function x(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(m.jsx)("div",{className:S.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(m.jsxs)("div",{className:S.a.modal,children:[a,Object(m.jsx)("button",{className:S.a.button,type:"button",onClick:t,children:"X"})]})})}var y=a(13),I=a.n(y);var F=function(e){var t=e.children;return Object(m.jsx)("div",{className:I.a.container,children:t})},k=a(14),A=a.n(k),w=a(15),C=a.n(w),B=function(){return Object(m.jsx)(A.a,{type:"MutatingDots",color:"#00BFFF",height:100,width:100,timeout:500,className:C.a.loader})},N=a(16),G=a.n(N);function L(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("idle"),o=Object(i.a)(c,2),s=o[0],u=o[1],h=Object(n.useState)(""),b=Object(i.a)(h,2),j=b[0],_=b[1],f=Object(n.useState)(1),v=Object(i.a)(f,2),S=v[0],y=v[1],I=Object(n.useState)(""),k=Object(i.a)(I,2),A=k[0],w=k[1],C=Object(n.useState)(""),N=Object(i.a)(C,2),L=N[0],E=N[1],M=Object(n.useState)(!1),R=Object(i.a)(M,2),U=R[0],D=R[1];Object(n.useEffect)((function(){""!==j.trim()&&(u("pending"),g.fetchImagesWithQuery(j,S).then((function(e){var t=e.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}));if(0===t.length&&1===S&&(alert("\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(j," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.")),u("idle")),0===t.length&&S>1)return alert("\u041a\u043e\u043d\u0435\u0446 \u0441\u043f\u0438\u0441\u043a\u0430 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439"),void u("idle");r((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),u("resolved")})))}),[S,j]),Object(n.useEffect)((function(){a.length<=12||J()}),[a]);var J=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(F,{children:Object(m.jsx)(d,{onSubmit:function(e){e!==j&&(r([]),y(1),_(e))}})}),("resolved"===s||"pending"===s)&&Object(m.jsxs)(m.Fragment,{children:[U&&Object(m.jsx)(x,{onClose:function(){D(!U)},children:Object(m.jsx)("img",{src:A,alt:L})}),a.length>0&&Object(m.jsx)(p,{onClickImg:function(e){var t=e.target.dataset.src,a=e.target.alt;w(t),E(a),D(!0)},gallery:a}),"pending"===s?Object(m.jsx)(B,{className:G.a.loader,type:"Circles",color:"#00BFFF",height:80,width:80}):Object(m.jsx)(O,{handleClickBtn:function(){y((function(e){return e+1})),u("pending")}})]})]})}a(44);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__29-Mk",ImageGalleryItem:"ImageGallery_ImageGalleryItem__37jex",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__3sFJk"}},8:function(e,t,a){e.exports={overlay:"Modal_overlay__2SwAo",modal:"Modal_modal__l0KmJ",button:"Modal_button__1X-Ov"}}},[[45,1,2]]]);
//# sourceMappingURL=main.379c2bce.chunk.js.map