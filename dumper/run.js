
var Path=[],lastPath;


//#
//#
function walkTree(process,html){
 var c, p, j, i, f=process, e=html, n=e.ownerDocument, o=n.createTreeWalker(e,1,null,false);
 e.childCountedTypes={};
 e.childIndex=0;
 e.depth=0;
 f(e);
 while((e=o.nextNode())!==null){
	p=e.parentElement;
	n=e.previousElementSibling;
	if(n===null){
		i=0;
		j=p.depth+1;
	}else{
		i=n.childIndex+1;
		j=n.depth;
	};
	c=p.childCountedTypes;
	n=e.tagName;
	if(typeof(c)==='undefined'){
		(c=p.childCountedTypes={})[n]=1;
	}else{
		if(n in c){c[n]++;}else{c[n]=1;};
	};
	e.childIndex=i;
	e.depth=j;
	f(e);
 };
}

//#
function process(node){//counts, depth, childindex,
 var m=Path, e=node, i=e.depth ;
 //m.length=i;
 //m[i]=[e.tagName];
 //console.log(m.join(' > ')+':nth-child()');
	console.log(i,e.tagName)
}


