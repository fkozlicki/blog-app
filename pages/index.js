import {
	Navbar,
	Hero,
	About,
	Recent,
	Contact,
	Footer,
	Meta,
} from "../components/";
import { getPosts } from "../services";

export default function Home({ posts }) {
	return (
		<>
			<Meta />
			<header id="header">
				<Navbar />
				<Hero />
			</header>
			<main className="bg-background">
				<About />
				<Recent posts={posts} />
				<Contact />
			</main>
			<Footer />
		</>
	);
}

export async function getStaticProps({ req, res }) {
	const posts = (await getPosts()) || [];

	return {
		props: { posts },
	};
}
