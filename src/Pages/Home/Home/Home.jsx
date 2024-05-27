import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";
import Catagory from "../Catagory/Catagory";
import Chief from "../Chief/Chief";
import Contact from "../Contact/Contact";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recomended from "../Recomended/Recomended";

import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>BB || Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagory></Catagory>
      <Chief></Chief>
      <PopularMenu></PopularMenu>
      <Contact></Contact>
      <Recomended></Recomended>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
