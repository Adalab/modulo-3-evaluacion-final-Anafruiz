(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{22:function(e,s,a){},29:function(e,s,a){"use strict";a.r(s);var t=a(1),c=a(16),n=a.n(c),r=(a(22),a(10)),i=a(2),l=a(0),j=function(e){return Object(l.jsxs)("label",{className:"form__label",htmlFor:"name",children:["Name:",Object(l.jsx)("input",{value:e.name,onChange:function(s){e.handleFilter({value:s.target.value,key:"name"})},className:"form__input",type:"text",placeholder:" Search a character",name:"name",id:"name"})]})},u=function(e){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("label",{className:"form__label",htmlFor:"species",children:"Specie:"}),Object(l.jsxs)("select",{className:"form__input",name:"species",id:"species",onChange:function(s){e.handleFilter({value:s.target.value,key:"species"})},value:e.species,children:[Object(l.jsx)("option",{className:"form__input--color",value:"all",children:"All"}),Object(l.jsx)("option",{className:"form__input--color",value:"Human",children:"Human"}),Object(l.jsx)("option",{className:"form__input--color",value:"Alien",children:"Alien"})]})]})},o=function(e){return Object(l.jsx)("button",{className:"button",children:Object(l.jsx)("i",{className:"fa fa-trash","aria-hidden":"true",onClick:function(){e.resetInputs()}})})},m=function(e){return Object(l.jsx)("section",{className:"form",children:Object(l.jsxs)("form",{className:"form__container",onSubmit:function(e){e.preventDefault()},children:[Object(l.jsx)(j,{handleFilter:e.handleFilter,name:e.name}),Object(l.jsx)(u,{handleFilter:e.handleFilter,species:e.species}),Object(l.jsx)(o,{resetInputs:e.resetInputs})]})})},d=a(7),h=function(e){return Object(l.jsxs)(d.b,{to:"/user/".concat(e.user.id),className:"link",children:[Object(l.jsx)("img",{className:"characters__img",src:e.user.image,alt:"foto del personaje"}),Object(l.jsxs)("h2",{className:"characters__name",children:[e.user.name," "]}),Object(l.jsxs)("p",{className:"characters__species",children:["Specie: ",e.user.species]})]})},b=function(e){var s=e.users.sort((function(e,s){return e.name>s.name?1:e.name<s.name?-1:0})).map((function(s){return Object(l.jsx)("li",{className:"characters__card",children:Object(l.jsx)(h,{user:s,episodes:e.episodes})},s.id)})),a=0!==e.users.length?Object(l.jsx)("ul",{className:"characters",children:s}):Object(l.jsxs)("div",{className:"characterResult",children:[Object(l.jsxs)("span",{children:["This character doesn't exist ",Object(l.jsx)("i",{className:"far fa-thumbs-down"})]}),Object(l.jsx)("span",{className:"characterResult__span",children:"Try again!"})]});return Object(l.jsx)("section",{children:a})},O=a.p+"static/media/angry.8dfdea3c.jpg",f=function(e){return void 0===e.user?Object(l.jsxs)("div",{className:"notFound",children:[Object(l.jsxs)("h1",{children:["User not found!",Object(l.jsx)("i",{className:"far fa-sad-tear"})," "]}),Object(l.jsx)("img",{className:"notFound__img",src:O})]}):Object(l.jsx)("section",{className:"characterDetail",children:Object(l.jsxs)("div",{className:"characterDetail__card",children:[Object(l.jsx)("img",{className:"characterDetail__img",src:e.user.image,alt:""}),Object(l.jsxs)("ul",{className:"characterDetail__item",children:[Object(l.jsx)("li",{className:"characterDetail__name",children:e.user.name}),Object(l.jsxs)("div",{className:"characterDetail__container1",children:[Object(l.jsxs)("li",{className:"characterDetail__status",children:["Status:",e.user.status,"Alive"===e.user.status?Object(l.jsx)("i",{className:" fas fa-heartbeat icon-status"}):"Dead"===e.user.status?Object(l.jsx)("i",{className:" fas fa-skull-crossbones icon-status"}):"unknown"===e.user.status?Object(l.jsx)("i",{className:" fas fa-question icon-status"}):void 0]}),Object(l.jsxs)("li",{className:"characterDetail__species",children:["Specie: ",e.user.species]})]}),Object(l.jsxs)("div",{className:"characterDetail__container2",children:[Object(l.jsxs)("li",{className:"characterDetail__origen",children:["Origin: ",e.user.origin," "]}),Object(l.jsxs)("li",{className:"characterDetail__episodes",children:["Episodes: ",e.user.episode.length]})]})]})," ",Object(l.jsx)(d.b,{to:"/",className:"link",title:"Back to user list",children:Object(l.jsx)("button",{className:"characterDetail__button",children:Object(l.jsx)("i",{className:"fas fa-undo"})})})]})})},p=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json().then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,species:e.species,status:e.status,episode:e.episode,image:e.image,origin:e.origin.name}}))}))}))},x=a.p+"static/media/logo.de13d484.png",_=function(){return Object(l.jsx)("h1",{className:"header",children:Object(l.jsx)("img",{className:"header__logo",src:x})})},N=function(){return Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)("small",{className:"footer__name",children:"@Anafruiz"}),Object(l.jsx)("small",{className:"footer__name",children:"Adalab 2021"})]})},g=function e(){var s=Object(t.useState)([]),a=Object(r.a)(s,2),c=a[0],n=a[1],j=Object(t.useState)(""),u=Object(r.a)(j,2),o=u[0],d=u[1],h=Object(t.useState)("all"),O=Object(r.a)(h,2),x=O[0],g=O[1];Object(t.useEffect)((function(){p().then((function(e){n(e)}))}),[]);var v=c.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})).filter((function(e){return"all"===x||e.species===x}));return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(i.c,{children:[Object(l.jsxs)(i.a,{exact:!0,path:"/",component:e,children:[Object(l.jsx)(_,{}),Object(l.jsx)(m,{handleFilter:function(e){"name"===e.key?d(e.value):"species"===e.key&&g(e.value)},name:o,species:x,resetInputs:function(){d(""),g("all")}}),Object(l.jsx)(b,{users:v}),Object(l.jsx)(N,{})]}),Object(l.jsx)(i.a,{path:"/user/:id",render:function(e){var s=c.find((function(s){return s.id===parseInt(e.match.params.id)}));return Object(l.jsx)(f,{user:s})}})]})})};n.a.render(Object(l.jsx)(d.a,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.acdd1ade.chunk.js.map