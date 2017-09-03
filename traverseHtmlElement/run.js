(function($){
 function process(e,nth,depth){

	e.id=++id;
	const s=e.dataset;
	s.tag=e.tagName;
	s.depth=depth;
	s.nth=nth;

 }
 //================
 function walk(f,x){
  let m=x.children;
  if(m.length!==0){
	let e=x,j=0,nth=1,i=0;

	m=[];

	do{
		f(e,nth,i);
		let n=e.firstElementChild;
		if(n!==null){//descend

			++i;
			j=nth;
			nth=1;
			e=n;

		}else{
			n=e.nextElementSibling;
			if(n!==null){//next,samelevel



				++nth;
				e=n;

			}else{

				e.isLastChild=true;
				n=e.parentElement;
				if(n!==null){
					e=n.nextElementSibling;
					if(e!==null){//up2CurrentBranch

						--i;
						nth=++j;

					}else{//up2CurrentBranchRoot

						i-=2;
						nth=1;
						j=null;
						n=n.parentElement;
						e=n.nextElementSibling;
						if(e!==null){
/*
							nth=2;
							while(n=n.previousElementSibling){++nth}
*/
						}else{//up2NextBranchRoot
							while(n=n.parentElement){
								--i;
								if((e=n.nextElementSibling)!==null){
									break
								}
							}
						}
					}
				}
			};



		};

	}while(e!==null)
  }else{
	f(x,0,0)
  };
  console.dir(m);
  return x
 }
 //=============
 console.clear();
 var id=0;
 walk(process,$.document.documentElement).classList.add('walked');

})(window);

/*
console.dir(e);
console.log(e);
console.info(last);
console.warn(id);break;
debugger;
*/






