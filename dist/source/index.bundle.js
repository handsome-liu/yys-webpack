<<<<<<< HEAD:dist/js/index.bundle.js
!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!m[e]||!g[e])return;for(var t in g[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(p[t]=n[t]);0==--$&&0===y&&k()}(e,t),n&&n(e,t)};var t,r=!0,i="b43b59bb4c69656274ce",o=1e4,c={},a=[],s=[];function l(e){var n=O[e];if(!n)return D;var r=function(r){return n.hot.active?(O[r]?-1===O[r].parents.indexOf(e)&&O[r].parents.push(e):(a=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),a=[]),D(r)},i=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(n){D[e]=n}}};for(var o in D)Object.prototype.hasOwnProperty.call(D,o)&&"e"!==o&&"t"!==o&&Object.defineProperty(r,o,i(o));return r.e=function(e){return"ready"===d&&f("prepare"),y++,D.e(e).then(n,function(e){throw n(),e});function n(){y--,"prepare"===d&&(b[e]||x(e),0===y&&0===$&&k())}},r.t=function(e,n){return 1&n&&(e=r(e)),D.t(e,-2&n)},r}var u=[],d="idle";function f(e){d=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var h,p,v,$=0,y=0,b={},g={},m={};function w(e){return+e+""===e?+e:e}function j(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return r=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=D.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(o).then(function(e){if(!e)return f("idle"),null;g={},b={},m=e.c,v=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});p={};return x(0),"prepare"===d&&0===y&&0===$&&k(),n})}function x(e){m[e]?(g[e]=!0,$++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=D.p+""+e+"."+i+".hot-update.js",n.appendChild(t)}(e)):b[e]=!0}function k(){f("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return _(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in p)Object.prototype.hasOwnProperty.call(p,t)&&n.push(w(t));e.resolve(n)}}function _(n){if("ready"!==d)throw new Error("apply() is only allowed in ready status");var t,r,o,s,l;function u(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var i=r.pop(),o=i.id,c=i.chain;if((s=O[o])&&!s.hot._selfAccepted){if(s.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:o};if(s.hot._main)return{type:"unaccepted",chain:c,moduleId:o};for(var a=0;a<s.parents.length;a++){var l=s.parents[a],u=O[l];if(u){if(u.hot._declinedDependencies[o])return{type:"declined",chain:c.concat([l]),moduleId:o,parentId:l};-1===n.indexOf(l)&&(u.hot._acceptedDependencies[o]?(t[l]||(t[l]=[]),h(t[l],[o])):(delete t[l],n.push(l),r.push({chain:c.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var $={},y=[],b={},g=function(){console.warn("[HMR] unexpected require("+x.moduleId+") to disposed module")};for(var j in p)if(Object.prototype.hasOwnProperty.call(p,j)){var x;l=w(j);var k=!1,_=!1,q=!1,P="";switch((x=p[j]?u(l):{type:"disposed",moduleId:j}).chain&&(P="\nUpdate propagation: "+x.chain.join(" -> ")),x.type){case"self-declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(k=new Error("Aborted because of self decline: "+x.moduleId+P));break;case"declined":n.onDeclined&&n.onDeclined(x),n.ignoreDeclined||(k=new Error("Aborted because of declined dependency: "+x.moduleId+" in "+x.parentId+P));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(x),n.ignoreUnaccepted||(k=new Error("Aborted because "+l+" is not accepted"+P));break;case"accepted":n.onAccepted&&n.onAccepted(x),_=!0;break;case"disposed":n.onDisposed&&n.onDisposed(x),q=!0;break;default:throw new Error("Unexception type "+x.type)}if(k)return f("abort"),Promise.reject(k);if(_)for(l in b[l]=p[l],h(y,x.outdatedModules),x.outdatedDependencies)Object.prototype.hasOwnProperty.call(x.outdatedDependencies,l)&&($[l]||($[l]=[]),h($[l],x.outdatedDependencies[l]));q&&(h(y,[x.moduleId]),b[l]=g)}var E,M=[];for(r=0;r<y.length;r++)l=y[r],O[l]&&O[l].hot._selfAccepted&&M.push({module:l,errorHandler:O[l].hot._selfAccepted});f("dispose"),Object.keys(m).forEach(function(e){!1===m[e]&&function(e){delete installedChunks[e]}(e)});for(var H,S,I=y.slice();I.length>0;)if(l=I.pop(),s=O[l]){var C={},A=s.hot._disposeHandlers;for(o=0;o<A.length;o++)(t=A[o])(C);for(c[l]=C,s.hot.active=!1,delete O[l],delete $[l],o=0;o<s.children.length;o++){var B=O[s.children[o]];B&&((E=B.parents.indexOf(l))>=0&&B.parents.splice(E,1))}}for(l in $)if(Object.prototype.hasOwnProperty.call($,l)&&(s=O[l]))for(S=$[l],o=0;o<S.length;o++)H=S[o],(E=s.children.indexOf(H))>=0&&s.children.splice(E,1);for(l in f("apply"),i=v,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var T=null;for(l in $)if(Object.prototype.hasOwnProperty.call($,l)&&(s=O[l])){S=$[l];var U=[];for(r=0;r<S.length;r++)if(H=S[r],t=s.hot._acceptedDependencies[H]){if(-1!==U.indexOf(t))continue;U.push(t)}for(r=0;r<U.length;r++){t=U[r];try{t(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[r],error:e}),n.ignoreErrored||T||(T=e)}}}for(r=0;r<M.length;r++){var L=M[r];l=L.module,a=[l];try{D(l)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:t,originalError:e}),n.ignoreErrored||T||(T=t),T||(T=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||T||(T=e)}}return T?(f("fail"),Promise.reject(T)):(f("idle"),new Promise(function(e){e(y)}))}var O={};function D(n){if(O[n])return O[n].exports;var r=O[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:j,apply:_,status:function(e){if(!e)return d;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:c[e]};return t=void 0,n}(n),parents:(s=a,a=[],s),children:[]};return e[n].call(r.exports,r,r.exports,l(n)),r.l=!0,r.exports}D.m=e,D.c=O,D.d=function(e,n,t){D.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,n){if(1&n&&(e=D(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(D.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)D.d(t,r,function(n){return e[n]}.bind(null,r));return t},D.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(n,"a",n),n},D.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},D.p="",D.h=function(){return i},l("./client/js/index.js")(D.s="./client/js/index.js")}({"./client/flash/yys_xsjj.swf":function(e,n,t){e.exports=t.p+"flash/yys_xsjj.swf"},"./client/js/Banner.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.$img=n.$img,this.$left=n.$left,this.$right=n.$right,this.length=this.$img.length,this.index=0}return r(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.index=e-1,this.change().clickImg().left().right()}},{key:"clickImg",value:function(e){var n=this;return this.$img.each(function(e){n.$img.eq(e).on("click",function(){e!==n.index&&(n.index=e,n.change())})}),this}},{key:"left",value:function(){var e=this;return this.$left.on("click",function(){--e.index<0&&(e.index=e.length-1),e.change()}),this}},{key:"right",value:function(){var e=this;return this.$right.on("click",function(){++e.index>=e.length&&(e.index=0),e.change()}),this}},{key:"change",value:function(){var e=this.index-1,n=this.index+1;return e<0&&(e=this.length-1),n>=this.length&&(n=0),this.$img.removeClass("middle left right"),this.$img.eq(e).addClass("left"),this.$img.eq(this.index).addClass("middle"),this.$img.eq(n).addClass("right"),this}}]),e}();n.default=i},"./client/js/Newinfo.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.$list=n.$list,this.$details=n.$details,this.$banner=n.$banner,this.$close=n.$close,this.$left=n.$left,this.$right=n.$right,this.time=500,this.listLen=this.$list.length}return r(e,[{key:"newinfoset",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this.list(e,n),this.close(e),this.left(),this.right()}},{key:"list",value:function(e,n){var t=this;this.$list.each(function(r){t.$list.eq(r).on("click",function(){t.$banner.index=r,t.$banner.css("right",1280*t.$banner.index+"px"),t.$details.show(),$(document.body).addClass(e),n&&n()})})}},{key:"close",value:function(e){var n=this;this.$close.on("click",function(){n.$details.hide(),$(document.body).removeClass(e)})}},{key:"left",value:function(){var e=this,n=new Date;this.$left.on("click",function(){new Date-n>=500&&(--e.$banner.index<0&&(e.$banner.index=e.listLen-1,e.$banner.css("right",1280*e.listLen+"px")),e.$banner.animate({right:1280*e.$banner.index+"px"},e.time),n=new Date)})}},{key:"right",value:function(){var e=this,n=new Date;this.$right.on("click",function(){new Date-n>=500&&(++e.$banner.index>=e.listLen+1&&(e.$banner.index=1,e.$banner.css("right",0)),e.$banner.animate({right:1280*e.$banner.index+"px"},e.time),n=new Date)})}}]),e}();n.default=i},"./client/js/ScrollShow.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.target=this.each(n)}return r(e,[{key:"init",value:function(){this.scrolleve()}},{key:"scrolleve",value:function(){var e=this,n=[$(window).height(),200],t=n[0],r=n[1];$(window).scroll(function(){for(var n=$(document).scrollTop()+t,i=function(t){var i=e.target[t];n>=i.top&&(setTimeout(function(){$(i).removeClass("hidden")},r*t),e.target.splice(t,1))},o=e.target.length-1;o>=0;o--)i(o)})}},{key:"each",value:function(e){var n=[],t=!0,r=!1,i=void 0;try{for(var o,c=e[Symbol.iterator]();!(t=(o=c.next()).done);t=!0){o.value.each(function(){this.top=$(this).offset().top,n.push(this)})}}catch(e){r=!0,i=e}finally{try{!t&&c.return&&c.return()}finally{if(r)throw i}}return n}}]),e}();n.default=i},"./client/js/Scrollbar.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.$con=n.$con,this.$scroll=n.$scroll,this.$bar=n.$bar,this.time=300}return r(e,[{key:"scrollbarset",value:function(){this.dragBar(),this.preventDefault({dragstart:this.$bar,contextmenu:this.$bar,selectstart:this.$bar}),this.scroll(1),this.clickMoveBar()}},{key:"scroll",value:function(e){var n=this;return this.$con.each(function(t){var r=n.$scroll.eq(t).height(),i=r/n.$con.eq(t).height();n.$con.eq(t).on("mousewheel",function(o){var c=n.$bar.eq(t).position().top+o.originalEvent.deltaY*e*i;c=Math.max(c,0),c=Math.min(c,r-n.$bar.eq(t).height()),n.$bar.eq(t).css("top",c+"px"),n.$con.eq(t).css("top",-c/i+"px")})}),this}},{key:"dragBar",value:function(){var e=this;return this.$bar.each(function(n){var t=e.$scroll.eq(n).height(),r=t/e.$con.eq(n).height(),i=r*t;e.$bar.eq(n).height(i).on("mousedown.dragBar",function(i){var o=[e.$bar.eq(n).position().top,i.clientY],c=o[0],a=o[1];$(document).on({"mousemove.dragBar":function(i){var o=c+(i.clientY-a);o=Math.max(o,0),o=Math.min(o,t-e.$bar.eq(n).height()),e.$bar.eq(n).css("top",o),e.$con.eq(n).css("top",-o/r)},"mouseup.dragBar":function(){$(document).off("mousemove.dragBar mouseup.dragBar")}})})}),this}},{key:"clickMoveBar",value:function(){var e=this;this.$scroll.each(function(n){var t=new Date;e.$scroll.eq(n).on("click",function(r){var i=e.$scroll.eq(n).height(),o=i/e.$con.eq(n).height(),c=r.clientY-(e.$scroll.eq(n).offset().top-$(document).scrollTop()),a=e.$bar.eq(n).position().top;r.target==e.$scroll.get(n)&&(a=c>a?a+50:a-50,a=Math.max(a,0),a=Math.min(a,i-e.$bar.eq(n).height()),new Date-t>e.time&&(e.$bar.eq(n).animate({top:a},e.time),e.$con.eq(n).animate({top:-a/o},e.time),t=new Date))})})}},{key:"preventDefault",value:function(e){for(var n in e)e.hasOwnProperty(n)&&e[n].on(n,function(e){e.preventDefault()});return this}}]),e}();n.default=i},"./client/js/Video.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var i=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.$btn=n.$btn,this.$video=n.$video,this.$close=n.$close}return r(e,[{key:"videoset",value:function(e){var n=this;this.$btn.on("click",function(){n.$video.show(),$(document.body).addClass(e)}),this.$close.on("click",function(){n.$video.hide(),$(document.body).removeClass(e)})}}]),e}();n.default=i},"./client/js/index.js":function(e,n,t){"use strict";t("./client/flash/yys_xsjj.swf"),t("./client/sass/yys.scss");var r=s(t("./client/js/Video.js")),i=s(t("./client/js/Newinfo.js")),o=s(t("./client/js/Scrollbar.js")),c=s(t("./client/js/ScrollShow.js")),a=s(t("./client/js/Banner.js"));function s(e){return e&&e.__esModule?e:{default:e}}new r.default({$btn:$("#first-screen").find(".videoBtn"),$video:$("#first-screen").find(".video"),$close:$("#first-screen").find(".video .close")}).videoset("noScroll"),new i.default({$list:$("#newinfo").find(".main ul li"),$details:$("#newinfo").find(".details"),$banner:$("#newinfo").find(".details .content ul"),$close:$("#newinfo").find(".details .content .close"),$left:$("#newinfo").find(".details .content .left"),$right:$("#newinfo").find(".details .content .right")}).newinfoset("noScroll",function(){new o.default({$con:$("#newinfo").find(".details .content ul li .txt .con"),$scroll:$("#newinfo").find(".details .content ul li .txt .scrollbar"),$bar:$("#newinfo").find(".details .content ul li .txt .scrollbar span")}).scrollbarset()}),new c.default([$("#newinfo .main .title"),$("#newinfo .main ul li")]).init(),new a.default({$img:$("#game").find(".banner ul li"),$left:$("#game").find(".banner .leftArrow"),$right:$("#game").find(".banner .rightArrow")}).init(3)},"./client/sass/yys.scss":function(e,n){}});
=======
/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var head = document.getElementsByTagName("head")[0];
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		;
/******/ 		head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "16fb6928584c28e99fa5";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (typeof dep === "undefined") hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (typeof dep === "undefined") hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "index.bundle";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./client/js/index.js")(__webpack_require__.s = "./client/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/favicon.ico":
/*!****************************!*\
  !*** ./client/favicon.ico ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"source/favicon.ico\";\n\n//# sourceURL=webpack:///./client/favicon.ico?");

/***/ }),

