#pragma strict
var forwardSpeed: float = 5;
var turnSpeed: float = 2;
function Start () {

}

function Update () {
	var forwardMoveAmount= Input.GetAxis("ws")*forwardSpeed;
	var turnAmount = Input.GetAxis("ad")*turnSpeed;
	
	transform.Rotate(0,turnAmount,0);
	rigidbody.AddRelativeForce(0, 0,forwardMoveAmount);
}