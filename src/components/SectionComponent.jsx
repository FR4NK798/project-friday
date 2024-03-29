import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSongAction } from "../redux/actions";

const SectionComponent = (props) => {
  const dispatch = useDispatch();

  let songsHome = useSelector((state) => state.home.musicHome);
  useEffect(() => {
    const artist = props.artistFetch;
    dispatch(getSongAction(artist));
    console.log("use effect de la home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let arrMap = songsHome.slice(0, 4);

  console.log("array mappato", arrMap);
  return (
    <Row>
      <Col xs={10}>
        <div id={props.propId}>
          <h2>{props.section}</h2>
          <Row
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id={props.propId}
          >
            {arrMap.map((songInfo, i) => {
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
export default SectionComponent;
