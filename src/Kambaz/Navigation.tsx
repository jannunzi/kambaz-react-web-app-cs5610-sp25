import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBook, FaCalendar, FaInbox } from "react-icons/fa";
import { GoBeaker } from "react-icons/go";
import { ImMeter } from "react-icons/im";
import { BsPeople } from "react-icons/bs";

export default function KambazNavigation() {
  return (
    <ListGroup
      id="wd-kambaz-navigation"
      className="d-none d-md-block rounded-0 p-0 m-0 border-0 position-fixed bottom-0 top-0 bg-black"
    >
      <ListGroup.Item
        action
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        className="border-0 bg-black text-danger text-center"
      >
        Northeastern
      </ListGroup.Item>
      <ListGroup.Item
        className="border-0 bg-white text-danger text-center"
        as={Link}
        to="/Kambaz/Account"
        id="wd-account-link"
      >
        <BsPeople className="fs-1" />
        <br />
        Account
      </ListGroup.Item>
      <ListGroup.Item
        className="border-0 bg-black text-danger text-center"
        as={Link}
        to="/Kambaz/Dashboard"
        id="wd-dashboard-link"
      >
        <ImMeter className="fs-1" />
        <br />
        Dashboard
      </ListGroup.Item>
      <ListGroup.Item
        className="border-0 bg-black text-danger text-center"
        as={Link}
        to="/Kambaz/Courses"
        id="wd-course-link"
      >
        <FaBook className="fs-1" />
        <br />
        Courses
      </ListGroup.Item>
      <ListGroup.Item
        className="border-0 bg-black text-danger text-center"
        as={Link}
        to="/Kambaz/Calendar"
        id="wd-calendar-link"
      >
        <FaCalendar className="fs-1" />
        <br />
        Calendar
      </ListGroup.Item>
      <ListGroup.Item
        className="border-0 bg-black text-danger text-center"
        as={Link}
        to="/Kambaz/Inbox"
        id="wd-inbox-link"
      >
        <FaInbox className="fs-1" />
        <br />
        Inbox
      </ListGroup.Item>
      <ListGroup.Item
        className="border-0 bg-black text-danger text-center"
        as={Link}
        to="/Labs"
        id="wd-labs-link"
      >
        <GoBeaker className="fs-1" />
        <br />
        Labs
      </ListGroup.Item>
    </ListGroup>
  );
}