/***/ "./client/flash/yys_xsjj.swf":
/*!***********************************!*\
  !*** ./client/flash/yys_xsjj.swf ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"source/yys_xsjj.swf\";\n\n//# sourceURL=webpack:///./client/flash/yys_xsjj.swf?");

/***/ }),

/***/ "./client/js/Banner.js":
/*!*****************************!*\
  !*** ./client/js/Banner.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Banner = function () {\n    function Banner(target) {\n        _classCallCheck(this, Banner);\n\n        this.$img = target.$img; //所有轮播图片\n        this.$left = target.$left; //上一张\n        this.$right = target.$right; //下一张\n        this.length = this.$img.length; //图片数量\n        this.index = 0; //起始第几张\n        // console.log(this.$img);\n        // console.log(this.$left);\n        // console.log(this.$right);\n    }\n\n    _createClass(Banner, [{\n        key: 'init',\n        value: function init() {\n            var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;\n\n            this.index = index - 1;\n            this.change().clickImg().left().right();\n        }\n        //这一张\n\n    }, {\n        key: 'clickImg',\n        value: function clickImg(index) {\n            var _this = this;\n\n            this.$img.each(function (index) {\n                _this.$img.eq(index).on('click', function () {\n                    if (index !== _this.index) {\n                        _this.index = index;\n                        _this.change();\n                    }\n                });\n            });\n            return this;\n        }\n        //上一张\n\n    }, {\n        key: 'left',\n        value: function left() {\n            var _this2 = this;\n\n            this.$left.on('click', function () {\n                if (--_this2.index < 0) _this2.index = _this2.length - 1;\n                _this2.change();\n            });\n            return this;\n        }\n        //下一张\n\n    }, {\n        key: 'right',\n        value: function right() {\n            var _this3 = this;\n\n            this.$right.on('click', function () {\n                if (++_this3.index >= _this3.length) _this3.index = 0;\n                _this3.change();\n            });\n            return this;\n        }\n    }, {\n        key: 'change',\n        value: function change() {\n            var indexLeft = this.index - 1,\n                indexRight = this.index + 1;\n\n            if (indexLeft < 0) indexLeft = this.length - 1;\n            if (indexRight >= this.length) indexRight = 0;\n            this.$img.removeClass('middle left right');\n            this.$img.eq(indexLeft).addClass('left');\n            this.$img.eq(this.index).addClass('middle');\n            this.$img.eq(indexRight).addClass('right');\n            return this;\n        }\n    }]);\n\n    return Banner;\n}();\n\nexports.default = Banner;\n\n//# sourceURL=webpack:///./client/js/Banner.js?");

/***/ }),

