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
	var e=from, f=handle, k=false, i=0, j=0, x, m=[], s,v,t;
	do{
		//f(i,j,e);

		m.length=i;

		t='';
		s='class';
		if(e.hasAttribute(s)){
			t=e.className.trim();
			if(t===''){e.removeAttribute(s);}else{s='.';t=s+t.split('\u0020').join(s);};
		};

		s='id';
		if(e.hasAttribute(s)){
			v=e.id;
			if(v===''){
				x.removeAttribute(s);
			}else{
				v='#'+v+t;
				m.length=0;
			};
		}else{
			v=((i===0 && j===0)?'':'>')+e.tagName+t+(j===0?'':':nth-child('+j+')');
		};


		m[i]=v;

		s=v=t='';

		log(i,j,m.join('\u0020'));

		x=e.firstElementChild;
		if(k===false && x!==null){
			j=0;i++;
		}else{
			k=false;
			x=e.nextElementSibling;
			if(x===null){x=e.parentElement;k=true;j=0;i--;};
		};
		j++;
		e=x;
	}while(i!==0);
}/*end: walkHTML*/



//============================================================================
console.clear();
//
//
//log(root.outerHTML);
