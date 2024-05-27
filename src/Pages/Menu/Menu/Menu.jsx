import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [Menu] = useMenu();
  const desserts = Menu.filter((item) => item.category === "dessert");
  const soup = Menu.filter((item) => item.category === "soup");
  const salad = Menu.filter((item) => item.category === "salad");
  const offered = Menu.filter((item) => item.category === "offered");
  const pizza = Menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>BB || Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      {/* main Cover */}
      <SectionTitle
        subHeading="Don't Miss"
        Heading="Today's Offer"
      ></SectionTitle>
      {/* offered Menu Items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desert Menu Item  */}
      <MenuCategory
        items={desserts}
        title="Dessert"
        Img={dessertImg}
      ></MenuCategory>
      <MenuCategory items={pizza} title="pizza" Img={pizzaImg}></MenuCategory>
      <MenuCategory items={salad} title="salad" Img={saladImg}></MenuCategory>
      <MenuCategory items={soup} title="soup" Img={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
