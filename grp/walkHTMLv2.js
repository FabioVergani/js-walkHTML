var ResultingTree=[],
processHtmlNode=function(e,j,t,i,l){//(e:elementNode,j:childnum,t:total,i:depth,l:direction)
 var m=ResultingTree,childrens=e.children.length,s=Array(i);
 s[0]=['*ascend\t','samelevel\t','descend\t'][l];//0,1,2
 s[i]=[i,'.',j,'\u0020',e.tagName].join('');
 m[m.length]=s.join('\t')
};

//=======================================================================================
function walkHTML(a,b){//a:from,b:handle
 var v,n,k=false,e=a,f=b,i=0,j=0,t=0,l;
 do{
	if(v=(k===false)){f(e,j,t,i,l);};//(e:elementNode,j:childnum,t:total,i:depth,l:direction)
	l=v?1:0;
	n=e.firstElementChild;
	if(v && n!==null){
	 j=0;l=2;
	 i++;
	}else{
	 n=e.nextElementSibling;
	 if(k=(n===null)){
		n=e.parentElement;
		j=0;
		i--;
	 };
	};
	j++;
	t++;
	e=n;
 }while(i!==0);//i>0
 return t;
}
//======================================================================================

function at(a,b,c,d){
 var e=a,s=b,f=function(o){var x=e;x.removeEventListener(s,f);return c(x,o);}
 e.addEventListener(s,f,Boolean(d));
}
//
var onReady=function(f){
 var d=document;
 if(d.readyState !=='loading'){
	f();
 }else{
	at(d,'DOMContentLoaded',f);
 };
};
//
onReady(function(){
 var tagnumerosity=walkHTML(document.documentElement,processHtmlNode);
 console.log(ResultingTree.join('\n'));
});



//...
