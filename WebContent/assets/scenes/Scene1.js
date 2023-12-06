
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var Player = this.add.image(83.61054, 357.95898, "textures", "Player");
		
		var coin = this.add.image(515.4553, 373.2006, "textures", "coin");
		
		this.fPlayer = Player;
		this.fCoin = coin;
		
	}
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.cursors = this.input.keyboard.createCursorKeys();
		this.physics.add.existing(this.fPlayer);
		this.physics.add.existing(this.fCoin);
		
		this.physics.add.overlap(this.fPlayer, this.fCoin, this.hit, null, this);
		
		this.createScore();
		
	}
	
	createScore(){
		this.score = 0;
		var style = {fonts: '20px Arial', fill: '#fff'};
		
		this.scoreText = this.add.text(20,20, 'score: ' + this.score, style);
	}
	
	hit() {
		this.fCoin.x = Phaser.Math.Between(100, 600);
		this.fCoin.y = Phaser.Math.Between(100, 500);
		
		this.score += 10;
		this.scoreText.setText('score: ' + this.score);
		
		this.tweens.add({
			targets: this.fPlayer, 
			duration: 200,
			scaleX: 1.3,
			scaleY: 1.3,
			yoyo: true,
		});
	}

	update() {
	
		if (this.cursors.right.isDown) {
			this.fPlayer.x += 6;
		} else if(this.cursors.left.isDown) {
			this.fPlayer.x -= 6;
		}
		
		if (this.cursors.down.isDown) {
			this.fPlayer.y += 5;
		} else if(this.cursors.up.isDown) {
			this.fPlayer.y -= 5;
		}
		
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
