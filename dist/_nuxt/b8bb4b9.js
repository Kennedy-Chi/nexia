(window.webpackJsonp=window.webpackJsonp||[]).push([[40,7,8,9,10,20],{343:function(t,e,n){"use strict";var r=n(2),c=n(3),o=n(39),l=n(27),v=n(40),d=n(235),m=n(14),f=n(4),h=n(234),_=n(152),C=n(344),k=n(345),w=n(93),y=n(346),x=[],U=c(x.sort),E=c(x.push),A=f((function(){x.sort(void 0)})),R=f((function(){x.sort(null)})),S=_("sort"),z=!f((function(){if(w)return w<70;if(!(C&&C>3)){if(k)return!0;if(y)return y<603;var code,t,e,n,r="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)x.push({k:t+n,v:e})}for(x.sort((function(a,b){return b.v-a.v})),n=0;n<x.length;n++)t=x[n].k.charAt(0),r.charAt(r.length-1)!==t&&(r+=t);return"DGBEFHACIJK"!==r}}));r({target:"Array",proto:!0,forced:A||!R||!S||!z},{sort:function(t){void 0!==t&&o(t);var e=l(this);if(z)return void 0===t?U(e):U(e,t);var n,r,c=[],f=v(e);for(r=0;r<f;r++)r in e&&E(c,e[r]);for(h(c,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:m(e)>m(n)?1:-1}}(t)),n=v(c),r=0;r<n;)e[r]=c[r++];for(;r<f;)d(e,r++);return e}})},344:function(t,e,n){var r=n(72).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},345:function(t,e,n){var r=n(72);t.exports=/MSIE|Trident/.test(r)},346:function(t,e,n){var r=n(72).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},347:function(t,e,n){"use strict";n.r(e);var r={props:{msg:{type:String},state:{type:Boolean}},methods:{getState:function(){return this.$store.state.confirmState},confirm:function(data){this.$emit("confirm",data)}},computed:{}},c=n(57),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"confirm-action",class:{hide:t.state}},[e("div",{staticClass:"confirm-box"},[e("div",[t._v(t._s(t.msg))]),t._v(" "),e("div",{staticClass:"confirm-holder"},[e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("yes")}}},[t._v("Yes")]),e("span",{staticClass:"button w-button",on:{click:function(e){return t.confirm("no")}}},[t._v("No")])])])])}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,n){var content=n(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("4c814224",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var r={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},c=n(57),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);e.default=component.exports},350:function(t,e,n){"use strict";n.r(e);n(50),n(59);var r=n(8),c=(n(26),n(49),{data:function(){return{route:""}},computed:{navState:function(){return this.$store.state.adminNavState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},hideNav:function(){this.$store.commit("HIDE_NAV")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.route=this.$route.name,this.hideNav()}}),o=(n(356),n(57)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[e("div",{staticClass:"sticky-navbar"},[e("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[e("img",{staticClass:"brand",attrs:{src:"/admin-images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/admin-images/Logo.png 500w, /admin-images/Logo.png 800w, /admin-images/Logo.png 1080w, /admin-images/Logo.png 2284w",alt:""}})]),t._v(" "),e("img",{staticClass:"menu-close",attrs:{src:"/admin-images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",{staticClass:"nav-list"},[e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin"==t.route},attrs:{to:"/admin"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin"==t.route?"colored-dashboard.svg":"dashboard.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Dashboard")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-users"==t.route},attrs:{to:"/admin/users"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-users"==t.route?"colored-users.svg":"users.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Users")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("add-user")},attrs:{to:"/admin/add-user/new"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("add-user")?"colored-user.svg":"user.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Add User")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-plans"==t.route},attrs:{to:"/admin/plans"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-accounts"==t.route?"colored-plans.svg":"plans.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Plans")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-reviews"==t.route},attrs:{to:"/admin/reviews"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-reviews"==t.route?"colored-reviews.svg":"reviews.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Reviews")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-currencies"==t.route},attrs:{to:"/admin/currencies"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-currencies"==t.route?"colored-currency.svg":"currency.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Currencies")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("transactions")},attrs:{to:"/admin/transactions/list"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("transactions")?"colored-deposit.svg":"deposit.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Transactions")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-active-deposits"==t.route},attrs:{to:"/admin/active-deposits"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-active-deposits"==t.route?"colored-active.svg":"active.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Active Deposits")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-email"==t.route},attrs:{to:"/admin/email"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-email"==t.route?"colored-emails.svg":"emails.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Emails")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-pages"==t.route},attrs:{to:"/admin/pages"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-pages"==t.route?"colored-pages.svg":"pages.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Pages")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-settings"==t.route},attrs:{to:"/admin/settings"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-settings"==t.route?"colored-settings.svg":"settings.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Settings")])]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-referrals"==t.route},attrs:{to:"/admin/referrals"}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-referrals"==t.route?"colored-referrals.svg":"referrals.svg"),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Referrals")])]),t._v(" "),e("span",{staticClass:"nav-link w-inline-block",on:{click:t.logout}},[e("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/logout.svg\n            ",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"link-text"},[t._v("Logout")])])],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);var r=n(8),c=(n(49),{head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},authenticateUser:function(){this.isAuthenticated?"User"==this.user.status&&this.$router.push("/dashboard"):this.$router.push("/")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}}}),o=n(57),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-header"},[e("img",{staticClass:"menu",attrs:{src:"/admin-images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),e("div",{staticClass:"top-icons"},[e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(0),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/logout.svg",loading:"lazy",alt:""},on:{click:t.logout}})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"notification"},[e("div",{staticClass:"badge"}),t._v(" "),e("img",{staticClass:"top-icon",attrs:{src:"/admin-images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"custom-card pie-chart-holder notify"},[e("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),e("div",{staticClass:"each-activity"},[e("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),e("div",{staticClass:"activity-coin"},[e("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"activity-line"})]),t._v(" "),e("div",{staticClass:"activity-value"},[e("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),e("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])])}],!1,null,null,null);e.default=component.exports},356:function(t,e,n){"use strict";n(348)},357:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a,span.nav-link{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),r.locals={},t.exports=r},358:function(t,e,n){"use strict";n.r(e);var r={},c=n(57),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("INSTRUCTION")]),t._v(" "),e("div",{staticClass:"instruction"},[t._v("\n    Kindly fill in the required fields above to create a plan, in the case of\n    any confusion on how the above form works, kindly visit our\n    "),e("span",{staticClass:"custom-link"},[t._v("youtub link")]),t._v(", or our\n    "),e("span",{staticClass:"custom-link"},[t._v("website ")]),t._v("to watch the video tutorial\n    related to this form.\n  ")])])}],!1,null,null,null);e.default=component.exports},371:function(t,e,n){"use strict";var r=n(2),c=n(3),o=n(60),l=n(238),v=n(237),d=n(4),m=RangeError,f=String,h=Math.floor,_=c(v),C=c("".slice),k=c(1..toFixed),w=function(t,e,n){return 0===e?n:e%2==1?w(t,e-1,n*t):w(t*t,e/2,n)},y=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=h(r/1e7)},x=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=h(n/t),n=n%t*1e7},U=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=f(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:d((function(){return"0.000"!==k(8e-5,3)||"1"!==k(.9,0)||"1.25"!==k(1.255,2)||"1000000000000000128"!==k(0xde0b6b3a7640080,0)}))||!d((function(){k({})}))},{toFixed:function(t){var e,n,r,c,v=l(this),d=o(t),data=[0,0,0,0,0,0],h="",k="0";if(d<0||d>20)throw m("Incorrect fraction digits");if(v!=v)return"NaN";if(v<=-1e21||v>=1e21)return f(v);if(v<0&&(h="-",v=-v),v>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(v*w(2,69,1))-69)<0?v*w(2,-e,1):v/w(2,e,1),n*=4503599627370496,(e=52-e)>0){for(y(data,0,n),r=d;r>=7;)y(data,1e7,0),r-=7;for(y(data,w(10,r,1),0),r=e-1;r>=23;)x(data,1<<23),r-=23;x(data,1<<r),y(data,1,1),x(data,2),k=U(data)}else y(data,0,n),y(data,1<<-e,0),k=U(data)+_("0",d);return k=d>0?h+((c=k.length)<=d?"0."+_("0",d-c)+k:C(k,0,c-d)+"."+C(k,c-d)):h+k}})},417:function(t,e,n){var content=n(483);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("184b967c",content,!0,{sourceMap:!1})},482:function(t,e,n){"use strict";n(417)},483:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".each-filter-option.search img{cursor:pointer;min-width:15px}.input-search{border:none;outline:none;width:100%}.filter-label.point{cursor:pointer}.filter-label.input{border:solid #f3f3f3;outline:none;width:70px}.check-td{position:relative}.check-wrapper.check-item{position:absolute;right:-30px;top:-20px}.profile-pix{border-radius:50%;height:70px;overflow:hidden;width:70px}.profile-pix img{min-height:100%;min-width:100%;-o-object-fit:cover;object-fit:cover}.user-image{align-items:center;background:linear-gradient(135deg,#e84c89,#9863a3);border-radius:50%;color:#fff;display:flex;font-size:20px;font-weight:500;height:70px;justify-content:center;width:70px}",""]),r.locals={},t.exports=r},530:function(t,e,n){"use strict";n.r(e);n(20),n(157),n(58),n(371),n(236);var r=n(8),c=(n(49),n(94),n(13),n(41),n(343),n(26),n(347)),o=n(349),l=n(350),v=n(351),d={data:function(){return{users:[],selectedEmailName:"Select Email",selectedEmail:"",usersTypes:["All Users","Active","Suspended"],usersType:"All Users",emails:[],hideEmail:!0,isBulk:!1,suspension:"",search:"",limit:4,sort:"-regDate",itemLength:"",currentPage:1,pages:function(){for(var t=[],e=Math.ceil(this.itemLength/this.limit),i=0;i<e;i++)t.push("i");return t},confirmMessage:"",confirmStatus:!0,response:"",responseState:!1,height:0,showResponse:!1,showUsersList:!1,deleteId:""}},methods:{showResponseMsg:function(t,e){var n=this;this.response=t,this.responseState=e,this.showResponse=!0,setTimeout((function(){n.response="",n.showResponse=!1}),6e3)},getAge:function(t){var e=(new Date).getTime()-new Date(t).getTime();return Math.floor(e/31536e6)},clearSelected:function(){this.selectedEmailName="Select Email",this.isBulk=!1,this.users.forEach((function(t){t.checked=!1}))},paginate:function(t){this.currentPage=t,this.getUsers()},formatDate:function(data){var t=new Date(data);return new Intl.DateTimeFormat("en-US",{weekday:"short",day:"numeric",month:"long"}).format(t)},toggleCheck:function(t,e){e.checked=!e.checked},sortName:function(){this.sort="-username"==this.sort?"username":"-username",this.getUsers()},sortDate:function(){this.sort="-regDate"==this.sort?"regDate":"-regDate",this.getUsers()},showConfirmation:function(t){"Select Email"==this.selectedEmailName?this.showResponseMsg("Please select email template",!1):(this.confirmMessage=t,this.confirmStatus=!1)},deleteConfirmation:function(t,e){this.deleteId=e,this.confirmMessage=t,this.confirmStatus=!1},returnConfirmation:function(data){if(this.confirmStatus=!this.confirmStatus,"yes"==data)if(""!=this.deleteId)this.deleteUser();else{var t=[];this.users.forEach((function(e){1==e.checked&&t.push(e)})),0==t.length?this.showResponseMsg("Please select at least one user",!1):this.sendEmail(t)}this.deleteId=""},filterUser:function(t){if("All Users"==t)this.suspension="",this.getUsers();else{var e="Active"!=t;this.suspension="&suspension=".concat(e),this.getUsers()}this.showUsersList=!this.showUsersList},selectEmail:function(t){this.selectedEmailName=t.name,this.selectedEmail=t,this.hideEmail=!this.hideEmail},bulkSelection:function(){this.isBulk=!this.isBulk,this.isBulk?this.users.forEach((function(t){t.checked=!0})):this.users.forEach((function(t){t.checked=!1}))},checkItems:function(t){return t.forEach((function(t){t.checked=!1})),t},processDeleteUsers:function(){},toggleUserStatus:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var form;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(form=new FormData).append("status","User"==e?"Staff":"User"),r.prev=2,r.next=5,n.$axios.patch("/users/".concat(t),form);case 5:n.getUsers(),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(2),n.showResponseMsg(r.t0.response.data.message,!0);case 11:case"end":return r.stop()}}),r,null,[[2,8]])})))()},sendEmail:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var form;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return form={users:t,email:e.selectedEmail},n.prev=1,n.next=4,e.$axios.post("/emails/send-email",form);case 4:e.showResponseMsg("The email was sent successfully",!0),e.clearSelected(),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getEmails:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/emails");case 3:n=e.sent,t.emails=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getUsers:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="?limit=".concat(t.limit,"&page=").concat(t.currentPage,"&sort=").concat(t.sort).concat(t.suspension),e.prev=1,e.next=4,t.$axios.get("/users/".concat(n));case 4:r=e.sent,t.users=t.checkItems(r.data.data),t.itemLength=r.data.length,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0.response);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},deleteUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.delete("/users/".concat(t.deleteId));case 3:n=e.sent,t.users=t.checkItems(n.data.data),t.itemLength=n.data.length,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},fetchUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:data={keyWord:t.search,limit:t.limit},t.$socket.emit("fetchUsers",data);case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.getUsers(),this.getEmails(),this.$socket.on("fetchedUsers",(function(data,e){t.users=data}))},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{Instruction:n(358).default,AdminFooter:o.default,AdminNavigation:l.default,AdminTopHeader:v.default,AdminConfirmation:c.default}},m=(n(482),n(57)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-wrapper users"},[e("admin-confirmation",{attrs:{msg:t.confirmMessage,state:t.confirmStatus},on:{confirm:t.returnConfirmation}}),t._v(" "),e("AdminNavigation"),t._v(" "),e("div",{staticClass:"body-wrapper"},[e("AdminTopHeader"),t._v(" "),e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"custom-card plan"},[e("h4",{staticClass:"page-title"},[t._v("Users Page")]),t._v(" "),e("div",{staticClass:"table-filters"},[e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Filter")]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/admin-images/caret-down-gray.svg",loading:"lazy",alt:""},on:{click:function(e){t.showUsersList=!t.showUsersList}}}),t._v(" "),e("h4",{staticClass:"filter-label",on:{click:function(e){t.showUsersList=!t.showUsersList}}},[t._v("\n              "+t._s(t.usersType)+"\n            ")]),t._v(" "),t.showUsersList?e("ul",{staticClass:"filter-list",attrs:{role:"list"}},t._l(t.usersTypes,(function(n,r){return e("li",{key:r,staticClass:"filter-items",on:{click:function(e){return t.filterUser(n)}}},[e("div",[t._v(t._s(n))])])})),0):t._e()]),t._v(" "),e("div",{staticClass:"each-filter-option"},[e("div",{staticClass:"filter-page"},[t._v("Email")]),t._v(" "),e("h4",{staticClass:"filter-label point",on:{click:function(e){t.hideEmail=!t.hideEmail}}},[t._v("\n              "+t._s(t.selectedEmailName)+"\n            ")]),t._v(" "),e("ul",{staticClass:"filter-list",class:{hide:t.hideEmail},attrs:{role:"list"}},t._l(t.emails,(function(n){return e("li",{key:n._id,staticClass:"filter-items",on:{click:function(e){return t.selectEmail(n)}}},[e("div",[t._v(t._s(n.template))])])})),0)]),t._v(" "),e("div",{staticClass:"each-filter-option",on:{click:t.sortDate}},[e("h4",{staticClass:"filter-label"},[t._v("Sort By Date")]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/admin-images/caret-down-gray.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"each-filter-option",on:{click:t.sortName}},[e("h4",{staticClass:"filter-label"},[t._v("Sort By Name")]),t._v(" "),e("img",{staticClass:"filter-icon drop",attrs:{src:"/admin-images/caret-down-gray.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"each-filter-option search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"filter-page input-search",attrs:{type:"text",placeholder:"Search User"},domProps:{value:t.search},on:{keyup:t.fetchUser,input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),e("img",{staticClass:"filter-icon",attrs:{src:"/admin-images/search.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"table-wrapper"},[e("table",{staticClass:"custom-table"},[t._m(0),t._v(" "),e("tbody",t._l(t.users,(function(n,r){return e("tr",{key:n._id},[e("td",{staticClass:"check-td"},[t._v("\n                  "+t._s(r+1)+"\n                  "),e("div",{staticClass:"each-input sm"},[e("div",{staticClass:"check-wrapper check-item",on:{click:function(e){return t.toggleCheck(e,n)}}},[e("div",{staticClass:"check-indicator",class:{active:n.checked}})])])]),t._v(" "),e("td",[n.profilePicture?e("div",{staticClass:"profile-pix"},[e("img",{staticClass:"banner",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.profilePicture),alt:""}})]):e("div",{staticClass:"user-image"},[t._v("\n                    "+t._s(n.username.charAt(0).toUpperCase())+"\n                  ")])]),t._v(" "),e("td",[e("nuxt-link",{attrs:{to:"/admin/add-user/".concat(n._id)}},[t._v(t._s(n.username))]),t._v(" "),e("nuxt-link",{attrs:{to:"/admin/transactions/".concat(n._id)}},[e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/admin-images/deposit.svg",loading:"lazy",alt:""}})])])],1),t._v(" "),e("td",[t._v(t._s(t.getAge(n.dob)))]),t._v(" "),e("td",[t._v(t._s(n.phoneNumber1))]),t._v(" "),e("td",[t._v(t._s(n.email))]),t._v(" "),e("td",[t._v(t._s(Number(n.totalBalance).toFixed(2)))]),t._v(" "),e("td",[t._v(t._s(t.formatDate(n.regDate)))]),t._v(" "),e("td",[n.autoRegister?e("div",{staticClass:"autoRegister"},[t._v("\n                    Internal\n                  ")]):e("div",{staticClass:"autoRegister"},[t._v("External")])]),t._v(" "),e("td",[e("div",{staticClass:"status",on:{click:function(e){return t.toggleUserStatus(n._id,n.status)}}},[t._v("\n                    "+t._s(n.status)+"\n                  ")])]),t._v(" "),e("td",[e("nuxt-link",{attrs:{to:"/admin/add-user/".concat(n._id)}},[e("div",{staticClass:"filter-box"},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/admin-images/edit-gray.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:function(e){return t.deleteConfirmation("Are you sure you want to delete this user?",n._id)}}},[e("img",{staticClass:"filter-icon check action-icon",attrs:{src:"/admin-images/delete-gray.svg",loading:"lazy",alt:""}})])],1)])})),0)])]),t._v(" "),e("div",{staticClass:"table-label"},[e("div",[e("strong",{staticClass:"bold-text"},[t._v("Results")]),t._v(": "+t._s(t.itemLength)+"\n            "),e("strong",{staticClass:"bold-text-2"},[t._v("Page")]),t._v(" "+t._s(t.currentPage)+" of\n            "+t._s(t.pages().length)+"\n          ")]),t._v(" "),t.pages().length>1?e("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[1!=t.currentPage?e("li",{staticClass:"pagination-item",on:{click:function(e){return t.paginate(t.currentPage-1)}}},[e("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-left.svg",loading:"lazy",alt:""}})]):t._e(),t._v(" "),t._l(t.pages(),(function(n,r){return e("li",{key:r,staticClass:"pagination-item",on:{click:function(e){return t.paginate(r+1)}}},[e("div",[t._v(t._s(r+1))])])})),t._v(" "),t.currentPage<t.pages(t.currentPage+1).length?e("li",{staticClass:"pagination-item",on:{click:function(e){return t.paginate(t.currentPage+1)}}},[e("img",{staticClass:"pagination-img",attrs:{src:"/admin-images/cheveron-right.svg",loading:"lazy",alt:""}})]):t._e()],2):t._e()]),t._v(" "),t.showResponse?e("div",{staticClass:"response",class:{success:t.responseState}},[t._v("\n          "+t._s(t.response)+"\n        ")]):t._e(),t._v(" "),e("div",{staticClass:"table-actions"},[e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Delete")]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:t.processDeleteUsers}},[e("img",{staticClass:"filter-icon check",attrs:{src:"/admin-images/delete-gray.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Bulk")]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:t.bulkSelection}},[e("img",{staticClass:"filter-icon check",attrs:{src:"/admin-images/bulk-gray.svg",loading:"lazy",alt:""}})])]),t._v(" "),e("div",{staticClass:"each-filter-option min"},[e("div",{staticClass:"filter-page"},[t._v("Send Email")]),t._v(" "),e("div",{staticClass:"filter-box",on:{click:function(e){return t.showConfirmation("Are you sure you want to send  ".concat(t.selectedEmailName," email to the selected users?"))}}},[e("img",{staticClass:"filter-icon check",attrs:{src:"/admin-images/emails.svg",loading:"lazy",alt:""}})])])])]),t._v(" "),e("Instruction")],1),t._v(" "),e("AdminFooter")],1)],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("tr",[e("td",[t._v("S/N")]),t._v(" "),e("td",[t._v("Image")]),t._v(" "),e("td",[t._v("Username")]),t._v(" "),e("td",[t._v("Age")]),t._v(" "),e("td",[t._v("Phone")]),t._v(" "),e("td",[t._v("Email")]),t._v(" "),e("td",[t._v("Balance ($)")]),t._v(" "),e("td",[t._v("Registered")]),t._v(" "),e("td",[t._v("From")]),t._v(" "),e("td",[t._v("Status")]),t._v(" "),e("td",[t._v("Actions")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{AdminConfirmation:n(347).default,AdminNavigation:n(350).default,AdminTopHeader:n(351).default,AdminFooter:n(349).default})}}]);