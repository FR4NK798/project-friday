import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import InputGroup from "react-bootstrap/InputGroup";
import logo from "../assets/logo/logo.png";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const initialSearch = {
  text: "",
};

const SideBarComponent = () => {
  const [searchArtist, setSearchArtist] = useState(initialSearch);
  const [musicSearch, setMusicSearch] = useState([]);


  return (
    <Col xs={2}>
      {/* <div class="col col-2"> */}
      <Navbar
        expand="md"
        id="sidebar"
        className="justify-content-between navbar fixed-left"
      >
        {/* <nav
        class="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      > */}
        <Container className="flex-column align-items-start">
          {/* <div class="container flex-column align-items-start"> */}
          <Link to={"/"}>
          <div className="navbar-brand">
          {/* <a className="navbar-brand" href="index.html"> */}
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </div>
          </Link>

          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <button
            class="navbar-toggler"
            type="button"
            data-toggle='collapse'
            data-target='#navbarNavAltMarkup'
            aria-controls='navbarNavAltMarkup'
            aria-expanded='false'
            aria-label='Toggle navigation'
          > */}
            <span className="navbar-toggler-icon"></span>
            {/* </button> */}
          </Button>

          <Navbar.Collapse id="navbarNavAltMarkup">
            {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> */}
            <div className="navbar-nav">
              <ul>
                <li>
                  <Nav.Link
                    href="#"
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    {/* <a
                    class="nav-item nav-link d-flex align-items-center"
                    href="#"
                  > */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-house-door-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>
                    Home
                    {/* <i className="bi bi-house-door-fill"></i>&nbsp; Home */}
                    {/* </a> */}
                  </Nav.Link>
                </li>
                <li>
                  <Nav.Link
                    href="#"
                    className="nav-item nav-link d-flex align-items-center"
                  >
                    {/* <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  > */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-book-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    Your Library
                    {/* <i className="bi bi-book-fill"></i>&nbsp; Your Library */}
                    {/* </a> */}
                  </Nav.Link>
                </li>
                <li>
                  {/* <Form
                    onSubmit={searchArtistSongs}
                    className="input-group mt-3"
                  > */}
                  <Form
                    
                    className="input-group mt-3"
                  >
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        required
                        onChange={
                          // qui dentro ci va una funzione che viene eseguita ad ogni cambiamento dell'input
                          (e) => {
                            setSearchArtist({
                              ...searchArtist, // riportando qui dentro TUTTE le proprietà di reservation
                              text: e.target.value, // il carattere che ho appena scritto
                            });
                              console.log('campo di testo', searchArtist.text)
                          }
                        }
                        value={searchArtist.text}
                      />
                    </Form.Group>
                    {/* originale */}
                    {/* <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    /> */}
                    {/* originale */}
                    <div className="input-group-append">
                      <Link to={"/search/" + searchArtist.text}>
                        <Button
                          size="sm"
                          variant="outline-secondary"
                          className="h-100"
                          type="submit"
                          
                        >
                          GO
                        </Button>
                      </Link>
                    </div>
                  </Form>
                </li>
              </ul>
            </div>
            {/* </div> */}
          </Navbar.Collapse>
          {/* </div> */}
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            {/* <button class="btn signup-btn" type="button"> */}
            Sign Up
            {/* </button> */}
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          {/* <button class="btn login-btn" type="button"> */}
          {/* </button> */}
          <a href="#cookie">Cookie Policy</a> |<a href="#privacy"> Privacy</a>
        </div>
        {/* </nav> */}
      </Navbar>
      {/* </div> */}
    </Col>
  );
};
export default SideBarComponent;
