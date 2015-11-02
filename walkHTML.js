var log=(function(o){return o.log.bind(o);})(console);
//=================================================================================
//# i:depth, j:childnum, e:elementNode
function process(i,j,e){
 log(Array(i).join('\t'),i,j,e.tagName);
};
//=================================================================================
function walkHTML(from,handle){console.clear();
	var k=false, e=from, f=handle, i=0, j=0, n;
	do{
		f(i,j,e);
		n=e.firstElementChild;
		if(k===false && n!==null){
			j=0;
			i++;
		}else{
			k=false;
			n=e.nextElementSibling;
			if(n===null){n=e.parentElement;k=true;j=0;i--;};
		};
		j++;
		e=n;
	}while(i>0);
}
//
