import Image from "next/image";
import { MDBTypography, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import aboutImage from "../assets/images/design.webp";

const About = () => {
	return (
		<>
			<section className="py-5">
				<MDBTypography
					tag="h1"
					className="display-4 text-uppercase text-center mb-4"
				>
					O nas
				</MDBTypography>
				<MDBContainer>
					<MDBRow className="gap-4 gap-md-0 align-items-center">
						<MDBCol
							size="12"
							md="6"
							className="position-relative order-md-last"
						>
							<Image width="626" height="417" src={aboutImage} alt="design" />
						</MDBCol>
						<MDBCol size="12" md="6" className="mt-3 text-center text-md-start">
							<MDBTypography tag="h1" className="fs-2 mb-3">
								Dawka ciekawej wiedzy dla początkujących web developerów.
							</MDBTypography>
							<MDBTypography variant="p" className="fs-5 m-0">
								Smart dev to blog na, którym udostępniamy ciekawe i przydane
								informacje oraz ciekawostki na temat front-end&apos;u.
							</MDBTypography>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
		</>
	);
};

export default About;
