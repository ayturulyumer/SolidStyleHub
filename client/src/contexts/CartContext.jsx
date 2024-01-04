import { createContext, useContext, useReducer } from "react";

const initialState = {
  cart: [],
};

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      {
        /** Try to find the item in current cart */
      }
      const item = state.cart.find((item) => item.id === action.payload.id);
      {
        /** If it's found just increase it quantity */
      }
      if (item) {
        item.quantity += action.payload.quantity;
        return {
          ...state,
          cart: [...state.cart],
        };
        {
          /**If it's not found just add the product to cart */
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload }],
        };
      }

    case "REMOVE_FROM_CART":
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: updatedCart,
      };
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: productId } });
  };
  const contextValues = {
    ...state,
    addToCart,
    removeFromCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
