(window.webpackJsonp=window.webpackJsonp||[]).push([[44,25,26],{352:function(t,e,n){var content=n(360);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("718ebd7c",content,!0,{sourceMap:!1})},353:function(t,e,n){var content=n(364);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("1b3b28a9",content,!0,{sourceMap:!1})},354:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(n(363),n(57)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"nav-section wf-section"},[e("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-content-holder"},[e("div",[e("nuxt-link",{staticClass:"brand-logo",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"site-logo",attrs:{src:"/Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About Us")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plan")]),t._v(" "),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("Faq")]),e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("News")]),t._v(" "),t.isAuthenticated?t._e():e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Signup")]),t._v(" "),t.isAuthenticated?e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):t._e(),t._v(" "),t.isAuthenticated?e("span",{staticClass:"each-nav-link w-nav-link",on:{click:t.logout}},[t._v("logout")]):t._e(),t._v(" "),t.isAuthenticated?t._e():e("nuxt-link",{staticClass:"each-nav-link w-nav-link",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("login")])],1),t._v(" "),t._m(0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},359:function(t,e,n){"use strict";n(352)},360:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".img-logo{width:120px}label.email{font-size:12px;font-weight:300}.input-icon-flexer input{color:#fff}@media screen and (max-width:425px){.footer-social-media{display:none}}",""]),r.locals={},t.exports=r},361:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),n(20),n(93),n(13),n(39),n(26),{data:function(){return{company:"",address:"",phone:"",email:"",about:"",response:"",isError:!1,showResponse:!1,onRequest:!1,emailError:!1}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},checkErrorInputs:function(input,data){if("email"==input){if(""==data||!data||!/^\S+@\S+\.\S+$/.test(data))return this.$el.querySelector(".email").classList.add("error"),this.isError=!1,this.emailError=!0,void(this.onRequest=!1);this.$el.querySelector(".email").classList.remove("error"),this.isError=!0,this.emailError=!1}},callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},clearInputs:function(){this.email=""},setArray:function(){this.checkArray=[{name:"email",data:this.email}]},processEmail:function(){var t=this;this.onRequest=!0,this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError&&setTimeout((function(){t.callResponse("Thanks for subscribing successfully",!1)}),4e3)},getAbout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:n=e.sent,t.about=n.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,t.address=n.data.data.media[0],t.phone=n.data.data.media[2],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.response.data);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()}},mounted:function(){this.loadScript(),this.getAbout(),this.setFileURL(),this.getCompany()}}),c=(n(359),n(57)),component=Object(c.a)(o,(function(){return(0,this._self._c)("section",{staticClass:"footer wf-section",attrs:{id:"footer"}})}),[],!1,null,null,null);e.default=component.exports},363:function(t,e,n){"use strict";n(353)},364:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".site-logo{max-width:140px}",""]),r.locals={},t.exports=r},532:function(t,e,n){"use strict";n.r(e);var r={components:{HomeDarkNavigation:n(354).default},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")}},mounted:function(){this.loadScript()}},o=n(57),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"change-password"},[e("home-dark-navigation"),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("home-footer")],1)}),[function(){var t=this,e=t._self._c;return e("section",{staticClass:"change-password-hero wf-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"short-content-holder"},[e("div",{staticClass:"top-hint-holder dark"},[e("div",{staticClass:"top-nav-content"},[e("div",{staticClass:"nav-link-text white"},[e("a",{staticClass:"home-link white",attrs:{href:"#"}},[t._v("Home")])])]),t._v(" "),e("img",{staticClass:"hero-arrow-push",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/648022a70480e81309435a42_arrow-up-337-svgrepo-com%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"nav-link-text white"},[t._v("Change password")])]),t._v(" "),e("div",{staticClass:"news-head-holder"},[e("h1",{staticClass:"section-head off"},[t._v("Change password")])])])])])},function(){var t=this,e=t._self._c;return e("section",{staticClass:"change-section-two wf-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"signup-two-content"},[e("div",{staticClass:"top-notice-holder"},[e("h1",{staticClass:"section-head"},[t._v("Change password")])]),t._v(" "),e("div",{staticClass:"signup-form-holder"},[e("div",{staticClass:"signup-form w-form"},[e("form",{attrs:{id:"email-form-4",name:"email-form-4","data-name":"Email Form 4",method:"get"}},[e("div",{staticClass:"text-input-holder"},[e("div",{staticClass:"each-input-holder"},[e("input",{staticClass:"signup-input w-input",attrs:{type:"text",autofocus:"true",maxlength:"256",name:"name-4","data-name":"Name 4",placeholder:"New Password*",id:"name-4",required:""}})]),t._v(" "),e("div",{staticClass:"each-input-holder"},[e("input",{staticClass:"signup-input w-input",attrs:{type:"text",autofocus:"true",maxlength:"256",name:"name-4","data-name":"Name 4",placeholder:"Confirm Password*",id:"name-4",required:""}})]),t._v(" "),e("div",{staticClass:"remember-holder"},[e("div",{staticClass:"remember-icon"}),t._v(" "),e("div",{staticClass:"mini-texts odd"},[t._v("Remember me")])]),t._v(" "),e("a",{staticClass:"login-button w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"yellow-slide-header black"},[t._v("Login")])]),e("a",{staticClass:"login-button w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"image-42",attrs:{src:"https://uploads-ssl.webflow.com/646abdec90d7a30035c56ac7/64832b870db34f71153d13fc_loader-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"yellow-slide-header black"},[t._v("Login")])])])]),t._v(" "),e("a",{staticClass:"linked-texts-holder w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"text-info"},[t._v("Already have an account?")])]),e("a",{staticClass:"link-text-holder w-inline-block",attrs:{href:"#"}},[e("div",{staticClass:"text-info"},[t._v("Signup")])]),t._v(" "),e("div",{staticClass:"w-form-done"},[e("div",[t._v("Thank you! Your submission has been received!")])]),t._v(" "),e("div",{staticClass:"w-form-fail"},[e("div",[t._v("Oops! Something went wrong while submitting the form.")])])])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeDarkNavigation:n(354).default,HomeFooter:n(361).default})}}]);