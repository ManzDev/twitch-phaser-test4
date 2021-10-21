import Phaser from "phaser";

export class GoogleFontScene extends Phaser.Scene {
  constructor() {
    super({ key: "GoogleFontScene", active: false });
  }

  create() {
    const fontStyle = {
      fontSize: "42px",
      fontFamily: "Lobster",
      color: "#fff",
      stroke: "gold",
      strokeThickness: 4,
      align: "center",
      maxLines: 4,
      shadow: {
        color: "#000000",
        fill: true,
        offsetX: 2,
        offsetY: 2,
        blur: 8
      }
    };

    const text = [
      "Hola a todos",
      "¿cómo están?",
      "Yo muy bien",
      "En el chat a veces se portan mal",
      "Pero no hay problema",
      "No pasa nada"
    ];

    // this.make.text(config);
    this.add.text(400, 600, text, fontStyle);
  }
}
