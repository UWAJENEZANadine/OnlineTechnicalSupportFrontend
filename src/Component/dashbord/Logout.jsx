import React from "react";

const Logout = () =>{
  localStorage.clear()
  return(
    <div>
      <h1>Logout page</h1>
    </div>
  )
}

export default Logout;
