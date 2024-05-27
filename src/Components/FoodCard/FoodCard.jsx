import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { User } = useAuth();
  const { name, image, price, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();
  const [, refetch] = useCart();
  const handelFoodCart = () => {
    if (User && User.email) {
      const cartItems = {
        menuId: _id,
        email: User.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItems).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Food Added To Cart",
            showConfirmButton: false,
            timer: 1500,
          });
          //refetch the data
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You Are Not Login",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" className="rounded-xl w-full h-80" />
        </figure>
        <p className="absolute right-0 bg-slate-900 text-white mr-4 mt-4 px-4">
          ${price}
        </p>
        <div className="card-body items-center flex flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button
              onClick={handelFoodCart}
              className="btn btn-outline border-0 border-b-4 mt-4 font-semibold bg-slate-100 text-yellow-300 hover:text-yellow-300"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
