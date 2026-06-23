import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.title === action.item.title
    );

    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      updatedItems = [...state.items];

      updatedItems[existingItemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
    } else {
      updatedItems = [
        ...state.items,
        {
          ...action.item,
          quantity: 1,
        },
      ];
    }

    return {
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    return {
      items: state.items.filter(
        (item) => item.title !== action.title
      ),
    };
  }

  return defaultCartState;
};

function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatch({
      type: "ADD",
      item,
    });
  };

  const removeItemHandler = (title) => {
    dispatch({
      type: "REMOVE",
      title,
    });
  };

  const contextValue = {
    items: cartState.items,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;