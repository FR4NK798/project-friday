import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBarComponent from "./components/SideBarComponent";
import NavHomeComponent from "./components/NavHomeComponent";
import SearchResultComponent from "./components/SearchResultComponent";
import SectionComponent from "./components/SectionComponent";
import PlayerComponent from "./components/PlayerComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <SideBarComponent />
            <Routes>
              <Col xs={12} md={9} className="offset-md-3 mainPage">
                <Route path="/" element={<NavHomeComponent />}></Route>

                <Route
                  path="/search:searchArtist.text"
                  element={<SearchResultComponent />}
                />

                {/* 3 */}
                <Route path="/" element={<SectionComponent
                  section={"Rock Classics"}
                  propId={"rockSection"}
                  artistFetch={"queen"}
                />}></Route>
                

                <Route path="/" element={<SectionComponent
                  section={"Pop Culture"}
                  propId={"popSection"}
                  artistFetch={"katyperry"}
                />}></Route>
                

                <Route path="/" element={ <SectionComponent
                  section={"#HipHop"}
                  propId={"hipHopSection"}
                  artistFetch={"eminem"}
                />}></Route>
                
              </Col>
            </Routes>
          </Row>
        </Container>

        {/* player */}
        <PlayerComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
