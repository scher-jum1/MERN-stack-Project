(this["webpackJsonplearningxl-frontend"]=this["webpackJsonplearningxl-frontend"]||[]).push([[15],{495:function(e,t,c){"use strict";c.r(t);var a=c(8),n=c(1),i=c.n(n),r=c(15),s=c(402),l=c(400),o=c(191),d=c(137),j=c(409),u=c(430),b=c.n(u),h=c(22),O=c(16),x=c(140),f=c(21),p=c(0);function m(e){var t=e.history,c=e.addToastAction,r=e.match,u=Object(n.useState)((function(){return r.params.id})),h=Object(a.a)(u,2),m=h[0],g=h[1],v=Object(n.useState)(""),S=Object(a.a)(v,2),V=S[0],y=S[1],k=Object(n.useState)(null),N=Object(a.a)(k,2),A=N[0],w=N[1],C=Object(n.useState)(!1),D=Object(a.a)(C,2),B=D[0],L=D[1],T=Object(n.useState)({}),F=Object(a.a)(T,2),G=F[0],J=F[1],P=Object(n.useRef)(null),R=function(e){e.preventDefault(),e.stopPropagation(),L(!0),m?x.a.updateVideo({id:m,title:V,file:A}).then((function(){c("Alert","Success",O.a.Success),t.goBack()})):x.a.addVideo({title:V,file:A}).then((function(){c("Alert","Success",O.a.Success),y(""),w(null),L(!1),P.current.value=""})).catch((function(e){c("Alert",e.error,O.a.Danger),L(!1)}))},q=function(){x.a.getVideo({id:m}).then((function(e){J(e.data),y(e.data.title)}),(function(e){return c("Loading Video faild",e.error,O.a.Danger)}))};return Object(n.useEffect)((function(){m&&q()}),[m]),console.log("oldVideo",G),Object(p.jsxs)(s.a,{children:[Object(p.jsx)(l.a,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(d.a,{variant:"link",onClick:function(){return t.goBack()},children:Object(p.jsx)("span",{className:"h6",children:"Back"})})})}),Object(p.jsx)(l.a,{className:"mb-5",children:Object(p.jsx)(o.a,{children:Object(p.jsx)("h1",{className:"text-primary text-center",children:"".concat(m?"Update Video":"Add a new Video")})})}),Object(p.jsxs)(j.a,{onSubmit:function(e){return R(e)},children:[Object(p.jsx)(l.a,{children:Object(p.jsx)(o.a,{md:12,children:Object(p.jsxs)(j.a.Group,{children:[Object(p.jsx)(j.a.Label,{children:Object(p.jsx)("strong",{children:"Video Title"})}),Object(p.jsx)(j.a.Control,{name:"title",type:"text",placeholder:"Video title",required:!0,onChange:function(e){return y(e.target.value)},value:V})]})})}),Object(p.jsxs)(l.a,{children:[!G.src&&Object(p.jsx)(o.a,{md:4,children:Object(p.jsxs)(j.a.Group,{children:[Object(p.jsx)(j.a.Label,{children:Object(p.jsx)("strong",{children:"Add a new Video file"})}),Object(p.jsx)(j.a.File,{ref:P,id:"file",name:"file",multiple:!1,onChange:function(e){return w(e.target.files[0])}})]})}),m&&G.src&&Object(p.jsxs)(i.a.Fragment,{children:[Object(p.jsx)(o.a,{md:4,children:G.src&&Object(p.jsx)("div",{style:{position:"relative",paddingTop:"56.25%"},className:"player-wrapper",children:Object(p.jsx)(b.a,{className:"react-player",url:"".concat(f.b,"/").concat(G.src),style:{position:"absolute",top:0,left:0},controls:!0,width:"100%",height:"100%"})})}),Object(p.jsx)(o.a,{md:4,children:Object(p.jsx)(d.a,{className:"right",variant:"danger",onClick:function(){x.a.removeVideo({id:m}).then((function(){c("Alert","Video has been deleted",O.a.Success),g(m),q()})).catch((function(e){c("[".concat(e,"] ").concat(e.error),"".concat(e.error),O.a.Danger)}))},children:"Remove"})})]})]}),Object(p.jsx)(l.a,{children:Object(p.jsx)(o.a,{className:"text-right",children:Object(p.jsx)(d.a,{className:"right",variant:"primary",type:"submit",disabled:B,children:"Submit"})})})]})]})}m.defaultProps={id:0},t.default=Object(r.g)(Object(h.c)(Object(h.a)(m)))}}]);
//# sourceMappingURL=15.c8907aa5.chunk.js.map