import { MDBTypography, MDBBtn } from "mdb-react-ui-kit";
import image from "../public/bg.webp";
import logo from "../public/logo2.png";

const Hero = () => {
	return (
		<div
			className="text-center bg-image vh-100"
			style={{
				backgroundImage: `url(${image})`,
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}
		>
			<div
				className="w-100 h-100 d-flex align-items-center justify-content-center"
				style={{
					background: "rgba(0, 0, 0, 0.7)",
				}}
			>
				<div className="px-3 d-flex flex-column gap-4 text-white">
					<img src={logo} alt="logo" className="img-fluid" />
					<MDBTypography tag="div" className="fs-3 fw-normal">
						Dowiedz się więcej o frontendzie rezem z nami.
					</MDBTypography>
					<MDBBtn
						tag="a"
						rounded
						href="#recent"
						className="align-self-center"
						style={{ padding: ".75rem 1.4rem", fontSize: ".835rem" }}
					>
						Najnowsze artykuły
					</MDBBtn>
				</div>
			</div>
		</div>
	);
};

export default Hero;
