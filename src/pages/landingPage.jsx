import Navbar from "../components/LandingPage/Navbar";
import FAQ from "../components/LandingPage/Faq";
import Banner from "../components/LandingPage/Banner";
import Hero from "../components/LandingPage/Hero";
import Service from "../components/LandingPage/Services";
import Testimonial from "../components/LandingPage/Testimonial";
import WhyUs from "../components/LandingPage/WhyUs";
import Footer from "../components/LandingPage/Footer";

function LandingPage() {
  return (
    <>
      <Hero landingPage={true} />
      <Service />
      <WhyUs />
      <Testimonial />
      <Banner />
      <FAQ />
    </>
  );
}

export default LandingPage;
