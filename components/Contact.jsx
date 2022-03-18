import { MDBContainer, MDBTypography, MDBBtn } from "mdb-react-ui-kit";

const Contact = () => {
	return (
		<section className="bg-primary py-5">
			<MDBContainer>
				<div className="d-flex flex-column align-items-center">
					<MDBTypography tag="h1" className="fs-3 text-white text-center mb-4">
						Masz jakieś pytania, chcesz dowiedzieć się wiecej? Napisz do nas!
					</MDBTypography>

					<MDBBtn
						rounded
						color="light"
						href="/contact"
						className="text-black fs-lg-6"
					>
						Kontakt
					</MDBBtn>
				</div>
			</MDBContainer>
		</section>
	);
};

export default Contact;
