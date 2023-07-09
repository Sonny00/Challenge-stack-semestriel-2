import { Container, Row, Col } from "react-bootstrap";
import clsx from "clsx";

const BreadcrumbOne = ({ children, backgroundImage, pageTitle, className }) => {
  return (
    <div
      className={clsx("breadcrumb-area space-pt--70 space-pb--70", className)}
      style={{
        backgroundImage: `url("assets/images/backgrounds/breadcrumb-bg-4.jpg")`,
      }}
    >
      <Container>
        <Row>
          <Col>
            <h1 className="breadcrumb__title">{pageTitle}</h1>
            {children}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BreadcrumbOne;
