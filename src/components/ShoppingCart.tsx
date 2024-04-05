import React, { useEffect } from "react";
import NavBar from "./NavBar";

interface ProductProps {
  productID: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface CartItem {
  productDetails: ProductProps | null;
  quantity: number;
  total: number;
}

const ShoppingCart = () => {
  const storedCartItems: CartItem[] =
    JSON.parse(localStorage.getItem("cartItems") ?? "[]") || [];

  const [cartItems, setCartItems] = React.useState<CartItem[]>(storedCartItems);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const total: number = cartItems.reduce(
    (runningTotal: number, item: CartItem) => {
      return runningTotal + item.total;
    },
    0
  );

  console.log("Items in cart: ", cartItems);
  console.log("Total: ", total);

  const handleRemoveFromCart = (productID: number) => {
    setCartItems((prevCartItems: CartItem[]) =>
      prevCartItems.filter(
        (item: CartItem) => item.productDetails?.productID !== productID
      )
    );
  };

  return (
    <>
      <NavBar />
      <div className="hero bg-base-200">
        <h1 className="card-title">My Shopping Cart</h1>
      </div>

      {cartItems.length ? (
        (console.log("Shopping carts-cartItems:", cartItems),
        (
          <div className="productListContainer hero">
            <ul>
              {cartItems.map((item: CartItem) => (
                <li
                  className="card card-bordered card-compact bg-base-200"
                  key={item.productDetails?.productID}
                >
                  <div className="card card-body bg-neutral text-neutral-content">
                    <p className="card-title">
                      Product: {item.productDetails?.name}
                    </p>
                    <p className="card-caption">
                      Price: Php{item.productDetails?.price}
                    </p>
                    <p className="card-caption">Quantity: {item.quantity}</p>
                    <p className="card-caption">
                      Total: Php
                      {item.total.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                      })}
                    </p>
                    <div className="card-actions">
                      <button
                        className="btn btn-error btn-xs"
                        onClick={() =>
                          handleRemoveFromCart(
                            item.productDetails?.productID || 0 // or whatever default value makes sense
                          )
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <div className="emptyCart hero bg-neutral text-neutral-content shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Oh no!</h2>
            <p>Your cart is empty. Start your shopping!</p>

            <figure>
              <img
                src="/ShoppingBagsImage.png"
                alt="ShoppingBagsImage"
                style={{ height: "150px", width: "150px" }}
              />
            </figure>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
