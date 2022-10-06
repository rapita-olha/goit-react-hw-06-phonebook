(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={label:"Filter_label__NcmuE",input:"Filter_input__1xEXN"}},19:function(e,t,n){e.exports={title:"title_title__1kU7e"}},32:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(10),s=n.n(r),o=n(4),i=n(18),l=n(19),b=n.n(l),u=n(1),j=function(e){var t=e.title;return Object(u.jsx)("h2",{className:b.a.title,children:t})},m=n(16),d=n(39),O=n(3),f=Object(O.b)("contacts/add"),_=Object(O.b)("contacts/delete"),h=function(e){return e.contacts.filter},p=function(e){return e.contacts.items},x=function(e){var t=p(e),n=h(e);return t.filter((function(e){var t=e.name,a=e.number;return t.toLowerCase().includes(n.toLowerCase())||a.includes(n)}))},C=n(6),v=n.n(C);function N(){var e=Object(a.useState)(""),t=Object(m.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(m.a)(r,2),i=s[0],l=s[1],b=Object(o.c)(p),j=Object(o.b)(),O=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":c(a);break;case"number":l(a);break;default:return}},_=function(){l(""),c("")};return Object(u.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===n&&""===i)return alert("Empty");b.some((function(e){return e.name.toLowerCase()===n.toLowerCase()||e.number===i}))?alert("".concat(n," is already in contacts.")):j(f({name:n,number:i,id:Object(d.a)()})),_()},className:v.a.form,autoComplete:"off",children:[Object(u.jsxs)("label",{className:v.a.label,children:["Name",Object(u.jsx)("input",{autoFocus:!0,type:"text",name:"name",value:n,onChange:O,className:v.a.input,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0406\u043c\u044f \u043c\u043e\u0436\u0435 \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u043b\u0438\u0448 \u0431\u0443\u043a\u0432\u0438, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444, \u0442\u0438\u0440\u0435 \u0442\u0430 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(u.jsxs)("label",{className:v.a.label,children:["Number",Object(u.jsx)("input",{type:"tel",name:"number",value:i,onChange:O,className:v.a.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u043c\u0456\u0441\u0442\u0438\u0442\u0438 \u0446\u0438\u0444\u0440\u0438, \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0438, \u0442\u0438\u0440\u0435 \u0442\u0430 \u043f\u043e\u0447\u0438\u043d\u0430\u0442\u0438\u0441\u044c \u0437 +",required:!0})]}),Object(u.jsx)("button",{type:"submit",className:v.a.btn,children:"Add contact"})]})}var g=Object(O.b)("contacts/changeFilter"),k=n(15),y=n.n(k),F=function(){var e=Object(o.c)(h),t=Object(o.b)();return Object(u.jsxs)("label",{className:y.a.label,children:["Find contacts by name",Object(u.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){var n=e.target.value;return t(g(n))},className:y.a.input})]})},w=n(7),L=n.n(w),A=function(){var e=Object(o.c)(x),t=Object(o.b)();return Object(u.jsx)("ul",{className:L.a.list,children:e.map((function(e){var n=e.id,a=e.name,c=e.number;return Object(u.jsx)("li",{className:L.a.item,children:Object(u.jsxs)("div",{className:L.a.box,children:[Object(u.jsxs)("p",{className:L.a.name,children:[a,": "]}),Object(u.jsx)("p",{className:L.a.number,children:c}),Object(u.jsx)("button",{className:L.a.btn,onClick:function(){return function(e){return t(_(e))}(n)},children:"Delete"})]})},n)}))})};n(32);function z(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{className:"visually_hidden",children:"Phonebook"}),Object(u.jsx)(j,{title:"Phonebook"}),Object(u.jsx)(N,{}),Object(u.jsx)(j,{title:"Contacts"}),Object(u.jsx)(F,{}),Object(u.jsx)(A,{})]})}var E,S=n(12),X=n(2),Z=n(5),B=n(20),D=n.n(B),J=n(9),P=Object(O.c)([],(E={},Object(J.a)(E,f,(function(e,t){var n=t.payload;return[].concat(Object(S.a)(e),[n])})),Object(J.a)(E,_,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),E)),q=Object(O.c)("",Object(J.a)({},g,(function(e,t){return t.payload}))),I={key:"contacts",storage:D.a,blacklist:["filter"]},M=Object(S.a)(Object(O.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),T=Object(X.b)({items:P,filter:q}),W=Object(O.a)({reducer:{contacts:Object(Z.g)(I,T)},middleware:M,devTools:!1}),G=Object(Z.h)(W);n(35),n(36);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(o.a,{store:W,children:Object(u.jsx)(i.a,{loading:null,persistor:G,children:Object(u.jsx)(z,{})})})}),document.getElementById("root"))},6:function(e,t,n){e.exports={form:"ContactForm_form__2_Ch8",label:"ContactForm_label__2lQE9",input:"ContactForm_input__1HnCw",number:"ContactForm_number__3pb41",btn:"ContactForm_btn__2cDbR"}},7:function(e,t,n){e.exports={list:"ContactList_list__BXOKG",item:"ContactList_item__3NSCe",box:"ContactList_box__peFvA",name:"ContactList_name__2IWXf",number:"ContactList_number__1X3WF",btn:"ContactList_btn__2hxZP"}}},[[37,1,2]]]);
//# sourceMappingURL=main.e2563daf.chunk.js.map