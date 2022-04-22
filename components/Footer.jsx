import Link from "next/link";
import Image from "next/image";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "../public/dark1.svg";

const Footer = () => {
	return (
		<footer className="bg-primary py-5">
			<MDBContainer>
				<MDBRow center md="between" className="gy-4">
					<MDBCol size={12} md={4} className="text-center">
						<MDBRow start className="text-md-start">
							<MDBCol size={12}>
								<Link href="/">
									<a>
										<Image src="/fk.svg" width={90} height={50} />
									</a>
								</Link>
							</MDBCol>
							<MDBCol size={12} className="d-none d-md-block">
								<span>copy</span>
							</MDBCol>
						</MDBRow>
					</MDBCol>
					<MDBCol size={12} md={8}>
						<div className="d-flex flex-column flex-md-row justify-content-end">
							<MDBRow className="text-center">
								<MDBCol>
									<ul className="list-group list-group-light">
										<li className="">
											<a href="#!">section</a>
										</li>
										<li>
											<a href="#!">section</a>
										</li>
										<li>
											<a href="#!">section</a>
										</li>
									</ul>
								</MDBCol>
								<MDBCol>
									<ul className="list-group list-group-light">
										<li>
											<a href="github">a</a>
										</li>
										<li>
											<a href="twitter">a</a>
										</li>
										<li>
											<a href="linked">a</a>
										</li>
									</ul>
								</MDBCol>
							</MDBRow>
						</div>
					</MDBCol>

					<MDBCol className="d-md-none text-center">copy</MDBCol>
				</MDBRow>
			</MDBContainer>
		</footer>
	);
};

export default Footer;
