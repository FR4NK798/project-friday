import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import shuffle from "../assets/playerbuttons/shuffle.png";
import prev from "../assets/playerbuttons/prev.png";
import play from "../assets/playerbuttons/play.png";
import next from "../assets/playerbuttons/next.png";
import repeat from "../assets/playerbuttons/repeat.png";

const PlayerComponent = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#shuffle">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#prev">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#play">
                  <img src={play} alt="play" />
                </a>
                <a href="#next">
                  <img src={next} alt="next" />
                </a>
                <a href="#repeat">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <ProgressBar className="progress mt-3" />;
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default PlayerComponent;
