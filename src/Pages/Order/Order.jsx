import { useState } from "react";
import orderCoverImg from "../../assets/shop/banner2.jpg";
import Cover from "./../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";

import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {
  const categories = ["salad", "pizza", "soup", "Dessert", "drink"];
  const { category } = useParams();
  console.log(category);
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [Menu] = useMenu();

  const desserts = Menu.filter((item) => item.category === "dessert");
  const soup = Menu.filter((item) => item.category === "soup");
  const salad = Menu.filter((item) => item.category === "salad");
  const drinks = Menu.filter((item) => item.category === "drinks");
  const pizza = Menu.filter((item) => item.category === "pizza");
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>BB || Order Food</title>
      </Helmet>
      <Cover img={orderCoverImg} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drink</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
