var b;
var a;
var tree = [];
var count;
function setup(){
	createCanvas(1400, 750);
	a = createVector(width / 2, height);
	b = createVector(width / 2, height - 100);
	var root = new Branch(a ,b);

	tree[0] = root;
	count = 0;
	
	
}

function mousePressed(){
	if(this.count <= 10){
			for(var i = tree.length-1; i >= 0 ; i--){
				tree.push(tree[i].branch(true));
				tree.push(tree[i].branch(false));
				console.log(tree[i]);
				
			}

		this.count++;
	}
}

function draw(){
	background(51);

	//Drawing the Tree!
	for(var i = 0; i < tree.length; i++){
		tree[i].show();
	}
	if(this.count > 5){						//TODO Die Äpfel sollen nur an den aüßeren äßsten hängen
			fill(255, 0, 100);
			for(var i = 20; i < tree.length; i++){
				print(i);					 
				rect(tree[i].end.x, tree[i].end.y, 5, 5); // APPLE
			}						
			
	}

}