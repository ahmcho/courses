(this.webpackJsonpcoursify=this.webpackJsonpcoursify||[]).push([[0],{108:function(e,t,n){},110:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(11),r=n.n(i),s=(n(80),n(43)),o=n.n(s),l=n(59),u=n(45),d=n(31),j=n(62),b=n.n(j),h=n(37),p=Object(h.b)({name:"courses",initialState:[],reducers:{fetch:function(e,t){return Object.assign([],e,t.payload)}}}),f=p.actions.fetch,g=p.reducer,O=n(151),x=n(150),m=n(46),w=n(146),y=n(149),v=n(5),k=function(e){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(w.a,{style:{width:"150px",textAlign:"center",padding:"1em 0 0 0",margin:"1em",alignSelf:"center"},children:Object(v.jsx)(y.a,{children:Object(v.jsx)(m.a,{color:"textSecondary",gutterBottom:!0,children:Object(v.jsx)(x.a,{underline:"none",target:"_blank",href:e.data.link,children:e.data.name})})})})})},C=function(e){var t=e.list;return Object(v.jsx)(O.a,{item:!0,style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:0!==t.length&&[t.map((function(e,t){return Object(v.jsx)(k,{data:e},t)}))]})},L=n(162),I=n(158),S=n(153),F=n(159),R=n(160),N=n(164),B=n(67),T=n.n(B),D=n(161),E=n(68),G=n.n(E),P=n(163),J=n(157),W=n(155),A=n(156),K=n(154),M=(n(108),n(39)),_=n(152),q=n(12),z=Object(_.a)((function(e){return{root:{flexGrow:1,marginTop:"4em"},menuButton:{marginRight:e.spacing(2)},title:Object(M.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),grow:{flexGrow:1},search:Object(M.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(q.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(q.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(M.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"25ch","&:focus":{width:"50ch"}})}})),H=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),r=Object(u.a)(i,2),s=r[0],j=r[1],h=Object(d.c)((function(e){return e.courses})),p=z(),g=Object(d.b)(),O=h.filter((function(e){return e.name.toLocaleLowerCase().includes(n)})),x=function(){j(!1)};return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://sandbox.ahmcho.com/courses");case 2:t=e.sent,g(f(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(v.jsxs)(S.a,{children:[Object(v.jsxs)("div",{className:p.root,children:[Object(v.jsxs)(P.a,{open:s,onClose:x,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[Object(v.jsx)(K.a,{id:"alert-dialog-title",children:"Info"}),Object(v.jsx)(W.a,{children:Object(v.jsx)(A.a,{id:"alert-dialog-description",children:"This list of courses is constantly being updated."})}),Object(v.jsx)(J.a,{children:Object(v.jsx)(I.a,{onClick:x,color:"primary",autoFocus:!0,children:"OK"})})]}),Object(v.jsx)(F.a,{position:"fixed",children:Object(v.jsxs)(R.a,{children:[Object(v.jsx)(m.a,{className:p.title,variant:"h6",noWrap:!0,children:"Free Courses"}),Object(v.jsxs)("div",{className:p.search,children:[Object(v.jsx)("div",{className:p.searchIcon,children:Object(v.jsx)(T.a,{})}),Object(v.jsx)(N.a,{placeholder:"Search\u2026",classes:{root:p.inputRoot,input:p.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){e.preventDefault(),c(e.target.value.trim().toLocaleLowerCase())}})]}),Object(v.jsx)("div",{className:p.grow}),Object(v.jsx)(D.a,{edge:"end","aria-label":"account of current user","aria-haspopup":"true",onClick:function(){j(!0)},color:"inherit",children:Object(v.jsx)(G.a,{})})]})})]}),0!==h.length?Object(v.jsx)(C,{list:O}):Object(v.jsx)(L.a,{style:{display:"flex",margin:"0 auto"}})]})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,166)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))},U=Object(h.a)({reducer:{courses:g}});r.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(d.a,{store:U,children:Object(v.jsx)(H,{})})}),document.getElementById("root")),Q()},80:function(e,t,n){}},[[110,1,2]]]);
//# sourceMappingURL=main.576b62e9.chunk.js.map