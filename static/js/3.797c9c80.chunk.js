(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[3],{292:function(e,t,a){e.exports={item:"Posts_item__1c3qT"}},293:function(e,t,a){e.exports={postsBlock:"MyPosts_postsBlock__1jgAn",posts:"MyPosts_posts__1aC8B"}},294:function(e,t,a){"use strict";a.r(t);var n=a(33),s=a(34),r=a(37),l=a(36),u=a(0),o=a.n(u),i=a(38),c=a(127),p=function(e){var t=Object(u.useState)(!1),a=Object(c.a)(t,2),n=a[0],s=a[1],r=Object(u.useState)(e.status),l=Object(c.a)(r,2),i=l[0],p=l[1];Object(u.useEffect)((function(){p(e.status)}),[e.status]);return o.a.createElement("div",null,!n&&o.a.createElement("div",null,o.a.createElement("span",{onDoubleClick:function(){return s(!0)}},e.status||"-------")),n&&o.a.createElement("div",null,o.a.createElement("input",{onChange:function(e){p(e.currentTarget.value)},onBlur:function(){s(!1),e.updateStatus(i)},autoFocus:!0,value:i})))},m=function(e){return e.profile?o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement("img",{src:e.profile.photos.large,alt:"large"})),o.a.createElement("div",null,o.a.createElement(p,{status:e.status,updateStatus:e.updateStatus})),o.a.createElement("div",null,e.profile.fullName,e.profile.contacts.github,e.profile.lookingForAJobDescription),o.a.createElement("div",null,e.profile.contacts.vk)):o.a.createElement(i.a,null)},d=a(92),f=a(11),E=a(292),h=a.n(E);var v=function(e){return o.a.createElement("div",{className:h.a.item},o.a.createElement("img",{src:"https://i.redd.it/z394307odi741.png",alt:"https://i.redd.it/z394307odi741.png"}),e.message,o.a.createElement("div",null,o.a.createElement("span",null,"Like"),e.likesCount))},b=a(293),g=a.n(b),k=a(125),P=a(126),j=a(84),S=a(64),O=Object(j.a)(30);var y=Object(P.a)({form:"addPost"})((function(e){return o.a.createElement("form",{onSubmit:e.handleSubmit},o.a.createElement("div",null,o.a.createElement(k.a,{component:S.b,name:"newPost",placeholder:"Enter your post",validate:[j.b,O]})),o.a.createElement("div",null,o.a.createElement("button",null,"Add post")))})),_=function(e){var t=e.profilePage.posts.map((function(e){return o.a.createElement(v,{key:e.id,id:e.id,message:e.message,likesCount:e.likesCount})}));return o.a.createElement("div",{className:g.a.postsBlock},o.a.createElement("h3",null,"My posts"),o.a.createElement("div",null,o.a.createElement(y,{onSubmit:function(t){var a;a=t.newPost,e.addPost(a)}})),o.a.createElement("div",{className:g.a.posts},t))},C=Object(f.b)((function(e){return{profilePage:e.profilePage}}),{addPost:d.a})(_);var w=function(e){return o.a.createElement("div",null,o.a.createElement(m,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),o.a.createElement(C,null))},A=a(8),B=a(93),U=a(9),z=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return o.a.createElement(w,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})}}]),a}(o.a.Component);t.default=Object(U.d)(Object(f.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:d.d,getStatus:d.c,updateStatus:d.e}),A.f,B.a)(z)}}]);
//# sourceMappingURL=3.797c9c80.chunk.js.map