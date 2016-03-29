function process(node){//counts, depth, childindex,
 var e=node, s=e.id;
 console.log((new Array(e.depth)).join(' '),e.childIndex,e.tagName,s?'#'+s:'');
}

//

function walkTree(process,html){
 var j, i, f=process, e=html, n=e.ownerDocument, o=n.createTreeWalker(e,1,null,false);
 e.childIndex=0;
 e.depth=0;
 do{
	f(e);
	if((e=o.nextNode())!==null){
		n=e.previousElementSibling;
		if(n===null){
			i=0;
			j=e.parentElement.depth+1;
		}else{
			i=n.childIndex+1;
			j=n.depth;
		};
		e.childIndex=i;
		e.depth=j;
	};
 }while(e!==null);
}

