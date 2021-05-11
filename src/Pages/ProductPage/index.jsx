import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router";

import Navbar from "../../components/Navbar";
const ProductPage = () => {
  const { id } = useParams();
  const _history = useHistory();
  console.log("product:", id);
  useEffect(() => {
    if (!id) {
      _history.push("/");
    }
  }, [id]);
  return (
    <div className="cell gallery">
      <Navbar />
      <h3>ProductPage</h3>
    </div>
  );
};

export default ProductPage;
