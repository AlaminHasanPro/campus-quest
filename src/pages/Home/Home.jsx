import MarqueSection from "../../components/MarqueSection";
import Planning from "../../components/Planning";
import TopCollege from "../../components/TopCollege";
import Banner from "./Banner";
import GraduatedGallery from "./GraduatedGallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="max-w-6xl mx-auto ">
        <TopCollege />
        <Planning />
      </div>
      <MarqueSection />
      <GraduatedGallery />
    </div>
  );
};

export default Home;
