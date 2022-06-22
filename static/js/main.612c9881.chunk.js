(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{12:function(e,t,a){e.exports={Button:"Button_Button__2jem8"}},14:function(e,t,a){e.exports={container:"Container_container__CKuq9"}},16:function(e,t,a){e.exports={loader:"loader_loader__2vueo"}},17:function(e,t,a){e.exports={App:"App_App__2_lM2","App-logo":"App_App-logo__28zTy","App-logo-spin":"App_App-logo-spin__H26LS","App-header":"App_App-header__1BdEd","App-link":"App_App-link__1rAto",container:"App_container__3yynG"}},4:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2r0tK",SearchForm:"Searchbar_SearchForm__1j5I2",SearchFormButton:"Searchbar_SearchFormButton__Es3GD",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__3QDYO",SearchFormInput:"Searchbar_SearchFormInput__qsQdr"}},46:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(11),o=a.n(c),l=a(10),i=a(3),s=(a(22),a(4)),u=a.n(s),m=a(0);function j(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(i.a)(a,2),c=r[0],o=r[1];return Object(m.jsx)("header",{className:u.a.Searchbar,children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==c.trim()?t(c):alert("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043b\u043e\u0432\u043e \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430")},className:u.a.SearchForm,children:[Object(m.jsx)("button",{type:"submit",className:u.a.SearchFormButton,children:Object(m.jsx)("span",{className:u.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:u.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:c,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})})}var b=a(7),d=a.n(b),h=function(e){var t=e.src,a=e.tags,n=e.dataSrc,r=e.onClick;return Object(m.jsx)("li",{onClick:r,children:Object(m.jsx)("img",{src:t,"data-src":n,alt:a,className:d.a.ImageGalleryItemImage})})};a(24);var p=function(e){var t=e.gallery,a=e.onClickImg;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("ul",{className:d.a.ImageGallery,children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,c=e.tags;return Object(m.jsx)(h,{src:n,dataSrc:r,tags:c,onClick:a},t)}))})})};var g={fetchImagesWithQuery:function(e,t){var a="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23027480-c70d45ac3781d0e477b4a7117","&image_type=photo&orientation=horizontal&per_page=12");return fetch(a).then((function(e){return e.json()}))}},_=a(12),O=a.n(_);function f(e){var t=e.handleClickBtn;return Object(m.jsx)("button",{type:"button",className:O.a.Button,onClick:t,children:"Load more"})}var S=a(8),x=a.n(S);function v(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);return Object(m.jsx)("div",{className:x.a.overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(m.jsxs)("div",{className:x.a.modal,children:[a,Object(m.jsx)("button",{className:x.a.button,type:"button",onClick:t,children:"X"})]})})}var y=a(13),I=a(14),F=a.n(I),k=a(2),w=a.n(k);w.a.arrayOf(w.a.shape(Object(y.a)({children:w.a.array},"children",w.a.object)));var A=function(e){var t=e.children;return Object(m.jsx)("div",{className:F.a.container,children:t})},C=a(15),B=a.n(C),L=a(16),N=a.n(L),G=function(){return Object(m.jsx)(B.a,{type:"MutatingDots",color:"#00BFFF",height:100,width:100,timeout:500,className:N.a.loader})},E=a(17),M=a.n(E);function R(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("idle"),o=Object(i.a)(c,2),s=o[0],u=o[1],b=Object(n.useState)(""),d=Object(i.a)(b,2),h=d[0],_=d[1],O=Object(n.useState)(1),S=Object(i.a)(O,2),x=S[0],y=S[1],I=Object(n.useState)(""),F=Object(i.a)(I,2),k=F[0],w=F[1],C=Object(n.useState)(""),B=Object(i.a)(C,2),L=B[0],N=B[1],E=Object(n.useState)(!1),R=Object(i.a)(E,2),U=R[0],D=R[1],J=Object(n.useState)(null),Q=Object(i.a)(J,2),T=Q[0],q=Q[1];Object(n.useEffect)((function(){""!==h.trim()&&(u("pending"),g.fetchImagesWithQuery(h,x).then((function(e){var t=e.hits.map((function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,tags:e.tags}}));t.length>0?(r((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))})),u("resolved")):(alert("\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ".concat(h," \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e.")),u("idle"))})).catch((function(e){q(e),u("rejected")})).finally((function(){x>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[x,h]);var K=function(e){e!==h&&(r([]),y(1),_(e))};return"idle"===s?Object(m.jsx)(A,{children:Object(m.jsx)(j,{onSubmit:K})}):"rejected"===s?Object(m.jsx)("h1",{children:T.message}):"resolved"===s||"pending"===s?Object(m.jsxs)(m.Fragment,{children:[U&&Object(m.jsx)(v,{onClose:function(){D(!U)},children:Object(m.jsx)("img",{src:k,alt:L})}),Object(m.jsxs)(A,{children:[Object(m.jsx)(j,{onSubmit:K}),a.length>0&&Object(m.jsx)(p,{onClickImg:function(e){var t=e.target.dataset.src,a=e.target.alt;w(t),N(a),D(!0)},gallery:a}),"pending"===s?Object(m.jsx)(G,{className:M.a.loader,type:"Circles",color:"#00BFFF",height:80,width:80}):Object(m.jsx)(f,{handleClickBtn:function(){y((function(e){return e+1})),u("pending")}})]})]}):void 0}a(45);o.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__29-Mk",ImageGalleryItem:"ImageGallery_ImageGalleryItem__37jex",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__3sFJk"}},8:function(e,t,a){e.exports={overlay:"Modal_overlay__2SwAo",modal:"Modal_modal__l0KmJ",button:"Modal_button__1X-Ov"}}},[[46,1,2]]]);
//# sourceMappingURL=main.612c9881.chunk.js.map