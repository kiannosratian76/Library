import React from "react";
import {Link } from "react-router-dom";
import './out.css';


function Loding(){
  
    const handelsubmit = () =>{
       console.log("efeaf");
    }



    return(
        <>
            <div className="container">
                 <div className="logo_container">
                        <h1>Library</h1>
                 </div>
                 <div className="login_container">
                     <div className="logo"></div>
                     <form className="login" onSubmit={handelsubmit} >
                        <input  className="  user_input  username"   id="username"  placeholder="username..." />
                        <input  className="  user_input  password"   id="password"  placeholder="password..."/>
                        <div className="box-buttons">
                            <Link to="/pages/book" >
                                 <input  type="submit" className="submit"  id="submit" value={"submit"}/>
                            </Link>
                        </div>
                     </form>
                 </div>
            </div>
              
        </>
    )
}
export default Loding;