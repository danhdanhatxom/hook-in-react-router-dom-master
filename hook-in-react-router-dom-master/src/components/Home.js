import React from "react";
import { useHistory } from "react-router-dom";
const Home = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/detail/10");
  };
  return (
    <div>
      <h2>This is home component</h2>
      <button onClick={handleClick}>Go to detail</button>
    </div>
  );
};
export default Home;
