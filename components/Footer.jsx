import Link from "next/link";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "../public/dark1.svg";

const Footer = () => {
	return (
		<footer className="pt-5 pb-2 bg-background">
			<MDBContainer>
				<MDBRow className="gy-4 gy-md-6">
					<MDBCol size="12">
						<a
							href="#header"
							className="my-link display-4 d-block fw-normal text-center m-0"
						>
							<img src={logo} alt="logo" className="img-fluid" width="400" />
						</a>
					</MDBCol>
					<MDBCol size="12" md="6" className="text-center ">
						<p className="m-0 fs-6 ">
							<FontAwesomeIcon icon={faEnvelope} width="16" className="me-2" />
							filip.kozlickii@gmail.com
						</p>
						<a href="#!" className="my-link m-0 fs-6">
							<FontAwesomeIcon icon={faGlobe} width="16" className="me-2" />
							www.kozlicki.com
						</a>
					</MDBCol>
					<MDBCol size="12" md="6" className="text-center ">
						<Link href="/contact">
							<a className="my-link d-block">Kontakt</a>
						</Link>
						<Link href="/blog">
							<a className="my-link d-block">Blog</a>
						</Link>
					</MDBCol>
					<MDBCol>
						<MDBTypography className="text-center m-0">
							<small>@copyright All rights reserved.</small>
						</MDBTypography>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</footer>
	);
};

export default Footer;
