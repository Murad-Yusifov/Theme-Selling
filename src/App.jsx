import { useEffect, useState } from "react";
import "./App.css";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header2/Header2";
import Section1 from "./components/sections/Section1";
import Section2 from "./components/sections/Section2";
import Section3 from "./components/sections/section3";
import Section4 from "./components/sections/Section4";
import Section5 from "./components/sections/Section5";
import Section6 from "./components/sections/Section6";
import axios from "axios";
import Section7 from "./components/sections/SEction7";

function App() {
  const [data, setData] = useState([]); 

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
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
      {/* API-dən alınan datanı göstərmək */}
      {data.slice(4, 6).map((item, index) => (
        <Section6 key={item.id} item={item} index={index} />
      ))}
        {data.splice(9,1).map((item) => (
        <Section7 key={item.id} item={item} />
      ))}
    </>
  );
}

export default App;
