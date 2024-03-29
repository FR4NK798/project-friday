import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";

const SectionComponent = (props) => {
  const handleSection = async (artistName) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          },
        }
      );
      if (response.ok) {
        let { data } = await response.json();
        // let musicSection = document.querySelector(querySelector)
        // memorizzare nello stato

        console.log("data from fetch", data);
        console.log("stato from fetch", musicList);
        const dataSelected = data.slice(0, 4);
        setMusicList(dataSelected);
        // for (let i = 0; i < 4; i++) {
        //   musicSection.innerHTML += albumCard(data[i])
        // }
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    handleSection(props.artistFetch);
  }, []);
  const [musicList, setMusicList] = useState([]);
  return (
    <Row>
      {/* <div class="row"> */}
      <Col xs={10}>
        {/* <div class="col-10"> */}
        {/* prop id */}
        <div id="rock">
          {/* prop h2 */}
          <h2>{props.section}</h2>
          <Row
            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
            id={props.propId}
          >
            {/* <div
              class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            //   dove fare map
            
            ></div> */}
            {musicList.map((songInfo, i) => {
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
export default SectionComponent;
