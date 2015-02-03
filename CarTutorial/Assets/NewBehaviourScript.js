#pragma strict
var forwardSpeed: float = 5;
var turnSpeed: float = 2;
function Start () {

}

function Update () {
	var forwardMoveAmount= Input.GetAxis("Vertical1")*forwardSpeed;
	var turnAmount = Input.GetAxis("Horizontal1")*turnSpeed;
	
	transform.Rotate(0,turnAmount,0);
	rigidbody.AddRelativeForce(0,0,forwardMoveAmount);
}