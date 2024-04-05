import React from "react";

interface ProductProps {
  productID: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const Product = ({
  name,
  description,
  price,
  image,
}: ProductProps): JSX.Element => {
  return (
    <div className="product">
      <img src={require(`/images/${image}`).default} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default Product;
