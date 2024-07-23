const concat = require("concat");
(async function build() {
  const files = [
    "./dist/angular-map/runtime.js",
    "./dist/angular-map/polyfills.js",
    "./dist/angular-map/main.js",
  ];
  await concat(files, "./dist/angular-map/angular-map.js");
})();
