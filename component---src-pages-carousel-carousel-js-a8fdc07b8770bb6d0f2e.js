webpackJsonp([0x86b78faebbec],{56:function(t,e,n){var i;!function(r,o,s,a){"use strict";function u(t,e,n){return setTimeout(f(t,n),e)}function c(t,e,n){return!!Array.isArray(t)&&(h(t,n[e],n),!0)}function h(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==a)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function l(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",o=r.console&&(r.console.warn||r.console.log);return o&&o.call(r.console,i,n),t.apply(this,arguments)}}function p(t,e,n){var i,r=e.prototype;i=t.prototype=Object.create(r),i.constructor=t,i._super=r,n&&vt(i,n)}function f(t,e){return function(){return t.apply(e,arguments)}}function d(t,e){return typeof t==yt?t.apply(e?e[0]||a:a,e):t}function v(t,e){return t===a?e:t}function m(t,e,n){h(E(e),function(e){t.addEventListener(e,n,!1)})}function g(t,e,n){h(E(e),function(e){t.removeEventListener(e,n,!1)})}function y(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function T(t,e){return t.indexOf(e)>-1}function E(t){return t.trim().split(/\s+/g)}function b(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function w(t){return Array.prototype.slice.call(t,0)}function S(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];b(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function O(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<mt.length;){if(n=mt[o],i=n?n+r:e,i in t)return i;o++}return a}function _(){return Ot++}function P(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||r}function C(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){d(t.options.enable,[t])&&n.handler(e)},this.init()}function I(t){var e,n=t.options.inputClass;return new(e=n?n:Ct?L:It?U:Pt?Z:F)(t,A)}function A(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=e&Nt&&i-r===0,s=e&(jt|Xt)&&i-r===0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,D(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function D(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=M(e)),r>1&&!n.firstMultiple?n.firstMultiple=M(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,u=e.center=N(i);e.timeStamp=bt(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=Y(a,u),e.distance=X(a,u),x(n,e),e.offsetDirection=j(e.deltaX,e.deltaY);var c=z(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=c.x,e.overallVelocityY=c.y,e.overallVelocity=Et(c.x)>Et(c.y)?c.x:c.y,e.scale=s?W(s.pointers,i):1,e.rotation=s?k(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,R(n,e);var h=t.element;y(e.srcEvent.target,h)&&(h=e.srcEvent.target),e.target=h}function x(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==Nt&&o.eventType!==jt||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y}),e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}function R(t,e){var n,i,r,o,s=t.lastInterval||e,u=e.timeStamp-s.timeStamp;if(e.eventType!=Xt&&(u>Mt||s.velocity===a)){var c=e.deltaX-s.deltaX,h=e.deltaY-s.deltaY,l=z(u,c,h);i=l.x,r=l.y,n=Et(l.x)>Et(l.y)?l.x:l.y,o=j(c,h),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}function M(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:Tt(t.pointers[n].clientX),clientY:Tt(t.pointers[n].clientY)},n++;return{timeStamp:bt(),pointers:e,center:N(e),deltaX:t.deltaX,deltaY:t.deltaY}}function N(t){var e=t.length;if(1===e)return{x:Tt(t[0].clientX),y:Tt(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:Tt(n/e),y:Tt(i/e)}}function z(t,e,n){return{x:e/t||0,y:n/t||0}}function j(t,e){return t===e?Yt:Et(t)>=Et(e)?t<0?kt:Wt:e<0?Ft:Lt}function X(t,e,n){n||(n=Vt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function Y(t,e,n){n||(n=Vt);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}function k(t,e){return Y(e[1],e[0],Zt)+Y(t[1],t[0],Zt)}function W(t,e){return X(e[0],e[1],Zt)/X(t[0],t[1],Zt)}function F(){this.evEl=Bt,this.evWin=Jt,this.pressed=!1,C.apply(this,arguments)}function L(){this.evEl=Qt,this.evWin=te,C.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function q(){this.evTarget=ne,this.evWin=ie,this.started=!1,C.apply(this,arguments)}function H(t,e){var n=w(t.touches),i=w(t.changedTouches);return e&(jt|Xt)&&(n=S(n.concat(i),"identifier",!0)),[n,i]}function U(){this.evTarget=oe,this.targetIds={},C.apply(this,arguments)}function V(t,e){var n=w(t.touches),i=this.targetIds;if(e&(Nt|zt)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=w(t.changedTouches),a=[],u=this.target;if(o=n.filter(function(t){return y(t.target,u)}),e===Nt)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;for(r=0;r<s.length;)i[s[r].identifier]&&a.push(s[r]),e&(jt|Xt)&&delete i[s[r].identifier],r++;return a.length?[S(o.concat(a),"identifier",!0),a]:void 0}function Z(){C.apply(this,arguments);var t=f(this.handler,this);this.touch=new U(this.manager,t),this.mouse=new F(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function G(t,e){t&Nt?(this.primaryTouch=e.changedPointers[0].identifier,B.call(this,e)):t&(jt|Xt)&&B.call(this,e)}function B(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches,r=function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)};setTimeout(r,se)}}function J(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(o<=ae&&s<=ae)return!0}return!1}function $(t,e){this.manager=t,this.set(e)}function K(t){if(T(t,fe))return fe;var e=T(t,de),n=T(t,ve);return e&&n?fe:e||n?e?de:ve:T(t,pe)?pe:le}function Q(){if(!ce)return!1;var t={},e=r.CSS&&r.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||r.CSS.supports("touch-action",n)}),t}function tt(t){this.options=vt({},this.defaults,t||{}),this.id=_(),this.manager=null,this.options.enable=v(this.options.enable,!0),this.state=ge,this.simultaneous={},this.requireFail=[]}function et(t){return t&we?"cancel":t&Ee?"end":t&Te?"move":t&ye?"start":""}function nt(t){return t==Lt?"down":t==Ft?"up":t==kt?"left":t==Wt?"right":""}function it(t,e){var n=e.manager;return n?n.get(t):t}function rt(){tt.apply(this,arguments)}function ot(){rt.apply(this,arguments),this.pX=null,this.pY=null}function st(){rt.apply(this,arguments)}function at(){tt.apply(this,arguments),this._timer=null,this._input=null}function ut(){rt.apply(this,arguments)}function ct(){rt.apply(this,arguments)}function ht(){tt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function lt(t,e){return e=e||{},e.recognizers=v(e.recognizers,lt.defaults.preset),new pt(t,e)}function pt(t,e){this.options=vt({},lt.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=I(this),this.touchAction=new $(this,this.options.touchAction),ft(this,!0),h(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ft(t,e){var n=t.element;if(n.style){var i;h(t.options.cssProps,function(r,o){i=O(n.style,o),e?(t.oldCssProps[i]=n.style[i],n.style[i]=r):n.style[i]=t.oldCssProps[i]||""}),e||(t.oldCssProps={})}}function dt(t,e){var n=o.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}var vt,mt=["","webkit","Moz","MS","ms","o"],gt=o.createElement("div"),yt="function",Tt=Math.round,Et=Math.abs,bt=Date.now;vt="function"!=typeof Object.assign?function(t){if(t===a||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==a&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var wt=l(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===a)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),St=l(function(t,e){return wt(t,e,!0)},"merge","Use `assign`."),Ot=1,_t=/mobile|tablet|ip(ad|hone|od)|android/i,Pt="ontouchstart"in r,Ct=O(r,"PointerEvent")!==a,It=Pt&&_t.test(navigator.userAgent),At="touch",Dt="pen",xt="mouse",Rt="kinect",Mt=25,Nt=1,zt=2,jt=4,Xt=8,Yt=1,kt=2,Wt=4,Ft=8,Lt=16,qt=kt|Wt,Ht=Ft|Lt,Ut=qt|Ht,Vt=["x","y"],Zt=["clientX","clientY"];C.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(P(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&g(this.element,this.evEl,this.domHandler),this.evTarget&&g(this.target,this.evTarget,this.domHandler),this.evWin&&g(P(this.element),this.evWin,this.domHandler)}};var Gt={mousedown:Nt,mousemove:zt,mouseup:jt},Bt="mousedown",Jt="mousemove mouseup";p(F,C,{handler:function(t){var e=Gt[t.type];e&Nt&&0===t.button&&(this.pressed=!0),e&zt&&1!==t.which&&(e=jt),this.pressed&&(e&jt&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:xt,srcEvent:t}))}});var $t={pointerdown:Nt,pointermove:zt,pointerup:jt,pointercancel:Xt,pointerout:Xt},Kt={2:At,3:Dt,4:xt,5:Rt},Qt="pointerdown",te="pointermove pointerup pointercancel";r.MSPointerEvent&&!r.PointerEvent&&(Qt="MSPointerDown",te="MSPointerMove MSPointerUp MSPointerCancel"),p(L,C,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=$t[i],o=Kt[t.pointerType]||t.pointerType,s=o==At,a=b(e,t.pointerId,"pointerId");r&Nt&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):r&(jt|Xt)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var ee={touchstart:Nt,touchmove:zt,touchend:jt,touchcancel:Xt},ne="touchstart",ie="touchstart touchmove touchend touchcancel";p(q,C,{handler:function(t){var e=ee[t.type];if(e===Nt&&(this.started=!0),this.started){var n=H.call(this,t,e);e&(jt|Xt)&&n[0].length-n[1].length===0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:At,srcEvent:t})}}});var re={touchstart:Nt,touchmove:zt,touchend:jt,touchcancel:Xt},oe="touchstart touchmove touchend touchcancel";p(U,C,{handler:function(t){var e=re[t.type],n=V.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:At,srcEvent:t})}});var se=2500,ae=25;p(Z,C,{handler:function(t,e,n){var i=n.pointerType==At,r=n.pointerType==xt;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)G.call(this,e,n);else if(r&&J.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var ue=O(gt.style,"touchAction"),ce=ue!==a,he="compute",le="auto",pe="manipulation",fe="none",de="pan-x",ve="pan-y",me=Q();$.prototype={set:function(t){t==he&&(t=this.compute()),ce&&this.manager.element.style&&me[t]&&(this.manager.element.style[ue]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return h(this.manager.recognizers,function(e){d(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),K(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)return void e.preventDefault();var i=this.actions,r=T(i,fe)&&!me[fe],o=T(i,ve)&&!me[ve],s=T(i,de)&&!me[de];if(r){var a=1===t.pointers.length,u=t.distance<2,c=t.deltaTime<250;if(a&&u&&c)return}return s&&o?void 0:r||o&&n&qt||s&&n&Ht?this.preventSrc(e):void 0},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var ge=1,ye=2,Te=4,Ee=8,be=Ee,we=16,Se=32;tt.prototype={defaults:{},set:function(t){return vt(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(c(t,"recognizeWith",this))return this;var e=this.simultaneous;return t=it(t,this),e[t.id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return c(t,"dropRecognizeWith",this)?this:(t=it(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(c(t,"requireFailure",this))return this;var e=this.requireFail;return t=it(t,this),b(e,t)===-1&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(c(t,"dropRequireFailure",this))return this;t=it(t,this);var e=b(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){function e(e){n.manager.emit(e,t)}var n=this,i=this.state;i<Ee&&e(n.options.event+et(i)),e(n.options.event),t.additionalEvent&&e(t.additionalEvent),i>=Ee&&e(n.options.event+et(i))},tryEmit:function(t){return this.canEmit()?this.emit(t):void(this.state=Se)},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(Se|ge)))return!1;t++}return!0},recognize:function(t){var e=vt({},t);return d(this.options.enable,[this,e])?(this.state&(be|we|Se)&&(this.state=ge),this.state=this.process(e),void(this.state&(ye|Te|Ee|we)&&this.tryEmit(e))):(this.reset(),void(this.state=Se))},process:function(t){},getTouchAction:function(){},reset:function(){}},p(rt,tt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(ye|Te),r=this.attrTest(t);return i&&(n&Xt||!r)?e|we:i||r?n&jt?e|Ee:e&ye?e|Te:ye:Se}}),p(ot,rt,{defaults:{event:"pan",threshold:10,pointers:1,direction:Ut},getTouchAction:function(){var t=this.options.direction,e=[];return t&qt&&e.push(ve),t&Ht&&e.push(de),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&qt?(r=0===o?Yt:o<0?kt:Wt,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?Yt:s<0?Ft:Lt,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return rt.prototype.attrTest.call(this,t)&&(this.state&ye||!(this.state&ye)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=nt(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),p(st,rt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[fe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&ye)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),p(at,tt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[le]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(jt|Xt)&&!r)this.reset();else if(t.eventType&Nt)this.reset(),this._timer=u(function(){this.state=be,this.tryEmit()},e.time,this);else if(t.eventType&jt)return be;return Se},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===be&&(t&&t.eventType&jt?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=bt(),this.manager.emit(this.options.event,this._input)))}}),p(ut,rt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[fe]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&ye)}}),p(ct,rt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:qt|Ht,pointers:1},getTouchAction:function(){return ot.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(qt|Ht)?e=t.overallVelocity:n&qt?e=t.overallVelocityX:n&Ht&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&Et(e)>this.options.velocity&&t.eventType&jt},emit:function(t){var e=nt(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),p(ht,tt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[pe]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&Nt&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=jt)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||X(this.pCenter,t.center)<e.posThreshold;this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t;var a=this.count%e.taps;if(0===a)return this.hasRequireFailures()?(this._timer=u(function(){this.state=be,this.tryEmit()},e.interval,this),ye):be}return Se},failTimeout:function(){return this._timer=u(function(){this.state=Se},this.options.interval,this),Se},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==be&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),lt.VERSION="2.0.7",lt.defaults={domEvents:!1,touchAction:he,enable:!0,inputTarget:null,inputClass:null,preset:[[ut,{enable:!1}],[st,{enable:!1},["rotate"]],[ct,{direction:qt}],[ot,{direction:qt},["swipe"]],[ht],[ht,{event:"doubletap",taps:2},["tap"]],[at]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var Oe=1,_e=2;pt.prototype={set:function(t){return vt(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?_e:Oe},recognize:function(t){var e=this.session;if(!e.stopped){this.touchAction.preventDefaults(t);var n,i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&be)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],e.stopped===_e||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(ye|Te|Ee)&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof tt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(c(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(c(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=b(e,t);n!==-1&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==a&&e!==a){var n=this.handlers;return h(E(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==a){var n=this.handlers;return h(E(t),function(t){e?n[t]&&n[t].splice(b(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&dt(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ft(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},vt(lt,{INPUT_START:Nt,INPUT_MOVE:zt,INPUT_END:jt,INPUT_CANCEL:Xt,STATE_POSSIBLE:ge,STATE_BEGAN:ye,STATE_CHANGED:Te,STATE_ENDED:Ee,STATE_RECOGNIZED:be,STATE_CANCELLED:we,STATE_FAILED:Se,DIRECTION_NONE:Yt,DIRECTION_LEFT:kt,DIRECTION_RIGHT:Wt,DIRECTION_UP:Ft,DIRECTION_DOWN:Lt,DIRECTION_HORIZONTAL:qt,DIRECTION_VERTICAL:Ht,DIRECTION_ALL:Ut,Manager:pt,Input:C,TouchAction:$,TouchInput:U,MouseInput:F,PointerEventInput:L,TouchMouseInput:Z,SingleTouchInput:q,Recognizer:tt,AttrRecognizer:rt,Tap:ht,Pan:ot,Swipe:ct,Pinch:st,Rotate:ut,Press:at,on:m,off:g,each:h,merge:St,extend:wt,assign:vt,inherit:p,bindFn:f,prefixed:O});var Pe="undefined"!=typeof r?r:"undefined"!=typeof self?self:{};Pe.Hammer=lt,i=function(){return lt}.call(e,n,e,t),!(i!==a&&(t.exports=i))}(window,document,"Hammer")},59:function(t,e){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,o=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,c=u&&u(Object);t.exports=function t(e,h,l){if("string"!=typeof h){if(c){var p=u(h);p&&p!==c&&t(e,p,l)}var f=o(h);s&&(f=f.concat(s(h)));for(var d=0;d<f.length;++d){var v=f[d];if(!(n[v]||i[v]||l&&l[v])){var m=a(h,v);try{r(e,v,m)}catch(t){}}}return e}return e}},60:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){e.hasOwnProperty("vertical")&&console.warn("vertical is deprecated, please use `direction` instead");var n=e.direction;if(n||e.hasOwnProperty("vertical")){var i=n?n:e.vertical?"DIRECTION_ALL":"DIRECTION_HORIZONTAL";t.get("pan").set({direction:f[i]}),t.get("swipe").set({direction:f[i]})}e.options&&Object.keys(e.options).forEach(function(n){if("recognizers"===n)Object.keys(e.options.recognizers).forEach(function(n){var i=t.get(n);i.set(e.options.recognizers[n]),e.options.recognizers[n].requireFailure&&i.requireFailure(e.options.recognizers[n].requireFailure)},this);else{var i=n,r={};r[i]=e.options[n],t.set(r)}},this),e.recognizeWith&&Object.keys(e.recognizeWith).forEach(function(n){var i=t.get(n);i.recognizeWith(e.recognizeWith[n])},this),Object.keys(e).forEach(function(n){var i=v[n];i&&(t.off(i),t.on(i,e[n]))})}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),c=n(2),h=i(c),l=n(1),p=i(l),f="undefined"!=typeof window?n(56):void 0,d={children:!0,direction:!0,options:!0,recognizeWith:!0,vertical:!0},v={action:"tap press",onDoubleTap:"doubletap",onPan:"pan",onPanCancel:"pancancel",onPanEnd:"panend",onPanStart:"panstart",onPinch:"pinch",onPinchCancel:"pinchcancel",onPinchEnd:"pinchend",onPinchIn:"pinchin",onPinchOut:"pinchout",onPinchStart:"pinchstart",onPress:"press",onPressUp:"pressup",onRotate:"rotate",onRotateCancel:"rotatecancel",onRotateEnd:"rotateend",onRotateMove:"rotatemove",onRotateStart:"rotatestart",onSwipe:"swipe",onSwipeRight:"swiperight",onSwipeLeft:"swipeleft",onSwipeUp:"swipeup",onSwipeDown:"swipedown",onTap:"tap"};Object.keys(v).forEach(function(t){d[t]=!0});var m=function(t){function e(){return r(this,e),o(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),u(e,[{key:"componentDidMount",value:function(){this.hammer=new f(this.domElement),a(this.hammer,this.props)}},{key:"componentDidUpdate",value:function(){this.hammer&&a(this.hammer,this.props)}},{key:"componentWillUnmount",value:function(){this.hammer&&(this.hammer.stop(),this.hammer.destroy()),this.hammer=null}},{key:"render",value:function(){var t={};Object.keys(this.props).forEach(function(e){d[e]||(t[e]=this.props[e])},this);var e=this;return t.ref=function(t){e.props.ref&&e.props.ref(t),e.domElement=t},p.default.cloneElement(p.default.Children.only(this.props.children),t)}}]),e}(p.default.Component);m.displayName="Hammer",m.propTypes={className:h.default.string},e.default=m},54:function(t,e){},34:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var a=n(1),u=i(a);n(21);n(54);var c=function(t){function e(){return r(this,e),o(this,t.apply(this,arguments))}return s(e,t),e.prototype.render=function(){return u.default.createElement("div",{className:"fadeInTransition"},this.props.children)},e}(a.Component);e.default=c,t.exports=e.default},55:function(t,e){},35:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var a=n(1),u=i(a),c=n(60),h=i(c),l=n(34),p=i(l);n(55);var f=function(t){function e(){r(this,e);var n=o(this,t.call(this));return n.getVirtualSlides=function(){var t=n.state,e=t.assets,i=t.virtualIndexArray,r=[],o=n.state.current;r=i.length?i.map(function(t,n){var r=i[o];return n===o?t:n===o-1?r-1>=0?r-1:e.length-1:n===o+1?r+1<=e.length-1?r+1:0:0===n?r+1<=e.length-1?r+1:0:n===i.length-1?r-1>=0?r-1:e.length-1:n!==o-1||n!==o+1?t:void 0}):Array.from(Array(4),function(t,n){return e[o]&&3!==n?o++:e.length-1}),n.setState({virtualIndexArray:r},function(){return n.canMove=!0})},n.handleSwipe=function(t){var e=t.offsetDirection;if(!n.canMove)return!1;n.canMove=!1;var i={2:"left",4:"right"};n.moveSlideX(i[e])},n.canMove=!0,n.transitionAdded=!1,n.moveDeg=90,n.state={assets:[],rotateStatus:{rotateX:0,rotateY:0,rotateZ:0},current:0,virtualIndexArray:[]},n}return s(e,t),e.prototype.componentWillMount=function(){var t=this;setTimeout(function(){t.setState({assets:[{src:"asset0"},{src:"asset1"},{src:"asset2"},{src:"asset3"},{src:"asset4"},{src:"asset5"},{src:"assset6"}]},function(){return t.getVirtualSlides()})},3e3)},e.prototype.componentWillUnmount=function(){this.slider.removeEventListener("transitionend",this.getVirtualSlides,!1)},e.prototype.componentDidUpdate=function(){this.transitionAdded||(this.transitionAdded=!0,this.slider.addEventListener("transitionend",this.getVirtualSlides,!1))},e.prototype.addCubeClasses=function(t){switch(t){case 0:return"firstSlide";case 1:return"secondSlide";case 2:return"thirdSlide";case 3:return"fourSlide";default:return"none"}},e.prototype.setCurrent=function(t){var e=this.state,n=e.current,i=e.virtualIndexArray;return n-t<0?i.length-1:n-t>i.length-1?0:n-t},e.prototype.moveSlideX=function(t){var e=this.state.rotateStatus.rotateY,n="left"===t?-1:1;this.setState({dirNumber:n,direction:t,rotateStatus:{rotateX:0,rotateY:e+n*this.moveDeg,rotateZ:0},current:this.setCurrent(n)})},e.prototype.getRotateDeg=function(){var t=this.state,e=t.rotateStatus,n=t.direction,i=e.rotateY;if(!n)return{};var r=0,o=1,s=0;return"rotate3d("+r+", "+o+", "+s+", "+i+"deg)"},e.prototype.renderSlides=function(){var t=this,e=this.state,n=e.assets,i=e.virtualIndexArray;return u.default.createElement(p.default,null,u.default.createElement("div",{className:"slider",style:{transform:this.getRotateDeg()},ref:function(e){return t.slider=e}},i.map(function(e,i){return u.default.createElement("div",{key:i,className:"slide "+t.addCubeClasses(i)},n.find(function(t,n){t.src;return e===n}).src)})))},e.prototype.render=function(){return u.default.createElement("div",{className:"Carousel"},u.default.createElement("header",{className:"Carousel-header"},u.default.createElement("h1",{className:"Carousel-title"},"Carousel In React")),u.default.createElement(h.default,{onSwipe:this.handleSwipe},u.default.createElement("div",{className:"slider-wrapper"},this.state.assets.length>0&&this.renderSlides())))},e}(a.Component);e.default=f,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-carousel-carousel-js-a8fdc07b8770bb6d0f2e.js.map