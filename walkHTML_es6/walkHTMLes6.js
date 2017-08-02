function walk(node,process,filter=null){
 const f=process;
 var e=node;
 if(e.children.length!==0){
	let j=0,i=0,k=0;
	const o=e.ownerDocument.createTreeWalker(e,1,filter);
	do{
		f(e,i,j,k);
		let n=e.firstElementChild;
		if(n!==null){
			j=0;++i;++k;e=n;
		}else{
			n=e.nextElementSibling;
			if(n!==null){
				++j;e=n;
			}else{
				j=i=k=0;
				o.currentNode=e;
				e=o.nextNode();
				if(e!==null){
					let x=e;
					while(x=x.parentElement){++k};
				};
			};
		};
	}while(e!==null)
 }else{
	f(e,0,0,0);
 };
}
//================================
walk(document.body,function(a,b,c,d){
console.log(
"depth:",d,
"childNum:",c,
"relativeDepth:",b,
"currentNode:%O"+a
);});
