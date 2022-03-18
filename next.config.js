/** @type {import('next').NextConfig} **/
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const nextConfig = {
	reactStrictMode: true,
	images: {
		disableStaticImages: true,
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
};

module.exports = withPlugins([withFonts, withImages], nextConfig);
