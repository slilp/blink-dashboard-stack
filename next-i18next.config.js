/** @type {import('next-i18next').UserConfig} */
// **** need to rerun when changing locales files
const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"],
    localePath: path.resolve("./public/locales"),
  },
};
