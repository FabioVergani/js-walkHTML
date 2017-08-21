function test(a,b,c){

	const o=a.dataset, s=a.className;
	for(let m=a.attributes, i=m.length-1;i>-1;--i){a.removeAttribute(m[i].name)};
	a.className=s;
	o.j=c;
	o.nth=b;
	o.tag=a.tagName;

 }

//
(function($){
 function process(a,b,c){
	test(a,b,c)
 }

 var n=$.document.documentElement;
 if(n.children.length!==0){
	let i=1,j=0,k;//nth,depth,previousNth
	do{
		process(n,i,j);
		let e=n.firstElementChild;
		if(e){//descend
			k=i;i=1;++j;n=e
		}else{
			if(e=n.nextElementSibling){//samelevel
				++i;n=e
			}else{
				if(e=n.parentElement){//branch
					if(n=e.nextElementSibling){
						--j;i=++k
					}else{
						j-=2;i=1;k=null;
						e=e.parentElement//branch-Rt
						if(n=e.nextElementSibling){

							i=2;while(e=e.previousElementSibling){++i}

						}else{
							while(e=e.parentElement){
								--j;if(n=e.nextElementSibling){break}
							}
						}
					}
				}
			}
		}
	}while(n!==null)
 }else{
	process(n,0,0)
 }
})(window);
//================================