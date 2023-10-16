import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openAi";
import { addSuggestedMovie, setMovieSuggestionLoading } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchValue = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearch = async () => {
    const searchText = searchValue.current.value;
    if(searchText === '')
      return 
    dispatch(setMovieSuggestionLoading());

    const gptQuery = `Act as a Movie Recommendation System suggest some movies for this query: ${searchText}. Only Give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Don, Koi Mil Gaya, and give only movie names, nothing else.`;
    // api call to GPT API and get movie result
    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResult.choices) {
      // Error handling to be added
      alert("Error");
    } else {
      const movieList = gptResult.choices?.[0]?.message?.content.split(",");

      const moviePromiseList = movieList.map((movie) => searchMovieTMDB(movie));

      const movieListData = await Promise.all(moviePromiseList);
      console.log(movieListData);

      dispatch(
        addSuggestedMovie({
          moviesName: movieList,
          moviesResult: movieListData,
        })
      );
    }
  };

  return (
    <div className="pt-[50%] md:pt-[20%] lg:pt-[15%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchValue}
          type="text"
          className="p-4 m-4 col-span-12 md:col-span-9 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="p-4 m-4 bg-red-700 text-white rounded-lg col-span-12 md:col-span-3"
          onClick={handleGptSearch}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
