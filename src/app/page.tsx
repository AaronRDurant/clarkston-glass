import HeroSection from "../components/HeroSection";
import ContactFormSection from "../components/ContactFormSection";
import ReviewsCarousel from "../components/ReviewsCarousel";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ReviewsCarousel />
      <ContactFormSection />
    </div>
  );
}
