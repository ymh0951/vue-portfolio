(function(){"use strict";var t={566:function(t,e,s){var a=s(6369),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("AppHeader"),s("transition",{attrs:{name:"fade"}},[s("router-view")],1)],1)},n=[],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("nav",{staticClass:"header-menu"},[s("router-link",{staticClass:" menu",attrs:{to:"/home"}},[t._v("Home")]),t._v(" | "),s("router-link",{staticClass:"menu",attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),s("router-link",{staticClass:"menu",attrs:{to:"/projects"}},[t._v("Projects")]),t._v(" | "),s("router-link",{staticClass:"menu",attrs:{to:"/contact"}},[t._v("Contact")])],1)])},o=[],r=a.Z.extend({}),c=r,u=s(1001),_=(0,u.Z)(c,l,o,!1,null,"32b0f904",null),d=_.exports,p=a.Z.extend({components:{AppHeader:d}}),f=p,v=(0,u.Z)(f,i,n,!1,null,null,null),b=v.exports,x=s(2631),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticClass:"loader"},[s("h1",{staticClass:"main-title"},[t._v(" "+t._s(t.title)+" ")]),s("span",{staticStyle:{"--i":"1"}}),s("span",{staticStyle:{"--i":"2"}}),s("span",{staticStyle:{"--i":"3"}}),s("span",{staticStyle:{"--i":"4"}}),s("span",{staticStyle:{"--i":"5"}}),s("span",{staticStyle:{"--i":"6"}}),s("span",{staticStyle:{"--i":"7"}}),s("span",{staticStyle:{"--i":"8"}}),s("span",{staticStyle:{"--i":"9"}}),s("span",{staticStyle:{"--i":"10"}})])])},h=[],C=a.Z.extend({data(){return{title:"Yoo Minho PortFolio"}}}),g=C,k=(0,u.Z)(g,m,h,!1,null,"6d6b75f2",null),Z=k.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("div",{staticClass:"about_box"},[s("AboutMe"),s("Skills"),s("Experience"),s("Education")],1)])},E=[],D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about_in_box introduce"},[a("h1",{staticClass:"about_title introduce_title"},[t._v(t._s(t.title))]),a("div",{staticClass:"about_in_flex_box introduce_box"},[a("div",{staticClass:"about_left_box introduce_image"},[a("img",{attrs:{src:s(6787),alt:"Profile Image"}})]),a("div",{staticClass:"about_right_box introduce_text"},t._l(t.values,(function(e){return a("p",{key:e},[t._v(t._s(e))])})),0)])])},y=[],j=a.Z.extend({data(){return{title:"About Me",values:["학습과 성장에 관심이 많은 Vue.js 프론트엔드 개발자입니다.","새로운 기술을 배우는 것을 좋아하고 트렌드에 맞출려고 노력합니다.","공식 문서와, 인터넷 강의를 통해 트렌드한 기술을 배우고 실무에 바로 사용할 수 있게 학습합니다 😊"]}}}),S=j,$=(0,u.Z)(S,D,y,!1,null,"6e1832b2",null),M=$.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about_in_box introduce"},[s("h1",{staticClass:"about_title introduce_title"},[t._v(t._s(t.title))]),s("FrontEnd"),s("BackEnd"),s("ETC")],1)},T=[],P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skills_box"},[s("h2",{staticClass:"skill_title"},[t._v("Front-End")]),s("ul",{staticClass:"skill_list"},t._l(t.skills,(function(e){return s("li",{key:e,staticClass:"skill"},[t._v(t._s(e))])})),0)])},F=[],A=a.Z.extend({data(){return{skills:["HTML5","CSS3","Javascript","Typescript","jQuery","Vue.js","Nuxt.js","Webpack","Bootstrap"]}}}),I=A,B=(0,u.Z)(I,P,F,!1,null,"8ef54172",null),H=B.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skills_box"},[s("h2",{staticClass:"skill_title"},[t._v("Back-End")]),s("ul",{staticClass:"skill_list"},t._l(t.skills,(function(e){return s("li",{key:e,staticClass:"skill"},[t._v(t._s(e))])})),0)])},V=[],J=a.Z.extend({data(){return{skills:["Node.js","Express","MySQL","Sequelize","MongoDB","Socket.io"]}}}),L=J,N=(0,u.Z)(L,Y,V,!1,null,"7d443800",null),Q=N.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skills_box"},[s("h2",{staticClass:"skill_title"},[t._v("ETC")]),s("ul",{staticClass:"skill_list"},t._l(t.skills,(function(e){return s("li",{key:e,staticClass:"skill"},[t._v(t._s(e))])})),0)])},q=[],z=a.Z.extend({data(){return{skills:["Adobe Photoshop","Adobe Illustrator","npm","Jest"]}}}),K=z,R=(0,u.Z)(K,U,q,!1,null,"753a878e",null),W=R.exports,X=a.Z.extend({components:{FrontEnd:H,BackEnd:Q,ETC:W},data(){return{title:"Skills"}}}),G=X,tt=(0,u.Z)(G,O,T,!1,null,"e418e770",null),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about_in_box experience"},[s("h1",{staticClass:"about_title experience_title"},[t._v(t._s(t.title))]),t._l(t.experiences,(function(e){return s("div",{key:e.title,staticClass:"about_in_flex_box experience_box"},[s("div",{staticClass:"about_left_box experience_image"},[s("img",{attrs:{src:e.image,alt:"Profile Image"}})]),s("div",{staticClass:"about_right_box experience_text"},[s("div",{staticClass:"experience_title"},[s("div",{staticClass:"experience_top_title"},[s("h2",[t._v(t._s(e.title))]),s("small",[s("a",{attrs:{href:e.website}},[t._v(t._s(e.website))])])]),s("small",[t._v(t._s(e.solution))]),s("p",[t._v(t._s(e.sDate)+" ~ "+t._s(e.eDate||"재직중")+" ("+t._s(e.totalDate)+")")])]),s("ul",t._l(e.value,(function(e){return s("li",{key:e},[t._v(t._s(e))])})),0)])])}))],2)},at=[],it=a.Z.extend({data(){return{title:"Experience",experiences:[{image:s(3724),title:"엑스퍼트컨설팅",solution:"Vue.js 프론트엔드 개발자",website:"https://www.exc.co.kr/",sDate:"2022-01-03",eDate:"",totalDate:"",value:["HRM 리크루트온 프론트엔드 개발 및 유지 보수","성남시 통합 채용 사이트 구축","고양시 통합 채용 사이트 구축","기업채용 현장지원 사업 프론트엔드 개발 및 유지 보수"]}]}},created(){this.totalDateCalculation()},methods:{totalDateCalculation(){const t=this.experiences;for(let e of t){let t,s;e.eDate?(t=new Date(e.sDate),s=new Date(e.eDate)):(t=new Date(e.sDate),s=new Date),s.getFullYear()-t.getFullYear()?e.totalDate=`${s.getFullYear()-t.getFullYear()}년 ${s.getMonth()-t.getMonth()+1}개월`:e.totalDate=s.getMonth()-t.getMonth()+1+"개월"}}}}),nt=it,lt=(0,u.Z)(nt,st,at,!1,null,"83d66ee8",null),ot=lt.exports,rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about_in_box education"},[s("h1",{staticClass:"about_title education_title"},[t._v(t._s(t.title))]),t._l(t.educations,(function(e){return s("div",{key:e.title,staticClass:"about_in_flex_box education_box"},[s("div",{staticClass:"about_left_box education_image"},[s("img",{attrs:{src:e.image,alt:"Profile Image"}})]),s("div",{staticClass:"about_right_box education_text"},[s("div",{staticClass:"education_title"},[s("div",{staticClass:"education_top_title"},[s("h2",[t._v(t._s(e.title))]),s("small",[s("a",{attrs:{href:e.website}},[t._v(t._s(e.website))])])]),s("small",[t._v(t._s(e.solution))]),s("p",[t._v(t._s(e.sDate)+" ~ "+t._s(e.eDate||"재학중")+" ("+t._s(e.total)+")")])])])])}))],2)},ct=[],ut=a.Z.extend({data(){return{title:"Education",educations:[{image:s(8558),title:"SBS아카데미컴퓨터아트학원",solution:"국비과정 스마트기기UXUI디자인양성과정",website:"https://se.sbsart.com/",sDate:"2021-07-12",eDate:"2021-11-24",total:""},{image:s(6840),title:"경남정보대학교",solution:"ICT컴퓨터계열 IoT전공",website:"https://www.kit.ac.kr/",sDate:"2017-02-23",eDate:"2021-02-18",total:""},{image:s(5457),title:"세정고등학교",solution:"상업고 스마트경영과",website:"www.sejeong.hs.kr/",sDate:"2014-03-03",eDate:"2017-02-14",total:""}]}},created(){this.totalDateCalculation()},methods:{totalDateCalculation(){const t=this.educations;for(let e of t)e.eDate?e.total="졸업":e.total="재학중"}}}),_t=ut,dt=(0,u.Z)(_t,rt,ct,!1,null,"5271037a",null),pt=dt.exports,ft=a.Z.extend({components:{AboutMe:M,Skills:et,Experience:ot,Education:pt}}),vt=ft,bt=(0,u.Z)(vt,w,E,!1,null,"2abdf450",null),xt=bt.exports,mt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projects"},[s("div",{staticClass:"projects_box"},[t._v(" projects 개발중 ")])])}],Ct=a.Z.extend({}),gt=Ct,kt=(0,u.Z)(gt,mt,ht,!1,null,"7c9df7ae",null),Zt=kt.exports,wt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Et=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contact"},[s("div",{staticClass:"contact_box"},[t._v(" contact 개발중 ")])])}],Dt=a.Z.extend({}),yt=Dt,jt=(0,u.Z)(yt,wt,Et,!1,null,"2a0b715c",null),St=jt.exports;a.Z.use(x.Z);const $t=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:Z},{path:"/about",name:"about",component:xt},{path:"/projects",name:"projects",component:Zt},{path:"/contact",name:"contact",component:St}],Mt=new x.Z({mode:"hash",base:"/vue-portfolio/",routes:$t});var Ot=Mt,Tt=s(3822);a.Z.use(Tt.ZP);var Pt=new Tt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});a.Z.config.productionTip=!1,new a.Z({router:Ot,store:Pt,render:t=>t(b)}).$mount("#app")},6840:function(t,e,s){t.exports=s.p+"img/KIT.e98bd98d.jpg"},8558:function(t,e,s){t.exports=s.p+"img/SBS.3d441b4d.jpg"},3724:function(t,e,s){t.exports=s.p+"img/expert-consulting.15726f62.jpg"},6787:function(t,e,s){t.exports=s.p+"img/minho.e6408a98.jpg"},5457:function(t,e,s){t.exports=s.p+"img/sejeong.335493a0.jpg"}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,n){if(!a){var l=1/0;for(u=0;u<t.length;u++){a=t[u][0],i=t[u][1],n=t[u][2];for(var o=!0,r=0;r<a.length;r++)(!1&n||l>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[r])}))?a.splice(r--,1):(o=!1,n<l&&(l=n));if(o){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}n=n||0;for(var u=t.length;u>0&&t[u-1][2]>n;u--)t[u]=t[u-1];t[u]=[a,i,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/vue-portfolio/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,l=a[0],o=a[1],r=a[2],c=0;if(l.some((function(e){return 0!==t[e]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(r)var u=r(s)}for(e&&e(a);c<l.length;c++)n=l[c],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(u)},a=self["webpackChunkvue_portfolio"]=self["webpackChunkvue_portfolio"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(566)}));a=s.O(a)})();
//# sourceMappingURL=app.483ff7ee.js.map