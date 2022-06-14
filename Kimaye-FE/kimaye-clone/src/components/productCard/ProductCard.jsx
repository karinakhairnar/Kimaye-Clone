import React from "react";
import styles from "./Pc.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const ProductCard = ({
  title,
  image,
  description,
  origin,
  price,
  id,
}) => {
  const [btnTogle, setBtntogle] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`fruits/:${id}`);
  };
  const handleCart = (id) => {
    // console.log(id)
  };
  return (
    <div className={styles.productCardMain}>
      <div className={styles.imgDiv}>
        <img onClick={handleClick} src={image} alt={title} />
        {!btnTogle ? (
          <div
            onClick={() => setBtntogle(!btnTogle)}
            className={styles.CtoSbtn}
          >
            <i className="fa-solid fa-cart-arrow-down"></i>
            CHOOSE TO SHOP
          </div>
        ) : (
          <div onClick={() => handleCart(id)} className={styles.CtoSbtn}>
            <i className="fa-solid fa-cart-arrow-down"></i>
            ADD TO CART
          </div>
        )}
      </div>
      <div className={styles.titleprice}>
        <p>{title}</p>
        <p>
          ₹{price} - ₹{price * 4}
        </p>
      </div>
    </div>
  );
};
