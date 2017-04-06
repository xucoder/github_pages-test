var imageUrl="img/image.png";
var positions=['0 -150','-150 -150','-300 -150'];
var ele=document.getElementById("aa");
animation(ele,positions,imageUrl);
function animation(ele,positions,imageUrl){
	
	ele.style.backgroundImage='url('+imageUrl+')';
	ele.style.backgroundRepeat='no-repeat';
	
	var index=0;
	
	function run(){
		var position=positions[index].split(' ');
		ele.style.backgroundPosition=position[0]+'px'+ ' '+position[1]+'px';
//		ele.style.backgroundPositionX=position[0]+'px';
//		ele.style.backgroundPositionY=position[1]+'px';
		index++;
		if(index>=positions.length){
			index=0;
		}
		setTimeout(run,80);
	}
	
	run();
}
