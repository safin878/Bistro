import { useEffect, useState } from "react";

const useMenu = () => {
  const [Menu, SetMenu] = useState([]);
  const [Loading, SetLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        SetMenu(data);
        SetLoading(false);
      });
  }, []);
  return [Menu, Loading];
};

export default useMenu;
