(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(28),a=n(4),o={dialogs:[{id:1,name:"Dimych"},{id:2,name:"Artem"},{id:3,name:"Roman"},{id:4,name:"Vadim"},{id:5,name:"Vladimir"},{id:6,name:"Maria"}],messages:[{id:0,message:"Hi."},{id:1,message:"I'am fine"},{id:2,message:"How are you?"}],newMessage:""},c=function(e){return{type:"ADD-MESSAGE",message:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:3,message:t.message}])});case"UPDATE-NEW-MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{newMessage:t.newMessage});default:return e}}},118:function(e,t,n){e.exports=n.p+"static/media/image.4e4422c6.png"},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return i}));var r=n(69),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"369a3457-d3e2-4331-b490-319ddee29442"}}),o={setUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},setFollow:function(e){return a.post("follow/".concat(e)).then((function(e){return e.data}))},setUnFollow:function(e){return a.delete("follow/".concat(e)).then((function(e){return e.data}))}},c={getProfile:function(e){return a.get("profile/"+e).then((function(e){return e.data}))},getStatus:function(e){return a.get("profile/status/"+e).then((function(e){return e.data}))},updateStatus:function(e){return a.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return a.put("profile",e).then((function(e){return e.data}))}},u={getAuth:function(){return a.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url").then((function(e){return e.data}))}}},135:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__2Tihg"}},136:function(e,t,n){e.exports=n.p+"static/media/preloader.1714aebd.gif"},162:function(e,t,n){e.exports=n(291)},23:function(e,t,n){e.exports={nav:"Navbar_nav__320r_",item:"Navbar_item__3ZbLW",activeLink:"Navbar_activeLink__2Napf"}},246:function(e,t,n){},247:function(e,t,n){},291:function(e,t,n){"use strict";n.r(t);var r=n(9),a=n(94),o=n(105),c=n(22),u=n.n(c),i=n(54),l=n(28),s=n(4),d=n(12),m=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(s.a)(Object(s.a)({},e),r):e}))},f={users:[],pageSize:5,totalUserCount:10,currentPage:1,isFetching:!1,followingInProgress:[]},p=function(e){return{type:"FOLLOW",userId:e}},h=function(e){return{type:"UNFOLLOW",userId:e}},g=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},E=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},b=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},v=function(){var e=Object(i.a)(u.a.mark((function e(t,n,r,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(b(!0,n)),e.next=3,r(n);case 3:0===e.sent.resultCode&&t(a(n)),t(b(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:m(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(s.a)(Object(s.a)({},e),{},{users:m(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(s.a)(Object(s.a)({},e),{},{users:Object(l.a)(t.users)});case"SET_CURRENT_PAGE":return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USER_COUNT":return Object(s.a)(Object(s.a)({},e),{},{totalUserCount:t.totalUserCount});case"TOGGLE_IS_FETCHING":return Object(s.a)(Object(s.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(s.a)(Object(s.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(l.a)(e.followingInProgress),[t.userId]):Object(l.a)(e.followingInProgress.filter((function(e){return e!==t.userId})))});default:return e}},w=n(55),j={userId:0,email:null,isAuth:!1,login:"",captchaUrl:null},_=function(e,t,n,r){return{type:"SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},S=function(){return function(e,t){return d.a.getAuth().then((function(t){if(0===t.resultCode){var n=t.data,r=n.id,a=n.email,o=n.login;e(_(r,a,o,!0))}}))}},P=function(){return function(e,t){d.c.getCaptchaUrl().then((function(t){var n=t.data.url;e(function(e){return{type:"GET_CAPTCHA_URL",captchaUrl:e}}(n))}))}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(s.a)(Object(s.a)({},e),t.payload);case"GET_CAPTCHA_URL":return Object(s.a)(Object(s.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}},y=n(132),C=n(131),A={initialized:!1},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZED":return Object(s.a)(Object(s.a)({},e),{},{initialized:!0});default:return e}},I=n(69),U=n.n(I).a.create({baseURL:"".concat("https://cors-anywhere.herokuapp.com/","https://newsapi.org/v2/")}),x=function(e,t,n,r,a){return U.get("everything?q=Apple&from=2021-11-11&sortBy=popularity&apiKey=3d5ebf17d7d3402783a28bda3e0c1759",{params:{sources:e,q:t,language:n,country:r,category:a}}).then((function(e){return e.data}))},k={articles:[{source:{id:"the-verge",name:"The Verge"},author:"Jay Peters",title:"You can see Netflix\u2019s new AV1 streaming tech on select TVs and the PS4 Pro",description:"Netflix now supports the AV1 codec when streaming to some TVs. It\u2019s only available on a select number of devices to start, though that list includes any TV connected to the PS4 Pro.",url:"https://www.theverge.com/2021/11/10/22775150/netflix-av1-codec-tv-streaming-ps4-pro",urlToImage:"https://cdn.vox-cdn.com/thumbor/z7NKhXwT3kSZUT8D0tQmI_Moz74=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13370033/acastro_181101_1777_netflix_0001.jpg",publishedAt:"2021-11-11T01:47:49Z",content:"Netflix first used AV1 on Android\r\nIllustration by Alex Castro / The Verge\r\nNetflix now supports the AV1 codec when streaming to some TVs, the company announced on Tuesday. Its only available on a se\u2026 [+2046 chars]"}],error:null},L=Object(r.c)({profilePage:a.b,dialogPage:o.b,usersPage:O,auth:T,form:C.a,app:N,news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-NEWS":return Object(s.a)(Object(s.a)({},e),{},{articles:t.articles});case"SET-ERROR":return Object(s.a)(Object(s.a)({},e),{},{error:t.error});default:return e}}}),F=Object(r.e)(L,Object(r.a)(y.a));window.store=F;var R=F,z=n(0),G=n.n(z),D=n(65),M=n.n(D),V=(n(246),n(34)),H=n(35),W=n(38),B=n(37),J=(n(247),n(11)),Z=n(23),q=n.n(Z),K=function(){return G.a.createElement("nav",{className:q.a.nav},G.a.createElement("div",{className:q.a.item},G.a.createElement(J.b,{to:"/profile"},"Profile")),G.a.createElement("div",{className:q.a.item},G.a.createElement(J.b,{to:"/dialogs"},"Dialogs")),G.a.createElement("div",{className:q.a.item},G.a.createElement(J.b,{to:"/news"}," News")),G.a.createElement("div",{className:q.a.item},G.a.createElement(J.b,{to:"/music"},"Music")),G.a.createElement("div",{className:q.a.item},G.a.createElement(J.b,{to:"/settings"},"Settings")),G.a.createElement("div",{className:q.a.item},G.a.createElement(J.b,{to:"/users"},"Users")),G.a.createElement("div",{className:q.a.item},G.a.createElement(J.b,{to:"/login"},"Login")))},X=function(){return G.a.createElement("div",null,"music")},Q=n(10),Y=n(32),$=n.n(Y),ee=function(e){var t=e.source,n=e.author,r=e.title,a=e.description,o=e.url,c=e.urlToImage,u=e.publishedAt,i=e.content;return G.a.createElement("div",{className:$.a.wrapperContainer},G.a.createElement("div",{className:$.a.image},G.a.createElement("img",{src:c,alt:"image"})),G.a.createElement("div",{className:$.a.container},G.a.createElement("div",{className:$.a.title},r),G.a.createElement("div",{className:$.a.subtitle},G.a.createElement("div",null,n),G.a.createElement("div",null,t.name),G.a.createElement("div",null,u)),G.a.createElement("div",{className:$.a.description},a),G.a.createElement("a",{href:o}),G.a.createElement("div",null,i)))};var te=function(){var e=Object(Q.c)(),t=Object(Q.d)((function(e){return e.news.articles})),n=Object(Q.d)((function(e){return e.news.error}));return Object(z.useEffect)((function(){e((function(e,t){x().then((function(t){"ok"===t.status&&e({type:"SET-NEWS",articles:t.articles})})).catch((function(t){e(function(e){return{type:"SET-ERROR",error:e}}(t.message))}))}))}),[]),G.a.createElement("div",null,n&&G.a.createElement("div",null,n),t.map((function(e){var t=e.source,n=e.author,r=e.title,a=e.description,o=e.url,c=e.urlToImage,u=e.publishedAt,i=e.content;return G.a.createElement("div",{key:r},G.a.createElement(ee,{source:t,author:n,title:r,description:a,url:o,urlToImage:c,publishedAt:u,content:i}))})))};var ne=function(){return G.a.createElement("div",null,"Settings")},re=n(8),ae=n(68),oe=n(96),ce=n(71),ue=n.n(ce),ie=n(134),le=n.n(ie);var se=function(e){for(var t=e.totalItemsCount,n=e.pageSize,r=e.currentPage,a=e.onPageChanged,o=e.portionSize,c=void 0===o?10:o,u=Math.ceil(t/n),i=[],l=1;l<=u;l++)i.push(l);var s=Math.ceil(u/c),d=Object(z.useState)(1),m=Object(oe.a)(d,2),f=m[0],p=m[1],h=(f-1)*c+1,g=f*c;return G.a.createElement("div",{className:ue.a.paginator},f>1&&G.a.createElement("button",{onClick:function(){p(f-1)}},"PREV"),i.filter((function(e){return e>=h&&e<=g})).map((function(e){return G.a.createElement("span",{className:le()(Object(ae.a)({},ue.a.selectedPage,r===e),ue.a.pageNumber),key:e,onClick:function(t){a(e)}},e)})),s>f&&G.a.createElement("button",{onClick:function(){p(f+1)}},"NEXT"))},de=n(135),me=n.n(de),fe=n(118),pe=n.n(fe);var he=function(e){var t=e.user,n=e.follow,r=e.unFollow,a=e.followingInProgress;return G.a.createElement("div",null,G.a.createElement("div",null,G.a.createElement("span",null,G.a.createElement("div",null,G.a.createElement(J.b,{to:"/profile/"+t.id},G.a.createElement("img",{src:null!=t.photos.small?t.photos.small:pe.a,className:me.a.userPhoto,alt:"small"}))),G.a.createElement("div",null,t.followed?G.a.createElement("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"Unfollow"):G.a.createElement("button",{disabled:a.some((function(e){return e===t.id})),onClick:function(){n(t.id)}},"Follow"))),G.a.createElement("span",null,G.a.createElement("div",null,t.name),G.a.createElement("div",null,t.status)),G.a.createElement("span",null,G.a.createElement("div",null,"user.location.country"),G.a.createElement("div",null,"user.location.city"))))};var ge=function(e){var t=e.users,n=e.follow,r=e.unFollow,a=e.onPageChanged,o=e.totalUserCount,c=e.pageSize,u=e.currentPage,i=e.followingInProgress;return G.a.createElement("div",null,G.a.createElement(se,{currentPage:u,totalItemsCount:o,pageSize:c,onPageChanged:a,portionSize:10}),G.a.createElement("div",null,t.map((function(e){return G.a.createElement(he,{user:e,key:e.id,follow:n,unFollow:r,followingInProgress:i})}))))},Ee=n(39),be=n(95),ve=function(e){return e.usersPage.users},Oe=function(e){return e.usersPage.pageSize},we=function(e){return e.usersPage.totalUserCount},je=function(e){return e.usersPage.currentPage},_e=function(e){return e.usersPage.isFetching},Se=function(e){return e.usersPage.followingInProgress},Pe=function(e){Object(W.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return G.a.createElement(G.a.Fragment,null,this.props.isFetching?G.a.createElement(Ee.a,null):null,G.a.createElement(ge,{onPageChanged:this.onPageChanged,totalUserCount:this.props.totalUserCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,users:this.props.users,follow:this.props.follow,unFollow:this.props.unFollow,followingInProgress:this.props.followingInProgress}))}}]),n}(G.a.Component),Te=Object(r.d)(be.a,Object(Q.b)((function(e){return{users:ve(e),pageSize:Oe(e),totalUserCount:we(e),currentPage:je(e),isFetching:_e(e),followingInProgress:Se(e)}}),{follow:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(n,r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,d.d.setFollow.bind(d.d),p);case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},unFollow:function(e){return function(){var t=Object(i.a)(u.a.mark((function t(n,r){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(n,e,d.d.setUnFollow.bind(d.d),h);case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},setCurrentPage:g,getUsers:function(e,t){return function(){var n=Object(i.a)(u.a.mark((function n(r,a){var o;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(g(e)),r(E(!0)),n.next=4,d.d.setUsers(e,t);case 4:o=n.sent,r(E(!1)),r({type:"SET_USERS",users:o.items}),r({type:"SET_TOTAL_USER_COUNT",totalUserCount:o.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}))(Pe),ye=n(91),Ce=n.n(ye),Ae=function(e){return G.a.createElement("header",{className:Ce.a.header},G.a.createElement("img",{src:"https://cryptologos.cc/logos/aeternity-ae-logo.png",alt:"logo"}),G.a.createElement("div",{className:Ce.a.loginBlock},e.isAuth?G.a.createElement("div",null,e.login," - ",G.a.createElement("button",{onClick:e.logout},"Log out")," "):G.a.createElement(J.b,{to:"/login"},"LOGIN")))},Ne=function(e){Object(W.a)(n,e);var t=Object(B.a)(n);function n(){return Object(V.a)(this,n),t.apply(this,arguments)}return Object(H.a)(n,[{key:"render",value:function(){return G.a.createElement(Ae,this.props)}}]),n}(G.a.Component),Ie=Object(Q.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(e,t){d.a.logout().then((function(t){0===t.data.resultCode&&e(_(0,"","",!1))}))}}})(Ne),Ue=n(129),xe=n(130),ke=n(63),Le=n(86),Fe=n(52),Re=n.n(Fe),ze=Object(xe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return G.a.createElement("form",{onSubmit:t},G.a.createElement("div",null,G.a.createElement(Ue.a,{placeholder:"Email",name:"email",component:ke.a,validate:[Le.b]})),G.a.createElement("div",null,G.a.createElement(Ue.a,{placeholder:"Password",name:"password",type:"password",component:ke.a,validate:[Le.b]})),G.a.createElement("div",null,G.a.createElement(Ue.a,{type:"checkbox",name:"rememberMe",component:ke.a}),"remember me"),n&&G.a.createElement("div",{className:Re.a.formSummaryError},n),G.a.createElement("div",null,G.a.createElement("button",null,"Login")))})),Ge=Object(Q.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{login:function(e,t,n){return function(r,a){d.a.login(e,t,n).then((function(e){if(0===e.data.resultCode)r(S());else{10===e.data.resultCode&&r(P());var t=e.data.messages.length>0?e.data.messages[0]:"some error";r(Object(w.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?G.a.createElement(re.a,{to:"/profile"}):G.a.createElement("div",null,G.a.createElement("h1",null,"Login"),G.a.createElement(ze,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}}))})),De=G.a.lazy((function(){return n.e(4).then(n.bind(null,297))})),Me=G.a.lazy((function(){return n.e(3).then(n.bind(null,296))})),Ve=function(e){Object(W.a)(n,e);var t=Object(B.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(){alert("Some error occurred")},e}return Object(H.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?G.a.createElement("div",{className:"app-wrapper"},G.a.createElement(Ie,null),G.a.createElement(K,null),G.a.createElement("div",{className:"app-wrapper-content"},G.a.createElement(re.d,null,G.a.createElement(re.b,{exact:!0,path:"/",render:function(){return G.a.createElement(re.a,{to:"/profile"})}}),G.a.createElement(re.b,{path:"/dialogs",render:function(){return G.a.createElement(G.a.Suspense,{fallback:G.a.createElement(Ee.a,null)},G.a.createElement(De,null))}}),G.a.createElement(re.b,{path:"/profile/:userId?",render:function(){return G.a.createElement(G.a.Suspense,{fallback:G.a.createElement(Ee.a,null)},G.a.createElement(Me,null))}}),G.a.createElement(re.b,{path:"/music",render:function(){return G.a.createElement(X,null)}}),G.a.createElement(re.b,{path:"/news",render:function(){return G.a.createElement(te,null)}}),G.a.createElement(re.b,{path:"/settings",render:function(){return G.a.createElement(ne,null)}}),G.a.createElement(re.b,{path:"/users",render:function(){return G.a.createElement(Te,null)}}),G.a.createElement(re.b,{path:"/login",render:function(){return G.a.createElement(Ge,null)}}),G.a.createElement(re.b,{path:"/*",render:function(){return G.a.createElement("div",null," 404 NOT FOUND")}})))):G.a.createElement(Ee.a,null)}}]),n}(G.a.Component),He=Object(Q.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e,t){var n=e(S());Promise.all([n]).then((function(){e({type:"SET_INITIALIZED"})}))}}})(Ve);M.a.render(G.a.createElement(J.a,null,G.a.createElement(Q.a,{store:R},G.a.createElement(He,null))),document.getElementById("root"))},32:function(e,t,n){e.exports={wrapperContainer:"NewsCard_wrapperContainer__3Vlni",image:"NewsCard_image__1eupA",container:"NewsCard_container__2QNX1",subtitle:"NewsCard_subtitle__3Jlma",title:"NewsCard_title__2aEmM",description:"NewsCard_description__2RjdA"}},39:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(136),c=n.n(o);t.a=function(){return a.a.createElement("div",null,a.a.createElement("img",{src:c.a,alt:"preloader"}))}},52:function(e,t,n){e.exports={formControl:"TextArea_formControl__qsM9L",error:"TextArea_error__3jrad",formSummaryError:"TextArea_formSummaryError__3JgpO"}},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return s}));var r=n(43),a=n(0),o=n.n(a),c=n(52),u=n.n(c),i=function(e){e.input;var t=e.meta,n=(e.child,Object(r.a)(e,["input","meta","child"])),a=t.touched&&t.error;return o.a.createElement("div",{className:u.a.formControl+" "+(a?u.a.error:"")},o.a.createElement("div",null,n.children),a&&o.a.createElement("span",null,t.error))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(i,e," ",o.a.createElement("textarea",Object.assign({},t,n)))},s=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(i,e," ",o.a.createElement("input",Object.assign({},t,n)))}},71:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__2Gd5r"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length ".concat(e," symbols ")}}},91:function(e,t,n){e.exports={header:"Header_header__3sFD7",loginBlock:"Header_loginBlock__3r8H4"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"g",(function(){return d})),n.d(t,"e",(function(){return m})),n.d(t,"f",(function(){return f}));var r=n(28),a=n(4),o=n(12),c={posts:[{id:0,message:"Hi, how are you?",likesCount:15},{id:1,message:"It's my first post",likesCount:17}],newPostText:"cdscdscsdc",profile:null,status:""},u=function(e){return{type:"ADD-POST",postMessage:e}},i=function(e){return{type:"SET-STATUS",status:e}},l=function(e){return function(t,n){o.b.getProfile(e).then((function(e){t({type:"SET-USER-PROFILE",profile:e})}))}},s=function(e){return function(t,n){o.b.getStatus(e).then((function(e){t(i(e))}))}},d=function(e){return function(t,n){o.b.updateStatus(e).then((function(n){0===n.resultCode&&t(i(e))}))}},m=function(e){return function(t,n){o.b.savePhoto(e).then((function(e){0===e.resultCode&&t({type:"SET-PHOTO",photos:e.data.photos})}))}},f=function(e){return function(t,n){var r=n().auth.userId;o.b.saveProfile(e).then((function(e){0===e.resultCode&&t(l(r))}))}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(a.a)(Object(a.a)({},e),{},{posts:[].concat(Object(r.a)(e.posts),[{id:3,message:t.postMessage,likesCount:0}])});case"UPDATE-NEW-POST":return Object(a.a)(Object(a.a)({},e),{},{newPostText:t.newPostText});case"SET-USER-PROFILE":return Object(a.a)(Object(a.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(a.a)(Object(a.a)({},e),{},{status:t.status});case"SET-PHOTO":return Object(a.a)(Object(a.a)({},e),{},{profile:Object(a.a)(Object(a.a)({},e.profile),{},{photos:t.photos})});default:return e}}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(43),a=n(0),o=n.n(a),c=n(8),u=n(10),i=function(e){return{isAuth:e.auth.isAuth}};function l(e){return Object(u.b)(i)((function(t){var n=t.isAuth,a=Object(r.a)(t,["isAuth"]);return n?o.a.createElement(e,a):o.a.createElement(c.a,{to:"/login"})}))}}},[[162,1,2]]]);
//# sourceMappingURL=main.d3217889.chunk.js.map