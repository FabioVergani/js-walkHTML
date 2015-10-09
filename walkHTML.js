var o=console, log=o.log.bind(o);//dir=o.dir.bind(o);
//
function process(i,j,x){//i,childnum,elementNode)
 //var indent=Array(i);indent.concat(['%O'])
 log(Array(i).join('\t'),j,x);
};
//=================================================================================
function walkHTML(from,handle){
	var e=from, f=handle, k=false, i=0, j=0, x;
	do{
		f(i,j,e);
		x=e.firstElementChild;
		if(k===false && x!==null){
			j=0;
			i++;
		}else{
			k=false;
			x=e.nextElementSibling;
			if(x===null){x=e.parentElement;k=true;j=0;i--;};
		};
		j++;
		e=x;
	}while(i>0);
}
//