/***/ "./client/js/Newinfo.js":
/*!******************************!*\
  !*** ./client/js/Newinfo.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// 新版本情报\nvar Newinfo = function () {\n    function Newinfo(target) {\n        _classCallCheck(this, Newinfo);\n\n        this.$list = target.$list; //最开始的情报列表头ul\n        this.$details = target.$details; //隐藏的情报详情，固定定位在最上层。\n        this.$banner = target.$banner; //负责轮播滚动left\n        this.$close = target.$close; //隐藏情报详情this.$details\n        this.$left = target.$left; //负责轮播向左滚动一个单位的left:-1280px;\n        this.$right = target.$right; //负责轮播向右滚动一个单位的left:-1280px;\n        this.time = 500; //轮播速度\n        this.listLen = this.$list.length; //轮播图片N张，因为是无缝，需要放多一张首张在最后，所以+1\n    }\n    // newinfo\n\n\n    _createClass(Newinfo, [{\n        key: 'newinfoset',\n        value: function newinfoset(noScroll) {\n            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n\n            this.list(noScroll, callback);\n            this.close(noScroll);\n            this.left();\n            this.right();\n        }\n        //主列表点击出现弹出框\n\n    }, {\n        key: 'list',\n        value: function list(noScroll, callback) {\n            var _this = this;\n\n            this.$list.each(function (index) {\n                // console.log(this.$list.eq(index));\n                _this.$list.eq(index).on('click', function () {\n                    // console.log(this);\n                    // console.log(index);\n                    _this.$banner.index = index;\n                    // console.log(this.$banner.index);\n                    _this.$banner.css('right', _this.$banner.index * 1280 + 'px');\n                    _this.$details.show();\n                    $(document.body).addClass(noScroll);\n                    callback && callback();\n                });\n            });\n        }\n        // 点击关闭弹出框\n\n    }, {\n        key: 'close',\n        value: function close(noScroll) {\n            var _this2 = this;\n\n            this.$close.on('click', function () {\n                _this2.$details.hide();\n                $(document.body).removeClass(noScroll);\n            });\n        }\n        // 上一张图\n\n    }, {\n        key: 'left',\n        value: function left() {\n            var _this3 = this;\n\n            var lastTime = new Date();\n            this.$left.on('click', function () {\n                if (new Date() - lastTime >= 500) {\n                    if (--_this3.$banner.index < 0) {\n                        _this3.$banner.index = _this3.listLen - 1;\n                        _this3.$banner.css('right', _this3.listLen * 1280 + 'px');\n                    }\n                    _this3.$banner.animate({\n                        right: _this3.$banner.index * 1280 + 'px'\n                    }, _this3.time);\n                    // console.log(this.$banner.index);\n                    lastTime = new Date();\n                }\n            });\n        }\n        //下一张图\n\n    }, {\n        key: 'right',\n        value: function right() {\n            var _this4 = this;\n\n            var lastTime = new Date();\n            this.$right.on('click', function () {\n                if (new Date() - lastTime >= 500) {\n                    if (++_this4.$banner.index >= _this4.listLen + 1) {\n                        _this4.$banner.index = 1;\n                        _this4.$banner.css('right', 0);\n                    }\n                    _this4.$banner.animate({\n                        right: _this4.$banner.index * 1280 + 'px'\n                    }, _this4.time);\n                    // console.log(this.$banner.index);\n                    lastTime = new Date();\n                }\n            });\n        }\n    }]);\n\n    return Newinfo;\n}();\n\nexports.default = Newinfo;\n\n//# sourceURL=webpack:///./client/js/Newinfo.js?");

/***/ }),

