import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSongSearchAction } from "../redux/actions";

const SearchResultComponent = (props) => {
  const dispatch = useDispatch();

  const params = useParams();
  console.log("PARAMS", params);

  useEffect(() => {
    console.log(
      "use effect dirige l orchestra, il maestro use effect vessicchio"
    );

    console.log("i grandi PARAMS", params.artist);
    // let artist = params.artist
    dispatch(getSongSearchAction(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  console.log("parames dentro search component", params);
  const songsSearch = useSelector((state) => state.search.musicSearch);
  console.log("use selector result DAJEEEE", songsSearch);
  return (
    <Row>
      <Col xs={10}>
        <div id="searchResults">
          <h2>Search Results</h2>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
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
      </Col>
    </Row>
  );
};
export default SearchResultComponent;
