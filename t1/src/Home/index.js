import React from "react";
import Layout from "../Layout"
import "./index.css";
function Colors() {
  const name = ["WELCOME", "YOU LOGGED IN SUCCESSFULLY"];
  return (
    <Layout>
         <div className="colors-container">

               <div className="row h-100 align-items-center justify-content-center"> 

                    {name.map((letter , index)=>{
                        return <div className={`col-md-2 letter letter${index}`}>{letter}</div>
                    })}

               </div>

         </div>
    </Layout>
  );
}

export default Colors;