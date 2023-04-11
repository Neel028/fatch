import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import './App.css';

function App() {
  let [data, setdata] = useState([]);
  let [count, setcount] = useState(4)

  useEffect(() => {
    get();
  }, [count]);

  let get = async () => {
    let data = await fetch(`https://dummyjson.com/products?pages=1&limit=${count}`);
    let check = await data.json();
    setdata(check.products);

  };
  return (
    <div className="App">
      <div className="jcb" style={{ display: "flex", flexWrap: "wrap" }}>

        {data.map((e, i) => {
          return (
              <Col key={i} className="w-25">
                <center>
                  <div className="box" xs={12} md={6} lg={4} xl={3}>
                    <div>
                      <img src={e.thumbnail} alt={`img${i}`} />
                    </div>
                    <h6>{e.category}</h6>
                    <h2>{e.title}</h2>
                    <h3>Price : ${e.price}</h3>
                    <h6>discount : {e.discountPercentage} %</h6>
                    <p>{e.description}</p>
                    <h6>ratings : {e.rating}</h6>
                    <h6>in stock : {e.stock}</h6>
                  </div>
                </center>
              </Col >
          );
        })}
        <div>
          <button className="back" onClick={() => setcount(count == 4 ? count = 4 : count - 4)}>Back</button>
          <button className="next" onClick={() => setcount(4 + count)}>Next </button>
        </div>
      </div>
    </div>
  );
}

export default App;