(this.webpackJsonpcrud=this.webpackJsonpcrud||[]).push([[0],{10:function(e,t,a){e.exports={wrapper:"ModalForm_wrapper__3AVov",modal:"ModalForm_modal__AeW5E",labelWrapper:"ModalForm_labelWrapper__1QEVg",genderList:"ModalForm_genderList__3IycY",radioWrapper:"ModalForm_radioWrapper__3tjsY",buttonsWrapper:"ModalForm_buttonsWrapper__1eS9E",check:"ModalForm_check__19HhX",close:"ModalForm_close__eo_q-"}},13:function(e,t,a){e.exports={container:"Dashboard_container__2P0rM",wrapper:"Dashboard_wrapper__rYAcd",pageTitle:"Dashboard_pageTitle__1Jbyg",dashboard:"Dashboard_dashboard__1vpVd",dashboardItem:"Dashboard_dashboardItem__1DLCQ",title:"Dashboard_title__2Yt_F",count:"Dashboard_count__1ItKj"}},18:function(e,t,a){e.exports={button:"Header_button__3w0zL",header:"Header_header__2DaZY",avatarContainer:"Header_avatarContainer__qN9wc",avatar:"Header_avatar__1FTUf",admin:"Header_admin__3mA7P",user:"Header_user__Rs0jj",wrapper:"Header_wrapper__19LfX",menu:"Header_menu__26ZZL",logout:"Header_logout__7JeN4"}},19:function(e,t,a){e.exports={container:"UserDetail_container__2ZX57",wrapper:"UserDetail_wrapper__nlX-J",userTitle:"UserDetail_userTitle__Hw5Dx",role:"UserDetail_role__1XTqd",buttonsWrapper:"UserDetail_buttonsWrapper__3a1SP",button:"UserDetail_button__3Lom3",edit:"UserDetail_edit__uGa2J",delete:"UserDetail_delete__3c5zr"}},20:function(e,t,a){e.exports={container:"Users_container__LddPY",wrapper:"Users_wrapper__2YU95",pageTitle:"Users_pageTitle__2mIMf",contentWrapper:"Users_contentWrapper__1GZQR",userWrapper:"Users_userWrapper__3uWCi",user:"Users_user__209QA",title:"Users_title__3Mhm1",email:"Users_email__2onR3",profiles:"Users_profiles__1H0Gp"}},21:function(e,t,a){e.exports={wrapper:"LoginForm_wrapper___Afpz",form:"LoginForm_form__1xhQV",title:"LoginForm_title__2BXqm",isAdmin:"LoginForm_isAdmin__1JESN",buttonsWrapper:"LoginForm_buttonsWrapper__2bHt-",submitButton:"LoginForm_submitButton__3bU1m",divingLine:"LoginForm_divingLine__Zcg88"}},46:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a(22),s=a.n(n),c=a(8),i=a(25),o=a(34),l=a(32),u=a(2),j="SET_PROFILES",d="CREATE_PROFILE",b="DELETE_PROFILE",p="CHANGE_PROFILE",O="UPDATE_PROFILE",h="CLEAR_PROFILE_DATA",m={profiles:[],profile:null},x="TOGGLE_FORM",f={isOpen:!1},g="SET_USER",v="SET_USERNAME",A="CHANGE_USER",k="UPDATE_USER",N="CLEAR_USER_DATA",w="LOAD_STATE",E={user:{},username:null,isUser:!1,loadingState:!1},I=Object(i.combineReducers)({profiles:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case j:return Object(u.a)(Object(u.a)({},e),{},{profiles:Object(l.a)(r.items)});case d:return Object(u.a)(Object(u.a)({},e),{},{profiles:[].concat(Object(l.a)(e.profiles),[r.item])});case b:var n=e.profiles.filter((function(e){return e._id!==r.id}));return Object(u.a)(Object(u.a)({},e),{},{profiles:n});case p:var s=e.profiles.find((function(e){return e._id===r.id}));return Object(u.a)(Object(u.a)({},e),{},{profile:s});case O:var c=e.profiles.map((function(e){return e._id===r._id?Object(u.a)({},r):e}));return Object(u.a)(Object(u.a)({},e),{},{profiles:c,profile:null});case h:return Object(u.a)(Object(u.a)({},e),{},{profile:null});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,a=t.type,r=t.payload;switch(a){case g:return Object(u.a)(Object(u.a)({},e),{},{user:r});case v:return Object(u.a)(Object(u.a)({},e),{},{username:r.username});case A:return Object(u.a)(Object(u.a)({},e),{},{isUser:!0});case k:return Object(u.a)(Object(u.a)({},e),{},{user:r,isUser:!1});case N:return Object(u.a)(Object(u.a)({},e),{},{isUser:!1});case w:return Object(u.a)(Object(u.a)({},E),{},{loadingState:!e.loadingState});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,a=t.type;return a===x?Object(u.a)(Object(u.a)({},e),{},{isOpen:!e.isOpen}):e}}),P=Object(i.createStore)(I,Object(o.composeWithDevTools)()),S=a(14);function L(){}var C=Object(r.createContext)({token:null,userId:null,login:L,logout:L,isAdmin:null,isAuthenticated:!1}),U=a(5),B=a(3),F=a.n(B),M=a(6),W=a(7),_=function(){var e=Object(r.useState)(!1),t=Object(W.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(null),c=Object(W.a)(s,2),i=c[0],o=c[1],l=Object(r.useCallback)(function(){var e=Object(M.a)(F.a.mark((function e(t){var a,r,s,c,i,l=arguments;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>1&&void 0!==l[1]?l[1]:"GET",r=l.length>2&&void 0!==l[2]?l[2]:null,s=l.length>3&&void 0!==l[3]?l[3]:{},n(!0),e.prev=4,r&&(r=JSON.stringify(r),s["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:r,headers:s});case 8:return c=e.sent,e.next=11,c.json();case 11:if(i=e.sent,c.ok){e.next=14;break}throw new Error(i.message||"Something went wrong");case 14:return n(!1),e.abrupt("return",i);case 18:throw e.prev=18,e.t0=e.catch(4),n(!1),o(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]);return{loading:a,request:l,error:i,clearError:Object(r.useCallback)((function(){o(null)}),[])}},Y=(a(46),a(0)),y=function(){return Object(Y.jsx)("div",{className:"loader"})},T=a(20),D=a.n(T),H=function(e){var t=e.users;return Object(Y.jsx)("div",{className:D.a.container,children:Object(Y.jsxs)("div",{className:D.a.wrapper,children:[Object(Y.jsx)("div",{className:D.a.pageTitle,children:"Users:"}),Object(Y.jsx)("div",{className:D.a.contentWrapper,children:t.map((function(e){return Object(Y.jsx)(S.b,{to:"/user/".concat(e._id),className:D.a.userWrapper,children:Object(Y.jsxs)("div",{className:D.a.user,children:[Object(Y.jsx)("p",{className:D.a.title,children:e.username}),Object(Y.jsx)("p",{className:D.a.email,children:e.email}),Object(Y.jsx)("p",{className:D.a.profiles,children:e.profiles.length})]})},e._id)}))})]})})},R=function(){var e=_(),t=e.request,a=e.loading,n=Object(r.useState)([]),s=Object(W.a)(n,2),c=s[0],i=s[1],o=Object(r.useContext)(C).token,l=Object(r.useCallback)(Object(M.a)(F.a.mark((function e(){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t("/api/user/","GET",null,{Authorization:"Bearer ".concat(o)});case 3:a=e.sent,i(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t,o]);return Object(r.useEffect)((function(){l()}),[l]),a?Object(Y.jsx)(y,{}):Object(Y.jsx)(H,{users:c})},q=function(){return{type:x}},z=function(e){return{type:g,payload:Object(u.a)({},e)}},Q=function(){return{type:w}},K=a(15),V=function(e){return Object(Y.jsxs)("svg",Object(u.a)(Object(u.a)({width:18,height:19,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[Object(Y.jsx)("path",{d:"M2.901 12.362L13.297 1.966l.029-.008c.137-.037.335-.075.566-.079.445-.006 1.036.114 1.621.7.586.585.705 1.176.7 1.62a2.318 2.318 0 01-.088.596L5.73 15.19l-3.214.386.385-3.214z",stroke:"#4E4B66",strokeWidth:2,strokeLinecap:"round"}),Object(Y.jsx)("path",{d:"M10.7 3.149l4.04 4.04",stroke:"#4E4B66",strokeWidth:2})]}))},J=function(e){return Object(Y.jsxs)("svg",Object(u.a)(Object(u.a)({width:20,height:19,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:[Object(Y.jsx)("path",{d:"M4.059 14.65L3.55 4.5H16.45l-.508 10.15a3 3 0 01-2.996 2.85h-5.89a3 3 0 01-2.996-2.85zM7.25 4h5.5v-.5a2 2 0 00-2-2h-1.5a2 2 0 00-2 2V4z",stroke:"#4E4B66",strokeWidth:2}),Object(Y.jsx)("path",{d:"M1.75 4.25h16.5M12.25 8.75v3.75M7.75 8.75v3.75",stroke:"#4E4B66",strokeWidth:2,strokeLinecap:"round"})]}))},G=a.p+"static/media/plus.963ba94e.svg",X=a(9),Z=a.n(X),$={setProfiles:function(e){return{type:j,payload:{items:e}}},deleteProfile:function(e){return{type:b,payload:{id:e}}},changeProfile:function(e){return{type:p,payload:{id:e}}},toggleForm:q,loadState:Q},ee=Object(c.b)((function(e){return{profiles:e.profiles.profiles,loadingState:e.user.loadingState}}),$)((function(e){var t=e.profiles,a=e.setProfiles,n=e.deleteProfile,s=e.changeProfile,c=e.toggleForm,i=e.loadState,o=e.loadingState,l=Object(r.useContext)(C).token,u=_(),j=u.request,d=u.loading,b=Object(U.h)().id,p=Object(r.useCallback)(Object(M.a)(F.a.mark((function e(){var t,r;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!b){e.next=8;break}return e.next=4,j("/api/profile/".concat(b),"GET",null,{Authorization:"Bearer ".concat(l)});case 4:t=e.sent,a(t),e.next=12;break;case 8:return e.next=10,j("/api/profile/","GET",null,{Authorization:"Bearer ".concat(l)});case 10:r=e.sent,a(r);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),[l,j,a,b]),O=Object(r.useCallback)(function(){var e=Object(M.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j("/api/profile/delete","DELETE",{id:t},{Authorization:"Bearer ".concat(l)});case 3:a=e.sent,n(t),r=a.message,s="success",K.b["".concat(s)](r,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}var r,s}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),[l,j,n]);Object(r.useEffect)((function(){o||p(),o&&!b&&i()}),[p,o,i,b]);return d?Object(Y.jsx)(y,{}):Object(Y.jsxs)("div",{className:Z.a.container,children:[Object(Y.jsx)(K.a,{}),Object(Y.jsxs)("div",{className:Z.a.wrapper,children:[Object(Y.jsx)("div",{className:Z.a.pageTitle,children:"Profiles:"}),Object(Y.jsxs)("div",{className:Z.a.contentWrapper,children:[t.map((function(e){return Object(Y.jsxs)("div",{className:Z.a.profile,children:[Object(Y.jsx)("p",{className:Z.a.title,children:e.name}),Object(Y.jsx)("p",{children:e.gender}),Object(Y.jsx)("p",{children:e.birthdate.split("-").reverse().join(".")}),Object(Y.jsx)("p",{children:e.city}),Object(Y.jsxs)("div",{className:Z.a.buttonsWrapper,children:[Object(Y.jsxs)("button",{className:"".concat(Z.a.button," ").concat(Z.a.edit),onClick:function(){return t=e._id,s(t),void c();var t},children:["edit",Object(Y.jsx)(V,{})]}),Object(Y.jsx)("span",{className:Z.a.divingLine}),Object(Y.jsxs)("button",{className:"".concat(Z.a.button," ").concat(Z.a.delete),onClick:function(){return t=e._id,void O(t);var t},children:["delete",Object(Y.jsx)(J,{})]})]})]},e._id)})),Object(Y.jsxs)("div",{className:"".concat(Z.a.profile," ").concat(Z.a.pointer),onClick:function(){return c()},children:[Object(Y.jsx)("div",{className:Z.a.createBtn,children:Object(Y.jsx)("img",{src:G,alt:"create"})}),Object(Y.jsx)("p",{children:"Create new profile"})]})]})]})]})})),te=a(24),ae=function(e){return Object(Y.jsx)("svg",Object(u.a)(Object(u.a)({width:18,height:13,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(Y.jsx)("path",{d:"M6 10.17L2.53 6.7a.996.996 0 10-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L17.29 1.71A.996.996 0 1015.88.3L6 10.17z",fill:"#4E4B66"})}))},re=function(e){return Object(Y.jsx)("svg",Object(u.a)(Object(u.a)({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(Y.jsx)("path",{d:"M13.3.71a.996.996 0 00-1.41 0L7 5.59 2.11.7A.996.996 0 10.7 2.11L5.59 7 .7 11.89a.996.996 0 101.41 1.41L7 8.41l4.89 4.89a.996.996 0 101.41-1.41L8.41 7l4.89-4.89c.38-.38.38-1.02 0-1.4z",fill:"#323232"})}))},ne=a(10),se=a.n(ne),ce={createProfile:function(e){return{type:d,payload:{item:e}}},updateProfile:function(e){return{type:O,payload:Object(u.a)({},e)}},clearProfileData:function(){return{type:h}},toggleForm:q,setUser:z,updateUser:function(e){return{type:k,payload:Object(u.a)({},e)}},clearUserData:function(){return{type:N}},loadState:Q,setUsername:function(e){return{type:v,payload:{username:e}}}},ie=Object(c.b)((function(e){return{profile:e.profiles.profile,isCreate:e.profiles.isCreate,user:e.user.user}}),ce)((function(e){var t=e.createProfile,a=e.updateProfile,n=e.clearProfileData,s=e.toggleForm,c=e.profile,i=e.user,o=e.isUser,l=void 0!==o&&o,j=e.updateUser,d=e.setUser,b=e.clearUserData,p=e.loadState,O=e.setUsername,h=Object(r.useContext)(C),m=_(),x=m.request,f=m.error,g=m.clearError,v=Object(r.useState)(),A=Object(W.a)(v,2),k=A[0],N=A[1],w=Object(U.h)().id,E=function(e,t){K.b["".concat(t)](e,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})};Object(r.useEffect)((function(){E(f,"error"),g()}),[f,g]),Object(r.useEffect)((function(){N(l?i:c||{name:"",gender:"",birthdate:"",city:""})}),[c,i,l]);var I=function(e){N((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(te.a)({},e.target.name,"true"===(a=e.target.value)||"false"===a?"true"===a:a));var a}))},P=function(){var e=Object(M.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/api/auth/generate","POST",{email:t.email},{Authorization:"Bearer ".concat(h.token)});case 3:a=e.sent,h.login(a.token),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(M.a)(F.a.mark((function e(){var r,n,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,l){e.next=19;break}if(c){e.next=11;break}return e.next=5,x("/api/profile/create","POST",Object(u.a)(Object(u.a)({},k),{},{userId:w}),{Authorization:"Bearer ".concat(h.token)});case 5:r=e.sent,t(r.profile),E(r.message,"success"),s(),e.next=17;break;case 11:return e.next=13,x("/api/profile/update","POST",Object(u.a)(Object(u.a)({},c),k),{Authorization:"Bearer ".concat(h.token)});case 13:n=e.sent,a(n.profile),E(n.message,"success"),s();case 17:e.next=33;break;case 19:return e.next=21,x("/api/user/update","POST",{user:Object(u.a)({},k),id:w},{Authorization:"Bearer ".concat(h.token)});case 21:if((i=e.sent).user._id!==h.userId||i.user.isAdmin===k.isAdmin){e.next=28;break}return p(),e.next=26,P(i.user);case 26:return s(),e.abrupt("return");case 28:i.user._id===h.userId&&i.user.username!==k.username&&O(k.username),E(i.message,"success"),j(k),d(k),s();case 33:e.next=37;break;case 35:e.prev=35,e.t0=e.catch(0);case 37:case"end":return e.stop()}}),e,null,[[0,35]])})));return function(){return e.apply(this,arguments)}}();return Object(Y.jsxs)("div",{className:se.a.wrapper,children:[Object(Y.jsx)(K.a,{}),Object(Y.jsxs)("div",{className:se.a.modal,children:[l&&k&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("div",{className:se.a.labelWrapper,children:Object(Y.jsxs)("label",{children:["user name:",Object(Y.jsx)("input",{name:"username",type:"text",value:k.username||"",onChange:I})]})}),Object(Y.jsx)("div",{className:se.a.labelWrapper,children:Object(Y.jsxs)("label",{children:["email:",Object(Y.jsx)("input",{name:"email",type:"text",value:k.email||"",onChange:I})]})}),Object(Y.jsxs)("div",{className:se.a.genderList,children:[Object(Y.jsx)("span",{children:"role:"}),Object(Y.jsxs)("div",{className:se.a.radioWrapper,children:[Object(Y.jsxs)("label",{children:[Object(Y.jsx)("input",{id:"user",type:"radio",onChange:I,name:"isAdmin",value:"false",required:!0,checked:!1===k.isAdmin}),Object(Y.jsx)("span",{children:"user"})]}),Object(Y.jsxs)("label",{children:[Object(Y.jsx)("input",{id:"admin",type:"radio",onChange:I,name:"isAdmin",value:"true",required:!0,checked:!0===k.isAdmin}),"admin"]})]})]})]}),!l&&k&&Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)("div",{className:se.a.labelWrapper,children:Object(Y.jsxs)("label",{children:["name:",Object(Y.jsx)("input",{name:"name",type:"text",value:k.name||"",onChange:I})]})}),Object(Y.jsxs)("div",{className:se.a.genderList,children:[Object(Y.jsx)("span",{children:"gender:"}),Object(Y.jsxs)("div",{className:se.a.radioWrapper,children:[Object(Y.jsxs)("label",{children:[Object(Y.jsx)("input",{id:"male",type:"radio",onChange:I,name:"gender",value:"male",required:!0,checked:"male"===k.gender}),Object(Y.jsx)("span",{children:"male"})]}),Object(Y.jsxs)("label",{children:[Object(Y.jsx)("input",{id:"female",type:"radio",onChange:I,name:"gender",value:"female",required:!0,checked:"female"===k.gender}),Object(Y.jsx)("span",{children:"female"})]})]})]}),Object(Y.jsx)("div",{className:se.a.labelWrapper,children:Object(Y.jsxs)("label",{children:["birthdate:",Object(Y.jsx)("input",{name:"birthdate","data-date-format":"DD MMMM YYYY",type:"date",value:k.birthdate||"",max:(new Date).toISOString().slice(0,-14),onChange:I})]})}),Object(Y.jsx)("div",{className:se.a.labelWrapper,children:Object(Y.jsxs)("label",{children:["city:",Object(Y.jsx)("input",{name:"city",type:"text",value:k.city||"",onChange:I})]})})]}),Object(Y.jsxs)("div",{className:se.a.buttonsWrapper,children:[Object(Y.jsx)("button",{onClick:S,className:se.a.check,children:Object(Y.jsx)(ae,{})}),Object(Y.jsx)("button",{onClick:function(){s(),n(),b()},className:se.a.close,children:Object(Y.jsx)(re,{})})]})]})]})})),oe=Object(c.b)((function(e){return{isOpen:e.modal.isOpen}}))((function(e){var t=e.isOpen;return Object(Y.jsxs)(Y.Fragment,{children:[t&&Object(Y.jsx)(ie,{}),Object(Y.jsx)(ee,{})]})})),le=(a(52),a(21)),ue=a.n(le),je=function(e){var t=e.isSignIn,a=e.userData,r=e.loading,n=e.submitHandler,s=e.handleCheck,c=e.handleChange;return Object(Y.jsxs)("div",{className:ue.a.wrapper,children:[Object(Y.jsx)(K.a,{}),Object(Y.jsx)("div",{className:ue.a.title,children:t?"Sign in":"Create your account"}),Object(Y.jsxs)("form",{className:ue.a.form,onSubmit:n,children:[!t&&Object(Y.jsxs)("label",{children:["Username",Object(Y.jsx)("input",{type:"text",name:"username",onChange:c,value:a.username,minLength:"1",required:!0})]}),Object(Y.jsxs)("label",{children:["Email",Object(Y.jsx)("input",{type:"email",name:"email",onChange:c,value:a.email,required:!0})]}),Object(Y.jsxs)("label",{children:["Password",Object(Y.jsx)("input",{type:"password",name:"password",onChange:c,value:a.password,minLength:"6",required:!0})]}),!t&&Object(Y.jsxs)("label",{className:ue.a.isAdmin,children:[Object(Y.jsx)("input",{type:"checkbox",name:"isAdmin",checked:a.isAdmin,onChange:s}),"is admin"]}),Object(Y.jsxs)("div",{className:ue.a.buttonsWrapper,children:[Object(Y.jsx)("button",{className:ue.a.submitButton,type:"submit",disabled:r,children:t?"Sign In":"Sign Up"}),Object(Y.jsx)("span",{className:ue.a.divingLine}),Object(Y.jsx)("a",{href:"".concat(t?"/signup":"/"),children:t?"Sign Up":"Sign In"})]})]})]})},de=function(e){var t=e.isSignIn,a={username:"",email:"",password:"",isAdmin:!1},n=Object(U.g)(),s=Object(r.useContext)(C),c=_(),i=c.loading,o=c.request,l=c.error,j=c.clearError,d=Object(r.useState)(a),b=Object(W.a)(d,2),p=b[0],O=b[1];Object(r.useEffect)((function(){h(l,"error"),j()}),[l,j]);var h=function(e,t){K.b["".concat(t)](e,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},m=function(){var e=Object(M.a)(F.a.mark((function e(r){var c,i;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),e.prev=1,t){e.next=11;break}return e.next=5,o("/api/auth/register","POST",Object(u.a)({},p));case 5:c=e.sent,h(c.message,"success"),n.push("/"),O(Object(u.a)({},a)),e.next=15;break;case 11:return e.next=13,o("/api/auth/login","POST",{email:p.email,password:p.password});case 13:i=e.sent,s.login(i.token);case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(1);case 19:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(Y.jsx)(je,{submitHandler:m,handleCheck:function(e){O(Object(u.a)(Object(u.a)({},p),{},{isAdmin:e.target.checked}))},handleChange:function(e){O((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(te.a)({},e.target.name,e.target.value))}))},userData:p,isSignIn:t,loading:i})},be=a(13),pe=a.n(be),Oe=function(e){var t=e.users,a=e.profiles;return Object(Y.jsx)("div",{className:pe.a.container,children:Object(Y.jsxs)("div",{className:pe.a.wrapper,children:[Object(Y.jsx)("div",{className:pe.a.pageTitle,children:"Dashboard:"}),Object(Y.jsxs)("div",{className:pe.a.dashboard,children:[Object(Y.jsxs)("div",{className:pe.a.dashboardItem,children:[Object(Y.jsx)("p",{className:pe.a.title,children:"Users:"}),Object(Y.jsx)("p",{className:pe.a.count,children:t.length})]}),Object(Y.jsxs)("div",{className:pe.a.dashboardItem,children:[Object(Y.jsx)("p",{className:pe.a.title,children:"Profiles:"}),Object(Y.jsx)("p",{className:pe.a.count,children:a.profiles.length})]}),Object(Y.jsxs)("div",{className:pe.a.dashboardItem,children:[Object(Y.jsx)("p",{className:pe.a.title,children:"Profiles over 18 years old:"}),Object(Y.jsx)("p",{className:pe.a.count,children:a.adults})]})]})]})})},he=function(){var e=Object(r.useContext)(C).token,t=_(),a=t.request,n=t.loading,s=Object(r.useState)(null),c=Object(W.a)(s,2),i=c[0],o=c[1],l=Object(r.useState)(null),u=Object(W.a)(l,2),j=u[0],d=u[1],b=Object(r.useCallback)(Object(M.a)(F.a.mark((function t(){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/user/","GET",null,{Authorization:"Bearer ".concat(e)});case 3:r=t.sent,o(r),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[a,e]),p=Object(r.useCallback)(Object(M.a)(F.a.mark((function t(){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/profile/all","GET",null,{Authorization:"Bearer ".concat(e)});case 3:r=t.sent,d(r),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,a]);return Object(r.useEffect)((function(){b(),p()}),[b,p]),n?Object(Y.jsx)(y,{}):i&&j?Object(Y.jsx)(Oe,{users:i,profiles:j}):Object(Y.jsx)(y,{})},me=a(19),xe=a.n(me),fe={setUser:z,changeUser:function(e){return{type:A,payload:{id:e}}},toggleForm:q},ge=Object(c.b)((function(e){return{user:e.user.user,loadingState:e.user.loadingState}}),fe)((function(e){var t=e.user,a=e.setUser,n=e.changeUser,s=e.toggleForm,c=e.loadingState,i=_(),o=i.request,l=i.loading,u=Object(r.useContext)(C).token,j=Object(U.h)().id,d=Object(r.useContext)(C),b=Object(r.useCallback)(Object(M.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("/api/user/".concat(j),"GET",null,{Authorization:"Bearer ".concat(u)});case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[o,u,j,a]),p=Object(r.useCallback)(Object(M.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o("/api/user/delete","DELETE",{userId:j},{Authorization:"Bearer ".concat(u)});case 3:(t=e.sent).id===j&&d.logout(),a=t.message,r="success",K.b["".concat(r)](a,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}var a,r}),e,null,[[0,8]])}))),[o,u,j,d]);Object(r.useEffect)((function(){c||b()}),[b,c]);return l?Object(Y.jsx)(y,{}):Object(Y.jsxs)("div",{className:xe.a.container,children:[Object(Y.jsx)(K.a,{}),!l&&t&&Object(Y.jsxs)("div",{className:xe.a.wrapper,children:[Object(Y.jsx)("div",{className:xe.a.userTitle,children:t.username}),Object(Y.jsx)("div",{className:xe.a.userTitle,children:t.email}),Object(Y.jsx)("div",{className:xe.a.role,children:t.isAdmin?"admin":"user"}),Object(Y.jsxs)("div",{className:xe.a.buttonsWrapper,children:[Object(Y.jsx)("button",{className:"".concat(xe.a.button," ").concat(xe.a.edit),onClick:function(){s(),n()},children:Object(Y.jsx)(V,{})}),Object(Y.jsx)("button",{className:"".concat(xe.a.button," ").concat(xe.a.delete),onClick:function(){p()},children:Object(Y.jsx)(J,{})})]})]})]})})),ve=Object(c.b)((function(e){return{isOpen:e.modal.isOpen,isUser:e.user.isUser}}))((function(e){var t=e.isOpen,a=e.isUser;return Object(Y.jsxs)(Y.Fragment,{children:[t&&Object(Y.jsx)(ie,{isUser:a}),Object(Y.jsx)(ge,{}),Object(Y.jsx)(ee,{})]})})),Ae="userData",ke=function(){var e=Object(r.useState)(null),t=Object(W.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(!1),i=Object(W.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)(null),j=Object(W.a)(u,2),d=j[0],b=j[1],p=Object(r.useState)(null),O=Object(W.a)(p,2),h=O[0],m=O[1],x=_(),f=x.request,g=x.loading,v=Object(c.c)(),A=Object(r.useCallback)((function(){n(null),b(null),m(null),localStorage.removeItem(Ae)}),[]),k=Object(r.useCallback)(function(){var e=Object(M.a)(F.a.mark((function e(t){var a;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f("/api/auth/token","GET",null,{Authorization:"Bearer ".concat(t)});case 3:a=e.sent,n(t),b(a.decoded.userId),m(a.decoded.isAdmin),v({type:"SET_USERNAME",payload:{username:a.username}}),localStorage.setItem(Ae,JSON.stringify({token:t})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message),A();case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),[f,A,v]);return Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem(Ae));e&&e.token&&k(e.token),l(!0)}),[k]),{login:k,logout:A,token:a,userId:d,isAdmin:h,loading:g,ready:o}},Ne=a.p+"static/media/profiles.d21377e2.svg",we=a.p+"static/media/dashboard.f8df87e1.svg",Ee=a.p+"static/media/users.1d43cb17.svg",Ie=a(18),Pe=a.n(Ie),Se=Object(c.b)((function(e){return{username:e.user.username}}))((function(e){var t=e.username,a=Object(U.g)(),n=Object(r.useContext)(C);return Object(Y.jsxs)("header",{className:Pe.a.header,children:[Object(Y.jsxs)("div",{className:Pe.a.avatarContainer,children:[Object(Y.jsx)("span",{className:"".concat(Pe.a.avatar," ").concat(n.isAdmin?Pe.a.admin:Pe.a.user),style:{backgroundImage:"url(".concat(n.isAdmin?"data:image/png;base64,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":"data:image/png;base64,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",")")}}),Object(Y.jsx)("span",{children:t})]}),Object(Y.jsxs)("div",{className:Pe.a.wrapper,children:[n.isAdmin&&Object(Y.jsxs)("nav",{className:Pe.a.menu,children:[Object(Y.jsx)("div",{className:Pe.a.button,children:Object(Y.jsxs)(S.c,{to:"/profiles",children:["Profiles",Object(Y.jsx)("img",{src:Ne,alt:"profiles logo"})]})}),Object(Y.jsx)("div",{className:Pe.a.button,children:Object(Y.jsxs)(S.c,{to:"/dashboard",children:["Dashboard",Object(Y.jsx)("img",{src:we,alt:"dashboard logo"})]})}),Object(Y.jsx)("div",{className:Pe.a.button,children:Object(Y.jsxs)(S.c,{to:"/users",children:["Users",Object(Y.jsx)("img",{src:Ee,alt:"users logo"})]})})]}),Object(Y.jsx)("div",{className:Pe.a.logout,children:Object(Y.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),n.logout(),a.push("/")},children:"Log Out"})})]})]})}));var Le=function(){var e=ke(),t=e.token,a=e.login,r=e.logout,n=e.userId,s=e.isAdmin,c=e.loading,i=e.ready,o=!!t,l=function(e,t,a){return e&&!t?Object(Y.jsxs)(U.d,{children:[Object(Y.jsx)(U.b,{path:"/profiles",exact:!0,children:Object(Y.jsx)(oe,{})}),Object(Y.jsx)(U.a,{to:"/profiles"})]}):e&&t?Object(Y.jsxs)(U.d,{children:[Object(Y.jsx)(U.b,{path:"/profiles",exact:!0,children:Object(Y.jsx)(oe,{})}),Object(Y.jsx)(U.b,{path:"/users",exact:!0,children:Object(Y.jsx)(R,{})}),Object(Y.jsx)(U.b,{path:"/dashboard",exact:!0,children:Object(Y.jsx)(he,{})}),Object(Y.jsx)(U.b,{path:"/user/:id",children:Object(Y.jsx)(ve,{isAdmin:t})}),Object(Y.jsx)(U.a,{to:"/profiles"})]}):Object(Y.jsxs)(U.d,{children:[Object(Y.jsx)(U.b,{path:"/",exact:!0,children:Object(Y.jsx)(de,{isSignIn:a})}),Object(Y.jsx)(U.b,{path:"/signup",exact:!0,children:Object(Y.jsx)(de,{isSignIn:!1})}),Object(Y.jsx)(U.a,{to:"/"})]})}(o,s,!0);return!i||c?Object(Y.jsx)(y,{}):Object(Y.jsx)(C.Provider,{value:{token:t,login:a,logout:r,userId:n,isAuthenticated:o,isAdmin:s},children:Object(Y.jsxs)(S.a,{children:[o&&Object(Y.jsx)(Se,{}),l]})})};a(53);s.a.render(Object(Y.jsx)(c.a,{store:P,children:Object(Y.jsx)(Le,{})}),document.getElementById("root"))},9:function(e,t,a){e.exports={profile:"Profiles_profile__1LU8z",container:"Profiles_container__x_Mon",wrapper:"Profiles_wrapper__1AZ1C",pageTitle:"Profiles_pageTitle__23YFs",contentWrapper:"Profiles_contentWrapper__2fBMJ",title:"Profiles_title__3oOvJ",createBtn:"Profiles_createBtn__c-enh",pointer:"Profiles_pointer__2Gpuh",buttonsWrapper:"Profiles_buttonsWrapper__1kN51",button:"Profiles_button__1QE4F",edit:"Profiles_edit__3JDya",delete:"Profiles_delete__2aBSp",divingLine:"Profiles_divingLine__1SYic"}}},[[54,1,2]]]);
//# sourceMappingURL=main.26527356.chunk.js.map