/***/ "./client/js/ScrollShow.js":
/*!*********************************!*\
  !*** ./client/js/ScrollShow.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//滚动显示\nvar ScrollShow = function () {\n    function ScrollShow(target) {\n        _classCallCheck(this, ScrollShow);\n\n        this.target = this.each(target);\n    }\n\n    _createClass(ScrollShow, [{\n        key: 'init',\n        value: function init() {\n            // console.log(this.target);\n            this.scrolleve();\n        }\n    }, {\n        key: 'scrolleve',\n        value: function scrolleve() {\n            var _this = this;\n\n            var _ref = [$(window).height(), 200],\n                windowHeight = _ref[0],\n                timedelay = _ref[1];\n\n            $(window).scroll(function () {\n                var scrolltop = $(document).scrollTop() + windowHeight; //文档滚动的距离 + window高度\n                // console.log(scrolltop);\n\n                var _loop = function _loop(i) {\n                    var obj = _this.target[i];\n                    if (scrolltop >= obj.top) {\n                        setTimeout(function () {\n                            // console.log(obj);\n                            $(obj).removeClass('hidden');\n                        }, timedelay * i);\n                        _this.target.splice(i, 1);\n                        // console.log(this.target.splice(i, 1));\n                    }\n                };\n\n                for (var i = _this.target.length - 1; i >= 0; i--) {\n                    _loop(i);\n                }\n            });\n        }\n        //遍历器\n\n    }, {\n        key: 'each',\n        value: function each(target) {\n            var temp = [];\n            // console.log(target);\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n                for (var _iterator = target[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                    var iterator = _step.value;\n\n                    // console.log(iterator);\n                    iterator.each(function () {\n                        this.top = $(this).offset().top;\n                        temp.push(this);\n                    });\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return) {\n                        _iterator.return();\n                    }\n                } finally {\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n\n            return temp;\n        }\n    }]);\n\n    return ScrollShow;\n}();\n\nexports.default = ScrollShow;\n\n//# sourceURL=webpack:///./client/js/ScrollShow.js?");

/***/ }),

