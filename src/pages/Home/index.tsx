import React from "react";
import Title from "../../components/Title";
import NFTCard from "../../containers/NFTCard";

import img from "../../assets/img/image-equilibrium.jpg";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <NFTCard name="Equilibrium #3429" img={img} />
      <NFTCard name="Equilibrium #3429" img={img} />
    </div>
  );
};

export default Home;
