/** @type {import('next').NextConfig} **/
const withFonts = require("next-fonts");
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["media.graphassets.com"],
		disableStaticImages: true,
	},
};

module.exports = withPlugins([withFonts, withImages], nextConfig);
