(this["webpackJsonpproject-shop"]=this["webpackJsonpproject-shop"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),a=r(6),i=r.n(a),s=(r(13),r(0));var o=function(){return Object(s.jsx)("nav",{className:"green darken-1",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("h1",{className:"brand-logo",children:"React Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/K-Dmitriy/react-shop-fortnite",target:"_blank",rel:"noreferrer",children:"Repo"})})})]})})},l=r(7),d=r(8),j=r(1);var u=function(e,t){var r=t.type,n=t.payload;switch(r){case"add-good-to-order":var c=e.order.findIndex((function(e){return e.id===n.id})),a=null;if(c<0){var i=Object(j.a)(Object(j.a)({},n),{},{quantity:1});a=[].concat(Object(d.a)(e.order),[i])}else a=e.order.map((function(e,t){return t===c?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));return Object(j.a)(Object(j.a)({},e),{},{order:a,alertName:n.name});case"remove-good-from-order":return Object(j.a)(Object(j.a)({},e),{},{order:e.order.filter((function(e){return e.id!==n}))});case"show-basket":return Object(j.a)(Object(j.a)({},e),{},{isBasketShow:!e.isBasketShow});case"increment-quantity":return Object(j.a)(Object(j.a)({},e),{},{order:e.order.map((function(e){return e.id===n?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}))});case"decrement-quantity":return Object(j.a)(Object(j.a)({},e),{},{order:e.order.map((function(e){return e.id===n&&e.quantity>1?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity-1}):e}))});case"close-alert":return Object(j.a)(Object(j.a)({},e),{},{alertName:""});case"get-data":return n.shop?Object(j.a)(Object(j.a)({},e),{},{goods:n.shop,isLoad:!0}):Object(j.a)(Object(j.a)({},e),{},{isLoad:!0});case"get-data-error":return console.error(n),Object(j.a)(Object(j.a)({},e),{},{isLoad:!0});default:return console.error("Unknown action"),e}},b=Object(n.createContext)(),h={goods:[],isLoad:!1,order:[],isBasketShow:!1,alertName:""},O=function(e){var t=e.children,r=Object(n.useReducer)(u,h),c=Object(l.a)(r,2),a=c[0],i=c[1];return a.getData=function(e){return i({type:"get-data",payload:e})},a.getDataError=function(e){return i({type:"get-data-error",payload:e})},a.handleBasketShow=function(){return i({type:"show-basket"})},a.handleAddOrder=function(e){return i({type:"add-good-to-order",payload:e})},a.handleRemoveOrder=function(e){return i({type:"remove-good-from-order",payload:e})},a.incrementQuantity=function(e){return i({type:"increment-quantity",payload:e})},a.decrementQuantity=function(e){return i({type:"decrement-quantity",payload:e})},a.closeAlert=function(){return i({type:"close-alert"})},Object(s.jsx)(b.Provider,{value:a,children:t})},m="https://fortniteapi.io/v2/shop?lang=ru";var f=function(e){var t=e.id,r=e.img,c=e.name,a=e.description,i=e.price,o=Object(n.useContext)(b).handleAddOrder;return Object(s.jsxs)("li",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:r.full_background,alt:c})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("h2",{className:"card-title",children:c}),Object(s.jsx)("p",{children:a})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"waves-effect waves-light btn",type:"button",onClick:function(){return o({id:t,name:c,price:i})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right card-price",children:[i," \u0440\u0443\u0431"]})]})]})};var x=function(){var e=Object(n.useContext)(b).goods,t=void 0===e?[]:e;return t.length?Object(s.jsx)("ul",{className:"goods",children:t.map((function(e){var t=e.mainId,r=e.price,n=e.displayName,c=e.displayDescription,a=e.granted;return Object(s.jsx)(f,{id:t,name:n,description:c,price:r.finalPrice,img:a[0].images},t)}))}):Object(s.jsx)("h2",{children:"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})};var p=function(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})};var v=function(){var e=Object(n.useContext)(b),t=e.order,r=e.handleBasketShow;return Object(s.jsxs)("div",{className:"basket blue darken-4 white-text",onClick:r,children:[Object(s.jsx)("i",{className:"material-icons",children:"shopping_cart"}),t.length?Object(s.jsx)("span",{className:"basket-quantity teal lighten-2",children:t.length}):null]})};var g=function(e){var t=e.id,r=e.name,c=e.quantity,a=e.price,i=Object(n.useContext)(b),o=i.handleRemoveOrder,l=i.incrementQuantity,d=i.decrementQuantity;return Object(s.jsxs)("li",{className:"collection-item",children:[r," x"," ",Object(s.jsx)("i",{className:"material-icons basket-quantity__basket blue darken-4",onClick:function(){return d(t)},children:"remove"}),c,Object(s.jsx)("i",{className:"material-icons basket-quantity__basket blue darken-4",onClick:function(){return l(t)},children:"add"}),"= ",a*c," \u0440\u0443\u0431.",Object(s.jsx)("span",{className:"secondary-content",onClick:function(){return o(t)},children:Object(s.jsx)("i",{className:"material-icons basket-delete",children:"close"})})]})};var y=function(){var e=Object(n.useContext)(b),t=e.order,r=e.handleBasketShow,c=t.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),t.length?t.map((function(e){return Object(s.jsx)(g,Object(j.a)({},e),e.id)})):Object(s.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",c," \u0440\u0443\u0431."]}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:r,children:"close"})]})};var N=function(){var e=Object(n.useContext)(b),t=e.alertName,r=void 0===t?"":t,c=e.closeAlert;return Object(n.useEffect)((function(){var e=setTimeout(c,1500);return function(){clearTimeout(e)}}),[r]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[Object(s.jsx)("b",{children:r})," \u2002 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})};var k=function(){var e=Object(n.useContext)(b),t=e.isLoad,r=e.isBasketShow,c=e.alertName,a=e.getData,i=e.getDataError;return Object(n.useEffect)((function(){fetch(m,{headers:{Authorization:"14c50a99-f37a766e-17cedf07-c9738e9f"}}).then((function(e){if(!e.ok)throw new Error("Could not fetch ".concat(m,", received ").concat(e.status));return e.json()})).then((function(e){return a(e)})).catch((function(e){return i(e)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(v,{}),t?Object(s.jsx)(x,{}):Object(s.jsx)(p,{}),r&&Object(s.jsx)(y,{}),c&&Object(s.jsx)(N,{})]})};var w=function(){return Object(s.jsx)("footer",{className:"page-footer green lighten-4",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/K-Dmitriy/react-shop-fortnite",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})};var q=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(O,{children:Object(s.jsx)(k,{})}),Object(s.jsx)(w,{})]})};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(q,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.95abc1b7.chunk.js.map