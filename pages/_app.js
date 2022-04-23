// styles
// import "mdb-react-ui-kit/dist/scss/mdb.free.scss";
import "../scss/main.scss";
// moment settings
import moment from "moment";
import "moment/locale/pl";
moment.locale("pl");
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
