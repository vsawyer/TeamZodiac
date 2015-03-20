#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter (other : Collider) {
	//Is it the Player who enters the collider?
	//var script;
//	var player = other.gameObject.transform.parent.gameObject;
	print("name: " + other.transform.parent);
	print(other.gameObject.name);
	//if (other.transform.parent.gameObject.CompareTag("Tiger"))  {
		print("in item script");
	var script = other.transform.parent.GetComponent(PlayerCar1);
	//if (other.gameObject.name == "player2")
	//script = other.gameObject.GetComponent(PlayerCar1);
	script.firecrackerNum++;
	//print(script.firecrackerNum);
	//}
	GetComponent(MeshRenderer).enabled = false;
	GetComponent(BoxCollider).enabled = false;
	yield WaitForSeconds(5f);
	GetComponent(MeshRenderer).enabled = true;
	GetComponent(BoxCollider).enabled = true;
}
	
		
	/*if (other.CompareTag("Tiger")) {		
		//Is this transform equal to the transform of checkpointArrays[currentCheckpoint]?
		if (transform==	player2Transform.GetComponent(PlayerCar1).checkPointArray[PlayerCar1.currentCheckpoint].transform) {
			//Check so we dont exceed our checkpoint quantity
			if (PlayerCar1.currentCheckpoint+1<player2Transform.GetComponent(PlayerCar1).checkPointArray.length) {
				//Add to currentLap if currentCheckpoint is 0
				if(PlayerCar1.currentCheckpoint==0)
					PlayerCar1.currentLap++;
				PlayerCar1.currentCheckpoint++;
			} else {
				//If we dont have any Checkpoints left, go back to 0
				PlayerCar1.currentCheckpoint=0;
			}
			print("here");
			//if (playerCar1.currentLap == 4)
			//	tigerCamera.GetComponentInChildren(TextMesh).text = "Tiger Lap: "+(PlayerCar1.currentLap)+"Mouse Lap: "+(PlayerCar.currentLap);
		}*/
	