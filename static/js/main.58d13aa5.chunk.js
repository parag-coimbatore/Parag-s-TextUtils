(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},30:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(15),l=c.n(s),o=(c(22),c(10)),r=(c(23),c(0));function i(e){return Object(r.jsx)("div",{className:"container my-5",children:Object(r.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsx)("h1",{children:"About Us "}),Object(r.jsx)("img",{src:"/images/my pic.jpg",class:"rounded mx-auto d-block",alt:"..."}),Object(r.jsx)("span",{class:"border border-warning"}),Object(r.jsx)("p",{class:"font-italic",children:"This website allows you to modify your text as per your requirement. It is designed by Parag Coimbatore. "}),Object(r.jsx)("p",{children:"You can do the following:-"}),Object(r.jsx)("p",{children:"1. Convert to Uppercase "}),Object(r.jsx)("p",{children:"2. Convert to LowerCase "}),Object(r.jsx)("p",{children:"3. Clear the text "}),Object(r.jsx)("p",{children:"4. Copy it to clipboard "})]})})}var d=c(8);function b(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(d.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(d.b,{className:"nav-link",to:"/about",children:e.about})})]}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function h(e){var t=Object(a.useState)(""),c=Object(o.a)(t,2),n=c[0],s=c[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"Container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsxs)("h1",{children:["  ",e.heading,"  "]}),Object(r.jsxs)("div",{className:"mb-13",children:[Object(r.jsx)("textarea",{className:"form-control my-3",value:n,id:"MyBox",onChange:function(e){console.log("On Changed"),s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#e9ecef":"white"},rows:"5"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-2 my-2",onClick:function(){console.log("Uppercase was clicked");var t=n.toUpperCase();s(t),e.showAlert("Converted to UpperrCase","success")},children:" Convert to UPPERCASE"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-2 my-2",onClick:function(){console.log("Uppercase was clicked");var t=n.toLowerCase();s(t),e.showAlert("Converted to LowerCase","success")},children:" Convert to lowercase"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-2 my-2",onClick:function(){console.log("Clear was clicked");s(" "),e.showAlert("Cleared the text","success")},children:" Clear the text"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-2 my-2",onClick:function(){console.log("Copy the text");var t=document.getElementById("MyBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard","success")},children:" Copy the text"}),Object(r.jsx)("button",{disabled:0===n.length,className:"btn btn-primary mx-2 my-2",onClick:function(){console.log("Removed extra spaces");var t=n.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra spaces removed","success")},children:" Remove extra spaces"})]})]}),Object(r.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(r.jsx)("h2",{style:{color:"light"===e.mode?"black":"white"},children:" Your text summary"}),Object(r.jsxs)("p",{children:[" ",n.split(" ").filter((function(e){return 0!==e.length})).length," words and ",n.length," characters "]}),Object(r.jsxs)("p",{children:[" ",.008*n.split(" ").filter((function(e){return 0!==e.length})).length," minutes to read this "]}),Object(r.jsx)("h2",{children:" Preview "}),Object(r.jsxs)("p",{children:[" ",n.length>0?n:"Nothing to preview"]})]})]})}function j(e){return Object(r.jsx)("div",{style:{height:"30px"},children:e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsxs)("strong",{children:[function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type),"  "]}),":",e.alert.msg]})})}b.defaultProps={title:"Set title here",aboutText:"About text here"};var m=c(2);var u=function(){var e=Object(a.useState)("light"),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(null),l=Object(o.a)(s,2),u=l[0],x=l[1],g=function(e,t){x({msg:e,type:t}),setTimeout((function(){x(null)}),3e3)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(d.a,{children:[Object(r.jsx)(b,{title:"TextUtils",stotra1:"Ramraksha stotra",contact:"Contact Us",about:"About",mode:c,toggleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="#042743",g("Dark mode is enabled","success"),document.title="Dark Mode Enabled",setInterval((function(){document.title="Its Amazing"}),3500),setInterval((function(){document.title="Download TexUtils Now"}),2500)):(n("light"),document.body.style.backgroundColor="white",g("Light mode is enabled","success"),document.title="Light Mode Enabled")}}),Object(r.jsx)(j,{alert:u}),Object(r.jsx)("div",{className:"container my-4",children:Object(r.jsxs)(m.c,{children:[Object(r.jsx)(m.a,{exact:!0,path:"/about",children:Object(r.jsx)(i,{heading:"About Us",mode:c})}),Object(r.jsx)(m.a,{exact:!0,path:"/",children:Object(r.jsx)(h,{showAlert:g,heading:"Enter your text to analyze",mode:c})})]})})]})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,31)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),a(e),n(e),s(e),l(e)}))};l.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),x()}},[[30,1,2]]]);
//# sourceMappingURL=main.58d13aa5.chunk.js.map