import Navbar from "./Navbar";
import Hero from "./Hero";
import Clients from "./Clients";
import Stats from "./Stats";
import Reasons from "./Reasons";
import WhyChoose from "./WhyChoose";
import Workflow from "./Workflow";
import Projects from "./Projects";
import Services from "./Services";
import VideoShowcase from "./VideoShowcase";
import Faq from "./Faq";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Stats />
      <Reasons />
      <WhyChoose />
      <Workflow />
      <Projects />
      <Services />
      <VideoShowcase />
      <Faq />
      <Footer />
    </>
  );
}
