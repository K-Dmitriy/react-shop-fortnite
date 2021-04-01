(this["webpackJsonpproject-shop"]=this["webpackJsonpproject-shop"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(7),r=n.n(a),s=(n(13),n(0));var o=function(){return Object(s.jsx)("nav",{className:"green darken-1",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("h1",{className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/K-Dmitriy/react-shop-fortnite",target:"_blank",rel:"noreferrer",children:"Repo"})})})]})})},l=n(8),d=n(2),j=n(3);var u=function(e){var t=e.id,n=e.img,c=e.name,i=e.description,a=e.price,r=e.handleAddOrder,o=void 0===r?Function.prototype:r;return Object(s.jsxs)("li",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:n.full_background,alt:c})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("h2",{className:"card-title",children:c}),Object(s.jsx)("p",{children:i})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"waves-effect waves-light btn",type:"button",onClick:function(){return o({id:t,name:c,price:a})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right card-price",children:[a," \u0440\u0443\u0431"]})]})]})};var b=function(e){var t=e.goods,n=void 0===t?[]:t,c=e.handleAddOrder,i=void 0===c?Function.prototype:c;return n.length?Object(s.jsx)("ul",{className:"goods",children:n.map((function(e){var t=e.mainId,n=e.price,c=e.displayName,a=e.displayDescription,r=e.granted;return Object(s.jsx)(u,{id:t,name:c,description:a,price:n.finalPrice,img:r[0].images,handleAddOrder:i},t)}))}):Object(s.jsx)("h2",{children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})};var h=function(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})},m="https://fortniteapi.io/v2/shop?lang=ru";var O=function(e){var t=e.quantity,n=e.handleBasketShow,c=void 0===n?Function.prototype:n;return Object(s.jsxs)("div",{className:"basket blue darken-4 white-text",onClick:c,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),t?Object(s.jsx)("span",{className:"basket-quantity teal lighten-2",children:t}):null]})};var p=function(e){var t=e.id,n=e.name,c=e.quantity,i=e.price,a=e.handleRemoveOrder,r=void 0===a?Function.prototype:a,o=e.incrementQuantity,l=void 0===o?Function.prototype:o,d=e.decrementQuantity,j=void 0===d?Function.prototype:d;return Object(s.jsxs)("li",{className:"collection-item",children:[n," x"," ",Object(s.jsx)("i",{className:"material-icons basket-quantity__basket blue darken-4",onClick:function(){return j(t)},children:"remove"}),c,Object(s.jsx)("i",{className:"material-icons basket-quantity__basket blue darken-4",onClick:function(){return l(t)},children:"add"}),"= ",i*c," \u0440\u0443\u0431.",Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return r(t)},children:Object(s.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})};var v=function(e){var t=e.order,n=void 0===t?[]:t,c=e.handleBasketShow,i=void 0===c?Function.prototype:c,a=e.handleRemoveOrder,r=void 0===a?Function.prototype:a,o=e.incrementQuantity,l=void 0===o?Function.prototype:o,j=e.decrementQuantity,u=void 0===j?Function.prototype:j,b=n.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),n.length?n.map((function(e){return Object(s.jsx)(p,Object(d.a)(Object(d.a)({},e),{},{handleRemoveOrder:r,incrementQuantity:l,decrementQuantity:u}),e.id)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",b," \u0440\u0443\u0431."]}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:i,children:"close"})]})};var f=function(e){var t=e.name,n=void 0===t?"":t,i=e.closeAlert,a=void 0===i?Function.prototype:i;return Object(c.useEffect)((function(){var e=setTimeout(a,1500);return function(){clearTimeout(e)}}),[n]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[Object(s.jsx)("b",{children:n})," \u2002 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})};var x=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),r=Object(j.a)(a,2),o=r[0],u=r[1],p=Object(c.useState)([]),x=Object(j.a)(p,2),y=x[0],g=x[1],N=Object(c.useState)(!1),k=Object(j.a)(N,2),q=k[0],w=k[1],F=Object(c.useState)(""),S=Object(j.a)(F,2),C=S[0],Q=S[1];function _(){w(!q)}return Object(c.useEffect)((function(){fetch(m,{headers:{Authorization:"14c50a99-f37a766e-17cedf07-c9738e9f"}}).then((function(e){if(!e.ok)throw new Error("Could not fetch ".concat(m,", received ").concat(e.status));return e.json()})).then((function(e){e.shop&&i(e.shop),u(!0)})).catch((function(e){console.error(e),u(!0)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(O,{quantity:y.length,handleBasketShow:_}),o?Object(s.jsx)(b,{goods:n,handleAddOrder:function(e){var t=y.findIndex((function(t){return t.id===e.id}));if(t<0){var n=Object(d.a)(Object(d.a)({},e),{},{quantity:1});g([].concat(Object(l.a)(y),[n]))}else{var c=y.map((function(e,n){return n===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));g(c)}Q(e.name)}}):Object(s.jsx)(h,{}),q?Object(s.jsx)(v,{order:y,handleBasketShow:_,handleRemoveOrder:function(e){g(y.filter((function(t){return t.id!==e})))},incrementQuantity:function(e){var t=y.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity+1}):t}));g(t)},decrementQuantity:function(e){var t=y.map((function(t){return t.id===e&&t.quantity>1?Object(d.a)(Object(d.a)({},t),{},{quantity:t.quantity-1}):t}));g(t)}}):null,C&&Object(s.jsx)(f,{name:C,closeAlert:function(){Q("")}})]})};var y=function(){return Object(s.jsx)("footer",{className:"page-footer green lighten-4",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/K-Dmitriy/react-shop-fortnite",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})};var g=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(x,{}),Object(s.jsx)(y,{})]})};r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f4cf5d7e.chunk.js.map