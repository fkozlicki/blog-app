import Link from "next/link";
import Image from "next/image";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
	return (
		<footer className="bg-primary py-5">
			<MDBContainer>
				<MDBRow center between="md" className="gy-5">
					<MDBCol
						size={12}
						md={6}
						className="d-flex flex-column align-items-center align-items-md-start justify-content-between"
					>
						<Link href="/">
							<a>
								<Image src="/fk.svg" alt="logo" width={90} height={50} />
							</a>
						</Link>
						<p className="d-none d-md-inline m-0 copy">
							© 2022 Filip Koźlicki. All Rights Reserved.
						</p>
					</MDBCol>
					<MDBCol size={12} md={4}>
						<MDBRow>
							<MDBCol>
								<div className="d-flex flex-column gap-2 align-items-center align-items-md-end">
									<Link href="/">
										<a className="link">Home</a>
									</Link>
									<Link href="/#posts">
										<a className="link">Posty</a>
									</Link>
									<Link href="/#contact">
										<a className="link">Kontakt</a>
									</Link>
								</div>
							</MDBCol>
							<MDBCol>
								<div className="d-flex flex-column gap-2 align-items-center align-items-md-end">
									<a
										href="https://github.com/fkozlicki"
										target="_blank"
										rel="noreferrer noopener"
										className="d-inline-flex gap-2 link"
									>
										Github <FontAwesomeIcon width={16} icon={faGithub} />
									</a>

									<a
										href="https://twitter.com/FKozlicki"
										target="_blank"
										rel="noreferrer noopener"
										className="d-inline-flex gap-2 link"
									>
										Twitter <FontAwesomeIcon width={16} icon={faTwitter} />
									</a>

									<a
										href="https://www.linkedin.com/in/fkozlicki/"
										target="_blank"
										rel="noreferrer noopener"
										className="d-inline-flex gap-2 link"
									>
										LinkedIn <FontAwesomeIcon width={16} icon={faLinkedin} />
									</a>
								</div>
							</MDBCol>
						</MDBRow>
					</MDBCol>

					<MDBCol className="d-md-none text-center copy">
						© 2022 Filip Koźlicki. All Rights Reserved.
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</footer>
	);
};

export default Footer;
