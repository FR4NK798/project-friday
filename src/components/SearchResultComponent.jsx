import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SearchResultComponent = (props) => {
  const [musicSearch, setMusicSearch] = useState([]);
  const [artistParams, setArtistParams] = useState("");

  const params = useParams();
  console.log("PARAMS", params);
  //   const navigate = useNavigate();

  const searchArtistSongs = (e) => {
    // e.preventDefault();

    const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
    const artist = params.arist;
    const completeUrl = url + artist;
    fetch(completeUrl, {
      method: "GET",

      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    })
      .then((res) => {
        console.log("RES", res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Errore nel salvataggio della prenotazione");
        }
      })
      .then((objFetch) => {
        setMusicSearch(objFetch.data);
        console.log("obj fetch", objFetch);
      })
      .catch((err) => {
        // finirete qui dentro se la Promise viene rifiutata!
        console.log("ERRORE!", err);
      });
  };
  useEffect(() => {
    searchArtistSongs();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("parames dentro search component", params);
  return (
    <Row>
      {/* <div class="row"> */}
      <Col xs={10}>
        {/* <div class="col-10"> */}
        {/* <div id="searchResults" style={{ display: "none" }}> */}
        <div id="searchResults">
          {/* <div id="searchResults" style="display: none"> */}
          <h2>Search Results</h2>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
            {/* dove fare map stato */}
            {musicSearch.map((songInfo) => {
              return (
                <div
                  className="col text-center"
                  id={songInfo.id}
                  key={songInfo.id}
                >
                  <img
                    className="img-fluid"
                    src={songInfo.album.cover_medium}
                    alt="track"
                  />
                  <p>
                    Track:{" "}
                    {songInfo.title.length < 16
                      ? songInfo.title
                      : songInfo.title.substring(0, 16)}
                  </p>
                  {/* <br> */}
                  <p>Artist: {songInfo.artist.name}</p>
                </div>
              );
            })}
          </Row>
        </div>
        {/* </div> */}
      </Col>
      {/* </div> */}
    </Row>
  );
};
export default SearchResultComponent;
