#pragma strict

public var sparks : GameObject;
public var smoke : GameObject;

private var firecrackerNum = 12;

private var i = 1;
function Start () {
	//yield WaitForSeconds(5f);
	//explode();
}

function Update () {

}

function explode() {
	 /*Instantiate(smoke, gameObject.transform.position, gameObject.transform.rotation);
	 for (i = 1; i <= firecrackerNum; i ++) {
		var firecracker = gameObject.transform.FindChild("OneFire" + i);
	    Instantiate(sparks, firecracker.gameObject.transform.position, firecracker.transform.rotation);
	 	yield WaitForSeconds(.1f);
	 	Destroy(firecracker.gameObject);
	 }
	 Destroy(gameObject);*/
}

function onTriggerEnter(other: Collider) {
	print("here");
	//explode();
}
	