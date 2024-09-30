import { useState } from "react";

function App() {
  let [color, setColor] = useState(true);

  let HandleClick = () => {
    setColor(!color);
  };

  return (
    <>
      <div className="App">
        <h1>Hello World...</h1>
        <div className="container">
          <div className="row">
            <div
              className="card color-box"
              style={{
                background: color ? "red" : "black",
                height: "200px",
                width: "200px",
              }}
            >
              <h5 className="card-header text-white">Featured</h5>
              <div className="card-body">
                <h5 className="card-title text-white">
                  Special title treatment
                </h5>
              </div>
            </div>
            <div
              className="card color-box"
              style={{
                background: color ? "blue" : "green",
                height: "200px",
                width: "200px",
              }}
            >
              <h5 className="card-header text-white">Featured</h5>
              <div className="card-body">
                <h5 className="card-title text-white">
                  Special title treatment
                </h5>
              </div>
            </div>
            <div
              className="card color-box"
              style={{
                background: color ? "gold" : "red",
                height: "200px",
                width: "200px",
              }}
            >
              <h5 className="card-header text-white">Featured</h5>
              <div className="card-body">
                <h5 className="card-title text-white">
                  Special title treatment
                </h5>
              </div>
            </div>
          </div>
        </div>
        <button className=" btn btn-outline-primary w-75" onClick={HandleClick}>
          Click Me
        </button>
      </div>
    </>
  );
}

export default App;
