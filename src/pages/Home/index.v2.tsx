import React from "react";
import Title from "../../components/Title";
import NFTCard, { NFTCardProps } from "../../containers/NFTCard";
import avatar from "../../assets/img/image-avatar.png";

import img from "../../assets/img/image-equilibrium.jpg";

import "./style.css";

const Home = () => {
  const cards: NFTCardProps[] = [
    {
      name: "Equilibrium #3429",
      avatar,
      description: "Our Equilibruim",
      price: 0.041,
      days: 3,
      creator: "jules Wyvery",
      img,
    },
    {
      name: "581819",
      avatar,
      description: "1518",
      price: 0.5418,
      days: 9,
      creator: "uuuuu",
      img,
    },
  ];
  return (
    <div className="home">
      {cards.map((card, indice) => {
        return <NFTCard key={indice} {...card} />;
      })}
    </div>
  );
};

export default Home;
