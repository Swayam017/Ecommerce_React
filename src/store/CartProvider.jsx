import { useReducer, useContext, useEffect, useCallback } from "react";
import CartContext from "./cart-context";
import AuthContext from "./auth-context";

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

  if (action.type === "SET_CART") {
    return {
      items: action.items,
    };
  }

  return defaultCartState;
};

function CartProvider({ children }) {
  const authCtx = useContext(AuthContext);

  const [cartState, dispatch] = useReducer(
    cartReducer,
    defaultCartState
  );

  const CRUDCRUD_API = import.meta.env.VITE_CRUDCRUD_API;

  const userEmail = authCtx.email
    ? authCtx.email.replace("@", "").replace(/\./g, "")
    : "";

  const CRUDCRUD_URL =  `${CRUDCRUD_API}/cart${userEmail}`;

  
// Add item
  const addItemHandler = async (item) => {
    dispatch({
      type: "ADD",
      item,
    });

    try {
      console.log(CRUDCRUD_URL);
      await fetch(CRUDCRUD_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: item.title,
          price: item.price,
          imageUrl: item.imageUrl,
          quantity: 1,
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  //  REMOVE 

  const removeItemHandler = (title) => {
    dispatch({
      type: "REMOVE",
      title,
    });
  };

  // GET CART 

  const fetchCartItems = useCallback(async () => {
    if (!userEmail) return;

    try {
      const response = await fetch(CRUDCRUD_URL);

      const data = await response.json();

      dispatch({
        type: "SET_CART",
        items: data,
      });
    } catch (err) {
      console.log(err);
    }
  }, [CRUDCRUD_URL, userEmail]);

  useEffect(() => {
    if (authCtx.isLoggedIn) {
      fetchCartItems();
    }
  }, [authCtx.isLoggedIn, fetchCartItems]);

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