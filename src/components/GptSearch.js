import { BACKGROUND_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptmovieSuggestions from "./GptmovieSuggestions";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 opacity-80">
        <img
          className="h-screen object-cover md:h-auto"
          src={BACKGROUND_IMG}
          alt="bg-img"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptmovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
