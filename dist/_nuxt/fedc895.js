(window.webpackJsonp=window.webpackJsonp||[]).push([[59,25,26],{352:function(t,e,r){var content=r(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(151).default)("331d9fa0",content,!0,{sourceMap:!1})},353:function(t,e,r){var content=r(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(151).default)("ad52187e",content,!0,{sourceMap:!1})},354:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(49),{methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=(r(363),r(57)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"nav-section wf-section"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-content-holder"},[e("div",[e("nuxt-link",{staticClass:"brand-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"site-logo",attrs:{src:"/Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About Us")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("Faq")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("News")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Signup")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("login")])],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},359:function(t,e,r){"use strict";r(352)},360:function(t,e,r){var o=r(150)((function(i){return i[1]}));o.push([t.i,".img-logo{width:120px}label.email{font-size:12px;font-weight:300}.input-icon-flexer input{color:#fff}@media screen and (max-width:425px){.footer-social-media{display:none}}",""]),o.locals={},t.exports=o},361:function(t,e,r){"use strict";r.r(e);var o=r(8),n=(r(49),r(20),r(93),r(13),r(39),r(26),{data:function(){return{company:"",address:"",phone:"",email:"",about:"",response:"",isError:!1,showResponse:!1,onRequest:!1,emailError:!1}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var r=document.querySelector("#footer");r?r.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},checkErrorInputs:function(input,data){if("email"==input){if(""==data||!data||!/^\S+@\S+\.\S+$/.test(data))return this.$el.querySelector(".email").classList.add("error"),this.isError=!1,this.emailError=!0,void(this.onRequest=!1);this.$el.querySelector(".email").classList.remove("error"),this.isError=!0,this.emailError=!1}},callResponse:function(t,e){var r=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){r.showResponse=!1}),6e3)},clearInputs:function(){this.email=""},setArray:function(){this.checkArray=[{name:"email",data:this.email}]},processEmail:function(){var t=this;this.onRequest=!0,this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError&&setTimeout((function(){t.callResponse("Thanks for subscribing successfully",!1)}),4e3)},getAbout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:r=e.sent,t.about=r.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCompany:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return r=e.sent,e.next=6,r.data.data;case 6:t.company=e.sent,t.address=r.data.data.media[0],t.phone=r.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.loadScript(),this.getAbout(),this.setFileURL(),this.getCompany()}}),l=(r(359),r(57)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"footer wf-section",attrs:{id:"footer"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer-content-holder"},[e("div",{staticClass:"inner-footer"},[e("div",{staticClass:"footer-logo-part"},[e("div",{staticClass:"footer-logo-holder"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"img-logo",attrs:{src:"/Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"footer-texts-holder"},[t.about.content?e("div",{staticClass:"footer-top-text",domProps:{innerHTML:t._s("".concat(t.about.content.substring(0,300),"..."))}}):t._e()])]),t._v(" "),e("div",{staticClass:"footer-other-page"},[t._m(0),t._v(" "),e("div",{staticClass:"footer-page-flexer"},[e("div",{staticClass:"each-footer-page"},[e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/about"}},[t._v("About")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/plan"}},[t._v("Plan")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/news"}},[t._v("Blog")])],1)])]),t._v(" "),e("div",{staticClass:"each-footer-page"},[e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/signup"}},[t._v("Get Started")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/login"}},[t._v("Login")])],1)]),t._v(" "),e("div",{staticClass:"each-pages-holder"},[e("h4",{staticClass:"sub-footer-text"},[e("nuxt-link",{staticClass:"link-3",attrs:{to:"/forgotten-password"}},[t._v("Forgotten Password")])],1)])])])]),t._v(" "),e("div",{staticClass:"sucribe-other-page"},[t._m(1),t._v(" "),t._m(2),t._v(" "),e("div",{staticClass:"footer-input-holder"},[e("div",{staticClass:"footer-input-block w-form"},[t.showResponse?e("div",{staticClass:"sign-label response",class:{error:t.isError}},[t._v("\n                "+t._s(t.response)+"\n              ")]):t._e(),t._v(" "),e("label",{directives:[{name:"show",rawName:"v-show",value:t.emailError,expression:"emailError"}],staticClass:"label email error",attrs:{for:""}},[t._v("Please Enter a valid username")]),t._v(" "),e("form",[e("div",{staticClass:"input-icon-flexer"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"text-field w-input",attrs:{type:"email",maxlength:"256",name:"email-2",placeholder:"Enter Your Email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.onRequest?e("div",{staticClass:"footer-yellow-icon"},[e("img",{staticClass:"image-22",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64832b870db34f71153d13fc_loader-icon%201.svg",loading:"lazy",alt:""}})]):e("div",{staticClass:"footer-yellow-icon",on:{click:t.processEmail}},[e("img",{staticClass:"image-22",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ead14eeb1ff94ab83e2a_long-arrow-right-icon%201.svg",loading:"lazy",alt:""}})])])])])])]),t._v(" "),t._m(3)]),t._v(" "),e("div",{staticClass:"footer-buttom-line"}),t._v(" "),e("div",{staticClass:"buttom-text-holder"},[e("div",{staticClass:"footer-buttom-text"},[t._v("\n          Copyright © 2016-"+t._s((new Date).getFullYear())+"\n          "+t._s(t.company.companyName)+"\n          All rights reserved\n        ")])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"footer-header-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Quick Links"),t("br")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-header-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Subscribe"),t("br")])])},function(){var t=this._self._c;return t("div",{staticClass:"light-text-holder"},[t("div",{staticClass:"footer-top-text lighting"},[this._v("\n              Sign up for Alerts, Special Offers and Global Market Updates.\n            ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer-social-media"},[e("div",{staticClass:"footer-header-holder"},[e("h1",{staticClass:"footer-header"},[t._v("Instagram Feed"),e("br")])]),t._v(" "),e("div",{staticClass:"media-box-flexer"},[e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef0b71bd1ec3d6e8ef2d_17861742107367300-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover active"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f13f107043aab0901250_17876975147110586-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f16afe15e42cfa74711f_17881737650044870-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1a2107043aab0905487_17894578420782119-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1c9101c81b742891c86_17983664692318714-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])]),e("a",{staticClass:"each-media-box w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-23",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473f1e9101c81b742892fb2_18187364980025823-s.jpg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"media-cover"},[e("img",{staticClass:"image-24",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/6473ef9c1abb27b86bb87bf6_instagram-svgrepo-com%201.svg",loading:"lazy",alt:""}})])])])])}],!1,null,null,null);e.default=component.exports},363:function(t,e,r){"use strict";r(353)},364:function(t,e,r){var o=r(150)((function(i){return i[1]}));o.push([t.i,".site-logo{max-width:140px}",""]),o.locals={},t.exports=o},537:function(t,e,r){"use strict";r.r(e);var o=r(8),n=r(28),l=(r(49),r(93),r(20),r(13),r(39),r(26),{data:function(){var t;return t={banner:"",username:"",password:"",complete:!0,user:"",showResponse:!1,isError:!1,response:"",onRequest:!1,isChecked:!1},Object(n.a)(t,"isError",!1),Object(n.a)(t,"usernameError",!1),Object(n.a)(t,"passwordError",!1),t},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},callResponse:function(t,e){var r=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){r.showResponse=!1}),6e3)},checkErrorInputs:function(input,data){if("username"==input){if(""==data||!data||data.length<2||!/^[a-zA-Z0-9]+$/.test(data))return this.$el.querySelector(".username").classList.add("error"),this.isError=!1,this.usernameError=!0,void(this.onRequest=!1);this.$el.querySelector(".username").classList.remove("error"),this.isError=!0,this.usernameError=!1}else if("password"==input){if(""==data||!data||data.length<6)return this.$el.querySelector(".password").classList.add("error"),this.isError=!0,this.passwordError=!0,this.onRequest=!1,!1;this.$el.querySelector(".password").classList.remove("error"),this.isError=!0,this.passwordError=!1}},processUserData:function(){var t=this;if(this.onRequest=!0,this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError){var form={username:this.username,password:this.password};this.handleLogin(form)}},handleLogin:function(form){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$auth.loginWith("local",{data:form});case 3:r=e.sent,"Admin"==r.data.user.status?t.$router.push("/admin"):t.$router.push("/dashboard"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t.callResponse(e.t0.response.data.message,!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getBanner:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/banner/?bannerCategory=Login");case 3:r=e.sent,t.banner=r.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},setArray:function(){this.checkArray=[{name:"username",data:this.username},{name:"password",data:this.password}]}},mounted:function(){this.getBanner(),this.isAuthenticated&&this.$router.push("/dashboard"),this.loadScript()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeDarkNavigation:r(354).default}}),c=r(57),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("home-dark-navigation"),t._v(" "),t._m(0),t._v(" "),e("section",{staticClass:"login-section-two wf-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"signup-two-content"},[t._m(1),t._v(" "),e("div",{staticClass:"signup-form-holder"},[e("div",{staticClass:"signup-form w-form"},[e("div",[e("div",{staticClass:"text-input-holder"},[e("div",{staticClass:"each-input-holder"},[e("label",{directives:[{name:"show",rawName:"v-show",value:t.usernameError,expression:"usernameError"}],staticClass:"label username error",attrs:{for:""}},[t._v("Please Enter a valid username")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"signup-input w-input",attrs:{type:"text",maxlength:"256",name:"name",placeholder:"Enter Username*"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-input-holder"},[e("label",{directives:[{name:"show",rawName:"v-show",value:t.passwordError,expression:"passwordError"}],staticClass:"label password error",attrs:{for:""}},[t._v("Password must be at least 6 alphanumeric\n                    characters")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"signup-input w-input",attrs:{type:"password",maxlength:"256",name:"name-4",placeholder:"Enter Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),t.showResponse?e("div",{staticClass:"label error"},[t._v("\n                  "+t._s(t.response)+"\n                ")]):t._e(),t._v(" "),t.onRequest?e("span",{staticClass:"login-button w-inline-block"},[e("img",{staticClass:"image-40",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64832b870db34f71153d13fc_loader-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"yellow-slide-header black"},[t._v("\n                    Processing\n                  ")])]):e("span",{staticClass:"login-button w-inline-block",on:{click:t.processUserData}},[e("div",{staticClass:"yellow-slide-header black"},[t._v("Login")])])])]),t._v(" "),e("div",{staticClass:"text-info"},[t._v("\n              Already have an account?\n              "),e("nuxt-link",{attrs:{to:"/signup"}},[t._v("Click here")])],1),t._v(" "),e("div",{staticClass:"text-info"},[t._v("\n              Forgot Password?\n              "),e("nuxt-link",{attrs:{to:"/forgotten-password"}},[t._v("Click here")])],1)])])])])]),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"login-hero wf-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"short-content-holder"},[e("div",{staticClass:"top-hint-holder dark"},[e("div",{staticClass:"top-nav-content"},[e("div",{staticClass:"nav-link-text white"},[e("a",{staticClass:"home-link white",attrs:{href:"#"}},[t._v("Home")])])]),t._v(" "),e("img",{staticClass:"hero-arrow-push",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/648022a70480e81309435a42_arrow-up-337-svgrepo-com%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"nav-link-text white"},[t._v("Login")])]),t._v(" "),e("div",{staticClass:"news-head-holder"},[e("h1",{staticClass:"section-head off"},[t._v("Login")])])])])])},function(){var t=this._self._c;return t("div",{staticClass:"top-notice-holder"},[t("h1",{staticClass:"section-head"},[this._v("Login")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeDarkNavigation:r(354).default,HomeFooter:r(361).default})}}]);