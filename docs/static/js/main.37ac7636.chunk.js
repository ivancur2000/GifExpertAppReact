(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(8),c=n.n(r),i=n(2),s=n(10),u=n(5),o=n.n(u),j=n(0),d=function(e){var t=e.setCategories,n=Object(a.useState)(""),r=Object(i.a)(n,2),c=r[0],u=r[1];return Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),c.trim().length>0&&(t((function(e){return[c].concat(Object(s.a)(e))})),u(""))},children:Object(j.jsx)("input",{type:"text",value:c,onChange:function(e){u(e.target.value)}})})};d.prototype={setCategories:o.a.func.isRequired};var l=d,p=n(11),f=n(7),m=n.n(f),b=n(9),h=function(){var e=Object(b.a)(m.a.mark((function e(t){var n,a,r,c,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=QtwdWz9Vnx6Ny9hnVgqeY9wc6ZJ3JrGv&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=e.title,n=e.url;return Object(j.jsxs)("div",{className:"cardImg animate__animated animate__fadeIn",children:[Object(j.jsx)("img",{src:n,alt:t}),Object(j.jsx)("p",{children:t})]})},x=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){h(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),r=n.data,c=n.loading;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{className:"animate__animated animate__flipInX",children:t}),c&&Object(j.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(j.jsx)("div",{className:"cardGrid",children:r.map((function(e){return Object(j.jsx)(O,Object(p.a)({},e),e.id)}))})]})};x.prototype={category:o.a.array.isRequired};var g=x,v=function(){var e=Object(a.useState)(["Full metal Alchimist"]),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{children:"Gif Expert"}),Object(j.jsx)(l,{setCategories:r}),Object(j.jsx)("hr",{}),Object(j.jsx)("ol",{children:n.map((function(e){return Object(j.jsx)(g,{category:e},e)}))})]})},_=(n(20),n(21),document.getElementById("root"));c.a.render(Object(j.jsx)(v,{}),_)}},[[22,1,2]]]);
//# sourceMappingURL=main.37ac7636.chunk.js.map