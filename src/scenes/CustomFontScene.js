import Phaser from "phaser";
import WebFont from "webfontloader";

export class CustomFontScene extends Phaser.Scene {
  constructor() {
    super({ key: "CustomFontScene", active: false });
  }

  create() {
    const add = this.add;

    WebFont.load({
      custom: {
        families: ["DigitalDisco"]
      },
      active() {
        const fontStyle = {
          fontFamily: "DigitalDisco",
          fontSize: 80,
          color: "#fff",
          stroke: "red",
          strokeThickness: 4,
          padding: 20
        };

        add.text(250, 64, "🕹️The face of the\nmoon was in\nshadow.", fontStyle);

        add.text(150, 350, "Waves flung themselves\nat the blue evening.", {
          ...fontStyle,
          fontSize: 64,
          stroke: "#5656ee"
        });
      }
    });
  }
}
