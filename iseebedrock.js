var lastHit;
function isSamePos(hit1,hit2){
	return hit1.x==hit2.x & hit1.y==hit2.y & hit1.z==hit2.z;
}
events.listen("player.tick",function(event){
	var ray=event.player.rayTrace(100);//Raytrace 100 blocks in front of player.
	if(ray.block){
		var replacementBlock='minecraft:bedrock';//Replace block with this new block.
		var currentHit;
		if(ray.block.id!=replacementBlock){
			currentHit={x:parseInt(ray.hitX),y:parseInt(ray.hitY),z:parseInt(ray.hitZ),block:ray.block};
			if(!lastHit){
				lastHit=currentHit;
			}else{
				if(!isSamePos(currentHit,lastHit)){
					lastHit.block.set(replacementBlock);
					lastHit=currentHit;
				}
			}
		}
	}
});
