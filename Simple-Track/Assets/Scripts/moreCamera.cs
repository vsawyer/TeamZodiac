using UnityEngine;
using System.Collections;

public class moreCamera : MonoBehaviour {
	
	public float LockedY = 0; public float LockedZ = 0;
	
	public GameObject player;
	
	void Update() { 
		transform.position = player.transform.position;
	}
}
