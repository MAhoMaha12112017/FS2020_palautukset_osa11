(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{24:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),u=t(17),a=t.n(u),o=(t(24),t(8)),i=t(3),s=function(e){var n=e.persons,t=e.filter,c=e.deletePerson,u=n.filter((function(e){return e.name.toUpperCase().includes(t.toUpperCase())}));return Object(r.jsx)("div",{children:u.map((function(e){return Object(r.jsxs)("p",{children:[e.name," ",e.number,Object(r.jsx)("button",{type:"button",onClick:function(){return n=e.id,t=e.name,void(window.confirm("Delete ".concat(t,"?"))&&c(n));var n,t},children:"delete"})]},e.name)}))})},l=function(e){var n=e.addPerson,t=e.newName,c=e.handleNameChange,u=e.newNumber,a=e.handleNumberChange;return Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:t,onChange:c})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:u,onChange:a})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.filter,t=e.handleFilterChange;return Object(r.jsxs)("p",{children:["filter shown with ",Object(r.jsx)("input",{value:n,onChange:t})]})},b=t(18),j=t(5),f=t.n(j),h="/api/persons",m={getAll:function(){return f.a.get(h).then((function(e){return e.data}))},create:function(e){return f.a.post(h,e).then((function(e){return e.data}))},deletePerson:function(e){return f.a.delete("".concat(h,"/").concat(e)).then((function(e){return e}))},updateNumber:function(e,n){var t=Object(b.a)({},e);return t.number=n,f.a.put("".concat(h,"/").concat(e.id),t).then((function(e){return e.data}))}},p=function(e){var n=e.message;return Object(r.jsx)("div",{className:"error",children:n})},O=function(){var e=Object(c.useState)([]),n=Object(i.a)(e,2),t=n[0],u=n[1],a=Object(c.useState)(""),b=Object(i.a)(a,2),j=b[0],f=b[1],h=Object(c.useState)(""),O=Object(i.a)(h,2),v=O[0],x=O[1],g=Object(c.useState)(""),w=Object(i.a)(g,2),C=w[0],N=w[1],P=Object(c.useState)(null),k=Object(i.a)(P,2),S=k[0],y=k[1];return Object(c.useEffect)((function(){m.getAll().then((function(e){return u(e)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),S?Object(r.jsx)(p,{message:S}):null,Object(r.jsx)(d,{filter:C,handleFilterChange:function(e){N(e.target.value)}}),Object(r.jsx)(l,{addPerson:function(e){e.preventDefault();var n=t.find((function(e){return e.name.toUpperCase()===j.toUpperCase()}));n?window.confirm("".concat(j," is already added to phonebook, replace the old number with the new one?"))&&m.updateNumber(n,v).then((function(e){var n=Object(o.a)(t);n=n.map((function(n){return n.id!==e.id?n:e})),u(n),y("".concat(j,": number changed")),f(""),x(""),setTimeout((function(){y(null)}),5e3)})).catch((function(e){y("".concat(j," already removed from server")),setTimeout((function(){y(null)}),5e3),u(t.filter((function(e){return e.name!==j}))),f(""),x("")})):m.create({name:j,number:v}).then((function(e){u(t.concat(e)),y("".concat(j," added to Phonebook")),setTimeout((function(){y(null)}),5e3),f(""),x("")}))},newName:j,handleNameChange:function(e){f(e.target.value)},newNumber:v,handleNumberChange:function(e){x(e.target.value)}}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(s,{persons:t,filter:C,deletePerson:function(e){m.deletePerson(e);var n=Object(o.a)(t);n=n.filter((function(n){return n.id!==e})),u(n),y("Person removed from Phonebook"),setTimeout((function(){y(null)}),5e3)}})]})};a.a.render(Object(r.jsx)(O,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.51a465dc.chunk.js.map