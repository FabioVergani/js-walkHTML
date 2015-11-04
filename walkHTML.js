var log=(function(o){return o.log.bind(o);})(console);
//=================================================================================
//# i:depth, j:childnum, e:elementNode
function process(t,i,j,e){
 log((("000"+t).slice(-3))+'\t',Array(i).join('\t'),i,j,e.tagName);
};
//=================================================================================


function walkHTML(from,handle){
	var e=from, f=handle, k=false, i=0, j=0, t=0, x;
	do{
		t++;
		f(t,i,j,e);
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
//
/*console.log('§§§§§§§§§§§');
				//if(n.tagName==='BODY'){f(t,i,j,e);break};
file:///G:/SVILUPPO/WALK/1/walkHTML.htm

*/
