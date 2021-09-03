import React, { useState, useEffect} from "react";
import Values from "values.js";
import Box from "./Box";

function App() {
  const [color, setColor] = useState({ hexcolor: "#0000dd", tints: "10" });
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  useEffect(() => {
    let colors = new Values("#0000dd").all(10);
    setList(colors);
    return () => {
      
    }
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color.hexcolor).all(parseInt(color.tints));
      setError(false);
      setList(colors);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  console.log(list);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setColor({ ...color, [name]: value });
  };
  return (
    <div>
      <nav>
        <div className="heading">
          <h1>Color Genarator</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="color-code d-flex">
            <label htmlFor="hexcolor" className="col-form-label col-5">
              Give Hex Code
            </label>
            <div className="col-7">
              <input
                id="hexcolor"
                className={`form-control ${error ? "is-invalid" : null}`}
                type="text"
                name="hexcolor"
                placeholder="#f15025"
                onChange={handleChange}
                value={color.hexcolor}
                required
              />
              <div className="invalid-feedback">Invalid Hex Code.</div>
            </div>
          </div>
          <div className="color-all d-flex">
            <label htmlFor="" className="col-form-label col-5 text-center">
              Tints
            </label>
            <div className="col-7">
              <input className="form-control" type="number" name="tints" placeholder="10" min="1" required onChange={handleChange} value={color.tints} />
            </div>
          </div>
          <div className="submit">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </nav>
      <div className="content">
        {list.map((color, index) => {
          return <Box key={index} index={index} {...color} hexColor={color.hex} totalData={list.length} />;
        })}
      </div>
    </div>
  );
}

export default App;
