import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarLink,
	MDBCollapse,
} from "mdb-react-ui-kit";

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
				className={`fixed-top bg-primary shadow-none `}
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
						className="menuBtn navbar-toggler"
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
					<MDBCollapse id="navbarCollapse3" show={isOpen} navbar>
						<MDBNavbarNav left className="justify-content-md-end">
							<MDBNavbarLink href="/">Home</MDBNavbarLink>
							<MDBNavbarLink href="/blog">Blog</MDBNavbarLink>
							<MDBNavbarLink href="/contact">Kontakt</MDBNavbarLink>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</>
	);
};

export default Navbar;
