import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/img/logo.svg"; // Import the entire SVG as a component
import NavIcon1 from "../assets/img/nav-icon1.svg";
import NavIcon2 from "../assets/img/nav-icon2.svg";
import NavIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <img src={Logo} alt="Logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jay-patel-a09995113/"><img src={NavIcon1} alt="Nav Icon 1" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100005941031416"><img src={NavIcon2} alt="Nav Icon 2" /></a>
                            <a href="https://www.instagram.com/_jay_5999_/"><img src={NavIcon3} alt="Nav Icon 3" /></a>
                        </div>
                        <p></p>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
