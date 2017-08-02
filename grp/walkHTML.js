//# t:total, i:depth, j:childnum, e:elementNode
function process(t,i,j,e){
 var s='\t';
 console.log((("000"+t).slice(-3))+s,Array(i).join(s),Number(i+'.'+j),e.tagName);
};
//=====================================================================================

function walkHTML(from,handle){
 var e=from, f=handle, k=false, i=0, j=0, t=0, n;
 do{
	if(k===false){f(t,i,j,e)};
	n=e.firstElementChild;
	if(k===false && n!==null){
	 j=0;
	 i++;
	}else{
	 k=false;
	 n=e.nextElementSibling;
	 if(n===null){
		n=e.parentElement;
		k=true;
		j=0;
		i--;
	 };
	};
	j++;
	t++;
	e=n;
 }while(i>0);
}
