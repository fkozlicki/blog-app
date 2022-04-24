import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBCollapse,
} from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState(false);

	const toggleCollapse = () => {
		setIsOpen(!isOpen);
	};

	const toggleActive = () => {
		setActive(!active);
	};

	const handleToggles = () => {
		toggleCollapse();
		toggleActive();
	};

	return (
		<>
			<MDBNavbar
				data-mdb-animation="fade-in"
				data-mdb-toggle="animation"
				data-mdb-animation-reset="true"
				className="fixed-top bg-primary shadow-none"
				expand="md"
				light
			>
				<MDBContainer>
					<MDBNavbarBrand tag="div" className="text-white brand-size">
						<Link href="/">
							<a className="d-flex ">
								<Image src="/fk.svg" width={230} height={100} alt="fk logo" />
							</a>
						</Link>
					</MDBNavbarBrand>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						aria-expanded="false"
						mdb-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-label="Toggle navigation"
						onClick={handleToggles}
					>
						<div className={`hamburger hamburger-1 ${active ? "active" : ""}`}>
							<span className="line"></span>
							<span className="line"></span>
							<span className="line"></span>
						</div>
					</button>
					<MDBCollapse id="navbarCollapse" show={isOpen} navbar>
						<MDBNavbarNav left>
							<MDBNavbarItem>
								<Link href="/">
									<a className="d-block py-2 px-md-3 fw-bold link">Home</a>
								</Link>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<Link href="/#posts">
									<a className="d-block py-2 px-md-3 fw-bold link">Posty</a>
								</Link>
							</MDBNavbarItem>
							<MDBNavbarItem>
								<Link href="/#contact">
									<a className="d-block py-2 px-md-3 fw-bold link">Kontakt</a>
								</Link>
							</MDBNavbarItem>
						</MDBNavbarNav>
						<div className="d-flex justify-content-center gap-4 py-2">
							<a
								className="d-inline-flex gap-2 link"
								href="https://github.com/fkozlicki"
								target="_blank"
								rel="noreferrer noopener"
								aria-label="Przejdź do mojego Githuba"
							>
								<FontAwesomeIcon
									aria-hidden="true"
									width={20}
									icon={faGithub}
								/>
							</a>

							<a
								className="d-inline-flex gap-2 link"
								href="https://twitter.com/FKozlicki"
								target="_blank"
								rel="noreferrer noopener"
								aria-label="Przejdź do mojego Twittera"
							>
								<FontAwesomeIcon
									aria-hidden="true"
									width={20}
									icon={faTwitter}
								/>
							</a>

							<a
								className="d-inline-flex gap-2 link"
								href="https://www.linkedin.com/in/fkozlicki/"
								target="_blank"
								rel="noreferrer noopener"
								aria-label="Przejdź do mojego LinkedIna"
							>
								<FontAwesomeIcon
									aria-hidden="true"
									width={20}
									icon={faLinkedin}
								/>
							</a>
						</div>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</>
	);
};

export default Navbar;
