(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(3),o=a.n(s),l=(a(15),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",address:{street:"Kulas Light",suite:"Apt. 556",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",address:{street:"Victor Plains",suite:"Suite 879",city:"Wisokyburgh",zipcode:"90566-7771",geo:{lat:"-43.9509",lng:"-34.4618"}},phone:"010-692-6593 x09125",website:"anastasia.net",company:{name:"Deckow-Crist",catchPhrase:"Proactive didactic contingency",bs:"synergize scalable supply-chains"}},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",address:{street:"Douglas Extension",suite:"Suite 847",city:"McKenziehaven",zipcode:"59590-4157",geo:{lat:"-68.6102",lng:"-47.0653"}},phone:"1-463-123-4447",website:"ramiro.info",company:{name:"Romaguera-Jacobson",catchPhrase:"Face to face bifurcated interface",bs:"e-enable strategic applications"}},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",address:{street:"Hoeger Mall",suite:"Apt. 692",city:"South Elvis",zipcode:"53919-4257",geo:{lat:"29.4572",lng:"-164.2990"}},phone:"493-170-9623 x156",website:"kale.biz",company:{name:"Robel-Corkery",catchPhrase:"Multi-tiered zero tolerance productivity",bs:"transition cutting-edge web services"}},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",address:{street:"Skiles Walks",suite:"Suite 351",city:"Roscoeview",zipcode:"33263",geo:{lat:"-31.8129",lng:"62.5342"}},phone:"(254)954-1289",website:"demarco.info",company:{name:"Keebler LLC",catchPhrase:"User-centric fault-tolerant solution",bs:"revolutionize end-to-end systems"}},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",address:{street:"Norberto Crossing",suite:"Apt. 950",city:"South Christy",zipcode:"23505-1337",geo:{lat:"-71.4197",lng:"71.7478"}},phone:"1-477-935-8478 x6430",website:"ola.org",company:{name:"Considine-Lockman",catchPhrase:"Synchronised bottom-line interface",bs:"e-enable innovative applications"}},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",address:{street:"Rex Trail",suite:"Suite 280",city:"Howemouth",zipcode:"58804-1099",geo:{lat:"24.8918",lng:"21.8984"}},phone:"210.067.6132",website:"elvis.io",company:{name:"Johns Group",catchPhrase:"Configurable multimedia task-force",bs:"generate enterprise e-tailers"}},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",address:{street:"Ellsworth Summit",suite:"Suite 729",city:"Aliyaview",zipcode:"45169",geo:{lat:"-14.3990",lng:"-120.7677"}},phone:"586.493.6943 x140",website:"jacynthe.com",company:{name:"Abernathy Group",catchPhrase:"Implemented secondary concept",bs:"e-enable extensible e-tailers"}},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",address:{street:"Dayna Park",suite:"Suite 449",city:"Bartholomebury",zipcode:"76495-3109",geo:{lat:"24.6463",lng:"-168.8889"}},phone:"(775)976-6794 x41206",website:"conrad.com",company:{name:"Yost and Sons",catchPhrase:"Switchable contextually-based project",bs:"aggregate real-time technologies"}},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",address:{street:"Kattie Turnpike",suite:"Suite 198",city:"Lebsackbury",zipcode:"31428-2261",geo:{lat:"-38.2386",lng:"57.2232"}},phone:"024-648-3804",website:"ambrose.net",company:{name:"Hoeger LLC",catchPhrase:"Centralized empowering task-force",bs:"target end-to-end models"}}]),i=[{userId:1,id:1,title:"delectus aut autem",completed:!1},{userId:1,id:2,title:"quis ut nam facilis et officia qui",completed:!1}],c=a(1),u=a(4),m=a(5),d=a(8),p=a(6),h=a(9),b=a(7);var g=function(e){var t=e.user;return r.a.createElement("a",{className:"user-info",href:"mailto:".concat(t.email)},t.name)};function y(e){var t=e.todo;return r.a.createElement("tr",null,r.a.createElement("td",{className:"item-title"},t.title),r.a.createElement("td",{className:"item-user"},r.a.createElement(g,{user:t.user})),r.a.createElement("td",{className:"item-status"},t.completed?"Completed":"In progress"))}y.defaultProps={todo:{}};var f=y;a(16);function E(e){var t=e.todos;return r.a.createElement("table",{className:"todo-list"},r.a.createElement("thead",{className:"todo-list-head"},r.a.createElement("tr",null,r.a.createElement("td",null,"Title"),r.a.createElement("td",null,"Username"),r.a.createElement("td",null,"Status"))),r.a.createElement("tbody",{className:"todo-list-body"},t.map(function(e){return r.a.createElement(f,{todo:e,key:e.id})})))}E.defaultProps={todos:[]};var S=E;a(17);function v(e){return r.a.createElement("form",{className:"new-todo",onSubmit:e.handleSubmit},r.a.createElement("label",{htmlFor:"name-input",className:"name-label"},"Title:",r.a.createElement("input",{className:"name-input",onChange:e.handleInputChange,value:e.inputValue,name:"name-input",type:"text",placeholder:"Enter todo title here"}),e.inputError&&r.a.createElement("span",{className:"error"},e.inputError)),r.a.createElement("label",{htmlFor:"select",className:"select-label"},"User:",r.a.createElement("select",{className:"user-select",name:"select",onChange:e.handleSelectChange,value:e.selectValue},r.a.createElement("option",null,"Choose a user"),e.users.map(function(e){return r.a.createElement("option",{value:e.id},e.name)})),e.selectError&&r.a.createElement("span",{className:"error"},e.selectError)),r.a.createElement("button",{type:"submit",className:"submit-button"},"Add"))}v.defaultProps={handleSubmit:{},handleInputChange:{},handleSelectChange:{},inputValue:"",selectValue:-1,inputError:null,selectError:null,users:[]};var w=v;function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function P(e,t){return e.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(b.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,{user:t.find(function(t){return t.id===e.userId})})})}var O=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),""!==a.state.todoTitleValue.trim()?-1!==a.state.todoUserId?null===a.state.inputError&&null===a.state.selectError&&a.setState(function(e){return{todos:[].concat(Object(c.a)(e.todos),[{id:e.currentId,title:e.todoTitleValue,userId:e.todoUserId,completed:!1}]),currentId:e.currentId+1,todoTitleValue:"",todoUserId:-1}}):a.setState({selectError:"Please choose a user"}):a.setState({inputError:"Please enter the title"})},a.handleInputChange=function(e){a.setState({todoTitleValue:e,inputError:null})},a.handleSelectChange=function(e){a.setState({todoUserId:+e,selectError:null})},a.state={users:Object(c.a)(a.props.users),todos:Object(c.a)(a.props.todos),todoTitleValue:"",todoUserId:-1,currentId:3,selectError:null,inputError:null},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=P(this.state.todos,this.state.users);return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{todos:t}),r.a.createElement(w,{users:this.state.users,handleSubmit:this.handleSubmit,handleInputChange:function(t){e.handleInputChange(t.target.value)},inputValue:this.state.todoTitleValue,inputError:this.state.inputError,handleSelectChange:function(t){e.handleSelectChange(t.target.value)},selectValue:this.state.todoUserId,selectError:this.state.selectError}))}}]),t}(n.Component);O.defaultProps={users:[],todos:[]};var k=O;var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Add todo form"),r.a.createElement("p",null,r.a.createElement("span",null,"Users: "),l.length),r.a.createElement(k,{users:l,todos:i}))};o.a.render(r.a.createElement(I,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.2d4faa56.chunk.js.map