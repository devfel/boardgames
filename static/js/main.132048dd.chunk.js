(this.webpackJsonpboardgames=this.webpackJsonpboardgames||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),l=t.n(c),m=(t(9),t(1));var s=function(e){var a=e.name,t=e.description_preview,n=e.average_user_rating,c=e.images;return r.a.createElement("div",{className:"boardgame"},r.a.createElement("img",{src:c.medium,alt:a}),r.a.createElement("div",{className:"boardgame-info"},r.a.createElement("h3",null,a),r.a.createElement("span",null,(20*n).toFixed(0))),r.a.createElement("div",{className:"boardgame-desc"},r.a.createElement("h2",null,"Description:"),r.a.createElement("p",null,t)))},o=function(){var e=r.a.useState(null),a=Object(m.a)(e,2),t=a[0],n=a[1],c=r.a.useState(!0),l=Object(m.a)(c,2),o=l[0],i=l[1],u=r.a.useState(""),d=Object(m.a)(u,2),g=d[0],h=d[1];r.a.useEffect((function(){fetch("https://www.boardgameatlas.com/api/search?&client_id=JLBr5npPhV").then((function(e){return e.json()})).then((function(e){console.log(e.games),n(e.games),i(!1)}))}),[]);return!0===o||!1===t?r.a.createElement("div",{className:"loading"},"Loading..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(!0),fetch("https://www.boardgameatlas.com/api/search?name="+g+"&fuzzy_match=true&client_id=JLBr5npPhV").then((function(e){return e.json()})).then((function(e){console.log(e.games),n(e.games),i(!1)}))}},r.a.createElement("input",{className:"search-bar",type:"text",placeholder:"Search Game...",value:g,onChange:function(e){h(e.target.value)}}))),r.a.createElement("div",{className:"boardgames-container"},t.map((function(e){return r.a.createElement(s,Object.assign({key:e.id},e))}))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o,null)),document.getElementById("root"))},4:function(e,a,t){e.exports=t(10)},9:function(e,a,t){}},[[4,1,2]]]);
//# sourceMappingURL=main.132048dd.chunk.js.map