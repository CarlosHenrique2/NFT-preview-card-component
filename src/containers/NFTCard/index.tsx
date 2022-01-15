import React from "react";
import Title from "../../components/Title";
import "./style.css";
import iconEthereum from "../../assets/icon/icon-ethereum.svg"
import iconClock from "../../assets/icon/icon-clock.svg"
import iconView from "../../assets/icon/icon-view.svg"


export interface NFTCardProps {
  name: string;
  img: string;
  description: string;
  price: number;
  days: number;
  avatar: string;
  creator: string;
}

const NFTCard: React.FC<NFTCardProps> = ({ name, img, description, price, creator, days, avatar }) => {
  return (
    <div className="nftCard">
      <div className="nftCard__imageContainer">
        <img className="nftCard__imageContainer__img" src={img} alt="nft-card image" />
        <img className="nftCard__imageContainer__icon" src={iconView} alt="nft-card image" />
      </div>
      <Title text={name} />
      <p className="nftCard__description">{description}</p>
      <div className="nftCard__inforContainer">
        <div className="nftCard__inforContainer__priceContainer">
        <img src={iconEthereum} alt="" />
        <p className="nftCard__inforContainer__priceContainer__label">{price} ETH</p>
        </div>
        <div className="nftCard__inforContainer__timeConteiner">
        <img src={iconClock} alt="" />
        <p className="nftCard__inforContainer__timeConteiner__label">{days} days left</p>
        </div>
      </div>
      <div className="nftCard__divider"></div>
      <div className="nftCard__avatarContainer">
          <div className="nftCard__avatarContainer__avatarImage">
          <img className="nftCard__avatarContainer__avatar" src={avatar} alt="avatar" />
          </div>
          <p className="nftCard__avatarContainer__paragraph">Creation of{" "}<span className="nftCard__avatarContainer__span">{creator}</span></p>
      </div>
    </div>
  );
};

export default NFTCard;
