const path = require("path");

module.exports = {
  // Other webpack configurations...
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets/static_assets"),
    },
  },
};
