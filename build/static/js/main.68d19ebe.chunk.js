(this.webpackJsonpeliteeagle2021=this.webpackJsonpeliteeagle2021||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(6),o=n.n(a),l=(n(12),n(3)),r=n(7),i=(n(13),n(0));function d(e){return Object(i.jsx)("div",{children:Object(i.jsx)("nav",{className:"bg-dark navbar navbar-expand-lg navbar-light bg-light px-4",style:{color:"white"},children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"text-light navbar-brand",href:"#",children:e.tittle}),Object(i.jsx)("button",{className:"navbar-toggler bg-light",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(i.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(i.jsx)("li",{className:" nav-item",children:Object(i.jsx)("a",{className:"text-light nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(i.jsx)("li",{className:" nav-item",children:Object(i.jsx)("a",{className:"text-light nav-link",href:"#",children:"About"})})]}),e.searchBar?Object(i.jsxs)("form",{className:"d-flex",children:[Object(i.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(i.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}):" "]})]})})})}d.defaultProps={tittle:"TODOS List"};var b=function(e){var t=e.addTodo,n=Object(s.useState)(""),c=Object(l.a)(n,2),a=c[0],o=c[1],r=Object(s.useState)(""),d=Object(l.a)(r,2),b=d[0],j=d[1];return Object(i.jsx)("div",{children:Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a&&b?(t(a,b),o(""),j("")):alert("Title And Desc Cannot be Blank..")},className:"container my-4 py-2 text-secondary",style:{background:"rgb(42,19,37)"},children:[Object(i.jsx)("h4",{className:"text-center",children:"Add Todo"}),Object(i.jsxs)("div",{className:"form-group py-2 ",children:[Object(i.jsx)("label",{htmlFor:"todoTitle",children:"Todo Title"}),Object(i.jsx)("input",{type:"text",value:a,onChange:function(e){o(e.target.value)},className:"form-control",id:"todoTitle"})]}),Object(i.jsxs)("div",{className:"form-group py-2",children:[Object(i.jsx)("label",{htmlFor:"todoDesc",children:"Description"}),Object(i.jsx)("input",{type:"text",value:b,onChange:function(e){j(e.target.value)},className:"form-control",id:"todoDesc"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-success",children:"Add Todo"})]})})},j=function(e){var t=e.todo,n=e.onDelete;return Object(i.jsxs)("div",{className:" py-2 px-3 Todositem1",style:{background:"darkkhaki",border:"0.2rem solid #ffb1b1",color:"darkgreen"},children:[Object(i.jsxs)("h4",{children:[Object(i.jsx)("span",{className:"item1",children:" \u261b \u2002"}),Object(i.jsxs)("span",{children:["  ",t.title," "]})]}),Object(i.jsxs)("p",{style:{color:"navy"},children:[Object(i.jsx)("span",{className:"item1",children:" \u2712 \u2002"}),Object(i.jsx)("span",{className:"items2",children:t.desc})]}),Object(i.jsx)("button",{className:"btn btn-sm btn-danger mx-5",onClick:function(){return n(t)},children:" Delete "})]})},h=function(e){return Object(i.jsxs)("div",{className:"container p-4 ",style:{background:"rgb(12,19,26)",width:"100vw"},children:[Object(i.jsx)("h4",{className:"text-center my-3 py-3 text-success ",children:"TODOS List"}),Object(i.jsx)("div",{className:"TodosCont",children:0===e.todos.length?Object(i.jsx)("h4",{className:"text-success",children:"No Todos To Display..!"}):e.todos.map((function(t){return Object(i.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))})]})},u=function(){return Object(i.jsx)("footer",{className:"bg-dark text-light text-center my-2",style:{position:"relative",top:"8.7vh",width:"100%"},children:Object(i.jsx)("p",{className:"py-3",children:"Copyright \xa9 MyTodos.in"})})};var m=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(s.useState)(e),n=Object(l.a)(t,2),c=n[0],a=n[1];return Object(s.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"main-cont",children:[Object(i.jsx)(d,{tittle:"My ToDos"}),Object(i.jsx)(b,{addTodo:function(e,t){console.log("im adding Todo",e,t);var n={sno:0===c.length?1:c[c.length-1].sno+1,title:e,desc:t};a([].concat(Object(r.a)(c),[n])),console.log(n),console.log("itsworking addTodooooo")}}),Object(i.jsx)(h,{todos:c,onDelete:function(e){console.log("I'm onDelete for todo",e),a(c.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(c))}}),Object(i.jsx)(u,{})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root")),x()}},[[15,1,2]]]);
//# sourceMappingURL=main.68d19ebe.chunk.js.map