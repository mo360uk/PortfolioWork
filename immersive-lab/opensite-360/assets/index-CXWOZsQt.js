(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();const fa="/api";async function q_(){try{const i=await fetch(`${fa}/health`);if(!i.ok)throw new Error(`HTTP error ${i.status}: ${i.statusText}`);return await i.json()}catch(i){return console.warn("[API] Health check failed, operating in offline/demo mode:",i.message),{status:"offline_mode",camera_connected:!1,ai_mode:"mock",active_nodes_count:0,active_snags_count:0}}}async function Y_(i="floorplan-ground"){try{const t=await fetch(`${fa}/nodes?floorplan_id=${encodeURIComponent(i)}`);if(!t.ok)throw new Error(`HTTP error ${t.status}: ${t.statusText}`);return await t.json()}catch(t){throw console.warn("[API] Failed to fetch nodes from backend:",t.message),t}}async function Qh(i){let t;i instanceof FormData?t=i:(t=new FormData,t.append("floorplan_id",i.floorplan_id||"floorplan-ground"),t.append("x",String(i.x)),t.append("y",String(i.y)),i.file&&t.append("file",i.file));const e=await fetch(`${fa}/nodes/capture`,{method:"POST",body:t});if(!e.ok){const s=await e.text();throw new Error(`Capture failed (${e.status}): ${s}`)}return await e.json()}function $_(i="floorplan-ground"){return`${fa}/snags/export?floorplan_id=${encodeURIComponent(i)}`}function K_(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Sr={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var J_=Sr.exports,tu;function j_(){return tu||(tu=1,(function(i,t){(function(e,s){s(t)})(J_,(function(e){var s="1.9.4";function r(n){var o,l,u,m;for(l=1,u=arguments.length;l<u;l++){m=arguments[l];for(o in m)n[o]=m[o]}return n}var a=Object.create||(function(){function n(){}return function(o){return n.prototype=o,new n}})();function c(n,o){var l=Array.prototype.slice;if(n.bind)return n.bind.apply(n,l.call(arguments,1));var u=l.call(arguments,2);return function(){return n.apply(o,u.length?u.concat(l.call(arguments)):arguments)}}var h=0;function d(n){return"_leaflet_id"in n||(n._leaflet_id=++h),n._leaflet_id}function f(n,o,l){var u,m,S,O;return O=function(){u=!1,m&&(S.apply(l,m),m=!1)},S=function(){u?m=arguments:(n.apply(l,arguments),setTimeout(O,o),u=!0)},S}function p(n,o,l){var u=o[1],m=o[0],S=u-m;return n===u&&l?n:((n-m)%S+S)%S+m}function g(){return!1}function _(n,o){if(o===!1)return n;var l=Math.pow(10,o===void 0?6:o);return Math.round(n*l)/l}function M(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function w(n){return M(n).split(/\s+/)}function T(n,o){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?a(n.options):{});for(var l in o)n.options[l]=o[l];return n.options}function v(n,o,l){var u=[];for(var m in n)u.push(encodeURIComponent(l?m.toUpperCase():m)+"="+encodeURIComponent(n[m]));return(!o||o.indexOf("?")===-1?"?":"&")+u.join("&")}var x=/\{ *([\w_ -]+) *\}/g;function D(n,o){return n.replace(x,function(l,u){var m=o[u];if(m===void 0)throw new Error("No value provided for variable "+l);return typeof m=="function"&&(m=m(o)),m})}var N=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function A(n,o){for(var l=0;l<n.length;l++)if(n[l]===o)return l;return-1}var I="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function P(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var U=0;function E(n){var o=+new Date,l=Math.max(0,16-(o-U));return U=o+l,window.setTimeout(n,l)}var R=window.requestAnimationFrame||P("RequestAnimationFrame")||E,H=window.cancelAnimationFrame||P("CancelAnimationFrame")||P("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function F(n,o,l){if(l&&R===E)n.call(o);else return R.call(window,c(n,o))}function W(n){n&&H.call(window,n)}var at={__proto__:null,extend:r,create:a,bind:c,get lastId(){return h},stamp:d,throttle:f,wrapNum:p,falseFn:g,formatNum:_,trim:M,splitWords:w,setOptions:T,getParamString:v,template:D,isArray:N,indexOf:A,emptyImageUrl:I,requestFn:R,cancelFn:H,requestAnimFrame:F,cancelAnimFrame:W};function lt(){}lt.extend=function(n){var o=function(){T(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},l=o.__super__=this.prototype,u=a(l);u.constructor=o,o.prototype=u;for(var m in this)Object.prototype.hasOwnProperty.call(this,m)&&m!=="prototype"&&m!=="__super__"&&(o[m]=this[m]);return n.statics&&r(o,n.statics),n.includes&&(Y(n.includes),r.apply(null,[u].concat(n.includes))),r(u,n),delete u.statics,delete u.includes,u.options&&(u.options=l.options?a(l.options):{},r(u.options,n.options)),u._initHooks=[],u.callInitHooks=function(){if(!this._initHooksCalled){l.callInitHooks&&l.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,O=u._initHooks.length;S<O;S++)u._initHooks[S].call(this)}},o},lt.include=function(n){var o=this.prototype.options;return r(this.prototype,n),n.options&&(this.prototype.options=o,this.mergeOptions(n.options)),this},lt.mergeOptions=function(n){return r(this.prototype.options,n),this},lt.addInitHook=function(n){var o=Array.prototype.slice.call(arguments,1),l=typeof n=="function"?n:function(){this[n].apply(this,o)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(l),this};function Y(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=N(n)?n:[n];for(var o=0;o<n.length;o++)n[o]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var it={on:function(n,o,l){if(typeof n=="object")for(var u in n)this._on(u,n[u],o);else{n=w(n);for(var m=0,S=n.length;m<S;m++)this._on(n[m],o,l)}return this},off:function(n,o,l){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var u in n)this._off(u,n[u],o);else{n=w(n);for(var m=arguments.length===1,S=0,O=n.length;S<O;S++)m?this._off(n[S]):this._off(n[S],o,l)}return this},_on:function(n,o,l,u){if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}if(this._listens(n,o,l)===!1){l===this&&(l=void 0);var m={fn:o,ctx:l};u&&(m.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(m)}},_off:function(n,o,l){var u,m,S;if(this._events&&(u=this._events[n],!!u)){if(arguments.length===1){if(this._firingCount)for(m=0,S=u.length;m<S;m++)u[m].fn=g;delete this._events[n];return}if(typeof o!="function"){console.warn("wrong listener type: "+typeof o);return}var O=this._listens(n,o,l);if(O!==!1){var X=u[O];this._firingCount&&(X.fn=g,this._events[n]=u=u.slice()),u.splice(O,1)}}},fire:function(n,o,l){if(!this.listens(n,l))return this;var u=r({},o,{type:n,target:this,sourceTarget:o&&o.sourceTarget||this});if(this._events){var m=this._events[n];if(m){this._firingCount=this._firingCount+1||1;for(var S=0,O=m.length;S<O;S++){var X=m[S],tt=X.fn;X.once&&this.off(n,tt,X.ctx),tt.call(X.ctx||this,u)}this._firingCount--}}return l&&this._propagateEvent(u),this},listens:function(n,o,l,u){typeof n!="string"&&console.warn('"string" type argument expected');var m=o;typeof o!="function"&&(u=!!o,m=void 0,l=void 0);var S=this._events&&this._events[n];if(S&&S.length&&this._listens(n,m,l)!==!1)return!0;if(u){for(var O in this._eventParents)if(this._eventParents[O].listens(n,o,l,u))return!0}return!1},_listens:function(n,o,l){if(!this._events)return!1;var u=this._events[n]||[];if(!o)return!!u.length;l===this&&(l=void 0);for(var m=0,S=u.length;m<S;m++)if(u[m].fn===o&&u[m].ctx===l)return m;return!1},once:function(n,o,l){if(typeof n=="object")for(var u in n)this._on(u,n[u],o,!0);else{n=w(n);for(var m=0,S=n.length;m<S;m++)this._on(n[m],o,l,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[d(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[d(n)],this},_propagateEvent:function(n){for(var o in this._eventParents)this._eventParents[o].fire(n.type,r({layer:n.target,propagatedFrom:n.target},n),!0)}};it.addEventListener=it.on,it.removeEventListener=it.clearAllEventListeners=it.off,it.addOneTimeEventListener=it.once,it.fireEvent=it.fire,it.hasEventListeners=it.listens;var $=lt.extend(it);function J(n,o,l){this.x=l?Math.round(n):n,this.y=l?Math.round(o):o}var pt=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};J.prototype={clone:function(){return new J(this.x,this.y)},add:function(n){return this.clone()._add(ot(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(ot(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new J(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new J(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=pt(this.x),this.y=pt(this.y),this},distanceTo:function(n){n=ot(n);var o=n.x-this.x,l=n.y-this.y;return Math.sqrt(o*o+l*l)},equals:function(n){return n=ot(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=ot(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function ot(n,o,l){return n instanceof J?n:N(n)?new J(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new J(n.x,n.y):new J(n,o,l)}function ft(n,o){if(n)for(var l=o?[n,o]:n,u=0,m=l.length;u<m;u++)this.extend(l[u])}ft.prototype={extend:function(n){var o,l;if(!n)return this;if(n instanceof J||typeof n[0]=="number"||"x"in n)o=l=ot(n);else if(n=wt(n),o=n.min,l=n.max,!o||!l)return this;return!this.min&&!this.max?(this.min=o.clone(),this.max=l.clone()):(this.min.x=Math.min(o.x,this.min.x),this.max.x=Math.max(l.x,this.max.x),this.min.y=Math.min(o.y,this.min.y),this.max.y=Math.max(l.y,this.max.y)),this},getCenter:function(n){return ot((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return ot(this.min.x,this.max.y)},getTopRight:function(){return ot(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var o,l;return typeof n[0]=="number"||n instanceof J?n=ot(n):n=wt(n),n instanceof ft?(o=n.min,l=n.max):o=l=n,o.x>=this.min.x&&l.x<=this.max.x&&o.y>=this.min.y&&l.y<=this.max.y},intersects:function(n){n=wt(n);var o=this.min,l=this.max,u=n.min,m=n.max,S=m.x>=o.x&&u.x<=l.x,O=m.y>=o.y&&u.y<=l.y;return S&&O},overlaps:function(n){n=wt(n);var o=this.min,l=this.max,u=n.min,m=n.max,S=m.x>o.x&&u.x<l.x,O=m.y>o.y&&u.y<l.y;return S&&O},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var o=this.min,l=this.max,u=Math.abs(o.x-l.x)*n,m=Math.abs(o.y-l.y)*n;return wt(ot(o.x-u,o.y-m),ot(l.x+u,l.y+m))},equals:function(n){return n?(n=wt(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function wt(n,o){return!n||n instanceof ft?n:new ft(n,o)}function qt(n,o){if(n)for(var l=o?[n,o]:n,u=0,m=l.length;u<m;u++)this.extend(l[u])}qt.prototype={extend:function(n){var o=this._southWest,l=this._northEast,u,m;if(n instanceof Nt)u=n,m=n;else if(n instanceof qt){if(u=n._southWest,m=n._northEast,!u||!m)return this}else return n?this.extend(j(n)||jt(n)):this;return!o&&!l?(this._southWest=new Nt(u.lat,u.lng),this._northEast=new Nt(m.lat,m.lng)):(o.lat=Math.min(u.lat,o.lat),o.lng=Math.min(u.lng,o.lng),l.lat=Math.max(m.lat,l.lat),l.lng=Math.max(m.lng,l.lng)),this},pad:function(n){var o=this._southWest,l=this._northEast,u=Math.abs(o.lat-l.lat)*n,m=Math.abs(o.lng-l.lng)*n;return new qt(new Nt(o.lat-u,o.lng-m),new Nt(l.lat+u,l.lng+m))},getCenter:function(){return new Nt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Nt(this.getNorth(),this.getWest())},getSouthEast:function(){return new Nt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof Nt||"lat"in n?n=j(n):n=jt(n);var o=this._southWest,l=this._northEast,u,m;return n instanceof qt?(u=n.getSouthWest(),m=n.getNorthEast()):u=m=n,u.lat>=o.lat&&m.lat<=l.lat&&u.lng>=o.lng&&m.lng<=l.lng},intersects:function(n){n=jt(n);var o=this._southWest,l=this._northEast,u=n.getSouthWest(),m=n.getNorthEast(),S=m.lat>=o.lat&&u.lat<=l.lat,O=m.lng>=o.lng&&u.lng<=l.lng;return S&&O},overlaps:function(n){n=jt(n);var o=this._southWest,l=this._northEast,u=n.getSouthWest(),m=n.getNorthEast(),S=m.lat>o.lat&&u.lat<l.lat,O=m.lng>o.lng&&u.lng<l.lng;return S&&O},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,o){return n?(n=jt(n),this._southWest.equals(n.getSouthWest(),o)&&this._northEast.equals(n.getNorthEast(),o)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function jt(n,o){return n instanceof qt?n:new qt(n,o)}function Nt(n,o,l){if(isNaN(n)||isNaN(o))throw new Error("Invalid LatLng object: ("+n+", "+o+")");this.lat=+n,this.lng=+o,l!==void 0&&(this.alt=+l)}Nt.prototype={equals:function(n,o){if(!n)return!1;n=j(n);var l=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return l<=(o===void 0?1e-9:o)},toString:function(n){return"LatLng("+_(this.lat,n)+", "+_(this.lng,n)+")"},distanceTo:function(n){return dt.distance(this,j(n))},wrap:function(){return dt.wrapLatLng(this)},toBounds:function(n){var o=180*n/40075017,l=o/Math.cos(Math.PI/180*this.lat);return jt([this.lat-o,this.lng-l],[this.lat+o,this.lng+l])},clone:function(){return new Nt(this.lat,this.lng,this.alt)}};function j(n,o,l){return n instanceof Nt?n:N(n)&&typeof n[0]!="object"?n.length===3?new Nt(n[0],n[1],n[2]):n.length===2?new Nt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new Nt(n.lat,"lng"in n?n.lng:n.lon,n.alt):o===void 0?null:new Nt(n,o,l)}var mt={latLngToPoint:function(n,o){var l=this.projection.project(n),u=this.scale(o);return this.transformation._transform(l,u)},pointToLatLng:function(n,o){var l=this.scale(o),u=this.transformation.untransform(n,l);return this.projection.unproject(u)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var o=this.projection.bounds,l=this.scale(n),u=this.transformation.transform(o.min,l),m=this.transformation.transform(o.max,l);return new ft(u,m)},infinite:!1,wrapLatLng:function(n){var o=this.wrapLng?p(n.lng,this.wrapLng,!0):n.lng,l=this.wrapLat?p(n.lat,this.wrapLat,!0):n.lat,u=n.alt;return new Nt(l,o,u)},wrapLatLngBounds:function(n){var o=n.getCenter(),l=this.wrapLatLng(o),u=o.lat-l.lat,m=o.lng-l.lng;if(u===0&&m===0)return n;var S=n.getSouthWest(),O=n.getNorthEast(),X=new Nt(S.lat-u,S.lng-m),tt=new Nt(O.lat-u,O.lng-m);return new qt(X,tt)}},dt=r({},mt,{wrapLng:[-180,180],R:6371e3,distance:function(n,o){var l=Math.PI/180,u=n.lat*l,m=o.lat*l,S=Math.sin((o.lat-n.lat)*l/2),O=Math.sin((o.lng-n.lng)*l/2),X=S*S+Math.cos(u)*Math.cos(m)*O*O,tt=2*Math.atan2(Math.sqrt(X),Math.sqrt(1-X));return this.R*tt}}),Vt=6378137,Yt={R:Vt,MAX_LATITUDE:85.0511287798,project:function(n){var o=Math.PI/180,l=this.MAX_LATITUDE,u=Math.max(Math.min(l,n.lat),-l),m=Math.sin(u*o);return new J(this.R*n.lng*o,this.R*Math.log((1+m)/(1-m))/2)},unproject:function(n){var o=180/Math.PI;return new Nt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*o,n.x*o/this.R)},bounds:(function(){var n=Vt*Math.PI;return new ft([-n,-n],[n,n])})()};function zt(n,o,l,u){if(N(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=o,this._c=l,this._d=u}zt.prototype={transform:function(n,o){return this._transform(n.clone(),o)},_transform:function(n,o){return o=o||1,n.x=o*(this._a*n.x+this._b),n.y=o*(this._c*n.y+this._d),n},untransform:function(n,o){return o=o||1,new J((n.x/o-this._b)/this._a,(n.y/o-this._d)/this._c)}};function Te(n,o,l,u){return new zt(n,o,l,u)}var ne=r({},dt,{code:"EPSG:3857",projection:Yt,transformation:(function(){var n=.5/(Math.PI*Yt.R);return Te(n,.5,-n,.5)})()}),Ee=r({},ne,{code:"EPSG:900913"});function ue(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function ae(n,o){var l="",u,m,S,O,X,tt;for(u=0,S=n.length;u<S;u++){for(X=n[u],m=0,O=X.length;m<O;m++)tt=X[m],l+=(m?"L":"M")+tt.x+" "+tt.y;l+=o?kt.svg?"z":"x":""}return l||"M0 0"}var Re=document.documentElement.style,Ie="ActiveXObject"in window,ke=Ie&&!document.addEventListener,Be="msLaunchUri"in navigator&&!("documentMode"in document),Ce=Si("webkit"),Ue=Si("android"),B=Si("android 2")||Si("android 3"),ni=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),ge=Ue&&Si("Google")&&ni<537&&!("AudioNode"in window),C=!!window.opera,y=!Be&&Si("chrome"),V=Si("gecko")&&!Ce&&!C&&!Ie,K=!y&&Si("safari"),et=Si("phantom"),_t="OTransition"in Re,yt=navigator.platform.indexOf("Win")===0,nt=Ie&&"transition"in Re,st="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!B,Mt="MozPerspective"in Re,Ft=!window.L_DISABLE_3D&&(nt||st||Mt)&&!_t&&!et,vt=typeof orientation<"u"||Si("mobile"),Et=vt&&Ce,Bt=vt&&st,Ht=!window.PointerEvent&&window.MSPointerEvent,Kt=!!(window.PointerEvent||Ht),k="ontouchstart"in window||!!window.TouchEvent,xt=!window.L_NO_TOUCH&&(k||Kt),rt=vt&&C,St=vt&&V,At=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,ct=(function(){var n=!1;try{var o=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",g,o),window.removeEventListener("testPassiveEventSupport",g,o)}catch{}return n})(),Ot=(function(){return!!document.createElement("canvas").getContext})(),It=!!(document.createElementNS&&ue("svg").createSVGRect),De=!!It&&(function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),be=!It&&(function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var o=n.firstChild;return o.style.behavior="url(#default#VML)",o&&typeof o.adj=="object"}catch{return!1}})(),Mi=navigator.platform.indexOf("Mac")===0,Ei=navigator.platform.indexOf("Linux")===0;function Si(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var kt={ie:Ie,ielt9:ke,edge:Be,webkit:Ce,android:Ue,android23:B,androidStock:ge,opera:C,chrome:y,gecko:V,safari:K,phantom:et,opera12:_t,win:yt,ie3d:nt,webkit3d:st,gecko3d:Mt,any3d:Ft,mobile:vt,mobileWebkit:Et,mobileWebkit3d:Bt,msPointer:Ht,pointer:Kt,touch:xt,touchNative:k,mobileOpera:rt,mobileGecko:St,retina:At,passiveEvents:ct,canvas:Ot,svg:It,vml:be,inlineSvg:De,mac:Mi,linux:Ei},sr=kt.msPointer?"MSPointerDown":"pointerdown",ps=kt.msPointer?"MSPointerMove":"pointermove",io=kt.msPointer?"MSPointerUp":"pointerup",rr=kt.msPointer?"MSPointerCancel":"pointercancel",ms={touchstart:sr,touchmove:ps,touchend:io,touchcancel:rr},Zi={touchstart:Aa,touchmove:vs,touchend:vs,touchcancel:vs},qi={},or=!1;function no(n,o,l){return o==="touchstart"&&ro(),Zi[o]?(l=Zi[o].bind(this,l),n.addEventListener(ms[o],l,!1),l):(console.warn("wrong event specified:",o),g)}function _s(n,o,l){if(!ms[o]){console.warn("wrong event specified:",o);return}n.removeEventListener(ms[o],l,!1)}function so(n){qi[n.pointerId]=n}function gs(n){qi[n.pointerId]&&(qi[n.pointerId]=n)}function ar(n){delete qi[n.pointerId]}function ro(){or||(document.addEventListener(sr,so,!0),document.addEventListener(ps,gs,!0),document.addEventListener(io,ar,!0),document.addEventListener(rr,ar,!0),or=!0)}function vs(n,o){if(o.pointerType!==(o.MSPOINTER_TYPE_MOUSE||"mouse")){o.touches=[];for(var l in qi)o.touches.push(qi[l]);o.changedTouches=[o],n(o)}}function Aa(n,o){o.MSPOINTER_TYPE_TOUCH&&o.pointerType===o.MSPOINTER_TYPE_TOUCH&&ti(o),vs(n,o)}function Ca(n){var o={},l,u;for(u in n)l=n[u],o[u]=l&&l.bind?l.bind(n):l;return n=o,o.type="dblclick",o.detail=2,o.isTrusted=!1,o._simulated=!0,o}var Pa=200;function b(n,o){n.addEventListener("dblclick",o);var l=0,u;function m(S){if(S.detail!==1){u=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var O=mh(S);if(!(O.some(function(tt){return tt instanceof HTMLLabelElement&&tt.attributes.for})&&!O.some(function(tt){return tt instanceof HTMLInputElement||tt instanceof HTMLSelectElement}))){var X=Date.now();X-l<=Pa?(u++,u===2&&o(Ca(S))):u=1,l=X}}}return n.addEventListener("click",m),{dblclick:o,simDblclick:m}}function z(n,o){n.removeEventListener("dblclick",o.dblclick),n.removeEventListener("click",o.simDblclick)}var Q=Ze(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Z=Ze(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),q=Z==="webkitTransition"||Z==="OTransition"?Z+"End":"transitionend";function bt(n){return typeof n=="string"?document.getElementById(n):n}function Ct(n,o){var l=n.style[o]||n.currentStyle&&n.currentStyle[o];if((!l||l==="auto")&&document.defaultView){var u=document.defaultView.getComputedStyle(n,null);l=u?u[o]:null}return l==="auto"?null:l}function ht(n,o,l){var u=document.createElement(n);return u.className=o||"",l&&l.appendChild(u),u}function gt(n){var o=n.parentNode;o&&o.removeChild(n)}function Dt(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Gt(n){var o=n.parentNode;o&&o.lastChild!==n&&o.appendChild(n)}function $t(n){var o=n.parentNode;o&&o.firstChild!==n&&o.insertBefore(n,o.firstChild)}function Ut(n,o){if(n.classList!==void 0)return n.classList.contains(o);var l=_e(n);return l.length>0&&new RegExp("(^|\\s)"+o+"(\\s|$)").test(l)}function Lt(n,o){if(n.classList!==void 0)for(var l=w(o),u=0,m=l.length;u<m;u++)n.classList.add(l[u]);else if(!Ut(n,o)){var S=_e(n);Pe(n,(S?S+" ":"")+o)}}function Qt(n,o){n.classList!==void 0?n.classList.remove(o):Pe(n,M((" "+_e(n)+" ").replace(" "+o+" "," ")))}function Pe(n,o){n.className.baseVal===void 0?n.className=o:n.className.baseVal=o}function _e(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function Se(n,o){"opacity"in n.style?n.style.opacity=o:"filter"in n.style&&Rt(n,o)}function Rt(n,o){var l=!1,u="DXImageTransform.Microsoft.Alpha";try{l=n.filters.item(u)}catch{if(o===1)return}o=Math.round(o*100),l?(l.Enabled=o!==100,l.Opacity=o):n.style.filter+=" progid:"+u+"(opacity="+o+")"}function Ze(n){for(var o=document.documentElement.style,l=0;l<n.length;l++)if(n[l]in o)return n[l];return!1}function ee(n,o,l){var u=o||new J(0,0);n.style[Q]=(kt.ie3d?"translate("+u.x+"px,"+u.y+"px)":"translate3d("+u.x+"px,"+u.y+"px,0)")+(l?" scale("+l+")":"")}function me(n,o){n._leaflet_pos=o,kt.any3d?ee(n,o):(n.style.left=o.x+"px",n.style.top=o.y+"px")}function qe(n){return n._leaflet_pos||new J(0,0)}var ui,wi,ve;if("onselectstart"in document)ui=function(){te(window,"selectstart",ti)},wi=function(){Le(window,"selectstart",ti)};else{var Ae=Ze(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ui=function(){if(Ae){var n=document.documentElement.style;ve=n[Ae],n[Ae]="none"}},wi=function(){Ae&&(document.documentElement.style[Ae]=ve,ve=void 0)}}function bi(){te(window,"dragstart",ti)}function ye(){Le(window,"dragstart",ti)}var gi,Yi;function xs(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(oo(),gi=n,Yi=n.style.outlineStyle,n.style.outlineStyle="none",te(window,"keydown",oo))}function oo(){gi&&(gi.style.outlineStyle=Yi,gi=void 0,Yi=void 0,Le(window,"keydown",oo))}function fh(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function La(n){var o=n.getBoundingClientRect();return{x:o.width/n.offsetWidth||1,y:o.height/n.offsetHeight||1,boundingClientRect:o}}var Qm={__proto__:null,TRANSFORM:Q,TRANSITION:Z,TRANSITION_END:q,get:bt,getStyle:Ct,create:ht,remove:gt,empty:Dt,toFront:Gt,toBack:$t,hasClass:Ut,addClass:Lt,removeClass:Qt,setClass:Pe,getClass:_e,setOpacity:Se,testProp:Ze,setTransform:ee,setPosition:me,getPosition:qe,get disableTextSelection(){return ui},get enableTextSelection(){return wi},disableImageDrag:bi,enableImageDrag:ye,preventOutline:xs,restoreOutline:oo,getSizedParentNode:fh,getScale:La};function te(n,o,l,u){if(o&&typeof o=="object")for(var m in o)Ia(n,m,o[m],l);else{o=w(o);for(var S=0,O=o.length;S<O;S++)Ia(n,o[S],l,u)}return this}var $i="_leaflet_events";function Le(n,o,l,u){if(arguments.length===1)ph(n),delete n[$i];else if(o&&typeof o=="object")for(var m in o)Da(n,m,o[m],l);else if(o=w(o),arguments.length===2)ph(n,function(X){return A(o,X)!==-1});else for(var S=0,O=o.length;S<O;S++)Da(n,o[S],l,u);return this}function ph(n,o){for(var l in n[$i]){var u=l.split(/\d/)[0];(!o||o(u))&&Da(n,u,null,null,l)}}var Ra={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Ia(n,o,l,u){var m=o+d(l)+(u?"_"+d(u):"");if(n[$i]&&n[$i][m])return this;var S=function(X){return l.call(u||n,X||window.event)},O=S;!kt.touchNative&&kt.pointer&&o.indexOf("touch")===0?S=no(n,o,S):kt.touch&&o==="dblclick"?S=b(n,S):"addEventListener"in n?o==="touchstart"||o==="touchmove"||o==="wheel"||o==="mousewheel"?n.addEventListener(Ra[o]||o,S,kt.passiveEvents?{passive:!1}:!1):o==="mouseenter"||o==="mouseleave"?(S=function(X){X=X||window.event,Oa(n,X)&&O(X)},n.addEventListener(Ra[o],S,!1)):n.addEventListener(o,O,!1):n.attachEvent("on"+o,S),n[$i]=n[$i]||{},n[$i][m]=S}function Da(n,o,l,u,m){m=m||o+d(l)+(u?"_"+d(u):"");var S=n[$i]&&n[$i][m];if(!S)return this;!kt.touchNative&&kt.pointer&&o.indexOf("touch")===0?_s(n,o,S):kt.touch&&o==="dblclick"?z(n,S):"removeEventListener"in n?n.removeEventListener(Ra[o]||o,S,!1):n.detachEvent("on"+o,S),n[$i][m]=null}function Kn(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function Na(n){return Ia(n,"wheel",Kn),this}function lr(n){return te(n,"mousedown touchstart dblclick contextmenu",Kn),n._leaflet_disable_click=!0,this}function ti(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function Jn(n){return ti(n),Kn(n),this}function mh(n){if(n.composedPath)return n.composedPath();for(var o=[],l=n.target;l;)o.push(l),l=l.parentNode;return o}function _h(n,o){if(!o)return new J(n.clientX,n.clientY);var l=La(o),u=l.boundingClientRect;return new J((n.clientX-u.left)/l.x-o.clientLeft,(n.clientY-u.top)/l.y-o.clientTop)}var t_=kt.linux&&kt.chrome?window.devicePixelRatio:kt.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function gh(n){return kt.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/t_:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function Oa(n,o){var l=o.relatedTarget;if(!l)return!0;try{for(;l&&l!==n;)l=l.parentNode}catch{return!1}return l!==n}var e_={__proto__:null,on:te,off:Le,stopPropagation:Kn,disableScrollPropagation:Na,disableClickPropagation:lr,preventDefault:ti,stop:Jn,getPropagationPath:mh,getMousePosition:_h,getWheelDelta:gh,isExternalTarget:Oa,addListener:te,removeListener:Le},vh=$.extend({run:function(n,o,l,u){this.stop(),this._el=n,this._inProgress=!0,this._duration=l||.25,this._easeOutPower=1/Math.max(u||.5,.2),this._startPos=qe(n),this._offset=o.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=F(this._animate,this),this._step()},_step:function(n){var o=+new Date-this._startTime,l=this._duration*1e3;o<l?this._runFrame(this._easeOut(o/l),n):(this._runFrame(1),this._complete())},_runFrame:function(n,o){var l=this._startPos.add(this._offset.multiplyBy(n));o&&l._round(),me(this._el,l),this.fire("step")},_complete:function(){W(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),de=$.extend({options:{crs:ne,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,o){o=T(this,o),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),o.maxBounds&&this.setMaxBounds(o.maxBounds),o.zoom!==void 0&&(this._zoom=this._limitZoom(o.zoom)),o.center&&o.zoom!==void 0&&this.setView(j(o.center),o.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Z&&kt.any3d&&!kt.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),te(this._proxy,q,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,o,l){if(o=o===void 0?this._zoom:this._limitZoom(o),n=this._limitCenter(j(n),o,this.options.maxBounds),l=l||{},this._stop(),this._loaded&&!l.reset&&l!==!0){l.animate!==void 0&&(l.zoom=r({animate:l.animate},l.zoom),l.pan=r({animate:l.animate,duration:l.duration},l.pan));var u=this._zoom!==o?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,o,l.zoom):this._tryAnimatedPan(n,l.pan);if(u)return clearTimeout(this._sizeTimer),this}return this._resetView(n,o,l.pan&&l.pan.noMoveStart),this},setZoom:function(n,o){return this._loaded?this.setView(this.getCenter(),n,{zoom:o}):(this._zoom=n,this)},zoomIn:function(n,o){return n=n||(kt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,o)},zoomOut:function(n,o){return n=n||(kt.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,o)},setZoomAround:function(n,o,l){var u=this.getZoomScale(o),m=this.getSize().divideBy(2),S=n instanceof J?n:this.latLngToContainerPoint(n),O=S.subtract(m).multiplyBy(1-1/u),X=this.containerPointToLatLng(m.add(O));return this.setView(X,o,{zoom:l})},_getBoundsCenterZoom:function(n,o){o=o||{},n=n.getBounds?n.getBounds():jt(n);var l=ot(o.paddingTopLeft||o.padding||[0,0]),u=ot(o.paddingBottomRight||o.padding||[0,0]),m=this.getBoundsZoom(n,!1,l.add(u));if(m=typeof o.maxZoom=="number"?Math.min(o.maxZoom,m):m,m===1/0)return{center:n.getCenter(),zoom:m};var S=u.subtract(l).divideBy(2),O=this.project(n.getSouthWest(),m),X=this.project(n.getNorthEast(),m),tt=this.unproject(O.add(X).divideBy(2).add(S),m);return{center:tt,zoom:m}},fitBounds:function(n,o){if(n=jt(n),!n.isValid())throw new Error("Bounds are not valid.");var l=this._getBoundsCenterZoom(n,o);return this.setView(l.center,l.zoom,o)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,o){return this.setView(n,this._zoom,{pan:o})},panBy:function(n,o){if(n=ot(n).round(),o=o||{},!n.x&&!n.y)return this.fire("moveend");if(o.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new vh,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),o.noMoveStart||this.fire("movestart"),o.animate!==!1){Lt(this._mapPane,"leaflet-pan-anim");var l=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,l,o.duration||.25,o.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,o,l){if(l=l||{},l.animate===!1||!kt.any3d)return this.setView(n,o,l);this._stop();var u=this.project(this.getCenter()),m=this.project(n),S=this.getSize(),O=this._zoom;n=j(n),o=o===void 0?O:o;var X=Math.max(S.x,S.y),tt=X*this.getZoomScale(O,o),ut=m.distanceTo(u)||1,Pt=1.42,Wt=Pt*Pt;function oe(ze){var xo=ze?-1:1,G_=ze?tt:X,W_=tt*tt-X*X+xo*Wt*Wt*ut*ut,X_=2*G_*Wt*ut,Za=W_/X_,jh=Math.sqrt(Za*Za+1)-Za,Z_=jh<1e-9?-18:Math.log(jh);return Z_}function oi(ze){return(Math.exp(ze)-Math.exp(-ze))/2}function Ye(ze){return(Math.exp(ze)+Math.exp(-ze))/2}function Ai(ze){return oi(ze)/Ye(ze)}var di=oe(0);function bs(ze){return X*(Ye(di)/Ye(di+Pt*ze))}function B_(ze){return X*(Ye(di)*Ai(di+Pt*ze)-oi(di))/Wt}function z_(ze){return 1-Math.pow(1-ze,1.5)}var H_=Date.now(),Kh=(oe(1)-di)/Pt,V_=l.duration?1e3*l.duration:1e3*Kh*.8;function Jh(){var ze=(Date.now()-H_)/V_,xo=z_(ze)*Kh;ze<=1?(this._flyToFrame=F(Jh,this),this._move(this.unproject(u.add(m.subtract(u).multiplyBy(B_(xo)/ut)),O),this.getScaleZoom(X/bs(xo),O),{flyTo:!0})):this._move(n,o)._moveEnd(!0)}return this._moveStart(!0,l.noMoveStart),Jh.call(this),this},flyToBounds:function(n,o){var l=this._getBoundsCenterZoom(n,o);return this.flyTo(l.center,l.zoom,o)},setMaxBounds:function(n){return n=jt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var o=this.options.minZoom;return this.options.minZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var o=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&o!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,o){this._enforcingBounds=!0;var l=this.getCenter(),u=this._limitCenter(l,this._zoom,jt(n));return l.equals(u)||this.panTo(u,o),this._enforcingBounds=!1,this},panInside:function(n,o){o=o||{};var l=ot(o.paddingTopLeft||o.padding||[0,0]),u=ot(o.paddingBottomRight||o.padding||[0,0]),m=this.project(this.getCenter()),S=this.project(n),O=this.getPixelBounds(),X=wt([O.min.add(l),O.max.subtract(u)]),tt=X.getSize();if(!X.contains(S)){this._enforcingBounds=!0;var ut=S.subtract(X.getCenter()),Pt=X.extend(S).getSize().subtract(tt);m.x+=ut.x<0?-Pt.x:Pt.x,m.y+=ut.y<0?-Pt.y:Pt.y,this.panTo(this.unproject(m),o),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=r({animate:!1,pan:!0},n===!0?{animate:!0}:n);var o=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var l=this.getSize(),u=o.divideBy(2).round(),m=l.divideBy(2).round(),S=u.subtract(m);return!S.x&&!S.y?this:(n.animate&&n.pan?this.panBy(S):(n.pan&&this._rawPanBy(S),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:o,newSize:l}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=r({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var o=c(this._handleGeolocationResponse,this),l=c(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(o,l,n):navigator.geolocation.getCurrentPosition(o,l,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var o=n.code,l=n.message||(o===1?"permission denied":o===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:o,message:"Geolocation error: "+l+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var o=n.coords.latitude,l=n.coords.longitude,u=new Nt(o,l),m=u.toBounds(n.coords.accuracy*2),S=this._locateOptions;if(S.setView){var O=this.getBoundsZoom(m);this.setView(u,S.maxZoom?Math.min(O,S.maxZoom):O)}var X={latlng:u,bounds:m,timestamp:n.timestamp};for(var tt in n.coords)typeof n.coords[tt]=="number"&&(X[tt]=n.coords[tt]);this.fire("locationfound",X)}},addHandler:function(n,o){if(!o)return this;var l=this[n]=new o(this);return this._handlers.push(l),this.options[n]&&l.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),gt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(W(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)gt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,o){var l="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),u=ht("div",l,o||this._mapPane);return n&&(this._panes[n]=u),u},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),o=this.unproject(n.getBottomLeft()),l=this.unproject(n.getTopRight());return new qt(o,l)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,o,l){n=jt(n),l=ot(l||[0,0]);var u=this.getZoom()||0,m=this.getMinZoom(),S=this.getMaxZoom(),O=n.getNorthWest(),X=n.getSouthEast(),tt=this.getSize().subtract(l),ut=wt(this.project(X,u),this.project(O,u)).getSize(),Pt=kt.any3d?this.options.zoomSnap:1,Wt=tt.x/ut.x,oe=tt.y/ut.y,oi=o?Math.max(Wt,oe):Math.min(Wt,oe);return u=this.getScaleZoom(oi,u),Pt&&(u=Math.round(u/(Pt/100))*(Pt/100),u=o?Math.ceil(u/Pt)*Pt:Math.floor(u/Pt)*Pt),Math.max(m,Math.min(S,u))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new J(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,o){var l=this._getTopLeftPoint(n,o);return new ft(l,l.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,o){var l=this.options.crs;return o=o===void 0?this._zoom:o,l.scale(n)/l.scale(o)},getScaleZoom:function(n,o){var l=this.options.crs;o=o===void 0?this._zoom:o;var u=l.zoom(n*l.scale(o));return isNaN(u)?1/0:u},project:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.latLngToPoint(j(n),o)},unproject:function(n,o){return o=o===void 0?this._zoom:o,this.options.crs.pointToLatLng(ot(n),o)},layerPointToLatLng:function(n){var o=ot(n).add(this.getPixelOrigin());return this.unproject(o)},latLngToLayerPoint:function(n){var o=this.project(j(n))._round();return o._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(j(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(jt(n))},distance:function(n,o){return this.options.crs.distance(j(n),j(o))},containerPointToLayerPoint:function(n){return ot(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return ot(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var o=this.containerPointToLayerPoint(ot(n));return this.layerPointToLatLng(o)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(n)))},mouseEventToContainerPoint:function(n){return _h(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var o=this._container=bt(n);if(o){if(o._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");te(o,"scroll",this._onScroll,this),this._containerId=d(o)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&kt.any3d,Lt(n,"leaflet-container"+(kt.touch?" leaflet-touch":"")+(kt.retina?" leaflet-retina":"")+(kt.ielt9?" leaflet-oldie":"")+(kt.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var o=Ct(n,"position");o!=="absolute"&&o!=="relative"&&o!=="fixed"&&o!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),me(this._mapPane,new J(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Lt(n.markerPane,"leaflet-zoom-hide"),Lt(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,o,l){me(this._mapPane,new J(0,0));var u=!this._loaded;this._loaded=!0,o=this._limitZoom(o),this.fire("viewprereset");var m=this._zoom!==o;this._moveStart(m,l)._move(n,o)._moveEnd(m),this.fire("viewreset"),u&&this.fire("load")},_moveStart:function(n,o){return n&&this.fire("zoomstart"),o||this.fire("movestart"),this},_move:function(n,o,l,u){o===void 0&&(o=this._zoom);var m=this._zoom!==o;return this._zoom=o,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),u?l&&l.pinch&&this.fire("zoom",l):((m||l&&l.pinch)&&this.fire("zoom",l),this.fire("move",l)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return W(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){me(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[d(this._container)]=this;var o=n?Le:te;o(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&o(window,"resize",this._onResize,this),kt.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){W(this._resizeRequest),this._resizeRequest=F(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,o){for(var l=[],u,m=o==="mouseout"||o==="mouseover",S=n.target||n.srcElement,O=!1;S;){if(u=this._targets[d(S)],u&&(o==="click"||o==="preclick")&&this._draggableMoved(u)){O=!0;break}if(u&&u.listens(o,!0)&&(m&&!Oa(S,n)||(l.push(u),m))||S===this._container)break;S=S.parentNode}return!l.length&&!O&&!m&&this.listens(o,!0)&&(l=[this]),l},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var o=n.target||n.srcElement;if(!(!this._loaded||o._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(o))){var l=n.type;l==="mousedown"&&xs(o),this._fireDOMEvent(n,l)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,o,l){if(n.type==="click"){var u=r({},n);u.type="preclick",this._fireDOMEvent(u,u.type,l)}var m=this._findEventTargets(n,o);if(l){for(var S=[],O=0;O<l.length;O++)l[O].listens(o,!0)&&S.push(l[O]);m=S.concat(m)}if(m.length){o==="contextmenu"&&ti(n);var X=m[0],tt={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var ut=X.getLatLng&&(!X._radius||X._radius<=10);tt.containerPoint=ut?this.latLngToContainerPoint(X.getLatLng()):this.mouseEventToContainerPoint(n),tt.layerPoint=this.containerPointToLayerPoint(tt.containerPoint),tt.latlng=ut?X.getLatLng():this.layerPointToLatLng(tt.layerPoint)}for(O=0;O<m.length;O++)if(m[O].fire(o,tt,!0),tt.originalEvent._stopped||m[O].options.bubblingMouseEvents===!1&&A(this._mouseEvents,o)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,o=this._handlers.length;n<o;n++)this._handlers[n].disable()},whenReady:function(n,o){return this._loaded?n.call(o||this,{target:this}):this.on("load",n,o),this},_getMapPanePos:function(){return qe(this._mapPane)||new J(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,o){var l=n&&o!==void 0?this._getNewPixelOrigin(n,o):this.getPixelOrigin();return l.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,o){var l=this.getSize()._divideBy(2);return this.project(n,o)._subtract(l)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,o,l){var u=this._getNewPixelOrigin(l,o);return this.project(n,o)._subtract(u)},_latLngBoundsToNewLayerBounds:function(n,o,l){var u=this._getNewPixelOrigin(l,o);return wt([this.project(n.getSouthWest(),o)._subtract(u),this.project(n.getNorthWest(),o)._subtract(u),this.project(n.getSouthEast(),o)._subtract(u),this.project(n.getNorthEast(),o)._subtract(u)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,o,l){if(!l)return n;var u=this.project(n,o),m=this.getSize().divideBy(2),S=new ft(u.subtract(m),u.add(m)),O=this._getBoundsOffset(S,l,o);return Math.abs(O.x)<=1&&Math.abs(O.y)<=1?n:this.unproject(u.add(O),o)},_limitOffset:function(n,o){if(!o)return n;var l=this.getPixelBounds(),u=new ft(l.min.add(n),l.max.add(n));return n.add(this._getBoundsOffset(u,o))},_getBoundsOffset:function(n,o,l){var u=wt(this.project(o.getNorthEast(),l),this.project(o.getSouthWest(),l)),m=u.min.subtract(n.min),S=u.max.subtract(n.max),O=this._rebound(m.x,-S.x),X=this._rebound(m.y,-S.y);return new J(O,X)},_rebound:function(n,o){return n+o>0?Math.round(n-o)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(o))},_limitZoom:function(n){var o=this.getMinZoom(),l=this.getMaxZoom(),u=kt.any3d?this.options.zoomSnap:1;return u&&(n=Math.round(n/u)*u),Math.max(o,Math.min(l,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Qt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,o){var l=this._getCenterOffset(n)._trunc();return(o&&o.animate)!==!0&&!this.getSize().contains(l)?!1:(this.panBy(l,o),!0)},_createAnimProxy:function(){var n=this._proxy=ht("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(o){var l=Q,u=this._proxy.style[l];ee(this._proxy,this.project(o.center,o.zoom),this.getZoomScale(o.zoom,1)),u===this._proxy.style[l]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){gt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),o=this.getZoom();ee(this._proxy,this.project(n,o),this.getZoomScale(o,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,o,l){if(this._animatingZoom)return!0;if(l=l||{},!this._zoomAnimated||l.animate===!1||this._nothingToAnimate()||Math.abs(o-this._zoom)>this.options.zoomAnimationThreshold)return!1;var u=this.getZoomScale(o),m=this._getCenterOffset(n)._divideBy(1-1/u);return l.animate!==!0&&!this.getSize().contains(m)?!1:(F(function(){this._moveStart(!0,l.noMoveStart||!1)._animateZoom(n,o,!0)},this),!0)},_animateZoom:function(n,o,l,u){this._mapPane&&(l&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=o,Lt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:o,noUpdate:u}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Qt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function i_(n,o){return new de(n,o)}var Ui=lt.extend({options:{position:"topright"},initialize:function(n){T(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var o=this._map;return o&&o.removeControl(this),this.options.position=n,o&&o.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var o=this._container=this.onAdd(n),l=this.getPosition(),u=n._controlCorners[l];return Lt(o,"leaflet-control"),l.indexOf("bottom")!==-1?u.insertBefore(o,u.firstChild):u.appendChild(o),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(gt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),cr=function(n){return new Ui(n)};de.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},o="leaflet-",l=this._controlContainer=ht("div",o+"control-container",this._container);function u(m,S){var O=o+m+" "+o+S;n[m+S]=ht("div",O,l)}u("top","left"),u("top","right"),u("bottom","left"),u("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)gt(this._controlCorners[n]);gt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var xh=Ui.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,o,l,u){return l<u?-1:u<l?1:0}},initialize:function(n,o,l){T(this,l),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var u in n)this._addLayer(n[u],u);for(u in o)this._addLayer(o[u],u,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var o=0;o<this._layers.length;o++)this._layers[o].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return Ui.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,o){return this._addLayer(n,o),this._map?this._update():this},addOverlay:function(n,o){return this._addLayer(n,o,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var o=this._getLayer(d(n));return o&&this._layers.splice(this._layers.indexOf(o),1),this._map?this._update():this},expand:function(){Lt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Lt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Qt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Qt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",o=this._container=ht("div",n),l=this.options.collapsed;o.setAttribute("aria-haspopup",!0),lr(o),Na(o);var u=this._section=ht("section",n+"-list");l&&(this._map.on("click",this.collapse,this),te(o,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var m=this._layersLink=ht("a",n+"-toggle",o);m.href="#",m.title="Layers",m.setAttribute("role","button"),te(m,{keydown:function(S){S.keyCode===13&&this._expandSafely()},click:function(S){ti(S),this._expandSafely()}},this),l||this.expand(),this._baseLayersList=ht("div",n+"-base",u),this._separator=ht("div",n+"-separator",u),this._overlaysList=ht("div",n+"-overlays",u),o.appendChild(u)},_getLayer:function(n){for(var o=0;o<this._layers.length;o++)if(this._layers[o]&&d(this._layers[o].layer)===n)return this._layers[o]},_addLayer:function(n,o,l){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:o,overlay:l}),this.options.sortLayers&&this._layers.sort(c(function(u,m){return this.options.sortFunction(u.layer,m.layer,u.name,m.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Dt(this._baseLayersList),Dt(this._overlaysList),this._layerControlInputs=[];var n,o,l,u,m=0;for(l=0;l<this._layers.length;l++)u=this._layers[l],this._addItem(u),o=o||u.overlay,n=n||!u.overlay,m+=u.overlay?0:1;return this.options.hideSingleBase&&(n=n&&m>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=o&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var o=this._getLayer(d(n.target)),l=o.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;l&&this._map.fire(l,o)},_createRadioElement:function(n,o){var l='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(o?' checked="checked"':"")+"/>",u=document.createElement("div");return u.innerHTML=l,u.firstChild},_addItem:function(n){var o=document.createElement("label"),l=this._map.hasLayer(n.layer),u;n.overlay?(u=document.createElement("input"),u.type="checkbox",u.className="leaflet-control-layers-selector",u.defaultChecked=l):u=this._createRadioElement("leaflet-base-layers_"+d(this),l),this._layerControlInputs.push(u),u.layerId=d(n.layer),te(u,"click",this._onInputClick,this);var m=document.createElement("span");m.innerHTML=" "+n.name;var S=document.createElement("span");o.appendChild(S),S.appendChild(u),S.appendChild(m);var O=n.overlay?this._overlaysList:this._baseLayersList;return O.appendChild(o),this._checkDisabledLayers(),o},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,o,l,u=[],m=[];this._handlingClick=!0;for(var S=n.length-1;S>=0;S--)o=n[S],l=this._getLayer(o.layerId).layer,o.checked?u.push(l):o.checked||m.push(l);for(S=0;S<m.length;S++)this._map.hasLayer(m[S])&&this._map.removeLayer(m[S]);for(S=0;S<u.length;S++)this._map.hasLayer(u[S])||this._map.addLayer(u[S]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,o,l,u=this._map.getZoom(),m=n.length-1;m>=0;m--)o=n[m],l=this._getLayer(o.layerId).layer,o.disabled=l.options.minZoom!==void 0&&u<l.options.minZoom||l.options.maxZoom!==void 0&&u>l.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,te(n,"click",ti),this.expand();var o=this;setTimeout(function(){Le(n,"click",ti),o._preventClick=!1})}}),n_=function(n,o,l){return new xh(n,o,l)},Ua=Ui.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var o="leaflet-control-zoom",l=ht("div",o+" leaflet-bar"),u=this.options;return this._zoomInButton=this._createButton(u.zoomInText,u.zoomInTitle,o+"-in",l,this._zoomIn),this._zoomOutButton=this._createButton(u.zoomOutText,u.zoomOutTitle,o+"-out",l,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),l},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,o,l,u,m){var S=ht("a",l,u);return S.innerHTML=n,S.href="#",S.title=o,S.setAttribute("role","button"),S.setAttribute("aria-label",o),lr(S),te(S,"click",Jn),te(S,"click",m,this),te(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var n=this._map,o="leaflet-disabled";Qt(this._zoomInButton,o),Qt(this._zoomOutButton,o),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Lt(this._zoomOutButton,o),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Lt(this._zoomInButton,o),this._zoomInButton.setAttribute("aria-disabled","true"))}});de.mergeOptions({zoomControl:!0}),de.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ua,this.addControl(this.zoomControl))});var s_=function(n){return new Ua(n)},yh=Ui.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var o="leaflet-control-scale",l=ht("div",o),u=this.options;return this._addScales(u,o+"-line",l),n.on(u.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),l},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,o,l){n.metric&&(this._mScale=ht("div",o,l)),n.imperial&&(this._iScale=ht("div",o,l))},_update:function(){var n=this._map,o=n.getSize().y/2,l=n.distance(n.containerPointToLatLng([0,o]),n.containerPointToLatLng([this.options.maxWidth,o]));this._updateScales(l)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var o=this._getRoundNum(n),l=o<1e3?o+" m":o/1e3+" km";this._updateScale(this._mScale,l,o/n)},_updateImperial:function(n){var o=n*3.2808399,l,u,m;o>5280?(l=o/5280,u=this._getRoundNum(l),this._updateScale(this._iScale,u+" mi",u/l)):(m=this._getRoundNum(o),this._updateScale(this._iScale,m+" ft",m/o))},_updateScale:function(n,o,l){n.style.width=Math.round(this.options.maxWidth*l)+"px",n.innerHTML=o},_getRoundNum:function(n){var o=Math.pow(10,(Math.floor(n)+"").length-1),l=n/o;return l=l>=10?10:l>=5?5:l>=3?3:l>=2?2:1,o*l}}),r_=function(n){return new yh(n)},o_='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Fa=Ui.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(kt.inlineSvg?o_+" ":"")+"Leaflet</a>"},initialize:function(n){T(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=ht("div","leaflet-control-attribution"),lr(this._container);for(var o in n._layers)n._layers[o].getAttribution&&this.addAttribution(n._layers[o].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var o in this._attributions)this._attributions[o]&&n.push(o);var l=[];this.options.prefix&&l.push(this.options.prefix),n.length&&l.push(n.join(", ")),this._container.innerHTML=l.join(' <span aria-hidden="true">|</span> ')}}});de.mergeOptions({attributionControl:!0}),de.addInitHook(function(){this.options.attributionControl&&new Fa().addTo(this)});var a_=function(n){return new Fa(n)};Ui.Layers=xh,Ui.Zoom=Ua,Ui.Scale=yh,Ui.Attribution=Fa,cr.layers=n_,cr.zoom=s_,cr.scale=r_,cr.attribution=a_;var Ki=lt.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ki.addTo=function(n,o){return n.addHandler(o,this),this};var l_={Events:it},Mh=kt.touch?"touchstart mousedown":"mousedown",Ln=$.extend({options:{clickTolerance:3},initialize:function(n,o,l,u){T(this,u),this._element=n,this._dragStartTarget=o||n,this._preventOutline=l},enable:function(){this._enabled||(te(this._dragStartTarget,Mh,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Ln._dragging===this&&this.finishDrag(!0),Le(this._dragStartTarget,Mh,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Ut(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){Ln._dragging===this&&this.finishDrag();return}if(!(Ln._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(Ln._dragging=this,this._preventOutline&&xs(this._element),bi(),ui(),!this._moving)){this.fire("down");var o=n.touches?n.touches[0]:n,l=fh(this._element);this._startPoint=new J(o.clientX,o.clientY),this._startPos=qe(this._element),this._parentScale=La(l);var u=n.type==="mousedown";te(document,u?"mousemove":"touchmove",this._onMove,this),te(document,u?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var o=n.touches&&n.touches.length===1?n.touches[0]:n,l=new J(o.clientX,o.clientY)._subtract(this._startPoint);!l.x&&!l.y||Math.abs(l.x)+Math.abs(l.y)<this.options.clickTolerance||(l.x/=this._parentScale.x,l.y/=this._parentScale.y,ti(n),this._moved||(this.fire("dragstart"),this._moved=!0,Lt(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Lt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(l),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),me(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Qt(document.body,"leaflet-dragging"),this._lastTarget&&(Qt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Le(document,"mousemove touchmove",this._onMove,this),Le(document,"mouseup touchend touchcancel",this._onUp,this),ye(),wi();var o=this._moved&&this._moving;this._moving=!1,Ln._dragging=!1,o&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function Eh(n,o,l){var u,m=[1,4,2,8],S,O,X,tt,ut,Pt,Wt,oe;for(S=0,Pt=n.length;S<Pt;S++)n[S]._code=jn(n[S],o);for(X=0;X<4;X++){for(Wt=m[X],u=[],S=0,Pt=n.length,O=Pt-1;S<Pt;O=S++)tt=n[S],ut=n[O],tt._code&Wt?ut._code&Wt||(oe=ao(ut,tt,Wt,o,l),oe._code=jn(oe,o),u.push(oe)):(ut._code&Wt&&(oe=ao(ut,tt,Wt,o,l),oe._code=jn(oe,o),u.push(oe)),u.push(tt));n=u}return n}function Sh(n,o){var l,u,m,S,O,X,tt,ut,Pt;if(!n||n.length===0)throw new Error("latlngs not passed");Ti(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Wt=j([0,0]),oe=jt(n),oi=oe.getNorthWest().distanceTo(oe.getSouthWest())*oe.getNorthEast().distanceTo(oe.getNorthWest());oi<1700&&(Wt=ka(n));var Ye=n.length,Ai=[];for(l=0;l<Ye;l++){var di=j(n[l]);Ai.push(o.project(j([di.lat-Wt.lat,di.lng-Wt.lng])))}for(X=tt=ut=0,l=0,u=Ye-1;l<Ye;u=l++)m=Ai[l],S=Ai[u],O=m.y*S.x-S.y*m.x,tt+=(m.x+S.x)*O,ut+=(m.y+S.y)*O,X+=O*3;X===0?Pt=Ai[0]:Pt=[tt/X,ut/X];var bs=o.unproject(ot(Pt));return j([bs.lat+Wt.lat,bs.lng+Wt.lng])}function ka(n){for(var o=0,l=0,u=0,m=0;m<n.length;m++){var S=j(n[m]);o+=S.lat,l+=S.lng,u++}return j([o/u,l/u])}var c_={__proto__:null,clipPolygon:Eh,polygonCenter:Sh,centroid:ka};function wh(n,o){if(!o||!n.length)return n.slice();var l=o*o;return n=d_(n,l),n=u_(n,l),n}function bh(n,o,l){return Math.sqrt(hr(n,o,l,!0))}function h_(n,o,l){return hr(n,o,l)}function u_(n,o){var l=n.length,u=typeof Uint8Array<"u"?Uint8Array:Array,m=new u(l);m[0]=m[l-1]=1,Ba(n,m,o,0,l-1);var S,O=[];for(S=0;S<l;S++)m[S]&&O.push(n[S]);return O}function Ba(n,o,l,u,m){var S=0,O,X,tt;for(X=u+1;X<=m-1;X++)tt=hr(n[X],n[u],n[m],!0),tt>S&&(O=X,S=tt);S>l&&(o[O]=1,Ba(n,o,l,u,O),Ba(n,o,l,O,m))}function d_(n,o){for(var l=[n[0]],u=1,m=0,S=n.length;u<S;u++)f_(n[u],n[m])>o&&(l.push(n[u]),m=u);return m<S-1&&l.push(n[S-1]),l}var Th;function Ah(n,o,l,u,m){var S=u?Th:jn(n,l),O=jn(o,l),X,tt,ut;for(Th=O;;){if(!(S|O))return[n,o];if(S&O)return!1;X=S||O,tt=ao(n,o,X,l,m),ut=jn(tt,l),X===S?(n=tt,S=ut):(o=tt,O=ut)}}function ao(n,o,l,u,m){var S=o.x-n.x,O=o.y-n.y,X=u.min,tt=u.max,ut,Pt;return l&8?(ut=n.x+S*(tt.y-n.y)/O,Pt=tt.y):l&4?(ut=n.x+S*(X.y-n.y)/O,Pt=X.y):l&2?(ut=tt.x,Pt=n.y+O*(tt.x-n.x)/S):l&1&&(ut=X.x,Pt=n.y+O*(X.x-n.x)/S),new J(ut,Pt,m)}function jn(n,o){var l=0;return n.x<o.min.x?l|=1:n.x>o.max.x&&(l|=2),n.y<o.min.y?l|=4:n.y>o.max.y&&(l|=8),l}function f_(n,o){var l=o.x-n.x,u=o.y-n.y;return l*l+u*u}function hr(n,o,l,u){var m=o.x,S=o.y,O=l.x-m,X=l.y-S,tt=O*O+X*X,ut;return tt>0&&(ut=((n.x-m)*O+(n.y-S)*X)/tt,ut>1?(m=l.x,S=l.y):ut>0&&(m+=O*ut,S+=X*ut)),O=n.x-m,X=n.y-S,u?O*O+X*X:new J(m,S)}function Ti(n){return!N(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Ch(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Ti(n)}function Ph(n,o){var l,u,m,S,O,X,tt,ut;if(!n||n.length===0)throw new Error("latlngs not passed");Ti(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Pt=j([0,0]),Wt=jt(n),oe=Wt.getNorthWest().distanceTo(Wt.getSouthWest())*Wt.getNorthEast().distanceTo(Wt.getNorthWest());oe<1700&&(Pt=ka(n));var oi=n.length,Ye=[];for(l=0;l<oi;l++){var Ai=j(n[l]);Ye.push(o.project(j([Ai.lat-Pt.lat,Ai.lng-Pt.lng])))}for(l=0,u=0;l<oi-1;l++)u+=Ye[l].distanceTo(Ye[l+1])/2;if(u===0)ut=Ye[0];else for(l=0,S=0;l<oi-1;l++)if(O=Ye[l],X=Ye[l+1],m=O.distanceTo(X),S+=m,S>u){tt=(S-u)/m,ut=[X.x-tt*(X.x-O.x),X.y-tt*(X.y-O.y)];break}var di=o.unproject(ot(ut));return j([di.lat+Pt.lat,di.lng+Pt.lng])}var p_={__proto__:null,simplify:wh,pointToSegmentDistance:bh,closestPointOnSegment:h_,clipSegment:Ah,_getEdgeIntersection:ao,_getBitCode:jn,_sqClosestPointOnSegment:hr,isFlat:Ti,_flat:Ch,polylineCenter:Ph},za={project:function(n){return new J(n.lng,n.lat)},unproject:function(n){return new Nt(n.y,n.x)},bounds:new ft([-180,-90],[180,90])},Ha={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ft([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var o=Math.PI/180,l=this.R,u=n.lat*o,m=this.R_MINOR/l,S=Math.sqrt(1-m*m),O=S*Math.sin(u),X=Math.tan(Math.PI/4-u/2)/Math.pow((1-O)/(1+O),S/2);return u=-l*Math.log(Math.max(X,1e-10)),new J(n.lng*o*l,u)},unproject:function(n){for(var o=180/Math.PI,l=this.R,u=this.R_MINOR/l,m=Math.sqrt(1-u*u),S=Math.exp(-n.y/l),O=Math.PI/2-2*Math.atan(S),X=0,tt=.1,ut;X<15&&Math.abs(tt)>1e-7;X++)ut=m*Math.sin(O),ut=Math.pow((1-ut)/(1+ut),m/2),tt=Math.PI/2-2*Math.atan(S*ut)-O,O+=tt;return new Nt(O*o,n.x*o/l)}},m_={__proto__:null,LonLat:za,Mercator:Ha,SphericalMercator:Yt},__=r({},dt,{code:"EPSG:3395",projection:Ha,transformation:(function(){var n=.5/(Math.PI*Ha.R);return Te(n,.5,-n,.5)})()}),Lh=r({},dt,{code:"EPSG:4326",projection:za,transformation:Te(1/180,1,-1/180,.5)}),g_=r({},mt,{projection:za,transformation:Te(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,o){var l=o.lng-n.lng,u=o.lat-n.lat;return Math.sqrt(l*l+u*u)},infinite:!0});mt.Earth=dt,mt.EPSG3395=__,mt.EPSG3857=ne,mt.EPSG900913=Ee,mt.EPSG4326=Lh,mt.Simple=g_;var Fi=$.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[d(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[d(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var o=n.target;if(o.hasLayer(this)){if(this._map=o,this._zoomAnimated=o._zoomAnimated,this.getEvents){var l=this.getEvents();o.on(l,this),this.once("remove",function(){o.off(l,this)},this)}this.onAdd(o),this.fire("add"),o.fire("layeradd",{layer:this})}}});de.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var o=d(n);return this._layers[o]?this:(this._layers[o]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var o=d(n);return this._layers[o]?(this._loaded&&n.onRemove(this),delete this._layers[o],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return d(n)in this._layers},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},_addLayers:function(n){n=n?N(n)?n:[n]:[];for(var o=0,l=n.length;o<l;o++)this.addLayer(n[o])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[d(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var o=d(n);this._zoomBoundLayers[o]&&(delete this._zoomBoundLayers[o],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,o=-1/0,l=this._getZoomSpan();for(var u in this._zoomBoundLayers){var m=this._zoomBoundLayers[u].options;n=m.minZoom===void 0?n:Math.min(n,m.minZoom),o=m.maxZoom===void 0?o:Math.max(o,m.maxZoom)}this._layersMaxZoom=o===-1/0?void 0:o,this._layersMinZoom=n===1/0?void 0:n,l!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var ys=Fi.extend({initialize:function(n,o){T(this,o),this._layers={};var l,u;if(n)for(l=0,u=n.length;l<u;l++)this.addLayer(n[l])},addLayer:function(n){var o=this.getLayerId(n);return this._layers[o]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var o=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[o]&&this._map.removeLayer(this._layers[o]),delete this._layers[o],this},hasLayer:function(n){var o=typeof n=="number"?n:this.getLayerId(n);return o in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var o=Array.prototype.slice.call(arguments,1),l,u;for(l in this._layers)u=this._layers[l],u[n]&&u[n].apply(u,o);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,o){for(var l in this._layers)n.call(o,this._layers[l]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return d(n)}}),v_=function(n,o){return new ys(n,o)},un=ys.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),ys.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),ys.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new qt;for(var o in this._layers){var l=this._layers[o];n.extend(l.getBounds?l.getBounds():l.getLatLng())}return n}}),x_=function(n,o){return new un(n,o)},Ms=lt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){T(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,o){var l=this._getIconUrl(n);if(!l){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var u=this._createImg(l,o&&o.tagName==="IMG"?o:null);return this._setIconStyles(u,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),u},_setIconStyles:function(n,o){var l=this.options,u=l[o+"Size"];typeof u=="number"&&(u=[u,u]);var m=ot(u),S=ot(o==="shadow"&&l.shadowAnchor||l.iconAnchor||m&&m.divideBy(2,!0));n.className="leaflet-marker-"+o+" "+(l.className||""),S&&(n.style.marginLeft=-S.x+"px",n.style.marginTop=-S.y+"px"),m&&(n.style.width=m.x+"px",n.style.height=m.y+"px")},_createImg:function(n,o){return o=o||document.createElement("img"),o.src=n,o},_getIconUrl:function(n){return kt.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function y_(n){return new Ms(n)}var ur=Ms.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof ur.imagePath!="string"&&(ur.imagePath=this._detectIconPath()),(this.options.imagePath||ur.imagePath)+Ms.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var o=function(l,u,m){var S=u.exec(l);return S&&S[m]};return n=o(n,/^url\((['"])?(.+)\1\)$/,2),n&&o(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=ht("div","leaflet-default-icon-path",document.body),o=Ct(n,"background-image")||Ct(n,"backgroundImage");if(document.body.removeChild(n),o=this._stripUrl(o),o)return o;var l=document.querySelector('link[href$="leaflet.css"]');return l?l.href.substring(0,l.href.length-11-1):""}}),Rh=Ki.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new Ln(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Lt(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Qt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var o=this._marker,l=o._map,u=this._marker.options.autoPanSpeed,m=this._marker.options.autoPanPadding,S=qe(o._icon),O=l.getPixelBounds(),X=l.getPixelOrigin(),tt=wt(O.min._subtract(X).add(m),O.max._subtract(X).subtract(m));if(!tt.contains(S)){var ut=ot((Math.max(tt.max.x,S.x)-tt.max.x)/(O.max.x-tt.max.x)-(Math.min(tt.min.x,S.x)-tt.min.x)/(O.min.x-tt.min.x),(Math.max(tt.max.y,S.y)-tt.max.y)/(O.max.y-tt.max.y)-(Math.min(tt.min.y,S.y)-tt.min.y)/(O.min.y-tt.min.y)).multiplyBy(u);l.panBy(ut,{animate:!1}),this._draggable._newPos._add(ut),this._draggable._startPos._add(ut),me(o._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=F(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(W(this._panRequest),this._panRequest=F(this._adjustPan.bind(this,n)))},_onDrag:function(n){var o=this._marker,l=o._shadow,u=qe(o._icon),m=o._map.layerPointToLatLng(u);l&&me(l,u),o._latlng=m,n.latlng=m,n.oldLatLng=this._oldLatLng,o.fire("move",n).fire("drag",n)},_onDragEnd:function(n){W(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),lo=Fi.extend({options:{icon:new ur,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,o){T(this,o),this._latlng=j(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var o=this._latlng;return this._latlng=j(n),this.update(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,o="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),l=n.icon.createIcon(this._icon),u=!1;l!==this._icon&&(this._icon&&this._removeIcon(),u=!0,n.title&&(l.title=n.title),l.tagName==="IMG"&&(l.alt=n.alt||"")),Lt(l,o),n.keyboard&&(l.tabIndex="0",l.setAttribute("role","button")),this._icon=l,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&te(l,"focus",this._panOnFocus,this);var m=n.icon.createShadow(this._shadow),S=!1;m!==this._shadow&&(this._removeShadow(),S=!0),m&&(Lt(m,o),m.alt=""),this._shadow=m,n.opacity<1&&this._updateOpacity(),u&&this.getPane().appendChild(this._icon),this._initInteraction(),m&&S&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Le(this._icon,"focus",this._panOnFocus,this),gt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&gt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&me(this._icon,n),this._shadow&&me(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(o)},_initInteraction:function(){if(this.options.interactive&&(Lt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Rh)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Rh(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&Se(this._icon,n),this._shadow&&Se(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var o=this.options.icon.options,l=o.iconSize?ot(o.iconSize):ot(0,0),u=o.iconAnchor?ot(o.iconAnchor):ot(0,0);n.panInside(this._latlng,{paddingTopLeft:u,paddingBottomRight:l.subtract(u)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function M_(n,o){return new lo(n,o)}var Rn=Fi.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return T(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),co=Rn.extend({options:{fill:!0,radius:10},initialize:function(n,o){T(this,o),this._latlng=j(n),this._radius=this.options.radius},setLatLng:function(n){var o=this._latlng;return this._latlng=j(n),this.redraw(),this.fire("move",{oldLatLng:o,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var o=n&&n.radius||this._radius;return Rn.prototype.setStyle.call(this,n),this.setRadius(o),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,o=this._radiusY||n,l=this._clickTolerance(),u=[n+l,o+l];this._pxBounds=new ft(this._point.subtract(u),this._point.add(u))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function E_(n,o){return new co(n,o)}var Va=co.extend({initialize:function(n,o,l){if(typeof o=="number"&&(o=r({},l,{radius:o})),T(this,o),this._latlng=j(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new qt(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:Rn.prototype.setStyle,_project:function(){var n=this._latlng.lng,o=this._latlng.lat,l=this._map,u=l.options.crs;if(u.distance===dt.distance){var m=Math.PI/180,S=this._mRadius/dt.R/m,O=l.project([o+S,n]),X=l.project([o-S,n]),tt=O.add(X).divideBy(2),ut=l.unproject(tt).lat,Pt=Math.acos((Math.cos(S*m)-Math.sin(o*m)*Math.sin(ut*m))/(Math.cos(o*m)*Math.cos(ut*m)))/m;(isNaN(Pt)||Pt===0)&&(Pt=S/Math.cos(Math.PI/180*o)),this._point=tt.subtract(l.getPixelOrigin()),this._radius=isNaN(Pt)?0:tt.x-l.project([ut,n-Pt]).x,this._radiusY=tt.y-O.y}else{var Wt=u.unproject(u.project(this._latlng).subtract([this._mRadius,0]));this._point=l.latLngToLayerPoint(this._latlng),this._radius=this._point.x-l.latLngToLayerPoint(Wt).x}this._updateBounds()}});function S_(n,o,l){return new Va(n,o,l)}var dn=Rn.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,o){T(this,o),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var o=1/0,l=null,u=hr,m,S,O=0,X=this._parts.length;O<X;O++)for(var tt=this._parts[O],ut=1,Pt=tt.length;ut<Pt;ut++){m=tt[ut-1],S=tt[ut];var Wt=u(n,m,S,!0);Wt<o&&(o=Wt,l=u(n,m,S))}return l&&(l.distance=Math.sqrt(o)),l},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ph(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,o){return o=o||this._defaultShape(),n=j(n),o.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new qt,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return Ti(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var o=[],l=Ti(n),u=0,m=n.length;u<m;u++)l?(o[u]=j(n[u]),this._bounds.extend(o[u])):o[u]=this._convertLatLngs(n[u]);return o},_project:function(){var n=new ft;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),o=new J(n,n);this._rawPxBounds&&(this._pxBounds=new ft([this._rawPxBounds.min.subtract(o),this._rawPxBounds.max.add(o)]))},_projectLatlngs:function(n,o,l){var u=n[0]instanceof Nt,m=n.length,S,O;if(u){for(O=[],S=0;S<m;S++)O[S]=this._map.latLngToLayerPoint(n[S]),l.extend(O[S]);o.push(O)}else for(S=0;S<m;S++)this._projectLatlngs(n[S],o,l)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var o=this._parts,l,u,m,S,O,X,tt;for(l=0,m=0,S=this._rings.length;l<S;l++)for(tt=this._rings[l],u=0,O=tt.length;u<O-1;u++)X=Ah(tt[u],tt[u+1],n,u,!0),X&&(o[m]=o[m]||[],o[m].push(X[0]),(X[1]!==tt[u+1]||u===O-2)&&(o[m].push(X[1]),m++))}},_simplifyPoints:function(){for(var n=this._parts,o=this.options.smoothFactor,l=0,u=n.length;l<u;l++)n[l]=wh(n[l],o)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,o){var l,u,m,S,O,X,tt=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(l=0,S=this._parts.length;l<S;l++)for(X=this._parts[l],u=0,O=X.length,m=O-1;u<O;m=u++)if(!(!o&&u===0)&&bh(n,X[m],X[u])<=tt)return!0;return!1}});function w_(n,o){return new dn(n,o)}dn._flat=Ch;var Es=dn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Sh(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var o=dn.prototype._convertLatLngs.call(this,n),l=o.length;return l>=2&&o[0]instanceof Nt&&o[0].equals(o[l-1])&&o.pop(),o},_setLatLngs:function(n){dn.prototype._setLatLngs.call(this,n),Ti(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Ti(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,o=this.options.weight,l=new J(o,o);if(n=new ft(n.min.subtract(l),n.max.add(l)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var u=0,m=this._rings.length,S;u<m;u++)S=Eh(this._rings[u],n,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var o=!1,l,u,m,S,O,X,tt,ut;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(S=0,tt=this._parts.length;S<tt;S++)for(l=this._parts[S],O=0,ut=l.length,X=ut-1;O<ut;X=O++)u=l[O],m=l[X],u.y>n.y!=m.y>n.y&&n.x<(m.x-u.x)*(n.y-u.y)/(m.y-u.y)+u.x&&(o=!o);return o||dn.prototype._containsPoint.call(this,n,!0)}});function b_(n,o){return new Es(n,o)}var fn=un.extend({initialize:function(n,o){T(this,o),this._layers={},n&&this.addData(n)},addData:function(n){var o=N(n)?n:n.features,l,u,m;if(o){for(l=0,u=o.length;l<u;l++)m=o[l],(m.geometries||m.geometry||m.features||m.coordinates)&&this.addData(m);return this}var S=this.options;if(S.filter&&!S.filter(n))return this;var O=ho(n,S);return O?(O.feature=po(n),O.defaultOptions=O.options,this.resetStyle(O),S.onEachFeature&&S.onEachFeature(n,O),this.addLayer(O)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=r({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(o){this._setLayerStyle(o,n)},this)},_setLayerStyle:function(n,o){n.setStyle&&(typeof o=="function"&&(o=o(n.feature)),n.setStyle(o))}});function ho(n,o){var l=n.type==="Feature"?n.geometry:n,u=l?l.coordinates:null,m=[],S=o&&o.pointToLayer,O=o&&o.coordsToLatLng||Ga,X,tt,ut,Pt;if(!u&&!l)return null;switch(l.type){case"Point":return X=O(u),Ih(S,n,X,o);case"MultiPoint":for(ut=0,Pt=u.length;ut<Pt;ut++)X=O(u[ut]),m.push(Ih(S,n,X,o));return new un(m);case"LineString":case"MultiLineString":return tt=uo(u,l.type==="LineString"?0:1,O),new dn(tt,o);case"Polygon":case"MultiPolygon":return tt=uo(u,l.type==="Polygon"?1:2,O),new Es(tt,o);case"GeometryCollection":for(ut=0,Pt=l.geometries.length;ut<Pt;ut++){var Wt=ho({geometry:l.geometries[ut],type:"Feature",properties:n.properties},o);Wt&&m.push(Wt)}return new un(m);case"FeatureCollection":for(ut=0,Pt=l.features.length;ut<Pt;ut++){var oe=ho(l.features[ut],o);oe&&m.push(oe)}return new un(m);default:throw new Error("Invalid GeoJSON object.")}}function Ih(n,o,l,u){return n?n(o,l):new lo(l,u&&u.markersInheritOptions&&u)}function Ga(n){return new Nt(n[1],n[0],n[2])}function uo(n,o,l){for(var u=[],m=0,S=n.length,O;m<S;m++)O=o?uo(n[m],o-1,l):(l||Ga)(n[m]),u.push(O);return u}function Wa(n,o){return n=j(n),n.alt!==void 0?[_(n.lng,o),_(n.lat,o),_(n.alt,o)]:[_(n.lng,o),_(n.lat,o)]}function fo(n,o,l,u){for(var m=[],S=0,O=n.length;S<O;S++)m.push(o?fo(n[S],Ti(n[S])?0:o-1,l,u):Wa(n[S],u));return!o&&l&&m.length>0&&m.push(m[0].slice()),m}function Ss(n,o){return n.feature?r({},n.feature,{geometry:o}):po(o)}function po(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var Xa={toGeoJSON:function(n){return Ss(this,{type:"Point",coordinates:Wa(this.getLatLng(),n)})}};lo.include(Xa),Va.include(Xa),co.include(Xa),dn.include({toGeoJSON:function(n){var o=!Ti(this._latlngs),l=fo(this._latlngs,o?1:0,!1,n);return Ss(this,{type:(o?"Multi":"")+"LineString",coordinates:l})}}),Es.include({toGeoJSON:function(n){var o=!Ti(this._latlngs),l=o&&!Ti(this._latlngs[0]),u=fo(this._latlngs,l?2:o?1:0,!0,n);return o||(u=[u]),Ss(this,{type:(l?"Multi":"")+"Polygon",coordinates:u})}}),ys.include({toMultiPoint:function(n){var o=[];return this.eachLayer(function(l){o.push(l.toGeoJSON(n).geometry.coordinates)}),Ss(this,{type:"MultiPoint",coordinates:o})},toGeoJSON:function(n){var o=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(o==="MultiPoint")return this.toMultiPoint(n);var l=o==="GeometryCollection",u=[];return this.eachLayer(function(m){if(m.toGeoJSON){var S=m.toGeoJSON(n);if(l)u.push(S.geometry);else{var O=po(S);O.type==="FeatureCollection"?u.push.apply(u,O.features):u.push(O)}}}),l?Ss(this,{geometries:u,type:"GeometryCollection"}):{type:"FeatureCollection",features:u}}});function Dh(n,o){return new fn(n,o)}var T_=Dh,mo=Fi.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,o,l){this._url=n,this._bounds=jt(o),T(this,l)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Lt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){gt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Gt(this._image),this},bringToBack:function(){return this._map&&$t(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=jt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",o=this._image=n?this._url:ht("img");if(Lt(o,"leaflet-image-layer"),this._zoomAnimated&&Lt(o,"leaflet-zoom-animated"),this.options.className&&Lt(o,this.options.className),o.onselectstart=g,o.onmousemove=g,o.onload=c(this.fire,this,"load"),o.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=o.src;return}o.src=this._url,o.alt=this.options.alt},_animateZoom:function(n){var o=this._map.getZoomScale(n.zoom),l=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;ee(this._image,l,o)},_reset:function(){var n=this._image,o=new ft(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),l=o.getSize();me(n,o.min),n.style.width=l.x+"px",n.style.height=l.y+"px"},_updateOpacity:function(){Se(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),A_=function(n,o,l){return new mo(n,o,l)},Nh=mo.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",o=this._image=n?this._url:ht("video");if(Lt(o,"leaflet-image-layer"),this._zoomAnimated&&Lt(o,"leaflet-zoom-animated"),this.options.className&&Lt(o,this.options.className),o.onselectstart=g,o.onmousemove=g,o.onloadeddata=c(this.fire,this,"load"),n){for(var l=o.getElementsByTagName("source"),u=[],m=0;m<l.length;m++)u.push(l[m].src);this._url=l.length>0?u:[o.src];return}N(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(o.style,"objectFit")&&(o.style.objectFit="fill"),o.autoplay=!!this.options.autoplay,o.loop=!!this.options.loop,o.muted=!!this.options.muted,o.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var O=ht("source");O.src=this._url[S],o.appendChild(O)}}});function C_(n,o,l){return new Nh(n,o,l)}var Oh=mo.extend({_initImage:function(){var n=this._image=this._url;Lt(n,"leaflet-image-layer"),this._zoomAnimated&&Lt(n,"leaflet-zoom-animated"),this.options.className&&Lt(n,this.options.className),n.onselectstart=g,n.onmousemove=g}});function P_(n,o,l){return new Oh(n,o,l)}var Ji=Fi.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,o){n&&(n instanceof Nt||N(n))?(this._latlng=j(n),T(this,o)):(T(this,n),this._source=o),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&Se(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&Se(this._container,1),this.bringToFront(),this.options.interactive&&(Lt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(Se(this._container,0),this._removeTimeout=setTimeout(c(gt,void 0,this._container),200)):gt(this._container),this.options.interactive&&(Qt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=j(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Gt(this._container),this},bringToBack:function(){return this._map&&$t(this._container),this},_prepareOpen:function(n){var o=this._source;if(!o._map)return!1;if(o instanceof un){o=null;var l=this._source._layers;for(var u in l)if(l[u]._map){o=l[u];break}if(!o)return!1;this._source=o}if(!n)if(o.getCenter)n=o.getCenter();else if(o.getLatLng)n=o.getLatLng();else if(o.getBounds)n=o.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,o=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof o=="string")n.innerHTML=o;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(o)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),o=ot(this.options.offset),l=this._getAnchor();this._zoomAnimated?me(this._container,n.add(l)):o=o.add(n).add(l);var u=this._containerBottom=-o.y,m=this._containerLeft=-Math.round(this._containerWidth/2)+o.x;this._container.style.bottom=u+"px",this._container.style.left=m+"px"}},_getAnchor:function(){return[0,0]}});de.include({_initOverlay:function(n,o,l,u){var m=o;return m instanceof n||(m=new n(u).setContent(o)),l&&m.setLatLng(l),m}}),Fi.include({_initOverlay:function(n,o,l,u){var m=l;return m instanceof n?(T(m,u),m._source=this):(m=o&&!u?o:new n(u,this),m.setContent(l)),m}});var _o=Ji.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Ji.prototype.openOn.call(this,n)},onAdd:function(n){Ji.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Rn||this._source.on("preclick",Kn))},onRemove:function(n){Ji.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Rn||this._source.off("preclick",Kn))},getEvents:function(){var n=Ji.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",o=this._container=ht("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),l=this._wrapper=ht("div",n+"-content-wrapper",o);if(this._contentNode=ht("div",n+"-content",l),lr(o),Na(this._contentNode),te(o,"contextmenu",Kn),this._tipContainer=ht("div",n+"-tip-container",o),this._tip=ht("div",n+"-tip",this._tipContainer),this.options.closeButton){var u=this._closeButton=ht("a",n+"-close-button",o);u.setAttribute("role","button"),u.setAttribute("aria-label","Close popup"),u.href="#close",u.innerHTML='<span aria-hidden="true">&#215;</span>',te(u,"click",function(m){ti(m),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,o=n.style;o.width="",o.whiteSpace="nowrap";var l=n.offsetWidth;l=Math.min(l,this.options.maxWidth),l=Math.max(l,this.options.minWidth),o.width=l+1+"px",o.whiteSpace="",o.height="";var u=n.offsetHeight,m=this.options.maxHeight,S="leaflet-popup-scrolled";m&&u>m?(o.height=m+"px",Lt(n,S)):Qt(n,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),l=this._getAnchor();me(this._container,o.add(l))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,o=parseInt(Ct(this._container,"marginBottom"),10)||0,l=this._container.offsetHeight+o,u=this._containerWidth,m=new J(this._containerLeft,-l-this._containerBottom);m._add(qe(this._container));var S=n.layerPointToContainerPoint(m),O=ot(this.options.autoPanPadding),X=ot(this.options.autoPanPaddingTopLeft||O),tt=ot(this.options.autoPanPaddingBottomRight||O),ut=n.getSize(),Pt=0,Wt=0;S.x+u+tt.x>ut.x&&(Pt=S.x+u-ut.x+tt.x),S.x-Pt-X.x<0&&(Pt=S.x-X.x),S.y+l+tt.y>ut.y&&(Wt=S.y+l-ut.y+tt.y),S.y-Wt-X.y<0&&(Wt=S.y-X.y),(Pt||Wt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([Pt,Wt]))}},_getAnchor:function(){return ot(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),L_=function(n,o){return new _o(n,o)};de.mergeOptions({closePopupOnClick:!0}),de.include({openPopup:function(n,o,l){return this._initOverlay(_o,n,o,l).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),Fi.include({bindPopup:function(n,o){return this._popup=this._initOverlay(_o,this._popup,n,o),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof un||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){Jn(n);var o=n.layer||n.target;if(this._popup._source===o&&!(o instanceof Rn)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=o,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var go=Ji.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Ji.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Ji.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Ji.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",o=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ht("div",o),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var o,l,u=this._map,m=this._container,S=u.latLngToContainerPoint(u.getCenter()),O=u.layerPointToContainerPoint(n),X=this.options.direction,tt=m.offsetWidth,ut=m.offsetHeight,Pt=ot(this.options.offset),Wt=this._getAnchor();X==="top"?(o=tt/2,l=ut):X==="bottom"?(o=tt/2,l=0):X==="center"?(o=tt/2,l=ut/2):X==="right"?(o=0,l=ut/2):X==="left"?(o=tt,l=ut/2):O.x<S.x?(X="right",o=0,l=ut/2):(X="left",o=tt+(Pt.x+Wt.x)*2,l=ut/2),n=n.subtract(ot(o,l,!0)).add(Pt).add(Wt),Qt(m,"leaflet-tooltip-right"),Qt(m,"leaflet-tooltip-left"),Qt(m,"leaflet-tooltip-top"),Qt(m,"leaflet-tooltip-bottom"),Lt(m,"leaflet-tooltip-"+X),me(m,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&Se(this._container,n)},_animateZoom:function(n){var o=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(o)},_getAnchor:function(){return ot(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),R_=function(n,o){return new go(n,o)};de.include({openTooltip:function(n,o,l){return this._initOverlay(go,n,o,l).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),Fi.include({bindTooltip:function(n,o){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(go,this._tooltip,n,o),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var o=n?"off":"on",l={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?l.add=this._openTooltip:(l.mouseover=this._openTooltip,l.mouseout=this.closeTooltip,l.click=this._openTooltip,this._map?this._addFocusListeners():l.add=this._addFocusListeners),this._tooltip.options.sticky&&(l.mousemove=this._moveTooltip),this[o](l),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof un||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&(te(o,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),te(o,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var o=typeof n.getElement=="function"&&n.getElement();o&&o.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var o=this;this._map.once("moveend",function(){o._openOnceFlag=!1,o._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var o=n.latlng,l,u;this._tooltip.options.sticky&&n.originalEvent&&(l=this._map.mouseEventToContainerPoint(n.originalEvent),u=this._map.containerPointToLayerPoint(l),o=this._map.layerPointToLatLng(u)),this._tooltip.setLatLng(o)}});var Uh=Ms.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var o=n&&n.tagName==="DIV"?n:document.createElement("div"),l=this.options;if(l.html instanceof Element?(Dt(o),o.appendChild(l.html)):o.innerHTML=l.html!==!1?l.html:"",l.bgPos){var u=ot(l.bgPos);o.style.backgroundPosition=-u.x+"px "+-u.y+"px"}return this._setIconStyles(o,"icon"),o},createShadow:function(){return null}});function I_(n){return new Uh(n)}Ms.Default=ur;var dr=Fi.extend({options:{tileSize:256,opacity:1,updateWhenIdle:kt.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){T(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),gt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Gt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&($t(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof J?n:new J(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var o=this.getPane().children,l=-n(-1/0,1/0),u=0,m=o.length,S;u<m;u++)S=o[u].style.zIndex,o[u]!==this._container&&S&&(l=n(l,+S));isFinite(l)&&(this.options.zIndex=l+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!kt.ielt9){Se(this._container,this.options.opacity);var n=+new Date,o=!1,l=!1;for(var u in this._tiles){var m=this._tiles[u];if(!(!m.current||!m.loaded)){var S=Math.min(1,(n-m.loaded)/200);Se(m.el,S),S<1?o=!0:(m.active?l=!0:this._onOpaqueTile(m),m.active=!0)}}l&&!this._noPrune&&this._pruneTiles(),o&&(W(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this))}},_onOpaqueTile:g,_initContainer:function(){this._container||(this._container=ht("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,o=this.options.maxZoom;if(n!==void 0){for(var l in this._levels)l=Number(l),this._levels[l].el.children.length||l===n?(this._levels[l].el.style.zIndex=o-Math.abs(n-l),this._onUpdateLevel(l)):(gt(this._levels[l].el),this._removeTilesAtZoom(l),this._onRemoveLevel(l),delete this._levels[l]);var u=this._levels[n],m=this._map;return u||(u=this._levels[n]={},u.el=ht("div","leaflet-tile-container leaflet-zoom-animated",this._container),u.el.style.zIndex=o,u.origin=m.project(m.unproject(m.getPixelOrigin()),n).round(),u.zoom=n,this._setZoomTransform(u,m.getCenter(),m.getZoom()),g(u.el.offsetWidth),this._onCreateLevel(u)),this._level=u,u}},_onUpdateLevel:g,_onRemoveLevel:g,_onCreateLevel:g,_pruneTiles:function(){if(this._map){var n,o,l=this._map.getZoom();if(l>this.options.maxZoom||l<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)o=this._tiles[n],o.retain=o.current;for(n in this._tiles)if(o=this._tiles[n],o.current&&!o.active){var u=o.coords;this._retainParent(u.x,u.y,u.z,u.z-5)||this._retainChildren(u.x,u.y,u.z,u.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var o in this._tiles)this._tiles[o].coords.z===n&&this._removeTile(o)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)gt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,o,l,u){var m=Math.floor(n/2),S=Math.floor(o/2),O=l-1,X=new J(+m,+S);X.z=+O;var tt=this._tileCoordsToKey(X),ut=this._tiles[tt];return ut&&ut.active?(ut.retain=!0,!0):(ut&&ut.loaded&&(ut.retain=!0),O>u?this._retainParent(m,S,O,u):!1)},_retainChildren:function(n,o,l,u){for(var m=2*n;m<2*n+2;m++)for(var S=2*o;S<2*o+2;S++){var O=new J(m,S);O.z=l+1;var X=this._tileCoordsToKey(O),tt=this._tiles[X];if(tt&&tt.active){tt.retain=!0;continue}else tt&&tt.loaded&&(tt.retain=!0);l+1<u&&this._retainChildren(m,S,l+1,u)}},_resetView:function(n){var o=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),o,o)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var o=this.options;return o.minNativeZoom!==void 0&&n<o.minNativeZoom?o.minNativeZoom:o.maxNativeZoom!==void 0&&o.maxNativeZoom<n?o.maxNativeZoom:n},_setView:function(n,o,l,u){var m=Math.round(o);this.options.maxZoom!==void 0&&m>this.options.maxZoom||this.options.minZoom!==void 0&&m<this.options.minZoom?m=void 0:m=this._clampZoom(m);var S=this.options.updateWhenZooming&&m!==this._tileZoom;(!u||S)&&(this._tileZoom=m,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),m!==void 0&&this._update(n),l||this._pruneTiles(),this._noPrune=!!l),this._setZoomTransforms(n,o)},_setZoomTransforms:function(n,o){for(var l in this._levels)this._setZoomTransform(this._levels[l],n,o)},_setZoomTransform:function(n,o,l){var u=this._map.getZoomScale(l,n.zoom),m=n.origin.multiplyBy(u).subtract(this._map._getNewPixelOrigin(o,l)).round();kt.any3d?ee(n.el,m,u):me(n.el,m)},_resetGrid:function(){var n=this._map,o=n.options.crs,l=this._tileSize=this.getTileSize(),u=this._tileZoom,m=this._map.getPixelWorldBounds(this._tileZoom);m&&(this._globalTileRange=this._pxBoundsToTileRange(m)),this._wrapX=o.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,o.wrapLng[0]],u).x/l.x),Math.ceil(n.project([0,o.wrapLng[1]],u).x/l.y)],this._wrapY=o.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([o.wrapLat[0],0],u).y/l.x),Math.ceil(n.project([o.wrapLat[1],0],u).y/l.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var o=this._map,l=o._animatingZoom?Math.max(o._animateToZoom,o.getZoom()):o.getZoom(),u=o.getZoomScale(l,this._tileZoom),m=o.project(n,this._tileZoom).floor(),S=o.getSize().divideBy(u*2);return new ft(m.subtract(S),m.add(S))},_update:function(n){var o=this._map;if(o){var l=this._clampZoom(o.getZoom());if(n===void 0&&(n=o.getCenter()),this._tileZoom!==void 0){var u=this._getTiledPixelBounds(n),m=this._pxBoundsToTileRange(u),S=m.getCenter(),O=[],X=this.options.keepBuffer,tt=new ft(m.getBottomLeft().subtract([X,-X]),m.getTopRight().add([X,-X]));if(!(isFinite(m.min.x)&&isFinite(m.min.y)&&isFinite(m.max.x)&&isFinite(m.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ut in this._tiles){var Pt=this._tiles[ut].coords;(Pt.z!==this._tileZoom||!tt.contains(new J(Pt.x,Pt.y)))&&(this._tiles[ut].current=!1)}if(Math.abs(l-this._tileZoom)>1){this._setView(n,l);return}for(var Wt=m.min.y;Wt<=m.max.y;Wt++)for(var oe=m.min.x;oe<=m.max.x;oe++){var oi=new J(oe,Wt);if(oi.z=this._tileZoom,!!this._isValidTile(oi)){var Ye=this._tiles[this._tileCoordsToKey(oi)];Ye?Ye.current=!0:O.push(oi)}}if(O.sort(function(di,bs){return di.distanceTo(S)-bs.distanceTo(S)}),O.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var Ai=document.createDocumentFragment();for(oe=0;oe<O.length;oe++)this._addTile(O[oe],Ai);this._level.el.appendChild(Ai)}}}},_isValidTile:function(n){var o=this._map.options.crs;if(!o.infinite){var l=this._globalTileRange;if(!o.wrapLng&&(n.x<l.min.x||n.x>l.max.x)||!o.wrapLat&&(n.y<l.min.y||n.y>l.max.y))return!1}if(!this.options.bounds)return!0;var u=this._tileCoordsToBounds(n);return jt(this.options.bounds).overlaps(u)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var o=this._map,l=this.getTileSize(),u=n.scaleBy(l),m=u.add(l),S=o.unproject(u,n.z),O=o.unproject(m,n.z);return[S,O]},_tileCoordsToBounds:function(n){var o=this._tileCoordsToNwSe(n),l=new qt(o[0],o[1]);return this.options.noWrap||(l=this._map.wrapLatLngBounds(l)),l},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var o=n.split(":"),l=new J(+o[0],+o[1]);return l.z=+o[2],l},_removeTile:function(n){var o=this._tiles[n];o&&(gt(o.el),delete this._tiles[n],this.fire("tileunload",{tile:o.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Lt(n,"leaflet-tile");var o=this.getTileSize();n.style.width=o.x+"px",n.style.height=o.y+"px",n.onselectstart=g,n.onmousemove=g,kt.ielt9&&this.options.opacity<1&&Se(n,this.options.opacity)},_addTile:function(n,o){var l=this._getTilePos(n),u=this._tileCoordsToKey(n),m=this.createTile(this._wrapCoords(n),c(this._tileReady,this,n));this._initTile(m),this.createTile.length<2&&F(c(this._tileReady,this,n,null,m)),me(m,l),this._tiles[u]={el:m,coords:n,current:!0},o.appendChild(m),this.fire("tileloadstart",{tile:m,coords:n})},_tileReady:function(n,o,l){o&&this.fire("tileerror",{error:o,tile:l,coords:n});var u=this._tileCoordsToKey(n);l=this._tiles[u],l&&(l.loaded=+new Date,this._map._fadeAnimated?(Se(l.el,0),W(this._fadeFrame),this._fadeFrame=F(this._updateOpacity,this)):(l.active=!0,this._pruneTiles()),o||(Lt(l.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:l.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),kt.ielt9||!this._map._fadeAnimated?F(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var o=new J(this._wrapX?p(n.x,this._wrapX):n.x,this._wrapY?p(n.y,this._wrapY):n.y);return o.z=n.z,o},_pxBoundsToTileRange:function(n){var o=this.getTileSize();return new ft(n.min.unscaleBy(o).floor(),n.max.unscaleBy(o).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function D_(n){return new dr(n)}var ws=dr.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,o){this._url=n,o=T(this,o),o.detectRetina&&kt.retina&&o.maxZoom>0?(o.tileSize=Math.floor(o.tileSize/2),o.zoomReverse?(o.zoomOffset--,o.minZoom=Math.min(o.maxZoom,o.minZoom+1)):(o.zoomOffset++,o.maxZoom=Math.max(o.minZoom,o.maxZoom-1)),o.minZoom=Math.max(0,o.minZoom)):o.zoomReverse?o.minZoom=Math.min(o.maxZoom,o.minZoom):o.maxZoom=Math.max(o.minZoom,o.maxZoom),typeof o.subdomains=="string"&&(o.subdomains=o.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,o){return this._url===n&&o===void 0&&(o=!0),this._url=n,o||this.redraw(),this},createTile:function(n,o){var l=document.createElement("img");return te(l,"load",c(this._tileOnLoad,this,o,l)),te(l,"error",c(this._tileOnError,this,o,l)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(l.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(l.referrerPolicy=this.options.referrerPolicy),l.alt="",l.src=this.getTileUrl(n),l},getTileUrl:function(n){var o={r:kt.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var l=this._globalTileRange.max.y-n.y;this.options.tms&&(o.y=l),o["-y"]=l}return D(this._url,r(o,this.options))},_tileOnLoad:function(n,o){kt.ielt9?setTimeout(c(n,this,null,o),0):n(null,o)},_tileOnError:function(n,o,l){var u=this.options.errorTileUrl;u&&o.getAttribute("src")!==u&&(o.src=u),n(l,o)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,o=this.options.maxZoom,l=this.options.zoomReverse,u=this.options.zoomOffset;return l&&(n=o-n),n+u},_getSubdomain:function(n){var o=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[o]},_abortLoading:function(){var n,o;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(o=this._tiles[n].el,o.onload=g,o.onerror=g,!o.complete)){o.src=I;var l=this._tiles[n].coords;gt(o),delete this._tiles[n],this.fire("tileabort",{tile:o,coords:l})}},_removeTile:function(n){var o=this._tiles[n];if(o)return o.el.setAttribute("src",I),dr.prototype._removeTile.call(this,n)},_tileReady:function(n,o,l){if(!(!this._map||l&&l.getAttribute("src")===I))return dr.prototype._tileReady.call(this,n,o,l)}});function Fh(n,o){return new ws(n,o)}var kh=ws.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,o){this._url=n;var l=r({},this.defaultWmsParams);for(var u in o)u in this.options||(l[u]=o[u]);o=T(this,o);var m=o.detectRetina&&kt.retina?2:1,S=this.getTileSize();l.width=S.x*m,l.height=S.y*m,this.wmsParams=l},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var o=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[o]=this._crs.code,ws.prototype.onAdd.call(this,n)},getTileUrl:function(n){var o=this._tileCoordsToNwSe(n),l=this._crs,u=wt(l.project(o[0]),l.project(o[1])),m=u.min,S=u.max,O=(this._wmsVersion>=1.3&&this._crs===Lh?[m.y,m.x,S.y,S.x]:[m.x,m.y,S.x,S.y]).join(","),X=ws.prototype.getTileUrl.call(this,n);return X+v(this.wmsParams,X,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+O},setParams:function(n,o){return r(this.wmsParams,n),o||this.redraw(),this}});function N_(n,o){return new kh(n,o)}ws.WMS=kh,Fh.wms=N_;var pn=Fi.extend({options:{padding:.1},initialize:function(n){T(this,n),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Lt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,o){var l=this._map.getZoomScale(o,this._zoom),u=this._map.getSize().multiplyBy(.5+this.options.padding),m=this._map.project(this._center,o),S=u.multiplyBy(-l).add(m).subtract(this._map._getNewPixelOrigin(n,o));kt.any3d?ee(this._container,S,l):me(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,o=this._map.getSize(),l=this._map.containerPointToLayerPoint(o.multiplyBy(-n)).round();this._bounds=new ft(l,l.add(o.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Bh=pn.extend({options:{tolerance:0},getEvents:function(){var n=pn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){pn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");te(n,"mousemove",this._onMouseMove,this),te(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),te(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){W(this._redrawRequest),delete this._ctx,gt(this._container),Le(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var o in this._layers)n=this._layers[o],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){pn.prototype._update.call(this);var n=this._bounds,o=this._container,l=n.getSize(),u=kt.retina?2:1;me(o,n.min),o.width=u*l.x,o.height=u*l.y,o.style.width=l.x+"px",o.style.height=l.y+"px",kt.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){pn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[d(n)]=n;var o=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=o),this._drawLast=o,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var o=n._order,l=o.next,u=o.prev;l?l.prev=u:this._drawLast=u,u?u.next=l:this._drawFirst=l,delete n._order,delete this._layers[d(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var o=n.options.dashArray.split(/[, ]+/),l=[],u,m;for(m=0;m<o.length;m++){if(u=Number(o[m]),isNaN(u))return;l.push(u)}n.options._dashArray=l}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||F(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var o=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ft,this._redrawBounds.extend(n._pxBounds.min.subtract([o,o])),this._redrawBounds.extend(n._pxBounds.max.add([o,o]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var o=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,o.x,o.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,o=this._redrawBounds;if(this._ctx.save(),o){var l=o.getSize();this._ctx.beginPath(),this._ctx.rect(o.min.x,o.min.y,l.x,l.y),this._ctx.clip()}this._drawing=!0;for(var u=this._drawFirst;u;u=u.next)n=u.layer,(!o||n._pxBounds&&n._pxBounds.intersects(o))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,o){if(this._drawing){var l,u,m,S,O=n._parts,X=O.length,tt=this._ctx;if(X){for(tt.beginPath(),l=0;l<X;l++){for(u=0,m=O[l].length;u<m;u++)S=O[l][u],tt[u?"lineTo":"moveTo"](S.x,S.y);o&&tt.closePath()}this._fillStroke(tt,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var o=n._point,l=this._ctx,u=Math.max(Math.round(n._radius),1),m=(Math.max(Math.round(n._radiusY),1)||u)/u;m!==1&&(l.save(),l.scale(1,m)),l.beginPath(),l.arc(o.x,o.y/m,u,0,Math.PI*2,!1),m!==1&&l.restore(),this._fillStroke(l,n)}},_fillStroke:function(n,o){var l=o.options;l.fill&&(n.globalAlpha=l.fillOpacity,n.fillStyle=l.fillColor||l.color,n.fill(l.fillRule||"evenodd")),l.stroke&&l.weight!==0&&(n.setLineDash&&n.setLineDash(o.options&&o.options._dashArray||[]),n.globalAlpha=l.opacity,n.lineWidth=l.weight,n.strokeStyle=l.color,n.lineCap=l.lineCap,n.lineJoin=l.lineJoin,n.stroke())},_onClick:function(n){for(var o=this._map.mouseEventToLayerPoint(n),l,u,m=this._drawFirst;m;m=m.next)l=m.layer,l.options.interactive&&l._containsPoint(o)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(l))&&(u=l);this._fireEvent(u?[u]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var o=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,o)}},_handleMouseOut:function(n){var o=this._hoveredLayer;o&&(Qt(this._container,"leaflet-interactive"),this._fireEvent([o],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,o){if(!this._mouseHoverThrottled){for(var l,u,m=this._drawFirst;m;m=m.next)l=m.layer,l.options.interactive&&l._containsPoint(o)&&(u=l);u!==this._hoveredLayer&&(this._handleMouseOut(n),u&&(Lt(this._container,"leaflet-interactive"),this._fireEvent([u],n,"mouseover"),this._hoveredLayer=u)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,o,l){this._map._fireDOMEvent(o,l||o.type,n)},_bringToFront:function(n){var o=n._order;if(o){var l=o.next,u=o.prev;if(l)l.prev=u;else return;u?u.next=l:l&&(this._drawFirst=l),o.prev=this._drawLast,this._drawLast.next=o,o.next=null,this._drawLast=o,this._requestRedraw(n)}},_bringToBack:function(n){var o=n._order;if(o){var l=o.next,u=o.prev;if(u)u.next=l;else return;l?l.prev=u:u&&(this._drawLast=u),o.prev=null,o.next=this._drawFirst,this._drawFirst.prev=o,this._drawFirst=o,this._requestRedraw(n)}}});function zh(n){return kt.canvas?new Bh(n):null}var fr=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),O_={_initContainer:function(){this._container=ht("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(pn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var o=n._container=fr("shape");Lt(o,"leaflet-vml-shape "+(this.options.className||"")),o.coordsize="1 1",n._path=fr("path"),o.appendChild(n._path),this._updateStyle(n),this._layers[d(n)]=n},_addPath:function(n){var o=n._container;this._container.appendChild(o),n.options.interactive&&n.addInteractiveTarget(o)},_removePath:function(n){var o=n._container;gt(o),n.removeInteractiveTarget(o),delete this._layers[d(n)]},_updateStyle:function(n){var o=n._stroke,l=n._fill,u=n.options,m=n._container;m.stroked=!!u.stroke,m.filled=!!u.fill,u.stroke?(o||(o=n._stroke=fr("stroke")),m.appendChild(o),o.weight=u.weight+"px",o.color=u.color,o.opacity=u.opacity,u.dashArray?o.dashStyle=N(u.dashArray)?u.dashArray.join(" "):u.dashArray.replace(/( *, *)/g," "):o.dashStyle="",o.endcap=u.lineCap.replace("butt","flat"),o.joinstyle=u.lineJoin):o&&(m.removeChild(o),n._stroke=null),u.fill?(l||(l=n._fill=fr("fill")),m.appendChild(l),l.color=u.fillColor||u.color,l.opacity=u.fillOpacity):l&&(m.removeChild(l),n._fill=null)},_updateCircle:function(n){var o=n._point.round(),l=Math.round(n._radius),u=Math.round(n._radiusY||l);this._setPath(n,n._empty()?"M0 0":"AL "+o.x+","+o.y+" "+l+","+u+" 0,"+65535*360)},_setPath:function(n,o){n._path.v=o},_bringToFront:function(n){Gt(n._container)},_bringToBack:function(n){$t(n._container)}},vo=kt.vml?fr:ue,pr=pn.extend({_initContainer:function(){this._container=vo("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=vo("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){gt(this._container),Le(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){pn.prototype._update.call(this);var n=this._bounds,o=n.getSize(),l=this._container;(!this._svgSize||!this._svgSize.equals(o))&&(this._svgSize=o,l.setAttribute("width",o.x),l.setAttribute("height",o.y)),me(l,n.min),l.setAttribute("viewBox",[n.min.x,n.min.y,o.x,o.y].join(" ")),this.fire("update")}},_initPath:function(n){var o=n._path=vo("path");n.options.className&&Lt(o,n.options.className),n.options.interactive&&Lt(o,"leaflet-interactive"),this._updateStyle(n),this._layers[d(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){gt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[d(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var o=n._path,l=n.options;o&&(l.stroke?(o.setAttribute("stroke",l.color),o.setAttribute("stroke-opacity",l.opacity),o.setAttribute("stroke-width",l.weight),o.setAttribute("stroke-linecap",l.lineCap),o.setAttribute("stroke-linejoin",l.lineJoin),l.dashArray?o.setAttribute("stroke-dasharray",l.dashArray):o.removeAttribute("stroke-dasharray"),l.dashOffset?o.setAttribute("stroke-dashoffset",l.dashOffset):o.removeAttribute("stroke-dashoffset")):o.setAttribute("stroke","none"),l.fill?(o.setAttribute("fill",l.fillColor||l.color),o.setAttribute("fill-opacity",l.fillOpacity),o.setAttribute("fill-rule",l.fillRule||"evenodd")):o.setAttribute("fill","none"))},_updatePoly:function(n,o){this._setPath(n,ae(n._parts,o))},_updateCircle:function(n){var o=n._point,l=Math.max(Math.round(n._radius),1),u=Math.max(Math.round(n._radiusY),1)||l,m="a"+l+","+u+" 0 1,0 ",S=n._empty()?"M0 0":"M"+(o.x-l)+","+o.y+m+l*2+",0 "+m+-l*2+",0 ";this._setPath(n,S)},_setPath:function(n,o){n._path.setAttribute("d",o)},_bringToFront:function(n){Gt(n._path)},_bringToBack:function(n){$t(n._path)}});kt.vml&&pr.include(O_);function Hh(n){return kt.svg||kt.vml?new pr(n):null}de.include({getRenderer:function(n){var o=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return o||(o=this._renderer=this._createRenderer()),this.hasLayer(o)||this.addLayer(o),o},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var o=this._paneRenderers[n];return o===void 0&&(o=this._createRenderer({pane:n}),this._paneRenderers[n]=o),o},_createRenderer:function(n){return this.options.preferCanvas&&zh(n)||Hh(n)}});var Vh=Es.extend({initialize:function(n,o){Es.prototype.initialize.call(this,this._boundsToLatLngs(n),o)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=jt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function U_(n,o){return new Vh(n,o)}pr.create=vo,pr.pointsToPath=ae,fn.geometryToLayer=ho,fn.coordsToLatLng=Ga,fn.coordsToLatLngs=uo,fn.latLngToCoords=Wa,fn.latLngsToCoords=fo,fn.getFeature=Ss,fn.asFeature=po,de.mergeOptions({boxZoom:!0});var Gh=Ki.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){te(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Le(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){gt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ui(),bi(),this._startPoint=this._map.mouseEventToContainerPoint(n),te(document,{contextmenu:Jn,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=ht("div","leaflet-zoom-box",this._container),Lt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var o=new ft(this._point,this._startPoint),l=o.getSize();me(this._box,o.min),this._box.style.width=l.x+"px",this._box.style.height=l.y+"px"},_finish:function(){this._moved&&(gt(this._box),Qt(this._container,"leaflet-crosshair")),wi(),ye(),Le(document,{contextmenu:Jn,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var o=new qt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(o).fire("boxzoomend",{boxZoomBounds:o})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});de.addInitHook("addHandler","boxZoom",Gh),de.mergeOptions({doubleClickZoom:!0});var Wh=Ki.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var o=this._map,l=o.getZoom(),u=o.options.zoomDelta,m=n.originalEvent.shiftKey?l-u:l+u;o.options.doubleClickZoom==="center"?o.setZoom(m):o.setZoomAround(n.containerPoint,m)}});de.addInitHook("addHandler","doubleClickZoom",Wh),de.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Xh=Ki.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new Ln(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Lt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Qt(this._map._container,"leaflet-grab"),Qt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var o=jt(this._map.options.maxBounds);this._offsetLimit=wt(this._map.latLngToContainerPoint(o.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(o.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var o=this._lastTime=+new Date,l=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(l),this._times.push(o),this._prunePositions(o)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),o=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=o.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,o){return n-(n-o)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),o=this._offsetLimit;n.x<o.min.x&&(n.x=this._viscousLimit(n.x,o.min.x)),n.y<o.min.y&&(n.y=this._viscousLimit(n.y,o.min.y)),n.x>o.max.x&&(n.x=this._viscousLimit(n.x,o.max.x)),n.y>o.max.y&&(n.y=this._viscousLimit(n.y,o.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,o=Math.round(n/2),l=this._initialWorldOffset,u=this._draggable._newPos.x,m=(u-o+l)%n+o-l,S=(u+o+l)%n-o-l,O=Math.abs(m+l)<Math.abs(S+l)?m:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=O},_onDragEnd:function(n){var o=this._map,l=o.options,u=!l.inertia||n.noInertia||this._times.length<2;if(o.fire("dragend",n),u)o.fire("moveend");else{this._prunePositions(+new Date);var m=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,O=l.easeLinearity,X=m.multiplyBy(O/S),tt=X.distanceTo([0,0]),ut=Math.min(l.inertiaMaxSpeed,tt),Pt=X.multiplyBy(ut/tt),Wt=ut/(l.inertiaDeceleration*O),oe=Pt.multiplyBy(-Wt/2).round();!oe.x&&!oe.y?o.fire("moveend"):(oe=o._limitOffset(oe,o.options.maxBounds),F(function(){o.panBy(oe,{duration:Wt,easeLinearity:O,noMoveStart:!0,animate:!0})}))}}});de.addInitHook("addHandler","dragging",Xh),de.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Zh=Ki.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),te(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Le(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,o=document.documentElement,l=n.scrollTop||o.scrollTop,u=n.scrollLeft||o.scrollLeft;this._map._container.focus(),window.scrollTo(u,l)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var o=this._panKeys={},l=this.keyCodes,u,m;for(u=0,m=l.left.length;u<m;u++)o[l.left[u]]=[-1*n,0];for(u=0,m=l.right.length;u<m;u++)o[l.right[u]]=[n,0];for(u=0,m=l.down.length;u<m;u++)o[l.down[u]]=[0,n];for(u=0,m=l.up.length;u<m;u++)o[l.up[u]]=[0,-1*n]},_setZoomDelta:function(n){var o=this._zoomKeys={},l=this.keyCodes,u,m;for(u=0,m=l.zoomIn.length;u<m;u++)o[l.zoomIn[u]]=n;for(u=0,m=l.zoomOut.length;u<m;u++)o[l.zoomOut[u]]=-n},_addHooks:function(){te(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Le(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var o=n.keyCode,l=this._map,u;if(o in this._panKeys){if(!l._panAnim||!l._panAnim._inProgress)if(u=this._panKeys[o],n.shiftKey&&(u=ot(u).multiplyBy(3)),l.options.maxBounds&&(u=l._limitOffset(ot(u),l.options.maxBounds)),l.options.worldCopyJump){var m=l.wrapLatLng(l.unproject(l.project(l.getCenter()).add(u)));l.panTo(m)}else l.panBy(u)}else if(o in this._zoomKeys)l.setZoom(l.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[o]);else if(o===27&&l._popup&&l._popup.options.closeOnEscapeKey)l.closePopup();else return;Jn(n)}}});de.addInitHook("addHandler","keyboard",Zh),de.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var qh=Ki.extend({addHooks:function(){te(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Le(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var o=gh(n),l=this._map.options.wheelDebounceTime;this._delta+=o,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var u=Math.max(l-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),u),Jn(n)},_performZoom:function(){var n=this._map,o=n.getZoom(),l=this._map.options.zoomSnap||0;n._stop();var u=this._delta/(this._map.options.wheelPxPerZoomLevel*4),m=4*Math.log(2/(1+Math.exp(-Math.abs(u))))/Math.LN2,S=l?Math.ceil(m/l)*l:m,O=n._limitZoom(o+(this._delta>0?S:-S))-o;this._delta=0,this._startTime=null,O&&(n.options.scrollWheelZoom==="center"?n.setZoom(o+O):n.setZoomAround(this._lastMousePos,o+O))}});de.addInitHook("addHandler","scrollWheelZoom",qh);var F_=600;de.mergeOptions({tapHold:kt.touchNative&&kt.safari&&kt.mobile,tapTolerance:15});var Yh=Ki.extend({addHooks:function(){te(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Le(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var o=n.touches[0];this._startPos=this._newPos=new J(o.clientX,o.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(te(document,"touchend",ti),te(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",o))},this),F_),te(document,"touchend touchcancel contextmenu",this._cancel,this),te(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){Le(document,"touchend",ti),Le(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),Le(document,"touchend touchcancel contextmenu",this._cancel,this),Le(document,"touchmove",this._onMove,this)},_onMove:function(n){var o=n.touches[0];this._newPos=new J(o.clientX,o.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,o){var l=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:o.screenX,screenY:o.screenY,clientX:o.clientX,clientY:o.clientY});l._simulated=!0,o.target.dispatchEvent(l)}});de.addInitHook("addHandler","tapHold",Yh),de.mergeOptions({touchZoom:kt.touch,bounceAtZoomLimits:!0});var $h=Ki.extend({addHooks:function(){Lt(this._map._container,"leaflet-touch-zoom"),te(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Qt(this._map._container,"leaflet-touch-zoom"),Le(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var o=this._map;if(!(!n.touches||n.touches.length!==2||o._animatingZoom||this._zooming)){var l=o.mouseEventToContainerPoint(n.touches[0]),u=o.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=o.getSize()._divideBy(2),this._startLatLng=o.containerPointToLatLng(this._centerPoint),o.options.touchZoom!=="center"&&(this._pinchStartLatLng=o.containerPointToLatLng(l.add(u)._divideBy(2))),this._startDist=l.distanceTo(u),this._startZoom=o.getZoom(),this._moved=!1,this._zooming=!0,o._stop(),te(document,"touchmove",this._onTouchMove,this),te(document,"touchend touchcancel",this._onTouchEnd,this),ti(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var o=this._map,l=o.mouseEventToContainerPoint(n.touches[0]),u=o.mouseEventToContainerPoint(n.touches[1]),m=l.distanceTo(u)/this._startDist;if(this._zoom=o.getScaleZoom(m,this._startZoom),!o.options.bounceAtZoomLimits&&(this._zoom<o.getMinZoom()&&m<1||this._zoom>o.getMaxZoom()&&m>1)&&(this._zoom=o._limitZoom(this._zoom)),o.options.touchZoom==="center"){if(this._center=this._startLatLng,m===1)return}else{var S=l._add(u)._divideBy(2)._subtract(this._centerPoint);if(m===1&&S.x===0&&S.y===0)return;this._center=o.unproject(o.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(o._moveStart(!0,!1),this._moved=!0),W(this._animRequest);var O=c(o._move,o,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=F(O,this,!0),ti(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,W(this._animRequest),Le(document,"touchmove",this._onTouchMove,this),Le(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});de.addInitHook("addHandler","touchZoom",$h),de.BoxZoom=Gh,de.DoubleClickZoom=Wh,de.Drag=Xh,de.Keyboard=Zh,de.ScrollWheelZoom=qh,de.TapHold=Yh,de.TouchZoom=$h,e.Bounds=ft,e.Browser=kt,e.CRS=mt,e.Canvas=Bh,e.Circle=Va,e.CircleMarker=co,e.Class=lt,e.Control=Ui,e.DivIcon=Uh,e.DivOverlay=Ji,e.DomEvent=e_,e.DomUtil=Qm,e.Draggable=Ln,e.Evented=$,e.FeatureGroup=un,e.GeoJSON=fn,e.GridLayer=dr,e.Handler=Ki,e.Icon=Ms,e.ImageOverlay=mo,e.LatLng=Nt,e.LatLngBounds=qt,e.Layer=Fi,e.LayerGroup=ys,e.LineUtil=p_,e.Map=de,e.Marker=lo,e.Mixin=l_,e.Path=Rn,e.Point=J,e.PolyUtil=c_,e.Polygon=Es,e.Polyline=dn,e.Popup=_o,e.PosAnimation=vh,e.Projection=m_,e.Rectangle=Vh,e.Renderer=pn,e.SVG=pr,e.SVGOverlay=Oh,e.TileLayer=ws,e.Tooltip=go,e.Transformation=zt,e.Util=at,e.VideoOverlay=Nh,e.bind=c,e.bounds=wt,e.canvas=zh,e.circle=S_,e.circleMarker=E_,e.control=cr,e.divIcon=I_,e.extend=r,e.featureGroup=x_,e.geoJSON=Dh,e.geoJson=T_,e.gridLayer=D_,e.icon=y_,e.imageOverlay=A_,e.latLng=j,e.latLngBounds=jt,e.layerGroup=v_,e.map=i_,e.marker=M_,e.point=ot,e.polygon=b_,e.polyline=w_,e.popup=L_,e.rectangle=U_,e.setOptions=T,e.stamp=d,e.svg=Hh,e.svgOverlay=P_,e.tileLayer=Fh,e.tooltip=R_,e.transformation=Te,e.version=s,e.videoOverlay=C_;var k_=window.L;e.noConflict=function(){return window.L=k_,this},window.L=e}))})(Sr,Sr.exports)),Sr.exports}var Q_=j_();const Ts=K_(Q_),ss=1e3,rs=1e3;function eu(i,t,e=ss,s=rs){const r=Math.max(0,Math.min(1,Number(i)||0)),c=(1-Math.max(0,Math.min(1,Number(t)||0)))*s,h=r*e;return{lat:c,lng:h}}function tg(i,t=ss,e=rs){const s=i.lng/t,r=1-i.lat/e,a=Math.max(0,Math.min(1,Number(s.toFixed(4)))),c=Math.max(0,Math.min(1,Number(r.toFixed(4))));return{x:a,y:c}}function eg(i,t){if(!i||!t)return 0;const e=Number(t.x)-Number(i.x),s=Number(t.y)-Number(i.y);return Math.abs(e)<1e-6&&Math.abs(s)<1e-6?0:Math.atan2(e,-s)}function qa(i,t){let e=Number(i)||0,s=Number(t)||0;Math.abs(e)>Math.PI&&(e=e*Math.PI/180),Math.abs(s)>Math.PI/2+.01&&(s=s*Math.PI/180);const r=Math.PI/2-.01;return s=Math.max(-r,Math.min(r,s)),e=Math.atan2(Math.sin(e),Math.cos(e)),{yaw:e,pitch:s}}class ig{constructor(t,e={}){this.container=t,this.blueprintUrl=e.blueprintUrl||"./assets/sample_floorplan.svg",this.floorplanId=e.floorplanId||"floorplan-ground",this.onNodeSelect=e.onNodeSelect||(()=>{}),this.onCaptureSuccess=e.onCaptureSuccess||(()=>{}),this.map=null,this.overlay=null,this.markers=new Map,this.nodes=[],this.selectedNodeId=null,this.pendingCoords=null,this.initMap(),this.createModal()}initMap(){const t=[[0,0],[rs,ss]];this.map=Ts.map(this.container,{crs:Ts.CRS.Simple,minZoom:-1.5,maxZoom:3,zoomSnap:.25,zoomDelta:.5,attributionControl:!1,maxBounds:[[-250,-250],[rs+250,ss+250]],maxBoundsViscosity:.85}),this.overlay=Ts.imageOverlay(this.blueprintUrl,t,{opacity:1,interactive:!0}).addTo(this.map),this.map.fitBounds(t,{padding:[20,20]}),this.map.on("click",e=>{const s=tg(e.latlng,ss,rs);this.openCaptureModal(s)})}setNodes(t){this.nodes=t||[],this.markers.forEach(e=>{this.map.removeLayer(e)}),this.markers.clear(),this.nodes.forEach((e,s)=>{const r=this.createNodeMarker(e,s);r.addTo(this.map),this.markers.set(e.id,r)}),this.selectedNodeId&&this.setSelectedNode(this.selectedNodeId)}createNodeMarker(t,e){const s=eu(t.x,t.y,ss,rs),r=t.id===this.selectedNodeId,a=(t.snags||[]).length,c=(t.snags||[]).some(p=>p.severity==="CRITICAL"),h=`
      <div class="node-pin ${r?"selected":""} ${c?"has-critical":""}" data-node-id="${t.id}">
        <div class="node-pulse"></div>
        <div class="node-core">
          <span class="node-idx">${e+1}</span>
        </div>
        ${a>0?`<span class="node-snag-badge ${c?"badge-critical":""}">${a}</span>`:""}
      </div>
    `,d=Ts.divIcon({className:"custom-node-icon-wrapper",html:h,iconSize:[36,36],iconAnchor:[18,18]}),f=Ts.marker([s.lat,s.lng],{icon:d,riseOnHover:!0,title:`Node ${e+1} (${t.id}) - ${a} snags`});return f.on("click",p=>{Ts.DomEvent.stopPropagation(p),this.setSelectedNode(t.id),this.onNodeSelect(t)}),f}setSelectedNode(t){this.selectedNodeId=t,this.markers.forEach((e,s)=>{const r=e.getElement();if(!r)return;const a=r.querySelector(".node-pin");a&&(s===t?a.classList.add("selected"):a.classList.remove("selected"))})}centerOnNode(t){const e=this.nodes.find(s=>s.id===t);if(e){const s=eu(e.x,e.y,ss,rs);this.map.panTo([s.lat,s.lng],{animate:!0,duration:.5})}}createModal(){const t=document.createElement("div");t.className="capture-modal-backdrop hidden",t.innerHTML=`
      <div class="capture-modal-card" role="dialog" aria-modal="true" aria-labelledby="capture-title">
        <div class="modal-header">
          <div class="modal-title-wrap">
            <span class="modal-badge-icon">📷</span>
            <h3 id="capture-title" class="modal-title">Add 360° Capture Here</h3>
          </div>
          <button type="button" class="modal-close-btn" aria-label="Close modal">&times;</button>
        </div>

        <div class="modal-body">
          <p class="modal-subtitle">Register a new site node at normalized blueprint coordinates:</p>
          <div class="coords-display-chip">
            <span class="coord-label">X:</span> <code id="modal-coord-x">0.0000</code>
            <span class="coord-separator">|</span>
            <span class="coord-label">Y:</span> <code id="modal-coord-y">0.0000</code>
          </div>

          <div class="capture-options-grid">
            <!-- Option 1: Hardware OSC Trigger -->
            <div class="capture-card-option">
              <div class="option-header">
                <span class="option-icon">📡</span>
                <h4>Ricoh Theta Capture</h4>
              </div>
              <p class="option-desc">Command connected Ricoh Theta camera over OSC v2.1 (or use bundled fallback sample).</p>
              <button type="button" id="btn-trigger-theta" class="action-btn primary-btn">
                <span>📸 Trigger Capture</span>
              </button>
            </div>

            <!-- Option 2: Upload Equirectangular Image -->
            <div class="capture-card-option">
              <div class="option-header">
                <span class="option-icon">📁</span>
                <h4>Upload 360° Image</h4>
              </div>
              <p class="option-desc">Upload an equirectangular 2:1 JPEG/PNG image from local storage.</p>
              <label for="input-upload-pano" class="action-btn secondary-btn upload-label">
                <span>📂 Choose Image...</span>
                <input type="file" id="input-upload-pano" accept="image/jpeg,image/png" class="visually-hidden" />
              </label>
              <span id="upload-filename" class="upload-filename-text">No file chosen</span>
            </div>
          </div>

          <!-- Loading / Status indicator -->
          <div id="capture-status-box" class="capture-status-box hidden">
            <div class="status-spinner"></div>
            <div class="status-content">
              <div id="capture-status-title" class="status-title">Capturing 360° Panorama...</div>
              <div id="capture-status-sub" class="status-sub">Querying Gemini 3.8 Flash for defect survey...</div>
            </div>
          </div>

          <div id="capture-error-box" class="capture-error-box hidden"></div>
        </div>
      </div>
    `,document.body.appendChild(t),this.modalEl=t,t.querySelector(".modal-close-btn").addEventListener("click",()=>this.closeCaptureModal()),t.addEventListener("click",c=>{c.target===t&&this.closeCaptureModal()}),t.querySelector("#btn-trigger-theta").addEventListener("click",()=>this.executeThetaCapture());const r=t.querySelector("#input-upload-pano"),a=t.querySelector("#upload-filename");r.addEventListener("change",()=>{r.files&&r.files[0]&&(a.textContent=r.files[0].name,this.executeFileCapture(r.files[0]))})}openCaptureModal(t){this.pendingCoords=t,this.modalEl.querySelector("#modal-coord-x").textContent=t.x.toFixed(4),this.modalEl.querySelector("#modal-coord-y").textContent=t.y.toFixed(4),this.modalEl.querySelector("#capture-status-box").classList.add("hidden"),this.modalEl.querySelector("#capture-error-box").classList.add("hidden"),this.modalEl.querySelector("#upload-filename").textContent="No file chosen",this.modalEl.querySelector("#input-upload-pano").value="",this.modalEl.classList.remove("hidden")}closeCaptureModal(){this.pendingCoords=null,this.modalEl.classList.add("hidden")}showStatus(t,e){const s=this.modalEl.querySelector("#capture-status-box"),r=this.modalEl.querySelector("#capture-status-title"),a=this.modalEl.querySelector("#capture-status-sub");this.modalEl.querySelector("#capture-error-box").classList.add("hidden"),r.textContent=t,a.textContent=e,s.classList.remove("hidden")}showError(t){const e=this.modalEl.querySelector("#capture-status-box"),s=this.modalEl.querySelector("#capture-error-box");e.classList.add("hidden"),s.textContent=`Error: ${t}`,s.classList.remove("hidden")}async executeThetaCapture(){if(this.pendingCoords){this.showStatus("Triggering Ricoh Theta Capture...","Communicating over OSC v2.1 -> Inspecting with Gemini 3.8 Flash...");try{const t=await Qh({floorplan_id:this.floorplanId,x:this.pendingCoords.x,y:this.pendingCoords.y});this.closeCaptureModal(),this.onCaptureSuccess(t)}catch(t){this.showError(t.message||"Capture command failed")}}}async executeFileCapture(t){if(!(!this.pendingCoords||!t)){this.showStatus("Uploading 360° Panorama...","Processing equirectangular projection -> Running AI snag detection...");try{const e=new FormData;e.append("floorplan_id",this.floorplanId),e.append("x",String(this.pendingCoords.x)),e.append("y",String(this.pendingCoords.y)),e.append("file",t);const s=await Qh(e);this.closeCaptureModal(),this.onCaptureSuccess(s)}catch(e){this.showError(e.message||"File upload failed")}}}destroy(){this.map&&(this.map.remove(),this.map=null),this.modalEl&&this.modalEl.parentNode&&this.modalEl.parentNode.removeChild(this.modalEl)}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ic="185",ng=0,iu=1,sg=2,Xo=1,rg=2,wr=3,Zn=0,fi=1,Mn=2,Sn=0,Zs=1,nu=2,su=3,ru=4,og=5,os=100,ag=101,lg=102,cg=103,hg=104,ug=200,dg=201,fg=202,pg=203,Al=204,Cl=205,mg=206,_g=207,gg=208,vg=209,xg=210,yg=211,Mg=212,Eg=213,Sg=214,Pl=0,Ll=1,Rl=2,Ks=3,Il=4,Dl=5,Nl=6,Ol=7,xd=0,wg=1,bg=2,an=0,Dc=1,yd=2,Md=3,Ed=4,Sd=5,wd=6,bd=7,Td=300,hs=301,Js=302,Ya=303,$a=304,pa=306,Ul=1e3,En=1001,Fl=1002,ii=1003,Tg=1004,yo=1005,Ge=1006,Ka=1007,zn=1008,Ii=1009,Ad=1010,Cd=1011,Hr=1012,Nc=1013,cn=1014,sn=1015,An=1016,Oc=1017,Uc=1018,Vr=1020,Pd=35902,Ld=35899,Rd=1021,Id=1022,Gi=1023,Cn=1026,ls=1027,Dd=1028,Fc=1029,us=1030,kc=1031,Bc=1033,Zo=33776,qo=33777,Yo=33778,$o=33779,kl=35840,Bl=35841,zl=35842,Hl=35843,Vl=36196,Gl=37492,Wl=37496,Xl=37488,Zl=37489,ta=37490,ql=37491,Yl=37808,$l=37809,Kl=37810,Jl=37811,jl=37812,Ql=37813,tc=37814,ec=37815,ic=37816,nc=37817,sc=37818,rc=37819,oc=37820,ac=37821,lc=36492,cc=36494,hc=36495,uc=36283,dc=36284,ea=36285,fc=36286,Ag=3200,ou=0,Cg=1,kn="",Li="srgb",Gr="srgb-linear",ia="linear",we="srgb",As=7680,au=519,Pg=512,Lg=513,Rg=514,zc=515,Ig=516,Dg=517,Hc=518,Ng=519,lu=35044,cu="300 es",rn=2e3,na=2001;function Og(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ug(){const i=Wr("canvas");return i.style.display="block",i}const hu={};function uu(...i){const t="THREE."+i.shift();console.log(t,...i)}function Nd(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xt(...i){i=Nd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function fe(...i){i=Nd(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function qs(...i){const t=i.join(" ");t in hu||(hu[t]=!0,Xt(...i))}function Fg(i,t,e){return new Promise(function(s,r){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:s()}}setTimeout(a,e)})}const kg={[Pl]:Ll,[Rl]:Nl,[Il]:Ol,[Ks]:Dl,[Ll]:Pl,[Nl]:Rl,[Ol]:Il,[Dl]:Ks};class ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(e)===-1&&s[t].push(e)}hasEventListener(t,e){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(e)!==-1}removeEventListener(t,e){const s=this._listeners;if(s===void 0)return;const r=s[t];if(r!==void 0){const a=r.indexOf(e);a!==-1&&r.splice(a,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const s=e[t.type];if(s!==void 0){t.target=this;const r=s.slice(0);for(let a=0,c=r.length;a<c;a++)r[a].call(this,t);t.target=null}}}const si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let du=1234567;const Ar=Math.PI/180,Xr=180/Math.PI;function er(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(si[i&255]+si[i>>8&255]+si[i>>16&255]+si[i>>24&255]+"-"+si[t&255]+si[t>>8&255]+"-"+si[t>>16&15|64]+si[t>>24&255]+"-"+si[e&63|128]+si[e>>8&255]+"-"+si[e>>16&255]+si[e>>24&255]+si[s&255]+si[s>>8&255]+si[s>>16&255]+si[s>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function Vc(i,t){return(i%t+t)%t}function Bg(i,t,e,s,r){return s+(i-t)*(r-s)/(e-t)}function zg(i,t,e){return i!==t?(e-i)/(t-i):0}function Cr(i,t,e){return(1-e)*i+e*t}function Hg(i,t,e,s){return Cr(i,t,1-Math.exp(-e*s))}function Vg(i,t=1){return t-Math.abs(Vc(i,t*2)-t)}function Gg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wg(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Xg(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Zg(i,t){return i+Math.random()*(t-i)}function qg(i){return i*(.5-Math.random())}function Yg(i){i!==void 0&&(du=i);let t=du+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function $g(i){return i*Ar}function Kg(i){return i*Xr}function Jg(i){return(i&i-1)===0&&i!==0}function jg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tv(i,t,e,s,r){const a=Math.cos,c=Math.sin,h=a(e/2),d=c(e/2),f=a((t+s)/2),p=c((t+s)/2),g=a((t-s)/2),_=c((t-s)/2),M=a((s-t)/2),w=c((s-t)/2);switch(r){case"XYX":i.set(h*p,d*g,d*_,h*f);break;case"YZY":i.set(d*_,h*p,d*g,h*f);break;case"ZXZ":i.set(d*g,d*_,h*p,h*f);break;case"XZX":i.set(h*p,d*w,d*M,h*f);break;case"YXY":i.set(d*M,h*p,d*w,h*f);break;case"ZYZ":i.set(d*w,d*M,h*p,h*f);break;default:Xt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ai(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pe={DEG2RAD:Ar,RAD2DEG:Xr,generateUUID:er,clamp:ce,euclideanModulo:Vc,mapLinear:Bg,inverseLerp:zg,lerp:Cr,damp:Hg,pingpong:Vg,smoothstep:Gg,smootherstep:Wg,randInt:Xg,randFloat:Zg,randFloatSpread:qg,seededRandom:Yg,degToRad:$g,radToDeg:Kg,isPowerOfTwo:Jg,ceilPowerOfTwo:jg,floorPowerOfTwo:Qg,setQuaternionFromProperEuler:tv,normalize:ai,denormalize:Vs},lh=class lh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,s=this.y,r=t.elements;return this.x=r[0]*e+r[3]*s+r[6],this.y=r[1]*e+r[4]*s+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ce(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y;return e*e+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const s=Math.cos(e),r=Math.sin(e),a=this.x-t.x,c=this.y-t.y;return this.x=a*s-c*r+t.x,this.y=a*r+c*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;let he=lh;class $n{constructor(t=0,e=0,s=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=s,this._w=r}static slerpFlat(t,e,s,r,a,c,h){let d=s[r+0],f=s[r+1],p=s[r+2],g=s[r+3],_=a[c+0],M=a[c+1],w=a[c+2],T=a[c+3];if(g!==T||d!==_||f!==M||p!==w){let v=d*_+f*M+p*w+g*T;v<0&&(_=-_,M=-M,w=-w,T=-T,v=-v);let x=1-h;if(v<.9995){const D=Math.acos(v),N=Math.sin(D);x=Math.sin(x*D)/N,h=Math.sin(h*D)/N,d=d*x+_*h,f=f*x+M*h,p=p*x+w*h,g=g*x+T*h}else{d=d*x+_*h,f=f*x+M*h,p=p*x+w*h,g=g*x+T*h;const D=1/Math.sqrt(d*d+f*f+p*p+g*g);d*=D,f*=D,p*=D,g*=D}}t[e]=d,t[e+1]=f,t[e+2]=p,t[e+3]=g}static multiplyQuaternionsFlat(t,e,s,r,a,c){const h=s[r],d=s[r+1],f=s[r+2],p=s[r+3],g=a[c],_=a[c+1],M=a[c+2],w=a[c+3];return t[e]=h*w+p*g+d*M-f*_,t[e+1]=d*w+p*_+f*g-h*M,t[e+2]=f*w+p*M+h*_-d*g,t[e+3]=p*w-h*g-d*_-f*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,s,r){return this._x=t,this._y=e,this._z=s,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const s=t._x,r=t._y,a=t._z,c=t._order,h=Math.cos,d=Math.sin,f=h(s/2),p=h(r/2),g=h(a/2),_=d(s/2),M=d(r/2),w=d(a/2);switch(c){case"XYZ":this._x=_*p*g+f*M*w,this._y=f*M*g-_*p*w,this._z=f*p*w+_*M*g,this._w=f*p*g-_*M*w;break;case"YXZ":this._x=_*p*g+f*M*w,this._y=f*M*g-_*p*w,this._z=f*p*w-_*M*g,this._w=f*p*g+_*M*w;break;case"ZXY":this._x=_*p*g-f*M*w,this._y=f*M*g+_*p*w,this._z=f*p*w+_*M*g,this._w=f*p*g-_*M*w;break;case"ZYX":this._x=_*p*g-f*M*w,this._y=f*M*g+_*p*w,this._z=f*p*w-_*M*g,this._w=f*p*g+_*M*w;break;case"YZX":this._x=_*p*g+f*M*w,this._y=f*M*g+_*p*w,this._z=f*p*w-_*M*g,this._w=f*p*g-_*M*w;break;case"XZY":this._x=_*p*g-f*M*w,this._y=f*M*g-_*p*w,this._z=f*p*w+_*M*g,this._w=f*p*g+_*M*w;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const s=e/2,r=Math.sin(s);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,s=e[0],r=e[4],a=e[8],c=e[1],h=e[5],d=e[9],f=e[2],p=e[6],g=e[10],_=s+h+g;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(p-d)*M,this._y=(a-f)*M,this._z=(c-r)*M}else if(s>h&&s>g){const M=2*Math.sqrt(1+s-h-g);this._w=(p-d)/M,this._x=.25*M,this._y=(r+c)/M,this._z=(a+f)/M}else if(h>g){const M=2*Math.sqrt(1+h-s-g);this._w=(a-f)/M,this._x=(r+c)/M,this._y=.25*M,this._z=(d+p)/M}else{const M=2*Math.sqrt(1+g-s-h);this._w=(c-r)/M,this._x=(a+f)/M,this._y=(d+p)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let s=t.dot(e)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const s=this.angleTo(t);if(s===0)return this;const r=Math.min(1,e/s);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const s=t._x,r=t._y,a=t._z,c=t._w,h=e._x,d=e._y,f=e._z,p=e._w;return this._x=s*p+c*h+r*f-a*d,this._y=r*p+c*d+a*h-s*f,this._z=a*p+c*f+s*d-r*h,this._w=c*p-s*h-r*d-a*f,this._onChangeCallback(),this}slerp(t,e){let s=t._x,r=t._y,a=t._z,c=t._w,h=this.dot(t);h<0&&(s=-s,r=-r,a=-a,c=-c,h=-h);let d=1-e;if(h<.9995){const f=Math.acos(h),p=Math.sin(f);d=Math.sin(d*f)/p,e=Math.sin(e*f)/p,this._x=this._x*d+s*e,this._y=this._y*d+r*e,this._z=this._z*d+a*e,this._w=this._w*d+c*e,this._onChangeCallback()}else this._x=this._x*d+s*e,this._y=this._y*d+r*e,this._z=this._z*d+a*e,this._w=this._w*d+c*e,this.normalize();return this}slerpQuaternions(t,e,s){return this.copy(t).slerp(e,s)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),s=Math.random(),r=Math.sqrt(1-s),a=Math.sqrt(s);return this.set(r*Math.sin(t),r*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ch=class ch{constructor(t=0,e=0,s=0){this.x=t,this.y=e,this.z=s}set(t,e,s){return s===void 0&&(s=this.z),this.x=t,this.y=e,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,s=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[3]*s+a[6]*r,this.y=a[1]*e+a[4]*s+a[7]*r,this.z=a[2]*e+a[5]*s+a[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,s=this.y,r=this.z,a=t.elements,c=1/(a[3]*e+a[7]*s+a[11]*r+a[15]);return this.x=(a[0]*e+a[4]*s+a[8]*r+a[12])*c,this.y=(a[1]*e+a[5]*s+a[9]*r+a[13])*c,this.z=(a[2]*e+a[6]*s+a[10]*r+a[14])*c,this}applyQuaternion(t){const e=this.x,s=this.y,r=this.z,a=t.x,c=t.y,h=t.z,d=t.w,f=2*(c*r-h*s),p=2*(h*e-a*r),g=2*(a*s-c*e);return this.x=e+d*f+c*g-h*p,this.y=s+d*p+h*f-a*g,this.z=r+d*g+a*p-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,s=this.y,r=this.z,a=t.elements;return this.x=a[0]*e+a[4]*s+a[8]*r,this.y=a[1]*e+a[5]*s+a[9]*r,this.z=a[2]*e+a[6]*s+a[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ce(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const s=t.x,r=t.y,a=t.z,c=e.x,h=e.y,d=e.z;return this.x=r*d-a*h,this.y=a*c-s*d,this.z=s*h-r*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const s=t.dot(this)/e;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const s=this.dot(t)/e;return Math.acos(ce(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,s=this.y-t.y,r=this.z-t.z;return e*e+s*s+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,s){const r=Math.sin(e)*t;return this.x=r*Math.sin(s),this.y=Math.cos(e)*t,this.z=r*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,s){return this.x=t*Math.sin(e),this.y=s,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=s,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,s=Math.sqrt(1-e*e);return this.x=s*Math.cos(t),this.y=e,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;let G=ch;const Ja=new G,fu=new $n,hh=class hh{constructor(t,e,s,r,a,c,h,d,f){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,s,r,a,c,h,d,f)}set(t,e,s,r,a,c,h,d,f){const p=this.elements;return p[0]=t,p[1]=r,p[2]=h,p[3]=e,p[4]=a,p[5]=d,p[6]=s,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],this}extractBasis(t,e,s){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,r=e.elements,a=this.elements,c=s[0],h=s[3],d=s[6],f=s[1],p=s[4],g=s[7],_=s[2],M=s[5],w=s[8],T=r[0],v=r[3],x=r[6],D=r[1],N=r[4],A=r[7],I=r[2],P=r[5],U=r[8];return a[0]=c*T+h*D+d*I,a[3]=c*v+h*N+d*P,a[6]=c*x+h*A+d*U,a[1]=f*T+p*D+g*I,a[4]=f*v+p*N+g*P,a[7]=f*x+p*A+g*U,a[2]=_*T+M*D+w*I,a[5]=_*v+M*N+w*P,a[8]=_*x+M*A+w*U,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[1],r=t[2],a=t[3],c=t[4],h=t[5],d=t[6],f=t[7],p=t[8];return e*c*p-e*h*f-s*a*p+s*h*d+r*a*f-r*c*d}invert(){const t=this.elements,e=t[0],s=t[1],r=t[2],a=t[3],c=t[4],h=t[5],d=t[6],f=t[7],p=t[8],g=p*c-h*f,_=h*d-p*a,M=f*a-c*d,w=e*g+s*_+r*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=g*T,t[1]=(r*f-p*s)*T,t[2]=(h*s-r*c)*T,t[3]=_*T,t[4]=(p*e-r*d)*T,t[5]=(r*a-h*e)*T,t[6]=M*T,t[7]=(s*d-f*e)*T,t[8]=(c*e-s*a)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,s,r,a,c,h){const d=Math.cos(a),f=Math.sin(a);return this.set(s*d,s*f,-s*(d*c+f*h)+c+t,-r*f,r*d,-r*(-f*c+d*h)+h+e,0,0,1),this}scale(t,e){return qs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ja.makeScale(t,e)),this}rotate(t){return qs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ja.makeRotation(-t)),this}translate(t,e){return qs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ja.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,s,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,s=t.elements;for(let r=0;r<9;r++)if(e[r]!==s[r])return!1;return!0}fromArray(t,e=0){for(let s=0;s<9;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;let Jt=hh;const ja=new Jt,pu=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mu=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ev(){const i={enabled:!0,workingColorSpace:Gr,spaces:{},convert:function(r,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===we&&(r.r=wn(r.r),r.g=wn(r.g),r.b=wn(r.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===we&&(r.r=Ys(r.r),r.g=Ys(r.g),r.b=Ys(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===kn?ia:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,c){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],s=[.3127,.329];return i.define({[Gr]:{primaries:t,whitePoint:s,transfer:ia,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Li},outputColorSpaceConfig:{drawingBufferColorSpace:Li}},[Li]:{primaries:t,whitePoint:s,transfer:we,toXYZ:pu,fromXYZ:mu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Li}}}),i}const le=ev();function wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Cs;class iv{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Cs===void 0&&(Cs=Wr("canvas")),Cs.width=t.width,Cs.height=t.height;const r=Cs.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),s=Cs}return s.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wr("canvas");e.width=t.width,e.height=t.height;const s=e.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const r=s.getImageData(0,0,t.width,t.height),a=r.data;for(let c=0;c<a.length;c++)a[c]=wn(a[c]/255)*255;return s.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let s=0;s<e.length;s++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[s]=Math.floor(wn(e[s]/255)*255):e[s]=wn(e[s]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nv=0;class Gc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nv++}),this.uuid=er(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let c=0,h=r.length;c<h;c++)r[c].isDataTexture?a.push(Qa(r[c].image)):a.push(Qa(r[c]))}else a=Qa(r);s.url=a}return e||(t.images[this.uuid]=s),s}}function Qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?iv.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}let sv=0;const tl=new G;class Qe extends ds{constructor(t=Qe.DEFAULT_IMAGE,e=Qe.DEFAULT_MAPPING,s=En,r=En,a=Ge,c=zn,h=Gi,d=Ii,f=Qe.DEFAULT_ANISOTROPY,p=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sv++}),this.uuid=er(),this.name="",this.source=new Gc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=s,this.wrapT=r,this.magFilter=a,this.minFilter=c,this.anisotropy=f,this.format=h,this.internalFormat=null,this.type=d,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(tl).x}get height(){return this.source.getSize(tl).y}get depth(){return this.source.getSize(tl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const s=t[e];if(s===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&s&&r.isVector2&&s.isVector2||r&&s&&r.isVector3&&s.isVector3||r&&s&&r.isMatrix3&&s.isMatrix3?r.copy(s):this[e]=s}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),e||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ul:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case Fl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ul:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case Fl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Qe.DEFAULT_IMAGE=null;Qe.DEFAULT_MAPPING=Td;Qe.DEFAULT_ANISOTROPY=1;const uh=class uh{constructor(t=0,e=0,s=0,r=1){this.x=t,this.y=e,this.z=s,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,s,r){return this.x=t,this.y=e,this.z=s,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,s=this.y,r=this.z,a=this.w,c=t.elements;return this.x=c[0]*e+c[4]*s+c[8]*r+c[12]*a,this.y=c[1]*e+c[5]*s+c[9]*r+c[13]*a,this.z=c[2]*e+c[6]*s+c[10]*r+c[14]*a,this.w=c[3]*e+c[7]*s+c[11]*r+c[15]*a,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,s,r,a;const d=t.elements,f=d[0],p=d[4],g=d[8],_=d[1],M=d[5],w=d[9],T=d[2],v=d[6],x=d[10];if(Math.abs(p-_)<.01&&Math.abs(g-T)<.01&&Math.abs(w-v)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+T)<.1&&Math.abs(w+v)<.1&&Math.abs(f+M+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const N=(f+1)/2,A=(M+1)/2,I=(x+1)/2,P=(p+_)/4,U=(g+T)/4,E=(w+v)/4;return N>A&&N>I?N<.01?(s=0,r=.707106781,a=.707106781):(s=Math.sqrt(N),r=P/s,a=U/s):A>I?A<.01?(s=.707106781,r=0,a=.707106781):(r=Math.sqrt(A),s=P/r,a=E/r):I<.01?(s=.707106781,r=.707106781,a=0):(a=Math.sqrt(I),s=U/a,r=E/a),this.set(s,r,a,e),this}let D=Math.sqrt((v-w)*(v-w)+(g-T)*(g-T)+(_-p)*(_-p));return Math.abs(D)<.001&&(D=1),this.x=(v-w)/D,this.y=(g-T)/D,this.z=(_-p)/D,this.w=Math.acos((f+M+x-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ce(s,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,s){return this.x=t.x+(e.x-t.x)*s,this.y=t.y+(e.y-t.y)*s,this.z=t.z+(e.z-t.z)*s,this.w=t.w+(e.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;let Fe=uh;class rv extends ds{constructor(t=1,e=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},s),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=s.depth,this.scissor=new Fe(0,0,t,e),this.scissorTest=!1,this.viewport=new Fe(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:s.depth},a=new Qe(r),c=s.count;for(let h=0;h<c;h++)this.textures[h]=a.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview,this.useArrayDepthTexture=s.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,s=1){if(this.width!==t||this.height!==e||this.depth!==s){this.width=t,this.height=e,this.depth=s;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=s,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,s=t.textures.length;e<s;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Gc(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends rv{constructor(t=1,e=1,s={}){super(t,e,s),this.isWebGLRenderTarget=!0}}class Od extends Qe{constructor(t=null,e=1,s=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:s,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ov extends Qe{constructor(t=null,e=1,s=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:s,depth:r},this.magFilter=ii,this.minFilter=ii,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const da=class da{constructor(t,e,s,r,a,c,h,d,f,p,g,_,M,w,T,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,s,r,a,c,h,d,f,p,g,_,M,w,T,v)}set(t,e,s,r,a,c,h,d,f,p,g,_,M,w,T,v){const x=this.elements;return x[0]=t,x[4]=e,x[8]=s,x[12]=r,x[1]=a,x[5]=c,x[9]=h,x[13]=d,x[2]=f,x[6]=p,x[10]=g,x[14]=_,x[3]=M,x[7]=w,x[11]=T,x[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new da().fromArray(this.elements)}copy(t){const e=this.elements,s=t.elements;return e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],e[4]=s[4],e[5]=s[5],e[6]=s[6],e[7]=s[7],e[8]=s[8],e[9]=s[9],e[10]=s[10],e[11]=s[11],e[12]=s[12],e[13]=s[13],e[14]=s[14],e[15]=s[15],this}copyPosition(t){const e=this.elements,s=t.elements;return e[12]=s[12],e[13]=s[13],e[14]=s[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,s){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,e,s){return this.set(t.x,e.x,s.x,0,t.y,e.y,s.y,0,t.z,e.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,s=t.elements,r=1/Ps.setFromMatrixColumn(t,0).length(),a=1/Ps.setFromMatrixColumn(t,1).length(),c=1/Ps.setFromMatrixColumn(t,2).length();return e[0]=s[0]*r,e[1]=s[1]*r,e[2]=s[2]*r,e[3]=0,e[4]=s[4]*a,e[5]=s[5]*a,e[6]=s[6]*a,e[7]=0,e[8]=s[8]*c,e[9]=s[9]*c,e[10]=s[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,s=t.x,r=t.y,a=t.z,c=Math.cos(s),h=Math.sin(s),d=Math.cos(r),f=Math.sin(r),p=Math.cos(a),g=Math.sin(a);if(t.order==="XYZ"){const _=c*p,M=c*g,w=h*p,T=h*g;e[0]=d*p,e[4]=-d*g,e[8]=f,e[1]=M+w*f,e[5]=_-T*f,e[9]=-h*d,e[2]=T-_*f,e[6]=w+M*f,e[10]=c*d}else if(t.order==="YXZ"){const _=d*p,M=d*g,w=f*p,T=f*g;e[0]=_+T*h,e[4]=w*h-M,e[8]=c*f,e[1]=c*g,e[5]=c*p,e[9]=-h,e[2]=M*h-w,e[6]=T+_*h,e[10]=c*d}else if(t.order==="ZXY"){const _=d*p,M=d*g,w=f*p,T=f*g;e[0]=_-T*h,e[4]=-c*g,e[8]=w+M*h,e[1]=M+w*h,e[5]=c*p,e[9]=T-_*h,e[2]=-c*f,e[6]=h,e[10]=c*d}else if(t.order==="ZYX"){const _=c*p,M=c*g,w=h*p,T=h*g;e[0]=d*p,e[4]=w*f-M,e[8]=_*f+T,e[1]=d*g,e[5]=T*f+_,e[9]=M*f-w,e[2]=-f,e[6]=h*d,e[10]=c*d}else if(t.order==="YZX"){const _=c*d,M=c*f,w=h*d,T=h*f;e[0]=d*p,e[4]=T-_*g,e[8]=w*g+M,e[1]=g,e[5]=c*p,e[9]=-h*p,e[2]=-f*p,e[6]=M*g+w,e[10]=_-T*g}else if(t.order==="XZY"){const _=c*d,M=c*f,w=h*d,T=h*f;e[0]=d*p,e[4]=-g,e[8]=f*p,e[1]=_*g+T,e[5]=c*p,e[9]=M*g-w,e[2]=w*g-M,e[6]=h*p,e[10]=T*g+_}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(av,t,lv)}lookAt(t,e,s){const r=this.elements;return vi.subVectors(t,e),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),In.crossVectors(s,vi),In.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),In.crossVectors(s,vi)),In.normalize(),Mo.crossVectors(vi,In),r[0]=In.x,r[4]=Mo.x,r[8]=vi.x,r[1]=In.y,r[5]=Mo.y,r[9]=vi.y,r[2]=In.z,r[6]=Mo.z,r[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const s=t.elements,r=e.elements,a=this.elements,c=s[0],h=s[4],d=s[8],f=s[12],p=s[1],g=s[5],_=s[9],M=s[13],w=s[2],T=s[6],v=s[10],x=s[14],D=s[3],N=s[7],A=s[11],I=s[15],P=r[0],U=r[4],E=r[8],R=r[12],H=r[1],F=r[5],W=r[9],at=r[13],lt=r[2],Y=r[6],it=r[10],$=r[14],J=r[3],pt=r[7],ot=r[11],ft=r[15];return a[0]=c*P+h*H+d*lt+f*J,a[4]=c*U+h*F+d*Y+f*pt,a[8]=c*E+h*W+d*it+f*ot,a[12]=c*R+h*at+d*$+f*ft,a[1]=p*P+g*H+_*lt+M*J,a[5]=p*U+g*F+_*Y+M*pt,a[9]=p*E+g*W+_*it+M*ot,a[13]=p*R+g*at+_*$+M*ft,a[2]=w*P+T*H+v*lt+x*J,a[6]=w*U+T*F+v*Y+x*pt,a[10]=w*E+T*W+v*it+x*ot,a[14]=w*R+T*at+v*$+x*ft,a[3]=D*P+N*H+A*lt+I*J,a[7]=D*U+N*F+A*Y+I*pt,a[11]=D*E+N*W+A*it+I*ot,a[15]=D*R+N*at+A*$+I*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],s=t[4],r=t[8],a=t[12],c=t[1],h=t[5],d=t[9],f=t[13],p=t[2],g=t[6],_=t[10],M=t[14],w=t[3],T=t[7],v=t[11],x=t[15],D=d*M-f*_,N=h*M-f*g,A=h*_-d*g,I=c*M-f*p,P=c*_-d*p,U=c*g-h*p;return e*(T*D-v*N+x*A)-s*(w*D-v*I+x*P)+r*(w*N-T*I+x*U)-a*(w*A-T*P+v*U)}determinantAffine(){const t=this.elements,e=t[0],s=t[4],r=t[8],a=t[1],c=t[5],h=t[9],d=t[2],f=t[6],p=t[10];return e*(c*p-h*f)-s*(a*p-h*d)+r*(a*f-c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,s){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=s),this}invert(){const t=this.elements,e=t[0],s=t[1],r=t[2],a=t[3],c=t[4],h=t[5],d=t[6],f=t[7],p=t[8],g=t[9],_=t[10],M=t[11],w=t[12],T=t[13],v=t[14],x=t[15],D=e*h-s*c,N=e*d-r*c,A=e*f-a*c,I=s*d-r*h,P=s*f-a*h,U=r*f-a*d,E=p*T-g*w,R=p*v-_*w,H=p*x-M*w,F=g*v-_*T,W=g*x-M*T,at=_*x-M*v,lt=D*at-N*W+A*F+I*H-P*R+U*E;if(lt===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/lt;return t[0]=(h*at-d*W+f*F)*Y,t[1]=(r*W-s*at-a*F)*Y,t[2]=(T*U-v*P+x*I)*Y,t[3]=(_*P-g*U-M*I)*Y,t[4]=(d*H-c*at-f*R)*Y,t[5]=(e*at-r*H+a*R)*Y,t[6]=(v*A-w*U-x*N)*Y,t[7]=(p*U-_*A+M*N)*Y,t[8]=(c*W-h*H+f*E)*Y,t[9]=(s*H-e*W-a*E)*Y,t[10]=(w*P-T*A+x*D)*Y,t[11]=(g*A-p*P-M*D)*Y,t[12]=(h*R-c*F-d*E)*Y,t[13]=(e*F-s*R+r*E)*Y,t[14]=(T*N-w*I-v*D)*Y,t[15]=(p*I-g*N+_*D)*Y,this}scale(t){const e=this.elements,s=t.x,r=t.y,a=t.z;return e[0]*=s,e[4]*=r,e[8]*=a,e[1]*=s,e[5]*=r,e[9]*=a,e[2]*=s,e[6]*=r,e[10]*=a,e[3]*=s,e[7]*=r,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,s,r))}makeTranslation(t,e,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,s,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,e,-s,0,0,s,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,0,s,0,0,1,0,0,-s,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),s=Math.sin(t);return this.set(e,-s,0,0,s,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const s=Math.cos(e),r=Math.sin(e),a=1-s,c=t.x,h=t.y,d=t.z,f=a*c,p=a*h;return this.set(f*c+s,f*h-r*d,f*d+r*h,0,f*h+r*d,p*h+s,p*d-r*c,0,f*d-r*h,p*d+r*c,a*d*d+s,0,0,0,0,1),this}makeScale(t,e,s){return this.set(t,0,0,0,0,e,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,e,s,r,a,c){return this.set(1,s,a,0,t,1,c,0,e,r,1,0,0,0,0,1),this}compose(t,e,s){const r=this.elements,a=e._x,c=e._y,h=e._z,d=e._w,f=a+a,p=c+c,g=h+h,_=a*f,M=a*p,w=a*g,T=c*p,v=c*g,x=h*g,D=d*f,N=d*p,A=d*g,I=s.x,P=s.y,U=s.z;return r[0]=(1-(T+x))*I,r[1]=(M+A)*I,r[2]=(w-N)*I,r[3]=0,r[4]=(M-A)*P,r[5]=(1-(_+x))*P,r[6]=(v+D)*P,r[7]=0,r[8]=(w+N)*U,r[9]=(v-D)*U,r[10]=(1-(_+T))*U,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,s){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const a=this.determinantAffine();if(a===0)return s.set(1,1,1),e.identity(),this;let c=Ps.set(r[0],r[1],r[2]).length();const h=Ps.set(r[4],r[5],r[6]).length(),d=Ps.set(r[8],r[9],r[10]).length();a<0&&(c=-c),ki.copy(this);const f=1/c,p=1/h,g=1/d;return ki.elements[0]*=f,ki.elements[1]*=f,ki.elements[2]*=f,ki.elements[4]*=p,ki.elements[5]*=p,ki.elements[6]*=p,ki.elements[8]*=g,ki.elements[9]*=g,ki.elements[10]*=g,e.setFromRotationMatrix(ki),s.x=c,s.y=h,s.z=d,this}makePerspective(t,e,s,r,a,c,h=rn,d=!1){const f=this.elements,p=2*a/(e-t),g=2*a/(s-r),_=(e+t)/(e-t),M=(s+r)/(s-r);let w,T;if(d)w=a/(c-a),T=c*a/(c-a);else if(h===rn)w=-(c+a)/(c-a),T=-2*c*a/(c-a);else if(h===na)w=-c/(c-a),T=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return f[0]=p,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=g,f[9]=M,f[13]=0,f[2]=0,f[6]=0,f[10]=w,f[14]=T,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,s,r,a,c,h=rn,d=!1){const f=this.elements,p=2/(e-t),g=2/(s-r),_=-(e+t)/(e-t),M=-(s+r)/(s-r);let w,T;if(d)w=1/(c-a),T=c/(c-a);else if(h===rn)w=-2/(c-a),T=-(c+a)/(c-a);else if(h===na)w=-1/(c-a),T=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return f[0]=p,f[4]=0,f[8]=0,f[12]=_,f[1]=0,f[5]=g,f[9]=0,f[13]=M,f[2]=0,f[6]=0,f[10]=w,f[14]=T,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,s=t.elements;for(let r=0;r<16;r++)if(e[r]!==s[r])return!1;return!0}fromArray(t,e=0){for(let s=0;s<16;s++)this.elements[s]=t[s+e];return this}toArray(t=[],e=0){const s=this.elements;return t[e]=s[0],t[e+1]=s[1],t[e+2]=s[2],t[e+3]=s[3],t[e+4]=s[4],t[e+5]=s[5],t[e+6]=s[6],t[e+7]=s[7],t[e+8]=s[8],t[e+9]=s[9],t[e+10]=s[10],t[e+11]=s[11],t[e+12]=s[12],t[e+13]=s[13],t[e+14]=s[14],t[e+15]=s[15],t}};da.prototype.isMatrix4=!0;let Oe=da;const Ps=new G,ki=new Oe,av=new G(0,0,0),lv=new G(1,1,1),In=new G,Mo=new G,vi=new G,_u=new Oe,gu=new $n;class qn{constructor(t=0,e=0,s=0,r=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=s,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,s,r=this._order){return this._x=t,this._y=e,this._z=s,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,s=!0){const r=t.elements,a=r[0],c=r[4],h=r[8],d=r[1],f=r[5],p=r[9],g=r[2],_=r[6],M=r[10];switch(e){case"XYZ":this._y=Math.asin(ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,M),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,a),this._z=0);break;case"ZXY":this._x=Math.asin(ce(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-ce(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,a)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(h,a)):(this._x=Math.atan2(-p,M),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,s){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,s)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gu.setFromEuler(this),this.setFromQuaternion(gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class Wc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let cv=0;const vu=new G,Ls=new $n,mn=new Oe,Eo=new G,mr=new G,hv=new G,uv=new $n,xu=new G(1,0,0),yu=new G(0,1,0),Mu=new G(0,0,1),Eu={type:"added"},dv={type:"removed"},Rs={type:"childadded",child:null},el={type:"childremoved",child:null};class pi extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pi.DEFAULT_UP.clone();const t=new G,e=new qn,s=new $n,r=new G(1,1,1);function a(){s.setFromEuler(e,!1)}function c(){e.setFromQuaternion(s,void 0,!1)}e._onChange(a),s._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Oe},normalMatrix:{value:new Jt}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=pi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(t,e){return Ls.setFromAxisAngle(t,e),this.quaternion.premultiply(Ls),this}rotateX(t){return this.rotateOnAxis(xu,t)}rotateY(t){return this.rotateOnAxis(yu,t)}rotateZ(t){return this.rotateOnAxis(Mu,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xu,t)}translateY(t){return this.translateOnAxis(yu,t)}translateZ(t){return this.translateOnAxis(Mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,s){t.isVector3?Eo.copy(t):Eo.set(t,e,s);const r=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(mr,Eo,this.up):mn.lookAt(Eo,mr,this.up),this.quaternion.setFromRotationMatrix(mn),r&&(mn.extractRotation(r.matrixWorld),Ls.setFromRotationMatrix(mn),this.quaternion.premultiply(Ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(fe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Eu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):fe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dv),el.child=t,this.dispatchEvent(el),el.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Eu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let s=0,r=this.children.length;s<r;s++){const c=this.children[s].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,s=[]){this[t]===e&&s.push(this);const r=this.children;for(let a=0,c=r.length;a<c;a++)r[a].getObjectsByProperty(t,e,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,t,hv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,uv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,s=t.y,r=t.z,a=this.matrix.elements;a[12]+=e-a[0]*e-a[4]*s-a[8]*r,a[13]+=s-a[1]*e-a[5]*s-a[9]*r,a[14]+=r-a[2]*e-a[6]*s-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let s=0,r=e.length;s<r;s++)e[s].updateMatrixWorld(t)}updateWorldMatrix(t,e,s=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||s)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,s=!0),e===!0){const a=this.children;for(let c=0,h=a.length;c<h;c++)a[c].updateWorldMatrix(!1,!0,s)}}toJSON(t){const e=t===void 0||typeof t=="string",s={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(h=>({...h})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let f=0,p=d.length;f<p;f++){const g=d[f];a(t.shapes,g)}else a(t.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,f=this.material.length;d<f;d++)h.push(a(t.materials,this.material[d]));r.material=h}else r.material=a(t.materials,this.material);if(this.children.length>0){r.children=[];for(let h=0;h<this.children.length;h++)r.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];r.animations.push(a(t.animations,d))}}if(e){const h=c(t.geometries),d=c(t.materials),f=c(t.textures),p=c(t.images),g=c(t.shapes),_=c(t.skeletons),M=c(t.animations),w=c(t.nodes);h.length>0&&(s.geometries=h),d.length>0&&(s.materials=d),f.length>0&&(s.textures=f),p.length>0&&(s.images=p),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),M.length>0&&(s.animations=M),w.length>0&&(s.nodes=w)}return s.object=r,s;function c(h){const d=[];for(const f in h){const p=h[f];delete p.metadata,d.push(p)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let s=0;s<t.children.length;s++){const r=t.children[s];this.add(r.clone())}return this}}pi.DEFAULT_UP=new G(0,1,0);pi.DEFAULT_MATRIX_AUTO_UPDATE=!0;pi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class cs extends pi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fv={type:"move"};class il{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const s of t.hand.values())this._getHandJoint(e,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,s){let r=null,a=null,c=null;const h=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(const T of t.hand.values()){const v=e.getJointPose(T,s),x=this._getHandJoint(f,T);v!==null&&(x.matrix.fromArray(v.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=v.radius),x.visible=v!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],_=p.position.distanceTo(g.position),M=.02,w=.005;f.inputState.pinching&&_>M+w?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&_<=M-w&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,s),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:t,target:this})));h!==null&&(r=e.getPose(t.targetRaySpace,s),r===null&&a!==null&&(r=a),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(fv)))}return h!==null&&(h.visible=r!==null),d!==null&&(d.visible=a!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const s=new cs;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[e.jointName]=s,t.add(s)}return t.joints[e.jointName]}}const Ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},So={h:0,s:0,l:0};function nl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class xe{constructor(t,e,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,s)}set(t,e,s){if(e===void 0&&s===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,s,r=le.workingColorSpace){return this.r=t,this.g=e,this.b=s,le.colorSpaceToWorking(this,r),this}setHSL(t,e,s,r=le.workingColorSpace){if(t=Vc(t,1),e=ce(e,0,1),s=ce(s,0,1),e===0)this.r=this.g=this.b=s;else{const a=s<=.5?s*(1+e):s+e-s*e,c=2*s-a;this.r=nl(c,a,t+1/3),this.g=nl(c,a,t),this.b=nl(c,a,t-1/3)}return le.colorSpaceToWorking(this,r),this}setStyle(t,e=Li){function s(a){a!==void 0&&parseFloat(a)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const c=r[1],h=r[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=r[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(a,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Li){const s=Ud[t.toLowerCase()];return s!==void 0?this.setHex(s,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wn(t.r),this.g=wn(t.g),this.b=wn(t.b),this}copyLinearToSRGB(t){return this.r=Ys(t.r),this.g=Ys(t.g),this.b=Ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Li){return le.workingToColorSpace(ri.copy(this),t),Math.round(ce(ri.r*255,0,255))*65536+Math.round(ce(ri.g*255,0,255))*256+Math.round(ce(ri.b*255,0,255))}getHexString(t=Li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(ri.copy(this),e);const s=ri.r,r=ri.g,a=ri.b,c=Math.max(s,r,a),h=Math.min(s,r,a);let d,f;const p=(h+c)/2;if(h===c)d=0,f=0;else{const g=c-h;switch(f=p<=.5?g/(c+h):g/(2-c-h),c){case s:d=(r-a)/g+(r<a?6:0);break;case r:d=(a-s)/g+2;break;case a:d=(s-r)/g+4;break}d/=6}return t.h=d,t.s=f,t.l=p,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(ri.copy(this),e),t.r=ri.r,t.g=ri.g,t.b=ri.b,t}getStyle(t=Li){le.workingToColorSpace(ri.copy(this),t);const e=ri.r,s=ri.g,r=ri.b;return t!==Li?`color(${t} ${e.toFixed(3)} ${s.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(s*255)},${Math.round(r*255)})`}offsetHSL(t,e,s){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,s){return this.r=t.r+(e.r-t.r)*s,this.g=t.g+(e.g-t.g)*s,this.b=t.b+(e.b-t.b)*s,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(So);const s=Cr(Dn.h,So.h,e),r=Cr(Dn.s,So.s,e),a=Cr(Dn.l,So.l,e);return this.setHSL(s,r,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,s=this.g,r=this.b,a=t.elements;return this.r=a[0]*e+a[3]*s+a[6]*r,this.g=a[1]*e+a[4]*s+a[7]*r,this.b=a[2]*e+a[5]*s+a[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ri=new xe;xe.NAMES=Ud;class pc extends pi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Bi=new G,_n=new G,sl=new G,gn=new G,Is=new G,Ds=new G,Su=new G,rl=new G,ol=new G,al=new G,ll=new Fe,cl=new Fe,hl=new Fe;class Vi{constructor(t=new G,e=new G,s=new G){this.a=t,this.b=e,this.c=s}static getNormal(t,e,s,r){r.subVectors(s,e),Bi.subVectors(t,e),r.cross(Bi);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(t,e,s,r,a){Bi.subVectors(r,e),_n.subVectors(s,e),sl.subVectors(t,e);const c=Bi.dot(Bi),h=Bi.dot(_n),d=Bi.dot(sl),f=_n.dot(_n),p=_n.dot(sl),g=c*f-h*h;if(g===0)return a.set(0,0,0),null;const _=1/g,M=(f*d-h*p)*_,w=(c*p-h*d)*_;return a.set(1-M-w,w,M)}static containsPoint(t,e,s,r){return this.getBarycoord(t,e,s,r,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,s,r,a,c,h,d){return this.getBarycoord(t,e,s,r,gn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,gn.x),d.addScaledVector(c,gn.y),d.addScaledVector(h,gn.z),d)}static getInterpolatedAttribute(t,e,s,r,a,c){return ll.setScalar(0),cl.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(t,e),cl.fromBufferAttribute(t,s),hl.fromBufferAttribute(t,r),c.setScalar(0),c.addScaledVector(ll,a.x),c.addScaledVector(cl,a.y),c.addScaledVector(hl,a.z),c}static isFrontFacing(t,e,s,r){return Bi.subVectors(s,e),_n.subVectors(t,e),Bi.cross(_n).dot(r)<0}set(t,e,s){return this.a.copy(t),this.b.copy(e),this.c.copy(s),this}setFromPointsAndIndices(t,e,s,r){return this.a.copy(t[e]),this.b.copy(t[s]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,s,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bi.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),Bi.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Vi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,s,r,a){return Vi.getInterpolation(t,this.a,this.b,this.c,e,s,r,a)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const s=this.a,r=this.b,a=this.c;let c,h;Is.subVectors(r,s),Ds.subVectors(a,s),rl.subVectors(t,s);const d=Is.dot(rl),f=Ds.dot(rl);if(d<=0&&f<=0)return e.copy(s);ol.subVectors(t,r);const p=Is.dot(ol),g=Ds.dot(ol);if(p>=0&&g<=p)return e.copy(r);const _=d*g-p*f;if(_<=0&&d>=0&&p<=0)return c=d/(d-p),e.copy(s).addScaledVector(Is,c);al.subVectors(t,a);const M=Is.dot(al),w=Ds.dot(al);if(w>=0&&M<=w)return e.copy(a);const T=M*f-d*w;if(T<=0&&f>=0&&w<=0)return h=f/(f-w),e.copy(s).addScaledVector(Ds,h);const v=p*w-M*g;if(v<=0&&g-p>=0&&M-w>=0)return Su.subVectors(a,r),h=(g-p)/(g-p+(M-w)),e.copy(r).addScaledVector(Su,h);const x=1/(v+T+_);return c=T*x,h=_*x,e.copy(s).addScaledVector(Is,c).addScaledVector(Ds,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ir{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e+=3)this.expandByPoint(zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,s=t.count;e<s;e++)this.expandByPoint(zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,s=t.length;e<s;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const s=zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const a=s.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let c=0,h=a.count;c<h;c++)t.isMesh===!0?t.getVertexPosition(c,zi):zi.fromBufferAttribute(a,c),zi.applyMatrix4(t.matrixWorld),this.expandByPoint(zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wo.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wo.copy(s.boundingBox)),wo.applyMatrix4(t.matrixWorld),this.union(wo)}const r=t.children;for(let a=0,c=r.length;a<c;a++)this.expandByObject(r[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zi),zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,s;return t.normal.x>0?(e=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),e<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(_r),bo.subVectors(this.max,_r),Ns.subVectors(t.a,_r),Os.subVectors(t.b,_r),Us.subVectors(t.c,_r),Nn.subVectors(Os,Ns),On.subVectors(Us,Os),Qn.subVectors(Ns,Us);let e=[0,-Nn.z,Nn.y,0,-On.z,On.y,0,-Qn.z,Qn.y,Nn.z,0,-Nn.x,On.z,0,-On.x,Qn.z,0,-Qn.x,-Nn.y,Nn.x,0,-On.y,On.x,0,-Qn.y,Qn.x,0];return!ul(e,Ns,Os,Us,bo)||(e=[1,0,0,0,1,0,0,0,1],!ul(e,Ns,Os,Us,bo))?!1:(To.crossVectors(Nn,On),e=[To.x,To.y,To.z],ul(e,Ns,Os,Us,bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const vn=[new G,new G,new G,new G,new G,new G,new G,new G],zi=new G,wo=new ir,Ns=new G,Os=new G,Us=new G,Nn=new G,On=new G,Qn=new G,_r=new G,bo=new G,To=new G,ts=new G;function ul(i,t,e,s,r){for(let a=0,c=i.length-3;a<=c;a+=3){ts.fromArray(i,a);const h=r.x*Math.abs(ts.x)+r.y*Math.abs(ts.y)+r.z*Math.abs(ts.z),d=t.dot(ts),f=e.dot(ts),p=s.dot(ts);if(Math.max(-Math.max(d,f,p),Math.min(d,f,p))>h)return!1}return!0}const He=new G,Ao=new he;let pv=0;class ln extends ds{constructor(t,e,s=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pv++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=s,this.usage=lu,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,s){t*=this.itemSize,s*=e.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[t+r]=e.array[s+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,s=this.count;e<s;e++)Ao.fromBufferAttribute(this,e),Ao.applyMatrix3(t),this.setXY(e,Ao.x,Ao.y);else if(this.itemSize===3)for(let e=0,s=this.count;e<s;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,s=this.count;e<s;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,s=this.count;e<s;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,s=this.count;e<s;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let s=this.array[t*this.itemSize+e];return this.normalized&&(s=Vs(s,this.array)),s}setComponent(t,e,s){return this.normalized&&(s=ai(s,this.array)),this.array[t*this.itemSize+e]=s,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ai(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ai(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ai(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ai(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,s){return t*=this.itemSize,this.normalized&&(e=ai(e,this.array),s=ai(s,this.array)),this.array[t+0]=e,this.array[t+1]=s,this}setXYZ(t,e,s,r){return t*=this.itemSize,this.normalized&&(e=ai(e,this.array),s=ai(s,this.array),r=ai(r,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=r,this}setXYZW(t,e,s,r,a){return t*=this.itemSize,this.normalized&&(e=ai(e,this.array),s=ai(s,this.array),r=ai(r,this.array),a=ai(a,this.array)),this.array[t+0]=e,this.array[t+1]=s,this.array[t+2]=r,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lu&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Fd extends ln{constructor(t,e,s){super(new Uint16Array(t),e,s)}}class kd extends ln{constructor(t,e,s){super(new Uint32Array(t),e,s)}}class Di extends ln{constructor(t,e,s){super(new Float32Array(t),e,s)}}const mv=new ir,gr=new G,dl=new G;class Xc{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const s=this.center;e!==void 0?s.copy(e):mv.setFromPoints(t).getCenter(s);let r=0;for(let a=0,c=t.length;a<c;a++)r=Math.max(r,s.distanceToSquared(t[a]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const s=this.center.distanceToSquared(t);return e.copy(t),s>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const s=Math.sqrt(e),r=(s-this.radius)*.5;this.center.addScaledVector(gr,r/s),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(dl)),this.expandByPoint(gr.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let _v=0;const Ci=new Oe,fl=new pi,Fs=new G,xi=new ir,vr=new ir,$e=new G;class hn extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Og(t)?kd:Fd)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,s=0){this.groups.push({start:t,count:e,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const a=new Jt().getNormalMatrix(t);s.applyNormalMatrix(a),s.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ci.makeRotationFromQuaternion(t),this.applyMatrix4(Ci),this}rotateX(t){return Ci.makeRotationX(t),this.applyMatrix4(Ci),this}rotateY(t){return Ci.makeRotationY(t),this.applyMatrix4(Ci),this}rotateZ(t){return Ci.makeRotationZ(t),this.applyMatrix4(Ci),this}translate(t,e,s){return Ci.makeTranslation(t,e,s),this.applyMatrix4(Ci),this}scale(t,e,s){return Ci.makeScale(t,e,s),this.applyMatrix4(Ci),this}lookAt(t){return fl.lookAt(t),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const s=[];for(let r=0,a=t.length;r<a;r++){const c=t[r];s.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Di(s,3))}else{const s=Math.min(t.length,e.count);for(let r=0;r<s;r++){const a=t[r];e.setXYZ(r,a.x,a.y,a.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const a=e[s];xi.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&fe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){fe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const s=this.boundingSphere.center;if(xi.setFromBufferAttribute(t),e)for(let a=0,c=e.length;a<c;a++){const h=e[a];vr.setFromBufferAttribute(h),this.morphTargetsRelative?($e.addVectors(xi.min,vr.min),xi.expandByPoint($e),$e.addVectors(xi.max,vr.max),xi.expandByPoint($e)):(xi.expandByPoint(vr.min),xi.expandByPoint(vr.max))}xi.getCenter(s);let r=0;for(let a=0,c=t.count;a<c;a++)$e.fromBufferAttribute(t,a),r=Math.max(r,s.distanceToSquared($e));if(e)for(let a=0,c=e.length;a<c;a++){const h=e[a],d=this.morphTargetsRelative;for(let f=0,p=h.count;f<p;f++)$e.fromBufferAttribute(h,f),d&&(Fs.fromBufferAttribute(t,f),$e.add(Fs)),r=Math.max(r,s.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&fe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){fe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=e.position,r=e.normal,a=e.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==s.count)&&(c=new ln(new Float32Array(4*s.count),4),this.setAttribute("tangent",c));const h=[],d=[];for(let E=0;E<s.count;E++)h[E]=new G,d[E]=new G;const f=new G,p=new G,g=new G,_=new he,M=new he,w=new he,T=new G,v=new G;function x(E,R,H){f.fromBufferAttribute(s,E),p.fromBufferAttribute(s,R),g.fromBufferAttribute(s,H),_.fromBufferAttribute(a,E),M.fromBufferAttribute(a,R),w.fromBufferAttribute(a,H),p.sub(f),g.sub(f),M.sub(_),w.sub(_);const F=1/(M.x*w.y-w.x*M.y);isFinite(F)&&(T.copy(p).multiplyScalar(w.y).addScaledVector(g,-M.y).multiplyScalar(F),v.copy(g).multiplyScalar(M.x).addScaledVector(p,-w.x).multiplyScalar(F),h[E].add(T),h[R].add(T),h[H].add(T),d[E].add(v),d[R].add(v),d[H].add(v))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let E=0,R=D.length;E<R;++E){const H=D[E],F=H.start,W=H.count;for(let at=F,lt=F+W;at<lt;at+=3)x(t.getX(at+0),t.getX(at+1),t.getX(at+2))}const N=new G,A=new G,I=new G,P=new G;function U(E){I.fromBufferAttribute(r,E),P.copy(I);const R=h[E];N.copy(R),N.sub(I.multiplyScalar(I.dot(R))).normalize(),A.crossVectors(P,R);const F=A.dot(d[E])<0?-1:1;c.setXYZW(E,N.x,N.y,N.z,F)}for(let E=0,R=D.length;E<R;++E){const H=D[E],F=H.start,W=H.count;for(let at=F,lt=F+W;at<lt;at+=3)U(t.getX(at+0)),U(t.getX(at+1)),U(t.getX(at+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let s=this.getAttribute("normal");if(s===void 0||s.count!==e.count)s=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",s);else for(let _=0,M=s.count;_<M;_++)s.setXYZ(_,0,0,0);const r=new G,a=new G,c=new G,h=new G,d=new G,f=new G,p=new G,g=new G;if(t)for(let _=0,M=t.count;_<M;_+=3){const w=t.getX(_+0),T=t.getX(_+1),v=t.getX(_+2);r.fromBufferAttribute(e,w),a.fromBufferAttribute(e,T),c.fromBufferAttribute(e,v),p.subVectors(c,a),g.subVectors(r,a),p.cross(g),h.fromBufferAttribute(s,w),d.fromBufferAttribute(s,T),f.fromBufferAttribute(s,v),h.add(p),d.add(p),f.add(p),s.setXYZ(w,h.x,h.y,h.z),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(v,f.x,f.y,f.z)}else for(let _=0,M=e.count;_<M;_+=3)r.fromBufferAttribute(e,_+0),a.fromBufferAttribute(e,_+1),c.fromBufferAttribute(e,_+2),p.subVectors(c,a),g.subVectors(r,a),p.cross(g),s.setXYZ(_+0,p.x,p.y,p.z),s.setXYZ(_+1,p.x,p.y,p.z),s.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,s=t.count;e<s;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(h,d){const f=h.array,p=h.itemSize,g=h.normalized,_=new f.constructor(d.length*p);let M=0,w=0;for(let T=0,v=d.length;T<v;T++){h.isInterleavedBufferAttribute?M=d[T]*h.data.stride+h.offset:M=d[T]*p;for(let x=0;x<p;x++)_[w++]=f[M++]}return new ln(_,p,g)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hn,s=this.index.array,r=this.attributes;for(const h in r){const d=r[h],f=t(d,s);e.setAttribute(h,f)}const a=this.morphAttributes;for(const h in a){const d=[],f=a[h];for(let p=0,g=f.length;p<g;p++){const _=f[p],M=t(_,s);d.push(M)}e.morphAttributes[h]=d}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let h=0,d=c.length;h<d;h++){const f=c[h];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const s=this.attributes;for(const d in s){const f=s[d];t.data.attributes[d]=f.toJSON(t.data)}const r={};let a=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],p=[];for(let g=0,_=f.length;g<_;g++){const M=f[g];p.push(M.toJSON(t.data))}p.length>0&&(r[d]=p,a=!0)}a&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const r=t.attributes;for(const f in r){const p=r[f];this.setAttribute(f,p.clone(e))}const a=t.morphAttributes;for(const f in a){const p=[],g=a[f];for(let _=0,M=g.length;_<M;_++)p.push(g[_].clone(e));this.morphAttributes[f]=p}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let f=0,p=c.length;f<p;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let gv=0;class ma extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=er(),this.name="",this.type="Material",this.blending=Zs,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Cl,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const s=t[e];if(s===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(s):r&&r.isVector2&&s&&s.isVector2||r&&r.isEuler&&s&&s.isEuler||r&&r.isVector3&&s&&s.isVector3?r.copy(s):this[e]=s}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Zs&&(s.blending=this.blending),this.side!==Zn&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Al&&(s.blendSrc=this.blendSrc),this.blendDst!==Cl&&(s.blendDst=this.blendDst),this.blendEquation!==os&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==au&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(s.stencilFail=this.stencilFail),this.stencilZFail!==As&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function r(a){const c=[];for(const h in a){const d=a[h];delete d.metadata,c.push(d)}return c}if(e){const a=r(t.textures),c=r(t.images);a.length>0&&(s.textures=a),c.length>0&&(s.images=c)}return s}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new xe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let s=t.normalScale;Array.isArray(s)===!1&&(s=[s,s]),this.normalScale=new he().fromArray(s)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new he().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let s=null;if(e!==null){const r=e.length;s=new Array(r);for(let a=0;a!==r;++a)s[a]=e[a].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const xn=new G,pl=new G,Co=new G,Un=new G,ml=new G,Po=new G,_l=new G;class Bd{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const s=e.dot(this.direction);return s<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xn.copy(this.origin).addScaledVector(this.direction,e),xn.distanceToSquared(t))}distanceSqToSegment(t,e,s,r){pl.copy(t).add(e).multiplyScalar(.5),Co.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(pl);const a=t.distanceTo(e)*.5,c=-this.direction.dot(Co),h=Un.dot(this.direction),d=-Un.dot(Co),f=Un.lengthSq(),p=Math.abs(1-c*c);let g,_,M,w;if(p>0)if(g=c*d-h,_=c*h-d,w=a*p,g>=0)if(_>=-w)if(_<=w){const T=1/p;g*=T,_*=T,M=g*(g+c*_+2*h)+_*(c*g+_+2*d)+f}else _=a,g=Math.max(0,-(c*_+h)),M=-g*g+_*(_+2*d)+f;else _=-a,g=Math.max(0,-(c*_+h)),M=-g*g+_*(_+2*d)+f;else _<=-w?(g=Math.max(0,-(-c*a+h)),_=g>0?-a:Math.min(Math.max(-a,-d),a),M=-g*g+_*(_+2*d)+f):_<=w?(g=0,_=Math.min(Math.max(-a,-d),a),M=_*(_+2*d)+f):(g=Math.max(0,-(c*a+h)),_=g>0?a:Math.min(Math.max(-a,-d),a),M=-g*g+_*(_+2*d)+f);else _=c>0?-a:a,g=Math.max(0,-(c*_+h)),M=-g*g+_*(_+2*d)+f;return s&&s.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(pl).addScaledVector(Co,_),M}intersectSphere(t,e){xn.subVectors(t.center,this.origin);const s=xn.dot(this.direction),r=xn.dot(xn)-s*s,a=t.radius*t.radius;if(r>a)return null;const c=Math.sqrt(a-r),h=s-c,d=s+c;return d<0?null:h<0?this.at(d,e):this.at(h,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/e;return s>=0?s:null}intersectPlane(t,e){const s=this.distanceToPlane(t);return s===null?null:this.at(s,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let s,r,a,c,h,d;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return f>=0?(s=(t.min.x-_.x)*f,r=(t.max.x-_.x)*f):(s=(t.max.x-_.x)*f,r=(t.min.x-_.x)*f),p>=0?(a=(t.min.y-_.y)*p,c=(t.max.y-_.y)*p):(a=(t.max.y-_.y)*p,c=(t.min.y-_.y)*p),s>c||a>r||((a>s||isNaN(s))&&(s=a),(c<r||isNaN(r))&&(r=c),g>=0?(h=(t.min.z-_.z)*g,d=(t.max.z-_.z)*g):(h=(t.max.z-_.z)*g,d=(t.min.z-_.z)*g),s>d||h>r)||((h>s||s!==s)&&(s=h),(d<r||r!==r)&&(r=d),r<0)?null:this.at(s>=0?s:r,e)}intersectsBox(t){return this.intersectBox(t,xn)!==null}intersectTriangle(t,e,s,r,a){ml.subVectors(e,t),Po.subVectors(s,t),_l.crossVectors(ml,Po);let c=this.direction.dot(_l),h;if(c>0){if(r)return null;h=1}else if(c<0)h=-1,c=-c;else return null;Un.subVectors(this.origin,t);const d=h*this.direction.dot(Po.crossVectors(Un,Po));if(d<0)return null;const f=h*this.direction.dot(ml.cross(Un));if(f<0||d+f>c)return null;const p=-h*Un.dot(_l);return p<0?null:this.at(p/c,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $r extends ma{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const wu=new Oe,es=new Bd,Lo=new Xc,bu=new G,Ro=new G,Io=new G,Do=new G,gl=new G,No=new G,Tu=new G,Oo=new G;class _i extends pi{constructor(t=new hn,e=new $r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,s=Object.keys(e);if(s.length>0){const r=e[s[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=r.length;a<c;a++){const h=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=a}}}}getVertexPosition(t,e){const s=this.geometry,r=s.attributes.position,a=s.morphAttributes.position,c=s.morphTargetsRelative;e.fromBufferAttribute(r,t);const h=this.morphTargetInfluences;if(a&&h){No.set(0,0,0);for(let d=0,f=a.length;d<f;d++){const p=h[d],g=a[d];p!==0&&(gl.fromBufferAttribute(g,t),c?No.addScaledVector(gl,p):No.addScaledVector(gl.sub(e),p))}e.add(No)}return e}raycast(t,e){const s=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Lo.copy(s.boundingSphere),Lo.applyMatrix4(a),es.copy(t.ray).recast(t.near),!(Lo.containsPoint(es.origin)===!1&&(es.intersectSphere(Lo,bu)===null||es.origin.distanceToSquared(bu)>(t.far-t.near)**2))&&(wu.copy(a).invert(),es.copy(t.ray).applyMatrix4(wu),!(s.boundingBox!==null&&es.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,e,es)))}_computeIntersections(t,e,s){let r;const a=this.geometry,c=this.material,h=a.index,d=a.attributes.position,f=a.attributes.uv,p=a.attributes.uv1,g=a.attributes.normal,_=a.groups,M=a.drawRange;if(h!==null)if(Array.isArray(c))for(let w=0,T=_.length;w<T;w++){const v=_[w],x=c[v.materialIndex],D=Math.max(v.start,M.start),N=Math.min(h.count,Math.min(v.start+v.count,M.start+M.count));for(let A=D,I=N;A<I;A+=3){const P=h.getX(A),U=h.getX(A+1),E=h.getX(A+2);r=Uo(this,x,t,s,f,p,g,P,U,E),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const w=Math.max(0,M.start),T=Math.min(h.count,M.start+M.count);for(let v=w,x=T;v<x;v+=3){const D=h.getX(v),N=h.getX(v+1),A=h.getX(v+2);r=Uo(this,c,t,s,f,p,g,D,N,A),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(d!==void 0)if(Array.isArray(c))for(let w=0,T=_.length;w<T;w++){const v=_[w],x=c[v.materialIndex],D=Math.max(v.start,M.start),N=Math.min(d.count,Math.min(v.start+v.count,M.start+M.count));for(let A=D,I=N;A<I;A+=3){const P=A,U=A+1,E=A+2;r=Uo(this,x,t,s,f,p,g,P,U,E),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const w=Math.max(0,M.start),T=Math.min(d.count,M.start+M.count);for(let v=w,x=T;v<x;v+=3){const D=v,N=v+1,A=v+2;r=Uo(this,c,t,s,f,p,g,D,N,A),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}}function vv(i,t,e,s,r,a,c,h){let d;if(t.side===fi?d=s.intersectTriangle(c,a,r,!0,h):d=s.intersectTriangle(r,a,c,t.side===Zn,h),d===null)return null;Oo.copy(h),Oo.applyMatrix4(i.matrixWorld);const f=e.ray.origin.distanceTo(Oo);return f<e.near||f>e.far?null:{distance:f,point:Oo.clone(),object:i}}function Uo(i,t,e,s,r,a,c,h,d,f){i.getVertexPosition(h,Ro),i.getVertexPosition(d,Io),i.getVertexPosition(f,Do);const p=vv(i,t,e,s,Ro,Io,Do,Tu);if(p){const g=new G;Vi.getBarycoord(Tu,Ro,Io,Do,g),r&&(p.uv=Vi.getInterpolatedAttribute(r,h,d,f,g,new he)),a&&(p.uv1=Vi.getInterpolatedAttribute(a,h,d,f,g,new he)),c&&(p.normal=Vi.getInterpolatedAttribute(c,h,d,f,g,new G),p.normal.dot(s.direction)>0&&p.normal.multiplyScalar(-1));const _={a:h,b:d,c:f,normal:new G,materialIndex:0};Vi.getNormal(Ro,Io,Do,_.normal),p.face=_,p.barycoord=g}return p}class xv extends Qe{constructor(t=null,e=1,s=1,r,a,c,h,d,f=ii,p=ii,g,_){super(null,c,h,d,f,p,r,a,g,_),this.isDataTexture=!0,this.image={data:t,width:e,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vl=new G,yv=new G,Mv=new Jt;class ns{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,s,r){return this.normal.set(t,e,s),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,s){const r=vl.subVectors(s,e).cross(yv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,s=!0){const r=t.delta(vl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/a;return s===!0&&(c<0||c>1)?null:e.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const e=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return e<0&&s>0||s<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const s=e||Mv.getNormalMatrix(t),r=this.coplanarPoint(vl).applyMatrix4(t),a=this.normal.applyMatrix3(s).normalize();return this.constant=-r.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const is=new Xc,Ev=new he(.5,.5),Fo=new G;class Zc{constructor(t=new ns,e=new ns,s=new ns,r=new ns,a=new ns,c=new ns){this.planes=[t,e,s,r,a,c]}set(t,e,s,r,a,c){const h=this.planes;return h[0].copy(t),h[1].copy(e),h[2].copy(s),h[3].copy(r),h[4].copy(a),h[5].copy(c),this}copy(t){const e=this.planes;for(let s=0;s<6;s++)e[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,e=rn,s=!1){const r=this.planes,a=t.elements,c=a[0],h=a[1],d=a[2],f=a[3],p=a[4],g=a[5],_=a[6],M=a[7],w=a[8],T=a[9],v=a[10],x=a[11],D=a[12],N=a[13],A=a[14],I=a[15];if(r[0].setComponents(f-c,M-p,x-w,I-D).normalize(),r[1].setComponents(f+c,M+p,x+w,I+D).normalize(),r[2].setComponents(f+h,M+g,x+T,I+N).normalize(),r[3].setComponents(f-h,M-g,x-T,I-N).normalize(),s)r[4].setComponents(d,_,v,A).normalize(),r[5].setComponents(f-d,M-_,x-v,I-A).normalize();else if(r[4].setComponents(f-d,M-_,x-v,I-A).normalize(),e===rn)r[5].setComponents(f+d,M+_,x+v,I+A).normalize();else if(e===na)r[5].setComponents(d,_,v,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(t){is.center.set(0,0,0);const e=Ev.distanceTo(t.center);return is.radius=.7071067811865476+e,is.applyMatrix4(t.matrixWorld),this.intersectsSphere(is)}intersectsSphere(t){const e=this.planes,s=t.center,r=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(s)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let s=0;s<6;s++){const r=e[s];if(Fo.x=r.normal.x>0?t.max.x:t.min.x,Fo.y=r.normal.y>0?t.max.y:t.min.y,Fo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let s=0;s<6;s++)if(e[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sv extends Qe{constructor(t,e,s,r,a=Ge,c=Ge,h,d,f){super(t,e,s,r,a,c,h,d,f),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function g(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=t.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in t&&(this._requestVideoFrameCallbackId=t.requestVideoFrameCallback(g))}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class zd extends Qe{constructor(t=[],e=hs,s,r,a,c,h,d,f,p){super(t,e,s,r,a,c,h,d,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class js extends Qe{constructor(t,e,s=cn,r,a,c,h=ii,d=ii,f,p=Cn,g=1){if(p!==Cn&&p!==ls)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:e,depth:g};super(_,r,a,c,h,d,p,s,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wv extends js{constructor(t,e=cn,s=hs,r,a,c=ii,h=ii,d,f=Cn){const p={width:t,height:t,depth:1},g=[p,p,p,p,p,p];super(t,t,e,s,r,a,c,h,d,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Hd extends Qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Kr extends hn{constructor(t=1,e=1,s=1,r=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:s,widthSegments:r,heightSegments:a,depthSegments:c};const h=this;r=Math.floor(r),a=Math.floor(a),c=Math.floor(c);const d=[],f=[],p=[],g=[];let _=0,M=0;w("z","y","x",-1,-1,s,e,t,c,a,0),w("z","y","x",1,-1,s,e,-t,c,a,1),w("x","z","y",1,1,t,s,e,r,c,2),w("x","z","y",1,-1,t,s,-e,r,c,3),w("x","y","z",1,-1,t,e,s,r,a,4),w("x","y","z",-1,-1,t,e,-s,r,a,5),this.setIndex(d),this.setAttribute("position",new Di(f,3)),this.setAttribute("normal",new Di(p,3)),this.setAttribute("uv",new Di(g,2));function w(T,v,x,D,N,A,I,P,U,E,R){const H=A/U,F=I/E,W=A/2,at=I/2,lt=P/2,Y=U+1,it=E+1;let $=0,J=0;const pt=new G;for(let ot=0;ot<it;ot++){const ft=ot*F-at;for(let wt=0;wt<Y;wt++){const qt=wt*H-W;pt[T]=qt*D,pt[v]=ft*N,pt[x]=lt,f.push(pt.x,pt.y,pt.z),pt[T]=0,pt[v]=0,pt[x]=P>0?1:-1,p.push(pt.x,pt.y,pt.z),g.push(wt/U),g.push(1-ot/E),$+=1}}for(let ot=0;ot<E;ot++)for(let ft=0;ft<U;ft++){const wt=_+ft+Y*ot,qt=_+ft+Y*(ot+1),jt=_+(ft+1)+Y*(ot+1),Nt=_+(ft+1)+Y*ot;d.push(wt,qt,Nt),d.push(qt,jt,Nt),J+=6}h.addGroup(M,J,R),M+=J,_+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Jr extends hn{constructor(t=1,e=1,s=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:s,heightSegments:r};const a=t/2,c=e/2,h=Math.floor(s),d=Math.floor(r),f=h+1,p=d+1,g=t/h,_=e/d,M=[],w=[],T=[],v=[];for(let x=0;x<p;x++){const D=x*_-c;for(let N=0;N<f;N++){const A=N*g-a;w.push(A,-D,0),T.push(0,0,1),v.push(N/h),v.push(1-x/d)}}for(let x=0;x<d;x++)for(let D=0;D<h;D++){const N=D+f*x,A=D+f*(x+1),I=D+1+f*(x+1),P=D+1+f*x;M.push(N,A,P),M.push(A,I,P)}this.setIndex(M),this.setAttribute("position",new Di(w,3)),this.setAttribute("normal",new Di(T,3)),this.setAttribute("uv",new Di(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.widthSegments,t.heightSegments)}}class Qs extends hn{constructor(t=1,e=32,s=16,r=0,a=Math.PI*2,c=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:s,phiStart:r,phiLength:a,thetaStart:c,thetaLength:h},e=Math.max(3,Math.floor(e)),s=Math.max(2,Math.floor(s));const d=Math.min(c+h,Math.PI);let f=0;const p=[],g=new G,_=new G,M=[],w=[],T=[],v=[];for(let x=0;x<=s;x++){const D=[],N=x/s,A=c+N*h,I=t*Math.cos(A),P=Math.sqrt(t*t-I*I);let U=0;x===0&&c===0?U=.5/e:x===s&&d===Math.PI&&(U=-.5/e);for(let E=0;E<=e;E++){const R=E/e,H=r+R*a;g.x=-P*Math.cos(H),g.y=I,g.z=P*Math.sin(H),w.push(g.x,g.y,g.z),_.copy(g).normalize(),T.push(_.x,_.y,_.z),v.push(R+U,1-N),D.push(f++)}p.push(D)}for(let x=0;x<s;x++)for(let D=0;D<e;D++){const N=p[x][D+1],A=p[x][D],I=p[x+1][D],P=p[x+1][D+1];(x!==0||c>0)&&M.push(N,A,P),(x!==s-1||d<Math.PI)&&M.push(A,I,P)}this.setIndex(M),this.setAttribute("position",new Di(w,3)),this.setAttribute("normal",new Di(T,3)),this.setAttribute("uv",new Di(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function tr(i){const t={};for(const e in i){t[e]={};for(const s in i[e]){const r=i[e][s];if(Au(r))r.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][s]=null):t[e][s]=r.clone();else if(Array.isArray(r))if(Au(r[0])){const a=[];for(let c=0,h=r.length;c<h;c++)a[c]=r[c].clone();t[e][s]=a}else t[e][s]=r.slice();else t[e][s]=r}}return t}function li(i){const t={};for(let e=0;e<i.length;e++){const s=tr(i[e]);for(const r in s)t[r]=s[r]}return t}function Au(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bv(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vd(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const Tv={clone:tr,merge:li};var Av=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends ma{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Av,this.fragmentShader=Cv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=tr(t.uniforms),this.uniformsGroups=bv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const c=this.uniforms[r].value;c&&c.isTexture?e.uniforms[r]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[r]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[r]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[r]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[r]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[r]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[r]={type:"m4",value:c.toArray()}:e.uniforms[r]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const s={};for(const r in this.extensions)this.extensions[r]===!0&&(s[r]=!0);return Object.keys(s).length>0&&(e.extensions=s),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const s in t.uniforms){const r=t.uniforms[s];switch(this.uniforms[s]={},r.type){case"t":this.uniforms[s].value=e[r.value]||null;break;case"c":this.uniforms[s].value=new xe().setHex(r.value);break;case"v2":this.uniforms[s].value=new he().fromArray(r.value);break;case"v3":this.uniforms[s].value=new G().fromArray(r.value);break;case"v4":this.uniforms[s].value=new Fe().fromArray(r.value);break;case"m3":this.uniforms[s].value=new Jt().fromArray(r.value);break;case"m4":this.uniforms[s].value=new Oe().fromArray(r.value);break;default:this.uniforms[s].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const s in t.extensions)this.extensions[s]=t.extensions[s];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Pv extends Ni{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lv extends ma{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rv extends ma{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vn={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Cu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Cu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Cu(i){try{const t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}class Iv{constructor(t,e,s){const r=this;let a=!1,c=0,h=0,d;const f=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=s,this._abortController=null,this.itemStart=function(p){h++,a===!1&&r.onStart!==void 0&&r.onStart(p,c,h),a=!0},this.itemEnd=function(p){c++,r.onProgress!==void 0&&r.onProgress(p,c,h),c===h&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return p=p.normalize("NFC"),d?d(p):p},this.setURLModifier=function(p){return d=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){const g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,_=f.length;g<_;g+=2){const M=f[g],w=f[g+1];if(M.global&&(M.lastIndex=0),M.test(p))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Dv=new Iv;let qc=class{constructor(t){this.manager=t!==void 0?t:Dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const s=this;return new Promise(function(r,a){s.load(t,r,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};qc.DEFAULT_MATERIAL_NAME="__DEFAULT";const yn={};class Nv extends Error{constructor(t,e){super(t),this.response=e}}class Ov extends qc{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,s,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=Vn.get(`file:${t}`);if(a!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(a),this.manager.itemEnd(t)},0);return}if(yn[t]!==void 0){yn[t].push({onLoad:e,onProgress:s,onError:r});return}yn[t]=[],yn[t].push({onLoad:e,onProgress:s,onError:r});const c=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),h=this.mimeType,d=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&Xt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=yn[t],g=f.body.getReader(),_=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),M=_?parseInt(_):0,w=M!==0;let T=0;const v=new ReadableStream({start(x){D();function D(){g.read().then(({done:N,value:A})=>{if(N)x.close();else{T+=A.byteLength;const I=new ProgressEvent("progress",{lengthComputable:w,loaded:T,total:M});for(let P=0,U=p.length;P<U;P++){const E=p[P];E.onProgress&&E.onProgress(I)}x.enqueue(A),D()}},N=>{x.error(N)})}}});return new Response(v)}else throw new Nv(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(d){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,h));case"json":return f.json();default:if(h==="")return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(h),_=g&&g[1]?g[1].toLowerCase():void 0,M=new TextDecoder(_);return f.arrayBuffer().then(w=>M.decode(w))}}}).then(f=>{Vn.add(`file:${t}`,f);const p=yn[t];delete yn[t];for(let g=0,_=p.length;g<_;g++){const M=p[g];M.onLoad&&M.onLoad(f)}}).catch(f=>{const p=yn[t];if(p===void 0)throw this.manager.itemError(t),f;delete yn[t];for(let g=0,_=p.length;g<_;g++){const M=p[g];M.onError&&M.onError(f)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ks=new WeakMap;class Uv extends qc{constructor(t){super(t)}load(t,e,s,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,c=Vn.get(`image:${t}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(t),setTimeout(function(){e&&e(c),a.manager.itemEnd(t)},0);else{let g=ks.get(c);g===void 0&&(g=[],ks.set(c,g)),g.push({onLoad:e,onError:r})}return c}const h=Wr("img");function d(){p(),e&&e(this);const g=ks.get(this)||[];for(let _=0;_<g.length;_++){const M=g[_];M.onLoad&&M.onLoad(this)}ks.delete(this),a.manager.itemEnd(t)}function f(g){p(),r&&r(g),Vn.remove(`image:${t}`);const _=ks.get(this)||[];for(let M=0;M<_.length;M++){const w=_[M];w.onError&&w.onError(g)}ks.delete(this),a.manager.itemError(t),a.manager.itemEnd(t)}function p(){h.removeEventListener("load",d,!1),h.removeEventListener("error",f,!1)}return h.addEventListener("load",d,!1),h.addEventListener("error",f,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Vn.add(`image:${t}`,h),a.manager.itemStart(t),h.src=t,h}}const ko=new G,Bo=new $n,ji=new G;class Gd extends pi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ko,Bo,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Bo,ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,s=!1){super.updateWorldMatrix(t,e,s),this.matrixWorld.decompose(ko,Bo,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Bo,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new G,Pu=new he,Lu=new he;class Ri extends Gd{constructor(t=50,e=1,s=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,s){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Lu),e.subVectors(Lu,Pu)}setViewOffset(t,e,s,r,a,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ar*.5*this.fov)/this.zoom,s=2*e,r=this.aspect*s,a=-.5*r;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;a+=c.offsetX*r/d,e-=c.offsetY*s/f,r*=c.width/d,s*=c.height/f}const h=this.filmOffset;h!==0&&(a+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,e,e-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Wd extends Gd{constructor(t=-1,e=1,s=1,r=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=s,this.bottom=r,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,s,r,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=s,this.view.offsetY=r,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=s-t,c=s+t,h=r+e,d=r-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,c=a+f*this.view.width,h-=p*this.view.offsetY,d=h-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,h,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bs=-90,zs=1;class Fv extends pi{constructor(t,e,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ri(Bs,zs,t,e);r.layers=this.layers,this.add(r);const a=new Ri(Bs,zs,t,e);a.layers=this.layers,this.add(a);const c=new Ri(Bs,zs,t,e);c.layers=this.layers,this.add(c);const h=new Ri(Bs,zs,t,e);h.layers=this.layers,this.add(h);const d=new Ri(Bs,zs,t,e);d.layers=this.layers,this.add(d);const f=new Ri(Bs,zs,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[s,r,a,c,h,d]=e;for(const f of e)this.remove(f);if(t===rn)s.up.set(0,1,0),s.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===na)s.up.set(0,-1,0),s.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,c,h,d,f,p]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),w=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(s,0,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(s,1,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(s,2,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(s,3,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(s,4,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,p),t.setRenderTarget(g,_,M),t.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class kv extends Ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Ru=new Oe;class Bv{constructor(t,e,s=0,r=1/0){this.ray=new Bd(t,e),this.near=s,this.far=r,this.camera=null,this.layers=new Wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):fe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ru.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ru),this}intersectObject(t,e=!0,s=[]){return mc(t,this,s,e),s.sort(Iu),s}intersectObjects(t,e=!0,s=[]){for(let r=0,a=t.length;r<a;r++)mc(t[r],this,s,e);return s.sort(Iu),s}}function Iu(i,t){return i.distance-t.distance}function mc(i,t,e,s){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&s===!0){const a=i.children;for(let c=0,h=a.length;c<h;c++)mc(a[c],t,e,!0)}}const dh=class dh{constructor(t,e,s,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,s,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let s=0;s<4;s++)this.elements[s]=t[s+e];return this}set(t,e,s,r){const a=this.elements;return a[0]=t,a[2]=e,a[1]=s,a[3]=r,this}};dh.prototype.isMatrix2=!0;let Du=dh;function Nu(i,t,e,s){const r=zv(s);switch(e){case Rd:return i*t;case Dd:return i*t/r.components*r.byteLength;case Fc:return i*t/r.components*r.byteLength;case us:return i*t*2/r.components*r.byteLength;case kc:return i*t*2/r.components*r.byteLength;case Id:return i*t*3/r.components*r.byteLength;case Gi:return i*t*4/r.components*r.byteLength;case Bc:return i*t*4/r.components*r.byteLength;case Zo:case qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Yo:case $o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bl:case Hl:return Math.max(i,16)*Math.max(t,8)/4;case kl:case zl:return Math.max(i,8)*Math.max(t,8)/2;case Vl:case Gl:case Xl:case Zl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wl:case ta:case ql:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case jl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case tc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ec:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ic:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case nc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case sc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case rc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case oc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ac:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case lc:case cc:case hc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case uc:case dc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ea:case fc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function zv(i){switch(i){case Ii:case Ad:return{byteLength:1,components:1};case Hr:case Cd:case An:return{byteLength:2,components:1};case Oc:case Uc:return{byteLength:2,components:4};case cn:case Nc:case sn:return{byteLength:4,components:1};case Pd:case Ld:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ic}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ic);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xd(){let i=null,t=!1,e=null,s=null;function r(a,c){e(a,c),s=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(s=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Hv(i){const t=new WeakMap;function e(h,d){const f=h.array,p=h.usage,g=f.byteLength,_=i.createBuffer();i.bindBuffer(d,_),i.bufferData(d,f,p),h.onUploadCallback();let M;if(f instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)M=i.HALF_FLOAT;else if(f instanceof Uint16Array)h.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=i.SHORT;else if(f instanceof Uint32Array)M=i.UNSIGNED_INT;else if(f instanceof Int32Array)M=i.INT;else if(f instanceof Int8Array)M=i.BYTE;else if(f instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,d,f){const p=d.array,g=d.updateRanges;if(i.bindBuffer(f,h),g.length===0)i.bufferSubData(f,0,p);else{g.sort((M,w)=>M.start-w.start);let _=0;for(let M=1;M<g.length;M++){const w=g[_],T=g[M];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++_,g[_]=T)}g.length=_+1;for(let M=0,w=g.length;M<w;M++){const T=g[M];i.bufferSubData(f,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=t.get(h);d&&(i.deleteBuffer(d.buffer),t.delete(h))}function c(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const p=t.get(h);(!p||p.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const f=t.get(h);if(f===void 0)t.set(h,e(h,d));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,h,d),f.version=h.version}}return{get:r,remove:a,update:c}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$v=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,i0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,h0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,u0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,w0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,b0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,C0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,L0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,N0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,O0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,J0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ex=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ix=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ox=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ax=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ux=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,px=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_x=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ex=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ax=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Cx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Px=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ix=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ox=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ux=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Hx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$x=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ty=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ey=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ny=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ry=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ay=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,My=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:Vv,alphahash_pars_fragment:Gv,alphamap_fragment:Wv,alphamap_pars_fragment:Xv,alphatest_fragment:Zv,alphatest_pars_fragment:qv,aomap_fragment:Yv,aomap_pars_fragment:$v,batching_pars_vertex:Kv,batching_vertex:Jv,begin_vertex:jv,beginnormal_vertex:Qv,bsdfs:t0,iridescence_fragment:e0,bumpmap_pars_fragment:i0,clipping_planes_fragment:n0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:o0,color_fragment:a0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:h0,common:u0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:f0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:_0,emissivemap_pars_fragment:g0,colorspace_fragment:v0,colorspace_pars_fragment:x0,envmap_fragment:y0,envmap_common_pars_fragment:M0,envmap_pars_fragment:E0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:N0,envmap_vertex:w0,fog_vertex:b0,fog_pars_vertex:T0,fog_fragment:A0,fog_pars_fragment:C0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:L0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:I0,lights_pars_begin:D0,lights_toon_fragment:O0,lights_toon_pars_fragment:U0,lights_phong_fragment:F0,lights_phong_pars_fragment:k0,lights_physical_fragment:B0,lights_physical_pars_fragment:z0,lights_fragment_begin:H0,lights_fragment_maps:V0,lights_fragment_end:G0,lightprobes_pars_fragment:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:$0,map_pars_fragment:K0,map_particle_fragment:J0,map_particle_pars_fragment:j0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:tx,morphinstance_vertex:ex,morphcolor_vertex:ix,morphnormal_vertex:nx,morphtarget_pars_vertex:sx,morphtarget_vertex:rx,normal_fragment_begin:ox,normal_fragment_maps:ax,normal_pars_fragment:lx,normal_pars_vertex:cx,normal_vertex:hx,normalmap_pars_fragment:ux,clearcoat_normal_fragment_begin:dx,clearcoat_normal_fragment_maps:fx,clearcoat_pars_fragment:px,iridescence_pars_fragment:mx,opaque_fragment:_x,packing:gx,premultiplied_alpha_fragment:vx,project_vertex:xx,dithering_fragment:yx,dithering_pars_fragment:Mx,roughnessmap_fragment:Ex,roughnessmap_pars_fragment:Sx,shadowmap_pars_fragment:wx,shadowmap_pars_vertex:bx,shadowmap_vertex:Tx,shadowmask_pars_fragment:Ax,skinbase_vertex:Cx,skinning_pars_vertex:Px,skinning_vertex:Lx,skinnormal_vertex:Rx,specularmap_fragment:Ix,specularmap_pars_fragment:Dx,tonemapping_fragment:Nx,tonemapping_pars_fragment:Ox,transmission_fragment:Ux,transmission_pars_fragment:Fx,uv_pars_fragment:kx,uv_pars_vertex:Bx,uv_vertex:zx,worldpos_vertex:Hx,background_vert:Vx,background_frag:Gx,backgroundCube_vert:Wx,backgroundCube_frag:Xx,cube_vert:Zx,cube_frag:qx,depth_vert:Yx,depth_frag:$x,distance_vert:Kx,distance_frag:Jx,equirect_vert:jx,equirect_frag:Qx,linedashed_vert:ty,linedashed_frag:ey,meshbasic_vert:iy,meshbasic_frag:ny,meshlambert_vert:sy,meshlambert_frag:ry,meshmatcap_vert:oy,meshmatcap_frag:ay,meshnormal_vert:ly,meshnormal_frag:cy,meshphong_vert:hy,meshphong_frag:uy,meshphysical_vert:dy,meshphysical_frag:fy,meshtoon_vert:py,meshtoon_frag:my,points_vert:_y,points_frag:gy,shadow_vert:vy,shadow_frag:xy,sprite_vert:yy,sprite_frag:My},Tt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},nn={basic:{uniforms:li([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:li([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new xe(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:li([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:li([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:li([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new xe(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:li([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:li([Tt.points,Tt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:li([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:li([Tt.common,Tt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:li([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:li([Tt.sprite,Tt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:li([Tt.common,Tt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:li([Tt.lights,Tt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};nn.physical={uniforms:li([nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const zo={r:0,b:0,g:0},Ey=new Oe,Zd=new Jt;Zd.set(-1,0,0,0,1,0,0,0,1);function Sy(i,t,e,s,r,a){const c=new xe(0);let h=r===!0?0:1,d,f,p=null,g=0,_=null;function M(D){let N=D.isScene===!0?D.background:null;if(N&&N.isTexture){const A=D.backgroundBlurriness>0;N=t.get(N,A)}return N}function w(D){let N=!1;const A=M(D);A===null?v(c,h):A&&A.isColor&&(v(A,1),N=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?e.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,a),(i.autoClear||N)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(D,N){const A=M(N);A&&(A.isCubeTexture||A.mapping===pa)?(f===void 0&&(f=new _i(new Kr(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:tr(nn.backgroundCube.uniforms),vertexShader:nn.backgroundCube.vertexShader,fragmentShader:nn.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),f.material.uniforms.envMap.value=A,f.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(N.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Zd),f.material.toneMapped=le.getTransfer(A.colorSpace)!==we,(p!==A||g!==A.version||_!==i.toneMapping)&&(f.material.needsUpdate=!0,p=A,g=A.version,_=i.toneMapping),f.layers.enableAll(),D.unshift(f,f.geometry,f.material,0,0,null)):A&&A.isTexture&&(d===void 0&&(d=new _i(new Jr(2,2),new Ni({name:"BackgroundMaterial",uniforms:tr(nn.background.uniforms),vertexShader:nn.background.vertexShader,fragmentShader:nn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=A,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.toneMapped=le.getTransfer(A.colorSpace)!==we,A.matrixAutoUpdate===!0&&A.updateMatrix(),d.material.uniforms.uvTransform.value.copy(A.matrix),(p!==A||g!==A.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,p=A,g=A.version,_=i.toneMapping),d.layers.enableAll(),D.unshift(d,d.geometry,d.material,0,0,null))}function v(D,N){D.getRGB(zo,Vd(i)),e.buffers.color.setClear(zo.r,zo.g,zo.b,N,a)}function x(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,N=1){c.set(D),h=N,v(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,v(c,h)},render:w,addToRenderList:T,dispose:x}}function wy(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),s={},r=_(null);let a=r,c=!1;function h(F,W,at,lt,Y){let it=!1;const $=g(F,lt,at,W);a!==$&&(a=$,f(a.object)),it=M(F,lt,at,Y),it&&w(F,lt,at,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(it||c)&&(c=!1,A(F,W,at,lt),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function d(){return i.createVertexArray()}function f(F){return i.bindVertexArray(F)}function p(F){return i.deleteVertexArray(F)}function g(F,W,at,lt){const Y=lt.wireframe===!0;let it=s[W.id];it===void 0&&(it={},s[W.id]=it);const $=F.isInstancedMesh===!0?F.id:0;let J=it[$];J===void 0&&(J={},it[$]=J);let pt=J[at.id];pt===void 0&&(pt={},J[at.id]=pt);let ot=pt[Y];return ot===void 0&&(ot=_(d()),pt[Y]=ot),ot}function _(F){const W=[],at=[],lt=[];for(let Y=0;Y<e;Y++)W[Y]=0,at[Y]=0,lt[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:at,attributeDivisors:lt,object:F,attributes:{},index:null}}function M(F,W,at,lt){const Y=a.attributes,it=W.attributes;let $=0;const J=at.getAttributes();for(const pt in J)if(J[pt].location>=0){const ft=Y[pt];let wt=it[pt];if(wt===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(wt=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(wt=F.instanceColor)),ft===void 0||ft.attribute!==wt||wt&&ft.data!==wt.data)return!0;$++}return a.attributesNum!==$||a.index!==lt}function w(F,W,at,lt){const Y={},it=W.attributes;let $=0;const J=at.getAttributes();for(const pt in J)if(J[pt].location>=0){let ft=it[pt];ft===void 0&&(pt==="instanceMatrix"&&F.instanceMatrix&&(ft=F.instanceMatrix),pt==="instanceColor"&&F.instanceColor&&(ft=F.instanceColor));const wt={};wt.attribute=ft,ft&&ft.data&&(wt.data=ft.data),Y[pt]=wt,$++}a.attributes=Y,a.attributesNum=$,a.index=lt}function T(){const F=a.newAttributes;for(let W=0,at=F.length;W<at;W++)F[W]=0}function v(F){x(F,0)}function x(F,W){const at=a.newAttributes,lt=a.enabledAttributes,Y=a.attributeDivisors;at[F]=1,lt[F]===0&&(i.enableVertexAttribArray(F),lt[F]=1),Y[F]!==W&&(i.vertexAttribDivisor(F,W),Y[F]=W)}function D(){const F=a.newAttributes,W=a.enabledAttributes;for(let at=0,lt=W.length;at<lt;at++)W[at]!==F[at]&&(i.disableVertexAttribArray(at),W[at]=0)}function N(F,W,at,lt,Y,it,$){$===!0?i.vertexAttribIPointer(F,W,at,Y,it):i.vertexAttribPointer(F,W,at,lt,Y,it)}function A(F,W,at,lt){T();const Y=lt.attributes,it=at.getAttributes(),$=W.defaultAttributeValues;for(const J in it){const pt=it[J];if(pt.location>=0){let ot=Y[J];if(ot===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(ot=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(ot=F.instanceColor)),ot!==void 0){const ft=ot.normalized,wt=ot.itemSize,qt=t.get(ot);if(qt===void 0)continue;const jt=qt.buffer,Nt=qt.type,j=qt.bytesPerElement,mt=Nt===i.INT||Nt===i.UNSIGNED_INT||ot.gpuType===Nc;if(ot.isInterleavedBufferAttribute){const dt=ot.data,Vt=dt.stride,Yt=ot.offset;if(dt.isInstancedInterleavedBuffer){for(let zt=0;zt<pt.locationSize;zt++)x(pt.location+zt,dt.meshPerAttribute);F.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let zt=0;zt<pt.locationSize;zt++)v(pt.location+zt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let zt=0;zt<pt.locationSize;zt++)N(pt.location+zt,wt/pt.locationSize,Nt,ft,Vt*j,(Yt+wt/pt.locationSize*zt)*j,mt)}else{if(ot.isInstancedBufferAttribute){for(let dt=0;dt<pt.locationSize;dt++)x(pt.location+dt,ot.meshPerAttribute);F.isInstancedMesh!==!0&&lt._maxInstanceCount===void 0&&(lt._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let dt=0;dt<pt.locationSize;dt++)v(pt.location+dt);i.bindBuffer(i.ARRAY_BUFFER,jt);for(let dt=0;dt<pt.locationSize;dt++)N(pt.location+dt,wt/pt.locationSize,Nt,ft,wt*j,wt/pt.locationSize*dt*j,mt)}}else if($!==void 0){const ft=$[J];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(pt.location,ft);break;case 3:i.vertexAttrib3fv(pt.location,ft);break;case 4:i.vertexAttrib4fv(pt.location,ft);break;default:i.vertexAttrib1fv(pt.location,ft)}}}}D()}function I(){R();for(const F in s){const W=s[F];for(const at in W){const lt=W[at];for(const Y in lt){const it=lt[Y];for(const $ in it)p(it[$].object),delete it[$];delete lt[Y]}}delete s[F]}}function P(F){if(s[F.id]===void 0)return;const W=s[F.id];for(const at in W){const lt=W[at];for(const Y in lt){const it=lt[Y];for(const $ in it)p(it[$].object),delete it[$];delete lt[Y]}}delete s[F.id]}function U(F){for(const W in s){const at=s[W];for(const lt in at){const Y=at[lt];if(Y[F.id]===void 0)continue;const it=Y[F.id];for(const $ in it)p(it[$].object),delete it[$];delete Y[F.id]}}}function E(F){for(const W in s){const at=s[W],lt=F.isInstancedMesh===!0?F.id:0,Y=at[lt];if(Y!==void 0){for(const it in Y){const $=Y[it];for(const J in $)p($[J].object),delete $[J];delete Y[it]}delete at[lt],Object.keys(at).length===0&&delete s[W]}}}function R(){H(),c=!0,a!==r&&(a=r,f(a.object))}function H(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:h,reset:R,resetDefaultState:H,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:v,disableUnusedAttributes:D}}function by(i,t,e){let s;function r(d){s=d}function a(d,f){i.drawArrays(s,d,f),e.update(f,s,1)}function c(d,f,p){p!==0&&(i.drawArraysInstanced(s,d,f,p),e.update(f,s,p))}function h(d,f,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,d,0,f,0,p);let _=0;for(let M=0;M<p;M++)_+=f[M];e.update(_,s,1)}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function Ty(i,t,e,s){let r;function a(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(U){return!(U!==Gi&&s.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(U){const E=U===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Ii&&s.convert(U)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==sn&&!E)}function d(U){if(U==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=d(f);p!==f&&(Xt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const g=e.logarithmicDepthBuffer===!0,_=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&_===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:h,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:A,maxSamples:I,samples:P}}function Ay(i){const t=this;let e=null,s=0,r=!1,a=!1;const c=new ns,h=new Jt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const M=g.length!==0||_||s!==0||r;return r=_,s=g.length,M},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(g,_){e=p(g,_,0)},this.setState=function(g,_,M){const w=g.clippingPlanes,T=g.clipIntersection,v=g.clipShadows,x=i.get(g);if(!r||w===null||w.length===0||a&&!v)a?p(null):f();else{const D=a?0:s,N=D*4;let A=x.clippingState||null;d.value=A,A=p(w,_,N,M);for(let I=0;I!==N;++I)A[I]=e[I];x.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=D}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function p(g,_,M,w){const T=g!==null?g.length:0;let v=null;if(T!==0){if(v=d.value,w!==!0||v===null){const x=M+T*4,D=_.matrixWorldInverse;h.getNormalMatrix(D),(v===null||v.length<x)&&(v=new Float32Array(x));for(let N=0,A=M;N!==T;++N,A+=4)c.copy(g[N]).applyMatrix4(D,h),c.normal.toArray(v,A),v[A+3]=c.constant}d.value=v,d.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,v}}const Hn=4,Ou=[.125,.215,.35,.446,.526,.582],as=20,Cy=256,xr=new Wd,Uu=new xe;let xl=null,yl=0,Ml=0,El=!1;const Py=new G;class Fu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,s=.1,r=100,a={}){const{size:c=256,position:h=Py}=a;xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,s,r,d,h),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(xl,yl,Ml),this._renderer.xr.enabled=El,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===Js?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),xl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=e||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,s={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:An,format:Gi,colorSpace:Gr,depthBuffer:!1},r=ku(t,e,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ku(t,e,s);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ly(a)),this._blurMaterial=Iy(a,t,e),this._ggxMaterial=Ry(a,t,e)}return r}_compileMaterial(t){const e=new _i(new hn,t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,s,r,a){const d=new Ri(90,1,e,s),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,M=g.toneMapping;g.getClearColor(Uu),g.toneMapping=an,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _i(new Kr,new $r({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,v=T.material;let x=!1;const D=t.background;D?D.isColor&&(v.color.copy(D),t.background=null,x=!0):(v.color.copy(Uu),x=!0);for(let N=0;N<6;N++){const A=N%3;A===0?(d.up.set(0,f[N],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[N],a.y,a.z)):A===1?(d.up.set(0,0,f[N]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[N],a.z)):(d.up.set(0,f[N],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[N]));const I=this._cubeSize;Hs(r,A*I,N>2?I:0,I,I),g.setRenderTarget(r),x&&g.render(T,d),g.render(t,d)}g.toneMapping=M,g.autoClear=_,t.background=D}_textureToCubeUV(t,e){const s=this._renderer,r=t.mapping===hs||t.mapping===Js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bu());const a=r?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const h=a.uniforms;h.envMap.value=t;const d=this._cubeSize;Hs(e,0,0,3*d,2*d),s.setRenderTarget(e),s.render(c,xr)}_applyPMREM(t){const e=this._renderer,s=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(t,a-1,a);e.autoClear=s}_applyGGXFilter(t,e,s){const r=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,h=this._lodMeshes[s];h.material=c;const d=c.uniforms,f=s/(this._lodMeshes.length-1),p=e/(this._lodMeshes.length-1),g=Math.sqrt(f*f-p*p),_=0+f*1.25,M=g*_,{_lodMax:w}=this,T=this._sizeLods[s],v=3*T*(s>w-Hn?s-w+Hn:0),x=4*(this._cubeSize-T);d.envMap.value=t.texture,d.roughness.value=M,d.mipInt.value=w-e,Hs(a,v,x,3*T,2*T),r.setRenderTarget(a),r.render(h,xr),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=w-s,Hs(t,v,x,3*T,2*T),r.setRenderTarget(t),r.render(h,xr)}_blur(t,e,s,r,a){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,s,r,"latitudinal",a),this._halfBlur(c,t,s,s,r,"longitudinal",a)}_halfBlur(t,e,s,r,a,c,h){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&fe("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[r];g.material=f;const _=f.uniforms,M=this._sizeLods[s]-1,w=isFinite(a)?Math.PI/(2*M):2*Math.PI/(2*as-1),T=a/w,v=isFinite(a)?1+Math.floor(p*T):as;v>as&&Xt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${as}`);const x=[];let D=0;for(let U=0;U<as;++U){const E=U/T,R=Math.exp(-E*E/2);x.push(R),U===0?D+=R:U<v&&(D+=2*R)}for(let U=0;U<x.length;U++)x[U]=x[U]/D;_.envMap.value=t.texture,_.samples.value=v,_.weights.value=x,_.latitudinal.value=c==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:N}=this;_.dTheta.value=w,_.mipInt.value=N-s;const A=this._sizeLods[r],I=3*A*(r>N-Hn?r-N+Hn:0),P=4*(this._cubeSize-A);Hs(e,I,P,3*A,2*A),d.setRenderTarget(e),d.render(g,xr)}}function Ly(i){const t=[],e=[],s=[];let r=i;const a=i-Hn+1+Ou.length;for(let c=0;c<a;c++){const h=Math.pow(2,r);t.push(h);let d=1/h;c>i-Hn?d=Ou[c-i+Hn-1]:c===0&&(d=0),e.push(d);const f=1/(h-2),p=-f,g=1+f,_=[p,p,g,p,g,g,p,p,g,g,p,g],M=6,w=6,T=3,v=2,x=1,D=new Float32Array(T*w*M),N=new Float32Array(v*w*M),A=new Float32Array(x*w*M);for(let P=0;P<M;P++){const U=P%3*2/3-1,E=P>2?0:-1,R=[U,E,0,U+2/3,E,0,U+2/3,E+1,0,U,E,0,U+2/3,E+1,0,U,E+1,0];D.set(R,T*w*P),N.set(_,v*w*P);const H=[P,P,P,P,P,P];A.set(H,x*w*P)}const I=new hn;I.setAttribute("position",new ln(D,T)),I.setAttribute("uv",new ln(N,v)),I.setAttribute("faceIndex",new ln(A,x)),s.push(new _i(I,null)),r>Hn&&r--}return{lodMeshes:s,sizeLods:t,sigmas:e}}function ku(i,t,e){const s=new Wi(i,t,e);return s.texture.mapping=pa,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Hs(i,t,e,s,r){i.viewport.set(t,e,s,r),i.scissor.set(t,e,s,r)}function Ry(i,t,e){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Iy(i,t,e){const s=new Float32Array(as),r=new G(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Bu(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function zu(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function _a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class qd extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},r=[s,s,s,s,s,s];this.texture=new zd(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Kr(5,5,5),a=new Ni({name:"CubemapFromEquirect",uniforms:tr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:fi,blending:Sn});a.uniforms.tEquirect.value=e;const c=new _i(r,a),h=e.minFilter;return e.minFilter===zn&&(e.minFilter=Ge),new Fv(1,10,this).update(t,c),e.minFilter=h,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,s=!0,r=!0){const a=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,s,r);t.setRenderTarget(a)}}function Dy(i){let t=new WeakMap,e=new WeakMap,s=null;function r(_,M=!1){return _==null?null:M?c(_):a(_)}function a(_){if(_&&_.isTexture){const M=_.mapping;if(M===Ya||M===$a)if(t.has(_)){const w=t.get(_).texture;return h(w,_.mapping)}else{const w=_.image;if(w&&w.height>0){const T=new qd(w.height);return T.fromEquirectangularTexture(i,_),t.set(_,T),_.addEventListener("dispose",f),h(T.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture){const M=_.mapping,w=M===Ya||M===$a,T=M===hs||M===Js;if(w||T){let v=e.get(_);const x=v!==void 0?v.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==x)return s===null&&(s=new Fu(i)),v=w?s.fromEquirectangular(_,v):s.fromCubemap(_,v),v.texture.pmremVersion=_.pmremVersion,e.set(_,v),v.texture;if(v!==void 0)return v.texture;{const D=_.image;return w&&D&&D.height>0||T&&D&&d(D)?(s===null&&(s=new Fu(i)),v=w?s.fromEquirectangular(_):s.fromCubemap(_),v.texture.pmremVersion=_.pmremVersion,e.set(_,v),_.addEventListener("dispose",p),v.texture):null}}}return _}function h(_,M){return M===Ya?_.mapping=hs:M===$a&&(_.mapping=Js),_}function d(_){let M=0;const w=6;for(let T=0;T<w;T++)_[T]!==void 0&&M++;return M===w}function f(_){const M=_.target;M.removeEventListener("dispose",f);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function p(_){const M=_.target;M.removeEventListener("dispose",p);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function g(){t=new WeakMap,e=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:r,dispose:g}}function Ny(i){const t={};function e(s){if(t[s]!==void 0)return t[s];const r=i.getExtension(s);return t[s]=r,r}return{has:function(s){return e(s)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(s){const r=e(s);return r===null&&qs("WebGLRenderer: "+s+" extension not supported."),r}}}function Oy(i,t,e,s){const r={},a=new WeakMap;function c(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const w in _.attributes)t.remove(_.attributes[w]);_.removeEventListener("dispose",c),delete r[_.id];const M=a.get(_);M&&(t.remove(M),a.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,e.memory.geometries--}function h(g,_){return r[_.id]===!0||(_.addEventListener("dispose",c),r[_.id]=!0,e.memory.geometries++),_}function d(g){const _=g.attributes;for(const M in _)t.update(_[M],i.ARRAY_BUFFER)}function f(g){const _=[],M=g.index,w=g.attributes.position;let T=0;if(w===void 0)return;if(M!==null){const D=M.array;T=M.version;for(let N=0,A=D.length;N<A;N+=3){const I=D[N+0],P=D[N+1],U=D[N+2];_.push(I,P,P,U,U,I)}}else{const D=w.array;T=w.version;for(let N=0,A=D.length/3-1;N<A;N+=3){const I=N+0,P=N+1,U=N+2;_.push(I,P,P,U,U,I)}}const v=new(w.count>=65535?kd:Fd)(_,1);v.version=T;const x=a.get(g);x&&t.remove(x),a.set(g,v)}function p(g){const _=a.get(g);if(_){const M=g.index;M!==null&&_.version<M.version&&f(g)}else f(g);return a.get(g)}return{get:h,update:d,getWireframeAttribute:p}}function Uy(i,t,e){let s;function r(g){s=g}let a,c;function h(g){a=g.type,c=g.bytesPerElement}function d(g,_){i.drawElements(s,_,a,g*c),e.update(_,s,1)}function f(g,_,M){M!==0&&(i.drawElementsInstanced(s,_,a,g*c,M),e.update(_,s,M))}function p(g,_,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,_,0,a,g,0,M);let T=0;for(let v=0;v<M;v++)T+=_[v];e.update(T,s,1)}this.setMode=r,this.setIndex=h,this.render=d,this.renderInstances=f,this.renderMultiDraw=p}function Fy(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function s(a,c,h){switch(e.calls++,c){case i.TRIANGLES:e.triangles+=h*(a/3);break;case i.LINES:e.lines+=h*(a/2);break;case i.LINE_STRIP:e.lines+=h*(a-1);break;case i.LINE_LOOP:e.lines+=h*a;break;case i.POINTS:e.points+=h*a;break;default:fe("WebGLInfo: Unknown draw mode:",c);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:s}}function ky(i,t,e){const s=new WeakMap,r=new Fe;function a(c,h,d){const f=c.morphTargetInfluences,p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let H=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",H)};var M=H;_!==void 0&&_.texture.dispose();const w=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,v=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let A=0;w===!0&&(A=1),T===!0&&(A=2),v===!0&&(A=3);let I=h.attributes.position.count*A,P=1;I>t.maxTextureSize&&(P=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const U=new Float32Array(I*P*4*g),E=new Od(U,I,P,g);E.type=sn,E.needsUpdate=!0;const R=A*4;for(let F=0;F<g;F++){const W=x[F],at=D[F],lt=N[F],Y=I*P*4*F;for(let it=0;it<W.count;it++){const $=it*R;w===!0&&(r.fromBufferAttribute(W,it),U[Y+$+0]=r.x,U[Y+$+1]=r.y,U[Y+$+2]=r.z,U[Y+$+3]=0),T===!0&&(r.fromBufferAttribute(at,it),U[Y+$+4]=r.x,U[Y+$+5]=r.y,U[Y+$+6]=r.z,U[Y+$+7]=0),v===!0&&(r.fromBufferAttribute(lt,it),U[Y+$+8]=r.x,U[Y+$+9]=r.y,U[Y+$+10]=r.z,U[Y+$+11]=lt.itemSize===4?r.w:1)}}_={count:g,texture:E,size:new he(I,P)},s.set(h,_),h.addEventListener("dispose",H)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",c.morphTexture,e);else{let w=0;for(let v=0;v<f.length;v++)w+=f[v];const T=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",f)}d.getUniforms().setValue(i,"morphTargetsTexture",_.texture,e),d.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:a}}function By(i,t,e,s,r){let a=new WeakMap;function c(f){const p=r.render.frame,g=f.geometry,_=t.get(f,g);if(a.get(_)!==p&&(t.update(_),a.set(_,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),a.get(f)!==p&&(e.update(f.instanceMatrix,i.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,i.ARRAY_BUFFER),a.set(f,p))),f.isSkinnedMesh){const M=f.skeleton;a.get(M)!==p&&(M.update(),a.set(M,p))}return _}function h(){a=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),s.releaseStatesOfObject(p),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:c,dispose:h}}const zy={[Dc]:"LINEAR_TONE_MAPPING",[yd]:"REINHARD_TONE_MAPPING",[Md]:"CINEON_TONE_MAPPING",[Ed]:"ACES_FILMIC_TONE_MAPPING",[wd]:"AGX_TONE_MAPPING",[bd]:"NEUTRAL_TONE_MAPPING",[Sd]:"CUSTOM_TONE_MAPPING"};function Hy(i,t,e,s,r,a){const c=new Wi(t,e,{type:i,depthBuffer:r,stencilBuffer:a,samples:s?4:0,depthTexture:r?new js(t,e):void 0}),h=new Wi(t,e,{type:An,depthBuffer:!1,stencilBuffer:!1}),d=new hn;d.setAttribute("position",new Di([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Di([0,2,0,0,2,0],2));const f=new Pv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new _i(d,f),g=new Wd(-1,1,1,-1,0,1);let _=null,M=null,w=!1,T,v=null,x=[],D=!1;this.setSize=function(N,A){c.setSize(N,A),h.setSize(N,A);for(let I=0;I<x.length;I++){const P=x[I];P.setSize&&P.setSize(N,A)}},this.setEffects=function(N){x=N,D=x.length>0&&x[0].isRenderPass===!0;const A=c.width,I=c.height;for(let P=0;P<x.length;P++){const U=x[P];U.setSize&&U.setSize(A,I)}},this.begin=function(N,A){if(w||N.toneMapping===an&&x.length===0)return!1;if(v=A,A!==null){const I=A.width,P=A.height;(c.width!==I||c.height!==P)&&this.setSize(I,P)}return D===!1&&N.setRenderTarget(c),T=N.toneMapping,N.toneMapping=an,!0},this.hasRenderPass=function(){return D},this.end=function(N,A){N.toneMapping=T,w=!0;let I=c,P=h;for(let U=0;U<x.length;U++){const E=x[U];if(E.enabled!==!1&&(E.render(N,P,I,A),E.needsSwap!==!1)){const R=I;I=P,P=R}}if(_!==N.outputColorSpace||M!==N.toneMapping){_=N.outputColorSpace,M=N.toneMapping,f.defines={},le.getTransfer(_)===we&&(f.defines.SRGB_TRANSFER="");const U=zy[M];U&&(f.defines[U]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=I.texture,N.setRenderTarget(v),N.render(p,g),v=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),h.dispose(),d.dispose(),f.dispose()}}const Yd=new Qe,_c=new js(1,1),$d=new Od,Kd=new ov,Jd=new zd,Hu=[],Vu=[],Gu=new Float32Array(16),Wu=new Float32Array(9),Xu=new Float32Array(4);function nr(i,t,e){const s=i[0];if(s<=0||s>0)return i;const r=t*e;let a=Hu[r];if(a===void 0&&(a=new Float32Array(r),Hu[r]=a),t!==0){s.toArray(a,0);for(let c=1,h=0;c!==t;++c)h+=e,i[c].toArray(a,h)}return a}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,s=i.length;e<s;e++)if(i[e]!==t[e])return!1;return!0}function Xe(i,t){for(let e=0,s=t.length;e<s;e++)i[e]=t[e]}function ga(i,t){let e=Vu[t];e===void 0&&(e=new Int32Array(t),Vu[t]=e);for(let s=0;s!==t;++s)e[s]=i.allocateTextureUnit();return e}function Vy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Gy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),Xe(e,t)}}function Wy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),Xe(e,t)}}function Xy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),Xe(e,t)}}function Zy(i,t){const e=this.cache,s=t.elements;if(s===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,s))return;Xu.set(s),i.uniformMatrix2fv(this.addr,!1,Xu),Xe(e,s)}}function qy(i,t){const e=this.cache,s=t.elements;if(s===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,s))return;Wu.set(s),i.uniformMatrix3fv(this.addr,!1,Wu),Xe(e,s)}}function Yy(i,t){const e=this.cache,s=t.elements;if(s===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,s))return;Gu.set(s),i.uniformMatrix4fv(this.addr,!1,Gu),Xe(e,s)}}function $y(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ky(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),Xe(e,t)}}function Jy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),Xe(e,t)}}function jy(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),Xe(e,t)}}function Qy(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),Xe(e,t)}}function eM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),Xe(e,t)}}function iM(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),Xe(e,t)}}function nM(i,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(i.uniform1i(this.addr,r),s[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=e.isReversedDepthBuffer()?Hc:zc,a=_c):a=Yd,e.setTexture2D(t||a,r)}function sM(i,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(i.uniform1i(this.addr,r),s[0]=r),e.setTexture3D(t||Kd,r)}function rM(i,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(i.uniform1i(this.addr,r),s[0]=r),e.setTextureCube(t||Jd,r)}function oM(i,t,e){const s=this.cache,r=e.allocateTextureUnit();s[0]!==r&&(i.uniform1i(this.addr,r),s[0]=r),e.setTexture2DArray(t||$d,r)}function aM(i){switch(i){case 5126:return Vy;case 35664:return Gy;case 35665:return Wy;case 35666:return Xy;case 35674:return Zy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return $y;case 35667:case 35671:return Ky;case 35668:case 35672:return Jy;case 35669:case 35673:return jy;case 5125:return Qy;case 36294:return tM;case 36295:return eM;case 36296:return iM;case 35678:case 36198:case 36298:case 36306:case 35682:return nM;case 35679:case 36299:case 36307:return sM;case 35680:case 36300:case 36308:case 36293:return rM;case 36289:case 36303:case 36311:case 36292:return oM}}function lM(i,t){i.uniform1fv(this.addr,t)}function cM(i,t){const e=nr(t,this.size,2);i.uniform2fv(this.addr,e)}function hM(i,t){const e=nr(t,this.size,3);i.uniform3fv(this.addr,e)}function uM(i,t){const e=nr(t,this.size,4);i.uniform4fv(this.addr,e)}function dM(i,t){const e=nr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fM(i,t){const e=nr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pM(i,t){const e=nr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mM(i,t){i.uniform1iv(this.addr,t)}function _M(i,t){i.uniform2iv(this.addr,t)}function gM(i,t){i.uniform3iv(this.addr,t)}function vM(i,t){i.uniform4iv(this.addr,t)}function xM(i,t){i.uniform1uiv(this.addr,t)}function yM(i,t){i.uniform2uiv(this.addr,t)}function MM(i,t){i.uniform3uiv(this.addr,t)}function EM(i,t){i.uniform4uiv(this.addr,t)}function SM(i,t,e){const s=this.cache,r=t.length,a=ga(e,r);We(s,a)||(i.uniform1iv(this.addr,a),Xe(s,a));let c;this.type===i.SAMPLER_2D_SHADOW?c=_c:c=Yd;for(let h=0;h!==r;++h)e.setTexture2D(t[h]||c,a[h])}function wM(i,t,e){const s=this.cache,r=t.length,a=ga(e,r);We(s,a)||(i.uniform1iv(this.addr,a),Xe(s,a));for(let c=0;c!==r;++c)e.setTexture3D(t[c]||Kd,a[c])}function bM(i,t,e){const s=this.cache,r=t.length,a=ga(e,r);We(s,a)||(i.uniform1iv(this.addr,a),Xe(s,a));for(let c=0;c!==r;++c)e.setTextureCube(t[c]||Jd,a[c])}function TM(i,t,e){const s=this.cache,r=t.length,a=ga(e,r);We(s,a)||(i.uniform1iv(this.addr,a),Xe(s,a));for(let c=0;c!==r;++c)e.setTexture2DArray(t[c]||$d,a[c])}function AM(i){switch(i){case 5126:return lM;case 35664:return cM;case 35665:return hM;case 35666:return uM;case 35674:return dM;case 35675:return fM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return _M;case 35668:case 35672:return gM;case 35669:case 35673:return vM;case 5125:return xM;case 36294:return yM;case 36295:return MM;case 36296:return EM;case 35678:case 36198:case 36298:case 36306:case 35682:return SM;case 35679:case 36299:case 36307:return wM;case 35680:case 36300:case 36308:case 36293:return bM;case 36289:case 36303:case 36311:case 36292:return TM}}class CM{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.setValue=aM(e.type)}}class PM{constructor(t,e,s){this.id=t,this.addr=s,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=AM(e.type)}}class LM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,s){const r=this.seq;for(let a=0,c=r.length;a!==c;++a){const h=r[a];h.setValue(t,e[h.id],s)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function Zu(i,t){i.seq.push(t),i.map[t.id]=t}function RM(i,t,e){const s=i.name,r=s.length;for(Sl.lastIndex=0;;){const a=Sl.exec(s),c=Sl.lastIndex;let h=a[1];const d=a[2]==="]",f=a[3];if(d&&(h=h|0),f===void 0||f==="["&&c+2===r){Zu(e,f===void 0?new CM(h,i,t):new PM(h,i,t));break}else{let g=e.map[h];g===void 0&&(g=new LM(h),Zu(e,g)),e=g}}}class Ko{constructor(t,e){this.seq=[],this.map={};const s=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<s;++c){const h=t.getActiveUniform(e,c),d=t.getUniformLocation(e,h.name);RM(h,d,this)}const r=[],a=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(c):a.push(c);r.length>0&&(this.seq=r.concat(a))}setValue(t,e,s,r){const a=this.map[e];a!==void 0&&a.setValue(t,s,r)}setOptional(t,e,s){const r=e[s];r!==void 0&&this.setValue(t,s,r)}static upload(t,e,s,r){for(let a=0,c=e.length;a!==c;++a){const h=e[a],d=s[h.id];d.needsUpdate!==!1&&h.setValue(t,d.value,r)}}static seqWithValue(t,e){const s=[];for(let r=0,a=t.length;r!==a;++r){const c=t[r];c.id in e&&s.push(c)}return s}}function qu(i,t,e){const s=i.createShader(t);return i.shaderSource(s,e),i.compileShader(s),s}const IM=37297;let DM=0;function NM(i,t){const e=i.split(`
`),s=[],r=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let c=r;c<a;c++){const h=c+1;s.push(`${h===t?">":" "} ${h}: ${e[c]}`)}return s.join(`
`)}const Yu=new Jt;function OM(i){le._getMatrix(Yu,le.workingColorSpace,i);const t=`mat3( ${Yu.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(i)){case ia:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $u(i,t,e){const s=i.getShaderParameter(t,i.COMPILE_STATUS),a=(i.getShaderInfoLog(t)||"").trim();if(s&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const h=parseInt(c[1]);return e.toUpperCase()+`

`+a+`

`+NM(i.getShaderSource(t),h)}else return a}function UM(i,t){const e=OM(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const FM={[Dc]:"Linear",[yd]:"Reinhard",[Md]:"Cineon",[Ed]:"ACESFilmic",[wd]:"AgX",[bd]:"Neutral",[Sd]:"Custom"};function kM(i,t){const e=FM[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ho=new G;function BM(){le.getLuminanceCoefficients(Ho);const i=Ho.x.toFixed(4),t=Ho.y.toFixed(4),e=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function HM(i){const t=[];for(const e in i){const s=i[e];s!==!1&&t.push("#define "+e+" "+s)}return t.join(`
`)}function VM(i,t){const e={},s=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<s;r++){const a=i.getActiveAttrib(t,r),c=a.name;let h=1;a.type===i.FLOAT_MAT2&&(h=2),a.type===i.FLOAT_MAT3&&(h=3),a.type===i.FLOAT_MAT4&&(h=4),e[c]={type:a.type,location:i.getAttribLocation(t,c),locationSize:h}}return e}function br(i){return i!==""}function Ku(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GM=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(i){return i.replace(GM,XM)}const WM=new Map;function XM(i,t){let e=se[t];if(e===void 0){const s=WM.get(t);if(s!==void 0)e=se[s],Xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return gc(e)}const ZM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(i){return i.replace(ZM,qM)}function qM(i,t,e,s){let r="";for(let a=parseInt(t);a<parseInt(e);a++)r+=s.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Qu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const YM={[Xo]:"SHADOWMAP_TYPE_PCF",[wr]:"SHADOWMAP_TYPE_VSM"};function $M(i){return YM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const KM={[hs]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE_UV"};function JM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":KM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const jM={[Js]:"ENVMAP_MODE_REFRACTION"};function QM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":jM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const tE={[xd]:"ENVMAP_BLENDING_MULTIPLY",[wg]:"ENVMAP_BLENDING_MIX",[bg]:"ENVMAP_BLENDING_ADD"};function eE(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":tE[i.combine]||"ENVMAP_BLENDING_NONE"}function iE(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:s,maxMip:e}}function nE(i,t,e,s){const r=i.getContext(),a=e.defines;let c=e.vertexShader,h=e.fragmentShader;const d=$M(e),f=JM(e),p=QM(e),g=eE(e),_=iE(e),M=zM(e),w=HM(a),T=r.createProgram();let v,x,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(br).join(`
`),v.length>0&&(v+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(br).join(`
`),x.length>0&&(x+=`
`)):(v=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),x=[Qu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==an?"#define TONE_MAPPING":"",e.toneMapping!==an?se.tonemapping_pars_fragment:"",e.toneMapping!==an?kM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,UM("linearToOutputTexel",e.outputColorSpace),BM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),c=gc(c),c=Ku(c,e),c=Ju(c,e),h=gc(h),h=Ku(h,e),h=Ju(h,e),c=ju(c),h=ju(h),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,v=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,x=["#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=D+v+c,A=D+x+h,I=qu(r,r.VERTEX_SHADER,N),P=qu(r,r.FRAGMENT_SHADER,A);r.attachShader(T,I),r.attachShader(T,P),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function U(F){if(i.debug.checkShaderErrors){const W=r.getProgramInfoLog(T)||"",at=r.getShaderInfoLog(I)||"",lt=r.getShaderInfoLog(P)||"",Y=W.trim(),it=at.trim(),$=lt.trim();let J=!0,pt=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,I,P);else{const ot=$u(r,I,"vertex"),ft=$u(r,P,"fragment");fe("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+Y+`
`+ot+`
`+ft)}else Y!==""?Xt("WebGLProgram: Program Info Log:",Y):(it===""||$==="")&&(pt=!1);pt&&(F.diagnostics={runnable:J,programLog:Y,vertexShader:{log:it,prefix:v},fragmentShader:{log:$,prefix:x}})}r.deleteShader(I),r.deleteShader(P),E=new Ko(r,T),R=VM(r,T)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let R;this.getAttributes=function(){return R===void 0&&U(this),R};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=r.getProgramParameter(T,IM)),H},this.destroy=function(){s.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=DM++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=P,this}let sE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,s){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const s of e)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let s=e.get(t);return s===void 0&&(s=new Set,e.set(t,s)),s}_getShaderStage(t){const e=this.shaderCache;let s=e.get(t);return s===void 0&&(s=new oE(t),e.set(t,s)),s}}class oE{constructor(t){this.id=sE++,this.code=t,this.usedTimes=0}}function aE(i){return i===us||i===ta||i===ea}function lE(i,t,e,s,r,a){const c=new Wc,h=new rE,d=new Set,f=[],p=new Map,g=s.logarithmicDepthBuffer;let _=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return d.add(E),E===0?"uv":`uv${E}`}function T(E,R,H,F,W,at){const lt=F.fog,Y=W.geometry,it=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,$=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,J=t.get(E.envMap||it,$),pt=J&&J.mapping===pa?J.image.height:null,ot=M[E.type];E.precision!==null&&(_=s.getMaxPrecision(E.precision),_!==E.precision&&Xt("WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,wt=ft!==void 0?ft.length:0;let qt=0;Y.morphAttributes.position!==void 0&&(qt=1),Y.morphAttributes.normal!==void 0&&(qt=2),Y.morphAttributes.color!==void 0&&(qt=3);let jt,Nt,j,mt;if(ot){const It=nn[ot];jt=It.vertexShader,Nt=It.fragmentShader}else{jt=E.vertexShader,Nt=E.fragmentShader;const It=h.getVertexShaderStage(E),De=h.getFragmentShaderStage(E);h.update(E,It,De),j=It.id,mt=De.id}const dt=i.getRenderTarget(),Vt=i.state.buffers.depth.getReversed(),Yt=W.isInstancedMesh===!0,zt=W.isBatchedMesh===!0,Te=!!E.map,ne=!!E.matcap,Ee=!!J,ue=!!E.aoMap,ae=!!E.lightMap,Re=!!E.bumpMap&&E.wireframe===!1,Ie=!!E.normalMap,ke=!!E.displacementMap,Be=!!E.emissiveMap,Ce=!!E.metalnessMap,Ue=!!E.roughnessMap,B=E.anisotropy>0,ni=E.clearcoat>0,ge=E.dispersion>0,C=E.iridescence>0,y=E.sheen>0,V=E.transmission>0,K=B&&!!E.anisotropyMap,et=ni&&!!E.clearcoatMap,_t=ni&&!!E.clearcoatNormalMap,yt=ni&&!!E.clearcoatRoughnessMap,nt=C&&!!E.iridescenceMap,st=C&&!!E.iridescenceThicknessMap,Mt=y&&!!E.sheenColorMap,Ft=y&&!!E.sheenRoughnessMap,vt=!!E.specularMap,Et=!!E.specularColorMap,Bt=!!E.specularIntensityMap,Ht=V&&!!E.transmissionMap,Kt=V&&!!E.thicknessMap,k=!!E.gradientMap,xt=!!E.alphaMap,rt=E.alphaTest>0,St=!!E.alphaHash,At=!!E.extensions;let ct=an;E.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(ct=i.toneMapping);const Ot={shaderID:ot,shaderType:E.type,shaderName:E.name,vertexShader:jt,fragmentShader:Nt,defines:E.defines,customVertexShaderID:j,customFragmentShaderID:mt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:zt,batchingColor:zt&&W._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&W.instanceColor!==null,instancingMorph:Yt&&W.morphTexture!==null,outputColorSpace:dt===null?i.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Te,matcap:ne,envMap:Ee,envMapMode:Ee&&J.mapping,envMapCubeUVHeight:pt,aoMap:ue,lightMap:ae,bumpMap:Re,normalMap:Ie,displacementMap:ke,emissiveMap:Be,normalMapObjectSpace:Ie&&E.normalMapType===Cg,normalMapTangentSpace:Ie&&E.normalMapType===ou,packedNormalMap:Ie&&E.normalMapType===ou&&aE(E.normalMap.format),metalnessMap:Ce,roughnessMap:Ue,anisotropy:B,anisotropyMap:K,clearcoat:ni,clearcoatMap:et,clearcoatNormalMap:_t,clearcoatRoughnessMap:yt,dispersion:ge,iridescence:C,iridescenceMap:nt,iridescenceThicknessMap:st,sheen:y,sheenColorMap:Mt,sheenRoughnessMap:Ft,specularMap:vt,specularColorMap:Et,specularIntensityMap:Bt,transmission:V,transmissionMap:Ht,thicknessMap:Kt,gradientMap:k,opaque:E.transparent===!1&&E.blending===Zs&&E.alphaToCoverage===!1,alphaMap:xt,alphaTest:rt,alphaHash:St,combine:E.combine,mapUv:Te&&w(E.map.channel),aoMapUv:ue&&w(E.aoMap.channel),lightMapUv:ae&&w(E.lightMap.channel),bumpMapUv:Re&&w(E.bumpMap.channel),normalMapUv:Ie&&w(E.normalMap.channel),displacementMapUv:ke&&w(E.displacementMap.channel),emissiveMapUv:Be&&w(E.emissiveMap.channel),metalnessMapUv:Ce&&w(E.metalnessMap.channel),roughnessMapUv:Ue&&w(E.roughnessMap.channel),anisotropyMapUv:K&&w(E.anisotropyMap.channel),clearcoatMapUv:et&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:_t&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:st&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&w(E.sheenRoughnessMap.channel),specularMapUv:vt&&w(E.specularMap.channel),specularColorMapUv:Et&&w(E.specularColorMap.channel),specularIntensityMapUv:Bt&&w(E.specularIntensityMap.channel),transmissionMapUv:Ht&&w(E.transmissionMap.channel),thicknessMapUv:Kt&&w(E.thicknessMap.channel),alphaMapUv:xt&&w(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Ie||B),vertexNormals:!!Y.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!Y.attributes.uv&&(Te||xt),fog:!!lt,useFog:E.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Y.attributes.normal===void 0&&Ie===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Vt,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:qt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:at.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:ct,decodeVideoTexture:Te&&E.map.isVideoTexture===!0&&le.getTransfer(E.map.colorSpace)===we,decodeVideoTextureEmissive:Be&&E.emissiveMap.isVideoTexture===!0&&le.getTransfer(E.emissiveMap.colorSpace)===we,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Mn,flipSided:E.side===fi,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:At&&E.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&E.extensions.multiDraw===!0||zt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ot.vertexUv1s=d.has(1),Ot.vertexUv2s=d.has(2),Ot.vertexUv3s=d.has(3),d.clear(),Ot}function v(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)R.push(H),R.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(x(R,E),D(R,E),R.push(i.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function x(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function D(E,R){c.disableAll(),R.instancing&&c.enable(0),R.instancingColor&&c.enable(1),R.instancingMorph&&c.enable(2),R.matcap&&c.enable(3),R.envMap&&c.enable(4),R.normalMapObjectSpace&&c.enable(5),R.normalMapTangentSpace&&c.enable(6),R.clearcoat&&c.enable(7),R.iridescence&&c.enable(8),R.alphaTest&&c.enable(9),R.vertexColors&&c.enable(10),R.vertexAlphas&&c.enable(11),R.vertexUv1s&&c.enable(12),R.vertexUv2s&&c.enable(13),R.vertexUv3s&&c.enable(14),R.vertexTangents&&c.enable(15),R.anisotropy&&c.enable(16),R.alphaHash&&c.enable(17),R.batching&&c.enable(18),R.dispersion&&c.enable(19),R.batchingColor&&c.enable(20),R.gradientMap&&c.enable(21),R.packedNormalMap&&c.enable(22),R.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reversedDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),R.numLightProbeGrids>0&&c.enable(22),R.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function N(E){const R=M[E.type];let H;if(R){const F=nn[R];H=Tv.clone(F.uniforms)}else H=E.uniforms;return H}function A(E,R){let H=p.get(R);return H!==void 0?++H.usedTimes:(H=new nE(i,R,E,r),f.push(H),p.set(R,H)),H}function I(E){if(--E.usedTimes===0){const R=f.indexOf(E);f[R]=f[f.length-1],f.pop(),p.delete(E.cacheKey),E.destroy()}}function P(E){h.remove(E)}function U(){h.dispose()}return{getParameters:T,getProgramCacheKey:v,getUniforms:N,acquireProgram:A,releaseProgram:I,releaseShaderCache:P,programs:f,dispose:U}}function cE(){let i=new WeakMap;function t(c){return i.has(c)}function e(c){let h=i.get(c);return h===void 0&&(h={},i.set(c,h)),h}function s(c){i.delete(c)}function r(c,h,d){i.get(c)[h]=d}function a(){i=new WeakMap}return{has:t,get:e,remove:s,update:r,dispose:a}}function hE(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function td(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ed(){const i=[];let t=0;const e=[],s=[],r=[];function a(){t=0,e.length=0,s.length=0,r.length=0}function c(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function h(_,M,w,T,v,x){let D=i[t];return D===void 0?(D={id:_.id,object:_,geometry:M,material:w,materialVariant:c(_),groupOrder:T,renderOrder:_.renderOrder,z:v,group:x},i[t]=D):(D.id=_.id,D.object=_,D.geometry=M,D.material=w,D.materialVariant=c(_),D.groupOrder=T,D.renderOrder=_.renderOrder,D.z=v,D.group=x),t++,D}function d(_,M,w,T,v,x){const D=h(_,M,w,T,v,x);w.transmission>0?s.push(D):w.transparent===!0?r.push(D):e.push(D)}function f(_,M,w,T,v,x){const D=h(_,M,w,T,v,x);w.transmission>0?s.unshift(D):w.transparent===!0?r.unshift(D):e.unshift(D)}function p(_,M,w){e.length>1&&e.sort(_||hE),s.length>1&&s.sort(M||td),r.length>1&&r.sort(M||td),w&&(e.reverse(),s.reverse(),r.reverse())}function g(){for(let _=t,M=i.length;_<M;_++){const w=i[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:e,transmissive:s,transparent:r,init:a,push:d,unshift:f,finish:g,sort:p}}function uE(){let i=new WeakMap;function t(s,r){const a=i.get(s);let c;return a===void 0?(c=new ed,i.set(s,[c])):r>=a.length?(c=new ed,a.push(c)):c=a[r],c}function e(){i=new WeakMap}return{get:t,dispose:e}}function dE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new G,color:new xe};break;case"SpotLight":e={position:new G,direction:new G,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new xe,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":e={color:new xe,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function fE(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let pE=0;function mE(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function _E(i){const t=new dE,e=fE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)s.probe.push(new G);const r=new G,a=new Oe,c=new Oe;function h(f){let p=0,g=0,_=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let M=0,w=0,T=0,v=0,x=0,D=0,N=0,A=0,I=0,P=0,U=0;f.sort(mE);for(let R=0,H=f.length;R<H;R++){const F=f[R],W=F.color,at=F.intensity,lt=F.distance;let Y=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===us?Y=F.shadow.map.texture:Y=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)p+=W.r*at,g+=W.g*at,_+=W.b*at;else if(F.isLightProbe){for(let it=0;it<9;it++)s.probe[it].addScaledVector(F.sh.coefficients[it],at);U++}else if(F.isDirectionalLight){const it=t.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,J=e.get(F);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,s.directionalShadow[M]=J,s.directionalShadowMap[M]=Y,s.directionalShadowMatrix[M]=F.shadow.matrix,D++}s.directional[M]=it,M++}else if(F.isSpotLight){const it=t.get(F);it.position.setFromMatrixPosition(F.matrixWorld),it.color.copy(W).multiplyScalar(at),it.distance=lt,it.coneCos=Math.cos(F.angle),it.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),it.decay=F.decay,s.spot[T]=it;const $=F.shadow;if(F.map&&(s.spotLightMap[I]=F.map,I++,$.updateMatrices(F),F.castShadow&&P++),s.spotLightMatrix[T]=$.matrix,F.castShadow){const J=e.get(F);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,s.spotShadow[T]=J,s.spotShadowMap[T]=Y,A++}T++}else if(F.isRectAreaLight){const it=t.get(F);it.color.copy(W).multiplyScalar(at),it.halfWidth.set(F.width*.5,0,0),it.halfHeight.set(0,F.height*.5,0),s.rectArea[v]=it,v++}else if(F.isPointLight){const it=t.get(F);if(it.color.copy(F.color).multiplyScalar(F.intensity),it.distance=F.distance,it.decay=F.decay,F.castShadow){const $=F.shadow,J=e.get(F);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,s.pointShadow[w]=J,s.pointShadowMap[w]=Y,s.pointShadowMatrix[w]=F.shadow.matrix,N++}s.point[w]=it,w++}else if(F.isHemisphereLight){const it=t.get(F);it.skyColor.copy(F.color).multiplyScalar(at),it.groundColor.copy(F.groundColor).multiplyScalar(at),s.hemi[x]=it,x++}}v>0&&(i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Tt.LTC_FLOAT_1,s.rectAreaLTC2=Tt.LTC_FLOAT_2):(s.rectAreaLTC1=Tt.LTC_HALF_1,s.rectAreaLTC2=Tt.LTC_HALF_2)),s.ambient[0]=p,s.ambient[1]=g,s.ambient[2]=_;const E=s.hash;(E.directionalLength!==M||E.pointLength!==w||E.spotLength!==T||E.rectAreaLength!==v||E.hemiLength!==x||E.numDirectionalShadows!==D||E.numPointShadows!==N||E.numSpotShadows!==A||E.numSpotMaps!==I||E.numLightProbes!==U)&&(s.directional.length=M,s.spot.length=T,s.rectArea.length=v,s.point.length=w,s.hemi.length=x,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=A,s.spotShadowMap.length=A,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=A+I-P,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=U,E.directionalLength=M,E.pointLength=w,E.spotLength=T,E.rectAreaLength=v,E.hemiLength=x,E.numDirectionalShadows=D,E.numPointShadows=N,E.numSpotShadows=A,E.numSpotMaps=I,E.numLightProbes=U,s.version=pE++)}function d(f,p){let g=0,_=0,M=0,w=0,T=0;const v=p.matrixWorldInverse;for(let x=0,D=f.length;x<D;x++){const N=f[x];if(N.isDirectionalLight){const A=s.directional[g];A.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(v),g++}else if(N.isSpotLight){const A=s.spot[M];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(v),A.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(v),M++}else if(N.isRectAreaLight){const A=s.rectArea[w];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(v),c.identity(),a.copy(N.matrixWorld),a.premultiply(v),c.extractRotation(a),A.halfWidth.set(N.width*.5,0,0),A.halfHeight.set(0,N.height*.5,0),A.halfWidth.applyMatrix4(c),A.halfHeight.applyMatrix4(c),w++}else if(N.isPointLight){const A=s.point[_];A.position.setFromMatrixPosition(N.matrixWorld),A.position.applyMatrix4(v),_++}else if(N.isHemisphereLight){const A=s.hemi[T];A.direction.setFromMatrixPosition(N.matrixWorld),A.direction.transformDirection(v),T++}}}return{setup:h,setupView:d,state:s}}function id(i){const t=new _E(i),e=[],s=[],r=[];function a(_){g.camera=_,e.length=0,s.length=0,r.length=0}function c(_){e.push(_)}function h(_){s.push(_)}function d(_){r.push(_)}function f(){t.setup(e)}function p(_){t.setupView(e,_)}const g={lightsArray:e,shadowsArray:s,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:h,pushLightProbeGrid:d}}function gE(i){let t=new WeakMap;function e(r,a=0){const c=t.get(r);let h;return c===void 0?(h=new id(i),t.set(r,[h])):a>=c.length?(h=new id(i),c.push(h)):h=c[a],h}function s(){t=new WeakMap}return{get:e,dispose:s}}const vE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yE=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],ME=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],nd=new Oe,yr=new G,wl=new G;function EE(i,t,e){let s=new Zc;const r=new he,a=new he,c=new Fe,h=new Lv,d=new Rv,f={},p=e.maxTextureSize,g={[Zn]:fi,[fi]:Zn,[Mn]:Mn},_=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:vE,fragmentShader:xE}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const w=new hn;w.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new _i(w,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xo;let x=this.type;this.render=function(P,U,E){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||P.length===0)return;this.type===rg&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Xo);const R=i.getRenderTarget(),H=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Sn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const at=x!==this.type;at&&U.traverse(function(lt){lt.material&&(Array.isArray(lt.material)?lt.material.forEach(Y=>Y.needsUpdate=!0):lt.material.needsUpdate=!0)});for(let lt=0,Y=P.length;lt<Y;lt++){const it=P[lt],$=it.shadow;if($===void 0){Xt("WebGLShadowMap:",it,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const J=$.getFrameExtents();r.multiply(J),a.copy($.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(a.x=Math.floor(p/J.x),r.x=a.x*J.x,$.mapSize.x=a.x),r.y>p&&(a.y=Math.floor(p/J.y),r.y=a.y*J.y,$.mapSize.y=a.y));const pt=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=pt,$.map===null||at===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===wr){if(it.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Wi(r.x,r.y,{format:us,type:An,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),$.map.texture.name=it.name+".shadowMap",$.map.depthTexture=new js(r.x,r.y,sn),$.map.depthTexture.name=it.name+".shadowMapDepth",$.map.depthTexture.format=Cn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=ii,$.map.depthTexture.magFilter=ii}else it.isPointLight?($.map=new qd(r.x),$.map.depthTexture=new wv(r.x,cn)):($.map=new Wi(r.x,r.y),$.map.depthTexture=new js(r.x,r.y,cn)),$.map.depthTexture.name=it.name+".shadowMap",$.map.depthTexture.format=Cn,this.type===Xo?($.map.depthTexture.compareFunction=pt?Hc:zc,$.map.depthTexture.minFilter=Ge,$.map.depthTexture.magFilter=Ge):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=ii,$.map.depthTexture.magFilter=ii);$.camera.updateProjectionMatrix()}const ot=$.map.isWebGLCubeRenderTarget?6:1;for(let ft=0;ft<ot;ft++){if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,ft),i.clear();else{ft===0&&(i.setRenderTarget($.map),i.clear());const wt=$.getViewport(ft);c.set(a.x*wt.x,a.y*wt.y,a.x*wt.z,a.y*wt.w),W.viewport(c)}if(it.isPointLight){const wt=$.camera,qt=$.matrix,jt=it.distance||wt.far;jt!==wt.far&&(wt.far=jt,wt.updateProjectionMatrix()),yr.setFromMatrixPosition(it.matrixWorld),wt.position.copy(yr),wl.copy(wt.position),wl.add(yE[ft]),wt.up.copy(ME[ft]),wt.lookAt(wl),wt.updateMatrixWorld(),qt.makeTranslation(-yr.x,-yr.y,-yr.z),nd.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(nd,wt.coordinateSystem,wt.reversedDepth)}else $.updateMatrices(it);s=$.getFrustum(),A(U,E,$.camera,it,this.type)}$.isPointLightShadow!==!0&&this.type===wr&&D($,E),$.needsUpdate=!1}x=this.type,v.needsUpdate=!1,i.setRenderTarget(R,H,F)};function D(P,U){const E=t.update(T);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Wi(r.x,r.y,{format:us,type:An})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(U,null,E,_,T,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(U,null,E,M,T,null)}function N(P,U,E,R){let H=null;const F=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(F!==void 0)H=F;else if(H=E.isPointLight===!0?d:h,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const W=H.uuid,at=U.uuid;let lt=f[W];lt===void 0&&(lt={},f[W]=lt);let Y=lt[at];Y===void 0&&(Y=H.clone(),lt[at]=Y,U.addEventListener("dispose",I)),H=Y}if(H.visible=U.visible,H.wireframe=U.wireframe,R===wr?H.side=U.shadowSide!==null?U.shadowSide:U.side:H.side=U.shadowSide!==null?U.shadowSide:g[U.side],H.alphaMap=U.alphaMap,H.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,H.map=U.map,H.clipShadows=U.clipShadows,H.clippingPlanes=U.clippingPlanes,H.clipIntersection=U.clipIntersection,H.displacementMap=U.displacementMap,H.displacementScale=U.displacementScale,H.displacementBias=U.displacementBias,H.wireframeLinewidth=U.wireframeLinewidth,H.linewidth=U.linewidth,E.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const W=i.properties.get(H);W.light=E}return H}function A(P,U,E,R,H){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&H===wr)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const at=t.update(P),lt=P.material;if(Array.isArray(lt)){const Y=at.groups;for(let it=0,$=Y.length;it<$;it++){const J=Y[it],pt=lt[J.materialIndex];if(pt&&pt.visible){const ot=N(P,pt,R,H);P.onBeforeShadow(i,P,U,E,at,ot,J),i.renderBufferDirect(E,null,at,ot,P,J),P.onAfterShadow(i,P,U,E,at,ot,J)}}}else if(lt.visible){const Y=N(P,lt,R,H);P.onBeforeShadow(i,P,U,E,at,Y,null),i.renderBufferDirect(E,null,at,Y,P,null),P.onAfterShadow(i,P,U,E,at,Y,null)}}const W=P.children;for(let at=0,lt=W.length;at<lt;at++)A(W[at],U,E,R,H)}function I(P){P.target.removeEventListener("dispose",I);for(const E in f){const R=f[E],H=P.target.uuid;H in R&&(R[H].dispose(),delete R[H])}}}function SE(i,t){function e(){let k=!1;const xt=new Fe;let rt=null;const St=new Fe(0,0,0,0);return{setMask:function(At){rt!==At&&!k&&(i.colorMask(At,At,At,At),rt=At)},setLocked:function(At){k=At},setClear:function(At,ct,Ot,It,De){De===!0&&(At*=It,ct*=It,Ot*=It),xt.set(At,ct,Ot,It),St.equals(xt)===!1&&(i.clearColor(At,ct,Ot,It),St.copy(xt))},reset:function(){k=!1,rt=null,St.set(-1,0,0,0)}}}function s(){let k=!1,xt=!1,rt=null,St=null,At=null;return{setReversed:function(ct){if(xt!==ct){const Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),xt=ct;const It=At;At=null,this.setClear(It)}},getReversed:function(){return xt},setTest:function(ct){ct?dt(i.DEPTH_TEST):Vt(i.DEPTH_TEST)},setMask:function(ct){rt!==ct&&!k&&(i.depthMask(ct),rt=ct)},setFunc:function(ct){if(xt&&(ct=kg[ct]),St!==ct){switch(ct){case Pl:i.depthFunc(i.NEVER);break;case Ll:i.depthFunc(i.ALWAYS);break;case Rl:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Il:i.depthFunc(i.EQUAL);break;case Dl:i.depthFunc(i.GEQUAL);break;case Nl:i.depthFunc(i.GREATER);break;case Ol:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=ct}},setLocked:function(ct){k=ct},setClear:function(ct){At!==ct&&(At=ct,xt&&(ct=1-ct),i.clearDepth(ct))},reset:function(){k=!1,rt=null,St=null,At=null,xt=!1}}}function r(){let k=!1,xt=null,rt=null,St=null,At=null,ct=null,Ot=null,It=null,De=null;return{setTest:function(be){k||(be?dt(i.STENCIL_TEST):Vt(i.STENCIL_TEST))},setMask:function(be){xt!==be&&!k&&(i.stencilMask(be),xt=be)},setFunc:function(be,Mi,Ei){(rt!==be||St!==Mi||At!==Ei)&&(i.stencilFunc(be,Mi,Ei),rt=be,St=Mi,At=Ei)},setOp:function(be,Mi,Ei){(ct!==be||Ot!==Mi||It!==Ei)&&(i.stencilOp(be,Mi,Ei),ct=be,Ot=Mi,It=Ei)},setLocked:function(be){k=be},setClear:function(be){De!==be&&(i.clearStencil(be),De=be)},reset:function(){k=!1,xt=null,rt=null,St=null,At=null,ct=null,Ot=null,It=null,De=null}}}const a=new e,c=new s,h=new r,d=new WeakMap,f=new WeakMap;let p={},g={},_={},M=new WeakMap,w=[],T=null,v=!1,x=null,D=null,N=null,A=null,I=null,P=null,U=null,E=new xe(0,0,0),R=0,H=!1,F=null,W=null,at=null,lt=null,Y=null;const it=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,J=0;const pt=i.getParameter(i.VERSION);pt.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(pt)[1]),$=J>=1):pt.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(pt)[1]),$=J>=2);let ot=null,ft={};const wt=i.getParameter(i.SCISSOR_BOX),qt=i.getParameter(i.VIEWPORT),jt=new Fe().fromArray(wt),Nt=new Fe().fromArray(qt);function j(k,xt,rt,St){const At=new Uint8Array(4),ct=i.createTexture();i.bindTexture(k,ct),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ot=0;Ot<rt;Ot++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(xt+Ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ct}const mt={};mt[i.TEXTURE_2D]=j(i.TEXTURE_2D,i.TEXTURE_2D,1),mt[i.TEXTURE_CUBE_MAP]=j(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[i.TEXTURE_2D_ARRAY]=j(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),mt[i.TEXTURE_3D]=j(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),dt(i.DEPTH_TEST),c.setFunc(Ks),Re(!1),Ie(iu),dt(i.CULL_FACE),ue(Sn);function dt(k){p[k]!==!0&&(i.enable(k),p[k]=!0)}function Vt(k){p[k]!==!1&&(i.disable(k),p[k]=!1)}function Yt(k,xt){return _[k]!==xt?(i.bindFramebuffer(k,xt),_[k]=xt,k===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=xt),k===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function zt(k,xt){let rt=w,St=!1;if(k){rt=M.get(xt),rt===void 0&&(rt=[],M.set(xt,rt));const At=k.textures;if(rt.length!==At.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,Ot=At.length;ct<Ot;ct++)rt[ct]=i.COLOR_ATTACHMENT0+ct;rt.length=At.length,St=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,St=!0);St&&i.drawBuffers(rt)}function Te(k){return T!==k?(i.useProgram(k),T=k,!0):!1}const ne={[os]:i.FUNC_ADD,[ag]:i.FUNC_SUBTRACT,[lg]:i.FUNC_REVERSE_SUBTRACT};ne[cg]=i.MIN,ne[hg]=i.MAX;const Ee={[ug]:i.ZERO,[dg]:i.ONE,[fg]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[xg]:i.SRC_ALPHA_SATURATE,[gg]:i.DST_COLOR,[mg]:i.DST_ALPHA,[pg]:i.ONE_MINUS_SRC_COLOR,[Cl]:i.ONE_MINUS_SRC_ALPHA,[vg]:i.ONE_MINUS_DST_COLOR,[_g]:i.ONE_MINUS_DST_ALPHA,[yg]:i.CONSTANT_COLOR,[Mg]:i.ONE_MINUS_CONSTANT_COLOR,[Eg]:i.CONSTANT_ALPHA,[Sg]:i.ONE_MINUS_CONSTANT_ALPHA};function ue(k,xt,rt,St,At,ct,Ot,It,De,be){if(k===Sn){v===!0&&(Vt(i.BLEND),v=!1);return}if(v===!1&&(dt(i.BLEND),v=!0),k!==og){if(k!==x||be!==H){if((D!==os||I!==os)&&(i.blendEquation(i.FUNC_ADD),D=os,I=os),be)switch(k){case Zs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nu:i.blendFunc(i.ONE,i.ONE);break;case su:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ru:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:fe("WebGLState: Invalid blending: ",k);break}else switch(k){case Zs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nu:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case su:fe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ru:fe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:fe("WebGLState: Invalid blending: ",k);break}N=null,A=null,P=null,U=null,E.set(0,0,0),R=0,x=k,H=be}return}At=At||xt,ct=ct||rt,Ot=Ot||St,(xt!==D||At!==I)&&(i.blendEquationSeparate(ne[xt],ne[At]),D=xt,I=At),(rt!==N||St!==A||ct!==P||Ot!==U)&&(i.blendFuncSeparate(Ee[rt],Ee[St],Ee[ct],Ee[Ot]),N=rt,A=St,P=ct,U=Ot),(It.equals(E)===!1||De!==R)&&(i.blendColor(It.r,It.g,It.b,De),E.copy(It),R=De),x=k,H=!1}function ae(k,xt){k.side===Mn?Vt(i.CULL_FACE):dt(i.CULL_FACE);let rt=k.side===fi;xt&&(rt=!rt),Re(rt),k.blending===Zs&&k.transparent===!1?ue(Sn):ue(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);const St=k.stencilWrite;h.setTest(St),St&&(h.setMask(k.stencilWriteMask),h.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),h.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Be(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?dt(i.SAMPLE_ALPHA_TO_COVERAGE):Vt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(k){F!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),F=k)}function Ie(k){k!==ng?(dt(i.CULL_FACE),k!==W&&(k===iu?i.cullFace(i.BACK):k===sg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Vt(i.CULL_FACE),W=k}function ke(k){k!==at&&($&&i.lineWidth(k),at=k)}function Be(k,xt,rt){k?(dt(i.POLYGON_OFFSET_FILL),(lt!==xt||Y!==rt)&&(lt=xt,Y=rt,c.getReversed()&&(xt=-xt),i.polygonOffset(xt,rt))):Vt(i.POLYGON_OFFSET_FILL)}function Ce(k){k?dt(i.SCISSOR_TEST):Vt(i.SCISSOR_TEST)}function Ue(k){k===void 0&&(k=i.TEXTURE0+it-1),ot!==k&&(i.activeTexture(k),ot=k)}function B(k,xt,rt){rt===void 0&&(ot===null?rt=i.TEXTURE0+it-1:rt=ot);let St=ft[rt];St===void 0&&(St={type:void 0,texture:void 0},ft[rt]=St),(St.type!==k||St.texture!==xt)&&(ot!==rt&&(i.activeTexture(rt),ot=rt),i.bindTexture(k,xt||mt[k]),St.type=k,St.texture=xt)}function ni(){const k=ft[ot];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(k){fe("WebGLState:",k)}}function C(){try{i.compressedTexImage3D(...arguments)}catch(k){fe("WebGLState:",k)}}function y(){try{i.texSubImage2D(...arguments)}catch(k){fe("WebGLState:",k)}}function V(){try{i.texSubImage3D(...arguments)}catch(k){fe("WebGLState:",k)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(k){fe("WebGLState:",k)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(k){fe("WebGLState:",k)}}function _t(){try{i.texStorage2D(...arguments)}catch(k){fe("WebGLState:",k)}}function yt(){try{i.texStorage3D(...arguments)}catch(k){fe("WebGLState:",k)}}function nt(){try{i.texImage2D(...arguments)}catch(k){fe("WebGLState:",k)}}function st(){try{i.texImage3D(...arguments)}catch(k){fe("WebGLState:",k)}}function Mt(k){return g[k]!==void 0?g[k]:i.getParameter(k)}function Ft(k,xt){g[k]!==xt&&(i.pixelStorei(k,xt),g[k]=xt)}function vt(k){jt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),jt.copy(k))}function Et(k){Nt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Nt.copy(k))}function Bt(k,xt){let rt=f.get(xt);rt===void 0&&(rt=new WeakMap,f.set(xt,rt));let St=rt.get(k);St===void 0&&(St=i.getUniformBlockIndex(xt,k.name),rt.set(k,St))}function Ht(k,xt){const St=f.get(xt).get(k);d.get(xt)!==St&&(i.uniformBlockBinding(xt,St,k.__bindingPointIndex),d.set(xt,St))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),p={},g={},ot=null,ft={},_={},M=new WeakMap,w=[],T=null,v=!1,x=null,D=null,N=null,A=null,I=null,P=null,U=null,E=new xe(0,0,0),R=0,H=!1,F=null,W=null,at=null,lt=null,Y=null,jt.set(0,0,i.canvas.width,i.canvas.height),Nt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:dt,disable:Vt,bindFramebuffer:Yt,drawBuffers:zt,useProgram:Te,setBlending:ue,setMaterial:ae,setFlipSided:Re,setCullFace:Ie,setLineWidth:ke,setPolygonOffset:Be,setScissorTest:Ce,activeTexture:Ue,bindTexture:B,unbindTexture:ni,compressedTexImage2D:ge,compressedTexImage3D:C,texImage2D:nt,texImage3D:st,pixelStorei:Ft,getParameter:Mt,updateUBOMapping:Bt,uniformBlockBinding:Ht,texStorage2D:_t,texStorage3D:yt,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:K,compressedTexSubImage3D:et,scissor:vt,viewport:Et,reset:Kt}}function wE(i,t,e,s,r,a,c){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new he,p=new WeakMap,g=new Set;let _;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(C,y){return w?new OffscreenCanvas(C,y):Wr("canvas")}function v(C,y,V){let K=1;const et=ge(C);if((et.width>V||et.height>V)&&(K=V/Math.max(et.width,et.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const _t=Math.floor(K*et.width),yt=Math.floor(K*et.height);_===void 0&&(_=T(_t,yt));const nt=y?T(_t,yt):_;return nt.width=_t,nt.height=yt,nt.getContext("2d").drawImage(C,0,0,_t,yt),Xt("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+_t+"x"+yt+")."),nt}else return"data"in C&&Xt("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function x(C){return C.generateMipmaps}function D(C){i.generateMipmap(C)}function N(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(C,y,V,K,et,_t=!1){if(C!==null){if(i[C]!==void 0)return i[C];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let yt;K&&(yt=t.get("EXT_texture_norm16"),yt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=y;if(y===i.RED&&(V===i.FLOAT&&(nt=i.R32F),V===i.HALF_FLOAT&&(nt=i.R16F),V===i.UNSIGNED_BYTE&&(nt=i.R8),V===i.UNSIGNED_SHORT&&yt&&(nt=yt.R16_EXT),V===i.SHORT&&yt&&(nt=yt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.R8UI),V===i.UNSIGNED_SHORT&&(nt=i.R16UI),V===i.UNSIGNED_INT&&(nt=i.R32UI),V===i.BYTE&&(nt=i.R8I),V===i.SHORT&&(nt=i.R16I),V===i.INT&&(nt=i.R32I)),y===i.RG&&(V===i.FLOAT&&(nt=i.RG32F),V===i.HALF_FLOAT&&(nt=i.RG16F),V===i.UNSIGNED_BYTE&&(nt=i.RG8),V===i.UNSIGNED_SHORT&&yt&&(nt=yt.RG16_EXT),V===i.SHORT&&yt&&(nt=yt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RG8UI),V===i.UNSIGNED_SHORT&&(nt=i.RG16UI),V===i.UNSIGNED_INT&&(nt=i.RG32UI),V===i.BYTE&&(nt=i.RG8I),V===i.SHORT&&(nt=i.RG16I),V===i.INT&&(nt=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),V===i.UNSIGNED_INT&&(nt=i.RGB32UI),V===i.BYTE&&(nt=i.RGB8I),V===i.SHORT&&(nt=i.RGB16I),V===i.INT&&(nt=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),V===i.UNSIGNED_INT&&(nt=i.RGBA32UI),V===i.BYTE&&(nt=i.RGBA8I),V===i.SHORT&&(nt=i.RGBA16I),V===i.INT&&(nt=i.RGBA32I)),y===i.RGB&&(V===i.UNSIGNED_SHORT&&yt&&(nt=yt.RGB16_EXT),V===i.SHORT&&yt&&(nt=yt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),y===i.RGBA){const st=_t?ia:le.getTransfer(et);V===i.FLOAT&&(nt=i.RGBA32F),V===i.HALF_FLOAT&&(nt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(nt=st===we?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&yt&&(nt=yt.RGBA16_EXT),V===i.SHORT&&yt&&(nt=yt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function I(C,y){let V;return C?y===null||y===cn||y===Vr?V=i.DEPTH24_STENCIL8:y===sn?V=i.DEPTH32F_STENCIL8:y===Hr&&(V=i.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===cn||y===Vr?V=i.DEPTH_COMPONENT24:y===sn?V=i.DEPTH_COMPONENT32F:y===Hr&&(V=i.DEPTH_COMPONENT16),V}function P(C,y){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==ii&&C.minFilter!==Ge?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function U(C){const y=C.target;y.removeEventListener("dispose",U),R(y),y.isVideoTexture&&p.delete(y),y.isHTMLTexture&&g.delete(y)}function E(C){const y=C.target;y.removeEventListener("dispose",E),F(y)}function R(C){const y=s.get(C);if(y.__webglInit===void 0)return;const V=C.source,K=M.get(V);if(K){const et=K[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&H(C),Object.keys(K).length===0&&M.delete(V)}s.remove(C)}function H(C){const y=s.get(C);i.deleteTexture(y.__webglTexture);const V=C.source,K=M.get(V);delete K[y.__cacheKey],c.memory.textures--}function F(C){const y=s.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),s.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let et=0;et<y.__webglFramebuffer[K].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[K][et]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=C.textures;for(let K=0,et=V.length;K<et;K++){const _t=s.get(V[K]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),c.memory.textures--),s.remove(V[K])}s.remove(C)}let W=0;function at(){W=0}function lt(){return W}function Y(C){W=C}function it(){const C=W;return C>=r.maxTextures&&Xt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),W+=1,C}function $(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function J(C,y){const V=s.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const K=C.image;if(K===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(V,C,y);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function pt(C,y){const V=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Vt(V,C,y);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function ot(C,y){const V=s.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){Vt(V,C,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function ft(C,y){const V=s.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){Yt(V,C,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}const wt={[Ul]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[Fl]:i.MIRRORED_REPEAT},qt={[ii]:i.NEAREST,[Tg]:i.NEAREST_MIPMAP_NEAREST,[yo]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Ka]:i.LINEAR_MIPMAP_NEAREST,[zn]:i.LINEAR_MIPMAP_LINEAR},jt={[Pg]:i.NEVER,[Ng]:i.ALWAYS,[Lg]:i.LESS,[zc]:i.LEQUAL,[Rg]:i.EQUAL,[Hc]:i.GEQUAL,[Ig]:i.GREATER,[Dg]:i.NOTEQUAL};function Nt(C,y){if(y.type===sn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ge||y.magFilter===Ka||y.magFilter===yo||y.magFilter===zn||y.minFilter===Ge||y.minFilter===Ka||y.minFilter===yo||y.minFilter===zn)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,wt[y.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,wt[y.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,wt[y.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,qt[y.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,qt[y.minFilter]),y.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,jt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ii||y.minFilter!==yo&&y.minFilter!==zn||y.type===sn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function j(C,y){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",U));const K=y.source;let et=M.get(K);et===void 0&&(et={},M.set(K,et));const _t=$(y);if(_t!==C.__cacheKey){et[_t]===void 0&&(et[_t]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,V=!0),et[_t].usedTimes++;const yt=et[C.__cacheKey];yt!==void 0&&(et[C.__cacheKey].usedTimes--,yt.usedTimes===0&&H(y)),C.__cacheKey=_t,C.__webglTexture=et[_t].texture}return V}function mt(C,y,V){return Math.floor(Math.floor(C/V)/y)}function dt(C,y,V,K){const _t=C.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,V,K,y.data);else{_t.sort((Ft,vt)=>Ft.start-vt.start);let yt=0;for(let Ft=1;Ft<_t.length;Ft++){const vt=_t[yt],Et=_t[Ft],Bt=vt.start+vt.count,Ht=mt(Et.start,y.width,4),Kt=mt(vt.start,y.width,4);Et.start<=Bt+1&&Ht===Kt&&mt(Et.start+Et.count-1,y.width,4)===Ht?vt.count=Math.max(vt.count,Et.start+Et.count-vt.start):(++yt,_t[yt]=Et)}_t.length=yt+1;const nt=e.getParameter(i.UNPACK_ROW_LENGTH),st=e.getParameter(i.UNPACK_SKIP_PIXELS),Mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Ft=0,vt=_t.length;Ft<vt;Ft++){const Et=_t[Ft],Bt=Math.floor(Et.start/4),Ht=Math.ceil(Et.count/4),Kt=Bt%y.width,k=Math.floor(Bt/y.width),xt=Ht,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,Kt,k,xt,rt,V,K,y.data)}C.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,st),e.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function Vt(C,y,V){let K=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=i.TEXTURE_3D);const et=j(C,y),_t=y.source;e.bindTexture(K,C.__webglTexture,i.TEXTURE0+V);const yt=s.get(_t);if(_t.version!==yt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const rt=le.getPrimaries(le.workingColorSpace),St=y.colorSpace===kn?null:le.getPrimaries(y.colorSpace),At=y.colorSpace===kn||rt===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let st=v(y.image,!1,r.maxTextureSize);st=ni(y,st);const Mt=a.convert(y.format,y.colorSpace),Ft=a.convert(y.type);let vt=A(y.internalFormat,Mt,Ft,y.normalized,y.colorSpace,y.isVideoTexture);Nt(K,y);let Et;const Bt=y.mipmaps,Ht=y.isVideoTexture!==!0,Kt=yt.__version===void 0||et===!0,k=_t.dataReady,xt=P(y,st);if(y.isDepthTexture)vt=I(y.format===ls,y.type),Kt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,vt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,vt,st.width,st.height,0,Mt,Ft,null));else if(y.isDataTexture)if(Bt.length>0){Ht&&Kt&&e.texStorage2D(i.TEXTURE_2D,xt,vt,Bt[0].width,Bt[0].height);for(let rt=0,St=Bt.length;rt<St;rt++)Et=Bt[rt],Ht?k&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Et.width,Et.height,Mt,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,rt,vt,Et.width,Et.height,0,Mt,Ft,Et.data);y.generateMipmaps=!1}else Ht?(Kt&&e.texStorage2D(i.TEXTURE_2D,xt,vt,st.width,st.height),k&&dt(y,st,Mt,Ft)):e.texImage2D(i.TEXTURE_2D,0,vt,st.width,st.height,0,Mt,Ft,st.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ht&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,vt,Bt[0].width,Bt[0].height,st.depth);for(let rt=0,St=Bt.length;rt<St;rt++)if(Et=Bt[rt],y.format!==Gi)if(Mt!==null)if(Ht){if(k)if(y.layerUpdates.size>0){const At=Nu(Et.width,Et.height,y.format,y.type);for(const ct of y.layerUpdates){const Ot=Et.data.subarray(ct*At/Et.data.BYTES_PER_ELEMENT,(ct+1)*At/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,ct,Et.width,Et.height,1,Mt,Ot)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Et.width,Et.height,st.depth,Mt,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,vt,Et.width,Et.height,st.depth,0,Et.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,Et.width,Et.height,st.depth,Mt,Ft,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,vt,Et.width,Et.height,st.depth,0,Mt,Ft,Et.data)}else{Ht&&Kt&&e.texStorage2D(i.TEXTURE_2D,xt,vt,Bt[0].width,Bt[0].height);for(let rt=0,St=Bt.length;rt<St;rt++)Et=Bt[rt],y.format!==Gi?Mt!==null?Ht?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,Et.width,Et.height,Mt,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,vt,Et.width,Et.height,0,Et.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?k&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Et.width,Et.height,Mt,Ft,Et.data):e.texImage2D(i.TEXTURE_2D,rt,vt,Et.width,Et.height,0,Mt,Ft,Et.data)}else if(y.isDataArrayTexture)if(Ht){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,vt,st.width,st.height,st.depth),k)if(y.layerUpdates.size>0){const rt=Nu(st.width,st.height,y.format,y.type);for(const St of y.layerUpdates){const At=st.data.subarray(St*rt/st.data.BYTES_PER_ELEMENT,(St+1)*rt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,st.width,st.height,1,Mt,Ft,At)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Mt,Ft,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,st.width,st.height,st.depth,0,Mt,Ft,st.data);else if(y.isData3DTexture)Ht?(Kt&&e.texStorage3D(i.TEXTURE_3D,xt,vt,st.width,st.height,st.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Mt,Ft,st.data)):e.texImage3D(i.TEXTURE_3D,0,vt,st.width,st.height,st.depth,0,Mt,Ft,st.data);else if(y.isFramebufferTexture){if(Kt)if(Ht)e.texStorage2D(i.TEXTURE_2D,xt,vt,st.width,st.height);else{let rt=st.width,St=st.height;for(let At=0;At<xt;At++)e.texImage2D(i.TEXTURE_2D,At,vt,rt,St,0,Mt,Ft,null),rt>>=1,St>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){const rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),st.parentNode!==rt){rt.appendChild(st),g.add(y),rt.onpaint=St=>{const At=St.changedElements;for(const ct of g)At.includes(ct.image)&&(ct.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,st);else{const At=i.RGBA,ct=i.RGBA,Ot=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,ct,Ot,st)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Ht&&Kt){const rt=ge(Bt[0]);e.texStorage2D(i.TEXTURE_2D,xt,vt,rt.width,rt.height)}for(let rt=0,St=Bt.length;rt<St;rt++)Et=Bt[rt],Ht?k&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,Mt,Ft,Et):e.texImage2D(i.TEXTURE_2D,rt,vt,Mt,Ft,Et);y.generateMipmaps=!1}else if(Ht){if(Kt){const rt=ge(st);e.texStorage2D(i.TEXTURE_2D,xt,vt,rt.width,rt.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Mt,Ft,st)}else e.texImage2D(i.TEXTURE_2D,0,vt,Mt,Ft,st);x(y)&&D(K),yt.__version=_t.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Yt(C,y,V){if(y.image.length!==6)return;const K=j(C,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);const _t=s.get(et);if(et.version!==_t.__version||K===!0){e.activeTexture(i.TEXTURE0+V);const yt=le.getPrimaries(le.workingColorSpace),nt=y.colorSpace===kn?null:le.getPrimaries(y.colorSpace),st=y.colorSpace===kn||yt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const Mt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ft=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let ct=0;ct<6;ct++)!Mt&&!Ft?vt[ct]=v(y.image[ct],!0,r.maxCubemapSize):vt[ct]=Ft?y.image[ct].image:y.image[ct],vt[ct]=ni(y,vt[ct]);const Et=vt[0],Bt=a.convert(y.format,y.colorSpace),Ht=a.convert(y.type),Kt=A(y.internalFormat,Bt,Ht,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,xt=_t.__version===void 0||K===!0,rt=et.dataReady;let St=P(y,Et);Nt(i.TEXTURE_CUBE_MAP,y);let At;if(Mt){k&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Kt,Et.width,Et.height);for(let ct=0;ct<6;ct++){At=vt[ct].mipmaps;for(let Ot=0;Ot<At.length;Ot++){const It=At[Ot];y.format!==Gi?Bt!==null?k?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,0,0,It.width,It.height,Bt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,Kt,It.width,It.height,0,It.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,0,0,It.width,It.height,Bt,Ht,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot,Kt,It.width,It.height,0,Bt,Ht,It.data)}}}else{if(At=y.mipmaps,k&&xt){At.length>0&&St++;const ct=ge(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,Kt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Ft){k?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,vt[ct].width,vt[ct].height,Bt,Ht,vt[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Kt,vt[ct].width,vt[ct].height,0,Bt,Ht,vt[ct].data);for(let Ot=0;Ot<At.length;Ot++){const De=At[Ot].image[ct].image;k?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,0,0,De.width,De.height,Bt,Ht,De.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,Kt,De.width,De.height,0,Bt,Ht,De.data)}}else{k?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Bt,Ht,vt[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Kt,Bt,Ht,vt[ct]);for(let Ot=0;Ot<At.length;Ot++){const It=At[Ot];k?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,0,0,Bt,Ht,It.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Ot+1,Kt,Bt,Ht,It.image[ct])}}}x(y)&&D(i.TEXTURE_CUBE_MAP),_t.__version=et.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function zt(C,y,V,K,et,_t){const yt=a.convert(V.format,V.colorSpace),nt=a.convert(V.type),st=A(V.internalFormat,yt,nt,V.normalized,V.colorSpace),Mt=s.get(y),Ft=s.get(V);if(Ft.__renderTarget=y,!Mt.__hasExternalTextures){const vt=Math.max(1,y.width>>_t),Et=Math.max(1,y.height>>_t);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,_t,st,vt,Et,y.depth,0,yt,nt,null):e.texImage2D(et,_t,st,vt,Et,0,yt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,C),Ue(y)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,et,Ft.__webglTexture,0,Ce(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,et,Ft.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(C,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),y.depthBuffer){const K=y.depthTexture,et=K&&K.isDepthTexture?K.type:null,_t=I(y.stencilBuffer,et),yt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(y)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(y),_t,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(y),_t,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_t,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,C)}else{const K=y.textures;for(let et=0;et<K.length;et++){const _t=K[et],yt=a.convert(_t.format,_t.colorSpace),nt=a.convert(_t.type),st=A(_t.internalFormat,yt,nt,_t.normalized,_t.colorSpace);Ue(y)?h.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce(y),st,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce(y),st,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,st,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ne(C,y,V){const K=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const et=s.get(y.depthTexture);if(et.__renderTarget=y,(!et.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(et.__webglInit===void 0&&(et.__webglInit=!0,y.depthTexture.addEventListener("dispose",U)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,y.depthTexture);const Mt=a.convert(y.depthTexture.format),Ft=a.convert(y.depthTexture.type);let vt;y.depthTexture.format===Cn?vt=i.DEPTH_COMPONENT24:y.depthTexture.format===ls&&(vt=i.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,vt,y.width,y.height,0,Mt,Ft,null)}}else J(y.depthTexture,0);const _t=et.__webglTexture,yt=Ce(y),nt=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,st=y.depthTexture.format===ls?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Cn)Ue(y)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,nt,_t,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,st,nt,_t,0);else if(y.depthTexture.format===ls)Ue(y)?h.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,st,nt,_t,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,st,nt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ee(C){const y=s.get(C),V=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const K=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",et)};K.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=K}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let K=0;K<6;K++)ne(y.__webglFramebuffer[K],C,K);else{const K=C.texture.mipmaps;K&&K.length>0?ne(y.__webglFramebuffer[0],C,0):ne(y.__webglFramebuffer,C,0)}else if(V){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=i.createRenderbuffer(),Te(y.__webglDepthbuffer[K],C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=y.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,_t)}}else{const K=C.texture.mipmaps;if(K&&K.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Te(y.__webglDepthbuffer,C,!1);else{const et=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,_t)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ue(C,y,V){const K=s.get(C);y!==void 0&&zt(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ee(C)}function ae(C){const y=C.texture,V=s.get(C),K=s.get(y);C.addEventListener("dispose",E);const et=C.textures,_t=C.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=y.version,c.memory.textures++),_t){V.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[nt]=[];for(let st=0;st<y.mipmaps.length;st++)V.__webglFramebuffer[nt][st]=i.createFramebuffer()}else V.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let nt=0;nt<y.mipmaps.length;nt++)V.__webglFramebuffer[nt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(yt)for(let nt=0,st=et.length;nt<st;nt++){const Mt=s.get(et[nt]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),c.memory.textures++)}if(C.samples>0&&Ue(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let nt=0;nt<et.length;nt++){const st=et[nt];V.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[nt]);const Mt=a.convert(st.format,st.colorSpace),Ft=a.convert(st.type),vt=A(st.internalFormat,Mt,Ft,st.normalized,st.colorSpace,C.isXRRenderTarget===!0),Et=Ce(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,vt,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,V.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(V.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,y);for(let nt=0;nt<6;nt++)if(y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)zt(V.__webglFramebuffer[nt][st],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,st);else zt(V.__webglFramebuffer[nt],C,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);x(y)&&D(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let nt=0,st=et.length;nt<st;nt++){const Mt=et[nt],Ft=s.get(Mt);let vt=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Ft.__webglTexture),Nt(vt,Mt),zt(V.__webglFramebuffer,C,Mt,i.COLOR_ATTACHMENT0+nt,vt,0),x(Mt)&&D(vt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(nt=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,K.__webglTexture),Nt(nt,y),y.mipmaps&&y.mipmaps.length>0)for(let st=0;st<y.mipmaps.length;st++)zt(V.__webglFramebuffer[st],C,y,i.COLOR_ATTACHMENT0,nt,st);else zt(V.__webglFramebuffer,C,y,i.COLOR_ATTACHMENT0,nt,0);x(y)&&D(nt),e.unbindTexture()}C.depthBuffer&&Ee(C)}function Re(C){const y=C.textures;for(let V=0,K=y.length;V<K;V++){const et=y[V];if(x(et)){const _t=N(C),yt=s.get(et).__webglTexture;e.bindTexture(_t,yt),D(_t),e.unbindTexture()}}}const Ie=[],ke=[];function Be(C){if(C.samples>0){if(Ue(C)===!1){const y=C.textures,V=C.width,K=C.height;let et=i.COLOR_BUFFER_BIT;const _t=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=s.get(C),nt=y.length>1;if(nt)for(let Mt=0;Mt<y.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);const st=C.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Mt=0;Mt<y.length;Mt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const Ft=s.get(y[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ft,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,et,i.NEAREST),d===!0&&(Ie.length=0,ke.length=0,Ie.push(i.COLOR_ATTACHMENT0+Mt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ie.push(_t),ke.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let Mt=0;Mt<y.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Mt]);const Ft=s.get(y[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,Ft,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&d){const y=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Ce(C){return Math.min(r.maxSamples,C.samples)}function Ue(C){const y=s.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(C){const y=c.render.frame;p.get(C)!==y&&(p.set(C,y),C.update())}function ni(C,y){const V=C.colorSpace,K=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Gr&&V!==kn&&(le.getTransfer(V)===we?(K!==Gi||et!==Ii)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):fe("WebGLTextures: Unsupported texture color space:",V)),y}function ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(f.width=C.naturalWidth||C.width,f.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(f.width=C.displayWidth,f.height=C.displayHeight):(f.width=C.width,f.height=C.height),f}this.allocateTextureUnit=it,this.resetTextureUnits=at,this.getTextureUnits=lt,this.setTextureUnits=Y,this.setTexture2D=J,this.setTexture2DArray=pt,this.setTexture3D=ot,this.setTextureCube=ft,this.rebindTextures=ue,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Re,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=zt,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function bE(i,t){function e(s,r=kn){let a;const c=le.getTransfer(r);if(s===Ii)return i.UNSIGNED_BYTE;if(s===Oc)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Uc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===Pd)return i.UNSIGNED_INT_5_9_9_9_REV;if(s===Ld)return i.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ad)return i.BYTE;if(s===Cd)return i.SHORT;if(s===Hr)return i.UNSIGNED_SHORT;if(s===Nc)return i.INT;if(s===cn)return i.UNSIGNED_INT;if(s===sn)return i.FLOAT;if(s===An)return i.HALF_FLOAT;if(s===Rd)return i.ALPHA;if(s===Id)return i.RGB;if(s===Gi)return i.RGBA;if(s===Cn)return i.DEPTH_COMPONENT;if(s===ls)return i.DEPTH_STENCIL;if(s===Dd)return i.RED;if(s===Fc)return i.RED_INTEGER;if(s===us)return i.RG;if(s===kc)return i.RG_INTEGER;if(s===Bc)return i.RGBA_INTEGER;if(s===Zo||s===qo||s===Yo||s===$o)if(c===we)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Zo)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===$o)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Zo)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===$o)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kl||s===Bl||s===zl||s===Hl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===kl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===zl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Vl||s===Gl||s===Wl||s===Xl||s===Zl||s===ta||s===ql)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Vl||s===Gl)return c===we?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Wl)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(s===Xl)return a.COMPRESSED_R11_EAC;if(s===Zl)return a.COMPRESSED_SIGNED_R11_EAC;if(s===ta)return a.COMPRESSED_RG11_EAC;if(s===ql)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Yl||s===$l||s===Kl||s===Jl||s===jl||s===Ql||s===tc||s===ec||s===ic||s===nc||s===sc||s===rc||s===oc||s===ac)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Yl)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===$l)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kl)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jl)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jl)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ql)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tc)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ec)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ic)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===nc)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sc)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rc)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===oc)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ac)return c===we?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===lc||s===cc||s===hc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===lc)return c===we?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===hc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===uc||s===dc||s===ea||s===fc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===uc)return a.COMPRESSED_RED_RGTC1_EXT;if(s===dc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ea)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Vr?i.UNSIGNED_INT_24_8:i[s]!==void 0?i[s]:null}return{convert:e}}const TE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const s=new Hd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,s=new Ni({vertexShader:TE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _i(new Jr(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PE extends ds{constructor(t,e){super();const s=this;let r=null,a=1,c=null,h="local-floor",d=1,f=null,p=null,g=null,_=null,M=null,w=null;const T=typeof XRWebGLBinding<"u",v=new CE,x={},D=e.getContextAttributes();let N=null,A=null;const I=[],P=[],U=new he;let E=null;const R=new Ri;R.viewport=new Fe;const H=new Ri;H.viewport=new Fe;const F=[R,H],W=new kv;let at=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let mt=I[j];return mt===void 0&&(mt=new il,I[j]=mt),mt.getTargetRaySpace()},this.getControllerGrip=function(j){let mt=I[j];return mt===void 0&&(mt=new il,I[j]=mt),mt.getGripSpace()},this.getHand=function(j){let mt=I[j];return mt===void 0&&(mt=new il,I[j]=mt),mt.getHandSpace()};function Y(j){const mt=P.indexOf(j.inputSource);if(mt===-1)return;const dt=I[mt];dt!==void 0&&(dt.update(j.inputSource,j.frame,f||c),dt.dispatchEvent({type:j.type,data:j.inputSource}))}function it(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",it),r.removeEventListener("inputsourceschange",$);for(let j=0;j<I.length;j++){const mt=P[j];mt!==null&&(P[j]=null,I[j].disconnect(mt))}at=null,lt=null,v.reset();for(const j in x)delete x[j];t.setRenderTarget(N),M=null,_=null,g=null,r=null,A=null,Nt.stop(),s.isPresenting=!1,t.setPixelRatio(E),t.setSize(U.width,U.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,s.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){h=j,s.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(j){f=j},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(r,e)),g},this.getFrame=function(){return w},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(N=t.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",it),r.addEventListener("inputsourceschange",$),D.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(U),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Vt=null,Yt=null;D.depth&&(Yt=D.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=D.stencil?ls:Cn,Vt=D.stencil?Vr:cn);const zt={colorFormat:e.RGBA8,depthFormat:Yt,scaleFactor:a};g=this.getBinding(),_=g.createProjectionLayer(zt),r.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),A=new Wi(_.textureWidth,_.textureHeight,{format:Gi,type:Ii,depthTexture:new js(_.textureWidth,_.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const dt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:a};M=new XRWebGLLayer(r,e,dt),r.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),A=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Gi,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await r.requestReferenceSpace(h),Nt.setContext(r),Nt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(j){for(let mt=0;mt<j.removed.length;mt++){const dt=j.removed[mt],Vt=P.indexOf(dt);Vt>=0&&(P[Vt]=null,I[Vt].disconnect(dt))}for(let mt=0;mt<j.added.length;mt++){const dt=j.added[mt];let Vt=P.indexOf(dt);if(Vt===-1){for(let zt=0;zt<I.length;zt++)if(zt>=P.length){P.push(dt),Vt=zt;break}else if(P[zt]===null){P[zt]=dt,Vt=zt;break}if(Vt===-1)break}const Yt=I[Vt];Yt&&Yt.connect(dt)}}const J=new G,pt=new G;function ot(j,mt,dt){J.setFromMatrixPosition(mt.matrixWorld),pt.setFromMatrixPosition(dt.matrixWorld);const Vt=J.distanceTo(pt),Yt=mt.projectionMatrix.elements,zt=dt.projectionMatrix.elements,Te=Yt[14]/(Yt[10]-1),ne=Yt[14]/(Yt[10]+1),Ee=(Yt[9]+1)/Yt[5],ue=(Yt[9]-1)/Yt[5],ae=(Yt[8]-1)/Yt[0],Re=(zt[8]+1)/zt[0],Ie=Te*ae,ke=Te*Re,Be=Vt/(-ae+Re),Ce=Be*-ae;if(mt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ce),j.translateZ(Be),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Yt[10]===-1)j.projectionMatrix.copy(mt.projectionMatrix),j.projectionMatrixInverse.copy(mt.projectionMatrixInverse);else{const Ue=Te+Be,B=ne+Be,ni=Ie-Ce,ge=ke+(Vt-Ce),C=Ee*ne/B*Ue,y=ue*ne/B*Ue;j.projectionMatrix.makePerspective(ni,ge,C,y,Ue,B),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ft(j,mt){mt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(mt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let mt=j.near,dt=j.far;v.texture!==null&&(v.depthNear>0&&(mt=v.depthNear),v.depthFar>0&&(dt=v.depthFar)),W.near=H.near=R.near=mt,W.far=H.far=R.far=dt,(at!==W.near||lt!==W.far)&&(r.updateRenderState({depthNear:W.near,depthFar:W.far}),at=W.near,lt=W.far),W.layers.mask=j.layers.mask|6,R.layers.mask=W.layers.mask&-5,H.layers.mask=W.layers.mask&-3;const Vt=j.parent,Yt=W.cameras;ft(W,Vt);for(let zt=0;zt<Yt.length;zt++)ft(Yt[zt],Vt);Yt.length===2?ot(W,R,H):W.projectionMatrix.copy(R.projectionMatrix),wt(j,W,Vt)};function wt(j,mt,dt){dt===null?j.matrix.copy(mt.matrixWorld):(j.matrix.copy(dt.matrixWorld),j.matrix.invert(),j.matrix.multiply(mt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(mt.projectionMatrix),j.projectionMatrixInverse.copy(mt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Xr*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(_===null&&M===null))return d},this.setFoveation=function(j){d=j,_!==null&&(_.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(W)},this.getCameraTexture=function(j){return x[j]};let qt=null;function jt(j,mt){if(p=mt.getViewerPose(f||c),w=mt,p!==null){const dt=p.views;M!==null&&(t.setRenderTargetFramebuffer(A,M.framebuffer),t.setRenderTarget(A));let Vt=!1;dt.length!==W.cameras.length&&(W.cameras.length=0,Vt=!0);for(let ne=0;ne<dt.length;ne++){const Ee=dt[ne];let ue=null;if(M!==null)ue=M.getViewport(Ee);else{const Re=g.getViewSubImage(_,Ee);ue=Re.viewport,ne===0&&(t.setRenderTargetTextures(A,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(A))}let ae=F[ne];ae===void 0&&(ae=new Ri,ae.layers.enable(ne),ae.viewport=new Fe,F[ne]=ae),ae.matrix.fromArray(Ee.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Ee.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(ue.x,ue.y,ue.width,ue.height),ne===0&&(W.matrix.copy(ae.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Vt===!0&&W.cameras.push(ae)}const Yt=r.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const ne=g.getDepthInformation(dt[0]);ne&&ne.isValid&&ne.texture&&v.init(ne,r.renderState)}if(Yt&&Yt.includes("camera-access")&&T){t.state.unbindTexture(),g=s.getBinding();for(let ne=0;ne<dt.length;ne++){const Ee=dt[ne].camera;if(Ee){let ue=x[Ee];ue||(ue=new Hd,x[Ee]=ue);const ae=g.getCameraImage(Ee);ue.sourceTexture=ae}}}}for(let dt=0;dt<I.length;dt++){const Vt=P[dt],Yt=I[dt];Vt!==null&&Yt!==void 0&&Yt.update(Vt,mt,f||c)}qt&&qt(j,mt),mt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:mt}),w=null}const Nt=new Xd;Nt.setAnimationLoop(jt),this.setAnimationLoop=function(j){qt=j},this.dispose=function(){}}}const LE=new Oe,jd=new Jt;jd.set(-1,0,0,0,1,0,0,0,1);function RE(i,t){function e(v,x){v.matrixAutoUpdate===!0&&v.updateMatrix(),x.value.copy(v.matrix)}function s(v,x){x.color.getRGB(v.fogColor.value,Vd(i)),x.isFog?(v.fogNear.value=x.near,v.fogFar.value=x.far):x.isFogExp2&&(v.fogDensity.value=x.density)}function r(v,x,D,N,A){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?a(v,x):x.isMeshLambertMaterial?(a(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(a(v,x),g(v,x)):x.isMeshPhongMaterial?(a(v,x),p(v,x),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(a(v,x),_(v,x),x.isMeshPhysicalMaterial&&M(v,x,A)):x.isMeshMatcapMaterial?(a(v,x),w(v,x)):x.isMeshDepthMaterial?a(v,x):x.isMeshDistanceMaterial?(a(v,x),T(v,x)):x.isMeshNormalMaterial?a(v,x):x.isLineBasicMaterial?(c(v,x),x.isLineDashedMaterial&&h(v,x)):x.isPointsMaterial?d(v,x,D,N):x.isSpriteMaterial?f(v,x):x.isShadowMaterial?(v.color.value.copy(x.color),v.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(v,x){v.opacity.value=x.opacity,x.color&&v.diffuse.value.copy(x.color),x.emissive&&v.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(v.map.value=x.map,e(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,e(x.alphaMap,v.alphaMapTransform)),x.bumpMap&&(v.bumpMap.value=x.bumpMap,e(x.bumpMap,v.bumpMapTransform),v.bumpScale.value=x.bumpScale,x.side===fi&&(v.bumpScale.value*=-1)),x.normalMap&&(v.normalMap.value=x.normalMap,e(x.normalMap,v.normalMapTransform),v.normalScale.value.copy(x.normalScale),x.side===fi&&v.normalScale.value.negate()),x.displacementMap&&(v.displacementMap.value=x.displacementMap,e(x.displacementMap,v.displacementMapTransform),v.displacementScale.value=x.displacementScale,v.displacementBias.value=x.displacementBias),x.emissiveMap&&(v.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,v.emissiveMapTransform)),x.specularMap&&(v.specularMap.value=x.specularMap,e(x.specularMap,v.specularMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest);const D=t.get(x),N=D.envMap,A=D.envMapRotation;N&&(v.envMap.value=N,v.envMapRotation.value.setFromMatrix4(LE.makeRotationFromEuler(A)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(jd),v.reflectivity.value=x.reflectivity,v.ior.value=x.ior,v.refractionRatio.value=x.refractionRatio),x.lightMap&&(v.lightMap.value=x.lightMap,v.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,v.lightMapTransform)),x.aoMap&&(v.aoMap.value=x.aoMap,v.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,v.aoMapTransform))}function c(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,x.map&&(v.map.value=x.map,e(x.map,v.mapTransform))}function h(v,x){v.dashSize.value=x.dashSize,v.totalSize.value=x.dashSize+x.gapSize,v.scale.value=x.scale}function d(v,x,D,N){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.size.value=x.size*D,v.scale.value=N*.5,x.map&&(v.map.value=x.map,e(x.map,v.uvTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,e(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function f(v,x){v.diffuse.value.copy(x.color),v.opacity.value=x.opacity,v.rotation.value=x.rotation,x.map&&(v.map.value=x.map,e(x.map,v.mapTransform)),x.alphaMap&&(v.alphaMap.value=x.alphaMap,e(x.alphaMap,v.alphaMapTransform)),x.alphaTest>0&&(v.alphaTest.value=x.alphaTest)}function p(v,x){v.specular.value.copy(x.specular),v.shininess.value=Math.max(x.shininess,1e-4)}function g(v,x){x.gradientMap&&(v.gradientMap.value=x.gradientMap)}function _(v,x){v.metalness.value=x.metalness,x.metalnessMap&&(v.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,v.metalnessMapTransform)),v.roughness.value=x.roughness,x.roughnessMap&&(v.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,v.roughnessMapTransform)),x.envMap&&(v.envMapIntensity.value=x.envMapIntensity)}function M(v,x,D){v.ior.value=x.ior,x.sheen>0&&(v.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),v.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(v.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,v.sheenColorMapTransform)),x.sheenRoughnessMap&&(v.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,v.sheenRoughnessMapTransform))),x.clearcoat>0&&(v.clearcoat.value=x.clearcoat,v.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(v.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,v.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(v.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===fi&&v.clearcoatNormalScale.value.negate())),x.dispersion>0&&(v.dispersion.value=x.dispersion),x.iridescence>0&&(v.iridescence.value=x.iridescence,v.iridescenceIOR.value=x.iridescenceIOR,v.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(v.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,v.iridescenceMapTransform)),x.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),x.transmission>0&&(v.transmission.value=x.transmission,v.transmissionSamplerMap.value=D.texture,v.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(v.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,v.transmissionMapTransform)),v.thickness.value=x.thickness,x.thicknessMap&&(v.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=x.attenuationDistance,v.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(v.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(v.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=x.specularIntensity,v.specularColor.value.copy(x.specularColor),x.specularColorMap&&(v.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,v.specularColorMapTransform)),x.specularIntensityMap&&(v.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,v.specularIntensityMapTransform))}function w(v,x){x.matcap&&(v.matcap.value=x.matcap)}function T(v,x){const D=t.get(x).light;v.referencePosition.value.setFromMatrixPosition(D.matrixWorld),v.nearDistance.value=D.shadow.camera.near,v.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:r}}function IE(i,t,e,s){let r={},a={},c=[];const h=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(A,I){const P=I.program;s.uniformBlockBinding(A,P)}function f(A,I){let P=r[A.id];P===void 0&&(v(A),P=p(A),r[A.id]=P,A.addEventListener("dispose",D));const U=I.program;s.updateUBOMapping(A,U);const E=t.render.frame;a[A.id]!==E&&(_(A),a[A.id]=E)}function p(A){const I=g();A.__bindingPointIndex=I;const P=i.createBuffer(),U=A.__size,E=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,U,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,P),P}function g(){for(let A=0;A<h;A++)if(c.indexOf(A)===-1)return c.push(A),A;return fe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const I=r[A.id],P=A.uniforms,U=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let E=0,R=P.length;E<R;E++){const H=P[E];if(Array.isArray(H))for(let F=0,W=H.length;F<W;F++)M(H[F],E,F,U);else M(H,E,0,U)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(A,I,P,U){if(T(A,I,P,U)===!0){const E=A.__offset,R=A.value;if(Array.isArray(R)){let H=0;for(let F=0;F<R.length;F++){const W=R[F],at=x(W);w(W,A.__data,H),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(H+=at.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(R,A.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,A.__data)}}function w(A,I,P){typeof A=="number"||typeof A=="boolean"?I[0]=A:A.isMatrix3?(I[0]=A.elements[0],I[1]=A.elements[1],I[2]=A.elements[2],I[3]=0,I[4]=A.elements[3],I[5]=A.elements[4],I[6]=A.elements[5],I[7]=0,I[8]=A.elements[6],I[9]=A.elements[7],I[10]=A.elements[8],I[11]=0):ArrayBuffer.isView(A)?I.set(new A.constructor(A.buffer,A.byteOffset,I.length)):A.toArray(I,P)}function T(A,I,P,U){const E=A.value,R=I+"_"+P;if(U[R]===void 0)return typeof E=="number"||typeof E=="boolean"?U[R]=E:ArrayBuffer.isView(E)?U[R]=E.slice():U[R]=E.clone(),!0;{const H=U[R];if(typeof E=="number"||typeof E=="boolean"){if(H!==E)return U[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(H.equals(E)===!1)return H.copy(E),!0}}return!1}function v(A){const I=A.uniforms;let P=0;const U=16;for(let R=0,H=I.length;R<H;R++){const F=Array.isArray(I[R])?I[R]:[I[R]];for(let W=0,at=F.length;W<at;W++){const lt=F[W],Y=Array.isArray(lt.value)?lt.value:[lt.value];for(let it=0,$=Y.length;it<$;it++){const J=Y[it],pt=x(J),ot=P%U,ft=ot%pt.boundary,wt=ot+ft;P+=ft,wt!==0&&U-wt<pt.storage&&(P+=U-wt),lt.__data=new Float32Array(pt.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=P,P+=pt.storage}}}const E=P%U;return E>0&&(P+=U-E),A.__size=P,A.__cache={},this}function x(A){const I={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(I.boundary=4,I.storage=4):A.isVector2?(I.boundary=8,I.storage=8):A.isVector3||A.isColor?(I.boundary=16,I.storage=12):A.isVector4?(I.boundary=16,I.storage=16):A.isMatrix3?(I.boundary=48,I.storage=48):A.isMatrix4?(I.boundary=64,I.storage=64):A.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(I.boundary=16,I.storage=A.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",A),I}function D(A){const I=A.target;I.removeEventListener("dispose",D);const P=c.indexOf(I.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(r[I.id]),delete r[I.id],delete a[I.id]}function N(){for(const A in r)i.deleteBuffer(r[A]);c=[],r={},a={}}return{bind:d,update:f,dispose:N}}const DE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function NE(){return Qi===null&&(Qi=new xv(DE,16,16,us,An),Qi.name="DFG_LUT",Qi.minFilter=Ge,Qi.magFilter=Ge,Qi.wrapS=En,Qi.wrapT=En,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class OE{constructor(t={}){const{canvas:e=Ug(),context:s=null,depth:r=!0,stencil:a=!1,alpha:c=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:M=Ii}=t;this.isWebGLRenderer=!0;let w;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=s.getContextAttributes().alpha}else w=c;const T=M,v=new Set([Bc,kc,Fc]),x=new Set([Ii,cn,Hr,Vr,Oc,Uc]),D=new Uint32Array(4),N=new Int32Array(4),A=new G;let I=null,P=null;const U=[],E=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=an,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let F=!1,W=null,at=null,lt=null,Y=null;this._outputColorSpace=Li;let it=0,$=0,J=null,pt=-1,ot=null;const ft=new Fe,wt=new Fe;let qt=null;const jt=new xe(0);let Nt=0,j=e.width,mt=e.height,dt=1,Vt=null,Yt=null;const zt=new Fe(0,0,j,mt),Te=new Fe(0,0,j,mt);let ne=!1;const Ee=new Zc;let ue=!1,ae=!1;const Re=new Oe,Ie=new G,ke=new Fe,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function Ue(){return J===null?dt:1}let B=s;function ni(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:r,stencil:a,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ic}`),e.addEventListener("webglcontextlost",De,!1),e.addEventListener("webglcontextrestored",be,!1),e.addEventListener("webglcontextcreationerror",Mi,!1),B===null){const z="webgl2";if(B=ni(z,b),B===null)throw ni(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(b){throw fe("WebGLRenderer: "+b.message),b}let ge,C,y,V,K,et,_t,yt,nt,st,Mt,Ft,vt,Et,Bt,Ht,Kt,k,xt,rt,St,At,ct;function Ot(){ge=new Ny(B),ge.init(),St=new bE(B,ge),C=new Ty(B,ge,t,St),y=new SE(B,ge),C.reversedDepthBuffer&&_&&y.buffers.depth.setReversed(!0),at=B.createFramebuffer(),lt=B.createFramebuffer(),Y=B.createFramebuffer(),V=new Fy(B),K=new cE,et=new wE(B,ge,y,K,C,St,V),_t=new Dy(H),yt=new Hv(B),At=new wy(B,yt),nt=new Oy(B,yt,V,At),st=new By(B,nt,yt,At,V),k=new ky(B,C,et),Bt=new Ay(K),Mt=new lE(H,_t,ge,C,At,Bt),Ft=new RE(H,K),vt=new uE,Et=new gE(ge),Kt=new Sy(H,_t,y,st,w,d),Ht=new EE(H,st,C),ct=new IE(B,V,C,y),xt=new by(B,ge,V),rt=new Uy(B,ge,V),V.programs=Mt.programs,H.capabilities=C,H.extensions=ge,H.properties=K,H.renderLists=vt,H.shadowMap=Ht,H.state=y,H.info=V}Ot(),T!==Ii&&(R=new Hy(T,e.width,e.height,h,r,a));const It=new PE(H,B);this.xr=It,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=ge.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ge.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return dt},this.setPixelRatio=function(b){b!==void 0&&(dt=b,this.setSize(j,mt,!1))},this.getSize=function(b){return b.set(j,mt)},this.setSize=function(b,z,Q=!0){if(It.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,mt=z,e.width=Math.floor(b*dt),e.height=Math.floor(z*dt),Q===!0&&(e.style.width=b+"px",e.style.height=z+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(j*dt,mt*dt).floor()},this.setDrawingBufferSize=function(b,z,Q){j=b,mt=z,dt=Q,e.width=Math.floor(b*Q),e.height=Math.floor(z*Q),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(T===Ii){fe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ft)},this.getViewport=function(b){return b.copy(zt)},this.setViewport=function(b,z,Q,Z){b.isVector4?zt.set(b.x,b.y,b.z,b.w):zt.set(b,z,Q,Z),y.viewport(ft.copy(zt).multiplyScalar(dt).round())},this.getScissor=function(b){return b.copy(Te)},this.setScissor=function(b,z,Q,Z){b.isVector4?Te.set(b.x,b.y,b.z,b.w):Te.set(b,z,Q,Z),y.scissor(wt.copy(Te).multiplyScalar(dt).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(b){y.setScissorTest(ne=b)},this.setOpaqueSort=function(b){Vt=b},this.setTransparentSort=function(b){Yt=b},this.getClearColor=function(b){return b.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,Q=!0){let Z=0;if(b){let q=!1;if(J!==null){const bt=J.texture.format;q=v.has(bt)}if(q){const bt=J.texture.type,Ct=x.has(bt),ht=Kt.getClearColor(),gt=Kt.getClearAlpha(),Dt=ht.r,Gt=ht.g,$t=ht.b;Ct?(D[0]=Dt,D[1]=Gt,D[2]=$t,D[3]=gt,B.clearBufferuiv(B.COLOR,0,D)):(N[0]=Dt,N[1]=Gt,N[2]=$t,N[3]=gt,B.clearBufferiv(B.COLOR,0,N))}else Z|=B.COLOR_BUFFER_BIT}z&&(Z|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&B.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),W=b},this.dispose=function(){e.removeEventListener("webglcontextlost",De,!1),e.removeEventListener("webglcontextrestored",be,!1),e.removeEventListener("webglcontextcreationerror",Mi,!1),Kt.dispose(),vt.dispose(),Et.dispose(),K.dispose(),_t.dispose(),st.dispose(),At.dispose(),ct.dispose(),Mt.dispose(),It.dispose(),It.removeEventListener("sessionstart",rr),It.removeEventListener("sessionend",ms),Zi.stop()};function De(b){b.preventDefault(),uu("WebGLRenderer: Context Lost."),F=!0}function be(){uu("WebGLRenderer: Context Restored."),F=!1;const b=V.autoReset,z=Ht.enabled,Q=Ht.autoUpdate,Z=Ht.needsUpdate,q=Ht.type;Ot(),V.autoReset=b,Ht.enabled=z,Ht.autoUpdate=Q,Ht.needsUpdate=Z,Ht.type=q}function Mi(b){fe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ei(b){const z=b.target;z.removeEventListener("dispose",Ei),Si(z)}function Si(b){kt(b),K.remove(b)}function kt(b){const z=K.get(b).programs;z!==void 0&&(z.forEach(function(Q){Mt.releaseProgram(Q)}),b.isShaderMaterial&&Mt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Q,Z,q,bt){z===null&&(z=Be);const Ct=q.isMesh&&q.matrixWorld.determinantAffine()<0,ht=Aa(b,z,Q,Z,q);y.setMaterial(Z,Ct);let gt=Q.index,Dt=1;if(Z.wireframe===!0){if(gt=nt.getWireframeAttribute(Q),gt===void 0)return;Dt=2}const Gt=Q.drawRange,$t=Q.attributes.position;let Ut=Gt.start*Dt,Lt=(Gt.start+Gt.count)*Dt;bt!==null&&(Ut=Math.max(Ut,bt.start*Dt),Lt=Math.min(Lt,(bt.start+bt.count)*Dt)),gt!==null?(Ut=Math.max(Ut,0),Lt=Math.min(Lt,gt.count)):$t!=null&&(Ut=Math.max(Ut,0),Lt=Math.min(Lt,$t.count));const Qt=Lt-Ut;if(Qt<0||Qt===1/0)return;At.setup(q,Z,ht,Q,gt);let Pe,_e=xt;if(gt!==null&&(Pe=yt.get(gt),_e=rt,_e.setIndex(Pe)),q.isMesh)Z.wireframe===!0?(y.setLineWidth(Z.wireframeLinewidth*Ue()),_e.setMode(B.LINES)):_e.setMode(B.TRIANGLES);else if(q.isLine){let Se=Z.linewidth;Se===void 0&&(Se=1),y.setLineWidth(Se*Ue()),q.isLineSegments?_e.setMode(B.LINES):q.isLineLoop?_e.setMode(B.LINE_LOOP):_e.setMode(B.LINE_STRIP)}else q.isPoints?_e.setMode(B.POINTS):q.isSprite&&_e.setMode(B.TRIANGLES);if(q.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))_e.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Se=q._multiDrawStarts,Rt=q._multiDrawCounts,Ze=q._multiDrawCount,ee=gt?yt.get(gt).bytesPerElement:1,me=K.get(Z).currentProgram.getUniforms();for(let qe=0;qe<Ze;qe++)me.setValue(B,"_gl_DrawID",qe),_e.render(Se[qe]/ee,Rt[qe])}else if(q.isInstancedMesh)_e.renderInstances(Ut,Qt,q.count);else if(Q.isInstancedBufferGeometry){const Se=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Rt=Math.min(Q.instanceCount,Se);_e.renderInstances(Ut,Qt,Rt)}else _e.render(Ut,Qt)};function sr(b,z,Q){b.transparent===!0&&b.side===Mn&&b.forceSinglePass===!1?(b.side=fi,b.needsUpdate=!0,gs(b,z,Q),b.side=Zn,b.needsUpdate=!0,gs(b,z,Q),b.side=Mn):gs(b,z,Q)}this.compile=function(b,z,Q=null){Q===null&&(Q=b),P=Et.get(Q),P.init(z),E.push(P),Q.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(P.pushLight(q),q.castShadow&&P.pushShadow(q))}),b!==Q&&b.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(P.pushLight(q),q.castShadow&&P.pushShadow(q))}),P.setupLights();const Z=new Set;return b.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const bt=q.material;if(bt)if(Array.isArray(bt))for(let Ct=0;Ct<bt.length;Ct++){const ht=bt[Ct];sr(ht,Q,q),Z.add(ht)}else sr(bt,Q,q),Z.add(bt)}),P=E.pop(),Z},this.compileAsync=function(b,z,Q=null){const Z=this.compile(b,z,Q);return new Promise(q=>{function bt(){if(Z.forEach(function(Ct){K.get(Ct).currentProgram.isReady()&&Z.delete(Ct)}),Z.size===0){q(b);return}setTimeout(bt,10)}ge.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let ps=null;function io(b){ps&&ps(b)}function rr(){Zi.stop()}function ms(){Zi.start()}const Zi=new Xd;Zi.setAnimationLoop(io),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(b){ps=b,It.setAnimationLoop(b),b===null?Zi.stop():Zi.start()},It.addEventListener("sessionstart",rr),It.addEventListener("sessionend",ms),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){fe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;W!==null&&W.renderStart(b,z);const Q=It.enabled===!0&&It.isPresenting===!0,Z=R!==null&&(J===null||Q)&&R.begin(H,J);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(z),z=It.getCamera()),b.isScene===!0&&b.onBeforeRender(H,b,z,J),P=Et.get(b,E.length),P.init(z),P.state.textureUnits=et.getTextureUnits(),E.push(P),Re.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ee.setFromProjectionMatrix(Re,rn,z.reversedDepth),ae=this.localClippingEnabled,ue=Bt.init(this.clippingPlanes,ae),I=vt.get(b,U.length),I.init(),U.push(I),It.enabled===!0&&It.isPresenting===!0){const Ct=H.xr.getDepthSensingMesh();Ct!==null&&qi(Ct,z,-1/0,H.sortObjects)}qi(b,z,0,H.sortObjects),I.finish(),H.sortObjects===!0&&I.sort(Vt,Yt,z.reversedDepth),Ce=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Ce&&Kt.addToRenderList(I,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ue===!0&&Bt.beginShadows();const q=P.state.shadowsArray;if(Ht.render(q,b,z),ue===!0&&Bt.endShadows(),(Z&&R.hasRenderPass())===!1){const Ct=I.opaque,ht=I.transmissive;if(P.setupLights(),z.isArrayCamera){const gt=z.cameras;if(ht.length>0)for(let Dt=0,Gt=gt.length;Dt<Gt;Dt++){const $t=gt[Dt];no(Ct,ht,b,$t)}Ce&&Kt.render(b);for(let Dt=0,Gt=gt.length;Dt<Gt;Dt++){const $t=gt[Dt];or(I,b,$t,$t.viewport)}}else ht.length>0&&no(Ct,ht,b,z),Ce&&Kt.render(b),or(I,b,z)}J!==null&&$===0&&(et.updateMultisampleRenderTarget(J),et.updateRenderTargetMipmap(J)),Z&&R.end(H),b.isScene===!0&&b.onAfterRender(H,b,z),At.resetDefaultState(),pt=-1,ot=null,E.pop(),E.length>0?(P=E[E.length-1],et.setTextureUnits(P.state.textureUnits),ue===!0&&Bt.setGlobalState(H.clippingPlanes,P.state.camera)):P=null,U.pop(),U.length>0?I=U[U.length-1]:I=null,W!==null&&W.renderEnd()};function qi(b,z,Q,Z){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)P.pushLightProbeGrid(b);else if(b.isLight)P.pushLight(b),b.castShadow&&P.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ee.intersectsSprite(b)){Z&&ke.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Re);const Ct=st.update(b),ht=b.material;ht.visible&&I.push(b,Ct,ht,Q,ke.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ee.intersectsObject(b))){const Ct=st.update(b),ht=b.material;if(Z&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ke.copy(b.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),ke.copy(Ct.boundingSphere.center)),ke.applyMatrix4(b.matrixWorld).applyMatrix4(Re)),Array.isArray(ht)){const gt=Ct.groups;for(let Dt=0,Gt=gt.length;Dt<Gt;Dt++){const $t=gt[Dt],Ut=ht[$t.materialIndex];Ut&&Ut.visible&&I.push(b,Ct,Ut,Q,ke.z,$t)}}else ht.visible&&I.push(b,Ct,ht,Q,ke.z,null)}}const bt=b.children;for(let Ct=0,ht=bt.length;Ct<ht;Ct++)qi(bt[Ct],z,Q,Z)}function or(b,z,Q,Z){const{opaque:q,transmissive:bt,transparent:Ct}=b;P.setupLightsView(Q),ue===!0&&Bt.setGlobalState(H.clippingPlanes,Q),Z&&y.viewport(ft.copy(Z)),q.length>0&&_s(q,z,Q),bt.length>0&&_s(bt,z,Q),Ct.length>0&&_s(Ct,z,Q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function no(b,z,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[Z.id]===void 0){const Ut=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[Z.id]=new Wi(1,1,{generateMipmaps:!0,type:Ut?An:Ii,minFilter:zn,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace})}const bt=P.state.transmissionRenderTarget[Z.id],Ct=Z.viewport||ft;bt.setSize(Ct.z*H.transmissionResolutionScale,Ct.w*H.transmissionResolutionScale);const ht=H.getRenderTarget(),gt=H.getActiveCubeFace(),Dt=H.getActiveMipmapLevel();H.setRenderTarget(bt),H.getClearColor(jt),Nt=H.getClearAlpha(),Nt<1&&H.setClearColor(16777215,.5),H.clear(),Ce&&Kt.render(Q);const Gt=H.toneMapping;H.toneMapping=an;const $t=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),P.setupLightsView(Z),ue===!0&&Bt.setGlobalState(H.clippingPlanes,Z),_s(b,Q,Z),et.updateMultisampleRenderTarget(bt),et.updateRenderTargetMipmap(bt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let Lt=0,Qt=z.length;Lt<Qt;Lt++){const Pe=z[Lt],{object:_e,geometry:Se,material:Rt,group:Ze}=Pe;if(Rt.side===Mn&&_e.layers.test(Z.layers)){const ee=Rt.side;Rt.side=fi,Rt.needsUpdate=!0,so(_e,Q,Z,Se,Rt,Ze),Rt.side=ee,Rt.needsUpdate=!0,Ut=!0}}Ut===!0&&(et.updateMultisampleRenderTarget(bt),et.updateRenderTargetMipmap(bt))}H.setRenderTarget(ht,gt,Dt),H.setClearColor(jt,Nt),$t!==void 0&&(Z.viewport=$t),H.toneMapping=Gt}function _s(b,z,Q){const Z=z.isScene===!0?z.overrideMaterial:null;for(let q=0,bt=b.length;q<bt;q++){const Ct=b[q],{object:ht,geometry:gt,group:Dt}=Ct;let Gt=Ct.material;Gt.allowOverride===!0&&Z!==null&&(Gt=Z),ht.layers.test(Q.layers)&&so(ht,z,Q,gt,Gt,Dt)}}function so(b,z,Q,Z,q,bt){b.onBeforeRender(H,z,Q,Z,q,bt),b.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),q.onBeforeRender(H,z,Q,Z,b,bt),q.transparent===!0&&q.side===Mn&&q.forceSinglePass===!1?(q.side=fi,q.needsUpdate=!0,H.renderBufferDirect(Q,z,Z,q,b,bt),q.side=Zn,q.needsUpdate=!0,H.renderBufferDirect(Q,z,Z,q,b,bt),q.side=Mn):H.renderBufferDirect(Q,z,Z,q,b,bt),b.onAfterRender(H,z,Q,Z,q,bt)}function gs(b,z,Q){z.isScene!==!0&&(z=Be);const Z=K.get(b),q=P.state.lights,bt=P.state.shadowsArray,Ct=q.state.version,ht=Mt.getParameters(b,q.state,bt,z,Q,P.state.lightProbeGridArray),gt=Mt.getProgramCacheKey(ht);let Dt=Z.programs;Z.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,Z.fog=z.fog;const Gt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Z.envMap=_t.get(b.envMap||Z.environment,Gt),Z.envMapRotation=Z.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Dt===void 0&&(b.addEventListener("dispose",Ei),Dt=new Map,Z.programs=Dt);let $t=Dt.get(gt);if($t!==void 0){if(Z.currentProgram===$t&&Z.lightsStateVersion===Ct)return ro(b,ht),$t}else ht.uniforms=Mt.getUniforms(b),W!==null&&b.isNodeMaterial&&W.build(b,Q,ht),b.onBeforeCompile(ht,H),$t=Mt.acquireProgram(ht,gt),Dt.set(gt,$t),Z.uniforms=ht.uniforms;const Ut=Z.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=Bt.uniform),ro(b,ht),Z.needsLights=Pa(b),Z.lightsStateVersion=Ct,Z.needsLights&&(Ut.ambientLightColor.value=q.state.ambient,Ut.lightProbe.value=q.state.probe,Ut.directionalLights.value=q.state.directional,Ut.directionalLightShadows.value=q.state.directionalShadow,Ut.spotLights.value=q.state.spot,Ut.spotLightShadows.value=q.state.spotShadow,Ut.rectAreaLights.value=q.state.rectArea,Ut.ltc_1.value=q.state.rectAreaLTC1,Ut.ltc_2.value=q.state.rectAreaLTC2,Ut.pointLights.value=q.state.point,Ut.pointLightShadows.value=q.state.pointShadow,Ut.hemisphereLights.value=q.state.hemi,Ut.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ut.spotLightMatrix.value=q.state.spotLightMatrix,Ut.spotLightMap.value=q.state.spotLightMap,Ut.pointShadowMatrix.value=q.state.pointShadowMatrix),Z.lightProbeGrid=P.state.lightProbeGridArray.length>0,Z.currentProgram=$t,Z.uniformsList=null,$t}function ar(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Ko.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function ro(b,z){const Q=K.get(b);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function vs(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;A.setFromMatrixPosition(z.matrixWorld);for(let Q=0,Z=b.length;Q<Z;Q++){const q=b[Q];if(q.texture!==null&&q.boundingBox.containsPoint(A))return q}return null}function Aa(b,z,Q,Z,q){z.isScene!==!0&&(z=Be),et.resetTextureUnits();const bt=z.fog,Ct=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?z.environment:null,ht=J===null?H.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:le.workingColorSpace,gt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Dt=_t.get(Z.envMap||Ct,gt),Gt=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,$t=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ut=!!Q.morphAttributes.position,Lt=!!Q.morphAttributes.normal,Qt=!!Q.morphAttributes.color;let Pe=an;Z.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Pe=H.toneMapping);const _e=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Se=_e!==void 0?_e.length:0,Rt=K.get(Z),Ze=P.state.lights;if(ue===!0&&(ae===!0||b!==ot)){const ye=b===ot&&Z.id===pt;Bt.setState(Z,b,ye)}let ee=!1;Z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Ze.state.version||Rt.outputColorSpace!==ht||q.isBatchedMesh&&Rt.batching===!1||!q.isBatchedMesh&&Rt.batching===!0||q.isBatchedMesh&&Rt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Rt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Rt.instancing===!1||!q.isInstancedMesh&&Rt.instancing===!0||q.isSkinnedMesh&&Rt.skinning===!1||!q.isSkinnedMesh&&Rt.skinning===!0||q.isInstancedMesh&&Rt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Rt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Rt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Rt.instancingMorph===!1&&q.morphTexture!==null||Rt.envMap!==Dt||Z.fog===!0&&Rt.fog!==bt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Bt.numPlanes||Rt.numIntersection!==Bt.numIntersection)||Rt.vertexAlphas!==Gt||Rt.vertexTangents!==$t||Rt.morphTargets!==Ut||Rt.morphNormals!==Lt||Rt.morphColors!==Qt||Rt.toneMapping!==Pe||Rt.morphTargetsCount!==Se||!!Rt.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,Rt.__version=Z.version);let me=Rt.currentProgram;ee===!0&&(me=gs(Z,z,q),W&&Z.isNodeMaterial&&W.onUpdateProgram(Z,me,Rt));let qe=!1,ui=!1,wi=!1;const ve=me.getUniforms(),Ae=Rt.uniforms;if(y.useProgram(me.program)&&(qe=!0,ui=!0,wi=!0),Z.id!==pt&&(pt=Z.id,ui=!0),Rt.needsLights){const ye=vs(P.state.lightProbeGridArray,q);Rt.lightProbeGrid!==ye&&(Rt.lightProbeGrid=ye,ui=!0)}if(qe||ot!==b){y.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ve.setValue(B,"projectionMatrix",b.projectionMatrix),ve.setValue(B,"viewMatrix",b.matrixWorldInverse);const gi=ve.map.cameraPosition;gi!==void 0&&gi.setValue(B,Ie.setFromMatrixPosition(b.matrixWorld)),C.logarithmicDepthBuffer&&ve.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ve.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),ot!==b&&(ot=b,ui=!0,wi=!0)}if(Rt.needsLights&&(Ze.state.directionalShadowMap.length>0&&ve.setValue(B,"directionalShadowMap",Ze.state.directionalShadowMap,et),Ze.state.spotShadowMap.length>0&&ve.setValue(B,"spotShadowMap",Ze.state.spotShadowMap,et),Ze.state.pointShadowMap.length>0&&ve.setValue(B,"pointShadowMap",Ze.state.pointShadowMap,et)),q.isSkinnedMesh){ve.setOptional(B,q,"bindMatrix"),ve.setOptional(B,q,"bindMatrixInverse");const ye=q.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ve.setValue(B,"boneTexture",ye.boneTexture,et))}q.isBatchedMesh&&(ve.setOptional(B,q,"batchingTexture"),ve.setValue(B,"batchingTexture",q._matricesTexture,et),ve.setOptional(B,q,"batchingIdTexture"),ve.setValue(B,"batchingIdTexture",q._indirectTexture,et),ve.setOptional(B,q,"batchingColorTexture"),q._colorsTexture!==null&&ve.setValue(B,"batchingColorTexture",q._colorsTexture,et));const bi=Q.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&k.update(q,Q,me),(ui||Rt.receiveShadow!==q.receiveShadow)&&(Rt.receiveShadow=q.receiveShadow,ve.setValue(B,"receiveShadow",q.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&z.environment!==null&&(Ae.envMapIntensity.value=z.environmentIntensity),Ae.dfgLUT!==void 0&&(Ae.dfgLUT.value=NE()),ui){if(ve.setValue(B,"toneMappingExposure",H.toneMappingExposure),Rt.needsLights&&Ca(Ae,wi),bt&&Z.fog===!0&&Ft.refreshFogUniforms(Ae,bt),Ft.refreshMaterialUniforms(Ae,Z,dt,mt,P.state.transmissionRenderTarget[b.id]),Rt.needsLights&&Rt.lightProbeGrid){const ye=Rt.lightProbeGrid;Ae.probesSH.value=ye.texture,Ae.probesMin.value.copy(ye.boundingBox.min),Ae.probesMax.value.copy(ye.boundingBox.max),Ae.probesResolution.value.copy(ye.resolution)}Ko.upload(B,ar(Rt),Ae,et)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Ko.upload(B,ar(Rt),Ae,et),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ve.setValue(B,"center",q.center),ve.setValue(B,"modelViewMatrix",q.modelViewMatrix),ve.setValue(B,"normalMatrix",q.normalMatrix),ve.setValue(B,"modelMatrix",q.matrixWorld),Z.uniformsGroups!==void 0){const ye=Z.uniformsGroups;for(let gi=0,Yi=ye.length;gi<Yi;gi++){const xs=ye[gi];ct.update(xs,me),ct.bind(xs,me)}}return me}function Ca(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Pa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return it},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(b,z,Q){const Z=K.get(b);Z.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),K.get(b.texture).__webglTexture=z,K.get(b.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const Q=K.get(b);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,Q=0){J=b,it=z,$=Q;let Z=null,q=!1,bt=!1;if(b){const ht=K.get(b);if(ht.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,ht.__webglFramebuffer),ft.copy(b.viewport),wt.copy(b.scissor),qt=b.scissorTest,y.viewport(ft),y.scissor(wt),y.setScissorTest(qt),pt=-1;return}else if(ht.__webglFramebuffer===void 0)et.setupRenderTarget(b);else if(ht.__hasExternalTextures)et.rebindTextures(b,K.get(b.texture).__webglTexture,K.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Gt=b.depthTexture;if(ht.__boundDepthTexture!==Gt){if(Gt!==null&&K.has(Gt)&&(b.width!==Gt.image.width||b.height!==Gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(b)}}const gt=b.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(bt=!0);const Dt=K.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[z])?Z=Dt[z][Q]:Z=Dt[z],q=!0):b.samples>0&&et.useMultisampledRTT(b)===!1?Z=K.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?Z=Dt[Q]:Z=Dt,ft.copy(b.viewport),wt.copy(b.scissor),qt=b.scissorTest}else ft.copy(zt).multiplyScalar(dt).floor(),wt.copy(Te).multiplyScalar(dt).floor(),qt=ne;if(Q!==0&&(Z=at),y.bindFramebuffer(B.FRAMEBUFFER,Z)&&y.drawBuffers(b,Z),y.viewport(ft),y.scissor(wt),y.setScissorTest(qt),q){const ht=K.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+z,ht.__webglTexture,Q)}else if(bt){const ht=z;for(let gt=0;gt<b.textures.length;gt++){const Dt=K.get(b.textures[gt]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+gt,Dt.__webglTexture,Q,ht)}}else if(b!==null&&Q!==0){const ht=K.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ht.__webglTexture,Q)}pt=-1},this.readRenderTargetPixels=function(b,z,Q,Z,q,bt,Ct,ht=0){if(!(b&&b.isWebGLRenderTarget)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let gt=K.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(gt=gt[Ct]),gt){y.bindFramebuffer(B.FRAMEBUFFER,gt);try{const Dt=b.textures[ht],Gt=Dt.format,$t=Dt.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ht),!C.textureFormatReadable(Gt)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable($t)){fe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-Z&&Q>=0&&Q<=b.height-q&&B.readPixels(z,Q,Z,q,St.convert(Gt),St.convert($t),bt)}finally{const Dt=J!==null?K.get(J).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,z,Q,Z,q,bt,Ct,ht=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let gt=K.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ct!==void 0&&(gt=gt[Ct]),gt)if(z>=0&&z<=b.width-Z&&Q>=0&&Q<=b.height-q){y.bindFramebuffer(B.FRAMEBUFFER,gt);const Dt=b.textures[ht],Gt=Dt.format,$t=Dt.type;if(b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ht),!C.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.bufferData(B.PIXEL_PACK_BUFFER,bt.byteLength,B.STREAM_READ),B.readPixels(z,Q,Z,q,St.convert(Gt),St.convert($t),0);const Lt=J!==null?K.get(J).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Lt);const Qt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Fg(B,Qt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ut),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,bt),B.deleteBuffer(Ut),B.deleteSync(Qt),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,Q=0){const Z=Math.pow(2,-Q),q=Math.floor(b.image.width*Z),bt=Math.floor(b.image.height*Z),Ct=z!==null?z.x:0,ht=z!==null?z.y:0;et.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Ct,ht,q,bt),y.unbindTexture()},this.copyTextureToTexture=function(b,z,Q=null,Z=null,q=0,bt=0){let Ct,ht,gt,Dt,Gt,$t,Ut,Lt,Qt;const Pe=b.isCompressedTexture?b.mipmaps[bt]:b.image;if(Q!==null)Ct=Q.max.x-Q.min.x,ht=Q.max.y-Q.min.y,gt=Q.isBox3?Q.max.z-Q.min.z:1,Dt=Q.min.x,Gt=Q.min.y,$t=Q.isBox3?Q.min.z:0;else{const Ae=Math.pow(2,-q);Ct=Math.floor(Pe.width*Ae),ht=Math.floor(Pe.height*Ae),b.isDataArrayTexture?gt=Pe.depth:b.isData3DTexture?gt=Math.floor(Pe.depth*Ae):gt=1,Dt=0,Gt=0,$t=0}Z!==null?(Ut=Z.x,Lt=Z.y,Qt=Z.z):(Ut=0,Lt=0,Qt=0);const _e=St.convert(z.format),Se=St.convert(z.type);let Rt;z.isData3DTexture?(et.setTexture3D(z,0),Rt=B.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(et.setTexture2DArray(z,0),Rt=B.TEXTURE_2D_ARRAY):(et.setTexture2D(z,0),Rt=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,z.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,z.unpackAlignment);const Ze=y.getParameter(B.UNPACK_ROW_LENGTH),ee=y.getParameter(B.UNPACK_IMAGE_HEIGHT),me=y.getParameter(B.UNPACK_SKIP_PIXELS),qe=y.getParameter(B.UNPACK_SKIP_ROWS),ui=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,Pe.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pe.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Dt),y.pixelStorei(B.UNPACK_SKIP_ROWS,Gt),y.pixelStorei(B.UNPACK_SKIP_IMAGES,$t);const wi=b.isDataArrayTexture||b.isData3DTexture,ve=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const Ae=K.get(b),bi=K.get(z),ye=K.get(Ae.__renderTarget),gi=K.get(bi.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,ye.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,gi.__webglFramebuffer);for(let Yi=0;Yi<gt;Yi++)wi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(b).__webglTexture,q,$t+Yi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(z).__webglTexture,bt,Qt+Yi)),B.blitFramebuffer(Dt,Gt,Ct,ht,Ut,Lt,Ct,ht,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(q!==0||b.isRenderTargetTexture||K.has(b)){const Ae=K.get(b),bi=K.get(z);y.bindFramebuffer(B.READ_FRAMEBUFFER,lt),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,Y);for(let ye=0;ye<gt;ye++)wi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ae.__webglTexture,q,$t+ye):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ae.__webglTexture,q),ve?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,bi.__webglTexture,bt,Qt+ye):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,bi.__webglTexture,bt),q!==0?B.blitFramebuffer(Dt,Gt,Ct,ht,Ut,Lt,Ct,ht,B.COLOR_BUFFER_BIT,B.NEAREST):ve?B.copyTexSubImage3D(Rt,bt,Ut,Lt,Qt+ye,Dt,Gt,Ct,ht):B.copyTexSubImage2D(Rt,bt,Ut,Lt,Dt,Gt,Ct,ht);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ve?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Rt,bt,Ut,Lt,Qt,Ct,ht,gt,_e,Se,Pe.data):z.isCompressedArrayTexture?B.compressedTexSubImage3D(Rt,bt,Ut,Lt,Qt,Ct,ht,gt,_e,Pe.data):B.texSubImage3D(Rt,bt,Ut,Lt,Qt,Ct,ht,gt,_e,Se,Pe):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,bt,Ut,Lt,Ct,ht,_e,Se,Pe.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,bt,Ut,Lt,Pe.width,Pe.height,_e,Pe.data):B.texSubImage2D(B.TEXTURE_2D,bt,Ut,Lt,Ct,ht,_e,Se,Pe);y.pixelStorei(B.UNPACK_ROW_LENGTH,Ze),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ee),y.pixelStorei(B.UNPACK_SKIP_PIXELS,me),y.pixelStorei(B.UNPACK_SKIP_ROWS,qe),y.pixelStorei(B.UNPACK_SKIP_IMAGES,ui),bt===0&&z.generateMipmaps&&B.generateMipmap(Rt),y.unbindTexture()},this.initRenderTarget=function(b){K.get(b).__webglFramebuffer===void 0&&et.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?et.setTextureCube(b,0):b.isData3DTexture?et.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?et.setTexture2DArray(b,0):et.setTexture2D(b,0),y.unbindTexture()},this.resetState=function(){it=0,$=0,J=null,y.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}/*!
 * Photo Sphere Viewer 5.15.1
 * @copyright 2014-2015 Jérémy Heleine
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var UE=Object.defineProperty,Yc=(i,t)=>{for(var e in t)UE(i,e,{get:t[e],enumerable:!0})},Zr={};Yc(Zr,{ACTIONS:()=>rf,ANIMATION_MIN_DURATION:()=>vc,CAPTURE_EVENTS_CLASS:()=>jr,CTRLZOOM_TIMEOUT:()=>sf,DBLCLICK_DELAY:()=>tf,EASINGS:()=>Jo,ICONS:()=>Xi,IDS:()=>ei,KEY_CODES:()=>Ke,LONGTOUCH_DELAY:()=>ef,MOVE_THRESHOLD:()=>Qd,SPHERE_RADIUS:()=>bn,TWOFINGERSOVERLAY_DELAY:()=>nf,VIEWER_DATA:()=>Yn});var FE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="40 40 432 432"><g transform="rotate(0, 256, 256)"><path fill="currentColor" d="M425.23 210.55H227.39a5 5 0 01-3.53-8.53l56.56-56.57a45.5 45.5 0 000-64.28 45.15 45.15 0 00-32.13-13.3 45.15 45.15 0 00-32.14 13.3L41.32 256l174.83 174.83a45.15 45.15 0 0032.14 13.3 45.15 45.15 0 0032.13-13.3 45.5 45.5 0 000-64.28l-56.57-56.57a5 5 0 013.54-8.53h197.84c25.06 0 45.45-20.39 45.45-45.45s-20.4-45.45-45.45-45.45z"/></g><!-- Created by Flatart from the Noun Project --></svg>
`,kE='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><g fill="currentColor" transform=" translate(50, 50) rotate(45)"><rect x="-5" y="-65" width="10" height="130"/><rect x="-65" y="-5" width="130" height="10"/></g></svg>',BE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M83.3 35.6h-17V3H32.2v32.6H16.6l33.6 32.7 33-32.7z"/><path fill="currentColor" d="M83.3 64.2v16.3H16.6V64.2H-.1v32.6H100V64.2H83.3z"/><!--Created by Michael Zenaty from the Noun Project--></svg>
`,zE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M100 40H87.1V18.8h-21V6H100zM100 93.2H66V80.3h21.1v-21H100zM34 93.2H0v-34h12.9v21.1h21zM12.9 40H0V6h34v12.9H12.8z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,HE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M66 7h13v21h21v13H66zM66 60.3h34v12.9H79v21H66zM0 60.3h34v34H21V73.1H0zM21 7h13v34H0V28h21z"/><!--Created by Garrett Knoll from the Noun Project--></svg>
`,VE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="currentColor" d="M28.3 26.1c-1 2.6-1.9 4.8-2.6 7-2.5 7.4-5 14.7-7.2 22-1.3 4.4.5 7.2 4.3 7.8 1.3.2 2.8.2 4.2-.1 8.2-2 11.9-8.6 15.7-15.2l-2.2 2a18.8 18.8 0 0 1-7.4 5.2 2 2 0 0 1-1.6-.2c-.2-.1 0-1 0-1.4l.8-1.8L41.9 28c.5-1.4.9-3 .7-4.4-.2-2.6-3-4.4-6.3-4.4-8.8.2-15 4.5-19.5 11.8-.2.3-.2.6-.3 1.3 3.7-2.8 6.8-6.1 11.8-6.2z"/><circle fill="currentColor" cx="39.3" cy="9.2" r="8.2"/><!--Created by Arafat Uddin from the Noun Project--></svg>
`,GE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 10 80 80"><g fill="currentColor"><circle r="10" cx="20" cy="20"/><circle r="10" cx="50" cy="20"/><circle r="10" cx="80" cy="20"/><circle r="10" cx="20" cy="50"/><circle r="10" cx="50" cy="50"/><circle r="10" cx="80" cy="50"/><circle r="10" cx="20" cy="80"/><circle r="10" cx="50" cy="80"/><circle r="10" cx="80" cy="80"/></g><!-- Created by Richard Kunák from the Noun Project--></svg>
`,WE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M8.728 4.009H6.744v2.737H4.006V8.73h2.738v2.736h1.984V8.73h2.737V6.746H8.728z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,XE=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M14.043 12.22a7.738 7.738 0 1 0-1.823 1.822l4.985 4.985c.503.504 1.32.504 1.822 0a1.285 1.285 0 0 0 0-1.822l-4.984-4.985zm-6.305 1.043a5.527 5.527 0 1 1 0-11.053 5.527 5.527 0 0 1 0 11.053z"/><path fill="currentColor" d="M4.006 6.746h7.459V8.73H4.006z"/><!--Created by Ryan Canning from the Noun Project--></svg>
`,vc=500,Qd=4,tf=300,ef=500,nf=100,sf=2e3,bn=10,Yn="photoSphereViewer",jr="psv--capture-event",rf=(i=>(i.ROTATE_UP="ROTATE_UP",i.ROTATE_DOWN="ROTATE_DOWN",i.ROTATE_RIGHT="ROTATE_RIGHT",i.ROTATE_LEFT="ROTATE_LEFT",i.ZOOM_IN="ZOOM_IN",i.ZOOM_OUT="ZOOM_OUT",i))(rf||{}),ei={MENU:"menu",TWO_FINGERS:"twoFingers",CTRL_ZOOM:"ctrlZoom",ERROR:"error",DESCRIPTION:"description"},Ke={Enter:"Enter",Control:"Control",Escape:"Escape",Space:" ",PageUp:"PageUp",PageDown:"PageDown",ArrowLeft:"ArrowLeft",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowDown:"ArrowDown",Delete:"Delete",Plus:"+",Minus:"-"},Xi={arrow:FE,close:kE,download:BE,fullscreenIn:zE,fullscreenOut:HE,info:VE,menu:GE,zoomIn:WE,zoomOut:XE},Jo={linear:i=>i,inQuad:i=>i*i,outQuad:i=>i*(2-i),inOutQuad:i=>i<.5?2*i*i:-1+(4-2*i)*i,inCubic:i=>i*i*i,outCubic:i=>--i*i*i+1,inOutCubic:i=>i<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1,inQuart:i=>i*i*i*i,outQuart:i=>1- --i*i*i*i,inOutQuart:i=>i<.5?8*i*i*i*i:1-8*--i*i*i*i,inQuint:i=>i*i*i*i*i,outQuint:i=>1+--i*i*i*i*i,inOutQuint:i=>i<.5?16*i*i*i*i*i:1+16*--i*i*i*i*i,inSine:i=>1-Math.cos(i*(Math.PI/2)),outSine:i=>Math.sin(i*(Math.PI/2)),inOutSine:i=>.5-.5*Math.cos(Math.PI*i),inExpo:i=>Math.pow(2,10*(i-1)),outExpo:i=>1-Math.pow(2,-10*i),inOutExpo:i=>(i=i*2-1)<0?.5*Math.pow(2,10*i):1-.5*Math.pow(2,-10*i),inCirc:i=>1-Math.sqrt(1-i*i),outCirc:i=>Math.sqrt(1-(i-1)*(i-1)),inOutCirc:i=>(i*=2)<1?.5-.5*Math.sqrt(1-i*i):.5+.5*Math.sqrt(1-(i-=2)*i)},re={};Yc(re,{Animation:()=>la,Dynamic:()=>Tr,MultiDynamic:()=>Pf,PressHandler:()=>Ea,Slider:()=>Rf,SliderDirection:()=>Lf,addClasses:()=>$c,angle:()=>af,applyEulerInverse:()=>Sc,checkClosedShadowDom:()=>Tf,checkStylesheet:()=>bf,checkVersion:()=>eh,cleanCssPosition:()=>Sf,clone:()=>xa,createSizedTexture:()=>Cf,createTexture:()=>Ec,cssPositionIsOrdered:()=>th,dasherize:()=>KE,deepEqual:()=>yf,deepmerge:()=>vf,distance:()=>of,exitFullscreen:()=>_f,firstNonNull:()=>en,getAbortError:()=>yc,getAngle:()=>cf,getClosest:()=>uf,getConfigParser:()=>Ma,getElement:()=>hf,getEventTarget:()=>sa,getMatchingTarget:()=>df,getPosition:()=>ff,getShortestArc:()=>lf,getStyleProperty:()=>on,getTouchData:()=>xc,getXMPValue:()=>yi,greatArcDistance:()=>qE,hasParent:()=>$E,invertResolvableBoolean:()=>ya,isAbortError:()=>Ef,isEmpty:()=>xf,isExtendedPosition:()=>Qc,isFullscreenEnabled:()=>pf,isNil:()=>Je,isPlainObject:()=>Jc,keyPressMatch:()=>Kc,logWarn:()=>je,mergePanoData:()=>Af,parseAngle:()=>Bn,parsePoint:()=>JE,parseSpeed:()=>wf,removeClasses:()=>YE,requestFullscreen:()=>mf,resolveBoolean:()=>jc,speedToDuration:()=>Mc,sum:()=>ZE,throttle:()=>gf,toggleClass:()=>va,wrap:()=>Pr});function Pr(i,t){let e=i%t;return e<0&&(e+=t),e}function ZE(i){return i.reduce((t,e)=>t+e,0)}function of(i,t){return Math.sqrt(Math.pow(i.x-t.x,2)+Math.pow(i.y-t.y,2))}function af(i,t){return Math.atan2(t.y-i.y,t.x-i.x)}function lf(i,t){return[0,Math.PI*2,-Math.PI*2].reduce((s,r)=>{const a=t-i+r;return Math.abs(a)<Math.abs(s)?a:s},1/0)}function cf(i,t){return Math.acos(Math.cos(i.pitch)*Math.cos(t.pitch)*Math.cos(i.yaw-t.yaw)+Math.sin(i.pitch)*Math.sin(t.pitch))}function qE([i,t],[e,s]){i-e>Math.PI?i-=2*Math.PI:i-e<-Math.PI&&(i+=2*Math.PI);const r=(e-i)*Math.cos((t+s)/2),a=s-t;return Math.sqrt(r*r+a*a)}function hf(i){return typeof i=="string"?i.match(/^[a-z]/i)?document.getElementById(i):document.querySelector(i):i}function va(i,t,e){e===void 0?i.classList.toggle(t):e?i.classList.add(t):e||i.classList.remove(t)}function $c(i,t){i.classList.add(...t.split(" ").filter(e=>!!e))}function YE(i,t){i.classList.remove(...t.split(" ").filter(e=>!!e))}function $E(i,t){let e=i;do{if(e===t)return!0;e=e.parentElement}while(e);return!1}function uf(i,t){if(!(i!=null&&i.matches))return null;let e=i;do{if(e.matches(t))return e;e=e.parentElement}while(e);return null}function sa(i){return(i==null?void 0:i.composedPath()[0])||null}function df(i,t){return i?i.composedPath().find(e=>!(e instanceof HTMLElement)&&!(e instanceof SVGElement)?!1:e.matches(t)):null}function ff(i){let t=0,e=0,s=i;for(;s;)t+=s.offsetLeft-s.scrollLeft+s.clientLeft,e+=s.offsetTop-s.scrollTop+s.clientTop,s=s.offsetParent;return t-=window.scrollX,e-=window.scrollY,{x:t,y:e}}function on(i,t){return window.getComputedStyle(i).getPropertyValue(t)}function xc(i){if(i.touches.length<2)return null;const t={x:i.touches[0].clientX,y:i.touches[0].clientY},e={x:i.touches[1].clientX,y:i.touches[1].clientY};return{distance:of(t,e),angle:af(t,e),center:{x:(t.x+e.x)/2,y:(t.y+e.y)/2}}}var ra;function pf(i,t=!1){return t?i===ra:document.fullscreenElement===i}function mf(i,t=!1){t?(ra=i,i.classList.add("psv-fullscreen-emulation"),document.dispatchEvent(new Event("fullscreenchange"))):i.requestFullscreen()}function _f(i=!1){i?(ra.classList.remove("psv-fullscreen-emulation"),ra=null,document.dispatchEvent(new Event("fullscreenchange"))):document.exitFullscreen()}function Kc(i,t){let e,s=!1,r=!1,a=!1,c=!1;return t==="+"?e=t:t.split("+").forEach(h=>{switch(h){case"Shift":s=!0;break;case"Ctrl":r=!0;break;case"Alt":a=!0;break;case"Meta":c=!0;break;case"Space":e=" ";break;case"Plus":e="+";break;case"Minus":e="-";break;default:e=h;break}}),s===i.shiftKey&&r===i.ctrlKey&&a===i.altKey&&c===i.metaKey&&e===i.key}function KE(i){return i.replace(/[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,(t,e)=>(e>0?"-":"")+t.toLowerCase())}function gf(i,t){let e=!1;return function(...s){e||(e=!0,setTimeout(()=>{i.apply(this,s),e=!1},t))}}function Jc(i){if(typeof i!="object"||i===null||Object.prototype.toString.call(i)!=="[object Object]")return!1;if(Object.getPrototypeOf(i)===null)return!0;let t=i;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(i)===t}function vf(i,t){const e=t;return(function s(r,a){return Array.isArray(a)?(!r||!Array.isArray(r)?r=[]:r.length=0,a.forEach((c,h)=>{r[h]=s(null,c)})):typeof a=="object"?((!r||Array.isArray(r))&&(r={}),Object.keys(a).forEach(c=>{c!=="__proto__"&&(typeof a[c]!="object"||!a[c]||!Jc(a[c])?r[c]=a[c]:a[c]!==e&&(r[c]?s(r[c],a[c]):r[c]=s(null,a[c])))})):r=a,r})(i,t)}function xa(i){return vf(null,i)}function xf(i){return!i||Object.keys(i).length===0&&i.constructor===Object}function Je(i){return i==null}function en(...i){for(const t of i)if(!Je(t))return t;return null}function yf(i,t){if(i===t)return!0;if(sd(i)&&sd(t)){if(Object.keys(i).length!==Object.keys(t).length)return!1;for(const e of Object.keys(i))if(!yf(i[e],t[e]))return!1;return!0}else return!1}function sd(i){return typeof i=="object"&&i!==null}var Zt=class Mf extends Error{constructor(t,e){var s;super(e&&e instanceof Error?`${t}: ${e.message}`:t),this.name="PSVError",(s=Error.captureStackTrace)==null||s.call(Error,this,Mf)}};function jc(i,t){Jc(i)?(t(i.initial,!0),i.promise.then(e=>t(e,!1))):t(i,!0)}function ya(i){return{initial:!i.initial,promise:i.promise.then(t=>!t)}}function yc(){const i=new Error("Loading was aborted.");return i.name="AbortError",i}function Ef(i){return(i==null?void 0:i.name)==="AbortError"}function je(i){console.warn(`PhotoSphereViewer: ${i}`)}function Qc(i){return!i||Array.isArray(i)?!1:[["textureX","textureY"],["yaw","pitch"]].some(([t,e])=>i[t]!==void 0&&i[e]!==void 0)}function yi(i,t,e=!0){let s=i.match("<GPano:"+t+">(.*)</GPano:"+t+">");if(s!==null){const r=e?parseInt(s[1],10):parseFloat(s[1]);return isNaN(r)?null:r}if(s=i.match("GPano:"+t+'="(.*?)"'),s!==null){const r=e?parseInt(s[1],10):parseFloat(s[1]);return isNaN(r)?null:r}return null}var rd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oa=["left","center","right"],aa=["top","center","bottom"],od=[...oa,...aa],Pi="center";function JE(i){if(!i)return{x:.5,y:.5};if(typeof i=="object")return i;let t=i.toLocaleLowerCase().split(" ").slice(0,2);t.length===1&&(rd[t[0]]?t=[t[0],Pi]:t=[t[0],t[0]]);const e=t[1]!=="left"&&t[1]!=="right"&&t[0]!=="top"&&t[0]!=="bottom";t=t.map(r=>rd[r]||r),e||t.reverse();const s=t.join(" ").match(/^([0-9.]+)% ([0-9.]+)%$/);return s?{x:parseFloat(s[1])/100,y:parseFloat(s[2])/100}:{x:.5,y:.5}}function Sf(i,{allowCenter:t,cssOrder:e}={allowCenter:!0,cssOrder:!0}){return i?(typeof i=="string"&&(i=i.split(" ")),i.length===1&&(i[0]===Pi?i=[Pi,Pi]:oa.indexOf(i[0])!==-1?i=[Pi,i[0]]:aa.indexOf(i[0])!==-1&&(i=[i[0],Pi])),i.length!==2||od.indexOf(i[0])===-1||od.indexOf(i[1])===-1?(je(`Unparsable position ${i}`),null):!t&&i[0]===Pi&&i[1]===Pi?(je("Invalid position center center"),null):(e&&!th(i)&&(i=[i[1],i[0]]),i[1]===Pi&&oa.indexOf(i[0])!==-1&&(i=[Pi,i[0]]),i[0]===Pi&&aa.indexOf(i[1])!==-1&&(i=[i[1],Pi]),i)):null}function th(i){return aa.indexOf(i[0])!==-1&&oa.indexOf(i[1])!==-1}function wf(i){let t;if(typeof i=="string"){const e=i.toString().trim();let s=parseFloat(e.replace(/^(-?[0-9]+(?:\.[0-9]*)?).*$/,"$1"));const r=e.replace(/^-?[0-9]+(?:\.[0-9]*)?(.*)$/,"$1").trim();switch(r.match(/(pm|per minute)$/)&&(s/=60),r){case"dpm":case"degrees per minute":case"dps":case"degrees per second":t=pe.degToRad(s);break;case"rdpm":case"radians per minute":case"rdps":case"radians per second":t=s;break;case"rpm":case"revolutions per minute":case"rps":case"revolutions per second":t=s*Math.PI*2;break;default:throw new Zt(`Unknown speed unit "${r}"`)}}else t=i;return t}function Mc(i,t){if(typeof i!="number"){const e=wf(i);return t/Math.abs(e)*1e3}else return Math.abs(i)}function Bn(i,t=!1,e=t){let s;if(typeof i=="string"){const r=i.toLowerCase().trim().match(/^(-?[0-9]+(?:\.[0-9]*)?)(.*)$/);if(!r)throw new Zt(`Unknown angle "${i}"`);const a=parseFloat(r[1]),c=r[2];if(c)switch(c){case"deg":case"degs":s=pe.degToRad(a);break;case"rad":case"rads":s=a;break;default:throw new Zt(`Unknown angle unit "${c}"`)}else s=a}else if(typeof i=="number"&&!isNaN(i))s=i;else throw new Zt(`Unknown angle "${i}"`);return s=Pr(t?s+Math.PI:s,Math.PI*2),t?pe.clamp(s-Math.PI,-Math.PI/(e?2:1),Math.PI/(e?2:1)):s}function Ma(i,t){const e=function(s){const r=xa({...i,...s}),a={};for(let[c,h]of Object.entries(r)){if(t&&c in t)h=t[c](h,{rawConfig:r,defValue:i[c]});else if(!(c in i)){je(`Unknown option ${c}`);continue}a[c]=h}return a};return e.defaults=i,e.parsers=t||{},e}function bf(i,t){on(i,`--psv-${t}-loaded`)!=="true"&&console.error(`PhotoSphereViewer: stylesheet "@photo-sphere-viewer/${t}/index.css" is not loaded`)}function eh(i,t,e){t&&t!==e&&console.error(`PhotoSphereViewer: @photo-sphere-viewer/${i} is in version ${t} but @photo-sphere-viewer/core is in version ${e}`)}function Tf(i){do{if(i instanceof ShadowRoot&&i.mode==="closed"){console.error("PhotoSphereViewer: closed shadow DOM detected, the viewer might not work as expected");return}i=i.parentNode}while(i)}function Af(i,t,e,s){const r={isEquirectangular:!0,fullWidth:en(e==null?void 0:e.fullWidth,s==null?void 0:s.fullWidth),fullHeight:en(e==null?void 0:e.fullHeight,s==null?void 0:s.fullHeight),croppedWidth:en(e==null?void 0:e.croppedWidth,s==null?void 0:s.croppedWidth,i),croppedHeight:en(e==null?void 0:e.croppedHeight,s==null?void 0:s.croppedHeight,t),croppedX:en(e==null?void 0:e.croppedX,s==null?void 0:s.croppedX),croppedY:en(e==null?void 0:e.croppedY,s==null?void 0:s.croppedY),poseHeading:en(e==null?void 0:e.poseHeading,s==null?void 0:s.poseHeading,0),posePitch:en(e==null?void 0:e.posePitch,s==null?void 0:s.posePitch,0),poseRoll:en(e==null?void 0:e.poseRoll,s==null?void 0:s.poseRoll,0),initialHeading:s==null?void 0:s.initialHeading,initialPitch:s==null?void 0:s.initialPitch,initialFov:s==null?void 0:s.initialFov};if(r.croppedWidth!==i){const a=i/r.croppedWidth;["fullWidth","fullHeight","croppedWidth","croppedHeight","croppedX","croppedY"].forEach(c=>{r[c]&&(r[c]=Math.round(r[c]*a))})}return!r.fullWidth&&!r.fullHeight&&(r.fullWidth=Math.max(r.croppedWidth,r.croppedHeight*2),r.fullHeight=Math.round(r.fullWidth/2)),r.fullWidth||(r.fullWidth=r.fullHeight*2),r.fullHeight||(r.fullHeight=Math.round(r.fullWidth/2)),r.croppedX===null&&(r.croppedX=Math.round((r.fullWidth-i)/2)),r.croppedY===null&&(r.croppedY=Math.round((r.fullHeight-t)/2)),Math.abs(r.fullWidth-r.fullHeight*2)>1&&(je("Invalid panoData, fullWidth should be twice fullHeight"),r.fullHeight=Math.round(r.fullWidth/2)),r.croppedX+r.croppedWidth>r.fullWidth&&(je("Invalid panoData, croppedX + croppedWidth > fullWidth"),r.croppedX=r.fullWidth-r.croppedWidth),r.croppedY+r.croppedHeight>r.fullHeight&&(je("Invalid panoData, croppedY + croppedHeight > fullHeight"),r.croppedY=r.fullHeight-r.croppedHeight),r.croppedX<0&&(je("Invalid panoData, croppedX < 0"),r.croppedX=0),r.croppedY<0&&(je("Invalid panoData, croppedY < 0"),r.croppedY=0),r}var Mr=`${Yn}_touchSupport`,ci={loaded:!1,pixelRatio:1,isWebGLSupported:!1,maxTextureWidth:0,isTouchEnabled:null,__maxCanvasWidth:null,isIphone:!1,get maxCanvasWidth(){return this.__maxCanvasWidth===null&&(this.__maxCanvasWidth=tS(this.maxTextureWidth)),this.__maxCanvasWidth},load(){if(!this.loaded){const i=jE();this.pixelRatio=window.devicePixelRatio||1,this.isWebGLSupported=!!i,this.maxTextureWidth=i?i.getParameter(i.MAX_TEXTURE_SIZE):0,this.isTouchEnabled=QE(),this.isIphone=/iPhone/i.test(navigator.userAgent),this.loaded=!0}if(!ci.isWebGLSupported)throw new Zt("WebGL 2 is not supported.");if(ci.maxTextureWidth===0)throw new Zt("Unable to detect system capabilities")}};function jE(){try{return document.createElement("canvas").getContext("webgl2")}catch{return null}}function QE(){let i="ontouchstart"in window||navigator.maxTouchPoints>0;Mr in localStorage&&(i=localStorage[Mr]==="true");const t=new Promise(e=>{const s=()=>{window.removeEventListener("mousedown",r),window.removeEventListener("touchstart",a),clearTimeout(h)},r=()=>{s(),localStorage[Mr]=!1,e(!1)},a=()=>{s(),localStorage[Mr]=!0,e(!0)},c=()=>{s(),localStorage[Mr]=i,e(i)};window.addEventListener("mousedown",r,!1),window.addEventListener("touchstart",a,!1);const h=setTimeout(c,1e4)});return{initial:i,promise:t}}function tS(i){let t=i,e=!1;const s=document.createElement("canvas"),r=s.getContext("2d");for(s.width=1,s.height=1;t>1024&&!e;){const a=document.createElement("canvas"),c=a.getContext("2d");a.width=t,a.height=t/2;try{c.fillStyle="white",c.fillRect(t-1,t/2-1,1,1),r.drawImage(a,t-1,t/2-1,1,1,0,0,1,1),r.getImageData(0,0,1,1).data[0]>0&&(e=!0)}catch{}a.width=0,a.height=0,e||(t/=2)}if(e)return t;throw new Zt("Unable to detect system capabilities")}function Ec(i,t=!1){const e=new Qe(i);return e.needsUpdate=!0,e.minFilter=t?zn:Ge,e.generateMipmaps=t,e.anisotropy=t?2:1,e}function Cf(i,t){if(t||i.width>ci.maxTextureWidth){const e=Math.min(1,ci.maxCanvasWidth/i.width),s=new OffscreenCanvas(Math.floor(i.width*e),Math.floor(i.height*e)),r=s.getContext("2d");return t&&(r.filter=`blur(${s.width/t.factor}px)`),r.drawImage(i,0,0,s.width,s.height),Ec(s)}return Ec(i)}var ad=new $n;function Sc(i,t){ad.setFromEuler(t).invert(),i.applyQuaternion(ad)}var la=class{constructor(i){this.easing=Jo.linear,this.callbacks=[],this.resolved=!1,this.cancelled=!1,this.options=i,i?(i.easing&&(this.easing=typeof i.easing=="function"?i.easing:Jo[i.easing]||Jo.linear),this.delayTimeout=setTimeout(()=>{this.delayTimeout=void 0,this.animationFrame=window.requestAnimationFrame(t=>this.__run(t))},i.delay||0)):this.resolved=!0}__run(i){if(this.cancelled)return;this.start||(this.start=i);const t=(i-this.start)/this.options.duration,e={};if(t<1){for(const[s,r]of Object.entries(this.options.properties))if(r){const a=r.start+(r.end-r.start)*this.easing(t);e[s]=a}this.options.onTick(e,t),this.animationFrame=window.requestAnimationFrame(s=>this.__run(s))}else{for(const[s,r]of Object.entries(this.options.properties))r&&(e[s]=r.end);this.options.onTick(e,1),this.__resolve(!0),this.animationFrame=void 0}}__resolve(i){i?this.resolved=!0:this.cancelled=!0,this.callbacks.forEach(t=>t(i)),this.callbacks.length=0}then(i){return this.resolved||this.cancelled?Promise.resolve(this.resolved).then(i):new Promise(t=>{this.callbacks.push(t)}).then(i)}cancel(){!this.cancelled&&!this.resolved&&(this.__resolve(!1),this.delayTimeout&&(window.clearTimeout(this.delayTimeout),this.delayTimeout=void 0),this.animationFrame&&(window.cancelAnimationFrame(this.animationFrame),this.animationFrame=void 0))}},Tr=class{constructor(i,t){if(this.fn=i,this.mode=0,this.speed=0,this.speedMult=0,this.currentSpeed=0,this.target=0,this.__current=0,this.min=t.min,this.max=t.max,this.wrap=t.wrap,this.current=t.defaultValue,this.wrap&&this.min!==0)throw new Zt("invalid config");this.fn&&this.fn(this.current)}get current(){return this.__current}set current(i){this.__current=i}setSpeed(i){this.speed=i}goto(i,t=1){this.mode=2,this.target=this.wrap?Pr(i,this.max):pe.clamp(i,this.min,this.max),this.speedMult=t}step(i,t=1){t===0?this.setValue(this.current+i):(this.mode!==2&&(this.target=this.current),this.goto(this.target+i,t))}roll(i=!1,t=1){this.mode=1,this.target=i?-1/0:1/0,this.speedMult=t}stop(){this.mode=0}setValue(i){return this.target=this.wrap?Pr(i,this.max):pe.clamp(i,this.min,this.max),this.mode=0,this.currentSpeed=0,this.target!==this.current?(this.current=this.target,this.fn&&this.fn(this.current),!0):!1}update(i){if(this.mode===2){this.wrap&&Math.abs(this.target-this.current)>this.max/2&&(this.current=this.current<this.target?this.current+this.max:this.current-this.max);const s=this.currentSpeed*this.currentSpeed/(this.speed*this.speedMult*4);Math.abs(this.target-this.current)<=s&&(this.mode=0)}let t=this.mode===0?0:this.speed*this.speedMult;this.target<this.current&&(t=-t),this.currentSpeed<t?this.currentSpeed=Math.min(t,this.currentSpeed+i/1e3*this.speed*this.speedMult*2):this.currentSpeed>t&&(this.currentSpeed=Math.max(t,this.currentSpeed-i/1e3*this.speed*this.speedMult*2));let e=null;return this.current>this.target&&this.currentSpeed?e=Math.max(this.target,this.current+this.currentSpeed*i/1e3):this.current<this.target&&this.currentSpeed&&(e=Math.min(this.target,this.current+this.currentSpeed*i/1e3)),e!==null&&(e=this.wrap?Pr(e,this.max):pe.clamp(e,this.min,this.max),e!==this.current)?(this.current=e,this.fn&&this.fn(this.current),!0):!1}},Pf=class{constructor(i,t){this.fn=i,this.dynamics=t,this.fn&&this.fn(this.current)}get current(){return Object.entries(this.dynamics).reduce((i,[t,e])=>(i[t]=e.current,i),{})}setSpeed(i){for(const t of Object.values(this.dynamics))t.setSpeed(i)}goto(i,t=1){for(const[e,s]of Object.entries(i))this.dynamics[e].goto(s,t)}step(i,t=1){if(t===0)this.setValue(Object.keys(i).reduce((e,s)=>(e[s]=i[s]+this.dynamics[s].current,e),{}));else for(const[e,s]of Object.entries(i))this.dynamics[e].step(s,t)}roll(i,t=1){for(const[e,s]of Object.entries(i))this.dynamics[e].roll(s,t)}stop(){for(const i of Object.values(this.dynamics))i.stop()}setValue(i){let t=!1;for(const[e,s]of Object.entries(i))t=this.dynamics[e].setValue(s)||t;return t&&this.fn&&this.fn(this.current),t}update(i){let t=!1;for(const e of Object.values(this.dynamics))t=e.update(i)||t;return t&&this.fn&&this.fn(this.current),t}},Ea=class{constructor(i=200){this.delay=i,this.time=0,this.delay=i}get pending(){return this.time!==0}down(i){this.timeout&&(clearTimeout(this.timeout),this.timeout=void 0),this.time=new Date().getTime(),this.data=i}up(i){if(!this.time)return;Date.now()-this.time<this.delay?this.timeout=setTimeout(()=>{i(this.data),this.timeout=void 0,this.time=0,this.data=void 0},this.delay):(i(this.data),this.time=0,this.data=void 0)}},Lf=(i=>(i.VERTICAL="VERTICAL",i.HORIZONTAL="HORIZONTAL",i))(Lf||{}),Rf=class{constructor(i,t,e){this.container=i,this.direction=t,this.listener=e,this.mousedown=!1,this.mouseover=!1,this.container.addEventListener("click",this),this.container.addEventListener("mousedown",this),this.container.addEventListener("mouseenter",this),this.container.addEventListener("mouseleave",this),this.container.addEventListener("touchstart",this),this.container.addEventListener("mousemove",this,!0),this.container.addEventListener("touchmove",this,!0),window.addEventListener("mouseup",this),window.addEventListener("touchend",this)}get isVertical(){return this.direction==="VERTICAL"}get isHorizontal(){return this.direction==="HORIZONTAL"}destroy(){window.removeEventListener("mouseup",this),window.removeEventListener("touchend",this)}handleEvent(i){switch(i.type){case"click":i.stopPropagation();break;case"mousedown":this.__onMouseDown(i);break;case"mouseenter":this.__onMouseEnter(i);break;case"mouseleave":this.__onMouseLeave(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break}}__onMouseDown(i){this.mousedown=!0,this.__update(i.clientX,i.clientY,!0)}__onMouseEnter(i){this.mouseover=!0,this.__update(i.clientX,i.clientY,!0)}__onTouchStart(i){this.mouseover=!0,this.mousedown=!0;const t=i.changedTouches[0];this.__update(t.clientX,t.clientY,!0)}__onMouseMove(i){(this.mousedown||this.mouseover)&&(i.stopPropagation(),this.__update(i.clientX,i.clientY,!0))}__onTouchMove(i){if(this.mousedown||this.mouseover){i.stopPropagation();const t=i.changedTouches[0];this.__update(t.clientX,t.clientY,!0)}}__onMouseUp(i){this.mousedown&&(this.mousedown=!1,this.__update(i.clientX,i.clientY,!1))}__onMouseLeave(i){this.mouseover&&(this.mouseover=!1,this.__update(i.clientX,i.clientY,!0))}__onTouchEnd(i){if(this.mousedown){this.mouseover=!1,this.mousedown=!1;const t=i.changedTouches[0];this.__update(t.clientX,t.clientY,!1)}}__update(i,t,e){const s=this.container.getBoundingClientRect();let r;this.isVertical?r=pe.clamp((s.bottom-t)/s.height,0,1):r=pe.clamp((i-s.left)/s.width,0,1),this.listener({value:r,click:!e,mousedown:this.mousedown,mouseover:this.mouseover,cursor:{clientX:i,clientY:t}})}},ie={};Yc(ie,{BeforeAnimateEvent:()=>ih,BeforeRenderEvent:()=>Lr,BeforeRotateEvent:()=>zf,ClickEvent:()=>Gf,ConfigChangedEvent:()=>mi,DoubleClickEvent:()=>Yf,FullscreenEvent:()=>Rr,HideNotificationEvent:()=>Ir,HideOverlayEvent:()=>ep,HidePanelEvent:()=>Gn,HideTooltipEvent:()=>op,KeypressEvent:()=>Wn,LoadProgressEvent:()=>up,ObjectEnterEvent:()=>Kp,ObjectEvent:()=>Sa,ObjectHoverEvent:()=>em,ObjectLeaveEvent:()=>wc,PanoramaErrorEvent:()=>xp,PanoramaLoadEvent:()=>pp,PanoramaLoadedEvent:()=>$s,PositionUpdatedEvent:()=>Dr,ReadyEvent:()=>Or,RenderEvent:()=>Rp,RollUpdatedEvent:()=>Nr,ShowNotificationEvent:()=>Ur,ShowOverlayEvent:()=>Up,ShowPanelEvent:()=>Xn,ShowTooltipEvent:()=>Hp,SizeUpdatedEvent:()=>Fr,StopAllEvent:()=>kr,TransitionDoneEvent:()=>Ep,ViewerEvent:()=>Me,ZoomUpdatedEvent:()=>Tn});var If=class extends Event{constructor(i,t=!1){super(i,{cancelable:t})}},Df=class extends EventTarget{dispatchEvent(i){return super.dispatchEvent(i)}addEventListener(i,t,e){super.addEventListener(i,t,e)}removeEventListener(i,t,e){super.removeEventListener(i,t,e)}},Me=class extends If{},Nf=class Of extends Me{constructor(t,e){super(Of.type,!0),this.position=t,this.zoomLevel=e}};Nf.type="before-animate";var ih=Nf,Uf=class Ff extends Me{constructor(t,e){super(Ff.type),this.timestamp=t,this.elapsed=e}};Uf.type="before-render";var Lr=Uf,kf=class Bf extends Me{constructor(t){super(Bf.type,!0),this.position=t}};kf.type="before-rotate";var zf=kf,Hf=class Vf extends Me{constructor(t){super(Vf.type),this.data=t}};Hf.type="click";var Gf=Hf,Wf=class Xf extends Me{constructor(t){super(Xf.type),this.options=t}containsOptions(...t){return t.some(e=>this.options.includes(e))}};Wf.type="config-changed";var mi=Wf,Zf=class qf extends Me{constructor(t){super(qf.type),this.data=t}};Zf.type="dblclick";var Yf=Zf,$f=class Kf extends Me{constructor(t){super(Kf.type),this.fullscreenEnabled=t}};$f.type="fullscreen";var Rr=$f,Jf=class jf extends Me{constructor(t){super(jf.type),this.notificationId=t}};Jf.type="hide-notification";var Ir=Jf,Qf=class tp extends Me{constructor(t){super(tp.type),this.overlayId=t}};Qf.type="hide-overlay";var ep=Qf,ip=class np extends Me{constructor(t){super(np.type),this.panelId=t}};ip.type="hide-panel";var Gn=ip,sp=class rp extends Me{constructor(t){super(rp.type),this.tooltipData=t}};sp.type="hide-tooltip";var op=sp,ap=class lp extends Me{constructor(t,e){super(lp.type,!0),this.key=t,this.originalEvent=e}matches(t){return Kc(this.originalEvent,t)}};ap.type="key-press";var Wn=ap,cp=class hp extends Me{constructor(t){super(hp.type),this.progress=t}};cp.type="load-progress";var up=cp,dp=class fp extends Me{constructor(t){super(fp.type),this.panorama=t}};dp.type="panorama-load";var pp=dp,mp=class _p extends Me{constructor(t){super(_p.type),this.data=t}};mp.type="panorama-loaded";var $s=mp,gp=class vp extends Me{constructor(t,e){super(vp.type),this.panorama=t,this.error=e}};gp.type="panorama-error";var xp=gp,yp=class Mp extends Me{constructor(t){super(Mp.type),this.completed=t}};yp.type="transition-done";var Ep=yp,Sp=class wp extends Me{constructor(t){super(wp.type),this.position=t}};Sp.type="position-updated";var Dr=Sp,bp=class Tp extends Me{constructor(t){super(Tp.type),this.roll=t}};bp.type="roll-updated";var Nr=bp,Ap=class Cp extends Me{constructor(){super(Cp.type)}};Ap.type="ready";var Or=Ap,Pp=class Lp extends Me{constructor(){super(Lp.type)}};Pp.type="render";var Rp=Pp,Ip=class Dp extends Me{constructor(t){super(Dp.type),this.notificationId=t}};Ip.type="show-notification";var Ur=Ip,Np=class Op extends Me{constructor(t){super(Op.type),this.overlayId=t}};Np.type="show-overlay";var Up=Np,Fp=class kp extends Me{constructor(t){super(kp.type),this.panelId=t}};Fp.type="show-panel";var Xn=Fp,Bp=class zp extends Me{constructor(t,e){super(zp.type),this.tooltip=t,this.tooltipData=e}};Bp.type="show-tooltip";var Hp=Bp,Vp=class Gp extends Me{constructor(t){super(Gp.type),this.size=t}};Vp.type="size-updated";var Fr=Vp,Wp=class Xp extends Me{constructor(){super(Xp.type)}};Wp.type="stop-all";var kr=Wp,Zp=class qp extends Me{constructor(t){super(qp.type),this.zoomLevel=t}};Zp.type="zoom-updated";var Tn=Zp,Sa=class extends Me{constructor(i,t,e,s,r){super(i),this.originalEvent=t,this.object=e,this.viewerPoint=s,this.userDataKey=r}},Yp=class $p extends Sa{constructor(t,e,s,r){super($p.type,t,e,s,r)}};Yp.type="enter-object";var Kp=Yp,Jp=class jp extends Sa{constructor(t,e,s,r){super(jp.type,t,e,s,r)}};Jp.type="leave-object";var wc=Jp,Qp=class tm extends Sa{constructor(t,e,s,r){super(tm.type,t,e,s,r)}};Qp.type="hover-object";var em=Qp,nh=class{constructor(i){this.viewer=i}init(){}destroy(){}supportsTransition(i){return!1}supportsPreload(i){return!1}textureCoordsToSphericalCoords(i,t){throw new Zt("Current adapter does not support texture coordinates.")}sphericalCoordsToTextureCoords(i,t){throw new Zt("Current adapter does not support texture coordinates.")}};nh.supportsDownload=!1;function ld(i){if(i){for(const[,t]of[["_",i],...Object.entries(i)])if(t.prototype instanceof nh)return eh(t.id,t.VERSION,"5.15.1"),t}return null}var eS=`varying vec3 vLocalPos;
varying vec3 vLocalCam;
uniform sampler2D map;
uniform float opacity;
uniform vec2 uvOffset;
uniform vec2 uvScale;
uniform float radius;

const float PI = 3.1415926535897932384626433832795;

// Analytic edge antialiasing across one screen-space pixel at the
// cropped-region boundary on a single axis (replaces the MSAA the standard
// adapter gets by rendering triangles).
float edgeAlpha(float coord, float width) {
    float dist = min(coord, 1.0 - coord);
    return clamp(dist / width + 0.5, 0.0, 1.0);
}

// Screen-space derivative (fwidth) of a coordinate that wraps in [0, 1], such
// as longitude at the antimeridian. A naive fwidth() spikes to ~1.0 across the
// seam. Removing the integer jump keeps the result sub-pixel. Assumes the
// per-pixel change stays well under 0.5, so only the wrap rounds to a non-zero
// integer (safe unless a pixel spans ~180deg of longitude).
float fwidthWrapped(float coord) {
    float dx = dFdx(coord); dx -= floor(dx + 0.5);
    float dy = dFdy(coord); dy -= floor(dy + 0.5);
    return abs(dx) + abs(dy);
}

void main() {
    // Ray-cast the true sphere from the camera through the (interpolated, on
    // the polygon chord) position, and use the exit-point direction for
    // sampling. This makes the result independent of mesh tessellation even
    // when the camera is offset from the sphere center (e.g. fisheye config).
    // Inputs are already in the panorama's local frame (see vertex shader), so
    // the exit direction is too and needs no further rotation.
    vec3 rayDir = vLocalPos - vLocalCam;
    float a = dot(rayDir, rayDir);
    float b = dot(vLocalCam, rayDir);
    float c = dot(vLocalCam, vLocalCam) - radius * radius;
    float t = (-b + sqrt(max(b * b - a * c, 0.0))) / a;
    vec3 dir = (vLocalCam + t * rayDir) / radius;

    float u = atan(-dir.x, dir.z) / (2.0 * PI) + 0.5;
    float v = asin(clamp(dir.y, -1.0, 1.0)) / PI + 0.5;
    vec2 uv = (vec2(u, v) - uvOffset) / uvScale;

    float alpha = 1.0;
    // \`u\` wraps at the antimeridian, so derive its width safely.
    if (uvScale.x < 1.0) alpha = min(alpha, edgeAlpha(uv.x, fwidthWrapped(u) / uvScale.x));
    if (uvScale.y < 1.0) alpha = min(alpha, edgeAlpha(uv.y, fwidth(uv.y)));
    if (alpha <= 0.0) discard;

    gl_FragColor = texture2D(map, uv);
    gl_FragColor.a *= opacity * alpha;
}
`,iS=`// Ray-cast inputs in the panorama's local frame, so sphereCorrection and pose
// (both folded into modelMatrix) apply to the sampled direction without
// per-fragment work.
varying vec3 vLocalPos;
varying vec3 vLocalCam;

void main() {
    vLocalPos = position;

    // mat3(modelMatrix) is a pure rotation, so its inverse is its transpose:
    // \`cameraPosition * M == transpose(M) * cameraPosition\`.
    vLocalCam = cameraPosition * mat3(modelMatrix);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,nS=Ma({shader:!1,resolution:64,useXmpData:!0},{resolution:i=>{if(!i||!pe.isPowerOfTwo(i))throw new Zt("EquirectangularAdapter resolution must be power of two.");return i}}),wa=class im extends nh{static withConfig(t){return[im,t]}constructor(t,e){super(t),this.config=nS(e),this.SPHERE_SEGMENTS=this.config.resolution,this.SPHERE_HORIZONTAL_SEGMENTS=this.SPHERE_SEGMENTS/2}supportsTransition(){return!0}supportsPreload(){return!0}textureCoordsToSphericalCoords(t,e){if(Je(t.textureX)||Je(t.textureY))throw new Zt("Texture position is missing 'textureX' or 'textureY'");const s=(t.textureX+e.croppedX)/e.fullWidth*Math.PI*2,r=(t.textureY+e.croppedY)/e.fullHeight*Math.PI;return{yaw:s>=Math.PI?s-Math.PI:s+Math.PI,pitch:Math.PI/2-r}}sphericalCoordsToTextureCoords(t,e){const s=t.yaw/Math.PI/2*e.fullWidth,r=t.pitch/Math.PI*e.fullHeight;let a=Math.round(t.yaw<Math.PI?s+e.fullWidth/2:s-e.fullWidth/2)-e.croppedX,c=Math.round(e.fullHeight/2-r)-e.croppedY;return(a<0||a>e.croppedWidth||c<0||c>e.croppedHeight)&&(a=c=void 0),{textureX:a,textureY:c}}async loadTexture(t,e=!0,s,r=this.config.useXmpData){if(typeof t!="string"&&(typeof t!="object"||!t.path))return Promise.reject(new Zt("Invalid panorama url, are you using the right adapter?"));let a;typeof t=="string"?a={path:t,data:s}:a={data:s,...t};const c=await this.viewer.textureLoader.loadFile(a.path,e?g=>this.viewer.textureLoader.dispatchProgress(g):null,a.path),h=r?await this.loadXMP(c):null,d=await this.viewer.textureLoader.blobToImage(c);typeof a.data=="function"&&(a.data=a.data(d,h));const f=Af(d.width,d.height,a.data,h),p=Cf(d,a.blur?{factor:2048}:null);return{panorama:t,texture:p,panoData:f,cacheKey:a.path}}async loadXMP(t){const e=await this.loadBlobAsString(t),s=e.indexOf("<x:xmpmeta");if(s===-1)return null;const r=e.indexOf("</x:xmpmeta>",s);if(r===-1)return null;const a=e.substring(s,r);return a.includes("GPano:")?{fullWidth:yi(a,"FullPanoWidthPixels"),fullHeight:yi(a,"FullPanoHeightPixels"),croppedWidth:yi(a,"CroppedAreaImageWidthPixels"),croppedHeight:yi(a,"CroppedAreaImageHeightPixels"),croppedX:yi(a,"CroppedAreaLeftPixels"),croppedY:yi(a,"CroppedAreaTopPixels"),poseHeading:yi(a,"PoseHeadingDegrees",!1),posePitch:yi(a,"PosePitchDegrees",!1),poseRoll:yi(a,"PoseRollDegrees",!1),initialHeading:yi(a,"InitialViewHeadingDegrees",!1),initialPitch:yi(a,"InitialViewPitchDegrees",!1),initialFov:yi(a,"InitialHorizontalFOVDegrees",!1)}:null}loadBlobAsString(t){return new Promise((e,s)=>{const r=new FileReader;r.onload=()=>e(r.result),r.onerror=s,r.readAsText(t)})}createMesh(t){if(this.config.shader){const e=new Qs(bn,32,16).scale(-1,1,1),s={map:{value:null},opacity:{value:1},radius:{value:bn},uvOffset:{value:new he(t.croppedX/t.fullWidth,(t.fullHeight-t.croppedY-t.croppedHeight)/t.fullHeight)},uvScale:{value:new he(t.croppedWidth/t.fullWidth,t.croppedHeight/t.fullHeight)}},r=new Ni({uniforms:s,vertexShader:iS,fragmentShader:eS,depthTest:!1,depthWrite:!1,transparent:!0});return new _i(e,r)}else{const e=t.croppedX/t.fullWidth*2*Math.PI,s=t.croppedWidth/t.fullWidth*2*Math.PI,r=t.croppedY/t.fullHeight*Math.PI,a=t.croppedHeight/t.fullHeight*Math.PI,c=new Qs(bn,Math.round(this.SPHERE_SEGMENTS/(2*Math.PI)*s),Math.round(this.SPHERE_HORIZONTAL_SEGMENTS/Math.PI*a),-Math.PI/2+e,s,r,a).scale(-1,1,1),h=new $r({depthTest:!1,depthWrite:!1});return new _i(c,h)}}setTexture(t,e){this.config.shader?t.material.uniforms.map.value=e.texture:t.material.map=e.texture}setTextureOpacity(t,e){this.config.shader?t.material.uniforms.opacity.value=e:(t.material.opacity=e,t.material.transparent=e<1)}disposeTexture({texture:t}){t.dispose()}disposeMesh(t){t.geometry.dispose(),t.material.dispose()}};wa.id="equirectangular";wa.VERSION="5.15.1";wa.supportsDownload=!0;var nm=wa,sm=class rm extends nm{static withConfig(t){return[rm,t]}constructor(t,e){super(t,{resolution:(e==null?void 0:e.resolution)??64,useXmpData:!1}),je('"DualFisheyeAdapter" must be imported from "@photo-sphere-viewer/dual-fisheye-adapter" package')}async loadTexture(t,e){const s=await super.loadTexture(t,e,null,!1);return s.panoData=null,s}createMesh(){const t=new Qs(bn,this.SPHERE_SEGMENTS,this.SPHERE_HORIZONTAL_SEGMENTS).scale(-1,1,1).toNonIndexed(),e=t.getAttribute("uv"),s=t.getAttribute("normal");for(let a=0;a<e.count;a++)for(let c=0;c<3;c++){const h=a*3+c,d=s.getX(h),f=s.getY(h),p=s.getZ(h),g=.947;if(a<e.count/6){const _=d===0&&p===0?1:Math.acos(f)/Math.sqrt(d*d+p*p)*(2/Math.PI);e.setXY(h,d*(g/4)*_+1/4,p*(g/2)*_+1/2)}else{const _=d===0&&p===0?1:Math.acos(-f)/Math.sqrt(d*d+p*p)*(2/Math.PI);e.setXY(h,-d*(g/4)*_+3/4,p*(g/2)*_+1/2)}}t.rotateX(-Math.PI/2),t.rotateY(Math.PI);const r=new $r({depthTest:!1,depthWrite:!1});return new _i(t,r)}};sm.id="dual-fisheye";sm.VERSION="5.15.1";var fs=class om{constructor(t,e){this.parent=t,this.children=[],this.state={visible:!0},this.viewer=t instanceof om?t.viewer:t,this.container=document.createElement(e.tagName??"div"),this.container.className=e.className||"",this.parent.children.push(this),this.parent.container.appendChild(this.container)}destroy(){this.parent.container.removeChild(this.container);const t=this.parent.children.indexOf(this);t!==-1&&this.parent.children.splice(t,1),this.children.slice().forEach(e=>e.destroy()),this.children.length=0}toggle(t=!this.isVisible()){t?this.show():this.hide()}hide(t){this.container.style.display="none",this.state.visible=!1}show(t){this.container.style.display="",this.state.visible=!0}isVisible(){return this.state.visible}},sS=Ma({id:null,tagName:null,className:null,title:null,hoverScale:!1,collapsable:!1,tabbable:!0,icon:null,iconActive:null}),hi=class extends fs{constructor(i,t){super(i,{tagName:t.tagName,className:`psv-button ${t.hoverScale?"psv-button--hover-scale":""} ${t.className||""}`}),this.state={visible:!0,enabled:!0,supported:!0,collapsed:!1,active:!1,width:0},this.config=sS(t),t.id||(this.config.id=this.constructor.id),t.icon&&this.__setIcon(t.icon),this.state.width=this.container.offsetWidth,this.config.title?this.container.title=this.viewer.config.lang[this.config.title]??this.config.title:this.id&&this.id in this.viewer.config.lang&&(this.container.title=this.viewer.config.lang[this.id]),t.tabbable&&(this.container.tabIndex=0),this.container.addEventListener("click",e=>{this.state.enabled&&this.onClick(),e.stopPropagation()}),this.container.addEventListener("keydown",e=>{e.key===Ke.Enter&&this.state.enabled&&(this.onClick(),e.stopPropagation())})}get id(){return this.config.id}get title(){return this.container.title}get content(){return this.container.innerHTML}get width(){return this.state.width}get collapsable(){return this.config.collapsable}show(i=!0){this.isVisible()||(this.state.visible=!0,this.state.collapsed||(this.container.style.display=""),i&&this.viewer.navbar.autoSize())}hide(i=!0){this.isVisible()&&(this.state.visible=!1,this.container.style.display="none",i&&this.viewer.navbar.autoSize())}checkSupported(){jc(this.isSupported(),(i,t)=>{this.state&&(this.state.supported=i,t?i||this.hide():this.toggle(i))})}autoSize(){}isSupported(){return!0}toggleActive(i=!this.state.active){i!==this.state.active&&(this.state.active=i,va(this.container,"psv-button--active",this.state.active),this.config.iconActive&&this.__setIcon(this.state.active?this.config.iconActive:this.config.icon))}disable(){this.container.classList.add("psv-button--disabled"),this.state.enabled=!1}enable(){this.container.classList.remove("psv-button--disabled"),this.state.enabled=!0}collapse(){this.state.collapsed=!0,this.container.style.display="none"}uncollapse(){this.state.collapsed=!1,this.state.visible&&(this.container.style.display="")}__setIcon(i){this.container.innerHTML=i,$c(this.container.querySelector("svg"),"psv-button-svg")}},rS=class extends hi{constructor(i,t){var e,s;super(i,{id:t.id??`psvButton-${Math.random().toString(36).substring(2)}`,className:`psv-custom-button ${t.className||""}`,hoverScale:!1,collapsable:t.collapsable!==!1,tabbable:t.tabbable!==!1,title:t.title}),this.customOnClick=t.onClick,t.content&&(typeof t.content=="string"?this.container.innerHTML=t.content:(this.container.classList.add("psv-custom-button--no-padding"),t.content.style.height="100%",(s=(e=t.content).attachViewer)==null||s.call(e,this.viewer),this.container.appendChild(t.content))),this.state.width=this.container.offsetWidth,t.disabled&&this.disable(),t.visible===!1&&this.hide()}onClick(){var i;(i=this.customOnClick)==null||i.call(this,this.viewer)}},qr=class extends hi{constructor(i){super(i,{className:"psv-description-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Xi.info}),this.mode=0,this.viewer.addEventListener(Ir.type,this),this.viewer.addEventListener(Ur.type,this),this.viewer.addEventListener(Gn.type,this),this.viewer.addEventListener(Xn.type,this),this.viewer.addEventListener(mi.type,this)}destroy(){this.viewer.removeEventListener(Ir.type,this),this.viewer.removeEventListener(Ur.type,this),this.viewer.removeEventListener(Gn.type,this),this.viewer.removeEventListener(Xn.type,this),this.viewer.removeEventListener(mi.type,this),super.destroy()}handleEvent(i){if(i instanceof mi){i.containsOptions("description")&&this.autoSize(!0);return}if(!this.mode)return;let t=!1;i instanceof Ir?t=this.mode===1:i instanceof Ur?t=this.mode===1&&i.notificationId!==ei.DESCRIPTION:i instanceof Gn?t=this.mode===2:i instanceof Xn&&(t=this.mode===2&&i.panelId!==ei.DESCRIPTION),t&&(this.toggleActive(!1),this.mode=0)}onClick(){this.mode?this.__close():this.__open()}hide(i){super.hide(i),this.mode&&this.__close()}autoSize(i=!1){if(i){const t=this.viewer.navbar.getButton("caption",!1),e=t&&!t.isVisible(),s=!!this.viewer.config.description;e||s?this.show(!1):this.hide(!1)}}__close(){switch(this.mode){case 1:this.viewer.notification.hide(ei.DESCRIPTION);break;case 2:this.viewer.panel.hide(ei.DESCRIPTION);break}}__open(){this.toggleActive(!0),this.viewer.config.description?(this.mode=2,this.viewer.panel.show({id:ei.DESCRIPTION,content:`${this.viewer.config.caption?`<p>${this.viewer.config.caption}</p>`:""}${this.viewer.config.description}`})):(this.mode=1,this.viewer.notification.show({id:ei.DESCRIPTION,content:this.viewer.config.caption}))}};qr.id="description";var am=class extends hi{constructor(i){super(i,{tagName:"a",className:"psv-download-button",hoverScale:!0,collapsable:!0,tabbable:!0,icon:Xi.download}),this.viewer.addEventListener(mi.type,this),this.viewer.addEventListener($s.type,this)}destroy(){this.viewer.removeEventListener(mi.type,this),this.viewer.removeEventListener($s.type,this),super.destroy()}handleEvent(i){i instanceof mi?(i.containsOptions("downloadUrl")&&this.checkSupported(),i.containsOptions("downloadUrl","downloadName")&&this.__update()):i instanceof $s&&this.__update()}onClick(){}checkSupported(){this.viewer.adapter.constructor.supportsDownload||this.viewer.config.downloadUrl?this.show():this.hide()}__update(){const i=this.container;i.href=this.viewer.config.downloadUrl||this.viewer.config.panorama,i.target="_blank",i.href.startsWith("data:")&&!this.viewer.config.downloadName?i.download="panorama."+i.href.substring(0,i.href.indexOf(";")).split("/").pop():i.download=this.viewer.config.downloadName||i.href.split("/").pop()}};am.id="download";var lm=class extends hi{constructor(i){super(i,{className:"psv-fullscreen-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Xi.fullscreenIn,iconActive:Xi.fullscreenOut}),this.viewer.addEventListener(Rr.type,this)}destroy(){this.viewer.removeEventListener(Rr.type,this),super.destroy()}handleEvent(i){i instanceof Rr&&this.toggleActive(i.fullscreenEnabled)}onClick(){this.viewer.toggleFullscreen()}};lm.id="fullscreen";var oS="psvButton",aS=(i,t)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
  <h1 class="psv-panel-menu-title">${Xi.menu} ${t}</h1>
  <ul class="psv-panel-menu-list">
    ${i.map(e=>`
    <li data-psv-button="${e.id}" class="psv-panel-menu-item" tabindex="0">
      <span class="psv-panel-menu-item-icon">${e.content}</span>
      <span class="psv-panel-menu-item-label">${e.title}</span>
    </li>
    `).join("")}
  </ul>
</div>
`,jo=class extends hi{constructor(i){super(i,{className:"psv-menu-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:Xi.menu}),this.viewer.addEventListener(Xn.type,this),this.viewer.addEventListener(Gn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Xn.type,this),this.viewer.removeEventListener(Gn.type,this),super.destroy()}handleEvent(i){i instanceof Xn?this.toggleActive(i.panelId===ei.MENU):i instanceof Gn&&this.toggleActive(!1)}onClick(){this.state.active?this.__hideMenu():this.__showMenu()}hide(i){super.hide(i),this.__hideMenu()}show(i){super.show(i),this.state.active&&this.__showMenu()}__showMenu(){this.viewer.panel.show({id:ei.MENU,content:aS(this.viewer.navbar.collapsed,this.viewer.config.lang.menu),noMargin:!0,clickHandler:i=>{const t=i?uf(i,".psv-panel-menu-item"):void 0,e=t?t.dataset[oS]:void 0;e&&(this.viewer.navbar.getButton(e).onClick(),this.__hideMenu())}})}__hideMenu(){this.viewer.panel.hide(ei.MENU)}};jo.id="menu";function lS(i){let t;switch(i){case 0:t=90;break;case 1:t=-90;break;case 3:t=180;break;default:t=0;break}return Xi.arrow.replace("rotate(0",`rotate(${t}`)}var Qr=class extends hi{constructor(i,t){super(i,{className:"psv-move-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:lS(t)}),this.direction=t,this.handler=new Ea,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===Ke.Enter&&this.__onMouseDown();break;case"keyup":i.key===Ke.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return ya(ci.isTouchEnabled)}__onMouseDown(){if(!this.state.enabled)return;const i={};switch(this.direction){case 0:i.pitch=!1;break;case 1:i.pitch=!0;break;case 3:i.yaw=!1;break;default:i.yaw=!0;break}this.viewer.stopAll(),this.viewer.dynamics.position.roll(i),this.handler.down()}__onMouseUp(){this.state.enabled&&this.handler.up(()=>{this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer()})}};Qr.groupId="move";var cm=class extends Qr{constructor(i){super(i,1)}};cm.id="moveDown";var hm=class extends Qr{constructor(i){super(i,2)}};hm.id="moveLeft";var um=class extends Qr{constructor(i){super(i,3)}};um.id="moveRight";var dm=class extends Qr{constructor(i){super(i,0)}};dm.id="moveUp";var sh=class extends hi{constructor(i,t,e){super(i,{className:"psv-zoom-button",hoverScale:!0,collapsable:!1,tabbable:!0,icon:t}),this.direction=e,this.handler=new Ea,this.container.addEventListener("mousedown",this),this.container.addEventListener("keydown",this),this.container.addEventListener("keyup",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this)}destroy(){this.__onMouseUp(),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown();break;case"mouseup":this.__onMouseUp();break;case"touchend":this.__onMouseUp();break;case"keydown":i.key===Ke.Enter&&this.__onMouseDown();break;case"keyup":i.key===Ke.Enter&&this.__onMouseUp();break}}onClick(){}isSupported(){return ya(ci.isTouchEnabled)}__onMouseDown(){this.state.enabled&&(this.viewer.dynamics.zoom.roll(this.direction===1),this.handler.down())}__onMouseUp(){this.state.enabled&&this.handler.up(()=>this.viewer.dynamics.zoom.stop())}};sh.groupId="zoom";var fm=class extends sh{constructor(i){super(i,Xi.zoomIn,0)}};fm.id="zoomIn";var pm=class extends sh{constructor(i){super(i,Xi.zoomOut,1)}};pm.id="zoomOut";var rh=class extends hi{constructor(i){super(i,{className:"psv-zoom-range",hoverScale:!1,collapsable:!1,tabbable:!1}),this.zoomRange=document.createElement("div"),this.zoomRange.className="psv-zoom-range-line",this.container.appendChild(this.zoomRange),this.zoomValue=document.createElement("div"),this.zoomValue.className="psv-zoom-range-handle",this.zoomRange.appendChild(this.zoomValue),this.slider=new Rf(this.container,"HORIZONTAL",t=>this.__onSliderUpdate(t)),this.mediaMinWidth=parseInt(on(this.container,"max-width"),10),this.viewer.addEventListener(Tn.type,this),this.viewer.state.ready?this.__moveZoomValue(this.viewer.getZoomLevel()):this.viewer.addEventListener(Or.type,this)}destroy(){this.slider.destroy(),this.viewer.removeEventListener(Tn.type,this),this.viewer.removeEventListener(Or.type,this),super.destroy()}handleEvent(i){i instanceof Tn?this.__moveZoomValue(i.zoomLevel):i instanceof Or&&this.__moveZoomValue(this.viewer.getZoomLevel())}onClick(){}isSupported(){return ya(ci.isTouchEnabled)}autoSize(){this.state.supported&&(this.viewer.state.size.width<=this.mediaMinWidth&&this.state.visible?this.hide(!1):this.viewer.state.size.width>this.mediaMinWidth&&!this.state.visible&&this.show(!1))}__moveZoomValue(i){this.zoomValue.style.left=i/100*this.zoomRange.offsetWidth-this.zoomValue.offsetWidth/2+"px"}__onSliderUpdate(i){i.mousedown&&this.viewer.zoom(i.value*100)}};rh.id="zoomRange";rh.groupId="zoom";var mm=class extends Df{constructor(i){super(),this.viewer=i}init(){}destroy(){}},_m=class extends mm{constructor(i,t){super(i),this.config=this.constructor.configParser(t)}setOption(i,t){this.setOptions({[i]:t})}setOptions(i){const t={...this.config,...i},e=this.constructor,s=e.configParser,r=e.readonlyOptions,a=e.id;for(let[c,h]of Object.entries(i)){if(!(c in s.defaults)){je(`${a}: Unknown option "${c}"`);continue}if(r.includes(c)){je(`${a}: Option "${c}" cannot be updated`);continue}c in s.parsers&&(h=s.parsers[c](h,{rawConfig:t,defValue:s.defaults[c]})),this.config[c]=h}}};_m.readonlyOptions=[];function bc(i){if(i){for(const[,t]of[["_",i],...Object.entries(i)])if(t.prototype instanceof mm)return eh(t.id,t.VERSION,"5.15.1"),t}return null}var Pn={panorama:null,container:null,adapter:[nm,null],plugins:[],caption:null,description:null,downloadUrl:null,downloadName:null,loadingImg:null,loadingTxt:"",size:null,fisheye:0,minFov:30,maxFov:90,defaultZoomLvl:50,defaultYaw:0,defaultPitch:0,sphereCorrection:null,moveSpeed:1,zoomSpeed:1,moveInertia:.8,mousewheel:!0,mousemove:!0,mousewheelCtrlKey:!1,touchmoveTwoFingers:!1,panoData:null,requestHeaders:null,canvasBackground:"#000",defaultTransition:{speed:1500,rotation:!0,effect:"fade"},rendererParameters:{alpha:!0,antialias:!0},withCredentials:()=>!1,navbar:["zoom","move","download","description","caption","fullscreen"],lang:{zoom:"Zoom",zoomOut:"Zoom out",zoomIn:"Zoom in",moveUp:"Move up",moveDown:"Move down",moveLeft:"Move left",moveRight:"Move right",description:"Description",download:"Download",fullscreen:"Fullscreen",loading:"Loading...",menu:"Menu",close:"Close",twoFingers:"Use two fingers to navigate",ctrlZoom:"Use ctrl + scroll to zoom the image",loadError:"The panorama cannot be loaded",webglError:"Your browser does not seem to support WebGL"},keyboard:"fullscreen",keyboardActions:{[Ke.ArrowUp]:"ROTATE_UP",[Ke.ArrowDown]:"ROTATE_DOWN",[Ke.ArrowRight]:"ROTATE_RIGHT",[Ke.ArrowLeft]:"ROTATE_LEFT",[Ke.PageUp]:"ZOOM_IN",[Ke.PageDown]:"ZOOM_OUT",[Ke.Plus]:"ZOOM_IN",[Ke.Minus]:"ZOOM_OUT"}},cd={panorama:"Use setPanorama method to change the panorama",panoData:"Use setPanorama method to change the panorama",container:"Cannot change viewer container",adapter:"Cannot change adapter",plugins:"Cannot change plugins"},Tc={container:i=>{if(!i)throw new Zt("No value given for container.");return i},adapter:(i,{defValue:t})=>{if(i?Array.isArray(i)?i=[ld(i[0]),i[1]]:i=[ld(i),null]:i=t,!i[0])throw new Zt("An undefined value was given for adapter.");if(!i[0].id)throw new Zt("Adapter has no id.");return i},defaultYaw:i=>Bn(i),defaultPitch:i=>Bn(i,!0),defaultZoomLvl:i=>pe.clamp(i,0,100),minFov:(i,{rawConfig:t})=>(t.maxFov<i&&(je("maxFov cannot be lower than minFov"),i=t.maxFov),pe.clamp(i,1,179)),maxFov:(i,{rawConfig:t})=>(i<t.minFov&&(i=t.minFov),pe.clamp(i,1,179)),moveInertia:(i,{defValue:t})=>i===!0?t:i===!1?0:i,lang:i=>({...Pn.lang,...i}),fisheye:i=>i===!0?1:i===!1?0:pe.clamp(i,0,2),requestHeaders:i=>i&&typeof i=="object"?()=>i:typeof i=="function"?i:null,withCredentials:i=>typeof i=="boolean"?()=>i:typeof i=="function"?i:()=>!1,defaultTransition:(i,{defValue:t})=>i===null||i.speed===0?null:{...t,...i},rendererParameters:(i,{defValue:t})=>({...i,...t}),plugins:i=>i.map((t,e)=>{if(Array.isArray(t)?t=[bc(t[0]),t[1]]:t=[bc(t),null],!t[0])throw new Zt(`An undefined value was given for plugin ${e}.`);if(!t[0].id)throw new Zt(`Plugin ${e} has no id.`);return t}),navbar:i=>i===!1?null:i===!0?xa(Pn.navbar):typeof i=="string"?i.split(/[ ,]/):i},cS=Ma(Pn,Tc),Xs=class extends hi{constructor(i){super(i,{className:"psv-caption",hoverScale:!1,collapsable:!1,tabbable:!0}),this.contentWidth=0,this.state.width=0,this.contentElt=document.createElement("div"),this.contentElt.className="psv-caption-content",this.container.appendChild(this.contentElt),this.setCaption(this.viewer.config.caption)}hide(){this.contentElt.style.display="none",this.state.visible=!1}show(){this.contentElt.style.display="",this.state.visible=!0}onClick(){}setCaption(i){this.show(),this.contentElt.innerHTML=i??"",this.contentElt.innerHTML?this.contentWidth=this.contentElt.offsetWidth:this.contentWidth=0,this.autoSize()}autoSize(){this.toggle(this.container.offsetWidth>=this.contentWidth),this.__refreshButton()}__refreshButton(){var i;(i=this.viewer.navbar.getButton(qr.id,!1))==null||i.autoSize(!0)}};Xs.id="caption";var Ac={},ca={};function oh(i,t){if(!i.id)throw new Zt("Button id is required");if(Ac[i.id]=i,i.groupId&&(ca[i.groupId]=ca[i.groupId]||[]).push(i),t){const e=Pn.navbar;switch(t){case"start":e.unshift(i.id);break;case"end":e.push(i.id);break;default:{const[s,r]=t.split(":"),a=e.indexOf(s);if(!s||!r||a===-1)throw new Zt(`Invalid defaultPosition ${t}`);e.splice(a+(r==="right"?1:0),0,i.id)}}}}[pm,rh,fm,qr,Xs,am,lm,hm,um,dm,cm].forEach(i=>oh(i));var hS=class extends fs{constructor(i){super(i,{className:`psv-navbar ${jr}`}),this.collapsed=[],this.state.visible=!1}show(){this.viewer.container.classList.add("psv--has-navbar"),this.container.classList.add("psv-navbar--open"),this.state.visible=!0}hide(){this.viewer.container.classList.remove("psv--has-navbar"),this.container.classList.remove("psv-navbar--open"),this.state.visible=!1}setButtons(i){this.children.slice().forEach(t=>t.destroy()),this.children.length=0,i.indexOf(Xs.id)!==-1&&i.indexOf(qr.id)===-1&&i.splice(i.indexOf(Xs.id),0,qr.id),i.forEach(t=>{typeof t=="object"?new rS(this,t):Ac[t]?new Ac[t](this):ca[t]?ca[t].forEach(e=>{new e(this)}):je(`Unknown button ${t}`)}),new jo(this),this.children.forEach(t=>{t instanceof hi&&t.checkSupported()}),this.autoSize()}setCaption(i){this.children.some(t=>t instanceof Xs?(t.setCaption(i),!0):!1)}getButton(i,t=!0){const e=this.children.find(s=>s instanceof hi&&s.id===i);return!e&&t&&je(`button "${i}" not found in the navbar`),e}focusButton(i){var t,e;this.isVisible()&&((e=((t=this.getButton(i,!1))==null?void 0:t.container)||this.container.firstElementChild)==null||e.focus())}autoSize(){var s;this.children.forEach(r=>{r instanceof hi&&r.autoSize()});const i=this.container.offsetWidth;let t=0;const e=[];this.children.forEach(r=>{r.isVisible()&&r instanceof hi&&(t+=r.width,r.collapsable&&e.push(r))}),t!==0&&(i<t&&e.length>0?(e.forEach(r=>r.collapse()),this.collapsed=e,this.getButton(jo.id).show(!1)):i>=t&&this.collapsed.length>0&&(this.collapsed.forEach(r=>r.uncollapse()),this.collapsed=[],this.getButton(jo.id).hide(!1)),(s=this.getButton(Xs.id,!1))==null||s.autoSize())}};Vn.enabled=!1;var Gs={enabled:!0,maxItems:10,ttl:600,items:{},purgeInterval:null,init(){Vn.enabled&&(je("ThreeJS cache should be disabled"),Vn.enabled=!1),!this.purgeInterval&&this.enabled&&(this.purgeInterval=setInterval(()=>this.purge(),60*1e3))},add(i,t,e){this.enabled&&t&&(this.items[t]=this.items[t]??{files:{},lastAccess:null},this.items[t].files[i]=e,this.items[t].lastAccess=Date.now())},get(i,t){if(this.enabled&&t&&this.items[t])return this.items[t].lastAccess=Date.now(),this.items[t].files[i]},remove(i,t){this.enabled&&t&&this.items[t]&&(delete this.items[t].files[i],Object.keys(this.items[t].files).length===0&&delete this.items[t])},purge(){Object.entries(this.items).sort(([,i],[,t])=>t.lastAccess-i.lastAccess).forEach(([i,{lastAccess:t}],e)=>{e>0&&(Date.now()-t>=this.ttl*1e3||e>=this.maxItems)&&delete this.items[i]})}},uS=class extends fs{constructor(i){super(i,{className:"psv-loader-container"}),this.loader=document.createElement("div"),this.loader.className="psv-loader",this.container.appendChild(this.loader),this.size=this.loader.offsetWidth,this.canvas=document.createElementNS("http://www.w3.org/2000/svg","svg"),this.canvas.setAttribute("class","psv-loader-canvas"),this.canvas.setAttribute("viewBox",`0 0 ${this.size} ${this.size}`),this.loader.appendChild(this.canvas),this.textColor=on(this.loader,"color"),this.color=on(this.canvas,"color"),this.border=parseInt(on(this.loader,"--psv-loader-border"),10),this.thickness=parseInt(on(this.loader,"--psv-loader-tickness"),10);const t=this.size/2;this.canvas.innerHTML=`
            <circle cx="${t}" cy="${t}" r="${t}" fill="${this.color}"/>
            <path d="" fill="none" stroke="${this.textColor}" stroke-width="${this.thickness}" stroke-linecap="round"/>
        `,this.viewer.addEventListener(mi.type,this),this.__updateContent(),this.hide()}destroy(){this.viewer.removeEventListener(mi.type,this),super.destroy()}handleEvent(i){i instanceof mi&&i.containsOptions("loadingImg","loadingTxt","lang")&&this.__updateContent()}setProgress(i){this.container.classList.remove("psv-loader--undefined");const t=pe.clamp(i,0,99.999)/100*Math.PI*2,e=this.size/2,s=e,r=this.thickness/2+this.border,a=(this.size-this.thickness)/2-this.border,c=Math.sin(t)*a+e,h=-Math.cos(t)*a+e,d=i>50?"1":"0";this.canvas.querySelector("path").setAttributeNS(null,"d",`M ${s} ${r} A ${a} ${a} 0 ${d} 1 ${c} ${h}`)}showUndefined(){this.show(),this.setProgress(25),this.container.classList.add("psv-loader--undefined")}__updateContent(){const i=this.loader.querySelector(".psv-loader-image, .psv-loader-text");i&&this.loader.removeChild(i);let t;if(this.viewer.config.loadingImg?(t=document.createElement("img"),t.className="psv-loader-image",t.src=this.viewer.config.loadingImg):this.viewer.config.loadingTxt!==null&&(t=document.createElement("div"),t.className="psv-loader-text",t.innerHTML=this.viewer.config.loadingTxt||this.viewer.config.lang.loading),t){const e=Math.round(Math.sqrt(2*Math.pow(this.size/2-this.thickness/2-this.border,2)));t.style.maxWidth=e+"px",t.style.maxHeight=e+"px",this.loader.appendChild(t)}}},dS=class extends fs{constructor(i){super(i,{className:"psv-notification"}),this.state={visible:!1,contentId:null,timeout:null},this.content=document.createElement("div"),this.content.className="psv-notification-content",this.container.appendChild(this.content),this.content.addEventListener("click",()=>this.hide())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new Zt("Notification cannot be toggled")}show(i){this.state.timeout&&(clearTimeout(this.state.timeout),this.state.timeout=null),typeof i=="string"&&(i={content:i}),this.state.contentId=i.id||null,this.content.innerHTML=i.content,this.container.classList.add("psv-notification--visible"),this.state.visible=!0,this.viewer.dispatchEvent(new Ur(this.state.contentId)),i.timeout&&(this.state.timeout=setTimeout(()=>this.hide(this.state.contentId),i.timeout))}hide(i){if(this.isVisible(i)){const t=this.state.contentId;this.container.classList.remove("psv-notification--visible"),this.state.visible=!1,this.state.contentId=null,this.viewer.dispatchEvent(new Ir(t))}}},fS=class extends fs{constructor(i){super(i,{className:`psv-overlay ${jr}`}),this.state={visible:!1,contentId:null,dismissible:!0},this.image=document.createElement("div"),this.image.className="psv-overlay-image",this.container.appendChild(this.image),this.title=document.createElement("div"),this.title.className="psv-overlay-title",this.container.appendChild(this.title),this.text=document.createElement("div"),this.text.className="psv-overlay-text",this.container.appendChild(this.text),this.container.addEventListener("click",this),this.viewer.addEventListener(Wn.type,this),super.hide()}destroy(){this.viewer.removeEventListener(Wn.type,this),super.destroy()}handleEvent(i){i.type==="click"?this.isVisible()&&this.state.dismissible&&(this.hide(),i.stopPropagation()):i instanceof Wn&&this.isVisible()&&this.state.dismissible&&i.matches(Ke.Escape)&&(this.hide(),i.preventDefault())}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new Zt("Overlay cannot be toggled")}show(i){typeof i=="string"&&(i={title:i}),this.state.contentId=i.id||null,this.state.dismissible=i.dismissible!==!1,this.image.innerHTML=i.image||"",this.title.innerHTML=i.title||"",this.text.innerHTML=i.text||"",super.show(),this.viewer.dispatchEvent(new Up(this.state.contentId))}hide(i){if(this.isVisible(i)){const t=this.state.contentId;super.hide(),this.state.contentId=null,this.viewer.dispatchEvent(new ep(t))}}},pS=200,bl="psv-panel-content--no-interaction",mS=class extends fs{constructor(i){super(i,{className:`psv-panel ${jr}`}),this.state={visible:!1,contentId:null,mouseX:0,mouseY:0,mousedown:!1,clickHandler:null,keyHandler:null,width:{}};const t=document.createElement("div");t.className="psv-panel-resizer",this.container.appendChild(t);const e=document.createElement("div");e.className="psv-panel-close-button",e.innerHTML=Xi.close,e.title=i.config.lang.close,this.container.appendChild(e),this.content=document.createElement("div"),this.content.className="psv-panel-content",this.container.appendChild(this.content),e.addEventListener("click",()=>this.hide()),t.addEventListener("mousedown",this),t.addEventListener("touchstart",this),this.viewer.container.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchend",this),this.viewer.container.addEventListener("mousemove",this),this.viewer.container.addEventListener("touchmove",this),this.viewer.addEventListener(Wn.type,this)}destroy(){this.viewer.removeEventListener(Wn.type,this),this.viewer.container.removeEventListener("mousemove",this),this.viewer.container.removeEventListener("touchmove",this),this.viewer.container.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchend",this),super.destroy()}handleEvent(i){switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"mousemove":this.__onMouseMove(i);break;case"touchmove":this.__onTouchMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchend":this.__onTouchEnd(i);break;case Wn.type:this.__onKeyPress(i);break}}isVisible(i){return this.state.visible&&(!i||!this.state.contentId||this.state.contentId===i)}toggle(){throw new Zt("Panel cannot be toggled")}show(i){typeof i=="string"&&(i={content:i});const t=this.isVisible(i.id);this.state.contentId=i.id||null,this.state.visible=!0,this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),i.id&&this.state.width[i.id]?this.container.style.width=this.state.width[i.id]:i.width?this.container.style.width=i.width:this.container.style.width=null,this.content.innerHTML=i.content,this.content.scrollTop=0,this.container.classList.add("psv-panel--open"),va(this.content,"psv-panel-content--no-margin",i.noMargin===!0),i.clickHandler&&(this.state.clickHandler=e=>{i.clickHandler(sa(e))},this.state.keyHandler=e=>{e.key===Ke.Enter&&i.clickHandler(sa(e))},this.content.addEventListener("click",this.state.clickHandler),this.content.addEventListener("keydown",this.state.keyHandler),t||setTimeout(()=>{var e;(e=this.content.querySelector("a,button,[tabindex]"))==null||e.focus()},300)),this.viewer.dispatchEvent(new Xn(this.state.contentId))}hide(i){if(this.isVisible(i)){const t=this.state.contentId;this.state.visible=!1,this.state.contentId=null,this.content.innerHTML=null,this.container.classList.remove("psv-panel--open"),this.state.clickHandler&&(this.content.removeEventListener("click",this.state.clickHandler),this.content.removeEventListener("keydown",this.state.keyHandler),this.state.clickHandler=null,this.state.keyHandler=null),this.viewer.dispatchEvent(new Gn(t))}}__onMouseDown(i){i.stopPropagation(),this.__startResize(i.clientX,i.clientY)}__onTouchStart(i){if(i.stopPropagation(),i.touches.length===1){const t=i.touches[0];this.__startResize(t.clientX,t.clientY)}}__onMouseUp(i){this.state.mousedown&&(i.stopPropagation(),this.state.mousedown=!1,this.content.classList.remove(bl))}__onTouchEnd(i){this.state.mousedown&&(i.stopPropagation(),i.touches.length===0&&(this.state.mousedown=!1,this.content.classList.remove(bl)))}__onMouseMove(i){this.state.mousedown&&(i.stopPropagation(),this.__resize(i.clientX,i.clientY))}__onTouchMove(i){if(this.state.mousedown){const t=i.touches[0];this.__resize(t.clientX,t.clientY)}}__onKeyPress(i){this.isVisible()&&i.matches(Ke.Escape)&&(this.hide(),i.preventDefault())}__startResize(i,t){this.state.mouseX=i,this.state.mouseY=t,this.state.mousedown=!0,this.content.classList.add(bl)}__resize(i,t){const e=i,s=t,r=Math.max(pS,this.container.offsetWidth-(e-this.state.mouseX))+"px";this.state.contentId&&(this.state.width[this.state.contentId]=r),this.container.style.width=r,this.state.mouseX=e,this.state.mouseY=s}},_S=class extends fs{constructor(i,t){super(i,{className:"psv-tooltip"}),this.state={visible:!0,arrow:0,border:0,state:0,width:0,height:0,pos:"",config:null,data:null,hideTimeout:null},this.content=document.createElement("div"),this.content.className="psv-tooltip-content",this.container.appendChild(this.content),this.arrow=document.createElement("div"),this.arrow.className="psv-tooltip-arrow",this.container.appendChild(this.arrow),this.container.addEventListener("transitionend",this),this.container.addEventListener("touchdown",e=>e.stopPropagation()),this.container.addEventListener("mousedown",e=>e.stopPropagation()),this.container.style.top="-1000px",this.container.style.left="-1000px",this.show(t)}handleEvent(i){i.type==="transitionend"&&this.__onTransitionEnd(i)}destroy(){clearTimeout(this.state.hideTimeout),delete this.state.data,super.destroy()}toggle(){throw new Zt("Tooltip cannot be toggled")}show(i){if(this.state.state!==0)throw new Zt("Initialized tooltip cannot be re-initialized");i.className&&$c(this.container,i.className),i.style&&Object.assign(this.container.style,i.style),this.state.state=3,this.update(i.content,i),this.state.data=i.data,this.state.state=1,this.viewer.dispatchEvent(new Hp(this,this.state.data)),this.__waitImages()}update(i,t){this.content.innerHTML=i;const e=this.container.getBoundingClientRect();this.state.width=e.right-e.left,this.state.height=e.bottom-e.top,this.state.arrow=parseInt(on(this.arrow,"border-top-width"),10),this.state.border=parseInt(on(this.container,"border-top-left-radius"),10),this.move(t??this.state.config),this.__waitImages()}move(i){var h;if(this.state.state!==1&&this.state.state!==3)throw new Zt("Uninitialized tooltip cannot be moved");i.box=i.box??((h=this.state.config)==null?void 0:h.box)??{width:0,height:0},this.state.config=i;const t=this.container,e=this.arrow,s={posClass:Sf(i.position,{allowCenter:!1,cssOrder:!1})||["top","center"],width:this.state.width,height:this.state.height,top:0,left:0,arrowTop:0,arrowLeft:0};this.__computeTooltipPosition(s,i);let r=null,a=null;if(s.top<0?r="bottom":s.top+s.height>this.viewer.state.size.height&&(r="top"),s.left<0?a="right":s.left+s.width>this.viewer.state.size.width&&(a="left"),a||r){const d=th(s.posClass);r&&(s.posClass[d?0:1]=r),a&&(s.posClass[d?1:0]=a),this.__computeTooltipPosition(s,i)}t.style.top=s.top+"px",t.style.left=s.left+"px",e.style.top=s.arrowTop+"px",e.style.left=s.arrowLeft+"px";const c=s.posClass.join("-");c!==this.state.pos&&(t.classList.remove(`psv-tooltip--${this.state.pos}`),this.state.pos=c,t.classList.add(`psv-tooltip--${this.state.pos}`))}hide(){this.container.classList.remove("psv-tooltip--visible"),this.state.state=2,this.viewer.dispatchEvent(new op(this.state.data));const i=parseFloat(on(this.container,"transition-duration"));this.state.hideTimeout=setTimeout(()=>{this.destroy()},i*2)}__onTransitionEnd(i){if(i.propertyName==="transform")switch(this.state.state){case 1:this.container.classList.add("psv-tooltip--visible"),this.state.state=3;break;case 2:this.state.state=0,this.destroy();break}}__computeTooltipPosition(i,t){const e=this.state.arrow,s=t.top,r=i.height,a=t.left,c=i.width,h=e+this.state.border,d=t.box.width/2+e*2,f=t.box.height/2+e*2;switch(i.posClass.join("-")){case"top-left":i.top=s-f-r,i.left=a+h-c,i.arrowTop=r,i.arrowLeft=c-h-e;break;case"top-center":i.top=s-f-r,i.left=a-c/2,i.arrowTop=r,i.arrowLeft=c/2-e;break;case"top-right":i.top=s-f-r,i.left=a-h,i.arrowTop=r,i.arrowLeft=e;break;case"bottom-left":i.top=s+f,i.left=a+h-c,i.arrowTop=-e*2,i.arrowLeft=c-h-e;break;case"bottom-center":i.top=s+f,i.left=a-c/2,i.arrowTop=-e*2,i.arrowLeft=c/2-e;break;case"bottom-right":i.top=s+f,i.left=a-h,i.arrowTop=-e*2,i.arrowLeft=e;break;case"left-top":i.top=s+h-r,i.left=a-d-c,i.arrowTop=r-h-e,i.arrowLeft=c;break;case"center-left":i.top=s-r/2,i.left=a-d-c,i.arrowTop=r/2-e,i.arrowLeft=c;break;case"left-bottom":i.top=s-h,i.left=a-d-c,i.arrowTop=e,i.arrowLeft=c;break;case"right-top":i.top=s+h-r,i.left=a+d,i.arrowTop=r-h-e,i.arrowLeft=-e*2;break;case"center-right":i.top=s-r/2,i.left=a+d,i.arrowTop=r/2-e,i.arrowLeft=-e*2;break;case"right-bottom":i.top=s-h,i.left=a+d,i.arrowTop=e,i.arrowLeft=-e*2;break}}__waitImages(){const i=this.content.querySelectorAll("img");if(i.length>0){const t=[];i.forEach(e=>{e.complete||t.push(new Promise(s=>{e.onload=s,e.onerror=s}))}),t.length&&Promise.all(t).then(()=>{if(this.state.state===1||this.state.state===3){const e=this.container.getBoundingClientRect();this.state.width=e.right-e.left,this.state.height=e.bottom-e.top,this.move(this.state.config)}})}}},gS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="15 15 70 70"><path fill="currentColor" d="M50,16.2c-18.6,0-33.8,15.1-33.8,33.8S31.4,83.7,50,83.7S83.8,68.6,83.8,50S68.6,16.2,50,16.2z M50,80.2c-16.7,0-30.2-13.6-30.2-30.2S33.3,19.7,50,19.7S80.3,33.3,80.3,50S66.7,80.2,50,80.2z"/><rect fill="currentColor" x="48" y="31.7" width="4" height="28"/><rect fill="currentColor" x="48" y="63.2" width="4" height="5"/><!--Created by Shastry from the Noun Project--></svg>
`,to=class{constructor(i){this.viewer=i,this.config=i.config,this.state=i.state}destroy(){}},Hi=new G,Vo=new qn(0,0,0,"ZXY"),vS=class extends to{constructor(i){super(i)}fovToZoomLevel(i){const t=Math.round((i-this.config.minFov)/(this.config.maxFov-this.config.minFov)*100);return pe.clamp(t-2*(t-50),0,100)}zoomLevelToFov(i){return this.config.maxFov+i/100*(this.config.minFov-this.config.maxFov)}vFovToHFov(i){return pe.radToDeg(2*Math.atan(Math.tan(pe.degToRad(i)/2)*this.state.aspect))}hFovToVFov(i){return pe.radToDeg(2*Math.atan(Math.tan(pe.degToRad(i)/2)/this.state.aspect))}getAnimationProperties(i,t,e){const s=!Je(t),r=!Je(e),a={};let c=null;if(s){const h=this.viewer.getPosition(),d=lf(h.yaw,t.yaw);a.yaw={start:h.yaw,end:h.yaw+d},a.pitch={start:h.pitch,end:t.pitch},c=Mc(i,cf(h,t))}if(r){const h=this.viewer.getZoomLevel(),d=Math.abs(e-h);a.zoom={start:h,end:e},c===null&&(c=Mc(i,Math.PI/4*d/100))}return c===null?typeof i=="number"?c=i:c=vc:c=Math.max(vc,c),{duration:c,properties:a}}getTransitionOptions(i){let t;const e=this.config.defaultTransition??Pn.defaultTransition;return i.transition===!1||i.transition===null?t=null:i.transition===!0?t={...e}:typeof i.transition=="object"?t={...e,...i.transition}:t=this.config.defaultTransition,t}textureCoordsToSphericalCoords(i){var e;if(!((e=this.state.textureData)!=null&&e.panoData))throw new Zt("Current adapter does not support texture coordinates or no texture has been loaded");const t=this.viewer.adapter.textureCoordsToSphericalCoords(i,this.state.textureData.panoData);return!Vo.equals(this.viewer.renderer.panoramaPose)||!Vo.equals(this.viewer.renderer.sphereCorrection)?(this.sphericalCoordsToVector3(t,Hi),Hi.applyEuler(this.viewer.renderer.panoramaPose),Hi.applyEuler(this.viewer.renderer.sphereCorrection),this.vector3ToSphericalCoords(Hi)):t}sphericalCoordsToTextureCoords(i){var t;if(!((t=this.state.textureData)!=null&&t.panoData))throw new Zt("Current adapter does not support texture coordinates or no texture has been loaded");return(!Vo.equals(this.viewer.renderer.panoramaPose)||!Vo.equals(this.viewer.renderer.sphereCorrection))&&(this.sphericalCoordsToVector3(i,Hi),Sc(Hi,this.viewer.renderer.sphereCorrection),Sc(Hi,this.viewer.renderer.panoramaPose),i=this.vector3ToSphericalCoords(Hi)),this.viewer.adapter.sphericalCoordsToTextureCoords(i,this.state.textureData.panoData)}sphericalCoordsToVector3(i,t,e=bn){return t||(t=new G),t.x=e*-Math.cos(i.pitch)*Math.sin(i.yaw),t.y=e*Math.sin(i.pitch),t.z=e*Math.cos(i.pitch)*Math.cos(i.yaw),t}vector3ToSphericalCoords(i){const t=Math.acos(i.y/Math.sqrt(i.x*i.x+i.y*i.y+i.z*i.z)),e=Math.atan2(i.x,i.z);return{yaw:e<0?-e:Math.PI*2-e,pitch:Math.PI/2-t}}viewerCoordsToVector3(i){const t=this.viewer.renderer.getIntersections(i).filter(e=>e.object.userData[Yn]);return t.length?t[0].point:null}viewerCoordsToSphericalCoords(i){const t=this.viewerCoordsToVector3(i);return t?this.vector3ToSphericalCoords(t):null}vector3ToViewerCoords(i){const t=i.clone();return t.project(this.viewer.renderer.camera),{x:Math.round((t.x+1)/2*this.state.size.width),y:Math.round((1-t.y)/2*this.state.size.height)}}sphericalCoordsToViewerCoords(i){return this.sphericalCoordsToVector3(i,Hi),this.vector3ToViewerCoords(Hi)}isPointVisible(i){let t,e;if(i instanceof G)t=i,e=this.vector3ToViewerCoords(i);else if(Qc(i))t=this.sphericalCoordsToVector3(i,Hi),e=this.vector3ToViewerCoords(t);else return!1;return t.dot(this.viewer.state.direction)>0&&e.x>=0&&e.x<=this.viewer.state.size.width&&e.y>=0&&e.y<=this.viewer.state.size.height}cleanPosition(i){if("yaw"in i||"pitch"in i){if(!("yaw"in i)||!("pitch"in i))throw new Zt("Position is missing 'yaw' or 'pitch'");return{yaw:Bn(i.yaw),pitch:Bn(i.pitch,!0)}}else return this.textureCoordsToSphericalCoords(i)}cleanSphereCorrection(i){return{pan:Bn((i==null?void 0:i.pan)||0),tilt:Bn((i==null?void 0:i.tilt)||0,!0),roll:Bn((i==null?void 0:i.roll)||0,!0,!1)}}cleanPanoramaPose(i){return{pan:pe.degToRad((i==null?void 0:i.poseHeading)||0),tilt:pe.degToRad((i==null?void 0:i.posePitch)||0),roll:pe.degToRad((i==null?void 0:i.poseRoll)||0)}}cleanPanoramaOptions(i,t){return t!=null&&t.isEquirectangular&&(Je(i.zoom)&&!Je(t.initialFov)&&(i={...i,zoom:this.fovToZoomLevel(this.hFovToVFov(t.initialFov))}),Je(i.position)&&!Je(t.initialHeading)&&!Je(t.initialPitch)&&(i={...i,position:{yaw:pe.degToRad(t.initialHeading),pitch:pe.degToRad(t.initialPitch)}})),i}},xS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path fill="currentColor" d="M33.38 33.2a1.96 1.96 0 0 0 1.5-3.23 10.61 10.61 0 0 1 7.18-17.51c.7-.06 1.31-.49 1.61-1.12a13.02 13.02 0 0 1 11.74-7.43c7.14 0 12.96 5.8 12.96 12.9 0 3.07-1.1 6.05-3.1 8.38-.7.82-.61 2.05.21 2.76.83.7 2.07.6 2.78-.22a16.77 16.77 0 0 0 4.04-10.91C72.3 7.54 64.72 0 55.4 0a16.98 16.98 0 0 0-14.79 8.7 14.6 14.6 0 0 0-12.23 14.36c0 3.46 1.25 6.82 3.5 9.45.4.45.94.69 1.5.69m45.74 43.55a22.13 22.13 0 0 1-5.23 12.4c-4 4.55-9.53 6.86-16.42 6.86-12.6 0-20.1-10.8-20.17-10.91a1.82 1.82 0 0 0-.08-.1c-5.3-6.83-14.55-23.82-17.27-28.87-.05-.1 0-.21.02-.23a6.3 6.3 0 0 1 8.24 1.85l9.38 12.59a1.97 1.97 0 0 0 3.54-1.17V25.34a4 4 0 0 1 1.19-2.87 3.32 3.32 0 0 1 2.4-.95c1.88.05 3.4 1.82 3.4 3.94v24.32a1.96 1.96 0 0 0 3.93 0v-33.1a3.5 3.5 0 0 1 7 0v35.39a1.96 1.96 0 0 0 3.93 0v-.44c.05-2.05 1.6-3.7 3.49-3.7 1.93 0 3.5 1.7 3.5 3.82v5.63c0 .24.04.48.13.71l.1.26a1.97 1.97 0 0 0 3.76-.37c.33-1.78 1.77-3.07 3.43-3.07 1.9 0 3.45 1.67 3.5 3.74l-1.77 18.1zM77.39 51c-1.25 0-2.45.32-3.5.9v-.15c0-4.27-3.33-7.74-7.42-7.74-1.26 0-2.45.33-3.5.9V16.69a7.42 7.42 0 0 0-14.85 0v1.86a7 7 0 0 0-3.28-.94 7.21 7.21 0 0 0-5.26 2.07 7.92 7.92 0 0 0-2.38 5.67v37.9l-5.83-7.82a10.2 10.2 0 0 0-13.35-2.92 4.1 4.1 0 0 0-1.53 5.48C20 64.52 28.74 80.45 34.07 87.34c.72 1.04 9.02 12.59 23.4 12.59 7.96 0 14.66-2.84 19.38-8.2a26.06 26.06 0 0 0 6.18-14.6l1.78-18.2v-.2c0-4.26-3.32-7.73-7.42-7.73z"/><!--Created by AomAm from the Noun Project--></svg>
`,yS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 17 79 79"><path fill="currentColor" d="M38.1 29.27c-.24 0-.44.2-.44.45v10.7a.45.45 0 00.9 0v-10.7c0-.25-.2-.45-.45-.45zm10.2 26.66a11.54 11.54 0 01-8.48-6.14.45.45 0 10-.8.41 12.45 12.45 0 009.22 6.62.45.45 0 00.07-.9zm24.55-13.08a23.04 23.04 0 00-22.56-23v7.07l-.01.05a2.83 2.83 0 012.39 2.78v14.03l.09-.02h8.84v-9.22a.45.45 0 11.9 0v9.22h10.35v-.9zm0 27.33V44.66H62.5c-.02 2.01-.52 4-1.47 5.76a.45.45 0 01-.61.18.45.45 0 01-.19-.61 11.54 11.54 0 001.36-5.33h-8.83l-.1-.01a2.83 2.83 0 01-2.83 2.84h-.04-.04a2.83 2.83 0 01-2.83-2.83v-14.9a2.82 2.82 0 012.47-2.8v-7.11a23.04 23.04 0 00-22.57 23v.91h14.72V29.88a8.2 8.2 0 015.02-7.57c.22-.1.5.01.59.24.1.23-.01.5-.24.6a7.3 7.3 0 00-4.47 6.73v13.88h3.9a.45.45 0 110 .9h-3.9v.15a7.32 7.32 0 0011.23 6.17.45.45 0 01.49.76 8.22 8.22 0 01-12.62-6.93v-.15H26.82v25.52a23.04 23.04 0 0023.01 23.01 23.04 23.04 0 0023.02-23.01zm1.8-27.33v27.33A24.85 24.85 0 0149.84 95a24.85 24.85 0 01-24.82-24.82V42.85a24.85 24.85 0 0124.82-24.82 24.85 24.85 0 0124.83 24.82zM57.98 29.88v9.36a.45.45 0 11-.9 0v-9.36a7.28 7.28 0 00-3.4-6.17.45.45 0 01.49-.76 8.18 8.18 0 013.8 6.93z"/><!-- Created by Icon Island from the Noun Project --></svg>
`,ba=class gm{constructor(){this.$=gm.IDLE}is(...t){return t.some(e=>this.$&e)}set(t){this.$=t}add(t){this.$|=t}remove(t){this.$&=~t}};ba.IDLE=0;ba.CLICK=1;ba.MOVING=2;var Ve=ba,MS=class extends to{constructor(i){super(i),this.data={startMouseX:0,startMouseY:0,mouseX:0,mouseY:0,pinchDist:0,moveDelta:{yaw:0,pitch:0,zoom:0},accumulatorFactor:0,ctrlKeyDown:!1,dblclickData:null,dblclickTimeout:null,longtouchTimeout:null,twofingersTimeout:null,ctrlZoomTimeout:null},this.step=new Ve,this.keyHandler=new Ea,this.resizeObserver=new ResizeObserver(gf(()=>this.viewer.autoSize(),50)),this.moveThreshold=Qd*ci.pixelRatio}init(){window.addEventListener("keydown",this,{passive:!1}),window.addEventListener("keyup",this),this.viewer.container.addEventListener("mousedown",this),window.addEventListener("mousemove",this,{passive:!1}),window.addEventListener("mouseup",this),this.viewer.container.addEventListener("touchstart",this,{passive:!1}),window.addEventListener("touchmove",this,{passive:!1}),window.addEventListener("touchend",this,{passive:!1}),this.viewer.container.addEventListener("wheel",this,{passive:!1}),document.addEventListener("fullscreenchange",this),this.resizeObserver.observe(this.viewer.container),this.viewer.addEventListener(Lr.type,this),this.viewer.addEventListener(kr.type,this)}destroy(){window.removeEventListener("keydown",this),window.removeEventListener("keyup",this),this.viewer.container.removeEventListener("mousedown",this),window.removeEventListener("mousemove",this),window.removeEventListener("mouseup",this),this.viewer.container.removeEventListener("touchstart",this),window.removeEventListener("touchmove",this),window.removeEventListener("touchend",this),this.viewer.container.removeEventListener("wheel",this),document.removeEventListener("fullscreenchange",this),this.resizeObserver.disconnect(),this.viewer.removeEventListener(Lr.type,this),this.viewer.removeEventListener(kr.type,this),clearTimeout(this.data.dblclickTimeout),clearTimeout(this.data.longtouchTimeout),clearTimeout(this.data.twofingersTimeout),clearTimeout(this.data.ctrlZoomTimeout),super.destroy()}handleEvent(i){switch(i.type){case"keydown":this.__onKeyDown(i);break;case"keyup":this.__onKeyUp();break;case"mousemove":this.__onMouseMove(i);break;case"mouseup":this.__onMouseUp(i);break;case"touchmove":this.__onTouchMove(i);break;case"touchend":this.__onTouchEnd(i);break;case"fullscreenchange":this.__onFullscreenChange();break;case Lr.type:this.__applyMoveDelta();break;case kr.type:this.__clearMoveDelta();break}if(!df(i,"."+jr))switch(i.type){case"mousedown":this.__onMouseDown(i);break;case"touchstart":this.__onTouchStart(i);break;case"wheel":this.__onMouseWheel(i);break}}__onKeyDown(i){if(this.config.mousewheelCtrlKey&&(this.data.ctrlKeyDown=i.key===Ke.Control,this.data.ctrlKeyDown&&(clearTimeout(this.data.ctrlZoomTimeout),this.viewer.overlay.hide(ei.CTRL_ZOOM))),!!this.viewer.dispatchEvent(new Wn(i.key,i))&&!(!this.state.keyboardEnabled||!this.config.keyboardActions||this.keyHandler.pending)){for(const[t,e]of Object.entries(this.config.keyboardActions))if(Kc(i,t)){if(typeof e=="function")e(this.viewer,i);else{switch(e!=="ZOOM_IN"&&e!=="ZOOM_OUT"&&this.viewer.stopAll(),e){case"ROTATE_UP":this.viewer.dynamics.position.roll({pitch:!1});break;case"ROTATE_DOWN":this.viewer.dynamics.position.roll({pitch:!0});break;case"ROTATE_RIGHT":this.viewer.dynamics.position.roll({yaw:!1});break;case"ROTATE_LEFT":this.viewer.dynamics.position.roll({yaw:!0});break;case"ZOOM_IN":this.viewer.dynamics.zoom.roll(!1);break;case"ZOOM_OUT":this.viewer.dynamics.zoom.roll(!0);break}this.keyHandler.down(e)}i.preventDefault();return}}}__onKeyUp(){this.data.ctrlKeyDown=!1,this.state.keyboardEnabled&&this.keyHandler.up(i=>{i==="ZOOM_IN"||i==="ZOOM_OUT"?this.viewer.dynamics.zoom.stop():(this.viewer.dynamics.position.stop(),this.viewer.resetIdleTimer())})}__onMouseDown(i){this.step.add(Ve.CLICK),this.data.startMouseX=i.clientX,this.data.startMouseY=i.clientY,this.config.mousemove&&i.preventDefault()}__onMouseUp(i){this.step.is(Ve.CLICK,Ve.MOVING)&&this.__stopMove(i.clientX,i.clientY,i,i.button===2)}__onMouseMove(i){this.config.mousemove&&this.step.is(Ve.CLICK,Ve.MOVING)&&(i.preventDefault(),this.__doMove(i.clientX,i.clientY)),this.__handleObjectsEvents(i)}__onTouchStart(i){i.touches.length===1?(this.step.add(Ve.CLICK),this.data.startMouseX=i.touches[0].clientX,this.data.startMouseY=i.touches[0].clientY,this.data.longtouchTimeout||(this.data.longtouchTimeout=setTimeout(()=>{const t=i.touches[0];this.__stopMove(t.clientX,t.clientY,i,!0),this.data.longtouchTimeout=null},ef))):i.touches.length===2&&(this.step.set(Ve.IDLE),this.__cancelLongTouch(),this.config.mousemove&&(this.__cancelTwoFingersOverlay(),this.__startMoveZoom(i),i.preventDefault()))}__onTouchEnd(i){if(this.__cancelLongTouch(),this.step.is(Ve.CLICK,Ve.MOVING)){if(i.preventDefault(),this.__cancelTwoFingersOverlay(),i.touches.length===1)this.__stopMove(this.data.mouseX,this.data.mouseY);else if(i.touches.length===0){const t=i.changedTouches[0];this.__stopMove(t.clientX,t.clientY,i)}}}__onTouchMove(i){if(this.__cancelLongTouch(),!!this.config.mousemove)if(i.touches.length===1){if(this.config.touchmoveTwoFingers)this.step.is(Ve.CLICK)&&!this.data.twofingersTimeout&&(this.data.twofingersTimeout=setTimeout(()=>{this.viewer.overlay.show({id:ei.TWO_FINGERS,image:xS,title:this.config.lang.twoFingers})},nf));else if(this.step.is(Ve.CLICK,Ve.MOVING)){i.preventDefault();const t=i.touches[0];this.__doMove(t.clientX,t.clientY)}}else this.__doMoveZoom(i),this.__cancelTwoFingersOverlay()}__cancelLongTouch(){this.data.longtouchTimeout&&(clearTimeout(this.data.longtouchTimeout),this.data.longtouchTimeout=null)}__cancelTwoFingersOverlay(){this.config.touchmoveTwoFingers&&(this.data.twofingersTimeout&&(clearTimeout(this.data.twofingersTimeout),this.data.twofingersTimeout=null),this.viewer.overlay.hide(ei.TWO_FINGERS))}__onMouseWheel(i){if(!this.config.mousewheel||!i.deltaY)return;if(this.config.mousewheelCtrlKey&&!this.data.ctrlKeyDown){this.viewer.overlay.show({id:ei.CTRL_ZOOM,image:yS,title:this.config.lang.ctrlZoom}),clearTimeout(this.data.ctrlZoomTimeout),this.data.ctrlZoomTimeout=setTimeout(()=>this.viewer.overlay.hide(ei.CTRL_ZOOM),sf);return}i.preventDefault(),i.stopPropagation();const t=i.deltaY/Math.abs(i.deltaY)*5*this.config.zoomSpeed;t!==0&&this.viewer.dynamics.zoom.step(-t,5)}__onFullscreenChange(){const i=this.viewer.isFullscreenEnabled();this.config.keyboard==="fullscreen"&&(i?this.viewer.startKeyboardControl():this.viewer.stopKeyboardControl()),this.viewer.dispatchEvent(new Rr(i))}__resetMove(){this.step.set(Ve.IDLE),this.data.mouseX=0,this.data.mouseY=0,this.data.startMouseX=0,this.data.startMouseY=0}__startMoveZoom(i){this.viewer.stopAll(),this.__resetMove();const t=xc(i);this.step.set(Ve.MOVING),this.data.accumulatorFactor=this.config.moveInertia,{distance:this.data.pinchDist,center:{x:this.data.mouseX,y:this.data.mouseY}}=t}__stopMove(i,t,e,s=!1){this.step.is(Ve.CLICK)&&!this.__moveThresholdReached(i,t)&&this.__doClick(i,t,e,s),this.config.moveInertia&&(this.data.accumulatorFactor=Math.pow(this.config.moveInertia,.5)),this.__resetMove(),this.viewer.resetIdleTimer()}__doClick(i,t,e,s=!1){const r=this.viewer.container.getBoundingClientRect(),a=i-r.left,c=t-r.top,h=this.viewer.renderer.getIntersections({x:a,y:c}),d=h.find(f=>f.object.userData[Yn]);if(d){const f=this.viewer.dataHelper.vector3ToSphericalCoords(d.point),p={rightclick:s,originalEvent:e,target:sa(e),clientX:i,clientY:t,viewerX:a,viewerY:c,yaw:f.yaw,pitch:f.pitch,objects:h.map(g=>g.object).filter(g=>!g.userData[Yn])};try{const g=this.viewer.dataHelper.sphericalCoordsToTextureCoords(p);Object.assign(p,g)}catch{}this.data.dblclickTimeout?(Math.abs(this.data.dblclickData.clientX-p.clientX)<this.moveThreshold&&Math.abs(this.data.dblclickData.clientY-p.clientY)<this.moveThreshold&&this.viewer.dispatchEvent(new Yf(this.data.dblclickData)),clearTimeout(this.data.dblclickTimeout),this.data.dblclickTimeout=null,this.data.dblclickData=null):(this.viewer.dispatchEvent(new Gf(p)),this.data.dblclickData=xa(p),this.data.dblclickTimeout=setTimeout(()=>{this.data.dblclickTimeout=null,this.data.dblclickData=null},tf))}}__handleObjectsEvents(i){if(!xf(this.state.objectsObservers)&&i.composedPath().includes(this.viewer.container)){const t=ff(this.viewer.container),e={x:i.clientX-t.x,y:i.clientY-t.y},s=this.viewer.renderer.getIntersections(e),r=(a,c,h)=>{this.viewer.dispatchEvent(new h(i,a,e,c))};for(const[a,c]of Object.entries(this.state.objectsObservers)){const h=s.find(d=>d.object.userData[a]);h?(c&&h.object!==c&&(r(c,a,wc),this.state.objectsObservers[a]=null),c?r(h.object,a,em):(this.state.objectsObservers[a]=h.object,r(h.object,a,Kp))):c&&(r(c,a,wc),this.state.objectsObservers[a]=null)}}}__doMove(i,t){if(this.step.is(Ve.CLICK)&&this.__moveThresholdReached(i,t))this.viewer.stopAll(),this.__resetMove(),this.step.set(Ve.MOVING),this.data.mouseX=i,this.data.mouseY=t,this.data.accumulatorFactor=this.config.moveInertia;else if(this.step.is(Ve.MOVING)){const e=(i-this.data.mouseX)*Math.cos(this.state.roll)-(t-this.data.mouseY)*Math.sin(this.state.roll),s=(t-this.data.mouseY)*Math.cos(this.state.roll)+(i-this.data.mouseX)*Math.sin(this.state.roll),r={yaw:this.config.moveSpeed*(e/this.state.size.width)*pe.degToRad(this.state.hFov),pitch:this.config.moveSpeed*(s/this.state.size.height)*pe.degToRad(this.state.vFov)};this.data.moveDelta.yaw+=r.yaw,this.data.moveDelta.pitch+=r.pitch,this.data.mouseX=i,this.data.mouseY=t}}__moveThresholdReached(i,t){return Math.abs(i-this.data.startMouseX)>=this.moveThreshold||Math.abs(t-this.data.startMouseY)>=this.moveThreshold}__doMoveZoom(i){if(this.step.is(Ve.MOVING)){i.preventDefault();const t=xc(i);this.__doMove(t.center.x,t.center.y),this.data.moveDelta.zoom+=this.config.zoomSpeed*((t.distance-this.data.pinchDist)/ci.pixelRatio),this.data.pinchDist=t.distance}}__applyMoveDelta(){if(Math.abs(this.data.moveDelta.yaw)>0||Math.abs(this.data.moveDelta.pitch)>0){const t=this.viewer.getPosition();this.viewer.rotate({yaw:t.yaw-this.data.moveDelta.yaw*(1-this.config.moveInertia),pitch:t.pitch+this.data.moveDelta.pitch*(1-this.config.moveInertia)}),this.data.moveDelta.yaw*=this.data.accumulatorFactor,this.data.moveDelta.pitch*=this.data.accumulatorFactor,Math.abs(this.data.moveDelta.yaw)<=.001&&(this.data.moveDelta.yaw=0),Math.abs(this.data.moveDelta.pitch)<=.001&&(this.data.moveDelta.pitch=0)}if(Math.abs(this.data.moveDelta.zoom)>0){const t=this.viewer.getZoomLevel();this.viewer.zoom(t+this.data.moveDelta.zoom*(1-this.config.moveInertia)),this.data.moveDelta.zoom*=this.config.moveInertia,Math.abs(this.data.moveDelta.zoom)<=.001&&(this.data.moveDelta.zoom=0)}}__clearMoveDelta(){this.data.moveDelta.yaw=0,this.data.moveDelta.pitch=0,this.data.moveDelta.zoom=0}};le.enabled=!1;var Go=new he,hd=new Oe,ud=new ir,ES=class extends to{constructor(i){super(i),this.frustumNeedsUpdate=!0,this.renderer=new OE(this.config.rendererParameters),this.renderer.setPixelRatio(ci.pixelRatio),this.renderer.outputColorSpace=Gr,this.renderer.toneMapping=Dc,this.renderer.domElement.className="psv-canvas",this.renderer.domElement.style.background=this.config.canvasBackground,this.scene=new pc,this.camera=new Ri(50,16/9,.1,2*bn),this.camera.matrixAutoUpdate=!1;const t=new _i(new Qs(bn).scale(-1,1,1),new $r({opacity:0,transparent:!0,depthTest:!1,depthWrite:!1}));t.userData={[Yn]:!0},this.scene.add(t),this.raycaster=new Bv,this.frustum=new Zc,this.container=document.createElement("div"),this.container.className="psv-canvas-container",this.container.appendChild(this.renderer.domElement),this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",e=>e.preventDefault()),this.viewer.addEventListener(Fr.type,this),this.viewer.addEventListener(Tn.type,this),this.viewer.addEventListener(Dr.type,this),this.viewer.addEventListener(Nr.type,this),this.viewer.addEventListener(mi.type,this),this.hide()}get panoramaPose(){return this.mesh.rotation}get sphereCorrection(){return this.meshContainer.rotation}init(){this.show(),this.renderer.setAnimationLoop(i=>this.__renderLoop(i))}destroy(){this.renderer.setAnimationLoop(null),this.cleanScene(this.scene),this.renderer.dispose(),this.viewer.container.removeChild(this.container),this.viewer.removeEventListener(Fr.type,this),this.viewer.removeEventListener(Tn.type,this),this.viewer.removeEventListener(Dr.type,this),this.viewer.removeEventListener(Nr.type,this),this.viewer.removeEventListener(mi.type,this),super.destroy()}handleEvent(i){switch(i.type){case Fr.type:this.__onSizeUpdated();break;case Tn.type:this.__onZoomUpdated();break;case Dr.type:this.__onPositionUpdated();break;case Nr.type:this.__onPositionUpdated();break;case mi.type:i.containsOptions("fisheye")&&this.__onPositionUpdated(),i.containsOptions("canvasBackground")&&(this.renderer.domElement.style.background=this.config.canvasBackground);break}}hide(){this.container.style.opacity="0"}show(){this.container.style.opacity="1"}setCustomRenderer(i){i?this.customRenderer=i(this.renderer):this.customRenderer=null,this.viewer.needsUpdate()}__onSizeUpdated(){this.renderer.setSize(this.state.size.width,this.state.size.height),this.camera.aspect=this.state.aspect,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onZoomUpdated(){this.camera.fov=this.state.vFov,this.camera.updateProjectionMatrix(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__onPositionUpdated(){this.camera.position.set(0,0,0),this.camera.lookAt(this.state.direction),this.config.fisheye&&this.camera.position.copy(this.state.direction).multiplyScalar(this.config.fisheye/2).negate(),this.camera.rotateZ(-this.state.roll),this.camera.updateMatrix(),this.camera.updateMatrixWorld(),this.viewer.needsUpdate(),this.frustumNeedsUpdate=!0}__renderLoop(i){const t=this.timestamp?i-this.timestamp:0;this.timestamp=i,this.viewer.dispatchEvent(new Lr(i,t)),this.viewer.dynamics.update(t),(this.state.needsUpdate||this.state.continuousUpdateCount>0)&&(this.state.needsUpdate=!1,(this.customRenderer||this.renderer).render(this.scene,this.camera),this.viewer.dispatchEvent(new Rp))}setTexture(i){this.meshContainer||(this.meshContainer=new cs,this.scene.add(this.meshContainer)),this.state.textureData&&this.viewer.adapter.disposeTexture(this.state.textureData),this.mesh&&(this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh)),this.mesh=this.viewer.adapter.createMesh(i.panoData),this.viewer.adapter.setTexture(this.mesh,i,!1),this.meshContainer.add(this.mesh),this.state.textureData=i,this.viewer.needsUpdate()}setPanoramaPose(i,t=this.mesh){const e=this.viewer.dataHelper.cleanPanoramaPose(i);t.rotation.set(-e.tilt,-e.pan,e.roll,"YXZ")}setSphereCorrection(i,t=this.meshContainer){const e=this.viewer.dataHelper.cleanSphereCorrection(i);t.rotation.set(e.tilt,e.pan,e.roll,"YXZ")}transition(i,t,e){const s=e.effect==="fade"||e.rotation,r=!Je(t.position),a=!Je(t.zoom),c=new ih(r?this.viewer.dataHelper.cleanPosition(t.position):void 0,t.zoom);this.viewer.dispatchEvent(c);const h=new cs,d=this.viewer.adapter.createMesh(i.panoData);if(this.viewer.adapter.setTexture(d,i,!0),this.viewer.adapter.setTextureOpacity(d,0),this.setPanoramaPose(i.panoData,d),this.setSphereCorrection(t.sphereCorrection,h),r&&!e.rotation){const M=this.viewer.getPosition(),w=new G(0,1,0);h.rotateOnWorldAxis(w,c.position.yaw-M.yaw);const T=new G(0,1,0).cross(this.camera.getWorldDirection(new G)).normalize();h.rotateOnWorldAxis(T,c.position.pitch-M.pitch)}h.add(d),this.scene.add(h);const f=new Wi;this.renderer.setRenderTarget(f),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),f.dispose();const{duration:p,properties:g}=this.viewer.dataHelper.getAnimationProperties(e.speed,e.rotation?c.position:null,s?c.zoomLevel:null),_=new la({properties:{...g,opacity:{start:0,end:1}},duration:p,easing:"inOutCubic",onTick:M=>{switch(e.effect){case"fade":this.viewer.adapter.setTextureOpacity(d,M.opacity);break;case"black":case"white":M.opacity<.5?this.renderer.toneMappingExposure=e.effect==="black"?pe.mapLinear(M.opacity,0,.5,1,0):pe.mapLinear(M.opacity,0,.5,1,5):(this.renderer.toneMappingExposure=e.effect==="black"?pe.mapLinear(M.opacity,.5,1,0,1):pe.mapLinear(M.opacity,.5,1,5,1),this.mesh.visible=!1,this.viewer.adapter.setTextureOpacity(d,1),a&&!s&&this.viewer.dynamics.zoom.setValue(c.zoomLevel));break}r&&e.rotation&&this.viewer.dynamics.position.setValue({yaw:M.yaw,pitch:M.pitch}),a&&s&&this.viewer.dynamics.zoom.setValue(M.zoom),this.viewer.needsUpdate()}});return _.then(M=>{h.remove(d),this.scene.remove(h),M?(this.viewer.adapter.disposeTexture(this.state.textureData),this.meshContainer.remove(this.mesh),this.viewer.adapter.disposeMesh(this.mesh),this.mesh=d,this.meshContainer.add(d),this.state.textureData=i,this.setPanoramaPose(i.panoData),this.setSphereCorrection(t.sphereCorrection),r&&!e.rotation&&this.viewer.rotate(t.position)):(this.viewer.adapter.disposeTexture(i),this.viewer.adapter.disposeMesh(d))}),_}getIntersections(i){var e;Go.x=2*i.x/this.state.size.width-1,Go.y=-2*i.y/this.state.size.height+1,this.raycaster.setFromCamera(Go,this.camera);const t=this.raycaster.intersectObjects(this.scene.children,!0).filter(s=>s.object.visible).filter(s=>s.object.isMesh&&!!s.object.userData);return(e=this.customRenderer)!=null&&e.getIntersections&&t.push(...this.customRenderer.getIntersections(this.raycaster,Go)),t}isObjectVisible(i){if(!i)return!1;if(this.frustumNeedsUpdate&&(hd.multiplyMatrices(this.camera.projectionMatrix,this.camera.matrixWorldInverse),this.frustum.setFromProjectionMatrix(hd),this.frustumNeedsUpdate=!1),i.isVector3)return this.frustum.containsPoint(i);if(i.isMesh&&i.geometry){const t=i;return t.geometry.boundingBox||t.geometry.computeBoundingBox(),ud.copy(t.geometry.boundingBox).applyMatrix4(t.matrixWorld),this.frustum.intersectsBox(ud)}else return i.isObject3D?this.frustum.intersectsObject(i):!1}addObject(i){this.scene.add(i)}removeObject(i){this.scene.remove(i)}cleanScene(i){const t=e=>{var s;(s=e.map)==null||s.dispose(),e.uniforms&&Object.values(e.uniforms).forEach(r=>{var a,c;(c=(a=r.value)==null?void 0:a.dispose)==null||c.call(a)}),e.dispose()};i.traverse(e=>{var s,r;(s=e.geometry)==null||s.dispose(),e.material&&(Array.isArray(e.material)?e.material.forEach(a=>{t(a)}):t(e.material)),e instanceof pc||(r=e.dispose)==null||r.call(e),e!==i&&this.cleanScene(e)})}},SS=class extends Uv{constructor(){super(...arguments),this._abortController=new AbortController}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}load(i,t,e,s){const r=this._abortController.signal,a=super.load(i,d=>{h(),t(d)},e,d=>{if(h(),r.aborted){const f=new Error;f.name="AbortError",f.message="The operation was aborted.",s(f)}else s(d)});function c(){a.src=""}function h(){r.removeEventListener("abort",c,!1)}return r.addEventListener("abort",c,!1),a}},wS=class extends to{constructor(i){super(i),this.fileLoader=new Ov,this.fileLoader.setResponseType("blob"),this.imageLoader=new SS}destroy(){this.abortLoading(),super.destroy()}abortLoading(){var i,t;(t=(i=this.fileLoader).abort)==null||t.call(i),this.imageLoader.abort()}loadFile(i,t,e){const s=Gs.get(i,e);if(s){if(s instanceof Blob)return t==null||t(100),Promise.resolve(s);Gs.remove(i,e)}this.config.requestHeaders&&this.fileLoader.setRequestHeader(this.config.requestHeaders(i)),this.fileLoader.setWithCredentials(this.config.withCredentials(i));let r=0;return t==null||t(r),this.fileLoader.loadAsync(i,a=>{if(a.lengthComputable){const c=a.loaded/a.total*100;c>r&&(r=c,t==null||t(r))}}).then(a=>(r=100,t==null||t(r),Gs.add(i,e,a),a))}loadImage(i,t,e){const s=Gs.get(i,e);return s?(t==null||t(100),s instanceof Blob?this.blobToImage(s):Promise.resolve(s)):!t&&!this.config.requestHeaders?(this.imageLoader.setWithCredentials(this.config.withCredentials(i)),this.imageLoader.loadAsync(i).then(r=>(Gs.add(i,e,r),r))):this.loadFile(i,t,e).then(r=>this.blobToImage(r))}blobToImage(i){return new Promise((t,e)=>{const s=document.createElement("img");s.onload=()=>{URL.revokeObjectURL(s.src),t(s)},s.onerror=e,s.src=URL.createObjectURL(i)})}preloadPanorama(i){return this.viewer.adapter.supportsPreload(i)?this.viewer.adapter.loadTexture(i,!1):Promise.reject(new Zt("Current adapter does not support preload"))}dispatchProgress(i){this.viewer.loader.setProgress(i),this.viewer.dispatchEvent(new up(Math.round(i)))}},bS=class extends to{constructor(i){super(i),this.zoom=new Tr(t=>{this.viewer.state.vFov=this.viewer.dataHelper.zoomLevelToFov(t),this.viewer.state.hFov=this.viewer.dataHelper.vFovToHFov(this.viewer.state.vFov),this.viewer.dispatchEvent(new Tn(t))},{defaultValue:this.viewer.config.defaultZoomLvl,min:0,max:100,wrap:!1}),this.position=new Pf(t=>{this.viewer.dataHelper.sphericalCoordsToVector3(t,this.viewer.state.direction),this.viewer.dispatchEvent(new Dr(t))},{yaw:new Tr(null,{defaultValue:this.config.defaultYaw,min:0,max:2*Math.PI,wrap:!0}),pitch:new Tr(null,{defaultValue:this.config.defaultPitch,min:-Math.PI/2,max:Math.PI/2,wrap:!1})}),this.roll=new Tr(t=>{this.viewer.state.roll=t,this.viewer.dispatchEvent(new Nr(t))},{defaultValue:0,min:-Math.PI,max:Math.PI,wrap:!1}),this.updateSpeeds()}updateSpeeds(){this.zoom.setSpeed(this.config.zoomSpeed*50),this.position.setSpeed(pe.degToRad(this.config.moveSpeed*50)),this.roll.setSpeed(pe.degToRad(this.config.moveSpeed*50))}update(i){this.zoom.update(i),this.position.update(i),this.roll.update(i)}},TS=class{constructor(){this.ready=!1,this.needsUpdate=!1,this.continuousUpdateCount=0,this.keyboardEnabled=!1,this.direction=new G(0,0,bn),this.roll=0,this.vFov=60,this.hFov=60,this.aspect=1,this.animation=null,this.transitionAnimation=null,this.loadingPromise=null,this.idleTime=-1,this.objectsObservers={},this.size={width:0,height:0}}},AS=class extends Df{constructor(i){var t,e,s;if(super(),this.plugins={},this.children=[],this.parent=hf(i.container),!this.parent)throw new Zt('"container" element not found.');this.parent[Yn]=this,this.container=document.createElement("div"),this.container.classList.add("psv-container"),this.parent.appendChild(this.container),Tf(this.parent),bf(this.container,"core"),this.state=new TS,this.config=cS(i),this.__setSize(this.config.size),this.overlay=new fS(this);try{ci.load()}catch(r){console.error(r),this.showError(this.config.lang.webglError);return}Gs.init(),this.adapter=new this.config.adapter[0](this,this.config.adapter[1]),this.renderer=new ES(this),this.textureLoader=new wS(this),this.eventsHandler=new MS(this),this.dataHelper=new vS(this),this.dynamics=new bS(this),(e=(t=this.adapter).init)==null||e.call(t),this.loader=new uS(this),this.navbar=new hS(this),this.panel=new mS(this),this.notification=new dS(this),this.autoSize(),this.setCursor(null),jc(ci.isTouchEnabled,r=>{va(this.container,"psv--is-touch",r)}),this.config.plugins.forEach(([r,a])=>{this.plugins[r.id]=new r(this,a)});for(const r of Object.values(this.plugins))(s=r.init)==null||s.call(r);this.config.navbar&&this.navbar.setButtons(this.config.navbar),this.state.loadingPromise||(this.config.panorama?this.setPanorama(this.config.panorama,{sphereCorrection:this.config.sphereCorrection,panoData:this.config.panoData}):this.loader.show())}destroy(){var i,t,e,s,r,a;this.stopAll(),this.stopKeyboardControl(),this.exitFullscreen();for(const[c,h]of Object.entries(this.plugins))h.destroy(),delete this.plugins[c];this.children.slice().forEach(c=>c.destroy()),this.children.length=0,(i=this.eventsHandler)==null||i.destroy(),(t=this.renderer)==null||t.destroy(),(e=this.textureLoader)==null||e.destroy(),(s=this.dataHelper)==null||s.destroy(),(r=this.adapter)==null||r.destroy(),(a=this.dynamics)==null||a.destroy(),this.parent.removeChild(this.container),delete this.parent[Yn]}init(){this.eventsHandler.init(),this.renderer.init(),this.config.navbar&&this.navbar.show(),this.config.keyboard==="always"&&this.startKeyboardControl(),this.resetIdleTimer(),this.state.ready=!0,this.dispatchEvent(new Or)}resetIdleTimer(){this.state.idleTime=performance.now()}disableIdleTimer(){this.state.idleTime=-1}getPlugin(i){if(typeof i=="string")return this.plugins[i];{const t=bc(i);return t?this.plugins[t.id]:null}}getPosition(){return this.dataHelper.cleanPosition(this.dynamics.position.current)}getZoomLevel(){return this.dynamics.zoom.current}getSize(){return{...this.state.size}}isFullscreenEnabled(){return pf(this.parent,ci.isIphone)}needsUpdate(){this.state.needsUpdate=!0}needsContinuousUpdate(i){i?this.state.continuousUpdateCount++:this.state.continuousUpdateCount>0&&this.state.continuousUpdateCount--}autoSize(){(this.container.clientWidth!==this.state.size.width||this.container.clientHeight!==this.state.size.height)&&(this.state.size.width=Math.round(this.container.clientWidth),this.state.size.height=Math.round(this.container.clientHeight),this.state.aspect=this.state.size.width/this.state.size.height,this.state.hFov=this.dataHelper.vFovToHFov(this.state.vFov),this.dispatchEvent(new Fr(this.getSize())),this.navbar.autoSize())}setPanorama(i,t={}){var a;this.textureLoader.abortLoading(),(a=this.state.transitionAnimation)==null||a.cancel();const e=this.dataHelper.getTransitionOptions(t);t.showLoader===void 0&&(t.showLoader=!0),t.caption===void 0&&(t.caption=this.config.caption),t.description===void 0&&(t.description=this.config.description),!t.panoData&&typeof this.config.panoData=="function"&&(t.panoData=this.config.panoData),t.sphereCorrection===void 0&&(t.sphereCorrection=this.config.sphereCorrection),this.hideError(),this.resetIdleTimer(),this.config.panorama=i,this.config.caption=t.caption,this.config.description=t.description,this.config.sphereCorrection=t.sphereCorrection,(typeof this.config.panoData!="function"||typeof t.panoData=="function")&&(this.config.panoData=t.panoData);const s=c=>{if(Ef(c))return!1;if(this.loader.hide(),this.state.loadingPromise=null,c)throw this.navbar.setCaption(null),this.showError(this.config.lang.loadError),console.error(c),this.dispatchEvent(new xp(i,c)),c;return this.navbar.setCaption(this.config.caption),!0};this.navbar.setCaption(`<em>${this.config.lang.loading}</em>`),(t.showLoader||!this.state.ready)&&this.loader.show(),this.dispatchEvent(new pp(i));const r=this.adapter.loadTexture(this.config.panorama,!0,t.panoData).then(c=>{if(c.panorama!==this.config.panorama)throw this.adapter.disposeTexture(c),yc();const h=this.dataHelper.cleanPanoramaOptions(t,c.panoData);return(!Je(h.zoom)||!Je(h.position))&&this.stopAll(),{textureData:c,cleanOptions:h}});return!e||!this.state.ready||!this.adapter.supportsTransition(this.config.panorama)?this.state.loadingPromise=r.then(({textureData:c,cleanOptions:h})=>{this.renderer.show(),this.renderer.setTexture(c),this.renderer.setPanoramaPose(c.panoData),this.renderer.setSphereCorrection(t.sphereCorrection),this.state.ready||this.init(),this.dispatchEvent(new $s(c)),Je(h.zoom)||this.zoom(h.zoom),Je(h.position)||this.rotate(h.position)}).then(()=>s(),c=>s(c)):this.state.loadingPromise=r.then(({textureData:c,cleanOptions:h})=>(this.loader.hide(),this.dispatchEvent(new $s(c)),this.state.transitionAnimation=this.renderer.transition(c,h,e),this.state.transitionAnimation)).then(c=>{if(this.state.transitionAnimation=null,this.dispatchEvent(new Ep(c)),!c)throw yc()}).then(()=>s(),c=>s(c)),this.state.loadingPromise}setOptions(i){const t={...this.config,...i};for(let[e,s]of Object.entries(i)){if(!(e in Pn)){je(`Unknown option ${e}`);continue}if(e in cd){je(cd[e]);continue}switch(e in Tc&&(s=Tc[e](s,{rawConfig:t,defValue:Pn[e]})),this.config[e]=s,e){case"mousemove":this.state.cursorOverride||this.setCursor(null);break;case"caption":this.navbar.setCaption(this.config.caption);break;case"size":this.resize(this.config.size);break;case"sphereCorrection":this.renderer.setSphereCorrection(this.config.sphereCorrection);break;case"navbar":case"lang":this.navbar.setButtons(this.config.navbar);break;case"moveSpeed":case"zoomSpeed":this.dynamics.updateSpeeds();break;case"minFov":case"maxFov":this.dynamics.zoom.setValue(this.dataHelper.fovToZoomLevel(this.state.vFov)),this.dispatchEvent(new Tn(this.getZoomLevel()));break;case"keyboard":this.config.keyboard==="always"?this.startKeyboardControl():this.stopKeyboardControl();break}}this.needsUpdate(),this.dispatchEvent(new mi(Object.keys(i)))}setOption(i,t){this.setOptions({[i]:t})}showError(i){this.overlay.show({id:ei.ERROR,image:gS,title:i,dismissible:!1})}hideError(){this.overlay.hide(ei.ERROR)}rotate(i){const t=new zf(this.dataHelper.cleanPosition(i));this.dispatchEvent(t),!t.defaultPrevented&&this.dynamics.position.setValue(t.position)}zoom(i){this.dynamics.zoom.setValue(i)}zoomIn(i=1){this.dynamics.zoom.step(i)}zoomOut(i=1){this.dynamics.zoom.step(-i)}animate(i){const t=Qc(i),e=!Je(i.zoom),s=new ih(t?this.dataHelper.cleanPosition(i):void 0,i.zoom);if(this.dispatchEvent(s),s.defaultPrevented)return;this.stopAll();const{duration:r,properties:a}=this.dataHelper.getAnimationProperties(i.speed,s.position,s.zoomLevel);return r?(this.state.animation=new la({properties:a,duration:r,easing:i.easing||"inOutSine",onTick:c=>{t&&this.dynamics.position.setValue({yaw:c.yaw,pitch:c.pitch}),e&&this.dynamics.zoom.setValue(c.zoom)}}),this.state.animation.then(()=>{this.state.animation=null,this.resetIdleTimer()}),this.state.animation):(t&&this.rotate(s.position),e&&this.zoom(s.zoomLevel),new la(null))}stopAnimation(){return this.state.animation?(this.state.animation.cancel(),this.state.animation):Promise.resolve()}resize(i){this.__setSize(i),this.autoSize()}__setSize(i){["width","height"].forEach(t=>{i!=null&&i[t]&&(/^[0-9.]+$/.test(i[t])&&(i[t]+="px"),this.parent.style[t]=i[t])})}enterFullscreen(){this.isFullscreenEnabled()||mf(this.parent,ci.isIphone)}exitFullscreen(){this.isFullscreenEnabled()&&_f(ci.isIphone)}toggleFullscreen(){this.isFullscreenEnabled()?this.exitFullscreen():this.enterFullscreen()}startKeyboardControl(){this.state.keyboardEnabled=!0}stopKeyboardControl(){this.state.keyboardEnabled=!1}createTooltip(i){return new _S(this,i)}setCursor(i){this.state.cursorOverride=i,i?this.container.style.cursor=i:this.container.style.cursor=this.config.mousemove?"move":"default"}observeObjects(i){this.state.objectsObservers[i]||(this.state.objectsObservers[i]=null)}unobserveObjects(i){delete this.state.objectsObservers[i]}stopAll(){return this.dispatchEvent(new kr),this.disableIdleTimer(),this.stopAnimation()}};/*!
 * Photo Sphere Viewer / Markers Plugin 5.15.1
 * @copyright 2015-2026 Damien "Mistic" Sorel
 * @licence MIT (https://opensource.org/licenses/MIT)
 */var CS=Object.defineProperty,PS=(i,t)=>{for(var e in t)CS(i,e,{get:t[e],enumerable:!0})},LS={};PS(LS,{EnterMarkerEvent:()=>Cm,GotoMarkerDoneEvent:()=>Cc,HideMarkersEvent:()=>Br,LeaveMarkerEvent:()=>bm,MarkerVisibilityEvent:()=>ym,MarkersPluginEvent:()=>Oi,RenderMarkersListEvent:()=>qm,SelectMarkerEvent:()=>Rm,SelectMarkerListEvent:()=>Nm,SetMarkersEvent:()=>Vm,ShowMarkersEvent:()=>zr,UnselectMarkerEvent:()=>Fm});var Oi=class extends If{},vm=class xm extends Oi{constructor(t,e){super(xm.type),this.marker=t,this.visible=e}};vm.type="marker-visibility";var ym=vm,Mm=class Em extends Oi{constructor(t){super(Em.type),this.marker=t}};Mm.type="goto-marker-done";var Cc=Mm,Sm=class wm extends Oi{constructor(t){super(wm.type),this.marker=t}};Sm.type="leave-marker";var bm=Sm,Tm=class Am extends Oi{constructor(t){super(Am.type),this.marker=t}};Tm.type="enter-marker";var Cm=Tm,Pm=class Lm extends Oi{constructor(t,e,s){super(Lm.type),this.marker=t,this.doubleClick=e,this.rightClick=s}};Pm.type="select-marker";var Rm=Pm,Im=class Dm extends Oi{constructor(t){super(Dm.type),this.marker=t}};Im.type="select-marker-list";var Nm=Im,Om=class Um extends Oi{constructor(t){super(Um.type),this.marker=t}};Om.type="unselect-marker";var Fm=Om,km=class Bm extends Oi{constructor(){super(Bm.type)}};km.type="hide-markers";var Br=km,zm=class Hm extends Oi{constructor(t){super(Hm.type),this.markers=t}};zm.type="set-markers";var Vm=zm,Gm=class Wm extends Oi{constructor(){super(Wm.type)}};Gm.type="show-markers";var zr=Gm,Xm=class Zm extends Oi{constructor(t){super(Zm.type),this.markers=t}};Xm.type="render-markers-list";var qm=Xm,RS=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="10 9 81 81"><path fill="currentColor" d="M50.5 90S22.9 51.9 22.9 36.6 35.2 9 50.5 9s27.6 12.4 27.6 27.6S50.5 90 50.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,Yr=class extends hi{constructor(i){super(i,{className:"psv-markers-button",icon:RS,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.plugin.addEventListener(zr.type,this),this.plugin.addEventListener(Br.type,this),this.toggleActive(!0))}destroy(){this.plugin&&(this.plugin.removeEventListener(zr.type,this),this.plugin.removeEventListener(Br.type,this)),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof zr?this.toggleActive(!0):i instanceof Br&&this.toggleActive(!1)}onClick(){this.plugin.toggleAllMarkers()}};Yr.id="markers";var Ym=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="9 9 81 81"><path fill="currentColor" d="M37.5 90S9.9 51.9 9.9 36.6 22.2 9 37.5 9s27.6 12.4 27.6 27.6S37.5 90 37.5 90zm0-66.3c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zM86.7 55H70c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3h16.7c1.8 0 3.3 1.5 3.3 3.3S88.5 55 86.7 55zm0-25h-15a3.3 3.3 0 0 1-3.3-3.3c0-1.8 1.5-3.3 3.3-3.3h15c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3zM56.5 73h30c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3h-30a3.3 3.3 0 0 1-3.3-3.3 3.2 3.2 0 0 1 3.3-3.3z"/><!--Created by Rohith M S from the Noun Project--></svg>
`,ha="http://www.w3.org/2000/svg",Ne="psvMarker",IS=re.dasherize(Ne),Er="marker",Ws="markersList",Pc={amount:2,duration:100,easing:"linear"},DS=(i,t)=>`
<div class="psv-panel-menu psv-panel-menu--stripped">
    <h1 class="psv-panel-menu-title">${Ym} ${t}</h1>
    <ul class="psv-panel-menu-list">
    ${i.map(e=>`
        <li data-${IS}="${e.id}" class="psv-panel-menu-item" tabindex="0">
          ${e.type==="image"?`<span class="psv-panel-menu-item-icon"><img src="${e.definition}"/></span>`:""}
          <span class="psv-panel-menu-item-label">${e.getListContent()}</span>
        </li>
    `).join("")}
    </ul>
</div>
`,Ta=class extends hi{constructor(i){super(i,{className:" psv-markers-list-button",icon:Ym,hoverScale:!0,collapsable:!0,tabbable:!0}),this.plugin=this.viewer.getPlugin("markers"),this.plugin&&(this.viewer.addEventListener(ie.ShowPanelEvent.type,this),this.viewer.addEventListener(ie.HidePanelEvent.type,this))}destroy(){this.viewer.removeEventListener(ie.ShowPanelEvent.type,this),this.viewer.removeEventListener(ie.HidePanelEvent.type,this),super.destroy()}isSupported(){return!!this.plugin}handleEvent(i){i instanceof ie.ShowPanelEvent?this.toggleActive(i.panelId===Ws):i instanceof ie.HidePanelEvent&&this.toggleActive(!1)}onClick(){this.plugin.toggleMarkersList()}};Ta.id="markersList";var dd=new G,NS=new $n,fd=new G,OS=class extends pi{constructor(i=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=i,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(i,t){return super.copy(i,t),this.element=i.element.cloneNode(!0),this}},tn=new Oe,US=new Oe,FS=class{constructor(i={}){const t=this;let e,s,r,a;const c={camera:{style:""},objects:new WeakMap},h=i.element!==void 0?i.element:document.createElement("div");h.style.overflow="hidden",this.domElement=h;const d=document.createElement("div");d.style.transformOrigin="0 0",d.style.pointerEvents="none",h.appendChild(d);const f=document.createElement("div");f.style.transformStyle="preserve-3d",d.appendChild(f),this.getSize=function(){return{width:e,height:s}},this.render=function(T,v){const x=v.projectionMatrix.elements[5]*a;v.view&&v.view.enabled?(d.style.transform=`translate( ${-v.view.offsetX*(e/v.view.width)}px, ${-v.view.offsetY*(s/v.view.height)}px )`,d.style.transform+=`scale( ${v.view.fullWidth/v.view.width}, ${v.view.fullHeight/v.view.height} )`):d.style.transform="",T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld();let D,N;v.isOrthographicCamera&&(D=-(v.right+v.left)/2,N=(v.top+v.bottom)/2);const A=v.view&&v.view.enabled?v.view.height/v.view.fullHeight:1,I=v.isOrthographicCamera?`scale( ${A} )scale(`+x+")translate("+p(D)+"px,"+p(N)+"px)"+g(v.matrixWorldInverse):`scale( ${A} )translateZ(`+x+"px)"+g(v.matrixWorldInverse),U=(v.isPerspectiveCamera?"perspective("+x+"px) ":"")+I+"translate("+r+"px,"+a+"px)";c.camera.style!==U&&(f.style.transform=U,c.camera.style=U),w(T,T,v)},this.setSize=function(T,v){e=T,s=v,r=e/2,a=s/2,h.style.width=T+"px",h.style.height=v+"px",d.style.width=T+"px",d.style.height=v+"px",f.style.width=T+"px",f.style.height=v+"px"};function p(T){return Math.abs(T)<1e-10?0:T}function g(T){const v=T.elements;return"matrix3d("+p(v[0])+","+p(-v[1])+","+p(v[2])+","+p(v[3])+","+p(v[4])+","+p(-v[5])+","+p(v[6])+","+p(v[7])+","+p(v[8])+","+p(-v[9])+","+p(v[10])+","+p(v[11])+","+p(v[12])+","+p(-v[13])+","+p(v[14])+","+p(v[15])+")"}function _(T){const v=T.elements;return"translate(-50%,-50%)"+("matrix3d("+p(v[0])+","+p(v[1])+","+p(v[2])+","+p(v[3])+","+p(-v[4])+","+p(-v[5])+","+p(-v[6])+","+p(-v[7])+","+p(v[8])+","+p(v[9])+","+p(v[10])+","+p(v[11])+","+p(v[12])+","+p(v[13])+","+p(v[14])+","+p(v[15])+")")}function M(T){T.isCSS3DObject&&(T.element.style.display="none");for(let v=0,x=T.children.length;v<x;v++)M(T.children[v])}function w(T,v,x,D){if(T.visible===!1){M(T);return}if(T.isCSS3DObject){const N=T.layers.test(x.layers)===!0,A=T.element;if(A.style.display=N===!0?"":"none",N===!0){T.onBeforeRender(t,v,x);let I;T.isCSS3DSprite?(tn.copy(x.matrixWorldInverse),tn.transpose(),T.rotation2D!==0&&tn.multiply(US.makeRotationZ(T.rotation2D)),T.matrixWorld.decompose(dd,NS,fd),tn.setPosition(dd),tn.scale(fd),tn.elements[3]=0,tn.elements[7]=0,tn.elements[11]=0,tn.elements[15]=1,I=_(tn)):I=_(T.matrixWorld);const P=c.objects.get(T);if(P===void 0||P.style!==I){A.style.transform=I;const U={style:I};c.objects.set(T,U)}A.parentNode!==f&&f.appendChild(A),T.onAfterRender(t,v,x)}}for(let N=0,A=T.children.length;N<A;N++)w(T.children[N],v,x)}}},kS=class{constructor(i){this.viewer=i,this.element=document.createElement("div"),this.element.className="psv-markers-css3d-container",this.renderer=new FS({element:this.element}),this.scene=new pc,this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(e=>{const s=e.target[Ne];s.config.visible&&(s.viewportIntersection=e.isIntersecting)})},{root:this.element}),i.addEventListener(ie.ReadyEvent.type,this,{once:!0}),i.addEventListener(ie.SizeUpdatedEvent.type,this),i.addEventListener(ie.RenderEvent.type,this)}handleEvent(i){switch(i.type){case ie.ReadyEvent.type:case ie.SizeUpdatedEvent.type:this.updateSize();break;case ie.RenderEvent.type:this.render();break}}destroy(){this.viewer.removeEventListener(ie.ReadyEvent.type,this),this.viewer.removeEventListener(ie.SizeUpdatedEvent.type,this),this.viewer.removeEventListener(ie.RenderEvent.type,this),this.intersectionObserver.disconnect()}updateSize(){const i=this.viewer.getSize();this.renderer.setSize(i.width,i.height)}render(){this.renderer.render(this.scene,this.viewer.renderer.camera)}addObject(i){this.scene.add(i.threeElement),this.intersectionObserver.observe(i.domElement)}removeObject(i){this.scene.remove(i.threeElement),this.intersectionObserver.unobserve(i.domElement)}},Qo=(i=>(i.image="image",i.html="html",i.element="element",i.imageLayer="imageLayer",i.videoLayer="videoLayer",i.elementLayer="elementLayer",i.polygon="polygon",i.polygonPixels="polygonPixels",i.polyline="polyline",i.polylinePixels="polylinePixels",i.square="square",i.rect="rect",i.circle="circle",i.ellipse="ellipse",i.path="path",i))(Qo||{});function Lc(i,t=!1){const e=[];if(Object.keys(Qo).forEach(s=>{i[s]&&e.push(s)}),e.length===0&&!t)throw new Zt(`missing marker content, either ${Object.keys(Qo).join(", ")}`);if(e.length>1)throw new Zt(`multiple marker content, either ${Object.keys(Qo).join(", ")}`);return e[0]}var $m=class{constructor(i,t,e){if(this.viewer=i,this.plugin=t,this.state={anchor:null,visible:!1,staticTooltip:!1,position:null,position2D:null,positions3D:null,size:null},!e.id)throw new Zt("missing marker id");this.type=Lc(e),this.createElement(),this.update(e)}get id(){return this.config.id}get data(){return this.config.data}get domElement(){return null}get threeElement(){return null}get video(){return null}destroy(){delete this.viewer,delete this.plugin,delete this.element,this.hideTooltip()}is3d(){return!1}isNormal(){return!1}isPoly(){return!1}isSvg(){return!1}isCss3d(){return!1}update(i){const t=Lc(i,!0);if(t!==void 0&&t!==this.type)throw new Zt(`cannot change marker ${i.id} type`);if(this.config=re.deepmerge(this.config,i),typeof this.config.tooltip=="string"&&(this.config.tooltip={content:this.config.tooltip}),this.config.tooltip&&!this.config.tooltip.trigger&&(this.config.tooltip.trigger="hover"),re.isNil(this.config.visible)&&(this.config.visible=!0),re.isNil(this.config.zIndex)&&(this.config.zIndex=1),re.isNil(this.config.opacity)&&(this.config.opacity=1),this.config.rotation){const e=this.config.rotation;typeof e=="object"?this.config.rotation={yaw:e.yaw?re.parseAngle(e.yaw,!0,!1):0,pitch:e.pitch?re.parseAngle(e.pitch,!0,!1):0,roll:e.roll?re.parseAngle(e.roll,!0,!1):0}:this.config.rotation={yaw:0,pitch:0,roll:re.parseAngle(e,!0,!1)}}else this.config.rotation={yaw:0,pitch:0,roll:0};this.state.anchor=re.parsePoint(this.config.anchor)}getListContent(){var i;return this.config.listContent?this.config.listContent:(i=this.config.tooltip)!=null&&i.content?this.config.tooltip.content:this.config.html?this.config.html:this.id}showTooltip(i,t,e=!1){var s;if(this.state.visible&&((s=this.config.tooltip)!=null&&s.content)&&this.state.position2D){const r={...this.config.tooltip,style:{pointerEvents:this.state.staticTooltip?"auto":"none"},data:this,top:0,left:0};if(this.isPoly()||this.is3d()||this.isCss3d())if(i||t){const a=re.getPosition(this.viewer.container);r.top=t-a.y+10,r.left=i-a.x,r.box={width:20,height:20}}else r.top=this.state.position2D.y,r.left=this.state.position2D.x;else{const a=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);let c=this.state.size.width,h=this.state.size.height;this.config.hoverScale&&!this.state.staticTooltip&&(c*=this.config.hoverScale.amount,h*=this.config.hoverScale.amount),r.top=a.y-h*this.state.anchor.y+h/2,r.left=a.x-c*this.state.anchor.x+c/2,r.box={width:c,height:h}}this.tooltip?e?this.tooltip.update(this.config.tooltip.content,r):this.tooltip.move(r):this.tooltip=this.viewer.createTooltip(r)}}hideTooltip(){this.tooltip&&(this.tooltip.hide(),this.tooltip=null)}},ah=class extends $m{get domElement(){return this.element}constructor(i,t,e){super(i,t,e)}afterCreateElement(){this.element[Ne]=this}destroy(){delete this.element[Ne],super.destroy()}update(i){super.update(i);const t=this.domElement;t.id=`psv-marker-${this.config.id}`,t.setAttribute("class","psv-marker"),this.state.visible&&t.classList.add("psv-marker--visible"),this.config.tooltip&&t.classList.add("psv-marker--has-tooltip"),this.config.content&&t.classList.add("psv-marker--has-content"),this.config.className&&re.addClasses(t,this.config.className),t.style.opacity=`${this.config.opacity}`,t.style.zIndex=`${30+this.config.zIndex}`,this.config.style&&Object.assign(t.style,this.config.style)}},ua=class extends ah{constructor(i,t,e){super(i,t,e)}afterCreateElement(){super.afterCreateElement(),this.domElement.addEventListener("transitionend",()=>{this.domElement.style.transition=""})}render({viewerPosition:i,zoomLevel:t,hoveringMarker:e}){this.__updateSize();const s=this.viewer.dataHelper.vector3ToViewerCoords(this.state.positions3D[0]);return s.x-=this.state.size.width*this.state.anchor.x,s.y-=this.state.size.height*this.state.anchor.y,this.state.positions3D[0].dot(this.viewer.state.direction)>0&&s.x+this.state.size.width>=0&&s.x-this.state.size.width<=this.viewer.state.size.width&&s.y+this.state.size.height>=0&&s.y-this.state.size.height<=this.viewer.state.size.height?(this.domElement.style.translate=`${s.x}px ${s.y}px 0px`,this.applyScale({zoomLevel:t,viewerPosition:i,mouseover:this===e}),s):null}update(i){if(super.update(i),!re.isExtendedPosition(this.config.position))throw new Zt(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(e){throw new Zt(`invalid marker ${this.id} position`,e)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const t=this.domElement;t.classList.add("psv-marker--normal"),this.config.scale&&Array.isArray(this.config.scale)&&(this.config.scale={zoom:this.config.scale}),typeof this.config.hoverScale=="boolean"?this.config.hoverScale=this.config.hoverScale?this.plugin.config.defaultHoverScale||Pc:null:typeof this.config.hoverScale=="number"?this.config.hoverScale={amount:this.config.hoverScale}:this.config.hoverScale||(this.config.hoverScale=this.plugin.config.defaultHoverScale),this.config.hoverScale&&(this.config.hoverScale={...this.plugin.config.defaultHoverScale,...this.config.hoverScale}),t.style.rotate=this.config.rotation.roll!==0?pe.radToDeg(this.config.rotation.roll)+"deg":null,t.style.transformOrigin=`${this.state.anchor.x*100}% ${this.state.anchor.y*100}%`}__updateSize(){if(!this.needsUpdateSize)return;const i=this.domElement,t=!this.state.visible||!this.state.size;if(t&&i.classList.add("psv-marker--transparent"),this.isSvg()){const e=i.firstElementChild.getBoundingClientRect();this.state.size={width:e.width,height:e.height}}else this.state.size={width:i.offsetWidth,height:i.offsetHeight};t&&i.classList.remove("psv-marker--transparent"),this.isSvg()&&(i.style.width=this.state.size.width+"px",i.style.height=this.state.size.height+"px"),this.type!=="element"&&(this.needsUpdateSize=!1)}applyScale({zoomLevel:i,viewerPosition:t,mouseover:e}){e!==null&&this.config.hoverScale&&(this.domElement.style.transition=`scale ${this.config.hoverScale.duration}ms ${this.config.hoverScale.easing}`);let s=1;if(typeof this.config.scale=="function")s=this.config.scale(i,t);else if(this.config.scale){if(Array.isArray(this.config.scale.zoom)){const[r,a]=this.config.scale.zoom;s*=r+(a-r)*Zr.EASINGS.inQuad(i/100)}if(Array.isArray(this.config.scale.yaw)){const[r,a]=this.config.scale.yaw,c=pe.degToRad(this.viewer.state.hFov)/2,h=Math.abs(re.getShortestArc(this.state.position.yaw,t.yaw));s*=a+(r-a)*Zr.EASINGS.outQuad(Math.max(0,(c-h)/c))}}e&&this.config.hoverScale&&(s*=this.config.hoverScale.amount),this.domElement.style.scale=`${s}`}},BS=`// https://www.8thwall.com/playground/chromakey-threejs

uniform sampler2D map;
uniform float alpha;
uniform bool keying;
uniform vec3 color;
uniform float similarity;
uniform float smoothness;
uniform float spill;

varying vec2 vUv;

vec2 RGBtoUV(vec3 rgb) {
    return vec2(
        rgb.r * -0.169 + rgb.g * -0.331 + rgb.b *  0.5    + 0.5,
        rgb.r *  0.5   + rgb.g * -0.419 + rgb.b * -0.081  + 0.5
    );
}

void main(void) {
    gl_FragColor = texture2D(map, vUv);

    if (keying) {
        float chromaDist = distance(RGBtoUV(gl_FragColor.rgb), RGBtoUV(color));

        float baseMask = chromaDist - similarity;
        float fullMask = pow(clamp(baseMask / smoothness, 0., 1.), 1.5);
        gl_FragColor.a *= fullMask * alpha;

        float spillVal = pow(clamp(baseMask / spill, 0., 1.), 1.5);
        float desat = clamp(gl_FragColor.r * 0.2126 + gl_FragColor.g * 0.7152 + gl_FragColor.b * 0.0722, 0., 1.);
        gl_FragColor.rgb = mix(vec3(desat, desat, desat), gl_FragColor.rgb, spillVal);
    } else {
        gl_FragColor.a *= alpha;
    }
}
`,zS=`varying vec2 vUv;
uniform vec2 repeat;
uniform vec2 offset;

void main() {
    vUv = uv * repeat + offset;
    gl_Position = projectionMatrix *  modelViewMatrix * vec4( position, 1.0 );
}
`,HS=class extends Ni{get map(){return this.uniforms.map.value}set map(i){this.uniforms.map.value=i}set alpha(i){this.uniforms.alpha.value=i}get offset(){return this.uniforms.offset.value}get repeat(){return this.uniforms.repeat.value}set chromaKey(i){this.uniforms.keying.value=(i==null?void 0:i.enabled)===!0,i!=null&&i.enabled&&(typeof i.color=="object"&&"r"in i.color?this.uniforms.color.value.set(i.color.r/255,i.color.g/255,i.color.b/255):this.uniforms.color.value.set(i.color??65280),this.uniforms.similarity.value=i.similarity??.2,this.uniforms.smoothness.value=i.smoothness??.2)}constructor(i){super({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{map:{value:i==null?void 0:i.map},repeat:{value:new he(1,1)},offset:{value:new he(0,0)},alpha:{value:(i==null?void 0:i.alpha)??1},keying:{value:!1},color:{value:new xe(65280)},similarity:{value:.2},smoothness:{value:.2},spill:{value:.1}},vertexShader:zS,fragmentShader:BS}),this.chromaKey=i==null?void 0:i.chromaKey}};function VS({src:i,withCredentials:t,muted:e,autoplay:s}){const r=document.createElement("video");return r.crossOrigin=t?"use-credentials":"anonymous",r.loop=!0,r.playsInline=!0,r.autoplay=s,r.muted=e,r.preload="metadata",i instanceof MediaStream?r.srcObject=i:r.src=i,r}function GS(i,t,e){const[s,r]=i,[a,c]=t,h=re.greatArcDistance(i,t),d=Math.sin((1-e)*h)/Math.sin(h),f=Math.sin(e*h)/Math.sin(h),p=d*Math.cos(r)*Math.cos(s)+f*Math.cos(c)*Math.cos(a),g=d*Math.cos(r)*Math.sin(s)+f*Math.cos(c)*Math.sin(a),_=d*Math.sin(r)+f*Math.sin(c);return[Math.atan2(g,p),Math.atan2(_,Math.sqrt(p*p+g*g))]}function WS(i){const t=[i[0]];let e=0;for(let s=1;s<i.length;s++){const r=i[s-1][0]-i[s][0];r>Math.PI?e+=1:r<-Math.PI&&(e-=1),t.push([i[s][0]+e*2*Math.PI,i[s][1]])}return t}function Km(i){return i.reduce((t,e)=>t.add(e),new G).normalize()}function XS(i){const t=WS(i);let e=0;const s=[];for(let a=0;a<t.length-1;a++){const c=re.greatArcDistance(t[a],t[a+1])*Zr.SPHERE_RADIUS;s.push(c),e+=c}let r=0;for(let a=0;a<t.length-1;a++){if(r+s[a]>e/2){const c=(e/2-r)/s[a];return GS(t[a],t[a+1],c)}r+=s[a]}return t[Math.round(t.length/2)]}var Wo=new G,pd=new G,Tl=new G,md=new G,_d=new G,gd=new G;function ZS(i,t,e){Wo.copy(e).normalize(),pd.crossVectors(i,t).normalize(),Tl.crossVectors(pd,i).normalize(),md.copy(i).multiplyScalar(-Wo.dot(Tl)),_d.copy(Tl).multiplyScalar(Wo.dot(i));const s=new G().addVectors(md,_d).normalize();return gd.crossVectors(s,Wo),s.applyAxisAngle(gd,.01).multiplyScalar(Zr.SPHERE_RADIUS)}var qS=class extends $m{get threeElement(){return this.element}get threeMesh(){return this.threeElement.children[0]}get video(){return this.type==="videoLayer"?this.threeMesh.material.map.image:null}constructor(i,t,e){super(i,t,e)}is3d(){return!0}createElement(){const i=new HS({alpha:0}),t=new Jr(1,1),e=new _i(t,i);e.userData={[Ne]:this},Object.defineProperty(e,"visible",{enumerable:!0,get:function(){return this.userData[Ne].config.visible},set:function(s){this.userData[Ne].config.visible=s}}),this.element=new cs().add(e),this.type==="videoLayer"&&this.viewer.needsContinuousUpdate(!0)}destroy(){delete this.threeMesh.userData[Ne],this.type==="videoLayer"&&(this.video.pause(),this.viewer.needsContinuousUpdate(!1)),super.destroy()}render(){return this.viewer.renderer.isObjectVisible(this.threeMesh)?this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position):null}update(i){var r,a,c;super.update(i);const t=this.threeMesh,e=t.parent,s=t.material;if(re.isExtendedPosition(this.config.position)){try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(d){throw new Zt(`invalid marker ${this.id} position`,d)}if(!this.config.size)throw new Zt(`missing marker ${this.id} size`);this.state.size=this.config.size,t.scale.set(this.config.size.width/100,this.config.size.height/100,1),t.position.set(t.scale.x*(.5-this.state.anchor.x),t.scale.y*(this.state.anchor.y-.5),0),t.rotation.set(0,0,0),this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position,e.position),e.lookAt(0,e.position.y,0),t.rotateY(-this.config.rotation.yaw),t.rotateX(-this.config.rotation.pitch),t.rotateZ(-this.config.rotation.roll);const h=t.geometry.getAttribute("position");this.state.positions3D=[0,1,3,2].map(d=>{const f=new G;return f.fromBufferAttribute(h,d),t.localToWorld(f)})}else{if(((r=this.config.position)==null?void 0:r.length)!==4)throw new Zt(`missing marker ${this.id} position`);let h;try{h=this.config.position.map(g=>this.viewer.dataHelper.cleanPosition(g))}catch(g){throw new Zt(`invalid marker ${this.id} position`,g)}const d=h.map(g=>this.viewer.dataHelper.sphericalCoordsToVector3(g)),f=Km(d);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(f),this.state.positions3D=d;const p=t.geometry.getAttribute("position");[d[0],d[1],d[3],d[2]].forEach((g,_)=>{p.setX(_,g.x),p.setY(_,g.y),p.setZ(_,g.z)}),p.needsUpdate=!0,this.__setTextureWrap(s)}switch(this.type){case"videoLayer":if(this.definition!==this.config.videoLayer){(a=s.map)==null||a.dispose();const h=VS({src:this.config.videoLayer,withCredentials:this.viewer.config.withCredentials(this.config.videoLayer),muted:!0,autoplay:this.config.autoplay??!0}),d=new Sv(h);s.map=d,s.alpha=0,h.addEventListener("loadedmetadata",()=>{this.viewer&&(s.alpha=this.config.opacity,re.isExtendedPosition(this.config.position)||(t.material.userData[Ne]={width:h.videoWidth,height:h.videoHeight},this.__setTextureWrap(s)))},{once:!0}),h.autoplay&&h.play(),this.definition=this.config.videoLayer}else s.alpha=this.config.opacity;break;case"imageLayer":if(this.definition!==this.config.imageLayer){(c=s.map)==null||c.dispose();const h=new Qe;s.map=h,s.alpha=0,this.viewer.textureLoader.loadImage(this.config.imageLayer).then(d=>{this.viewer&&(re.isExtendedPosition(this.config.position)||(t.material.userData[Ne]={width:d.width,height:d.height},this.__setTextureWrap(s)),h.image=d,h.anisotropy=4,h.needsUpdate=!0,s.alpha=this.config.opacity,this.viewer.needsUpdate())}),this.definition=this.config.imageLayer}else s.alpha=this.config.opacity;break}s.chromaKey=this.config.chromaKey,t.renderOrder=1e3+this.config.zIndex,t.geometry.boundingBox=null}__setTextureWrap(i){const t=i.userData[Ne];if(!t||!t.height||!t.width){i.repeat.set(1,1),i.offset.set(0,0);return}const e=this.config.position.map(g=>this.viewer.dataHelper.cleanPosition(g)),s=re.greatArcDistance([e[0].yaw,e[0].pitch],[e[1].yaw,e[1].pitch]),r=re.greatArcDistance([e[3].yaw,e[3].pitch],[e[2].yaw,e[2].pitch]),a=re.greatArcDistance([e[1].yaw,e[1].pitch],[e[2].yaw,e[2].pitch]),c=re.greatArcDistance([e[0].yaw,e[0].pitch],[e[3].yaw,e[3].pitch]),h=(s+r)/(a+c),d=t.width/t.height;let f=0,p=0;h<d?f=d-h:p=1/d-1/h,i.repeat.set(1-f,1-p),i.offset.set(f/2,p/2)}},YS=class extends ah{constructor(i,t,e){super(i,t,e),this.viewportIntersection=!1}get threeElement(){return this.object}isCss3d(){return!0}createElement(){this.element=document.createElement("div"),this.object=new OS(this.element),this.object.userData={[Ne]:this},Object.defineProperty(this.object,"visible",{enumerable:!0,get:function(){return this.userData[Ne].config.visible},set:function(i){this.userData[Ne].config.visible=i}}),this.afterCreateElement()}destroy(){delete this.object.userData[Ne],delete this.object,super.destroy()}render({viewerPosition:i,zoomLevel:t}){var r,a;const e=this.domElement;if(this.state.size={width:e.offsetWidth,height:e.offsetHeight},this.state.positions3D[0].dot(this.viewer.state.direction)>0&&this.viewportIntersection){const c=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position);return(a=(r=this.config.elementLayer).updateMarker)==null||a.call(r,{marker:this,position:c,viewerPosition:i,zoomLevel:t,viewerSize:this.viewer.state.size}),c}else return null}update(i){if(super.update(i),!re.isExtendedPosition(this.config.position))throw new Zt(`missing marker ${this.id} position`);try{this.state.position=this.viewer.dataHelper.cleanPosition(this.config.position)}catch(s){throw new Zt(`invalid marker ${this.id} position`,s)}this.state.positions3D=[this.viewer.dataHelper.sphericalCoordsToVector3(this.state.position)];const t=this.threeElement,e=this.domElement;e.classList.add("psv-marker--css3d"),e.childNodes.forEach(s=>s.remove()),e.appendChild(this.config.elementLayer),this.config.elementLayer.style.display="block",t.position.copy(this.state.positions3D[0]).multiplyScalar(100),t.lookAt(0,this.state.positions3D[0].y*100,0),t.rotateY(-this.config.rotation.yaw),t.rotateX(-this.config.rotation.pitch),t.rotateZ(-this.config.rotation.roll)}},$S=class extends ua{constructor(i,t,e){super(i,t,e)}isNormal(){return!0}createElement(){this.element=document.createElement("div"),this.afterCreateElement()}render(i){var e,s;const t=super.render(i);return t&&this.type==="element"&&((s=(e=this.config.element).updateMarker)==null||s.call(e,{marker:this,position:t,viewerPosition:i.viewerPosition,zoomLevel:i.zoomLevel,viewerSize:this.viewer.state.size})),t}update(i){super.update(i);const t=this.domElement;if(this.config.image&&!this.config.size)throw new Zt(`missing marker ${this.id} size`);switch(this.config.size?(this.needsUpdateSize=!1,this.state.size=this.config.size,t.style.width=this.config.size.width+"px",t.style.height=this.config.size.height+"px"):this.needsUpdateSize=!0,this.type){case"image":this.definition=this.config.image,t.style.backgroundImage=`url("${this.config.image}")`;break;case"html":this.definition=this.config.html,t.innerHTML=this.config.html;break;case"element":this.definition!==this.config.element&&(this.definition=this.config.element,t.childNodes.forEach(e=>e.remove()),t.appendChild(this.config.element),this.config.element.style.display="block");break}}},KS=class extends ah{constructor(i,t,e){super(i,t,e)}createElement(){this.element=document.createElementNS(ha,"path"),this.element[Ne]=this}isPoly(){return!0}get isPixels(){return this.type==="polygonPixels"||this.type==="polylinePixels"}get isPolygon(){return this.type==="polygon"||this.type==="polygonPixels"}get isPolyline(){return this.type==="polyline"||this.type==="polylinePixels"}get coords(){return this.definition}render(){const i=this.__getAllPolyPositions();if(i[0].length>(this.isPolygon?2:1)){const e=this.viewer.dataHelper.sphericalCoordsToViewerCoords(this.state.position),s=i.filter(r=>r.length>0).map(r=>{let a="M";return a+=r.map(c=>`${c.x-e.x},${c.y-e.y}`).join("L"),this.isPolygon&&(a+="Z"),a}).join(" ");return this.domElement.setAttributeNS(null,"d",s),this.domElement.setAttributeNS(null,"transform",`translate(${e.x} ${e.y})`),e}else return null}update(i){super.update(i);const t=this.domElement;t.classList.add("psv-marker--poly"),this.config.svgStyle?(Object.entries(this.config.svgStyle).forEach(([e,s])=>{t.setAttributeNS(null,re.dasherize(e),s)}),this.isPolyline&&!this.config.svgStyle.fill&&t.setAttributeNS(null,"fill","none")):this.isPolygon?t.setAttributeNS(null,"fill","rgba(0,0,0,0.5)"):this.isPolyline&&(t.setAttributeNS(null,"fill","none"),t.setAttributeNS(null,"stroke","rgb(0,0,0)"));try{let e=this.config[this.type];if(!Array.isArray(e[0])&&typeof e[0]!="object")for(let s=0;s<e.length;s++)e.splice(s,2,[e[s],e[s+1]]);if(!Array.isArray(e[0][0])&&typeof e[0][0]!="object"&&(e=[e]),this.isPolyline&&e.length>1)throw new Zt("polylines cannot have holes");this.isPixels?this.definition=e.map(s=>s.map(r=>{let a;return re.isExtendedPosition(r)?a=this.viewer.dataHelper.cleanPosition(r):a=this.viewer.dataHelper.textureCoordsToSphericalCoords({textureX:r[0],textureY:r[1]}),[a.yaw,a.pitch]})):this.definition=e.map(s=>s.map(r=>{let a;return re.isExtendedPosition(r)?a=this.viewer.dataHelper.cleanPosition(r):a=this.viewer.dataHelper.cleanPosition({yaw:r[0],pitch:r[1]}),[a.yaw,a.pitch]}))}catch(e){throw new Zt(`invalid marker ${this.id} position`,e)}if(this.positions3D=this.coords.map(e=>e.map(s=>this.viewer.dataHelper.sphericalCoordsToVector3({yaw:s[0],pitch:s[1]}))),this.isPolygon){const e=Km(this.positions3D[0]);this.state.position=this.viewer.dataHelper.vector3ToSphericalCoords(e)}else{const e=XS(this.coords[0]);this.state.position={yaw:e[0],pitch:e[1]}}this.state.positions3D=this.positions3D[0]}__getAllPolyPositions(){return this.positions3D.map(i=>this.__getPolyPositions(i))}__getPolyPositions(i){const t=i.length,e=i.map(r=>({vector:r,visible:r.dot(this.viewer.state.direction)>0})),s=[];return e.forEach((r,a)=>{r.visible||[a===0?e[t-1]:e[a-1],a===t-1?e[0]:e[a+1]].forEach(h=>{h.visible&&s.push({visible:h.vector,invisible:r.vector,index:a})})}),s.reverse().forEach(r=>{e.splice(r.index,0,{vector:ZS(r.visible,r.invisible,this.viewer.state.direction),visible:!0})}),e.filter(r=>r.visible).map(r=>this.viewer.dataHelper.vector3ToViewerCoords(r.vector))}},JS=class extends ua{get svgElement(){return this.domElement.firstElementChild}constructor(i,t,e){super(i,t,e)}isSvg(){return!0}createElement(){const i=this.type==="square"?"rect":this.type,t=document.createElementNS(ha,i);this.element=document.createElementNS(ha,"svg"),this.element.appendChild(t),this.afterCreateElement()}update(i){super.update(i);const t=this.svgElement;switch(this.needsUpdateSize=!0,this.type){case"square":this.definition={x:0,y:0,width:this.config.square,height:this.config.square};break;case"rect":Array.isArray(this.config.rect)?this.definition={x:0,y:0,width:this.config.rect[0],height:this.config.rect[1]}:this.definition={x:0,y:0,width:this.config.rect.width,height:this.config.rect.height};break;case"circle":this.definition={cx:this.config.circle,cy:this.config.circle,r:this.config.circle};break;case"ellipse":Array.isArray(this.config.ellipse)?this.definition={cx:this.config.ellipse[0],cy:this.config.ellipse[1],rx:this.config.ellipse[0],ry:this.config.ellipse[1]}:this.definition={cx:this.config.ellipse.rx,cy:this.config.ellipse.ry,rx:this.config.ellipse.rx,ry:this.config.ellipse.ry};break;case"path":this.definition={d:this.config.path};break}Object.entries(this.definition).forEach(([e,s])=>{t.setAttributeNS(null,e,s)}),this.config.svgStyle?Object.entries(this.config.svgStyle).forEach(([e,s])=>{t.setAttributeNS(null,re.dasherize(e),s)}):t.setAttributeNS(null,"fill","rgba(0,0,0,0.5)")}},jS=re.getConfigParser({clickEventOnMarker:!1,gotoMarkerSpeed:"8rpm",markers:null,defaultHoverScale:null},{defaultHoverScale(i){return i?(i===!0&&(i=Pc),typeof i=="number"&&(i={amount:i}),{...Pc,...i}):null}});function QS(i){switch(Lc(i,!1)){case"image":case"html":case"element":return $S;case"imageLayer":case"videoLayer":return qS;case"elementLayer":return YS;case"polygon":case"polyline":case"polygonPixels":case"polylinePixels":return KS;case"square":case"rect":case"circle":case"ellipse":case"path":return JS;default:throw new Zt("invalid marker type")}}var eo=class Jm extends _m{constructor(t,e){super(t,e),this.markers={},this.state={allVisible:!0,showAllTooltips:!1,currentMarker:null,hoveringMarker:null,needsReRender:!1,lastClientX:null,lastClientY:null},this.container=document.createElement("div"),this.container.className="psv-markers",this.viewer.container.appendChild(this.container),this.container.addEventListener("contextmenu",s=>s.preventDefault()),this.svgContainer=document.createElementNS(ha,"svg"),this.svgContainer.setAttribute("class","psv-markers-svg-container"),this.container.appendChild(this.svgContainer),this.css3DContainer=new kS(t),this.container.appendChild(this.css3DContainer.element),this.container.addEventListener("mouseenter",this,!0),this.container.addEventListener("mouseleave",this,!0),this.container.addEventListener("mousemove",this,!0)}static withConfig(t){return[Jm,t]}init(){super.init(),re.checkStylesheet(this.viewer.container,"markers-plugin"),this.viewer.addEventListener(ie.ClickEvent.type,this),this.viewer.addEventListener(ie.DoubleClickEvent.type,this),this.viewer.addEventListener(ie.RenderEvent.type,this),this.viewer.addEventListener(ie.ConfigChangedEvent.type,this),this.viewer.addEventListener(ie.ObjectEnterEvent.type,this),this.viewer.addEventListener(ie.ObjectHoverEvent.type,this),this.viewer.addEventListener(ie.ObjectLeaveEvent.type,this),this.viewer.addEventListener(ie.ReadyEvent.type,this,{once:!0})}destroy(){this.clearMarkers(!1),this.viewer.unobserveObjects(Ne),this.viewer.removeEventListener(ie.ClickEvent.type,this),this.viewer.removeEventListener(ie.DoubleClickEvent.type,this),this.viewer.removeEventListener(ie.RenderEvent.type,this),this.viewer.removeEventListener(ie.ObjectEnterEvent.type,this),this.viewer.removeEventListener(ie.ObjectHoverEvent.type,this),this.viewer.removeEventListener(ie.ObjectLeaveEvent.type,this),this.viewer.removeEventListener(ie.ReadyEvent.type,this),this.css3DContainer.destroy(),this.viewer.container.removeChild(this.container),super.destroy()}handleEvent(t){var e;switch(t.type){case ie.ReadyEvent.type:this.config.markers&&(this.setMarkers(this.config.markers),delete this.config.markers);break;case ie.RenderEvent.type:this.renderMarkers();break;case ie.ClickEvent.type:this.__onClick(t,!1);break;case ie.DoubleClickEvent.type:this.__onClick(t,!0);break;case ie.ObjectEnterEvent.type:case ie.ObjectLeaveEvent.type:case ie.ObjectHoverEvent.type:if(t.userDataKey===Ne){const s=t.originalEvent,r=t.object.userData[Ne];switch(t.type){case ie.ObjectEnterEvent.type:(e=r.config.style)!=null&&e.cursor?this.viewer.setCursor(r.config.style.cursor):(r.config.tooltip||r.config.content)&&this.viewer.setCursor("pointer"),this.__onEnterMarker(s,r);break;case ie.ObjectLeaveEvent.type:this.viewer.setCursor(null),this.__onLeaveMarker(r);break;case ie.ObjectHoverEvent.type:this.__onHoverMarker(s,r);break}}break;case"mouseenter":{const s=this.__getTargetMarker(re.getEventTarget(t));this.__onEnterMarker(t,s);break}case"mouseleave":{const s=this.__getTargetMarker(re.getEventTarget(t));this.__onLeaveMarker(s);break}case"mousemove":{const s=this.__getTargetMarker(re.getEventTarget(t),!0);this.__onHoverMarker(t,s);break}}}toggleAllMarkers(){this.state.allVisible?this.hideAllMarkers():this.showAllMarkers()}showAllMarkers(){this.state.allVisible=!0,Object.values(this.markers).forEach(t=>{t.config.visible=!0}),this.renderMarkers(),this.dispatchEvent(new zr)}hideAllMarkers(){this.state.allVisible=!1,Object.values(this.markers).forEach(t=>{t.config.visible=!1}),this.renderMarkers(),this.dispatchEvent(new Br)}toggleAllTooltips(){this.state.showAllTooltips?this.hideAllTooltips():this.showAllTooltips()}showAllTooltips(){this.state.showAllTooltips=!0,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!0,t.showTooltip()})}hideAllTooltips(){this.state.showAllTooltips=!1,Object.values(this.markers).forEach(t=>{t.state.staticTooltip=!1,t.hideTooltip()})}getNbMarkers(){return Object.keys(this.markers).length}getMarkers(){return Object.values(this.markers)}addMarker(t,e=!0){if(this.markers[t.id])throw new Zt(`marker "${t.id}" already exists`);const s=new(QS(t))(this.viewer,this,t);s.isPoly()?this.svgContainer.appendChild(s.domElement):s.isCss3d()?this.css3DContainer.addObject(s):s.is3d()?this.viewer.renderer.addObject(s.threeElement):this.container.appendChild(s.domElement),this.markers[s.id]=s,this.state.showAllTooltips&&(s.state.staticTooltip=!0),e&&this.__afterChangeMarkers()}getMarker(t){const e=typeof t=="object"?t.id:t;if(!this.markers[e])throw new Zt(`cannot find marker "${e}"`);return this.markers[e]}getCurrentMarker(){return this.state.currentMarker}updateMarker(t,e=!0){var r;const s=this.getMarker(t.id);s.update(t),e&&(this.__afterChangeMarkers(),(s===this.state.hoveringMarker&&((r=s.config.tooltip)==null?void 0:r.trigger)==="hover"||s.state.staticTooltip)&&s.showTooltip(this.state.lastClientX,this.state.lastClientY,!0))}removeMarker(t,e=!0){const s=this.getMarker(t);s.isPoly()?this.svgContainer.removeChild(s.domElement):s.isCss3d()?this.css3DContainer.removeObject(s):s.is3d()?this.viewer.renderer.removeObject(s.threeElement):this.container.removeChild(s.domElement),this.state.hoveringMarker===s&&(this.state.hoveringMarker=null),this.state.currentMarker===s&&(this.state.currentMarker=null),s.destroy(),delete this.markers[s.id],e&&this.__afterChangeMarkers()}removeMarkers(t,e=!0){t.forEach(s=>this.removeMarker(s,!1)),e&&this.__afterChangeMarkers()}setMarkers(t,e=!0){this.clearMarkers(!1),t==null||t.forEach(s=>{this.addMarker(s,!1)}),e&&this.__afterChangeMarkers()}clearMarkers(t=!0){Object.keys(this.markers).forEach(e=>{this.removeMarker(e,!1)}),t&&this.__afterChangeMarkers()}gotoMarker(t,e=this.config.gotoMarkerSpeed){const s=this.getMarker(t);return e?this.viewer.animate({...s.state.position,zoom:s.config.zoomLvl,speed:e}).then(()=>{this.dispatchEvent(new Cc(s))}):(this.viewer.rotate(s.state.position),re.isNil(s.config.zoomLvl)||this.viewer.zoom(s.config.zoomLvl),this.dispatchEvent(new Cc(s)),Promise.resolve())}hideMarker(t){this.toggleMarker(t,!1)}showMarker(t){this.toggleMarker(t,!0)}showMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!0,e.showTooltip()}hideMarkerTooltip(t){const e=this.getMarker(t);e.state.staticTooltip=!1,e.hideTooltip()}toggleMarker(t,e){const s=this.getMarker(t);s.config.visible=re.isNil(e)?!s.config.visible:e,this.renderMarkers()}showMarkerPanel(t){const e=this.getMarker(t);e.config.content?this.viewer.panel.show({id:Er,content:e.config.content}):this.hideMarkerPanel()}hideMarkerPanel(){this.viewer.panel.hide(Er)}toggleMarkersList(){this.viewer.panel.isVisible(Ws)?this.hideMarkersList():this.showMarkersList()}showMarkersList(){let t=[];Object.values(this.markers).forEach(s=>{s.config.visible&&!s.config.hideList&&t.push(s)});const e=new qm(t);this.dispatchEvent(e),t=e.markers,this.viewer.panel.show({id:Ws,content:DS(t,this.viewer.config.lang[Yr.id]),noMargin:!0,clickHandler:s=>{const r=re.getClosest(s,".psv-panel-menu-item"),a=r?r.dataset[Ne]:void 0;if(a){const c=this.getMarker(a);this.dispatchEvent(new Nm(c)),this.gotoMarker(c.id),this.hideMarkersList()}}})}hideMarkersList(){this.viewer.panel.hide(Ws)}renderMarkers(){if(this.state.needsReRender){this.state.needsReRender=!1;return}const t=this.viewer.getZoomLevel(),e=this.viewer.getPosition(),s=this.state.hoveringMarker;Object.values(this.markers).forEach(r=>{let a=r.config.visible,c=null;a&&(c=r.render({viewerPosition:e,zoomLevel:t,hoveringMarker:s}),a=!!c);const h=r.state.visible!==a;r.state.visible=a,r.state.position2D=c,r.domElement&&re.toggleClass(r.domElement,"psv-marker--visible",a),a?r.state.staticTooltip?r.showTooltip():r!==this.state.hoveringMarker&&r.hideTooltip():r.hideTooltip(),h&&(this.dispatchEvent(new ym(r,a)),(r.is3d()||r.isCss3d())&&(this.state.needsReRender=!0))}),this.state.needsReRender&&this.viewer.needsUpdate()}__getTargetMarker(t,e=!1){if(t instanceof Node){const s=e?re.getClosest(t,".psv-marker"):t;return s?s[Ne]:void 0}else return Array.isArray(t)?t.map(s=>s.userData[Ne]).filter(s=>!!s).sort((s,r)=>r.config.zIndex-s.config.zIndex)[0]:null}__onEnterMarker(t,e){var s;e&&(this.state.hoveringMarker=e,this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,this.dispatchEvent(new Cm(e)),e instanceof ua&&e.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!0}),!e.state.staticTooltip&&((s=e.config.tooltip)==null?void 0:s.trigger)==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onLeaveMarker(t){var e;t&&(this.dispatchEvent(new bm(t)),t instanceof ua&&t.applyScale({zoomLevel:this.viewer.getZoomLevel(),viewerPosition:this.viewer.getPosition(),mouseover:!1}),this.state.hoveringMarker=null,!t.state.staticTooltip&&((e=t.config.tooltip)==null?void 0:e.trigger)==="hover"?t.hideTooltip():t.state.staticTooltip&&t.showTooltip())}__onHoverMarker(t,e){var s;e&&(this.state.lastClientX=t.clientX,this.state.lastClientY=t.clientY,(e.isPoly()||e.is3d()||e.isCss3d())&&((s=e.config.tooltip)==null?void 0:s.trigger)==="hover"&&e.showTooltip(t.clientX,t.clientY))}__onClick(t,e){var c,h;const s=this.__getTargetMarker(t.data.objects),a=this.__getTargetMarker(t.data.target,!0)||s;this.state.currentMarker&&this.state.currentMarker!==a&&(this.dispatchEvent(new Fm(this.state.currentMarker)),this.viewer.panel.hide(Er),!this.state.showAllTooltips&&((c=this.state.currentMarker.config.tooltip)==null?void 0:c.trigger)==="click"&&this.hideMarkerTooltip(this.state.currentMarker.id),this.state.currentMarker=null),a&&(this.state.currentMarker=a,this.dispatchEvent(new Rm(a,e,t.data.rightclick)),this.config.clickEventOnMarker?t.data.marker=a:t.stopImmediatePropagation(),this.markers[a.id]&&!t.data.rightclick&&(((h=a.config.tooltip)==null?void 0:h.trigger)==="click"?a.tooltip?this.hideMarkerTooltip(a.id):this.showMarkerTooltip(a.id):this.showMarkerPanel(a.id)))}__afterChangeMarkers(){this.__refreshUi(),this.__checkObjectsObserver(),this.viewer.needsUpdate(),this.dispatchEvent(new Vm(this.getMarkers()))}__refreshUi(){var e,s;const t=Object.values(this.markers).filter(r=>!r.config.hideList).length;t===0?(this.viewer.panel.hide(Er),this.viewer.panel.hide(Ws)):this.viewer.panel.isVisible(Ws)?this.showMarkersList():this.viewer.panel.isVisible(Er)&&(this.state.currentMarker?this.showMarkerPanel(this.state.currentMarker.id):this.viewer.panel.hide()),(e=this.viewer.navbar.getButton(Yr.id,!1))==null||e.toggle(t>0),(s=this.viewer.navbar.getButton(Ta.id,!1))==null||s.toggle(t>0)}__checkObjectsObserver(){Object.values(this.markers).some(e=>e.is3d())?this.viewer.observeObjects(Ne):this.viewer.unobserveObjects(Ne)}};eo.id="markers";eo.VERSION="5.15.1";eo.configParser=jS;eo.readonlyOptions=["markers"];var vd=eo;Pn.lang[Yr.id]="Markers";Pn.lang[Ta.id]="Markers list";oh(Yr,"caption:left");oh(Ta,"caption:left");const jm={CRITICAL:"#EF4444",HIGH:"#F97316",MEDIUM:"#F59E0B",LOW:"#0EA5E9"},Rc={ARCHITECTURAL:"📐",STRUCTURAL:"🏗️",MEP:"⚡",HEALTH_AND_SAFETY:"⚠️"};class tw{constructor(t,e={}){this.container=t,this.fallbackPanorama=e.fallbackPanorama||"./assets/sample_node_1.jpg",this.onSnagSelect=e.onSnagSelect||(()=>{}),this.viewer=null,this.markersPlugin=null,this.currentNode=null,this.inspectorEl=null,this.initViewer(),this.createInspectorOverlay()}initViewer(){this.viewer=new AS({container:this.container,panorama:this.fallbackPanorama,plugins:[[vd,{}]],navbar:["zoom","move","caption","fullscreen"],defaultZoomLvl:45,minFov:30,maxFov:90,mousewheel:!0,mousemove:!0}),this.markersPlugin=this.viewer.getPlugin(vd),this.markersPlugin.addEventListener("select-marker",({marker:t})=>{const e=t.data;e&&(this.showInspector(e),this.onSnagSelect(e))}),this.viewer.addEventListener("click",()=>{this.hideInspector()})}async setNode(t,e=null){if(!t)return;if(this.hideInspector(),e&&e.id!==t.id){const r=eg(e,t);try{await this.viewer.animate({yaw:r,pitch:0,speed:"800ms"})}catch{}}const s=t.panorama_url||this.fallbackPanorama;try{await this.viewer.setPanorama(s,{transition:{effect:"fade",speed:1e3},showLoader:!1})}catch(r){console.warn("[MatterportViewer] Failed to load panorama from",s,"Trying fallback:",r);try{await this.viewer.setPanorama(this.fallbackPanorama,{transition:{effect:"fade",speed:800},showLoader:!1})}catch(a){console.error("[MatterportViewer] Critical fallback panorama error:",a)}}this.currentNode=t,this.renderSnagMarkers(t.snags||[])}renderSnagMarkers(t){if(!this.markersPlugin)return;this.markersPlugin.clearMarkers();const e=t.map(s=>{const{yaw:r,pitch:a}=qa(s.yaw,s.pitch),c=jm[s.severity]||"#F59E0B",h=Rc[s.discipline]||"📌",d=this.escapeHtml(s.title);return{id:`snag-marker-${s.id}`,position:{yaw:r,pitch:a},html:`
          <div class="snag-hotspot severity-${s.severity.toLowerCase()}" style="--hotspot-color: ${c}">
            <div class="snag-pulse"></div>
            <div class="snag-icon-wrapper">
              <span class="snag-icon">${h}</span>
            </div>
            <div class="snag-tag-pill">${s.severity}</div>
          </div>
        `,size:{width:38,height:38},anchor:"center center",tooltip:{content:`<div class="marker-tooltip"><strong>[${s.severity}]</strong> ${d}</div>`,position:"top center",trigger:"hover"},data:s}});this.markersPlugin.setMarkers(e)}async jumpToSnag(t,e,s=null){const{yaw:r,pitch:a}=qa(t,e);try{await this.viewer.animate({yaw:r,pitch:a,speed:"1000ms"}),s&&this.showInspector(s)}catch(c){console.warn("[MatterportViewer] jumpToSnag animation interrupted:",c)}}createInspectorOverlay(){const t=document.createElement("div");t.className="snag-inspector-overlay hidden",t.innerHTML=`
      <div class="inspector-card">
        <div class="inspector-header">
          <div class="badge-cluster">
            <span id="insp-severity" class="badge-severity">CRITICAL</span>
            <span id="insp-discipline" class="badge-discipline">MEP</span>
            <span id="insp-status" class="badge-status">OPEN</span>
          </div>
          <button type="button" class="inspector-close-btn" aria-label="Close inspector">&times;</button>
        </div>

        <div class="inspector-body">
          <h3 id="insp-title" class="inspector-title">Defect Title</h3>
          <div class="inspector-section">
            <h4 class="section-label">Inspection Findings</h4>
            <p id="insp-desc" class="inspector-text">Description of the defect detected during 360 survey.</p>
          </div>

          <div class="inspector-section remediation-box">
            <h4 class="section-label">Actionable Remediation</h4>
            <p id="insp-remediation" class="remediation-text">Recommended repair and compliance fix.</p>
          </div>

          <div class="inspector-footer">
            <div class="spherical-coords">
              <span>Spherical: </span>
              <code id="insp-yaw">yaw: 0.00</code> | <code id="insp-pitch">pitch: 0.00</code>
            </div>
            <button type="button" id="insp-focus-btn" class="insp-focus-btn">🎯 Center View</button>
          </div>
        </div>
      </div>
    `,this.container.appendChild(t),this.inspectorEl=t,t.querySelector(".inspector-close-btn").addEventListener("click",r=>{r.stopPropagation(),this.hideInspector()}),t.querySelector("#insp-focus-btn").addEventListener("click",r=>{r.stopPropagation(),this.activeSnag&&this.jumpToSnag(this.activeSnag.yaw,this.activeSnag.pitch)})}showInspector(t){this.activeSnag=t;const{yaw:e,pitch:s}=qa(t.yaw,t.pitch),r=this.inspectorEl.querySelector("#insp-severity");r.textContent=t.severity||"UNKNOWN",r.className=`badge-severity severity-${(t.severity||"low").toLowerCase()}`;const a=this.inspectorEl.querySelector("#insp-discipline");a.textContent=`${Rc[t.discipline]||""} ${t.discipline||"GENERAL"}`;const c=this.inspectorEl.querySelector("#insp-status");c.textContent=t.status||"OPEN",this.inspectorEl.querySelector("#insp-title").textContent=t.title||"Untitled Snag",this.inspectorEl.querySelector("#insp-desc").textContent=t.description||"No description provided.",this.inspectorEl.querySelector("#insp-remediation").textContent=t.remediation||"No remediation specified.",this.inspectorEl.querySelector("#insp-yaw").textContent=`yaw: ${e.toFixed(2)} rad`,this.inspectorEl.querySelector("#insp-pitch").textContent=`pitch: ${s.toFixed(2)} rad`,this.inspectorEl.classList.remove("hidden")}hideInspector(){this.inspectorEl&&this.inspectorEl.classList.add("hidden"),this.activeSnag=null}escapeHtml(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}destroy(){this.hideInspector(),this.viewer&&(this.viewer.destroy(),this.viewer=null)}}class ew{constructor(t,e={}){this.container=t,this.onViewSnag=e.onViewSnag||(()=>{}),this.floorplanId=e.floorplanId||"floorplan-ground",this.nodes=[],this.flatSnags=[],this.filters={search:"",discipline:"ALL",severity:"ALL",status:"ALL"},this.initDOM()}initDOM(){this.container.innerHTML=`
      <div class="snag-panel-wrapper">
        <div class="snag-panel-toolbar">
          <div class="toolbar-title-group">
            <span class="toolbar-icon">📋</span>
            <h3 class="toolbar-title">Site Snag Register</h3>
            <span id="snag-count-pill" class="snag-count-pill">0 Items</span>
          </div>

          <div class="toolbar-controls">
            <!-- Search Input -->
            <div class="search-input-wrap">
              <span class="search-icon">🔍</span>
              <input type="text" id="snag-search-input" placeholder="Search title, description, or ID..." class="snag-input" />
            </div>

            <!-- Discipline Filter -->
            <select id="filter-discipline" class="snag-select">
              <option value="ALL">All Disciplines</option>
              <option value="ARCHITECTURAL">📐 Architectural</option>
              <option value="STRUCTURAL">🏗️ Structural</option>
              <option value="MEP">⚡ MEP</option>
              <option value="HEALTH_AND_SAFETY">⚠️ Health & Safety</option>
            </select>

            <!-- Severity Filter -->
            <select id="filter-severity" class="snag-select">
              <option value="ALL">All Severities</option>
              <option value="CRITICAL">🔴 Critical</option>
              <option value="HIGH">🟠 High</option>
              <option value="MEDIUM">🟡 Medium</option>
              <option value="LOW">🔵 Low</option>
            </select>

            <!-- Status Filter -->
            <select id="filter-status" class="snag-select">
              <option value="ALL">All Statuses</option>
              <option value="OPEN">Open</option>
              <option value="IN_PROGRESS">In Progress</option>
              <option value="RESOLVED">Resolved</option>
            </select>

            <!-- Export to CSV -->
            <button type="button" id="btn-export-csv" class="action-btn export-btn">
              <span>📥 Export CSV</span>
            </button>
          </div>
        </div>

        <div class="snag-table-container">
          <table class="snag-table">
            <thead>
              <tr>
                <th style="width: 100px;">Snag ID</th>
                <th style="width: 90px;">Node</th>
                <th style="width: 160px;">Discipline</th>
                <th>Defect Title & Findings</th>
                <th style="width: 110px;">Severity</th>
                <th style="width: 100px;">Status</th>
                <th style="width: 130px; text-align: center;">Actions</th>
              </tr>
            </thead>
            <tbody id="snag-table-body">
              <tr>
                <td colspan="7" class="table-empty-msg">No snagging items recorded yet.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `,this.container.querySelector("#snag-search-input").addEventListener("input",c=>{this.filters.search=c.target.value.trim().toLowerCase(),this.renderTable()}),this.container.querySelector("#filter-discipline").addEventListener("change",c=>{this.filters.discipline=c.target.value,this.renderTable()}),this.container.querySelector("#filter-severity").addEventListener("change",c=>{this.filters.severity=c.target.value,this.renderTable()}),this.container.querySelector("#filter-status").addEventListener("change",c=>{this.filters.status=c.target.value,this.renderTable()}),this.container.querySelector("#btn-export-csv").addEventListener("click",()=>{this.exportCSV()})}setNodes(t){this.nodes=t||[],this.flatSnags=[],this.nodes.forEach((e,s)=>{(e.snags||[]).forEach(r=>{this.flatSnags.push({...r,parentNode:e,nodeIndex:s+1})})}),this.renderTable()}renderTable(){const t=this.container.querySelector("#snag-table-body"),e=this.container.querySelector("#snag-count-pill"),s=this.flatSnags.filter(r=>{if(this.filters.discipline!=="ALL"&&r.discipline!==this.filters.discipline||this.filters.severity!=="ALL"&&r.severity!==this.filters.severity||this.filters.status!=="ALL"&&(r.status||"OPEN")!==this.filters.status)return!1;if(this.filters.search){const a=this.filters.search;if(!`${r.id} ${r.title} ${r.description||""} ${r.remediation||""} ${r.discipline}`.toLowerCase().includes(a))return!1}return!0});if(e.textContent=`${s.length} of ${this.flatSnags.length} Items`,s.length===0){t.innerHTML=`
        <tr>
          <td colspan="7" class="table-empty-msg">
            ${this.flatSnags.length===0?"No snags recorded for this floorplan.":"No snags matching active filters."}
          </td>
        </tr>
      `;return}t.innerHTML=s.map(r=>{const a=jm[r.severity]||"#94A3B8",c=Rc[r.discipline]||"📌",h=this.escapeHtml(r.title),d=this.escapeHtml(r.description||"");return`
        <tr class="snag-row" data-snag-id="${r.id}" data-node-id="${r.parentNode.id}">
          <td class="snag-id-cell"><code>${r.id}</code></td>
          <td class="snag-node-cell">
            <span class="node-tag">Node ${r.nodeIndex}</span>
          </td>
          <td>
            <span class="badge-discipline">${c} ${r.discipline}</span>
          </td>
          <td class="snag-title-cell">
            <div class="snag-title-main">${h}</div>
            <div class="snag-desc-sub">${d}</div>
          </td>
          <td>
            <span class="badge-severity severity-${r.severity.toLowerCase()}" style="--badge-color: ${a}">
              ${r.severity}
            </span>
          </td>
          <td>
            <span class="badge-status status-${(r.status||"OPEN").toLowerCase().replace("_","-")}">
              ${r.status||"OPEN"}
            </span>
          </td>
          <td style="text-align: center;">
            <button type="button" class="btn-jump-360" data-snag-id="${r.id}">
              <span>👁️ View in 360°</span>
            </button>
          </td>
        </tr>
      `}).join(""),t.querySelectorAll(".btn-jump-360").forEach(r=>{r.addEventListener("click",a=>{const c=r.getAttribute("data-snag-id"),h=this.flatSnags.find(d=>d.id===c);h&&this.onViewSnag(h,h.parentNode)})})}exportCSV(){try{const t=$_(this.floorplanId),e=document.createElement("a");e.href=t,e.setAttribute("download",`opensite_snag_export_${Date.now()}.csv`),document.body.appendChild(e),e.click(),document.body.removeChild(e)}catch(t){console.warn("[SnagListPanel] Backend export failed, generating client CSV:",t),this.generateClientCSV()}}generateClientCSV(){const t=["id","node_id","discipline","title","severity","status","yaw","pitch","remediation","description"],e=this.flatSnags.map(h=>{var d;return[h.id,((d=h.parentNode)==null?void 0:d.id)||"",h.discipline,`"${(h.title||"").replace(/"/g,'""')}"`,h.severity,h.status||"OPEN",h.yaw,h.pitch,`"${(h.remediation||"").replace(/"/g,'""')}"`,`"${(h.description||"").replace(/"/g,'""')}"`]}),s=[t.join(","),...e.map(h=>h.join(","))].join(`\r
`),r=new Blob([s],{type:"text/csv;charset=utf-8;"}),a=URL.createObjectURL(r),c=document.createElement("a");c.href=a,c.setAttribute("download",`opensite_snags_fallback_${Date.now()}.csv`),document.body.appendChild(c),c.click(),document.body.removeChild(c),URL.revokeObjectURL(a)}escapeHtml(t){return t?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}}class iw{constructor(){this.nodes=[],this.selectedNode=null,this.health=null,this.floorplanCanvas=null,this.matterportViewer=null,this.snagListPanel=null}async init(){console.log("[OpenSite 360] Initializing frontend application...");const t=document.getElementById("sphere-viewer");this.matterportViewer=new tw(t,{fallbackPanorama:"./assets/sample_node_1.jpg",onSnagSelect:r=>{console.log("[OpenSite 360] Snag selected in 360 viewer:",r.id)}});const e=document.getElementById("floorplan-map");this.floorplanCanvas=new ig(e,{blueprintUrl:"./assets/sample_floorplan.svg",floorplanId:"floorplan-ground",onNodeSelect:r=>{this.selectNode(r)},onCaptureSuccess:r=>{console.log("[OpenSite 360] New capture created successfully:",r.id),this.addNode(r)}});const s=document.getElementById("panel-snag-register");this.snagListPanel=new ew(s,{floorplanId:"floorplan-ground",onViewSnag:(r,a)=>{this.jumpToSnagInSphere(r,a)}}),await this.refreshHealth(),await this.loadInitialNodes(),setInterval(()=>{this.refreshHealth().catch(()=>{})},1e4)}async refreshHealth(){try{this.health=await q_(),this.updateHeaderUI()}catch(t){console.warn("[OpenSite 360] Health refresh warning:",t)}}updateHeaderUI(){if(!this.health)return;const t=document.getElementById("status-backend-pill"),e=document.getElementById("backend-status-text");this.health.status==="healthy"?(t.className="status-pill status-online",e.textContent=`Backend Online (${this.health.ai_mode.toUpperCase()})`):(t.className="status-pill",e.textContent="Backend Offline");const s=document.getElementById("status-camera-pill"),r=document.getElementById("camera-status-text");this.health.camera_connected?(s.className="status-pill status-camera-connected",r.textContent="Ricoh Theta Connected"):(s.className="status-pill",r.textContent="Theta Offline (Mock Active)");const a=this.nodes.reduce((c,h)=>c+(h.snags||[]).length,0);document.getElementById("counter-nodes").textContent=String(this.nodes.length),document.getElementById("counter-snags").textContent=String(a)}async loadInitialNodes(){try{const t=await Y_("floorplan-ground");Array.isArray(t)&&t.length>0?this.nodes=t:(console.warn("[OpenSite 360] Backend returned 0 nodes, checking fallback..."),this.nodes=this.getFallbackSeedNodes())}catch(t){console.warn("[OpenSite 360] Could not fetch nodes from backend, utilizing fallback seeds:",t.message),this.nodes=this.getFallbackSeedNodes()}this.floorplanCanvas.setNodes(this.nodes),this.snagListPanel.setNodes(this.nodes),this.updateHeaderUI(),this.nodes.length>0&&this.selectNode(this.nodes[0])}async selectNode(t){if(!t)return;const e=this.selectedNode;this.selectedNode=t,this.floorplanCanvas.setSelectedNode(t.id),this.floorplanCanvas.centerOnNode(t.id),await this.matterportViewer.setNode(t,e)}async jumpToSnagInSphere(t,e){!t||!e||((!this.selectedNode||this.selectedNode.id!==e.id)&&await this.selectNode(e),await this.matterportViewer.jumpToSnag(t.yaw,t.pitch,t))}addNode(t){this.nodes.push(t),this.floorplanCanvas.setNodes(this.nodes),this.snagListPanel.setNodes(this.nodes),this.updateHeaderUI(),this.selectNode(t)}getFallbackSeedNodes(){return[{id:"node-001",floorplan_id:"floorplan-ground",x:.28,y:.35,panorama_url:"./assets/sample_node_1.jpg",created_at:new Date().toISOString(),snags:[{id:"snag-001",discipline:"HEALTH_AND_SAFETY",title:"Exposed Floor Edge Without Perimeter Barrier",description:"Slab edge on north-west elevation lacks OSHA-compliant double guardrail and 150mm toe-board.",severity:"CRITICAL",status:"OPEN",yaw:-1.25,pitch:-.35,remediation:"Erect certified modular edge protection with mesh infill immediately."},{id:"snag-002",discipline:"MEP",title:"Unenclosed Temporary Power Junction",description:"Live electrical cabling protruding from galvanized conduit box without faceplate.",severity:"HIGH",status:"OPEN",yaw:.45,pitch:.2,remediation:"De-energize circuit, fit IP65 rated terminal enclosure, and certify continuity."},{id:"snag-003",discipline:"STRUCTURAL",title:"Poor Aggregate Compaction at Column Base",description:"Visible honeycomb voiding measuring approx 300x150mm with partially exposed rebar.",severity:"HIGH",status:"OPEN",yaw:-2.3,pitch:-.55,remediation:"Perform non-destructive sound testing and patch with structural polymer grout."}]},{id:"node-002",floorplan_id:"floorplan-ground",x:.62,y:.25,panorama_url:"./assets/sample_node_2.jpg",created_at:new Date().toISOString(),snags:[{id:"snag-004",discipline:"ARCHITECTURAL",title:"Cable Tray Breach Through 2-Hour Fire Wall",description:"Data cable bundle passes through drywall partition without acoustic or intumescent firestop seal.",severity:"MEDIUM",status:"OPEN",yaw:1.85,pitch:.5,remediation:"Install UL-listed intumescent firestop pillows and sealant around perimeter."},{id:"snag-005",discipline:"ARCHITECTURAL",title:"Ceiling Board Sagging & Moisture Discoloration",description:"Minor water staining and joint deflection on suspended ceiling tile adjacent to ductwork hatch.",severity:"LOW",status:"OPEN",yaw:2.95,pitch:.75,remediation:"Inspect overhead condensate tray for leaks, replace affected moisture-damaged tiles."}]}]}}window.addEventListener("DOMContentLoaded",()=>{new iw().init().catch(t=>{console.error("[OpenSite 360] Bootstrap error:",t)})});
