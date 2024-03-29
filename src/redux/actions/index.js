export const GET_SONG_HOME_PAGE = "GET_SONG_HOME_PAGE";
export const GET_SONG_SEARCH = "GET_SONG_SEARCH";

export const getSongAction = (artista) => {
  return (dispatch, getState) => {
    console.log('qua l artista invece eee', artista)
    fetch(
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        artista,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key":
            "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero libri");
        }
      })
      .then((canzoni) => {
        console.log(
          "GETSTATE, SECONDO PARAMETRO DELLA FUNZIONE ASINCRONA",
          getState()
        );
       
        // const dataSelected = objFetch
        // console.log('dati fetch', canzoni.data)
        dispatch({
          type: GET_SONG_HOME_PAGE,
          payload: canzoni.data,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};

export const getSongSearchAction = (datoText) => {
  return (dispatch, getState) => {
    // let params =''

    const url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
    let artist = datoText.artist;
    const completeUrl = url + artist;
    console.log('ma che artistone stai cercandoooO', artist)
    fetch(completeUrl, {
      method: "GET",

      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore nel recupero libri");
        }
      })
      .then((objFetch) => {
        console.log('dentro fetch 2 then response')
        console.log('dentro fetch 2 then response OGGETTO', objFetch.data)
        console.log(
          "GETSTATE, SECONDO PARAMETRO DELLA FUNZIONE ASINCRONA",
          getState()
        );
        //   setBooks(fetchedBooks) // non setto più uno stato locale!
        // ma dispatcho un'azione trasportando i libri ottenuti
        dispatch({
          type: GET_SONG_SEARCH,
          payload: objFetch.data, 
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};
