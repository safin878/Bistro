import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [Menu] = useMenu();
  const PopularItems = Menu.filter((item) => item.category === "popular");
  // const [Menu, SetMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const PopularItems = data.filter((item) => item.category === "popular");
  //       SetMenu(PopularItems);
  //     });
  // }, []);
  return (
    <section className="mb-12">
      <SectionTitle
        subHeading={"Popular Items"}
        Heading={"From Our Menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mx-auto container">
        {PopularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center my-3">
        <button className="  btn btn-outline border-0 border-b-4 mt-4">
          View Full Menu
        </button>
      </div>
    </section>
  );
};

export default PopularMenu;
