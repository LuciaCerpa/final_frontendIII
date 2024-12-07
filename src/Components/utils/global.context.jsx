import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../../reducers/reducer";

const ContextGlobal = createContext(undefined);
const favLst = JSON.parse(localStorage.getItem('favs')) || [];
  const initialState = {theme: "", dentists: [], favs: favLst}

export const ContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = 'https://jsonplaceholder.typicode.com/users';
  
  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  },[state.favs])

  useEffect(()=>{
    axios(url).then(res => {
      console.log(res);      
      dispatch({type: "GET_DENTISTS", payload: res.data})
    })    
  }, []);

  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
