(function(global){'use strict';
 var undefined, w=global, d=w.document, df=d.createDocumentFragment(),
 f=function(o,p){var e=o;return e[p].bind(e);},
 console=w.console,
 log=f(console,'log'),
 dir=f(console,'dir'),
 createText=f(d,'createTextNode'),
 createTag=f(d,'createElement');
 f=null,console.clear();


})(window);
//
