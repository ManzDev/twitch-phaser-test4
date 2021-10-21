import WebFont from "webfontloader";

export const webfontLoader = () => {
  WebFont.load({
    google: {
      families: ["Lobster"]
    },
    active() {
      console.log("active");
    }
  });
};
