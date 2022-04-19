import "mdb-react-ui-kit/dist/scss/mdb.free.scss";
import "../scss/main.scss";

import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-regular-svg-icons";
import "@fortawesome/free-solid-svg-icons";

import moment from "moment";
import "moment/locale/pl";
moment.locale("pl");

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
