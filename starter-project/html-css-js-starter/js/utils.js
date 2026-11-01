"use strict";

function $(selector){return document.querySelector(selector);}
function $$(selector){return document.querySelectorAll(selector);}
function on(element,event,callback){element?.addEventListener(event,callback);}
function createElement(tag,className=""){
 const el=document.createElement(tag);
 if(className) el.className=className;
 return el;
}
