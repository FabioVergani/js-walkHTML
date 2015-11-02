function process(){//walkOnlyHtmlElementsfromBody
	var w=window, d=w.document, c=w.console, log=c.log.bind(c);
	for(var i=0, j=1, k=false, x, n, e=d.body; n!=='BODY'; e=x,n=x.tagName){

		n=e.tagName;
		log(i,j,n);

		x=e.firstElementChild;
		if(k===false && x!==null){
			j=1;
			i++;
		}else{
			k=false;
			x=e.nextElementSibling;
			if(x===null){x=e.parentElement;k=true;j=1;i--;}else{j++;};
		};


	};

}/*end: process*/
