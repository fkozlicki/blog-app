import Link from "next/link";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faGlobe } from "@fortawesome/free-solid-svg-icons";
import logo from "../public/logo1.png";

const Footer = () => {
	return (
		<footer className="pt-5 pb-2 ">
			<MDBContainer>
				<MDBRow className="align-items-center gy-4">
					<MDBCol size="12" md="4" lg="6">
						<a
							href="#header"
							className="my-link display-4 d-block fw-normal text-center m-0"
						>
							<img src={logo} alt="logo" className="img-fluid" />
						</a>
					</MDBCol>
					<MDBCol
						size="12"
						md="4"
						lg="3"
						className="text-center order-md-first text-md-start"
					>
						<p className="m-0 fs-6 ">
							<FontAwesomeIcon icon={faEnvelope} width="16" className="me-2" />
							filip.kozlickii@gmail.com
						</p>
						<a href="#!" className="my-link m-0 fs-6">
							<FontAwesomeIcon icon={faGlobe} width="16" className="me-2" />
							www.kozlicki.com
						</a>
					</MDBCol>
					<MDBCol size="12" md="4" lg="3" className="text-center text-md-end">
						<Link href="/contact">
							<a className="my-link d-block">Kontakt</a>
						</Link>
						<Link href="/blog">
							<a className="my-link d-block">Blog</a>
						</Link>
					</MDBCol>
				</MDBRow>

				<MDBTypography className="text-center m-0 mt-6">
					<small>@copyright All rights reserved.</small>
				</MDBTypography>
			</MDBContainer>
		</footer>
	);
};

export default Footer;