/***/ "./client/js/Scrollbar.js":
/*!********************************!*\
  !*** ./client/js/Scrollbar.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n//自制滚动条\nvar Scrollbar = function () {\n    function Scrollbar(target) {\n        _classCallCheck(this, Scrollbar);\n\n        this.$con = target.$con; // 滚动内容\n        this.$scroll = target.$scroll; // 滚动条\n        this.$bar = target.$bar; // 滑块\n        this.time = 300;\n        // console.log(this.$con);\n        // console.log(this.$scroll);\n        // console.log(this.$bar);\n    }\n\n    _createClass(Scrollbar, [{\n        key: 'scrollbarset',\n        value: function scrollbarset() {\n            this.dragBar();\n            this.preventDefault({\n                dragstart: this.$bar,\n                contextmenu: this.$bar,\n                selectstart: this.$bar //目标对象被开始选中事件\n            });\n            this.scroll(1); //滚轮滚动一下，一个单位33.33333206176758px的距离\n            this.clickMoveBar();\n        }\n        //滚轮事件\n\n    }, {\n        key: 'scroll',\n        value: function scroll(speed) {\n            var _this = this;\n\n            this.$con.each(function (index) {\n                /*            scrollHeight        barHeight        barTop\r\n                 *    prop = —————————————— = ———————————————— = ——————————\r\n                 *             conHeight        scrollHeight       conTop\r\n                 */\n                var scrollHeight = _this.$scroll.eq(index).height(),\n                    prop = scrollHeight / _this.$con.eq(index).height();\n                _this.$con.eq(index).on('mousewheel', function (event) {\n                    var barTop = _this.$bar.eq(index).position().top + event.originalEvent.deltaY * speed * prop;\n                    barTop = Math.max(barTop, 0);\n                    barTop = Math.min(barTop, scrollHeight - _this.$bar.eq(index).height());\n                    //滑块this.$bar相对于父元素的位置\n                    _this.$bar.eq(index).css('top', barTop + 'px');\n                    //滑块this.$bar和内容this.$con的比例高度\n                    _this.$con.eq(index).css('top', -barTop / prop + 'px');\n                });\n            });\n            return this;\n        }\n        //滑块函数\n\n    }, {\n        key: 'dragBar',\n        value: function dragBar() {\n            var _this2 = this;\n\n            // 遍历滑块this.$bar，根据this.$con的内容高度来制定滑块this.$bar的高度\n            this.$bar.each(function (index) {\n                //prop = scrollHeight / conHeight = barHeight / scrollHeight = barTop / conTop\n                var scrollHeight = _this2.$scroll.eq(index).height(),\n                    prop = scrollHeight / _this2.$con.eq(index).height(),\n                    barHeight = prop * scrollHeight;\n                _this2.$bar.eq(index).height(barHeight).on('mousedown.dragBar', function (event) {\n                    // console.log('mousedown');\n                    //获取当前位置和初始鼠标位置\n                    var _ref = [_this2.$bar.eq(index).position().top, event.clientY],\n                        current = _ref[0],\n                        start = _ref[1];\n                    // console.log(current);\n                    // console.log(start);\n\n                    $(document).on({\n                        'mousemove.dragBar': function mousemoveDragBar(event) {\n                            // console.log('mousemove');\n                            var barTop = current + (event.clientY - start);\n                            barTop = Math.max(barTop, 0);\n                            barTop = Math.min(barTop, scrollHeight - _this2.$bar.eq(index).height());\n                            //滑块this.$bar相对于父元素的位置\n                            _this2.$bar.eq(index).css('top', barTop);\n                            //滑块this.$bar和内容this.$con的比例高度\n                            _this2.$con.eq(index).css('top', -barTop / prop);\n                        },\n                        'mouseup.dragBar': function mouseupDragBar() {\n                            // console.log('mouseup');\n                            $(document).off('mousemove.dragBar mouseup.dragBar');\n                        }\n                    });\n                });\n            });\n            return this;\n        }\n        //滚动条点击，滑块滑动\n\n    }, {\n        key: 'clickMoveBar',\n        value: function clickMoveBar() {\n            var _this3 = this;\n\n            this.$scroll.each(function (index) {\n                var lastTime = new Date();\n                _this3.$scroll.eq(index).on('click', function (event) {\n                    var scrollHeight = _this3.$scroll.eq(index).height(),\n                        prop = scrollHeight / _this3.$con.eq(index).height(),\n\n                    // 鼠标点击位置距离滚动条顶端的位置\n                    mouseTop = event.clientY - (_this3.$scroll.eq(index).offset().top - $(document).scrollTop());\n                    //滑块this.$bar距离滚动条顶端的位置\n                    var barTop = _this3.$bar.eq(index).position().top;\n                    // console.log(barTop,mouseTop);\n                    if (event.target == _this3.$scroll.get(index)) {\n                        // console.log(event.target);\n                        barTop = mouseTop > barTop ? barTop + 50 : barTop - 50;\n                        barTop = Math.max(barTop, 0);\n                        barTop = Math.min(barTop, scrollHeight - _this3.$bar.eq(index).height());\n                        if (new Date() - lastTime > _this3.time) {\n                            _this3.$bar.eq(index).animate({ top: barTop }, _this3.time);\n                            _this3.$con.eq(index).animate({ top: -barTop / prop }, _this3.time);\n                            lastTime = new Date();\n                        }\n                    }\n                });\n            });\n        }\n        //禁止默认事件\n\n    }, {\n        key: 'preventDefault',\n        value: function preventDefault(obj) {\n            for (var key in obj) {\n                if (obj.hasOwnProperty(key)) {\n                    obj[key].on(key, function (event) {\n                        event.preventDefault();\n                    });\n                }\n            }\n            return this;\n        }\n    }]);\n\n    return Scrollbar;\n}();\n\nexports.default = Scrollbar;\n\n//# sourceURL=webpack:///./client/js/Scrollbar.js?");

/***/ }),

