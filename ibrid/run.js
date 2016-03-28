console.clear();
log=console.log.bind(console);
/*
NodeFilter.SHOW_:
   -1 :ALL
    1 :ELEMENT
    4 :TEXT
   64 :PROCESSING_INSTRUCTION
  128 :COMMENT
  256 :DOCUMENT
  512 :DOCUMENT_TYPE
 1024 :DOCUMENT_FRAGMENT
*/
function countN(e,s){var i=0,n=e,p=s;while((n=n[p])!==null){i++;};return i;}
function depthOf(e){return countN(e,'parentElement');}
function posOf(e){return countN(e,'previousElementSibling');}
//
function walkHTML(digest,from){
 var f=digest, e=from, n=e, d=e.ownerDocument, o=d.createTreeWalker(d.documentElement,1,null,false), z=posOf, g=depthOf, i=g(n), j=0, l=0;
 do{
	j++;
	n=n.firstElementChild;
	if(n===null){
		n=e.nextElementSibling;
		if(n===null){
			o.currentNode=e;
			n=o.nextNode();
			if(n===null){
				break;
			}else{
				i=g(n);
				l=z(n);
			};
		}else{
			l++;
		};
	}else{
		l=0;
		i++;
	};
 }while(e=f(j,i,l,n));
}
//
function process(counts, depth, childindex, node){
 var j=counts, i=depth, l=childindex, n=node;
 console.log(j,i,l,n);
 return n;
}
//
