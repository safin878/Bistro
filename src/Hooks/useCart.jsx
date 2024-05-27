import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCart = () => {
  const [axiosSecure] = useAxiosSecure();
  const { User } = useAuth();
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", User?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${User.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
