(function(){'use strict';var c={name:"Empty Feed",filename:"",feed:{i:{h:[{}]}}};function d(){return window.gwd&&window.gwd.dynamic&&window.gwd.dynamic.feeds&&0<Object.keys(window.gwd.dynamic.feeds).length}var g=function(){};goog.inherits(g,HTMLElement);
g.prototype.createdCallback=function(){this.a=document.createElement("select");this.appendChild(this.a);var a=document.createElementNS("http://www.w3.org/2000/svg","svg");a.setAttribute("viewBox","0 0 24 24");a.setAttribute("preserveAspectRatio","xMidYMid meet");var b=document.createElementNS("http://www.w3.org/2000/svg","path");b.setAttribute("d","M7 10l5 5 5-5z");a.appendChild(b);this.appendChild(a);this.g=this.c.bind(this);window.addEventListener("WebComponentsReady",this.g,!1);this.f=this.j.bind(this)};
g.prototype.attachedCallback=function(){"interactive"==document.readyState||"complete"==document.readyState?this.b():window.addEventListener("DOMContentLoaded",this.b.bind(this),!1);this.a.addEventListener("change",this.f)};g.prototype.b=function(){if(document.querySelector("gwd-studio-enabler-data-provider")){var a=h();d()&&(a=gwd.dynamic.feeds[a])&&(a=JSON.stringify(a.feed),a=encodeURIComponent(a),Enabler.setAdParameters("layoutsConfig="+a))}};
g.prototype.rebind=function(){window.Enabler&&window.Enabler.setAdParameters("layoutsConfig={}");window.onAdData&&window.onAdData({i:{h:[{}]}});this.b();this.c()};var h=function(){if(d()){var a=(a=/[?&]feed=([^&]*)/.exec(window.location.search))?decodeURIComponent(a[1].replace(/\+/g," ")):null;var b=Object.keys(gwd.dynamic.feeds).sort();return a||b[0]}return"noFeed"};
g.prototype.c=function(){var a=h(),b;d()&&"noFeed"!=a?(b=gwd.dynamic.feeds[a])&&l(b):(b=document.querySelector("gwd-gpa-data-provider"))&&b.hasAttribute("is-custom-schema")&&!this.hasAttribute("prevent-empty-payload-for-custom")&&l(c);if(d())for(var k=Object.keys(gwd.dynamic.feeds).sort(),e=0;e<k.length;e++){var f=k[e];b=document.createElement("option");b.textContent=gwd.dynamic.feeds[f].name;b.value=encodeURIComponent(f);f==a&&b.setAttribute("selected","");this.a.appendChild(b)}b=document.createElement("option");
b.textContent="No Feed";b.value="noFeed";"noFeed"==a&&b.setAttribute("selected","");this.a.appendChild(b);window.removeEventListener("WebComponentsReady",this.g,!1)};g.prototype.detachedCallback=function(){this.a.removeEventListener("change",this.f)};var l=function(a){if("function"==typeof window.onAdData)window.onAdData(a.feed)};g.prototype.j=function(){window.location.search="?feed="+this.a.options[this.a.selectedIndex].value};g.prototype.attributeChangedCallback=function(){};
document.registerElement("gwd-dynamic-data-selector",{prototype:g.prototype});}).call(this);
