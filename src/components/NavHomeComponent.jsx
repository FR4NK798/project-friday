import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const NavHomeComponent = () => {
  return (
    <Row>
      {/* <div class="row"> */}
      <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
        {/* <div class="col-9 col-lg-11 mainLinks d-none d-md-flex"> */}
        <a href="#trending">TRENDING</a>
        <a href="#podcast">PODCAST</a>
        <a href="#moodsandgenres">MOODS AND GENRES</a>
        <a href="#newreleases">NEW RELEASES</a>
        <a href="#discover">DISCOVER</a>
        {/* </div> */}
      </Col>
      {/* </div> */}
    </Row>
  );
};
export default NavHomeComponent;
