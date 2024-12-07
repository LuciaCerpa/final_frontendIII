import axios from "axios";
import { createContext, useContext, useReducer, useState } from "react";
import React, { useEffect, useState } from 'react';
export const initialState = {theme: "", cards: [], favs: favLst}

export const ContextGlobal = createContext(undefined);
const favLst = JSON.parse(localStorage.getItem('favs')) || [];

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    //axios(url).then(res => {
    //  console.log(res.data.results);
      //setCards(["Card1", "Card2", "Card3"])
    dispatch({type: "GET_CARDS", payload: res.data.results})
      //})    
  }, []);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  },[state.favs])


  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
