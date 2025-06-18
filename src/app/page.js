import Image from "next/image";
import Navbar from "./componenets/Navbar";
import Banner from "./componenets/Banner";
import Frame from "./componenets/Frame";
import Expertise from "./componenets/Expertise";
import Works from "./componenets/Works";
import Experience from "./componenets/Experience";
import Blog from "./componenets/Blog";
import Testimonial from "./componenets/Testimonial";
import Faqs from "./componenets/Faqs";
import Marquee from "./componenets/Marquee";
import Footer from "./componenets/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Frame />
      <Expertise />
      <Works />
      <Experience />
      <Blog />
      <Testimonial />
      <Faqs />
      <Marquee />
      <Footer />
    </>
  );
}
