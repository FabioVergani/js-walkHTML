
var global=window;
var undefined;
var w=global, d=w.document, dE=d.documentElement;

function process(t,i,j,e){
 var s='\t';
 console.log((("000"+t).slice(-3))+s,Array(i+1).join(s),Number(i+'.'+j),e.tagName);
};


 var e=dE, ignore=false, deepIndex=0, childIndex=0, nodeTotals=0, coming;
 do{
	if(ignore===false){process(nodeTotals,deepIndex,childIndex,e);};
	coming=e.firstElementChild;
	if(ignore===false && coming!==null){
	 childIndex=0;
	 deepIndex++;
	}else{
	 ignore=false;
	 coming=e.nextElementSibling;
	 if(coming===null){
		coming=e.parentElement;
		ignore=true;
		childIndex=0;
		deepIndex--;
	 };
	};
	childIndex++;
	nodeTotals++;
	e=coming;
 }while(deepIndex>0);
