class Branch{
	constructor(begin, end){
		this.begin = begin;
		this.end = end;
		this.finished = false;
	}

	show = function(){
		stroke(255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}

	branch = function(rl){
		var dir = p5.Vector.sub(this.end, this.begin);
		dir.mult(0.67);
		if(rl)
			dir.rotate(PI / 4);					//TODO: Add a random angle
		else if(!rl)
			dir.rotate(-PI / 4);				//TODO: Add a random angle
		var newEndPoint = p5.Vector.add(this.end, dir);
		var branch = new Branch(this.end, newEndPoint);
		return branch;
	}
}