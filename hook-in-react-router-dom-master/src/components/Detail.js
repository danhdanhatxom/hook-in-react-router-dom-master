import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Detail = props => {
  // const location = useLocation();
  const params = useParams();
  // console.log(location.pathname);
  // console.log(param);

  // const { match } = props;
  // const { params } = match;
  const { id } = params;

  return <h2>Detail id : {id} </h2>;
};
export default Detail;
