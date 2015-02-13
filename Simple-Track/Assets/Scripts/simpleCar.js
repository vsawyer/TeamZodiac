#pragma strict
var fs : float = 3;
var turnSpeed: float = 2;
function Start () {

}

function Update () {
	var fm = Input.GetAxis("Vertical")*fs;
	var ta = Input.GetAxis("Horizontal")*turnSpeed;
	transform.Rotate(0,ta,0);
	rigidbody.AddRelativeForce(-fm,0,0);
}