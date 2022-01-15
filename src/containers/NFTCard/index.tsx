import React from "react";
import Title from "../../components/Title";
import "./style.css";

interface NFTCardProps {
  name: string;
  img: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ name, img }) => {
  return (
    <div className="nftCard">
      <div className="nftCard__imageContainer">
        <img className="nftCard__image" src={img} alt="nft-card image" />
      </div>
      <Title text={name} />
    </div>
  );
};

export default NFTCard;
