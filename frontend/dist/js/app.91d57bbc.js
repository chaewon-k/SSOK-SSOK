(function(t){function e(e){for(var s,n,c=e[0],o=e[1],l=e[2],u=0,m=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&m.push(r[n][0]),r[n]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0fe2":function(t,e,a){},1:function(t,e){},"10fc":function(t,e,a){},2123:function(t,e,a){},"26af":function(t,e,a){"use strict";a("ee16")},"2eef":function(t,e,a){},"36f9":function(t,e,a){},"394d":function(t,e,a){"use strict";a("10fc")},"3f92":function(t,e,a){},"421d":function(t,e,a){"use strict";a("2123")},4227:function(t,e,a){"use strict";a("2eef")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},i=[],n={name:"App",data:function(){return{}}},c=n,o=(a("af4d"),a("2877")),l=a("6544"),d=a.n(l),u=a("7496"),m=a("f6c4"),f=Object(o["a"])(c,r,i,!1,null,"64ec3723",null),h=f.exports;d()(f,{VApp:u["a"],VMain:m["a"]});var v=a("8c4f"),g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:"","fill-height":""}},[s("div",{staticClass:"background"},[s("div",{attrs:{id:"stars"}}),s("div",{attrs:{id:"stars2"}}),s("div",{attrs:{id:"stars3"}})]),s("div",{staticClass:"contents"},[s("nav",[s("div",{on:{click:t.back}},[s("div",{staticClass:"glow"})])]),s("div",{staticClass:"planets"},[s("div",{staticClass:"venus"},[s("div",{staticClass:"venusimg"},[s("img",{staticClass:"spin",attrs:{src:a("9230"),alt:"venus"},on:{click:t.moveSelectCardGame}})]),s("div",{staticClass:"mascotimg"},[s("img",{staticClass:"mascot-card ma-0",attrs:{src:a("ded2"),alt:"macot-card"},on:{click:t.moveSelectCardGame}})]),s("p",[t._v("카드 게임")])]),s("div",{staticClass:"greenus"},[s("div",{staticClass:"greenusimg"},[s("img",{staticClass:"spin",attrs:{src:a("c534"),alt:"greenus"},on:{click:t.moveSmartCameraGame}})]),s("div",{staticClass:"mascotimg2"},[s("img",{staticClass:"mascot-camera",attrs:{src:a("5e4f"),alt:"macot-camera"},on:{click:t.moveSmartCameraGame}})]),s("p",[t._v("카메라 게임")])])])])])},p=[],C={name:"MainPage",data:function(){return{drawer:!1,group:null}},watch:{group:function(){this.drawer=!1}},methods:{moveSmartCameraGame:function(){this.$router.push({name:"SmartCameraGame"})},moveSelectCardGame:function(){this.$router.push({name:"SelectCardGame"})},back:function(){this.$router.push({name:"WelcomePage"})}}},_=C,x=(a("8897"),a("a523")),b=Object(o["a"])(_,g,p,!1,null,"3297c618",null),y=b.exports;d()(b,{VContainer:x["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("div",{staticClass:"background"},[a("div",{attrs:{id:"stars"}}),a("div",{attrs:{id:"stars2"}}),a("div",{attrs:{id:"stars3"}})]),a("NavBar"),a("div",{staticClass:"contents"},[t.is_start?a("span",[a("h1",{staticClass:"font-color text-center mt-5"},[t._v(" "+t._s(t.question)+"을 보여주세요😉 ")])]):a("span",[a("v-btn",{staticClass:"d-flex mx-auto",attrs:{rounded:"",large:"",color:"warning"},on:{click:t.initialize}},[t._v(" 문제 보기 ")])],1)]),a("v-row",{staticClass:"mt-5"},[a("div",{staticClass:"col-md-6 col-xs-12"},[a("vue-web-cam",{ref:"webcam",staticStyle:{position:"relative","z-index":"100"},attrs:{height:"60%",width:"100%","device-id":t.deviceId},on:{started:t.onStarted,stopped:t.onStopped,error:t.onError,cameras:t.onCameras}}),a("div",{staticClass:"mt-5 d-flex justify-between"},[a("div",{staticClass:"mx-auto"},[a("v-btn",{staticClass:"mx-5",attrs:{fab:"",large:""},on:{click:t.onCapture}},[a("v-icon",[t._v("mdi-camera-iris")])],1),a("v-btn",{staticClass:"mx-5",attrs:{fab:"",large:""},on:{click:t.onStop}},[a("v-icon",[t._v("mdi-camera-off")])],1),a("v-btn",{staticClass:"mx-5",attrs:{fab:"",large:""},on:{click:t.onStart}},[a("v-icon",[t._v("mdi-camera")])],1)],1)])],1),a("v-card",{staticClass:"col-md-6 col-xs-12 mt-3 pa-0 mx-auto",attrs:{color:"rgba(255, 255, 255, 0)","max-width":"35vw","max-height":"60vh",elevation:"0"}},[t.is_done?a("span",[a("img",{staticClass:"d-flex mx-auto",staticStyle:{position:"relative","z-index":"100"},attrs:{src:t.detected_img,width:"100%",height:"90%"}}),t.is_correct?a("span",[a("h1",{staticClass:"text-center mt-3",staticStyle:{color:"white"}},[t._v("정답입니다!")]),a("h3",{staticClass:"text-center mt-3",staticStyle:{color:"white"}},[t._v(" 정확도 : "+t._s(this.score)+"% ")])]):a("span",[a("h1",{staticClass:"text-center mt-3",staticStyle:{color:"white"}},[t._v("틀렸어요😥")]),a("h3",{staticClass:"text-center mt-3",staticStyle:{color:"white"}},[t._v(" 가져온 물건 : "+t._s(this.category)+" ")])])]):t._e(),t.loading?a("h1",{staticClass:"text-center",staticStyle:{color:"white"}},[t._v(" 정답 확인중입니다 ")]):t._e(),a("v-progress-linear",{staticClass:"mt-5",attrs:{active:t.loading,indeterminate:t.loading,color:"#FFEE58",height:"10"}})],1)],1)],1)},S=[],k=a("4f96"),O=a("5530"),j=(a("7db0"),a("fb6a"),a("b3cb")),I=a("2f62"),P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-5"},[s("v-app-bar",{staticStyle:{"background-color":"transparent"},attrs:{color:"#040431",elevation:0,"max-height":"80"}},[s("v-btn",{staticClass:"ml-5",attrs:{icon:""},on:{click:t.moveToMP}},[s("v-avatar",{attrs:{tile:"",size:"4rem"}},[s("img",{attrs:{src:a("f46c"),alt:"out-icon"}})])],1),s("v-spacer"),s("div",{staticClass:"d-flex align-center"},[s("v-avatar",{staticClass:"mr-2 d-md-flex d-none",attrs:{size:"4rem"}},[s("img",{attrs:{src:a("9090"),alt:"welcome-icon"}})]),s("h1",{staticClass:"mr-5 mb-0",staticStyle:{color:"white"}},[t._v("Animals")])],1)],1)],1)},T=[],$={name:"NavBar",methods:{moveToMP:function(){this.$router.push({name:"MainPage"})}}},E=$,R=a("40dc"),M=a("8212"),z=a("8336"),G=a("2fa4"),U=Object(o["a"])(E,P,T,!1,null,null,null),B=U.exports;d()(U,{VAppBar:R["a"],VAvatar:M["a"],VBtn:z["a"],VSpacer:G["a"]});var A=a("bc3a"),N=a.n(A),L=(a("ccfa"),"SmartCameraStore"),V={name:"SmartCameraGame",components:{"vue-web-cam":j["WebCam"],NavBar:B},data:function(){return{camera:null,deviceId:null,devices:[],loading:!1,question:"cup",img:null,detected_img:a("6db8"),is_start:!1}},computed:Object(O["a"])(Object(O["a"])(Object(O["a"])(Object(O["a"])({device:function(){var t=this;return this.devices.find((function(e){return e.deviceId===t.deviceId}))}},Object(I["b"])(L,{score:"getScore"})),Object(I["b"])(L,{category:"getCategory"})),Object(I["b"])(L,{is_correct:"getIsCorrect"})),Object(I["b"])(L,{is_done:"getIsDone"})),watch:{camera:function(t){this.deviceId=t},devices:function(){var t=Object(k["a"])(this.devices),e=t[0];t.slice(1);e&&(this.camera=e.deviceId,this.deviceId=e.deviceId)},is_start:function(){}},methods:{onCapture:function(){var t=this;this.loading=!0;var e=this.$refs.webcam.capture();N.a.post("https://j4a201.p.ssafy.io/ai/smartcamera/detection/",{image:e,question:this.question}).then((function(e){console.log(e.data);var a=e.data;t.$store.dispatch("SmartCameraStore/setInfo",a),t.loading=!1})).catch((function(t){console.log(t)}))},onStarted:function(t){console.log("On Started Event",t)},onStopped:function(t){console.log("On Stopped Event",t)},onStop:function(){this.$refs.webcam.stop()},onStart:function(){this.$refs.webcam.start()},onError:function(t){console.log("On Error Event",t)},onCameras:function(t){this.devices=t,console.log("On Cameras Event",t)},onCameraChange:function(t){this.deviceId=t,this.camera=t,console.log("On Camera Change Event",t)},initialize:function(){this.$store.dispatch("SmartCameraStore/initializeInfo"),this.is_start=!0}}},F=V,Z=(a("4227"),a("b0af")),q=a("132d"),Q=a("8e36"),D=a("0fd9"),W=Object(o["a"])(F,w,S,!1,null,"4063598a",null),K=W.exports;d()(W,{VBtn:z["a"],VCard:Z["a"],VContainer:x["a"],VIcon:q["a"],VProgressLinear:Q["a"],VRow:D["a"]});var J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:"","fill-height":""}},[s("div",{staticClass:"background"},[s("div",{attrs:{id:"stars"}}),s("div",{attrs:{id:"stars2"}}),s("div",{attrs:{id:"stars3"}}),s("Cosmos")],1),s("div",{staticClass:"contents"},[s("nav",[s("div",{staticClass:"logo"},[s("img",{staticClass:"avatar",attrs:{src:a("9090"),alt:"welcome-icon"}}),s("p",[t._v("SSOK SSOK")])]),s("div",[s("div",{staticClass:"glow",on:{click:t.moveToMainPage}})])]),s("div",{staticClass:"loginZone d-flex align-items-center"},[s("div",[s("p",[t._v(" "+t._s(t.user)+" 다양한 언어를 "),s("br"),t._v(" 재밌게 배워보아요! ")]),t.getCheckLogin?s("button",{staticClass:"auth-button",on:{click:t.logout}},[t._v(" Logout ")]):s("button",{staticClass:"auth-button",on:{click:t.google}},[t._v("Google")])])])])])},H=[],X=(a("5319"),a("ac1f"),a("4d63"),a("25f0"),a("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"cosmos"}},[a("div",{staticClass:"comet-rain"},[a("svg",{staticClass:"svg-defs",attrs:{role:"presentation",id:"svg-comet","data-name":"comet",viewBox:"0 0 195 173.05",width:"195",height:"173.05"}},[a("symbol",{attrs:{id:"comet"}},[a("path",{attrs:{d:"M192.39.66c-33.66,31.46-93.3,81.16-129,108.88L3.42,156c-5,3.89-4.29,11.28.74,15.4s12.84-.83,13.1-1.07C51.09,138.62,82.6,104.72,116.64,73c8.89-8.29,66.23-59.5,77.47-70.13C196.17,1,194.24-1.08,192.39.66Z"}})])]),a("svg",{attrs:{role:"presentation",width:"0",height:"0"}},[a("defs",[a("linearGradient",{attrs:{id:"gradient",x1:"194.94",y1:"4.2",x2:"11.72",y2:"161.98",gradientUnits:"userSpaceOnUse"}},[a("stop",{attrs:{offset:"0%","stop-color":"#fff","stop-opacity":"0.03"}}),a("stop",{attrs:{offset:"100%","stop-color":"var(--t-sun-color)"}})],1)],1)]),a("svg",{staticClass:"comet-01 comet-instance",attrs:{role:"presentation",width:"195",height:"173.05",viewBox:"0 0 195 173.05"}},[a("use",{attrs:{"xlink:href":"#comet"}})]),a("svg",{staticClass:"comet-02 comet-instance",attrs:{role:"presentation",width:"195",height:"173.05",viewBox:"0 0 195 173.05"}},[a("use",{attrs:{"xlink:href":"#comet"}})]),a("svg",{staticClass:"comet-03 comet-instance",attrs:{role:"presentation",width:"195",height:"173.05",viewBox:"0 0 195 173.05"}},[a("use",{attrs:{"xlink:href":"#comet"}})]),a("svg",{staticClass:"comet-04 comet-instance",attrs:{role:"presentation",width:"195",height:"173.05",viewBox:"0 0 195 173.05"}},[a("use",{attrs:{"xlink:href":"#comet"}})]),a("svg",{staticClass:"comet-05 comet-instance",attrs:{role:"presentation",width:"195",height:"173.05",viewBox:"0 0 195 173.05"}},[a("use",{attrs:{"xlink:href":"#comet"}})]),a("svg",{staticClass:"comet-06 comet-instance",attrs:{role:"presentation",width:"195",height:"173.05",viewBox:"0 0 195 173.05"}},[a("use",{attrs:{"xlink:href":"#comet"}})])]),a("div",{staticClass:"solar-system-animation"},[a("svg",{staticClass:"animation-scene",attrs:{id:"animation-scene",viewBox:"0 0 2600 2600"}},[a("g",{attrs:{id:"Solar-system"}},[a("circle",{staticClass:"astral-paths earth-path",attrs:{id:"sun-path",cx:"700",cy:"700",r:"446.73"}}),a("g",{staticClass:"system-sun",attrs:{id:"system-sun"}},[a("g",{staticClass:"shadow-02-container"},[a("path",{staticClass:"sun-system-shadow-02",attrs:{id:"Shadow-2",d:"M891,701.53c-.73-17.83-24.69-14.39-27-34.15-.62-14.17,22.33-20.33,13.08-40.67-7.35-16.19-28.2-3.64-37.76-21-5.88-12.84,13-27.52-3.14-42.69-12.85-12.07-27.42,7.67-42.74-4.61-10.24-9.56,1.73-30.51-18.88-38.2-16.4-6.13-22.46,17.81-41.22,12.46-13-4.82-9.83-28.86-31.75-27.91-17.44.76-14.09,25.24-33.42,27.64-13.85.64-19.88-22.82-39.78-13.36-15.84,7.52-3.57,28.83-20.54,38.6-12.56,6-26.91-13.3-41.75,3.22-11.82,13.14,7.49,28-4.52,43.69-9.36,10.47-29.85-1.76-37.38,19.31-6,16.76,17.41,23,12.18,42.13-4.72,13.33-28.24,10-27.31,32.46.73,17.83,24.69,14.39,27,34.15.62,14.17-22.33,20.33-13.08,40.67,7.35,16.19,28.19,3.64,37.75,21,5.89,12.84-13,27.51,3.14,42.69,12.86,12.07,27.43-7.68,42.76,4.61,10.22,9.56-1.73,30.51,18.87,38.2,16.4,6.13,22.46-17.81,41.22-12.46,13,4.82,9.83,28.86,31.75,27.91,17.45-.76,14.09-25.24,33.42-27.64,13.85-.64,19.88,22.82,39.78,13.36,15.84-7.52,3.57-28.82,20.53-38.6,12.57-6,26.92,13.3,41.77-3.22,11.81-13.14-7.5-28,4.52-43.69,9.35-10.47,29.84,1.75,37.37-19.31,6-16.76-17.41-23-12.18-42.13C868.4,720.66,891.91,723.94,891,701.53Z"}})]),a("g",{staticClass:"shadow-01-container"},[a("path",{staticClass:"sun-system-shadow-01",attrs:{id:"Shadow-1",d:"M853.11,701.23c-.59-14.3-19.79-11.54-21.66-27.38-.51-11.36,17.89-16.3,10.48-32.61-5.9-13-22.61-2.92-30.27-16.82-4.72-10.29,10.43-22.06-2.52-34.22-10.31-9.68-22,6.15-34.27-3.7-8.21-7.66,1.39-24.46-15.13-30.63-13.15-4.91-18,14.28-33,10-10.46-3.87-7.88-23.14-25.45-22.38-14,.61-11.3,20.23-26.8,22.16-11.11.51-15.94-18.3-31.89-10.72-12.7,6-2.86,23.12-16.47,31-10.07,4.82-21.57-10.66-33.47,2.58-9.48,10.54,6,22.47-3.63,35-7.5,8.4-23.93-1.41-30,15.48-4.8,13.44,14,18.41,9.77,33.78-3.78,10.69-22.64,8.06-21.89,26,.59,14.3,19.79,11.54,21.66,27.38.51,11.36-17.89,16.3-10.48,32.61,5.9,13,22.6,2.92,30.27,16.81,4.72,10.3-10.44,22.07,2.52,34.23,10.31,9.68,22-6.15,34.27,3.7,8.2,7.67-1.38,24.46,15.13,30.63,13.15,4.91,18-14.28,33-10,10.46,3.87,7.88,23.14,25.45,22.38,14-.61,11.3-20.23,26.8-22.16,11.11-.51,15.94,18.3,31.89,10.72,12.7-6,2.86-23.12,16.46-31,10.07-4.82,21.58,10.66,33.48-2.58,9.48-10.54-6-22.47,3.63-35,7.5-8.39,23.93,1.4,30-15.48,4.8-13.44-14-18.41-9.77-33.78C835,716.56,853.86,719.19,853.11,701.23Z"}})]),a("g",{staticClass:"sun-center",attrs:{id:"Sun-Center"}},[a("g",{attrs:{id:"sun-bg"}},[a("ellipse",{staticClass:"sun-system-bg",attrs:{cx:"700.1",cy:"700.02",rx:"112.62",ry:"111.31"}})]),a("g",{staticClass:"sun-system-patterns",attrs:{id:"solar-pattern"}},[a("path",{attrs:{d:"M645.23,691.65c-22.92-1.52-43.41,35.65-17.18,45.57,23.25,3.94,10-15.63,23.57-22C666.1,709.92,671.45,691.23,645.23,691.65Z"}}),a("path",{attrs:{d:"M677.68,619.74c-11,4.66,2.61,17.09,7.19,6.73C686.21,622.31,681.56,618.62,677.68,619.74Z"}}),a("path",{attrs:{d:"M677.33,650.71c-2.92-9.79-21.62-11.71-23.4-.51C626.38,669.21,686.18,680.3,677.33,650.71Z"}}),a("path",{attrs:{d:"M692.35,637.33c-4.34,0-4.35,6.75,0,6.75S696.71,637.33,692.35,637.33Z"}}),a("path",{attrs:{d:"M796.8,693.83c-2.73-40.32-54.15-24.47-22.92,8.42,3.83,12.2-32.82,31.45-1.68,34.78C789.86,732.64,796.87,710.12,796.8,693.83Z"}}),a("path",{attrs:{d:"M760.72,702c-3.23-6.51-12.89-1.75-10.73,4.83C752.53,714.43,764,708.8,760.72,702Z"}}),a("path",{attrs:{d:"M752.51,745.21c-4.35,0-4.35,6.76,0,6.76S756.87,745.21,752.51,745.21Z"}}),a("path",{attrs:{d:"M645.85,742.12c-4.35,0-4.36,6.75,0,6.75S650.2,742.12,645.85,742.12Z"}})])])]),a("g",{staticClass:"system-earth-moon-container"},[a("g",{staticClass:"system-earth-moon",attrs:{id:"system-earth"}},[a("circle",{staticClass:"astral-paths moon-path",attrs:{cx:"700",cy:"257.25",r:"163.79"}}),a("g",{staticClass:"system-earth",attrs:{id:"earth"}},[a("circle",{staticClass:"earth-shadow-02",attrs:{id:"Shadow-2-2",cx:"700",cy:"255.79",r:"95.31"}}),a("circle",{staticClass:"earth-shadow-01 cls-5",attrs:{id:"Shadow-1-2",cx:"699.31",cy:"256.48",r:"76.5"}}),a("g",{staticClass:"planet",attrs:{id:"Planet"}},[a("circle",{staticClass:"earth-water",attrs:{id:"water-bg",cx:"699.7",cy:"256.09",r:"56.15"}}),a("g",{staticClass:"earth-continent",attrs:{id:"continents"}},[a("path",{attrs:{d:"M687.11,207.26c2,4.53,8.75,4.4,11.32.86,1.82-3.13,1.9-8.09,6.22-8C702.06,200.07,679.4,198.12,687.11,207.26Z"}}),a("path",{attrs:{d:"M726.44,287.35c-6.77-1.25-15.74,18.37-7.09,17.24C725.52,302.43,734.86,289.49,726.44,287.35Z"}}),a("path",{attrs:{d:"M676.87,217.52c-2.48-13.89-8.65-9-8.58-.22C668.14,219.59,676.53,218.46,676.87,217.52Z"}}),a("path",{attrs:{d:"M753.7,240.67c-2.54-7.48-5.41-14.3-10.86-20.5a56.06,56.06,0,0,0-7.18-7.19c-17.83,3.73-24.3,9-45.48,4.27-2.71-4.14-8.38,2.63-9.53,4.15-.85.5-4.44,2.31-4.81,3.12-.55,2.89,5.34,6,1.82,9a7.84,7.84,0,0,1-4,1.22c-9.43-.13-11.36,5.3-11.92,10.35.48,11,12.69,1.25,16.93-1.65,6.47-2.64,5.35,3.6,8.22,3,5.12-1.24,22.63-4.65,16,5.07-13.25,9-15.93-10.69-35,1.3-11.15-1.69-23.4,8.5-15.33,18.65,5.8,9.29,19.07,4.11,27.05,8.78,4.92,9,2.51,19.76,8.19,28.33a12.37,12.37,0,0,0,3.79,3.12,57.43,57.43,0,0,0,6.74.55c6.64-1.9,12.85-10.16,15.21-16.53,3.59-9.8,2.31-14.54,10.42-22.33,0-6.05,2.53-14.53,10-16,9-.21,10.26,9,17.54,11.44a12.66,12.66,0,0,0,3.83-5.63,53.91,53.91,0,0,0,.45-7A56.51,56.51,0,0,0,753.7,240.67Z"}})])])]),a("g",{staticClass:"system-moonlight",attrs:{id:"system-moonlight"}},[a("circle",{staticClass:"moon-shadow-02",attrs:{id:"Shadow-2-3",cx:"700",cy:"92.85",r:"40"}}),a("circle",{staticClass:"moon-shadow-01",attrs:{id:"Shadow-1-3",cx:"700",cy:"92.85",r:"30.66"}}),a("g",{attrs:{id:"moon-system-center"}},[a("circle",{staticClass:"moon-center",attrs:{id:"moon-system-bg",cx:"700",cy:"92.85",r:"20.47"}}),a("g",{staticClass:"moon-pattern",attrs:{id:"moon-pattern"}},[a("ellipse",{attrs:{cx:"692.39",cy:"81.87",rx:"2.95",ry:"2.96"}}),a("ellipse",{attrs:{cx:"710.87",cy:"101.69",rx:"5.17",ry:"5.27",transform:"translate(607.73 812.35) rotate(-89.88)"}}),a("ellipse",{attrs:{cx:"700.69",cy:"103.74",rx:"2.24",ry:"2.28",transform:"translate(595.52 804.22) rotate(-89.88)"}}),a("ellipse",{attrs:{cx:"705.24",cy:"94.63",rx:"1.39",ry:"1.47",transform:"translate(609.17 799.68) rotate(-89.88)"}}),a("ellipse",{attrs:{cx:"713.68",cy:"93.91",rx:"0.59",ry:"0.63",transform:"translate(618.31 807.4) rotate(-89.88)"}}),a("ellipse",{attrs:{cx:"703.44",cy:"78.86",rx:"2.49",ry:"2.63",transform:"translate(623.15 782.14) rotate(-89.88)"}}),a("ellipse",{attrs:{cx:"686.07",cy:"99.66",rx:"1.21",ry:"1.24",transform:"matrix(0, -1, 1, 0, 585.01, 785.53)"}}),a("ellipse",{attrs:{cx:"689.2",cy:"87.88",rx:"1.21",ry:"1.22",transform:"matrix(0, -1, 1, 0, 599.91, 776.9)"}}),a("ellipse",{attrs:{cx:"694.15",cy:"87.54",rx:"1.61",ry:"1.7",transform:"matrix(0, -1, 1, 0, 605.19, 781.51)"}})])])])])])])])])])}),Y=[],tt={name:"Cosmos",data:function(){return{}},mounted:function(){},methods:{}},et=tt,at=(a("742d"),Object(o["a"])(et,X,Y,!1,null,null,null)),st=at.exports,rt="https://j4a201.p.ssafy.io/api",it="accessToken",nt="https://j4a201.p.ssafy.io",ct=rt+"/oauth2/authorize/google?redirect_uri="+nt,ot={name:"WelcomePage",components:{Cosmos:st},data:function(){return{user:this.userName}},mounted:function(){console.log("마운티드"),this.getToken()},computed:Object(O["a"])(Object(O["a"])({},Object(I["c"])("UserStore",["userName"])),{},{getCheckLogin:function(){return this.$store.getters["UserStore/getCheckLogin"]}}),methods:{moveToMainPage:function(){this.$router.push({name:"MainPage"})},google:function(){window.location.href=ct},getUrlParameter:function(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var e=new RegExp("[\\?&]"+t+"=([^&#]*)"),a=e.exec(window.location.search);return null===a?"":decodeURIComponent(a[1].replace(/\+/g," "))},getUser:function(){localStorage.getItem(it)&&(this.$store.dispatch("UserStore/fetchUser"),this.$router.push({name:"WelcomePage"}).catch((function(){})))},getToken:function(){var t=this.getUrlParameter("token");console.log(t),t&&localStorage.setItem(it,t),this.getUser()},logout:function(){this.$store.dispatch("UserStore/logout")}}},lt=ot,dt=(a("8a9d"),Object(o["a"])(lt,J,H,!1,null,"e123d4cc",null)),ut=dt.exports;d()(dt,{VContainer:x["a"]});var mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("div",{staticClass:"background"},[a("div",{attrs:{id:"stars"}}),a("div",{attrs:{id:"stars2"}}),a("div",{attrs:{id:"stars3"}})]),a("div",{staticClass:"contents"},[a("nav",[a("div",[a("div",{staticClass:"glow",on:{click:t.moveToMainPage}})])]),a("CardCategory")],1)])},ft=[],ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-btn-toggle",{staticClass:"languages",attrs:{mandatory:"",dark:"",color:"deep-purple accent-3",group:""},model:{value:t.selected_language,callback:function(e){t.selected_language=e},expression:"selected_language"}},t._l(t.flags,(function(e,s){return a("v-btn",{key:s,staticClass:"language"},[t._v(" "+t._s(e.name)+" ")])})),1),a("div",{staticClass:"category-field"},[a("SpreadCard",{attrs:{category:t.categories[0]}}),a("SpreadCard",{attrs:{category:t.categories[1]}})],1)],1)},vt=[],gt=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.chooseContainer(t.categoryId),on:{click:function(e){return t.startGame(t.category)}}},[a("div",{staticClass:"card card-card1"},[a("div",{staticClass:"card__face card__face--top"},[a("span",{staticClass:"card__value"},[t._v(" K ")]),a("span",{staticClass:"card__suit"},[a("svg",{attrs:{width:"20px",height:"21px",viewBox:"0 0 20 21",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("rect",{attrs:{id:"Rectangle-3",stroke:"#A68385",transform:"translate(10.035534, 10.071068) rotate(-315.000000) translate(-10.035534, -10.071068) ",x:"3.43933983",y:"3.47487373",width:"13.1923882",height:"13.1923882"}})])])])]),a("div",{staticClass:"card__face card__face--btm"},[a("span",{staticClass:"card__value"},[t._v(" K ")]),a("span",{staticClass:"card__suit"},[a("svg",{attrs:{width:"20px",height:"21px",viewBox:"0 0 20 21",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("rect",{attrs:{id:"Rectangle-3",stroke:"#A68385",transform:"translate(10.035534, 10.071068) rotate(-315.000000) translate(-10.035534, -10.071068) ",x:"3.43933983",y:"3.47487373",width:"13.1923882",height:"13.1923882"}})])])])])]),a("div",{staticClass:"card card-card2"},[a("div",{staticClass:"card__face card__face--top"},[a("span",{staticClass:"card__value"},[t._v(" Q ")]),a("span",{staticClass:"card__suit"},[a("svg",{attrs:{width:"21px",height:"18px",viewBox:"0 0 21 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("circle",{attrs:{id:"Oval",stroke:"#635F5C",cx:"4.5",cy:"13.5",r:"4"}}),a("circle",{attrs:{id:"Oval",stroke:"#635F5C",cx:"10.5",cy:"4.5",r:"4"}}),a("circle",{attrs:{id:"Oval",stroke:"#635F5C",cx:"16.5",cy:"13.5",r:"4"}})])])])]),a("div",{staticClass:"card__face card__face--btm"},[a("span",{staticClass:"card__value"},[t._v(" Q ")]),a("span",{staticClass:"card__suit"},[a("svg",{attrs:{width:"21px",height:"18px",viewBox:"0 0 21 18",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[a("g",{attrs:{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[a("circle",{attrs:{id:"Oval",stroke:"#635F5C",cx:"4.5",cy:"13.5",r:"4"}}),a("circle",{attrs:{id:"Oval",stroke:"#635F5C",cx:"10.5",cy:"4.5",r:"4"}}),a("circle",{attrs:{id:"Oval",stroke:"#635F5C",cx:"16.5",cy:"13.5",r:"4"}})])])])])]),a("div",{class:t.chooseImage(t.categoryId)},[a("div",{staticClass:"card__face card__face--top"},[a("span",{staticClass:"card__value"},[t._v(" "+t._s(t.categoryName)+" ")])]),a("div",{staticClass:"card__face card__face--btm"},[a("span",{staticClass:"card__value"},[t._v(" "+t._s(t.categoryName)+" ")]),t._m(0)])])])}),pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"card__suit"},[a("i",{staticClass:"far fa-lemon"})])}],Ct={name:"SpreadCard",props:{category:Object},data:function(){return{}},computed:{categoryId:function(){return this.category.id},categoryImg:function(){return this.category.path},categoryName:function(){return this.category.name},chooseContainer:function(){return function(t){return 1===t?"animal-card-container":"fruit-card-container"}},chooseImage:function(){return function(t){return 1===t?"card animal-card-card3":"card fruit-card-card3"}}},methods:{startGame:function(t){this.$store.dispatch("CardGameStore/fetchCards",t.id),this.$router.push({name:"PlayCardGame",params:{category:t}})}}},_t=Ct,xt=(a("394d"),Object(o["a"])(_t,gt,pt,!1,null,"ec8e46de",null)),bt=xt.exports,yt={name:"CardCategory",components:{SpreadCard:bt},data:function(){return{selected_language:void 0,flags:[{id:1,name:"us",icon:"us.png"},{id:2,name:"cn",icon:"cn.png"},{id:3,name:"jp",icon:"jp.png"},{id:4,name:"vn",icon:"vn.png"},{id:5,name:"fr",icon:"fr.png"},{id:6,name:"es",icon:"es.png"}],categories:[{id:1,name:"Animal",sub:"동물",path:"https://i.pinimg.com/originals/d6/3c/de/d63cded9d8454a5b57ee8bef31c3ee71.gif"},{id:2,name:"Fruit",sub:"과일",path:"https://acegif.com/wp-content/gifs/apple-8.gif"}]}},methods:{checkLanguage:function(t){this.selectedLanguage=t.name},startGame:function(t){this.$store.dispatch("CardGameStore/fetchCards",t.id),this.$router.push({name:"PlayGame",params:{category:t}})},audioTest:function(){this.$router.push({name:"AudioTest"})}}},wt=yt,St=(a("e410"),a("a609")),kt=Object(o["a"])(wt,ht,vt,!1,null,"7ad9d624",null),Ot=kt.exports;d()(kt,{VBtn:z["a"],VBtnToggle:St["a"],VContainer:x["a"]});var jt={name:"SelectCardGame",components:{CardCategory:Ot},methods:{moveToMainPage:function(){this.$router.push({name:"MainPage"})}}},It=jt,Pt=(a("ee67"),Object(o["a"])(It,mt,ft,!1,null,"a72dae72",null)),Tt=Pt.exports;d()(Pt,{VContainer:x["a"]});var $t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","fill-height":""}},[a("div",{staticClass:"background"},[a("div",{attrs:{id:"stars"}}),a("div",{attrs:{id:"stars2"}}),a("div",{attrs:{id:"stars3"}})]),a("div",{staticClass:"contents"},[a("nav",[a("div",{staticClass:"glow",on:{click:t.moveToSelectPage}})]),t.started?a("h1",{staticClass:"text-center"},[t._v(" 녹음버튼을 눌러 정답을 말해보세요 ")]):t._e(),a("div",{staticClass:"game-contents"},[a("div",{staticClass:"countdown-timer"},[t.started?a("Timer",{attrs:{quizIdx:t.quizIdx,resetTime:t.resetTime},on:{solvingStatus:t.is_solved}}):t._e()],1),a("div",{staticClass:"game-field"},[a("div",{staticClass:"card"},[t.started?a("div",[a("QuizCard",{attrs:{currentQuiz:t.currentQuiz,fliped:t.fliped},on:{nextCard:t.nextCard,is_fliped:t.is_fliped}})],1):t.ended?a("button",{staticClass:"auth-button mx-auto"},[t._v(" 결과 보기 ")]):a("button",{staticClass:"auth-button mx-auto",on:{click:t.getStart}},[t._v(" 게임 시작 ")])])]),t.started?a("div",{staticClass:"audio-button"},[a("Audio")],1):t._e()])])])},Et=[],Rt=(a("4c53"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flip-card",class:{active:t.flip}},[a("div",{staticClass:"flip-card-inner"},[a("div",{staticClass:"flip-card-front",on:{click:t.flipCard}},[t._m(0),a("v-img",{staticClass:"image",staticStyle:{"border-radius":"30px"},attrs:{src:t.cardImg,height:"100%"}})],1),a("div",{staticClass:"flip-card-back",staticStyle:{"border-radius":"30px"}},[t.flip?a("h1",{staticClass:"text-center"},[t._v(t._s(t.cardAnswer))]):t._e()])]),a("div",{staticClass:"d-flex justify-content-center"},[t.flip?a("button",{staticClass:"auth-button mx-auto",on:{click:t.goNext}},[t._v(" 다음 문제 ")]):t._e()])])])}),Mt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"overlay",staticStyle:{"border-radius":"30px"}},[a("h1",{staticClass:"text"},[t._v("정답을 보고 싶으면 카드를 더블클릭하세요")])])}],zt={name:"QuizCard",props:{currentQuiz:Object,fliped:Boolean},data:function(){return{flip:!1}},computed:{cardImg:function(){return this.currentQuiz.path},cardAnswer:function(){return this.currentQuiz.word}},watch:{fliped:function(t){!0===t&&this.flipCard()}},methods:{flipCard:function(){this.flip=!this.flip,this.$emit("is_fliped",!0)},goNext:function(){console.log("다음 카드"),this.flipCard(),this.$emit("nextCard",!0)}}},Gt=zt,Ut=(a("26af"),a("adda")),Bt=Object(o["a"])(Gt,Rt,Mt,!1,null,"73a8b9c9",null),At=Bt.exports;d()(Bt,{VImg:Ut["a"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"base-timer"},[a("svg",{staticClass:"base-timer__svg",attrs:{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"}},[a("g",{staticClass:"base-timer__circle"},[a("circle",{staticClass:"base-timer__path-elapsed",attrs:{cx:"50",cy:"50",r:"45"}}),a("path",{staticClass:"base-timer__path-remaining",class:t.remainingPathColor,attrs:{"stroke-dasharray":t.circleDasharray,d:"\n            M 50, 50\n            m -45, 0\n            a 45,45 0 1,0 90,0\n            a 45,45 0 1,0 -90,0\n          "}})])]),a("h1",{staticClass:"label"},[t._v(t._s(t.formattedTimeLeft))])])},Lt=[],Vt=(a("a9e3"),a("b680"),283),Ft=10,Zt=5,qt={info:{color:"green"},warning:{color:"orange",threshold:Ft},alert:{color:"red",threshold:Zt}},Qt=15,Dt={name:"Timer",props:{quizIdx:Number,resetTime:Boolean},data:function(){return{timePassed:0,timerInterval:null}},computed:{circleDasharray:function(){return"".concat((this.timeFraction*Vt).toFixed(0)," 283")},formattedTimeLeft:function(){var t=this.timeLeft,e=t%60;return e<10&&(e="0".concat(e)),"".concat(e)},timeLeft:function(){return Qt-this.timePassed},timeFraction:function(){var t=this.timeLeft/Qt;return t-1/Qt*(1-t)},remainingPathColor:function(){var t=qt.alert,e=qt.warning,a=qt.info;return this.timeLeft<=t.threshold?t.color:this.timeLeft<=e.threshold?e.color:a.color}},watch:{quizIdx:function(t){t<15?(console.log(t+1+"번째 카드"),this.start()):console.log("끝!")},timePassed:function(t){15===t&&(this.onTimesUp(),this.$emit("solvingStatus",!1))},resetTime:function(t){!0===t&&this.onTimesUp()}},mounted:function(){0===this.quizIdx&&(console.log("첫번째 카드"),this.start())},methods:{moveNext:function(){this.onTimesUp()},onTimesUp:function(){clearInterval(this.timerInterval),this.timePassed=15},start:function(){var t=this;this.timePassed=0,this.timerInterval=setInterval((function(){return t.timePassed+=1}),1e3)}}},Wt=Dt,Kt=(a("a64b"),Object(o["a"])(Wt,Nt,Lt,!1,null,"4ef304bf",null)),Jt=Kt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"frame"},[a("div",{staticClass:"center"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.isRecorded,expression:"isRecorded"}],attrs:{type:"checkbox",id:"audio-record"},domProps:{checked:Array.isArray(t.isRecorded)?t._i(t.isRecorded,null)>-1:t.isRecorded},on:{change:function(e){var a=t.isRecorded,s=e.target,r=!!s.checked;if(Array.isArray(a)){var i=null,n=t._i(a,i);s.checked?n<0&&(t.isRecorded=a.concat([i])):n>-1&&(t.isRecorded=a.slice(0,n).concat(a.slice(n+1)))}else t.isRecorded=r}}}),a("label",{attrs:{for:"audio-record"}},[a("svg",{attrs:{width:"100px",height:"100px",viewBox:"0 0 100 100"}},[a("circle",{staticClass:"circle",attrs:{cx:"50",cy:"50",r:"47"}})]),t._m(0),t._m(1)])])])},Xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icone"},[a("div"),a("div"),a("div")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dots"},[a("div"),a("div"),a("div")])}],Yt={name:"Audio",data:function(){return{isRecorded:!1,blob:{}}},watch:{isRecorded:function(t){console.log(t),!0===t?this.startRecord():this.endRecord()}},methods:{startRecord:function(){var t=this;navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){t.mediaRecorder=new MediaRecorder(e),t.mediaRecorder.addEventListener("dataavailable",(function(e){t.blob=e.data})),t.mediaRecorder.start()})).catch((function(t){console.log(t)}))},endRecord:function(){this.mediaRecorder.stop(),this.upload()},upload:function(){var t=new FormData;t.append("file",this.blob);var e={"Content-Type":"multipart/form-data"};N.a.post("https://j4a201.p.ssafy.io/card-api/file/upload",t,e).then((function(t){console.log(t);t.data.object})).catch((function(t){return console.log(t)}))}}},te=Yt,ee=(a("421d"),Object(o["a"])(te,Ht,Xt,!1,null,"7e620f67",null)),ae=ee.exports,se={name:"PlayCardGame",components:{QuizCard:At,Timer:Jt,Audio:ae},data:function(){return{categoryName:"",categorySub:"",quizIdx:0,started:!1,ended:!1,solvingStatus:!1,fliped:!1,resetTime:!1}},computed:Object(O["a"])(Object(O["a"])({},Object(I["c"])("CardGameStore",["playingCards"])),{},{currentQuiz:function(){return this.sendCurrentQuiz(this.quizIdx)}}),watch:{solvingStatus:function(t){!1===t&&(console.log("시간초과"),this.fliped=!0)}},created:function(){this.getParams(),this.solvingStatus=!1},methods:{getParams:function(){var t=this.$route.params.category;this.categoryName=t.name,this.categorySub=t.sub},sendCurrentQuiz:function(t){if(t<15)return this.playingCards[t];this.started=!1,this.ended=!0,this.quizIdx=0},is_solved:function(t){!1===t&&(console.log("시간초과!"),this.solvingStatus=t,this.fliped=!0)},is_fliped:function(t){console.log("정답확인"),this.resetTime=!0},nextCard:function(t){!0===t&&(this.quizIdx+=1,this.solvingStatus=!0,this.fliped=!1,this.resetTime=!1)},getStart:function(){this.started=!0},moveToSelectPage:function(){this.$router.push({name:"SelectCardGame"})}}},re=se,ie=(a("a096"),Object(o["a"])(re,$t,Et,!1,null,"31e1ebce",null)),ne=ie.exports;d()(ie,{VContainer:x["a"]});var ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("NavBar"),a("div",{attrs:{id:"microphone-test"}},[a("audio",{ref:"recordPlayer",attrs:{controls:"",src:""}}),a("v-btn",{on:{click:t.startRecord}},[t._v("녹음")]),a("v-btn",{on:{click:t.endRecord}},[t._v("중단")]),a("v-btn",{on:{click:t.upload}},[t._v("업로드")])],1)],1)},oe=[],le=(a("2b3d"),a("d3b7"),a("3ca3"),a("ddb0"),{name:"AudioTest",data:function(){return{blob:{}}},components:{NavBar:B},methods:{startRecord:function(){var t=this;navigator.mediaDevices.getUserMedia({audio:!0}).then((function(e){t.mediaRecorder=new MediaRecorder(e),t.mediaRecorder.addEventListener("dataavailable",(function(e){t.$refs.recordPlayer.src=URL.createObjectURL(e.data),console.log(t.$refs.recordPlayer.src),t.blob=e.data;var a=new FileReader;a.onloadend=function(){}})),t.mediaRecorder.start()})).catch((function(t){console.log(t)}))},endRecord:function(){this.mediaRecorder.stop()},upload:function(){var t=new FormData;console.log(this.blob),t.append("file",this.blob);var e={"Content-Type":"multipart/form-data"};N.a.post("https://j4a201.p.ssafy.io/card-api/file/upload",t,e).then((function(t){console.log(t);var e=t.data.object,s=a("5af4"),r=new s(e);r.then((function(t){t.fnExtractSoundToMP3("./assets/record.mp3",(function(t,e){t||console.log(e)}))}),(function(t){console.log(t)}))})).catch((function(t){return console.log(t)}))}}}),de=le,ue=Object(o["a"])(de,ce,oe,!1,null,null,null),me=ue.exports;d()(ue,{VBtn:z["a"],VContainer:x["a"]}),s["a"].use(v["a"]);var fe,he=[{path:"/",name:"WelcomePage",component:ut},{path:"/main",name:"MainPage",component:y},{path:"/smartcameragame",name:"SmartCameraGame",component:K},{path:"/selectcardgame",name:"SelectCardGame",component:Tt},{path:"/playcardgame",name:"PlayCardGame",component:ne},{path:"/audiotest",name:"AudioTest",component:me}],ve=new v["a"]({mode:"history",routes:he}),ge=ve,pe=a("ade3"),Ce=a("0e44"),_e={namespaced:!0,state:{authenticated:!1,currentUser:null,userName:null},mutations:{SET_USER:function(t,e){t.authenticated=!0,t.currentUser=e,t.userName=e.data.name},LOGOUT:function(t){t.authenticated=!1,t.currentUser=null}},getters:{getCheckLogin:function(t){return t.authenticated}},actions:{fetchUser:function(t){var e=t.commit;N()({url:rt+"/user/me",method:"GET",headers:{Authorization:"Bearer "+localStorage.getItem(it)}}).then((function(t){e("SET_USER",t)})).catch((function(t){console.log(t)}))},logout:function(t){var e=t.commit;localStorage.removeItem(it),e("LOGOUT")}}},xe=_e,be={namespaced:!0,state:{score:0,category:"",is_correct:!1,is_done:!1},getters:{getScore:function(t){return t.score},getCategory:function(t){return t.category},getIsCorrect:function(t){return t.is_correct},getIsDone:function(t){return t.is_done}},mutations:{SET_INFO:function(t,e){var a=e.info;t.is_correct=e.is_correct,"number"===typeof a?t.score=a:t.category=a,t.is_done=!0,console.log(t.is_done)},INITIALIZE_INFO:function(t){t.score=0,t.category="",t.is_correct=!1,t.is_done=!1}},actions:{setInfo:function(t,e){var a=t.commit;a("SET_INFO",e)},initializeInfo:function(t){var e=t.commit;e("INITIALIZE_INFO")}}},ye=be,we={namespaced:!0,state:{playingCards:[]},getters:{},mutations:{SET_CARDS:function(t,e){t.playingCards=e}},actions:{fetchCards:function(t,e){var a=t.commit;N.a.get("https://j4a201.p.ssafy.io/card-api/card/".concat(e)).then((function(t){a("SET_CARDS",t.data.object)})).catch((function(t){console.log(t)}))}}},Se=we;s["a"].use(I["a"]);var ke=new I["a"].Store({modules:{UserStore:xe,SmartCameraStore:ye,CardGameStore:Se},plugins:[Object(Ce["a"])((fe={paths:["UserStore"]},Object(pe["a"])(fe,"paths",["SmartCameraStore"]),Object(pe["a"])(fe,"paths",["CardGameStore"]),fe))]}),Oe=a("f309");s["a"].use(Oe["a"]);var je=new Oe["a"]({}),Ie=a("c115"),Pe=a.n(Ie);s["a"].use(Pe.a),s["a"].config.productionTip=!1,new s["a"]({router:ge,store:ke,vuetify:je,render:function(t){return t(h)}}).$mount("#app")},"5e4f":function(t,e,a){t.exports=a.p+"img/camera.0a9e0e6a.png"},"636c":function(t,e,a){},"6db8":function(t,e,a){t.exports=a.p+"img/detected_image.3c36b4cd.jpg"},"742d":function(t,e,a){"use strict";a("36f9")},"7e0b":function(t,e,a){},8024:function(t,e,a){},8897:function(t,e,a){"use strict";a("0fe2")},"8a9d":function(t,e,a){"use strict";a("8024")},9090:function(t,e,a){t.exports=a.p+"img/welcome-icon.d5ccf999.png"},9230:function(t,e,a){t.exports=a.p+"img/venus.23507588.png"},a096:function(t,e,a){"use strict";a("7e0b")},a64b:function(t,e,a){"use strict";a("636c")},af4d:function(t,e,a){"use strict";a("e297")},c534:function(t,e,a){t.exports=a.p+"img/greenus.a393f14c.png"},ccfa:function(t,e,a){},d73f:function(t,e,a){},ded2:function(t,e,a){t.exports=a.p+"img/card.413c8efe.png"},e297:function(t,e,a){},e410:function(t,e,a){"use strict";a("3f92")},ee16:function(t,e,a){},ee67:function(t,e,a){"use strict";a("d73f")},f46c:function(t,e,a){t.exports=a.p+"img/out-icon.f8d46a6a.png"}});
//# sourceMappingURL=app.91d57bbc.js.map