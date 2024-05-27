import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImage from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check Out It"
        Heading="Featured Item"
      ></SectionTitle>

      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pt-12 pb-20 px-36 gap-4">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div>
          <p>Aug20,2029</p>
          <p>Where Can I Get Some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            mollitia non sequi quaerat nisi atque modi hic iure, amet explicabo
            alias odio officiis ipsam dolores temporibus eius deserunt repellat
            accusantium exercitationem quis laboriosam harum, est eaque. Ipsa
            eum deleniti architecto quas nemo? Eligendi necessitatibus qui nam
            soluta error. Molestias, illum.
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
