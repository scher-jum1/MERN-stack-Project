(this["webpackJsonplearningxl-frontend"]=this["webpackJsonplearningxl-frontend"]||[]).push([[13],{537:function(e,t,c){"use strict";var s=c(2),a=c(4),n=c(7),i=c.n(n),r=c(0),o=c.n(r),j=c(11),l=o.a.forwardRef((function(e,t){var c=e.bsPrefix,n=e.size,r=e.toggle,l=e.vertical,d=e.className,b=e.as,u=void 0===b?"div":b,O=Object(a.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),h=Object(j.a)(c,"btn-group"),x=h;return l&&(x=h+"-vertical"),o.a.createElement(u,Object(s.a)({},O,{ref:t,className:i()(d,x,n&&h+"-"+n,r&&h+"-toggle")}))}));l.displayName="ButtonGroup",l.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=l},610:function(e,t,c){"use strict";c.r(t);var s=c(9),a=c(10),n=c(0),i=c(18),r=c(502),o=c(512),j=c(510),l=c(236),d=c(515),b=c(537),u=c(64),O=c(525),h=c(29),x=c(30),f=c(66),g=c(26),p=c(19),m=c(44),v=c(147),C=c(176),N=c(1);function S(e){e.history;var t=e.addToastAction,c=(e.user,Object(n.useState)([])),i=Object(a.a)(c,2),g=i[0],S=i[1],y=Object(n.useState)(1),P=Object(a.a)(y,2),w=P[0],A=P[1],V=Object(n.useState)(1),k=Object(a.a)(V,2),I=k[0],z=(k[1],Object(n.useState)(null)),L=Object(a.a)(z,2),E=L[0],J=(L[1],Object(n.useState)(!1)),R=Object(a.a)(J,2),T=R[0],B=R[1],D=Object(n.useState)({pagesCount:1,groupsCount:10}),F=Object(a.a)(D,2),G=F[0],K=F[1],U=function(){C.a.getVideos({page:w,perPage:G.groupsCount}).then((function(e){K(Object(s.a)(Object(s.a)({},G),{},{pagesCount:e.totalPages})),S(e.videos)}))};return Object(n.useEffect)((function(){U()}),[w,G.groupsCount]),Object(N.jsxs)(o.a,{className:"pt-4",children:[Object(N.jsx)(j.a,{className:"mb-5",children:Object(N.jsx)(l.a,{children:Object(N.jsx)("h1",{className:"text-center text-primary",children:"Video List"})})}),Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{className:"float-right mb-2",children:Object(N.jsx)(d.a,{as:b.a,id:"dropdown-variants-".concat("Info"),variant:"Info".toLowerCase(),title:"Page",onChange:function(e){console.log("ad",e)},children:[10,20,50,100].map((function(e){return Object(N.jsx)(u.a.Item,{eventKey:e,onSelect:function(e){K(Object(s.a)(Object(s.a)({},G),{},{groupsCount:e}))},children:e},e)}))},"Info")}),Object(N.jsxs)(r.a,{children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{children:[Object(N.jsx)("th",{children:"#"}),Object(N.jsx)("th",{children:"Title"}),Object(N.jsx)("th",{children:"Created At"}),Object(N.jsx)("th",{children:"Updated At"}),Object(N.jsx)("th",{className:"text-center",children:"Actions"})]})}),Object(N.jsx)("tbody",{children:g.map((function(e,t){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:t+1}),Object(N.jsx)("td",{children:e.title}),Object(N.jsx)("td",{children:Object(v.d)(e.createdAt)}),Object(N.jsx)("td",{children:Object(v.d)(e.updatedAt)}),Object(N.jsx)("td",{className:"text-center",children:Object(N.jsx)(f.b,{to:"/customer/videos/view/".concat(e.id),title:"View",children:Object(N.jsx)(h.a,{className:"cursor-pointer text-info ml-2",size:"lg",icon:x.f})})})]},t)}))})]}),Object(N.jsx)(j.a,{className:"justify-content-end",children:Object(N.jsx)(l.a,{children:Object(N.jsxs)(O.a,{className:"float-right",children:[Object(N.jsx)(O.a.First,{disabled:w<=1,onClick:function(){return A(1)}}),Object(N.jsx)(O.a.Prev,{disabled:w<=1,onClick:function(){return A(w-1)}}),Object(N.jsx)(O.a.Item,{active:!0,children:w}),Object(N.jsx)(O.a.Next,{disabled:w>=G.pagesCount,onClick:function(){return A(w+1)}}),Object(N.jsx)(O.a.Last,{disabled:w>=G.pagesCount,onClick:function(){return A(G.pagesCount)}})]})})})]}),Object(N.jsx)(m.a,{visible:T,target:E,setVisibility:B,label:"Are you sure to delete this video?",onConfirm:function(){C.a.removeVideo({id:I}).then((function(e){e.success&&(t("Video Status","Remove success",p.a.Success),U())})).catch((function(e){t("Video Status",e.error,p.a.Danger)}))}})]})}S.defaultProps={},t.default=Object(i.g)(Object(g.c)(Object(g.a)(S)))}}]);
//# sourceMappingURL=13.3838a326.chunk.js.map