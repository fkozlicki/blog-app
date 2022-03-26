import Image from "next/image";
import { MDBTypography, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import aboutImage from "../public/design.webp";

const About = () => {
	return (
		<>
			<section className="py-5">
				<MDBTypography
					tag="h1"
					className="display-4 text-uppercase text-center mb-4"
				>
					O mnie
				</MDBTypography>
				<MDBContainer>
					<MDBRow className="gap-4 gap-md-0 align-items-center">
						<MDBCol size="12" md="6" className="mt-3 text-center text-md-start">
							<MDBTypography variant="p" className="fs-5 m-0 lh-sm">
								Cześć, jestem Filip i witam Cię na moim blogu. Udostępniam tu
								wszystko co sam chciałbym wiedzieć, gdy zaczynałem naukę
								front-endu.
							</MDBTypography>
						</MDBCol>
						<MDBCol size="12" md="6" className="position-relative order-first">
							<img src={aboutImage} alt="design" className="img-fluid" />
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</section>
		</>
	);
};

export default About;
