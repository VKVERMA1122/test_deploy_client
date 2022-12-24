import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://test-server-2-guj8.onrender.com");
      const resjson = await res.json();
      console.log(resjson);
      setData(resjson);
    };
    getData();
  }, []);

  return (
    <div className="App">
      {data === undefined ? <h1>Loading</h1> : <h1>{data.msg}</h1>}
    </div>
  );
}

export default App;
