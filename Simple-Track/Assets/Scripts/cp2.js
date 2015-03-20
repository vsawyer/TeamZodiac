#pragma strict

//static var player1Transform : Transform; //Store the player transform
//static var player2Transform : Transform; //Store the player transform
public var sparks : GameObject;
public var smoke : GameObject;

private var explodeBoolean : boolean = false;
private var firecrackerNum = 12;

private var i = 1;

function Start () {
	//yield WaitForSeconds(5f);
	//explode();
	wait();
}
function wait() {
	yield WaitForSeconds(5f);
	if (explodeBoolean == false){
		explodeBoolean = true;
		explode();
	}
}
		
function Update() {
//	explode();
}
		
function explode() {
	//if (explodeBoolean == true) {
		Instantiate(smoke, gameObject.transform.position, gameObject.transform.rotation);
	 	for (i = 1; i <= firecrackerNum; i ++) {
			var firecracker = gameObject.transform.FindChild("OneFire" + i);
	    	Instantiate(sparks, firecracker.gameObject.transform.position, firecracker.transform.rotation);
	 		yield WaitForSeconds(.1f);
	 		Destroy(firecracker.gameObject);
	 	}
	 	Destroy(gameObject);
	//}
}

function OnTriggerEnter (other : Collider) {
	print("what " + other.gameObject.transform.name);
	if (other.gameObject.transform.name == "trackCollider 1")
		print ("okay");
	else {
		gameObject.transform.collider.isTrigger = false;
		print("here");
		if (explodeBoolean == false){
			explodeBoolean = true;
			explode();
		}
	}
}

