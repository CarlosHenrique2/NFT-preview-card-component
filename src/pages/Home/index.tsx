import React from "react";
import NFTCard from "../../containers/NFTCard";
import avatar from "../../assets/img/image-avatar.png";

import img from "../../assets/img/image-equilibrium.jpg";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <NFTCard
        name="Equilibrium #3429"
        avatar={avatar}
        description="Our Equilibruim collection promotes balance and calm."
        price={0.041}
        days={3}
        creator="jules Wyvery"
        img={img}
      />
    </div>
  );
};

export default Home;
