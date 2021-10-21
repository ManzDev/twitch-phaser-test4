import Phaser from "phaser";

export class BitmapFontScene extends Phaser.Scene {
  constructor() {
    super({ key: "BitmapFontScene", active: false });
  }

  preload() {
    this.load.bitmapFont("ice", "assets/fonts/iceicebaby.png", "assets/fonts/iceicebaby.xml");
  }

  create() {
    const sf = 1 / 16;

    for (let i = 0; i < 16; i++) {
      this.add.dynamicBitmapText(200, 300, "ice", "Phaser", 128).setScrollFactor(sf * i, 1 / 32 * i);
    }

    const cursors = this.input.keyboard.createCursorKeys();
    const controlConfig = {
      camera: this.cameras.main,
      left: cursors.left,
      right: cursors.right,
      up: cursors.up,
      down: cursors.down,
      zoomIn: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Q),
      zoomOut: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.E),
      acceleration: 0.03,
      drag: 0.0005,
      maxSpeed: 0.5
    };

    this.controls = new Phaser.Cameras.Controls.SmoothedKeyControl(controlConfig);
  }

  update(time, delta) {
    this.controls.update(delta);
  }
}
