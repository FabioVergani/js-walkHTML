var w=window, d=w.document, page=d.body, root=page.parentElement;
//============================================================================
var console=w.console, log=console.log.bind(console);
//
function process(i,j,x){//i,childnum,elementNode)
 var indent=Array(i).join('\t');
 log(indent,j,x.tagName);//t.join('\u0020')
};
//============================================================================
function walkHTML(from,handle){
	var e=from, f=handle, k=false, i=0, j=1, x;
	do{
		x=e.firstElementChild;
		if(k===false && x!==null){
			j=1;
			i++;
		}else{
			k=false;
			x=e.nextElementSibling;
			if(x===null){x=e.parentElement;k=true;j=1;i--;};
		};
		f(i,j++,e);
		e=x;
	}while(i>0);
}
//============================================================================
console.clear();
//
walkHTML(page,process);
//
log(root.outerHTML);
