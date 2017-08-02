function walk(node,process,filter=null){
 const f=process;
 var e=node;
 if(e.children.length!==0){
  let j=0,i=0;
  const o=e.ownerDocument.createTreeWalker(e,1,filter);
	do{
		f(e,i,j);
		let n=e.firstElementChild;
		if(n!==null){
			j=0;++i;e=n;
		}else{
			if((n=e.nextElementSibling)!==null){
				++j;e=n;
			}else{
				j=i=0;
				o.currentNode=e;
				e=o.nextNode();e.style.background="red";
			};
		};
	}while(e!==null);
 }else{
	f(e,0,0);
 };
}
//================================
walk(document.body,function(a,b,c){
console.log(
"childNum:",c,
"relativeDepth:",b,
"currentNode:%O"+a
);});
//================================

