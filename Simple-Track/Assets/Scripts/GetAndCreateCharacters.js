#pragma strict


var ratPrefab : GameObject;
var tigerPrefab : GameObject;
var player1Choice : int = 0;
var player2Choice : int = 0;
function Awake () {
	player1Choice = PlayerPrefs.GetInt("Player1Choice");
	player2Choice = PlayerPrefs.GetInt("Player2Choice");
	var player1 : GameObject;
	var player2 : GameObject;
	if  (player1Choice == 0) {
		player1 = Instantiate(ratPrefab, new Vector3(-170, .45, 72), Quaternion.identity);
		player1.transform.FindChild("Camera").gameObject.camera.rect = Rect(0,0.5,1,0.5);
		//rat.camera.rect = Rect(0,0.5,1,0.5);
	}
	if (player1Choice == 1) {
		player1 = Instantiate(tigerPrefab, new Vector3(-170, .45, 72), Quaternion.identity);
		player1.transform.FindChild("Camera").gameObject.camera.rect = Rect(0,0.5,1,0.5);
		//ratPrefab.SetActive(false);
		//tigerPrefab.SetActive(true);
	}
	if  (player2Choice == 0) {
		// saving which player chose this animal, so that it is known when getting input
		PlayerPrefs.SetString("ratCharacter2", "player2");
	
		player2 = Instantiate(ratPrefab, new Vector3(-159, .45, 50), Quaternion.identity);
		player2.transform.FindChild("Camera").gameObject.camera.rect = Rect(0,0,1,0.5);
		//player2.transform.name = "player2";
		//rat.camera.rect = Rect(0,0.5,1,0.5);
	}
	if (player2Choice == 1) {
		// saving which player chose this animal, so that it is known when getting input
		PlayerPrefs.SetString("tigerCharacter2", "player2");
		player2 = Instantiate(tigerPrefab, new Vector3(-159, .45, 50), Quaternion.identity);
		player2.transform.FindChild("Camera").gameObject.camera.rect = Rect(0,0,1,0.5);
		//player2.transform.name = "player2";
		//ratPrefab.SetActive(false);
		//tigerPrefab.SetActive(true);
	}
	player1.transform.name = "player1";
	player2.transform.name = "player2";
	

}