/***/ "./client/js/Video.js":
/*!****************************!*\
  !*** ./client/js/Video.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// 视频\nvar Video = function () {\n    function Video(target) {\n        _classCallCheck(this, Video);\n\n        //首屏\n        this.$btn = target.$btn;\n        this.$video = target.$video;\n        this.$close = target.$close;\n    }\n\n    _createClass(Video, [{\n        key: 'videoset',\n        value: function videoset(noScroll) {\n            var _this = this;\n\n            this.$btn.on('click', function () {\n                _this.$video.show();\n                $(document.body).addClass(noScroll);\n            });\n            this.$close.on('click', function () {\n                _this.$video.hide();\n                $(document.body).removeClass(noScroll);\n            });\n        }\n    }]);\n\n    return Video;\n}();\n\nexports.default = Video;\n\n//# sourceURL=webpack:///./client/js/Video.js?");

/***/ }),

/***/ "./client/js/index.js":
/*!****************************!*\
  !*** ./client/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ../favicon.ico */ \"./client/favicon.ico\");\n\n__webpack_require__(/*! ../flash/yys_xsjj.swf */ \"./client/flash/yys_xsjj.swf\");\n\n__webpack_require__(/*! ../sass/yys.scss */ \"./client/sass/yys.scss\");\n\nvar _Video = __webpack_require__(/*! ./Video */ \"./client/js/Video.js\");\n\nvar _Video2 = _interopRequireDefault(_Video);\n\nvar _Newinfo = __webpack_require__(/*! ./Newinfo */ \"./client/js/Newinfo.js\");\n\nvar _Newinfo2 = _interopRequireDefault(_Newinfo);\n\nvar _Scrollbar = __webpack_require__(/*! ./Scrollbar */ \"./client/js/Scrollbar.js\");\n\nvar _Scrollbar2 = _interopRequireDefault(_Scrollbar);\n\nvar _ScrollShow = __webpack_require__(/*! ./ScrollShow */ \"./client/js/ScrollShow.js\");\n\nvar _ScrollShow2 = _interopRequireDefault(_ScrollShow);\n\nvar _Banner = __webpack_require__(/*! ./Banner */ \"./client/js/Banner.js\");\n\nvar _Banner2 = _interopRequireDefault(_Banner);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Video\n\n//scss\nnew _Video2.default({\n    $btn: $('#first-screen').find('.videoBtn'),\n    $video: $('#first-screen').find('.video'),\n    $close: $('#first-screen').find('.video .close')\n}).videoset('noScroll');\n\n// Newinfo\n\n//javascript\nnew _Newinfo2.default({\n    $list: $('#newinfo').find('.main ul li'),\n    $details: $('#newinfo').find('.details'),\n    $banner: $('#newinfo').find('.details .content ul'),\n    $close: $('#newinfo').find('.details .content .close'),\n    $left: $('#newinfo').find('.details .content .left'),\n    $right: $('#newinfo').find('.details .content .right')\n}).newinfoset('noScroll', function () {\n    //scrollbar\n    new _Scrollbar2.default({\n        $con: $('#newinfo').find('.details .content ul li .txt .con'),\n        $scroll: $('#newinfo').find('.details .content ul li .txt .scrollbar'),\n        $bar: $('#newinfo').find('.details .content ul li .txt .scrollbar span')\n    }).scrollbarset();\n});\n\n//ScrollShow\nnew _ScrollShow2.default([$('#newinfo .main .title'), $('#newinfo .main ul li')]).init();\n// new ScrollShow([\n//     $('#newinfo .main .title'),\n//     $('#newinfo .main ul li:nth-of-type(1)'),\n//     $('#newinfo .main ul li:nth-of-type(2)'),\n//     $('#newinfo .main ul li:nth-of-type(3)'),\n//     $('#newinfo .main ul li:nth-of-type(6)'),\n//     $('#newinfo .main ul li:nth-of-type(5)'),\n//     $('#newinfo .main ul li:nth-of-type(4)')\n// ]).init();\n\n// Banner\nnew _Banner2.default({\n    $img: $('#game').find('.banner ul li'),\n    $left: $('#game').find('.banner .leftArrow'),\n    $right: $('#game').find('.banner .rightArrow')\n}).init(3);\n\n//# sourceURL=webpack:///./client/js/index.js?");

/***/ }),

/***/ "./client/sass/yys.scss":
/*!******************************!*\
  !*** ./client/sass/yys.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./client/sass/yys.scss?");

/***/ })

/******/ });
>>>>>>> 8cbae04a5bb91b138a1e65b49d870efa45fa667c:dist/source/index.bundle.js
