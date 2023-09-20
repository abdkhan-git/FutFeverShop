import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
        Stay ahead of the fashion curve with our curated selection of trending soccer jerseys. Our team of experts constantly monitors the ever-evolving soccer landscape to bring you the latest designs that are making waves on and off the pitch.
        These jerseys embody the dynamic spirit of the game and the vibrant culture that surrounds it.  
        Whether it's the hottest kit from a rising star or a limited edition release celebrating a historic milestone, 
        our trending products are the embodiment of style and sophistication.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;