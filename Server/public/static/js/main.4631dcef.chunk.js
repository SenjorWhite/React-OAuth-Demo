(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=a(7),u=a(8),s=a(10),i=a(9),m=a(11),h=a(13),d=a(5),E=(a(28),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={auth:a.props.auth},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"renderButton",value:function(){switch(this.props.auth){case null:return;case!1:return r.a.createElement("li",null,r.a.createElement("a",{href:"/api/auth/google"},"Sign in with Google"));default:return r.a.createElement("li",null,r.a.createElement("a",{href:"/api/auth/logout"},"Logout"))}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement("ul",{href:"#",className:"brand-logo"},"Google Oauth Demo"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},this.renderButton()))))}}]),t}(n.Component));var p=function(){return r.a.createElement("div",{className:"greeting"},r.a.createElement("h5",null,"Welcome, here is Senjor's Google Oauth Demo Page."),r.a.createElement("h5",null,"Please use the button at top right side to Sign in with google."))};var f=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"card blue-grey darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Welcome, "+e.userInfo.userName+"!"),r.a.createElement("p",null,"Thank you for coming here.")),r.a.createElement("div",{className:"card-action"},r.a.createElement("a",{href:"https://www.linkedin.com/in/senjorpai/"},"Go to Senjor's LinkedIn"))))},v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={userInfo:null,auth:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("/api/current_user",{method:"GET"}).then(function(e){return console.log(e),e.json()}).then(function(t){console.log("fetched"),console.log(t),t.userID?(console.log("auth: true"),e.setState({userInfo:t,auth:!0})):(console.log("auth: false"),e.setState({auth:!1}))}).catch(function(t){e.setState({auth:!1}),console.log(t)})}},{key:"render",value:function(){var e=this;return this.state.auth?r.a.createElement(h.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(E,{auth:this.state.auth}),r.a.createElement("div",{className:"body"},r.a.createElement(d.a,{exact:!0,path:"/",component:p}),r.a.createElement(d.a,{exact:!0,path:"/home",component:p}),r.a.createElement(d.a,{exact:!0,path:"/dashboard",component:function(){return r.a.createElement(f,{userInfo:e.state.userInfo})}}))))):r.a.createElement(h.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(E,{auth:this.state.auth}),r.a.createElement("div",{className:"body"},r.a.createElement(d.a,{exact:!0,path:"/",component:p}),r.a.createElement(d.a,{exact:!0,path:"/home",component:p})))))}}]),t}(n.Component);c.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.4631dcef.chunk.js.map