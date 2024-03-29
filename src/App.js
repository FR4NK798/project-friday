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
    <BrowserRouter>
      <Container fluid>
        <Row>
          <SideBarComponent />

          <Col xs={12} md={9} className="offset-md-3 mainPage">
            <Routes>
              <Route
                path="/search/:artist"
                element={<SearchResultComponent />}
              />
              <Route
                path="/"
                element={
                  <>
                    <NavHomeComponent />
                    <SectionComponent
                      section={"Rock Classics"}
                      propId={"rock"}
                      artistFetch={"queen"}
                    />
                    <SectionComponent
                      section={"Pop Culture"}
                      propId={"pop"}
                      artistFetch={"katyperry"}
                    />
                    <SectionComponent
                      section={"#HipHop"}
                      propId={"hiphop"}
                      artistFetch={"eminem"}
                    />
                  </>
                }
              />
            </Routes>
          </Col>
        </Row>
      </Container>

      {/* player */}
      <PlayerComponent />
    </BrowserRouter>
  );
}

export default App;
