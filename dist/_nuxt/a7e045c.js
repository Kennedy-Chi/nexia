(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{355:function(t,e,o){var content=o(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(151).default)("6081e9c4",content,!0,{sourceMap:!1})},365:function(t,e,o){"use strict";o(355)},366:function(t,e,o){var n=o(150)((function(i){return i[1]}));n.push([t.i,".dashboard-logo{max-width:120px}",""]),n.locals={},t.exports=n},370:function(t,e,o){"use strict";o.r(e);var n=o(8),r=(o(49),{data:function(){return{company:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var o=document.querySelector("#top");o?o.appendChild(e):console.error("Could not find app node to append script element")},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:o=e.sent,t.company=o.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadScript(),this.getCompany()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},head:function(){return{link:[{href:"/css/Dashboard.css",type:"text/css",rel:"stylesheet"}]}}}),c=(o(365),o(57)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6445ef4447bf1a3b248f87b6_hamburger-menu-icon%203.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),e("img",{staticClass:"dashboard-logo",attrs:{src:"/Logo.png",loading:"lazy",alt:""}}),t._v(" "),e("div",{attrs:{id:"ytWidget"}})]),t._v(" "),e("div",{staticClass:"welcome-holder"},[e("div",{staticClass:"top-header-holder"},[e("h1",{staticClass:"top-header dash"},[t._v("Welcome To "+t._s(t.company.companyName))])]),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("\n          Hi, "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+" Welcome back.\n        ")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("nuxt-link",{staticClass:"icon-holder gap",attrs:{to:"/dashboard/notifications"}},[e("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-15",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}})])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);