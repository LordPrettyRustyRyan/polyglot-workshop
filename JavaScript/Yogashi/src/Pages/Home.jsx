import Hero from "../Components/ui/home-hero";
import Navbar from "../Components/ui/navbar";
import YogaStyles from "../Components/ui/yoga-styles";
import PopularClasses from "../Components/ui/popular-classes";
import VideoSection from "../Components/ui/video-section";
import FeaturedReview from "../Components/ui/featured-review";
import Footer from "../Components/ui/footer";
import Instructors from "../Components/ui/instructors";
import Certifications from "../Components/ui/certifications";
import StudioInfo from "../Components/ui/studio-info";

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
      <StudioInfo variant="home" />
      <PopularClasses />
      <FeaturedReview backgroundColor="bg-yoga-tropical-teal" />
      <Certifications />
      <Instructors />
      <Footer />
    </>
  );
}

export default Home;