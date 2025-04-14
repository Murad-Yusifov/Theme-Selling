import { useEffect, useState } from "react";
import "./App.css";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header2/Header2";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/Section3";
import Section4 from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";
import Section6 from "./components/sections/Section6";
import axios from "axios";
import Section7 from "./components/sections/Section7";
import Section8 from "./components/sections/Section8";
import Section9 from "./components/sections/Section9";

function App() {
  const [data, setData] = useState([]); 
 

  const getData = async () => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

 

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header1 />
      <Header2 />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      {/* API data rendering */}
      {data.slice(4, 6).map((item, index) => (
        <Section6 key={item.id} item={item} index={index} />
      ))}
      {data.filter((_, index) => index === 9).map((item) => (
        <Section7 key={item.id} item={item} />
      ))}
      <div className="container">
        {/* Rendering only the first three items */}
        {data.slice(0, 3).map((item) => (
          <Section8 key={item.id} item={item} />
        ))}
      </div>
      <div>
        <Section9 />
      </div>
      
    </>
  );
}

export default App;
