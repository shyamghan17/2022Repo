import { useEffect, useState, createContext } from "react";
import newsAPI from "../api/News";
import * as CONSTANT from "../Constant/Constant";

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [business, setBusiness] = useState([]);
  const [news, setNews] = useState([]);

  const [headings, setHeadings] = useState([]);
  const [technolities, setTechnologies] = useState([]);
  const getBusinessNewsFromApi = () => {
    newsAPI
      .get("top-headlines?sources=techcrunch&apiKey=860b85233a5f46a9a2b3b256b5f708e1")
      .then(async response => {
        setNews(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  // const getTopHeadlinesNewsFromApi = () => {
  //   newsAPI
  //     .get(CONSTANT.TOPHEADLINES_ENDPOINT)
  //     .then(async response => {
  //       setHeadings(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  // const getTechnoligiesNewsFromApi = () => {
  //   newsAPI
  //     .get(CONSTANT.TECHNOLOGIES_ENDPOINT)
  //     .then(async response => {
  //       setTechnologies(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  if (!news) {
    return null;
  }
  useEffect(() => {
    getBusinessNewsFromApi();
    // getTechnoligiesNewsFromApi();
    // getTopHeadlinesNewsFromApi();
  }, []);

  return (
    <DataContext.Provider value={news }>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
