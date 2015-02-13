﻿#pragma strict

static var mouseTransform : Transform; //Store the player transform
static var tigerTransform : Transform; //Store the player transform

var tigerCamera : Camera;

function Start () {
	mouseTransform = gameObject.Find("Mouse").transform; //Set the player transform
	tigerTransform = gameObject.Find("Tiger").transform; //Set the player transform
	//gameObject.Find("MouseOnDrugs").tag = "MouseOnDrugs";
}
function OnGUI() { 
	if (PlayerCar1.currentLap == 3) { 
		GUI.Box(Rect(5,10,180,25), "Tiger wins!!");
		}
	else if (PlayerCar.currentLap == 3) { 
		GUI.Box(Rect(5,10,180,25), "Rat wins!!");
		}
	else
		GUI.Box(Rect(5,10,180,25), "Tiger Lap: "+(PlayerCar1.currentLap)+" Rat Lap: "+(PlayerCar.currentLap)); 
		//wait();
		//nextLap = false;
	//} 
} 
function wait(){
	yield WaitForSeconds(3);
}

function OnTriggerEnter (other : Collider) {
	//Is it the Player who enters the collider?
	print(other.gameObject.name);
	if (other.CompareTag("Tiger")) {		
		//Is this transform equal to the transform of checkpointArrays[currentCheckpoint]?
		if (transform==	tigerTransform.GetComponent(PlayerCar1).checkPointArray[PlayerCar1.currentCheckpoint].transform) {
			//Check so we dont exceed our checkpoint quantity
			if (PlayerCar1.currentCheckpoint+1<tigerTransform.GetComponent(PlayerCar1).checkPointArray.length) {
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
		}
	}
		
	else if (other.CompareTag("Mouse")) {		
			//Is this transform equal to the transform of checkpointArrays[currentCheckpoint]?
			if (transform==	mouseTransform.GetComponent(PlayerCar).checkPointArray[PlayerCar.currentCheckpoint].transform) {
				//Check so we dont exceed our checkpoint quantity
				if (PlayerCar.currentCheckpoint+1<mouseTransform.GetComponent(PlayerCar).checkPointArray.length) {
					//Add to currentLap if currentCheckpoint is 0
					if(PlayerCar.currentCheckpoint==0)
						PlayerCar.currentLap++;
					PlayerCar.currentCheckpoint++;
				} else {
					//If we dont have any Checkpoints left, go back to 0
					PlayerCar.currentCheckpoint=0;
				}
				print("in mouse");
				//Update the 3dtext
		
			}
			print("in mouse");
		}
		
		
	}

