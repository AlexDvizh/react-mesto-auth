(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(18),s=n.n(c),i=n(8),r=(n(29),n(22)),l=n(3),u=n(2),p=n.p+"static/media/logo.1f1e9591.svg",d=n(0);var j=function(e){var t=e.userEmailOnHeader,n=e.logoutProfile,a=Object(u.h)();return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{className:"header__logo",src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"}),Object(d.jsxs)("div",{className:"header__links",children:[Object(d.jsx)("p",{className:"header__link header__link_email",children:"/"===a.pathname?t:""}),Object(d.jsx)(i.b,{to:"/sign-up"===a.pathname?"/sign-in":"/sign-in"===a.pathname?"/sign-up":"/sign-in",className:"header__link header__link_exit",onClick:"/"===a.pathname?n:function(){},children:"/sign-up"===a.pathname?"\u0412\u043e\u0439\u0442\u0438":"/sign-in"===a.pathname?"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f":"\u0412\u044b\u0439\u0442\u0438"})]})]})};var m=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{className:"footer__copyright",children:["\xa9 Mesto Russia ",(new Date).getFullYear()]})})},h=n.p+"static/media/pen.8667ac4a.svg",b=n.p+"static/media/plus.d86bb2ed.svg",_=n.p+"static/media/delete.cbc09a89.svg",f=n.p+"static/media/heart.49570bcb.svg",O=o.a.createContext();var g=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,c=e.onCardDelete,s=o.a.useContext(O),i=t.owner._id===s._id,r="element__delete ".concat(i?"":"element__delete_disabled"),l=t.likes.some((function(e){return e._id===s._id})),u="element__desc-like ".concat(l?"element__desc-like_type_off":"");return Object(d.jsxs)("article",{className:"element",children:[Object(d.jsxs)("div",{className:"element__photo-wrap",children:[Object(d.jsx)("img",{className:"element__photo",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(d.jsx)("button",{className:r,type:"button",children:Object(d.jsx)("img",{src:_,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0443\u0440\u043d\u044b",onClick:function(){c(t)}})})]}),Object(d.jsxs)("div",{className:"element__desc",children:[Object(d.jsx)("h2",{className:"element__desc-title",children:t.name}),Object(d.jsxs)("div",{className:"element__like",children:[Object(d.jsx)("button",{className:u,type:"button",children:Object(d.jsx)("img",{src:f,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0441\u0435\u0440\u0434\u0446\u0430",onClick:function(){a(t)}})}),Object(d.jsx)("p",{className:"element__like_counter",children:t.likes.length})]})]})]})};var x=function(e){var t=o.a.useContext(O);return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__avatar-wrap",children:[Object(d.jsx)("img",{className:"profile__avatar",alt:"\u0424\u043e\u0442\u043e \u0410\u0432\u0430\u0442\u0430\u0440\u0430",src:t.avatar}),Object(d.jsx)("div",{onClick:e.onEditAvatar,"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar-button"})]}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__title",children:t.name}),Object(d.jsx)("button",{onClick:e.onEditProfile,"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",type:"button",className:"profile__edit-button",children:Object(d.jsx)("img",{src:h,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u0440\u0443\u0447\u043a\u0438"})}),Object(d.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(d.jsx)("button",{onClick:e.onAddPlace,"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u043e\u0442\u043e",title:"+",type:"button",className:"profile__add-button",children:Object(d.jsx)("img",{src:b,alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043f\u043b\u044e\u0441\u0430"})})]}),Object(d.jsx)("section",{className:"elements",children:e.cards.map((function(t){return Object(d.jsx)(g,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})};var v=function(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__content",children:[Object(d.jsx)("button",{type:"button",className:"popup__close",onClick:e.onClose}),Object(d.jsxs)("form",{name:e.name,className:"popup__form popup__form_profile",onSubmit:e.onSubmit,children:[Object(d.jsx)("h3",{className:"popup__form-title",children:e.title}),e.children,Object(d.jsx)("button",{type:"submit",className:"popup__form-save",children:e.submitButton})]})]})})};var N=function(e){var t=Boolean(e.card);return Object(d.jsx)("div",{className:"popup popup_type_open ".concat(e.isOpen?"popup_opened":""),children:Object(d.jsxs)("form",{name:"photoViewForm",className:"popup__box",children:[Object(d.jsx)("img",{className:"popup__image",src:t?e.card.link:"#",alt:t?e.card.name:""}),Object(d.jsx)("button",{type:"button",className:"popup__close popup__close-img",onClick:e.onClose}),Object(d.jsx)("h3",{className:"popup__img-title",children:t?e.card.name:""})]})})},k=n(20),C=n(21),y=new(function(){function e(t,n){Object(k.a)(this,e),this._address=t,this._token=n}return Object(C.a)(e,[{key:"_getResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}},{key:"getCards",value:function(){var e=this;return fetch("".concat(this._address,"cards"),{headers:{authorization:this._token}}).then((function(t){return e._getResponse(t)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._address,"cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return t._getResponse(e)}))}},{key:"getUserInfoFromServer",value:function(){var e=this;return fetch("".concat(this._address,"users/me"),{headers:{authorization:this._token}}).then((function(t){return e._getResponse(t)}))}},{key:"setUserInfoFromServer",value:function(e){var t=this;return fetch("".concat(this._address,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponse(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this._address,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._address,"cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._getResponse(e)}))}},{key:"setLikeStatus",value:function(e,t){var n=this;return fetch("".concat(this._address,"cards/likes/").concat(e),{method:t?"DELETE":"PUT",headers:{authorization:this._token}}).then((function(e){return n._getResponse(e)}))}}]),e}())("https://mesto.nomoreparties.co/v1/cohort-20/","4a3cde67-2515-4699-b4fa-4d09b066c717");var S=function(e){var t=o.a.useState(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=o.a.useState(""),i=Object(l.a)(s,2),r=i[0],u=i[1],p=o.a.useContext(O);return o.a.useEffect((function(){c(p.name||""),u(p.about||"")}),[p]),Object(d.jsxs)(v,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:a,about:r})},children:[Object(d.jsx)("input",{id:"user-name",name:"userName",className:"popup__input popup__input_type_name",type:"text",value:a,onChange:function(e){c(e.target.value)},placeholder:"\u0418\u043c\u044f",required:!0,minLength:2,maxLength:40}),Object(d.jsx)("span",{id:"user-name-error",className:"popup__error"}),Object(d.jsx)("input",{id:"user-job",name:"userJob",className:"popup__input popup__input_type_job",type:"text",value:r,onChange:function(e){u(e.target.value)},placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:2,maxLength:200}),Object(d.jsx)("span",{id:"user-job-error",className:"popup__error"})]})};var E=function(e){var t=o.a.useRef();return Object(d.jsxs)(v,{name:"change-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitButton:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(d.jsx)("input",{id:"link-avatar",name:"linkAvatar",className:"popup__input popup__input_type_link-avatar",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",ref:t,required:!0}),Object(d.jsx)("span",{id:"link-avatar-error",className:"popup__error"})]})};var P=function(e){var t=o.a.useState(""),n=Object(l.a)(t,2),a=n[0],c=n[1],s=o.a.useState(""),i=Object(l.a)(s,2),r=i[0],u=i[1];return o.a.useEffect((function(){!1===e.isOpen&&(c(""),u(""))}),[e.isOpen]),Object(d.jsxs)(v,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitButton:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:r})},children:[Object(d.jsx)("input",{id:"name-photo",name:"namePhoto",className:"popup__input popup__input_type_photo-name",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",onChange:function(e){return c(e.target.value)},value:a,required:!0,minLength:2,maxLength:30}),Object(d.jsx)("span",{id:"name-photo-error",className:"popup__error"}),Object(d.jsx)("input",{id:"link-photo",name:"linkPhoto",className:"popup__input popup__input_type_link-photo",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",onChange:function(e){return u(e.target.value)},value:r,required:!0}),Object(d.jsx)("span",{id:"link-photo-error",className:"popup__error"})]})};var T=function(e){var t=e.onLogin,n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],s=o[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),u=r[0],p=r[1];return Object(d.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),t(c,u)},children:[Object(d.jsx)("h3",{className:"login-form__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)("input",{className:"login-form__input login-form__input_login-email",placeholder:"Email",type:"email",onChange:function(e){s(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"login-form__input login-form__input_login-pass",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",onChange:function(e){p(e.target.value)},required:!0}),Object(d.jsx)("button",{className:"login-form__button",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})},w=function(e){var t=e.onRegister,n=Object(a.useState)(""),o=Object(l.a)(n,2),c=o[0],s=o[1],r=Object(a.useState)(""),u=Object(l.a)(r,2),p=u[0],j=u[1];return Object(d.jsxs)("form",{className:"login-form",onSubmit:function(e){e.preventDefault(),t(c,p)},children:[Object(d.jsx)("h3",{className:"login-form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)("input",{className:"login-form__input login-form__input_login-email",placeholder:"Email",type:"email",onChange:function(e){s(e.target.value)},required:!0}),Object(d.jsx)("input",{className:"login-form__input login-form__input_login-pass",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",onChange:function(e){j(e.target.value)},required:!0}),Object(d.jsx)("button",{className:"login-form__button",type:"submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("div",{className:"login-form__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?",Object(d.jsx)(i.b,{to:"/sign-in",className:"login-form__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},A=n(23),L=n(24),U=function(e){var t=e.component,n=Object(L.a)(e,["component"]);return Object(d.jsx)(u.b,{children:function(){return n.loggedIn?Object(d.jsx)(t,Object(A.a)({},n)):Object(d.jsx)(u.a,{to:"/sign-in"})}})},D="https://auth.nomoreparties.co";function R(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}var q=n.p+"static/media/success-icon.1b6082f8.svg",I=n.p+"static/media/fail-icon.df8eddf6.svg";var z=function(e){return Object(d.jsx)("div",{className:"popup popup_type_open ".concat(e.isOpen?"popup_opened":""),children:Object(d.jsxs)("div",{className:"infoTooltip",children:[Object(d.jsx)("img",{className:"infoTooltip__image",src:e.status?q:I}),Object(d.jsx)("p",{className:"infoTooltip__text",children:e.status?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."}),Object(d.jsx)("button",{type:"button",className:"popup__close popup__close-img",onClick:e.onClose})]})})};var J=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),p=i[0],h=i[1],b=Object(a.useState)(!1),_=Object(l.a)(b,2),f=_[0],g=_[1],k=Object(a.useState)(null),C=Object(l.a)(k,2),A=C[0],L=C[1],q=Object(a.useState)({}),I=Object(l.a)(q,2),J=I[0],B=I[1],F=Object(a.useState)([]),H=Object(l.a)(F,2),M=H[0],G=H[1],V=Object(a.useState)(!1),Y=Object(l.a)(V,2),K=Y[0],Q=Y[1],W=Object(a.useState)(!1),X=Object(l.a)(W,2),Z=X[0],$=X[1],ee=Object(a.useState)(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],oe=Object(a.useState)(""),ce=Object(l.a)(oe,2),se=ce[0],ie=ce[1],re=Object(u.g)();function le(){c(!1),h(!1),g(!1),L(null),$(!1)}return o.a.useEffect((function(){y.getUserInfoFromServer().then((function(e){B(e)})).catch((function(e){console.log(e)})),y.getCards().then((function(e){G(e)})).catch((function(e){console.log(e)}))}),[]),o.a.useEffect((function(){!function(){var e=localStorage.getItem("jwt");e&&function(e){return fetch("".concat(D,"/user/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return R(e)}))}(e).then((function(e){e&&ie(e.data.email),Q(!0),re.push("/")})).catch((function(e){console.log(e)}))}()})),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(O.Provider,{value:J,children:[Object(d.jsx)(j,{userEmailOnHeader:se,logoutProfile:function(){localStorage.removeItem("jwt"),re.push("/sign-in"),Q(!1)}}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(U,{onEditProfile:function(){c(!0)},onAddPlace:function(){h(!0)},onEditAvatar:function(){g(!0)},onCardClick:function(e){L(e)},cards:M,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===J._id}));y.setLikeStatus(e._id,t).then((function(t){G((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){y.deleteCard(e._id).then((function(){G(M.filter((function(t){return t._id!==e._id})))})).catch((function(e){console.log(e)}))},component:x,exact:!0,path:"/",loggedIn:K}),Object(d.jsx)(U,{component:m,exact:!0,path:"/",loggedIn:K}),Object(d.jsx)(u.b,{path:"/sign-in",children:Object(d.jsx)(T,{onLogin:function(e,t){(function(e,t){return fetch("".concat(D,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return R(e)}))})(t,e).then((function(t){t&&(Q(!0),ie(e),re.push("/"),localStorage.setItem("jwt",t.token))})).catch((function(){ae(!1),$(!0)}))}})}),Object(d.jsx)(u.b,{path:"/sign-up",children:Object(d.jsx)(w,{onRegister:function(e,t){(function(e,t){return fetch("".concat(D,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then((function(e){return console.log(e),R(e)}))})(t,e).then((function(e){$(!0),e&&(ae(!0),re.push("/sign-in"))})).catch((function(){ae(!1),$(!0)}))}})}),Object(d.jsx)(u.b,{children:K?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsx)(u.a,{to:"/sign-up"})})]}),Object(d.jsx)(z,{isOpen:Z,onClose:le,status:ne}),Object(d.jsx)(S,{isOpen:n,onClose:le,onUpdateUser:function(e){y.setUserInfoFromServer(e).then((function(e){B(e),le()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(P,{isOpen:p,onClose:le,onAddPlace:function(e){y.addNewCard(e).then((function(e){G([e].concat(Object(r.a)(M))),le()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(v,{name:"delete-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitButton:"\u0414\u0430"}),Object(d.jsx)(E,{isOpen:f,onClose:le,onUpdateAvatar:function(e){y.setUserAvatar(e).then((function(e){B(e),le()})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(N,{isOpen:A,card:A,onClose:le})]})})};s.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(J,{})})}),document.querySelector(".root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.dca00144.chunk.js.map