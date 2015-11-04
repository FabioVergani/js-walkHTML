var log=(function(o){return o.log.bind(o);})(console);
//=================================================================================
//# i:depth, j:childnum, e:elementNode
function process(t,i,j,e){
 log((("000"+t).slice(-3))+'\t',Array(i).join('\t'),i,j,e.tagName);
};
//=================================================================================
function walkHTML(from,handle){console.clear();
	var k=false, e=from, f=handle, j=0, i=0, t=0, n;
	do{
		t++;
		f(t,i,j,e);
		n=e.firstElementChild;
		//e.walked=true;
		if(k===false && n!==null){//discendi
			j=0;
			++i;
		}else{
			k=false;
			n=e.nextElementSibling;
			if(n===null){//risali
				n=e.parentElement;
				k=true;
				j=0;
				i--;
			};
		};

		j++;
		e=n;
	}while(i>0);
}
//

/*console.log('§§§§§§§§§§§');
				//if(n.tagName==='BODY'){f(t,i,j,e);break};
file:///G:/SVILUPPO/WALK/1/walkHTML.htm

*/
