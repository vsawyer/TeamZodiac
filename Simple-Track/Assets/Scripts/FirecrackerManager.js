#pragma strict


	public class Items {
		private var FC : int;
		
		// constructor
		public function Items() {
			FC = 0;
		}
		public function decreaseFC() {
			//if (player = player1) {
				FC--;
			//}
			//else {
			//	if (player2FC < 0)
			//		player2FC--;
			//}
		}
		public function increaseFC() {
			//if (player.CompareTag = player1) {
					FC++;
			/*}
			else {
					player2FC++;
			}*/
		}
		public function giveMe(){
			return FC;
		}
		/*public void getFC(player : int) {
			if (player = player1) {
				return player1Items;
			}
			else {
				return player2Items;
			}*/
		//}
	}
	public var firecrackers1 = new Items();
	//public var player1Items : Items = new Items();
	//public var player2Items : Items = new Items();
