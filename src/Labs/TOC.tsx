import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function TOC() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs" id="wd-a">
          Labs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link active as={Link} to="/Labs/Lab1" id="wd-a1">
          Lab 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs/Lab2" id="wd-a2">
          Lab 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Labs/Lab3" id="wd-a3">
          Lab 3
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Kambaz" id="wd-a3">
          Kambaz
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
