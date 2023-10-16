
import { LOGIN_BG_IMAGE } from "../../utils/constant";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import Header from "../Header";

const GptSearchPage = () => {
  return (
    <div >
      <div
        className="fixed bg-fixed bg-cover bg-center w-full h-screen -z-10"
        style={{
          backgroundImage:
            `url('${LOGIN_BG_IMAGE}')`,
        }}
      ></div>
      <Header />
      <div>
        
        <GptSearchBar/>
        <GptMovieSuggestions/>
      </div>
    </div>
  );
};

export default GptSearchPage;
