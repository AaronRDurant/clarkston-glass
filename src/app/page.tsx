import Hero from "../components/Hero";
import Services from "../components/Services";
import ReviewsCarousel from "../components/ReviewsCarousel";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="flex flex-col md:flex-row gap-12 px-24 md:px-24 lg:px-48 my-16">
        {/* Left side: Services */}
        <div className="flex-1">
          <Services />
        </div>

        {/* Right side: Contact Form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
      <ReviewsCarousel />
    </div>
  );
}
