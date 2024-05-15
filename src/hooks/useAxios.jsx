import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";


const useAxios = (url, initialState=[]) => {

  const [collection, setCollection] = useState(initialState);
  const addToCollection = async (dynamicVariable) => {
    if (typeof dynamicVariable === 'string') {
      url = `${url}/${dynamicVariable}/`
    }
    
    const response = await axios.get(url);
    setCollection(cards => [...cards, { ...response.data, id: uuid() }]);
  };

  return [collection, addToCollection];
}


export default useAxios;