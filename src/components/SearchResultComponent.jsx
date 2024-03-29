import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSongSearchAction } from "../redux/actions";

const SearchResultComponent = (props) => {
  const dispatch = useDispatch();

  const [musicSearch, setMusicSearch] = useState([]);
  const [artistParams, setArtistParams] = useState("");

  const params = useParams();
  console.log("PARAMS", params);

  
  useEffect(() => {
    
    console.log('use effect dirige l orchestra, il maestro use effect vessicchio')
    
    console.log("i grandi PARAMS", params.artist);
    // let artist = params.artist
    dispatch(getSongSearchAction(params));
    
    
    // console.log("dispatch result", dispatch(getSongSearchAction(params.artist)));
  },[params]);
  console.log("parames dentro search component", params);
  const songsSearch = useSelector((state) => state.search.musicSearch);
  console.log("use selector result DAJEEEE", songsSearch);
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
            {songsSearch.map((songInfo) => {
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
