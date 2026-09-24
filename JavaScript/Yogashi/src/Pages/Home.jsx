import Hero from "../Components/ui/homehero";
import Navbar from "../Components/ui/navbar";
import YogaStyles from "../Components/ui/yogastyles";
import PopularClasses from "../Components/ui/popularclasses";
import VideoSection from "../Components/ui/videosection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <YogaStyles />

      <VideoSection
        videoSrc="/home-video.mp4"
        posterSrc="/home-video-poster.png"
      />

      <PopularClasses />
    </>
  );
}

export default Home;