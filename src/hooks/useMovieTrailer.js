import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTailer = (MovieId) => {
  const dispatch = useDispatch();

  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  //fetch trailer movie
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${MovieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filterData = json.results.filter((video) => video.type === "Trailer");
    const tariler = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(tariler));
  };

  useEffect(() => {
    !trailerVideo && getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMovieTailer;
