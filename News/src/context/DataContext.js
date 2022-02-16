import { useEffect, useState, createContext } from "react";
import newsAPI from "../api/News";
import * as CONSTANT from "../Constant/Constant";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [count, setCount] = useState(0);
  const [headings, setHeadings] = useState('top-headlines?sources=techcrunch&apiKey=860b85233a5f46a9a2b3b256b5f708e1');

  const getBusinessNewsFromApi = () => {
    newsAPI
      .get(headings)
      .then(async response => {
        setNews(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!news) {
    return null;
   }

  
  //  useEffect(() => {
  //   getBusinessNewsFromApi();
  // }, []);

  
  return (
    <DataContext.Provider value={{news, count, setCount, setHeadings, getBusinessNewsFromApi} }>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext
