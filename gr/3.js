'use strict';
(function(w){
 var o=w,c=o.console;
 o.log=c.log.bind(c);//o.dir=c.dir.bind(c);
 c.clear();
})(window);
//
function process(a,b,c){//n,i,j
//a.nodeType
//['samelevel','descend','ascend'][c]
 log(c,a.tagName,a.id);

 return 0;
}
//


function walkHTML(a,b){//a:root,b:callback
 var e,n=a,f=b,i=0,j=0,k=true;//k:skip,j:direction,i:depth
 do{
  if(k?(j++,f(n,i,j),(e=n.firstElementChild)!==null):false){i++;}else{
	k=((e=n.nextElementSibling)===null)?(e=n.parentElement,i--,false):(true);
  };
  n=e;
 }while(e!==null);
}
