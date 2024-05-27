import SectionTitle from "./../../../Components/SectionTitle/SectionTitle";

const Recomended = () => {
  return (
    <div className=" mx-auto container">
      <SectionTitle
        subHeading="Should Try"
        Heading="CHEF RECOMMENDS"
      ></SectionTitle>

      <div className="flex justify-evenly">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.postimg.cc/vZ0MvZHq/slide5.jpg"
              alt="Shoes"
              className="rounded-xl w-full h-80"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 mt-4 font-semibold bg-base-200 text-yellow-300 hover:text-yellow-300">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.postimg.cc/vZ0MvZHq/slide5.jpg"
              alt="Shoes"
              className="rounded-xl w-full h-80"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 mt-4 font-semibold bg-base-200 text-yellow-300 hover:text-yellow-300">
                Order Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.postimg.cc/vZ0MvZHq/slide5.jpg"
              alt="Shoes"
              className="rounded-xl w-full h-80"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-outline border-0 border-b-4 mt-4 font-semibold bg-base-200 text-yellow-300 hover:text-yellow-300">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recomended;
