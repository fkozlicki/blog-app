import Head from "next/head";
import logo from "../public/logo.png";

const Meta = ({ title, keywords, description }) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="keywords" content={keywords} />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<link rel="icon" href={logo} />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "Programista HTML",
	keywords:
		"programista html blog informacje nowości programiści webdev początkujący",
	description: "Blog dla początkujących web developerów",
};

export default Meta;
