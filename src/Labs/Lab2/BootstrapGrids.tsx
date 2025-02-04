import { Row, Col } from "react-bootstrap";

export default function BootstrapGrid() {
  return (
    <div>
      <h2>Bootstrap</h2>
      <h2>Responsive Grid</h2>
      <Row>
        <Col
          xs={12}
          sm={4}
          md={8}
          lg={2}
          xl={3}
          className="bg-danger text-white"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          similique fugit dolorem dolores dignissimos, molestiae sequi earum
          error nostrum voluptate perspiciatis. Quod quasi labore, iure mollitia
          eos omnis assumenda voluptas!
        </Col>
        <Col
          xs={12}
          sm={8}
          md={4}
          lg={8}
          xl={7}
          className="bg-success text-white"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
          similique fugit dolorem dolores dignissimos, molestiae sequi earum
          error nostrum voluptate perspiciatis. Quod quasi labore, iure mollitia
          eos omnis assumenda voluptas!
        </Col>
        <Col xl={2} className="bg-primary text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          atque aliquid reprehenderit neque nemo voluptatibus! Cumque
          accusantium tempora qui ipsum itaque, dicta non? Aliquam rerum,
          excepturi in vitae facere nobis.
        </Col>
      </Row>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>
        <Row>
          <Col className="bg-danger text-white">
            <h3>Left half</h3>
          </Col>
          <Col className="bg-primary text-white">
            <h3>Right half</h3>
          </Col>
        </Row>
        <Row>
          <Col md="4" className="bg-warning">
            <h3>One thirds</h3>
          </Col>
          <Col md="8" className="bg-success text-white">
            <h3>Two thirds</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="2" className="bg-dark text-white">
            <h3>Sidebar</h3>
          </Col>
          <Col xs="8">
            <h3>Main content</h3>
          </Col>
          <Col xs="2" className="bg-info">
            <h3>Sidebar</h3>
          </Col>
        </Row>
      </div>
    </div>
  );
}
