import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" style={{height:"120px",width:"100px"}} />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
