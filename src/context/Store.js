"use client";

import React, { createContext, useEffect, useState } from "react";

const initialState = {
  cart: [],
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("koinclothing_cart"));
    const favoriteData = JSON.parse(
      localStorage.getItem("koinclothing_favorite")
    );

    cartData && setCart(cartData);
    favoriteData && setFavorite(favoriteData);
  }, []);

  const addToCart = (productData) => {
    const position = cart.findIndex((product) => product.id === productData.id);
    if (position !== -1) {
      setCart((prev) => {
        prev[position] = {
          ...prev[position],
          quantity:
            Number(productData.quantity) + Number(prev[position].quantity),
        };
        localStorage.setItem("koinclothing_cart", JSON.stringify(prev));
        return prev;
      });
    } else {
      localStorage.setItem(
        "koinclothing_cart",
        JSON.stringify([...cart, productData])
      );
      setCart((prev) => [...prev, productData]);
    }
  };

  const deleteFromCart = (productName) => {
    const newCart = cart.filter((prod) => prod.name !== productName);
    localStorage.setItem("koinclothing_cart", JSON.stringify(newCart));
    setCart(newCart);
  };

  const addToFavorite = (productData) => {
    const oldProd = favorite.find((prod) => prod.name === productData.name);
    let newFavorite;
    if (oldProd) {
      newFavorite = favorite.filter((prod) => prod.name !== productName);
    } else {
      newFavorite = [...favorite, productData];
    }
    localStorage.setItem("koinclothing_favorite", JSON.stringify(newFavorite));
    setFavorite(newFavorite);
  };

  const deleteFromFavorite = (productName) => {
    const newFavorite = favorite.filter((prod) => prod.name !== productName);
    localStorage.setItem("koinclothing_favorite", JSON.stringify(newFavorite));
    setFavorite(newFavorite);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        favorite,
        deleteFromCart,
        addToFavorite,
        deleteFromFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
