(this.webpackJsonpapp_v1=this.webpackJsonpapp_v1||[]).push([[0],{21:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},28:function(e,a,t){e.exports=t(42)},39:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),s=t(2),i=t(6),o=t(3),m=t(13),u=t(5),E=t(1),d="http://127.0.0.1:8000/api/",p=t(7),g=t.n(p),v=t(11),b=function(){var e=Object(v.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"auth/login"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log("Falied to Login")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),f=function(){var e=Object(v.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(d,"auth/register"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log("Falied to Register")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),h=function(){var e=Object(v.a)(g.a.mark((function e(a){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return void 0!==typeof window&&(localStorage.removeItem("authToken"),a()),e.next=3,fetch("".concat(d,"auth/logout"),{method:"GET"}).then((function(e){e.json({message:"Logout Successfully"})})).catch((function(e){console.log("Failed to Logout")}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),N=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("authToken")&&JSON.parse(localStorage.getItem("authToken")))},O=l.a.createContext(),y=function(e){var a=Object(n.useContext)(O).dispatch,t=Object(n.useState)({Bus_ID:"",Source:"",Destination:"",loading:!1,Error:"",BusData:"",didRender:!1}),r=Object(s.a)(t,2),c=r[0],i=r[1],o=Object(n.useState)({TravelDate:""}),p=Object(s.a)(o,2),g=p[0],v=p[1],b=g.TravelDate,f=c.Source,h=c.Destination,y=c.loading,j=c.didRender,S=c.Error,k=c.BusData,w=(new Date,function(e){return function(a){console.log(e),"TravelDate"===e?(b=new Date(a.target.value),console.log(g,a.target.value),v({TravelDate:b}),console.log(b)):i(Object(E.a)(Object(E.a)({},c),{},Object(u.a)({},e,a.target.value)))}}),D=function(e){e.preventDefault(),i(Object(E.a)(Object(E.a)({},c),{},{loading:!0,Error:"",didRender:!1})),function(e){var a=e.Source,t=e.Destination;e.travelDate;return fetch("".concat(d,"bus/search/").concat(a,"/").concat(t),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}({Source:f,Destination:h,TravelDate:b}).then((function(e){e.Error?i(Object(E.a)(Object(E.a)({},c),{},{Error:e.Error,loading:!1,BusData:[],didRender:!1})):i(Object(E.a)(Object(E.a)({},c),{},{didRender:!0,loading:!1,Error:"",BusData:e}))})).catch((function(e){i(Object(E.a)(Object(E.a)({},c),{},{Error:"Failed to load data",loading:!1,BusData:[],didRender:!1}))}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"search-section"},l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"text-info"},l.a.createElement("h2",null,"Find a Tour"),l.a.createElement("p",null,"Where would you like to go ?"),l.a.createElement("div",{className:"messageHandle",style:{display:S?"block":"none"}},S),l.a.createElement("div",{className:"messageHandle",style:{display:y?"block":"none"}},"Loading data...")),l.a.createElement("div",{className:"search-form"},l.a.createElement("form",{onSubmit:function(e){return D(e)}},l.a.createElement("div",{className:"location"},l.a.createElement("div",{className:"source-location"},l.a.createElement("div",{className:"cities"},l.a.createElement("div",{className:"city-list"},l.a.createElement("select",{onChange:w("Source")},l.a.createElement("option",{value:""},"Select City"),l.a.createElement("option",{value:"Chennai"},"Chennai"),l.a.createElement("option",{value:"Hyderabad"},"Hyderabad"),l.a.createElement("option",{value:"Pune"},"Pune"),l.a.createElement("option",{value:"Delhi"},"Delhi"),l.a.createElement("option",{value:"Banglore"},"Banglore")),l.a.createElement("div",{className:"label-from"},l.a.createElement("span",null,"From"))),l.a.createElement("div",{className:"search-image"},l.a.createElement("div",{className:"division-line"}),l.a.createElement("div",{className:"city-image"},l.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"city",className:"svg-inline--fa fa-city fa-w-20",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 512"},l.a.createElement("path",{fill:"currentColor",d:"M616 192H480V24c0-13.26-10.74-24-24-24H312c-13.26 0-24 10.74-24 24v72h-64V16c0-8.84-7.16-16-16-16h-16c-8.84 0-16 7.16-16 16v80h-64V16c0-8.84-7.16-16-16-16H80c-8.84 0-16 7.16-16 16v80H24c-13.26 0-24 10.74-24 24v360c0 17.67 14.33 32 32 32h576c17.67 0 32-14.33 32-32V216c0-13.26-10.75-24-24-24zM128 404c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12H76c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm128 192c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12V76c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm160 288c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40zm0-96c0 6.63-5.37 12-12 12h-40c-6.63 0-12-5.37-12-12v-40c0-6.63 5.37-12 12-12h40c6.63 0 12 5.37 12 12v40z"})))))),l.a.createElement("div",{className:"source-location"},l.a.createElement("div",{className:"cities"},l.a.createElement("div",{className:"city-list"},l.a.createElement("select",{onChange:w("Destination")},l.a.createElement("option",{value:""},"Select City"),l.a.createElement("option",{value:"Chennai"},"Chennai"),l.a.createElement("option",{value:"Hyderabad"},"Hyderabad"),l.a.createElement("option",{value:"Delhi"},"Delhi"),l.a.createElement("option",{value:"Pune"},"Pune"),l.a.createElement("option",{value:"Banglore"},"Banglore")),l.a.createElement("div",{className:"label-from to"},l.a.createElement("span",null,"To"))),l.a.createElement("div",{className:"search-image"},l.a.createElement("div",{className:"division-line"}),l.a.createElement("div",{className:"city-image"},l.a.createElement("img",{src:"/images/drop.png",alt:"drop"}))))),l.a.createElement("div",{className:"onward"},l.a.createElement("div",{className:"dates-label"},l.a.createElement("span",null,"Onward")),l.a.createElement("input",{type:"date",onChange:w("TravelDate"),id:"onward-date"}))),l.a.createElement("button",{className:"search-btn"},"Search Bus"))))),function(){if(j)return l.a.createElement("div",{className:"bus-details"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("ul",null,l.a.createElement("li",null,"Bus Type"),l.a.createElement("li",null,"Time"),l.a.createElement("li",null,"Date"),l.a.createElement("li",null,"Available"),l.a.createElement("li",null,"Fare"),l.a.createElement("li",null))),l.a.createElement("li",null,k.map((function(t,n){return l.a.createElement("ul",{key:n},l.a.createElement("li",null,t.BusType),l.a.createElement("li",null,("0"+new Date(t.Arrival).getHours()).slice(-2)+":"+("0"+new Date(t.Arrival).getMinutes()).slice(-2)),l.a.createElement("li",null,("0"+b.getDate()).slice(-2)+"-"+("0"+(+b.getMonth()+1)).slice(-2)+"-"+("0"+b.getYear()).slice(-2)),l.a.createElement("li",null,function(e){var a=e.Seats;return Object(m.a)(new Array(24)).map((function(e,t){return!0!==a["Seat"+(t+1)]})).filter((function(e){return!0===e})).length}(t)),l.a.createElement("li",null,t.Fare),l.a.createElement("li",{onClick:function(n){return function(t){var n=Object(E.a)({},t);n.TravelDate=b,N()?(a({type:"STORE_BOOKING_DETAILS",BusDetails:n}),e.history.push("/user/book-ticket")):e.history.push("/login")}(t)},className:"viewSeatBtn"},"View Seats"))})))))}())},j=(t(21),function(e){var a=e.history,t=Object(n.useState)(!1),r=Object(s.a)(t,2),c=r[0],i=r[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"main-content"},l.a.createElement("div",{className:"content-text"},l.a.createElement("div",{className:"title"},l.a.createElement("h1",null,"Comfort and Style",l.a.createElement("br",null)," Over Every Mile"),l.a.createElement("p",null,"BusExpress is the leading go-to website for booking bus online."),l.a.createElement("button",{onClick:function(e){return i(!c)},className:"book-btn"},"Book Ticket"))),l.a.createElement("div",{className:"content-image"},l.a.createElement("img",{src:"./images/bus.svg",alt:"bus station"}))),c?l.a.createElement(y,{history:a}):null)}),S=Object(o.g)((function(e){var a=e.history;return l.a.createElement("nav",null,l.a.createElement("div",{className:"header"},l.a.createElement(i.b,{to:"/"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"../images/logo.svg",alt:"logo"}))),l.a.createElement("div",{className:"menu",style:{width:N()?"360px":"300px"}},l.a.createElement(i.b,{to:"/",className:"navBtn"},"Home"),N()?l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{to:"/user/ticket-history",className:"navBtn"},"Ticket History"),l.a.createElement("div",{className:"divisionLine"}),l.a.createElement(i.b,{to:"/",onClick:function(e){return h((function(){a.push("/")}))},className:"navBtn logout"},"Logout")):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"divisionLine"}),l.a.createElement(i.b,{to:"/login",className:"navBtn"},"Log in"),l.a.createElement(i.b,{to:"/register",className:"navBtn"},"Sign up")))))})),k=(t(23),function(e){var a=e.history,t=Object(n.useRef)(),r=Object(n.useState)({Email:"",UserPassword:"",Error:"",Loading:!1,didRedirect:!1}),c=Object(s.a)(r,2),o=c[0],m=c[1],d=o.Email,p=o.Password,g=o.didRedirect,v=o.Loading,f=o.Error,h=!1,O=!1,y=function(e){return function(a){m(Object(E.a)(Object(E.a)({},o),{},Object(u.a)({},e,a.target.value)))}},j=function(e){e.preventDefault(),h&&O&&(m(Object(E.a)(Object(E.a)({},o),{},{Error:!1,Loading:!0})),b({Email:d,Password:p}).then((function(e){var a,t,n;e.message?m(Object(E.a)(Object(E.a)({},o),{},{Error:e.message,Loading:!1})):(a=e.authToken,t=e.user._id,n=function(){m(Object(E.a)(Object(E.a)({},o),{},{didRedirect:!0}))},"undefined"!==typeof window&&(console.log(t),localStorage.setItem("authToken",JSON.stringify(a)),localStorage.setItem("UserID",JSON.stringify(t)),n()))})).catch((function(e){m(Object(E.a)(Object(E.a)({},o),{},{Error:"Failed to login.!",Loading:!1}))})))};return l.a.createElement("div",{className:"container login"},l.a.createElement("div",{className:"img-wrapper"},l.a.createElement("img",{src:"images/Person.svg",alt:"person standing at bus stop"})),l.a.createElement("div",{className:"form-control"},l.a.createElement("div",{className:"head"},l.a.createElement("h1",null,"User Login")),l.a.createElement("div",{className:"message-box",style:{display:f?"block":"none"}},f),l.a.createElement("div",{className:"message",style:{display:v?"block":"none",color:"grey"}},"Loading ....."),l.a.createElement("form",{class:"login-form",onSubmit:function(e){return j(e)}},l.a.createElement("label",{htmlFor:"userEmail"},"Email :"),l.a.createElement("div",{className:"form-group",ref:t},l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-envelope"})),l.a.createElement("span",null),l.a.createElement("input",{value:d,onChange:y("Email"),type:"email",name:"Email",id:"userEmail",placeholder:"Enter your email"})),l.a.createElement("br",null),function(){var e=RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);if(d.length>0&&!e.test(d))return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"},"Email is Invalid"),l.a.createElement("br",null));e.test(d)&&(h=!0)}(),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"pwd"},"Password :"),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-key"})),l.a.createElement("span",null),l.a.createElement("input",{value:p,type:"password",onChange:y("Password"),id:"pwd",name:"Password",placeholder:"Password"})),l.a.createElement("br",null),function(){if(p){if(p.length<6)return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"},"Password must be 5 characters long"),l.a.createElement("br",null));O=!0}}(),l.a.createElement("button",null,"LOGIN"),l.a.createElement("div",{className:"or-line"},l.a.createElement("span",null,"OR")),l.a.createElement(i.b,{to:"/register"},"New User? Register Here")),void(g&&N()&&a.push("/"))))}),w=function(){var e=Object(n.useState)({Name:"",Email:"",Password:"",Gender:"",Mobile:"",Error:"",Success:!1}),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(s.a)(c,2),m=o[0],d=o[1],p=t.Name,g=t.Email,v=t.Password,b=t.Gender,h=t.Mobile,N=t.Success,O=t.Error,y=!1,j=!1,S=!1,k=!1,w=function(){if(y&&j&&S&&k&&m)return l.a.createElement("button",null,"Register")},D=function(e){return function(a){"Gender"===e?(d(!0),r(Object(E.a)(Object(E.a)({},t),{},Object(u.a)({},e,a.target.value)))):r(Object(E.a)(Object(E.a)({},t),{},Object(u.a)({},e,a.target.value)))}},T=function(e){e.preventDefault(),y&&j&&S&&k?(r(Object(E.a)(Object(E.a)({},t),{},{Error:!1})),f({Name:p,Email:g,Password:v,Gender:b,Mobile:h}).then((function(e){e.Message?r(Object(E.a)(Object(E.a)({},t),{},{Error:e.message,success:!1})):r(Object(E.a)(Object(E.a)({},t),{},{Name:"",Password:"",Gender:"",Mobile:"",Email:"",Error:"",Success:!0}))})).catch((function(e){r(Object(E.a)(Object(E.a)({},t),{},{Error:"Failed to register",success:!1}))}))):console.log("asdasd",y,j,S,k)},x=function(){if(v){if(v.length<6)return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"},"Password must be 5 characters long"),l.a.createElement("br",null));j=!0}},C=function(){var e=RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);if(g.length>0&&!e.test(g))return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"},"Email is Invalid"),l.a.createElement("br",null));e.test(g)&&(y=!0)},F=function(){if(p&&p.length<3)return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"},"Name must be 3 characters long"),l.a.createElement("br",null));p&&p.length>3&&(k=!0)},A=function(){if(h&&10!==h.length)return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"},"Invalid mobile number"),l.a.createElement("br",null));h&&10==h.length&&(S=!0)};return l.a.createElement("div",{className:"container register-container"},l.a.createElement("div",{className:"img-wrapper"},l.a.createElement("img",{src:"images/Person.svg",alt:"person standing at bus stop"})),l.a.createElement("div",{className:"form-control"},l.a.createElement("div",{className:"head"},l.a.createElement("h1",null,"User Signup")),l.a.createElement("div",{className:"message-box",style:{display:O?"block":"none"}},O),l.a.createElement("div",{className:"message-box",style:{display:N?"block":"none"}},"Account created successfully. Please ",l.a.createElement(i.b,{to:"/login"},"Login Here")),l.a.createElement("form",{onSubmit:function(e){return T(e)}},l.a.createElement("label",{htmlFor:"username"},"Name :"),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-user"})),l.a.createElement("span",null),l.a.createElement("input",{onChange:D("Name"),value:p,type:"name",id:"username",placeholder:"Enter your name",name:"username"})),l.a.createElement("br",null),F(),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"userEmail"},"Email :"),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-envelope"})),l.a.createElement("span",null),l.a.createElement("input",{onChange:D("Email"),value:g,type:"email",id:"userEmail",placeholder:"Enter your email",name:"email"})),l.a.createElement("br",null),C(),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"mobile"},"Mobile :"),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-phone"})),l.a.createElement("span",null),l.a.createElement("input",{onChange:D("Mobile"),value:h,type:"number",id:"mobile",placeholder:"Contact number",name:"mobile"})),l.a.createElement("br",null),A(),l.a.createElement("br",null),l.a.createElement("label",null,"Gender :"),l.a.createElement("div",{className:"form-group gender"},l.a.createElement("div",{className:"genderMale"},l.a.createElement("input",Object(u.a)({value:b,onChange:D("Gender"),type:"radio",id:"male",name:"gender"},"value","Male")),l.a.createElement("label",{className:"male",htmlFor:"male"},l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-male"})))),l.a.createElement("span",null),l.a.createElement("div",{className:"genderFemale"},l.a.createElement("input",Object(u.a)({value:b,onChange:D("Gender"),type:"radio",id:"female",name:"gender"},"value","Female")),l.a.createElement("label",{className:"female",htmlFor:"female"},l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-female"}))))),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"pwd"},"Password :"),l.a.createElement("div",{className:"form-group"},l.a.createElement("div",null,l.a.createElement("i",{className:"fa fa-key"})),l.a.createElement("span",null),l.a.createElement("input",{onChange:D("Password"),value:v,type:"Password",id:"pwd",placeholder:"Password",name:"password"})),l.a.createElement("br",null),x(),l.a.createElement("br",null),w(),l.a.createElement(i.b,{to:"/login"},"Existing User?",l.a.createElement("span",null,"Login Here")))))},D=(t(24),function(e){var a=Object(n.useState)({Seats:[]}),t=Object(s.a)(a,2),r=t[0],c=t[1],i=r.Seats,o=function(a){return e.AllSeats[a]?l.a.createElement("div",{class:"seat",onClick:function(a){return function(a){var t=a.target.innerText;if(e.onAddSeat(a.target.innerText),i.includes(t)){var n=i.indexOf(t);a.target.classList.remove("reserved"),i.splice(n,1)}else a.target.classList.add("reserved"),i.push(t);c({Seats:i})}(a)}},a+1):l.a.createElement("div",{class:"seat reserved"},a+1)},m=function(e){return l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"layout-1"},o(e),o(e+1)),l.a.createElement("div",{class:"layout-2"},o(e+2),o(e+3)))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"seat-viewer"},l.a.createElement("div",{class:"seatTitle"},l.a.createElement("h2",null,"SEATS")),l.a.createElement("div",{class:"seats"},m(0),m(4),m(8),m(12),m(16))))}),T=function(e){var a=e.history,t=Object(n.useContext)(O),r=t.userBusDetail,c=t.dispatch;console.log(r.Seats),r&&0!==Object.keys(r).length||a.push("/");var i=[],o=Object(n.useState)({Name:[],Age:[],Gender:[],Seats:[],isGenderVerified:!1}),d=Object(s.a)(o,2),p=d[0],g=d[1],v=Object(n.useState)(!1),b=Object(s.a)(v,2),f=b[0],h=b[1],N=!1,y=!1,j=p.Name,S=p.Age,k=p.Gender,w=p.Seats,T=function(e,a){return function(t){var n=p[e];n[a]=t.target.value,"Gender"===e?(h(!0),g(Object(E.a)(Object(E.a)({},p),{},Object(u.a)({},e,Object(m.a)(n))))):g(Object(E.a)(Object(E.a)({},p),{},Object(u.a)({},e,Object(m.a)(n))))}},x=function(e){return l.a.createElement("form",{class:"form-control"},l.a.createElement("label",{for:"Name"},"Name :"),l.a.createElement("div",{class:"form-group"},l.a.createElement("div",null,l.a.createElement("i",{class:"fa fa-user"})),l.a.createElement("span",null),l.a.createElement("input",{type:"Name",onChange:T("Name",e),id:"Name",value:j[e],placeholder:"Enter your name"})),l.a.createElement("br",null),function(e){if(j[e]&&j[e].length<3)return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"},"Name must be 3 characters long"),l.a.createElement("br",null));j[e]&&j[e].length>=3&&(N=!0)}(e),l.a.createElement("br",null),l.a.createElement("label",{for:"Age"},"Age :"),l.a.createElement("div",{class:"form-group"},l.a.createElement("div",null,l.a.createElement("i",{class:"fa fa-child"})),l.a.createElement("span",null),l.a.createElement("input",{type:"Number",onChange:T("Age",e),id:"Age",value:S[e],placeholder:"Enter your Age"})),l.a.createElement("br",null),function(e){return S[e]&&Number(S[e])>110?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"},"Too old"),l.a.createElement("br",null)):S[e]&&Number(S[e])<0?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"},"Never born"),l.a.createElement("br",null)):void(S[e]>0&&Number(S[e])<110&&Number(S[e])>0&&(y=!0))}(e),l.a.createElement("br",null),l.a.createElement("label",null,"Gender :"),l.a.createElement("div",{class:"form-group gender"},l.a.createElement("div",{class:"genderMale"},l.a.createElement("input",Object.assign({type:"radio",id:"Male"+[e],name:"Gender"+[e],value:"Male",onChange:T("Gender",e)},"Male"===k?"Checked":"")),l.a.createElement("label",{class:"male",htmlFor:"Male"+[e]},l.a.createElement("div",null,l.a.createElement("i",{class:"fa fa-male"})))),l.a.createElement("span",null),l.a.createElement("div",{class:"genderFemale"},l.a.createElement("input",Object.assign({type:"radio",id:"Female"+[e],name:"Gender"+[e],onChange:T("Gender",e),value:"Female"},"Male"===k?"Checked":"")),l.a.createElement("label",{class:"female",htmlFor:"Female"+[e]},l.a.createElement("div",null,l.a.createElement("i",{class:"fa fa-female"}))))),l.a.createElement("br",null))},C=function(){if(N&&y&&f)return l.a.createElement("button",{className:"pay-btn",onClick:function(e){return function(){var e=Object(E.a)(Object(E.a)({},r),p);N&&y&&f&&(c({type:"STORE_BOOKING_DETAILS",BusDetails:e}),a.push("/user/payment"))}()}},"Click to Proceed")};return l.a.createElement("div",{class:"main-body"},function(){var e=r.Seats;i=Object(m.a)(new Array(24)).map((function(a,t){return!0!==e["Seat"+(t+1)]}))}(),l.a.createElement(D,{onAddSeat:function(e){return function(e){if(w.includes(e)){var a=w.indexOf(e);j.splice(a,1),S.splice(a,1),k.splice(a,1),w.splice(a,1)}else j.push(""),S.push(""),k.push(""),w.push(e);g(Object(E.a)(Object(E.a)({},p),{},{Name:j,Age:S,Gender:k,Seats:w}))}(e)},AllSeats:i}),function(){var e=r.TravelDate;return l.a.createElement("div",{class:"booking-summary"},l.a.createElement("div",{class:"head"},"Booking Summary"),l.a.createElement("div",{class:"detail-container"},l.a.createElement("div",null,l.a.createElement("span",null,"Bus-Type :"),l.a.createElement("span",null,r.BusType)),l.a.createElement("div",null,l.a.createElement("span",null,"From :"),l.a.createElement("span",null,r.Source)),l.a.createElement("div",null,l.a.createElement("span",null,"To :"),l.a.createElement("span",null,r.Destination)),l.a.createElement("div",null,l.a.createElement("span",null,"Date :"),l.a.createElement("span",null,("0"+e.getDate()).slice(-2)+"-"+("0"+(+e.getMonth()+1)).slice(-2)+"-"+("0"+e.getYear()).slice(-2))),l.a.createElement("div",null,l.a.createElement("span",null,"Seat No :"),l.a.createElement("span",null,w.map((function(e,a){return w.length>a+1?e+",":e}))))),l.a.createElement("div",{class:"booking-form"},j.map((function(e,a){return x(a)}))),l.a.createElement("div",{className:"details"},l.a.createElement("div",null,l.a.createElement("span",null,"Total Seat :"),l.a.createElement("span",null,w.length)),l.a.createElement("div",null,l.a.createElement("span",null,"Fare :"),l.a.createElement("span",null,"\u20b9"," ",w.length*r.Fare)),l.a.createElement("div",null,l.a.createElement("span",null,"Service Tax :"),l.a.createElement("span",null,"\u20b9"," ",w.length>=1?120:0)),l.a.createElement("div",null,l.a.createElement("span",null,"Total Charges :"),l.a.createElement("span",null,"\u20b9"," ",w.length*r.Fare+120*w.length))),C())}())},x=(t(39),function(e){var a=e.history,t=Object(n.useContext)(O).userBusDetail;t&&0!==Object.keys(t).length||a.push("/");var r=Object(n.useState)({Card:"",CVV:"",Error:"",Success:!1}),c=Object(s.a)(r,2),i=c[0],o=c[1],m=i.Card,p=i.CVV,g=(i.Success,i.Error,!1),v=!1,b=function(e){return function(a){o(Object(E.a)(Object(E.a)({},i),{},Object(u.a)({},e,a.target.value)))}},f=function(e){if(e.preventDefault(),v&&g){var n=Object(E.a)({},t);n.Bus_ID=t._id,function(e){if(localStorage.getItem("authToken")){var a=JSON.parse(localStorage.getItem("UserID")),t=JSON.parse(localStorage.getItem("authToken"));return console.log("".concat(d,"user/").concat(a,"/bookTicket")),fetch("".concat(d,"user/").concat(a,"/bookTicket"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.log(e)}))}}(Object(E.a)({},n)).then((function(){a.push("/user/ticket-history")})).catch((function(e){o(Object(E.a)(Object(E.a)({},i),{},{Error:"Unable to book ticket"}))}))}};return l.a.createElement("section",{className:"payment-container"},l.a.createElement("div",{className:"credit-card"},l.a.createElement("div",{className:"card-img"},l.a.createElement("img",{src:"../images/credit-card.svg",alt:"credit-card"})),l.a.createElement("div",{className:"accept-card"},l.a.createElement("div",null,l.a.createElement("img",{src:"../images/payment/rupay.svg",alt:"rupay"})),l.a.createElement("div",null,l.a.createElement("img",{src:"../images/payment/VISA.svg",alt:"VISA"})),l.a.createElement("div",null,l.a.createElement("img",{src:"../images/payment/master-card.svg",alt:"Master Card"})),l.a.createElement("div",null,l.a.createElement("img",{src:"../images/payment/american-xpress.svg",alt:"american-xpress"})))),l.a.createElement("div",{className:"payment-detail"},l.a.createElement("h1",null,"PAYMENT"),l.a.createElement("p",null,"Pay with Credit/Debit Card"),l.a.createElement("form",{className:"payment-form",onSubmit:function(e){return f(e)}},l.a.createElement("label",{htmlFor:"card-number"},"Credit card number"),l.a.createElement("br",null),l.a.createElement("input",{type:"number",id:"card-number",onChange:b("Card"),placeholder:"4584 XXXX XXXX 0123"}),l.a.createElement("br",null),function(){if(m&&(m.length<16||m.length>16))return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"}," It must be 16 digit"),l.a.createElement("br",null));m&&16===m.length&&(g=!0)}(),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"month",className:"exp-label"},"Expiration"),l.a.createElement("div",{className:"expiration-container"},l.a.createElement("div",{className:"exp-date"},l.a.createElement("div",{className:"exp-month"},l.a.createElement("select",{id:"month"},l.a.createElement(l.a.Fragment,null,l.a.createElement("option",null,"January"),l.a.createElement("option",null,"February"),l.a.createElement("option",null,"March"),l.a.createElement("option",null,"April"),l.a.createElement("option",null,"May"),l.a.createElement("option",null,"June"),l.a.createElement("option",null,"July"),l.a.createElement("option",null,"August"),l.a.createElement("option",null,"September"),l.a.createElement("option",null,"October"),l.a.createElement("option",null,"November"),l.a.createElement("option",null,"December")))),l.a.createElement("i",{className:"fa -fa-arrow-down"}),l.a.createElement("div",{className:"arrow"},l.a.createElement("img",{src:"../images/arrow.png",alt:"arrow"}))),l.a.createElement("div",{className:"exp-date"},l.a.createElement("div",{className:"exp-year"},l.a.createElement("select",null,l.a.createElement(l.a.Fragment,null,l.a.createElement("option",null,"2022"),l.a.createElement("option",null,"2023"),l.a.createElement("option",null,"2024"),l.a.createElement("option",null,"2025"),l.a.createElement("option",null,"2026"),l.a.createElement("option",null,"2027"),l.a.createElement("option",null,"2028"),l.a.createElement("option",null,"2029"),l.a.createElement("option",null,"2030")))),l.a.createElement("div",{className:"arrow"},l.a.createElement("img",{src:"../images/arrow.png",alt:"arrow"})))),l.a.createElement("label",{htmlFor:"cvv",className:"cvv-label"},"CVC/ CVV"),l.a.createElement("div",{className:"cvv-block"},l.a.createElement("input",{type:"number",id:"cvv",onChange:b("CVV")}),l.a.createElement("span",null,"3 or 4 digits code")),function(){if(p&&(p.length<3||p.length>4))return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:"message-box"},"Invalid CVV / CVC"),l.a.createElement("br",null));!m||3!==p.length&&4!==p.length||(v=!0)}(),function(){if(v&&g)return l.a.createElement("button",{className:"pay-btn"},"Pay Now")}())))}),C=function(){var e=Object(v.a)(g.a.mark((function e(a){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!localStorage.getItem("authToken")){e.next=6;break}return t=JSON.parse(localStorage.getItem("UserID")),n=JSON.parse(localStorage.getItem("authToken")),e.next=5,fetch("".concat(d,"tickets/user/").concat(t),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+n,"Content-Type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),F=function(){var e=Object(v.a)(g.a.mark((function e(a){var t,n,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a._id,!localStorage.getItem("authToken")){e.next=7;break}return n=JSON.parse(localStorage.getItem("UserID")),l=JSON.parse(localStorage.getItem("authToken")),e.next=6,fetch("".concat(d,"tickets/user/").concat(n,"/remove-ticket-history"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer "+l,"Content-Type":"application/json"},body:JSON.stringify({_id:t})}).then((function(e){return e.json()})).catch((function(e){console.log(e)}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),A=(t(40),function(){var e=Object(n.useState)({ticketDetails:"",loading:!1,Message:""}),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),o=i[0],m=i[1],u=(t.ticketDetails,t.loading),d=t.Message;Object(n.useEffect)((function(){p()}),[o]);var p=function(){r(Object(E.a)(Object(E.a)({},t),{},{loading:"Your tickets are loading...",Message:""})),C().then((function(e){e.Error?r(Object(E.a)(Object(E.a)({},t),{},{loading:"",Message:e.Error})):r(Object(E.a)(Object(E.a)({},t),{},{loading:"",Message:"",ticketDetails:Object(E.a)({},e)}))})).catch((function(e){r(Object(E.a)(Object(E.a)({},t),{},{loading:"",Message:"Failed to load ticket....",ticketDetails:""}))}))},g=function(e){return e.map((function(e){return l.a.createElement("span",{className:"name"},e,",")}))};return l.a.createElement("div",{class:"history-conatiner"},l.a.createElement("div",{className:"header-ticket"},"Tickets History"),function(){if(u)return l.a.createElement("div",{className:"msg-box"},u)}(),Error?function(){if(d)return l.a.createElement("div",{className:"msg-box"},d)}():null,Object.keys(t.ticketDetails).map((function(e){var a=t.ticketDetails[e]._id,n=new Date(t.ticketDetails[e].TravelDate),c=new Date(t.ticketDetails[e].Arrival),s=new Date(t.ticketDetails[e].Departure);return n=("0"+n.getDate()).slice(-2)+"-"+("0"+(+n.getMonth()+1)).slice(-2)+"-"+("0"+n.getYear()).slice(-2),c=("0"+new Date(c).getHours()).slice(-2)+":"+("0"+new Date(c).getMinutes()).slice(-2),s=("0"+new Date(s).getHours()).slice(-2)+":"+("0"+new Date(s).getMinutes()).slice(-2),l.a.createElement("div",{class:"ticket"},l.a.createElement("div",{class:"ticket-image"},l.a.createElement("img",{src:"/images/redbus.svg",alt:"bus-img"})),l.a.createElement("div",{class:"ticket-body"},l.a.createElement("div",{class:"ticket-header"},l.a.createElement("h2",null,l.a.createElement("span",null,"STATUS"),": BOOKED"),l.a.createElement("span",null,"TRANSACTION ID : ",t.ticketDetails[e].TransactionId)),l.a.createElement("div",{class:"ticket-data"},l.a.createElement("div",{class:"row"},l.a.createElement("div",null,l.a.createElement("span",null,"Bus-Type:"),l.a.createElement("span",null,t.ticketDetails[e].BusType))),l.a.createElement("div",{class:"name-row"},l.a.createElement("span",null,"Name: "),g(t.ticketDetails[e].Name)),l.a.createElement("div",{class:"name-row"},l.a.createElement("span",null,"Gender: "),g(t.ticketDetails[e].Gender)),l.a.createElement("div",{class:"row"},l.a.createElement("div",null,l.a.createElement("span",null,"From:"),l.a.createElement("span",null,t.ticketDetails[e].Source)),l.a.createElement("div",null,l.a.createElement("span",null,"To:"),l.a.createElement("span",null,t.ticketDetails[e].Destination))),l.a.createElement("div",{class:"row"},l.a.createElement("div",null,l.a.createElement("span",null,"Arrival:"),l.a.createElement("span",null,c)),l.a.createElement("div",null,l.a.createElement("span",null,"Departure:"),l.a.createElement("span",null,s))),l.a.createElement("div",{class:"row travel"},l.a.createElement("div",null,l.a.createElement("span",null,"DateofJourney:"),l.a.createElement("span",null,n)))),l.a.createElement("div",{className:"ticket-footer"},l.a.createElement("div",{className:"row flex-end"},l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-trash",title:"Remove Ticket",onClick:function(e){return function(e){F({_id:e}).then((function(e){e.error?(r(Object(E.a)(Object(E.a)({},t),{},{Message:"Failed to delete ticket history"})),m(!1)):m(!0)})).catch((function(e){r(Object(E.a)(Object(E.a)({},t),{},{Message:"Failed to delete ticket history"})),m(!1)}))}(a)}}))))))})),function(){if(0==Object.keys(t.ticketDetails).length&&!u)return l.a.createElement("div",{className:"message-box"},"No ticket history found...")}())}),B=t(27),I=function(e){var a=e.component,t=Object(B.a)(e,["component"]);return l.a.createElement(o.b,Object.assign({},t,{render:function(e){return N()?l.a.createElement(a,e):l.a.createElement(o.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},M=function(e,a){switch(a.type){case"STORE_BOOKING_DETAILS":return a.BusDetails;case"REMOVE_BOOKING_DETAILS":return{};default:return e}},P={},G=function(){var e=Object(n.useReducer)(M,P),a=Object(s.a)(e,2),t=a[0],r=a[1];return l.a.createElement(i.a,null,l.a.createElement(S,null),l.a.createElement(O.Provider,{value:{userBusDetail:t,dispatch:r}},l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/",component:j}),l.a.createElement(o.b,{exact:!0,path:"/",component:j}),l.a.createElement(o.b,{exact:!0,path:"/login",component:k}),l.a.createElement(o.b,{exact:!0,path:"/register",component:w}),l.a.createElement(I,{path:"/user/book-ticket",exact:!0,component:T}),l.a.createElement(I,{path:"/user/ticket-history",exact:!0,component:A}),l.a.createElement(I,{path:"/user/payment",exact:!0,component:x}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(41);c.a.render(l.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.4f7cefb1.chunk.js.map