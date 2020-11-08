import React from "react";
import { useStateValue } from "./Stateprovider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import CurrencyFormat from "react-currency-format"

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout__ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>YOUR SHOPPING BASKET IS EMPTY</h2>
            <p>
              You have no items in your basket. To buy one or more items, Click
              'Add to basket' next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>
            {basket.map((item) => ( 
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
          <div className="checkout__right">
              <Subtotal />
              
          </div>
      )}
    </div>
  );
}

export default Checkout;
