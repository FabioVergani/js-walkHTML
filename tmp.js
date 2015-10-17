var w=window, d=w.document, page=d.body, root=page.parentElement;
//============================================================================
var console=w.console, log=console.log.bind(console);
//
function process(i,j,p,x){//i,childnum,cssPath, elementNode)
 //var indent=Array(i).join('\t');
 //log(indent,j,p.join('\u0020>'));//
//m.join('\u0020')
 //log.apply(null,arguments);

};
//============================================================================
function walkHTML(from,handle){
	var e=from, f=handle, k=false, i=0, j=0, x, m=[], rel='';
	do{
		//f(i,j,e);
		m.length=i;
		m[i]=rel+e.tagName;

		log(j,m.join('\u0020'));

		x=e.firstElementChild;
		if(k===false && x!==null){
			j=0;
			i++;rel='>';
		}else{
			k=false;
			x=e.nextElementSibling;
			if(x===null){x=e.parentElement;k=true;j=0;i--;};
		};
		j++;
		e=x;
	}while(i>0);
}



//============================================================================
console.clear();
//
//
//log(root.outerHTML);
