using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class KeyInput : MonoBehaviour {
	
	string[] buttonNames = {"Rat", "Tiger"};
	string[] buttonNames2 = {"Rat2", "Tiger2"};

	int currentSelection = 0; // current button selected
	int currentSelection2 = 0;

	public Button rat;
	public Button tiger;
	private Button[] buttons;
	public Button rat2;
	public Button tiger2;
	private Button[] buttons2;

	public Button start;


	private bool[] boolButtons;

	public Texture ratTexture;
	public Texture tigerTexture;
	private Texture[] textures;

	private Color selectedColor;
	private Color unselectedColor;

	void Start() {
		boolButtons = new bool[buttonNames.Length];

		textures = new Texture[buttonNames.Length];
		buttons = new Button[buttonNames.Length];
		buttons2 = new Button[buttonNames2.Length];

		selectedColor = Color.yellow;
		unselectedColor = Color.blue;

		buttons [0] = rat;
		buttons [1] = tiger;

		buttons2 [0] = rat2;
		buttons2 [1] = tiger2;

		textures [0] = ratTexture;
		textures [1] = tigerTexture;
	}
	void OnGUI() {

		// Generate buttons, store into buttons array
		for (int i = 0; i < buttonNames.Length; i++) {
			GUI.SetNextControlName(buttonNames[i]);
		}

		// Cycling through buttons
		if (Input.GetButton("Right")) {
			if (currentSelection < buttonNames.Length-1) {
				buttons[currentSelection].GetComponent<Image>().color = unselectedColor;
				currentSelection++;
				print ("in right");
				/*image = rat.GetComponent<Image>();
				color.r = 1; //(put percent out of 1 for amount of red on button i.e. I want it all red)
				color.g = 0.1f; //(with a little bit of green, 10% green)
				color.b = 0.1f; //(and a little bit of blue, 10% blue)
				color.a = 0.5f; //(and the alpha at 50%)
//				ratColor = image.color;
				image.color = color; */
				//GUI.FocusControl(buttonNames[currentSelection + 1]);

				buttons[currentSelection].GetComponent<Image>().color = selectedColor;
			}
		}
		if (Input.GetButton("Left")) {
			if (currentSelection > 0){
				buttons[currentSelection].GetComponent<Image>().color = unselectedColor;
				currentSelection--;
				buttons[currentSelection].GetComponent<Image>().color = selectedColor;
				//GUI.FocusControl(buttonNames[currentSelection]);
			}
			print ("current selection not in left: " + currentSelection);
		}

		if (Input.GetKey (KeyCode.LeftArrow)) {
			if (currentSelection2 > 0){
				print ("in left player 2");
				buttons2[currentSelection2].GetComponent<Image>().color = unselectedColor;
				currentSelection2--;
				buttons2[currentSelection2].GetComponent<Image>().color = selectedColor;
				//GUI.FocusControl(buttonNames[currentSelection]);
			}
			print ("current selection not in left: " + currentSelection);
		}
		if (Input.GetKey (KeyCode.RightArrow)) {
			if (currentSelection2 < buttonNames2.Length-1) {
				buttons2[currentSelection2].GetComponent<Image>().color = unselectedColor;
				currentSelection2++;	
				buttons2[currentSelection2].GetComponent<Image>().color = selectedColor;
			}
		}


		if (Input.GetKeyDown("return")) {
			print ("here");
			PlayerPrefs.SetInt("Player1Choice", currentSelection);
			PlayerPrefs.SetInt("Player2Choice", currentSelection2);
			Application.LoadLevel("simpletrack");
		}
		GUI.DrawTexture(new Rect(125, 25, 150, 130), textures[currentSelection], ScaleMode.ScaleToFit);
		GUI.DrawTexture(new Rect(125, 200, 150, 130), textures[currentSelection2], ScaleMode.ScaleToFit);
	}

}
	
	
	