import React, {useState, useEffect} from "react";

const Box = ({ rgb, index, weight, hexColor, totalData }) => {
  let rgb_arr = rgb.join();
  let mod_hexColor = `#${hexColor}`;
  const [alert, setAlert] = useState(false);
  const handleCopy = () => {
    setAlert(true)
    navigator.clipboard.writeText(mod_hexColor)
  };
  useEffect(() => {
    const hideOut = setInterval(()=>{
      setAlert(false)
    },3000)
    return () => {
      clearInterval(hideOut);
    }
  }, [alert])
  return (
    <div className={`box ${index > totalData / 2 - 1 ? "text-light" : null}`} style={{ backgroundColor: `rgb(${rgb_arr})` }} onClick={() => handleCopy()}>
      <p>{weight}%</p>
      <p>{mod_hexColor}</p>
      {alert && <p className={`text-muted`}>COPIED TO CLIPBOARD</p>}
    </div>
  );
};

export default Box;
