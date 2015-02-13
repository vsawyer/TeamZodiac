#pragma strict

private var accel : Vector3;
public var throttle : float;
private var myRight : Vector3;
private var velo : Vector3;
private var flatVelo : Vector3;
private var relativeVelocity : Vector3;
private var dir : Vector3;
private var flatDir : Vector3;
private var carUp : Vector3;
private var carTransform : Transform;
private var carRigidbody : Rigidbody;
private var engineForce : Vector3;


private var turnVec : Vector3;
private var imp : Vector3;
private var rev : float;
private var actualTurn : float;
private var carMass : float;
private var wheelTransform : Transform[] = new Transform[4];
public var actualGrip : float;
public var horizontal : float;

private var maxSpeedToTurn : float = .2;

public var frontLeftWheel : Transform;
public var frontRightWheel : Transform;
public var rearLeftWheel : Transform;
public var rearRightWheel : Transform;

public var LFWheelTransform : Transform;
public var RFWheelTransform : Transform;

public var WheelL : Collider;
public var WheelR : Collider;

public var power : float = 300;
public var maxSpeed : float = 50;
public var carGrip : float = 70;
public var turnSpeed : float = 3.0;

public var centerOfMass : Transform;

private var slideSpeed : float;
public var mySpeed : float;

private var carRight : Vector3;
private var carFwd : Vector3;
private var tempVEC : Vector3;

var checkPointArray : Transform[]; //Checkpoint GameObjects stored as an array
static var currentCheckpoint : int = 0; //Current checkpoint
static var currentLap : int = 0; //Current lap
static var startPos : Vector3; //Starting position



function Start () {
	Initialize();

}
function Initialize() {
	carTransform = transform;
	carRigidbody = rigidbody;
	carUp = carTransform.up;
	carMass = rigidbody.mass;
	carFwd = Vector3.forward;
	carRight = Vector3.right;
	startPos = transform.position;
	rigidbody.centerOfMass = centerOfMass.localPosition;
	setUpWheels();
}

function Update() {
	carPhysicsUpdate();
	checkInput();
}

function LateUpdate() {
	rotateVisualWheels();
}

function setUpWheels() {
	wheelTransform[0] = frontLeftWheel;
	wheelTransform[1] = rearLeftWheel;
	wheelTransform[2] = frontRightWheel;
	wheelTransform[3] = rearRightWheel;
}

public var rotationAmount : Vector3;

function rotateVisualWheels() {
	LFWheelTransform.localEulerAngles.y = horizontal * 30;
	RFWheelTransform.localEulerAngles.y = horizontal * 30;
	
	rotationAmount = carRight * (relativeVelocity.z * 1.6 * Time.deltaTime * Mathf.Rad2Deg);
	wheelTransform[0].Rotate(0,0,-rotationAmount.x);
	wheelTransform[1].Rotate(0,0,-rotationAmount.x);
	wheelTransform[2].Rotate(0,0,-rotationAmount.x);
	wheelTransform[3].Rotate(0,0,-rotationAmount.x);
}
function checkInput() {
	horizontal = Input.GetAxis("ad");
	throttle = Input.GetAxis("sw");
	}
	
function carPhysicsUpdate() {
	myRight = carTransform.right;
	velo = carRigidbody.velocity;
	tempVEC = Vector3(velo.x, 0, velo.z);
	flatVelo = tempVEC;
	
	dir = transform.TransformDirection(carFwd);
	tempVEC = Vector3(dir.x,0,dir.z);
	flatDir = Vector3.Normalize(tempVEC);
	relativeVelocity = carTransform.InverseTransformDirection(flatVelo);
	slideSpeed = Vector3.Dot(myRight,flatVelo);
	mySpeed = flatVelo.magnitude;
	rev = Mathf.Sign(Vector3.Dot(flatVelo, flatDir));
	engineForce = (flatDir * (power *throttle) * carMass);
	actualTurn = horizontal;
	if(rev<0.1f) {
		actualTurn =- actualTurn;
	}
	turnVec = (((carUp *turnSpeed)*actualTurn) *carMass)*1600;
	
	actualGrip = Mathf.Lerp(100, carGrip, mySpeed * 0.02);
	imp = myRight*(-slideSpeed*carMass*actualGrip);
}
function slowVelocity () {
	carRigidbody.AddForce(-flatVelo*0.8);
}

function FixedUpdate() {
	if (mySpeed <maxSpeed) {
		carRigidbody.AddForce (engineForce * Time.deltaTime);
	}
	if(mySpeed > maxSpeedToTurn) {
		carRigidbody.AddTorque(turnVec * Time.deltaTime);
	} else if (mySpeed < maxSpeedToTurn){
		return;
	}
	carRigidbody.AddForce(imp * Time.deltaTime);
	
	/* var hit : WheelHit;
     var travelL : float = 1.0f;
     var travelR : float = 1.0f;
 
     //bool groundedL = WheelL.GetGroundHit(out hit);
     if (WheelL.GetGroundHit(out hit))
     	travelL = (-WheelL.transform.InverseTransformPoint(hit.point).y - WheelL.radius) / WheelL.suspensionDistance;
 
        //bool groundedR = WheelR.GetGroundHit(out hit);
        if (WheelR.GetGroundHit(out hit))
            travelR = (-WheelR.transform.InverseTransformPoint(hit.point).y - WheelR.radius) / WheelR.suspensionDistance;
 
        float antiRollForce = (travelL - travelR) * AntiRoll;
 
        if (groundedL)
            rigidbody.AddForceAtPosition(WheelL.transform.up * -antiRollForce,
                   WheelL.transform.position);
        if (groundedR)
            rigidbody.AddForceAtPosition(WheelR.transform.up * antiRollForce,
                   WheelR.transform.position);*/
}
	
	
















































