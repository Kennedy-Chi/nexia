(window.webpackJsonp=window.webpackJsonp||[]).push([[51,22,23,24],{343:function(t,e,n){"use strict";var o=n(2),r=n(3),c=n(40),l=n(27),d=n(41),v=n(235),h=n(14),f=n(4),m=n(234),_=n(152),C=n(344),w=n(345),k=n(94),y=n(346),x=[],D=r(x.sort),z=r(x.push),R=f((function(){x.sort(void 0)})),L=f((function(){x.sort(null)})),N=_("sort"),P=!f((function(){if(k)return k<70;if(!(C&&C>3)){if(w)return!0;if(y)return y<603;var code,t,e,n,o="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)x.push({k:t+n,v:e})}for(x.sort((function(a,b){return b.v-a.v})),n=0;n<x.length;n++)t=x[n].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:R||!L||!N||!P},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(P)return void 0===t?D(e):D(e,t);var n,o,r=[],f=d(e);for(o=0;o<f;o++)o in e&&z(r,e[o]);for(m(r,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:h(e)>h(n)?1:-1}}(t)),n=d(r),o=0;o<n;)e[o]=r[o++];for(;o<f;)v(e,o++);return e}})},344:function(t,e,n){var o=n(72).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},345:function(t,e,n){var o=n(72);t.exports=/MSIE|Trident/.test(o)},346:function(t,e,n){var o=n(72).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},355:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("45ed0c5c",content,!0,{sourceMap:!1})},356:function(t,e,n){var content=n(368);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("6b2a7572",content,!0,{sourceMap:!1})},365:function(t,e,n){"use strict";n(355)},366:function(t,e,n){var o=n(150)((function(i){return i[1]}));o.push([t.i,".dashboard-logo{max-width:120px}",""]),o.locals={},t.exports=o},367:function(t,e,n){"use strict";n(356)},368:function(t,e,n){var o=n(150)((function(i){return i[1]}));o.push([t.i,"img.menu-close{cursor:pointer;right:-180px;top:20px}",""]),o.locals={},t.exports=o},369:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(49),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),c=n(57),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-footer"},[e("div",[t._v("\n    "+t._s((new Date).getFullYear())+" Copyright "+t._s(t.company.companyName)+", All\n    Rights Reserved.\n  ")])])}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,n){"use strict";n.r(e);n(58);var o=n(8),r=(n(49),{data:function(){return{company:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#top");n?n.appendChild(e):console.error("Could not find app node to append script element")},toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},getCompany:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.loadScript(),this.getCompany()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},head:function(){return{link:[{href:"/css/Dashboard.css",type:"text/css",rel:"stylesheet"}]}}}),c=(n(365),n(57)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"top-holder"},[e("div",{staticClass:"top-link-holder"},[e("div",{staticClass:"top-logo",attrs:{id:"top"}},[e("img",{staticClass:"image-37",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6445ef4447bf1a3b248f87b6_hamburger-menu-icon%203.svg",loading:"lazy",alt:""},on:{click:t.toggleDashboardNav}}),e("img",{staticClass:"dashboard-logo",attrs:{src:"/Logo.png",loading:"lazy",alt:""}}),t._v(" "),e("div",{attrs:{id:"ytWidget"}})]),t._v(" "),e("div",{staticClass:"welcome-holder"},[e("div",{staticClass:"top-header-holder"},[e("h1",{staticClass:"top-header dash"},[t._v("Welcome To "+t._s(t.company.companyName))])]),t._v(" "),e("div",{staticClass:"top-text-holder"},[e("div",{staticClass:"top-text"},[t._v("\n          Hi, "+t._s(t.user.firstName)+" "+t._s(t.user.lastName)+" Welcome back.\n        ")])])])]),t._v(" "),e("div",{staticClass:"icon-profile-holder"},[e("div",{staticClass:"icon-holder gap"},[t.user.profilePicture?e("div",{staticClass:"top-profile-pics",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.user.profilePicture,")"),backgroundSize:"cover",backgroundPosition:"center"}}):e("div",{staticClass:"top-profile-pics",style:{backgroundImage:"url(/images/avatar.svg)",backgroundSize:"cover",backgroundPosition:"center"}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"icon-holder",on:{click:t.logout}},[e("img",{staticClass:"image-15",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}})])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"icon-holder gap"},[t("img",{staticClass:"image-14",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(26),n(49),{data:function(){return{route:""}},methods:{toggleDashboardNav:function(){this.$store.commit("TOGGLE_NAV")},hideDashboardNav:function(){this.$store.commit("HIDE_DASHBOARD_NAV")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{navState:function(){return this.$store.state.dashboardNavState}},mounted:function(){this.route=this.$route.name,this.hideDashboardNav()}}),c=(n(367),n(57)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"side-dash-board",class:{show:t.navState}},[e("div",{staticClass:"sticky-navigation"},[e("div",{staticClass:"board-logo-holder"},[e("img",{staticClass:"menu-close",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d690df7d5dc496a17_decrease-text-indent-icon%201.svg",loading:"lazy",alt:""},on:{click:t.hideDashboardNav}}),e("nuxt-link",{staticClass:"logo-holder",attrs:{to:"/"}},[e("img",{attrs:{src:"/Logo.png",loading:"lazy",alt:""}})])],1),t._v(" "),e("div",{staticClass:"all-button-holder"},[e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cf4aba0ad5d0c1bc8ba2_four-squares-line-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Dashboard")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit"==t.route},attrs:{to:"/dashboard/deposit"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460cb0d85d0ef5c36bfabc9_wallet-money-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-withdraw-funds"==t.route},attrs:{to:"/dashboard/withdraw-funds"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460ca96a33287e54e85cda5_hand-money-income-dollar-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Withdraw")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c95a50cbb3577558d943_3d-modeling-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transactions")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-deposit-list"==t.route},attrs:{to:"/dashboard/deposit-list"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9ddd6192761285fb9b0_chart-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit List")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-earnings"==t.route},attrs:{to:"/dashboard/earnings"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c7c6a5b90e89a2622c43_grow-money-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Earnings")])]),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-notifications"==t.route},attrs:{to:"/dashboard/notifications"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3ae215f1e35135bc8dd_add-bell.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Notification")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-profile"==t.route},attrs:{to:"/dashboard/profile"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c9bd5a61c167cdd48963_user-persona-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Profile")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-links",class:{active:"dashboard-referrals"==t.route},attrs:{to:"/dashboard/referrals"}},[e("img",{staticClass:"nav-link-img",attrs:{src:"/dashboard-images/referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Referrals")])]),t._v(" "),e("div",{staticClass:"each-button-flexer",on:{click:t.logout}},[e("img",{staticClass:"image-11",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460c3445d6484a79c70a8b0_music-switch-on-off-button-icon%202.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"button-text"},[t._v("Logout")])])],1),t._v(" "),e("div",{staticClass:"down-nav-holder"},[e("h1",{staticClass:"down-logo-header"},[t._v("\n        @Renex Holdings Aps - "+t._s((new Date).getFullYear())+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},554:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(49),n(20),n(42),n(13),n(95),n(43),n(58),n(343),n(369)),c=n(370),l=n(371),d={data:function(){return{notifications:[],sort:"-time",limit:5,resultLength:"",currentPage:1,pages:function(){for(var t=[],e=Math.ceil(this.resultLength/this.limit),i=0;i<e;i++)t.push("i");return t}}},methods:{formatDate:function(data){if(!data)return"";var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},capitalizeWord:function(data){return""!=data&&data?data.charAt(0).toUpperCase()+data.slice(1):""},getTime:function(data){if(""==data||null==data)return"00:00";var t=new Date(data),e=t.getHours(),n=t.getMinutes(),o=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+o},paginate:function(t){this.currentPage=t,this.getNotifications()},getNotifications:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?username=".concat(t.user.username,"&limit=").concat(t.limit,"&sort=").concat(t.sort,"&page=").concat(t.currentPage),e.prev=1,e.next=4,t.$axios.get("/transactions/notifications/".concat(n));case 4:o=e.sent,t.notifications=o.data.data,t.resultLength=o.data.length,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}},mounted:function(){this.getNotifications()},computed:{user:function(){return this.$store.state.auth.user}},components:{DashboardHeader:c.default,DashboardNavigation:l.default,DashboardFooter:r.default}},v=n(57),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"history deposit"},[e("div",{staticClass:"transaction-history"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"main-dash-board"},[e("dashboard-header"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"history-table"},[e("div",{staticClass:"table"},t._l(t.notifications,(function(n){return e("div",{key:n._id,staticClass:"each-notification"},[e("h1",{staticClass:"main-heading note"},[t._v("\n              "+t._s(t.capitalizeWord(n.title))+"\n            ")]),t._v(" "),e("div",{staticClass:"time"},[t._v("\n              "+t._s(t.getTime(n.time))+"\n              "+t._s(t.formatDate(n.time))+"\n            ")]),t._v(" "),e("div",{staticClass:"note-text"},[t._v("\n              "+t._s(n.message)+"\n            ")])])})),0)]),t._v(" "),t.pages().length>1?e("ul",{staticClass:"paginantion",attrs:{role:"list"}},[1!=t.currentPage?e("li",{staticClass:"each-page",on:{click:function(e){return t.paginate(t.currentPage-1)}}},[e("img",{staticClass:"paginate-icon",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460e62ee8f19be93c559bde_arrow-thin-chevron-left-icon%201.svg",loading:"lazy",alt:""}})]):t._e(),t._v(" "),t._l(t.pages().length,(function(n,o){return e("li",{key:o,staticClass:"each-page",class:{active:o==t.currentPage-1,hide:o>=3+t.currentPage||o<t.currentPage-3,show:o+1==t.pages().length},on:{click:function(e){return t.paginate(o+1)}}},[e("div",[t._v(t._s(o+1))])])})),t._v(" "),t.currentPage<t.pages(t.currentPage+1).length?e("li",{staticClass:"each-page",on:{click:function(e){return t.paginate(t.currentPage+1)}}},[e("img",{staticClass:"paginate-icon",attrs:{src:"https://uploads-ssl.webflow.com/64300ab9bc516802715bbe1b/6460e62d60f21622a52c68e0_arrow-thin-chevron-left-icon%202.svg",loading:"lazy",alt:""}})]):t._e()],2):t._e()],1)],1),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"history-header-holder note"},[t("h1",{staticClass:"main-heading"},[this._v("Notifications")])])}],!1,null,null,null);e.default=component.exports}}]);