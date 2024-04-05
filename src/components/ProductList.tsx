import React from "react";
import Product from "./Product";
import productsData from "../data/products.json";

const ProductList = (): JSX.Element => {
  return (
    <div className="product-list">
      {productsData.map((product) => (
        <Product
          key={product.productID}
          productID={product.productID}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
