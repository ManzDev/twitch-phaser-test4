import Phaser from "phaser";

// Plugins
import SceneWatcherPlugin from "phaser-plugin-scene-watcher";

// Scenes
import { TextScene } from "./scenes/TextScene.js";
import { GoogleFontScene } from "./scenes/GoogleFontScene.js";
import { CustomFontScene } from "./scenes/CustomFontScene.js";
import { BitmapFontScene } from "./scenes/BitmapFontScene.js";

// Modules
import { webfontLoader } from "./modules/webfontLoader.js";

webfontLoader();

const config = {
  type: Phaser.WEBGL,
  width: 1024,
  height: 768,
  backgroundColor: "#000",
  pixelArt: true,
  plugins: {
    global: [
      { key: "SceneWatcher", plugin: SceneWatcherPlugin, start: false }
    ]
  },
  scene: [CustomFontScene, BitmapFontScene, GoogleFontScene, TextScene]
};

// eslint-disable-next-line
const game = new Phaser.Game(config);
