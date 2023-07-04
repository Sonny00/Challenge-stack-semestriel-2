import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Tooltip } from "react-tippy";

const FooterThree = () => {
  return (
    <footer className="space-pt--100 space-pb--100 border-top--grey text-center">
      <Container>
        <Row>
          <Col lg={12}>
            {/*=======  footer navigation  =======*/}
            <nav className="footer-nav-container footer-nav-container--horizontal space-mb--50">
              <ul>
                <li>
                  <a href="#">A PROPOS</a>
                </li>

                <li>
                  <a href="#">NOUS CONTACTER</a>
                </li>
              </ul>
            </nav>

            {/*=======  social icons  =======*/}
            <div className="footer-social-icons space-mb--50">
              <ul>
                <li>
                  <Tooltip
                    title="Twitter"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.twitter.com" target="_blank">
                      <FaTwitter />
                    </a>
                  </Tooltip>
                </li>
                <li></li>
                <li>
                  <Tooltip
                    title="Instagram"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.instagram.com" target="_blank">
                      <FaInstagram />
                    </a>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip
                    title="Youtube"
                    position="top"
                    trigger="mouseenter"
                    animation="shift"
                    arrow={true}
                    duration={200}
                  >
                    <a href="https://www.youtube.com" target="_blank">
                      <FaYoutube />
                    </a>
                  </Tooltip>
                </li>
              </ul>
            </div>

            {/*=======  copyright text  =======*/}
            <div className="footer-copyright-text">
              EsgiVroom votre site d'achat de moto |{" "}
              <span>(+33) 1 56 06 90 41 </span> &copy;{" "}
              {new Date().getFullYear() + " "}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterThree;
