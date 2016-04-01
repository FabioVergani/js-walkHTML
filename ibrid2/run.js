/*e.childCountedTypes={};
	n=e.tagName;
	c=p.childCountedTypes;
	if(typeof(c)==='undefined'){
		(p.childCountedTypes={})[n]=c=1;
	}else{
		c=(n in c)?c[n]++:c[n]=1;
	};

, tagCount=e.tagOccurences={}
   p=e.tagName;
   p in tagCount ? tagCount[p]++ : tagCount[p]=1;

*/



var Path=[];//,lastPath;


//#
function walkTree(process,html){
 var p, j, i, f=process, e=html, n=e.ownerDocument, o=n.createTreeWalker(e,1,null,false);
 e.childIndex=1;
 e.depth=0;
 f(e);
 while((e=o.nextNode())!==null){
	p=e.parentElement;
	n=e.previousElementSibling;
	if(n===null){
		i=1;
		j=p.depth+1;
	}else{
		i=n.childIndex+1;
		j=n.depth;
	};

	e.childIndex=i;
	e.depth=j;
	f(e);
 };
}

//#
function process(node){//counts, depth, childindex,
 var e=node, j=e.depth, i=e.childIndex;
 var indent=(new Array(j)).join(' ');
 var path=e.tagName+(':nth-child('+i+')');

 //e.aloneTag=true;

 var comment='';
 console.log(indent,path,comment);
}





/*
 //m.length=i;
 //m[i]=[e.tagName];
 //console.log(m.join(' > ')+':nth-child()');

console.log((new Array(e.depth)).join(' '),e.childIndex,e.tagName,s?'#'+s:'');

 //s=e.id;
 //var s=e.id, hasChildren=e.children.length!==0;
 //console.log((new Array(e.depth)).join(' '),e.childIndex,e.tagName, ,hasChildren?'descend':'');
 //+(s?'#'+s:'')
 m;
 if(m.length===i){
	path2node=m.join(' > ')+' > '+tag;
 }else{

 };

 console.log(path2node);

 //console.log(m.join(' > '))


console.dir(from);

*/
