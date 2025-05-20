import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const ComparePage = () => {
  const [shoes, setShoes] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const ids = location.state?.ids;

  useEffect(() => {
    if (!ids || ids.length < 2) {
      navigate("/");
      return;
    }

    axios
      .post("http://localhost:5000/api/shoes/compare", { ids })
      .then((res) => setShoes(res.data))
      .catch((err) => console.error(err));
  }, [ids, navigate]);

  return (
    <div style={{ padding: 20 }}>
      <h1>Compare Shoes</h1>
      {shoes.length >= 2 && (
        <div style={{ display: "flex", gap: 40 }}>
          {shoes.map((shoe, index) => (
            <div
              key={index}
              style={{ border: "1px solid #ccc", padding: 20, width: "45%" }}
            >
              <img src={shoe.image} alt={shoe.name} style={{ width: "100%" }} />
              <h2>{shoe.name}</h2>
              <p>
                <strong>Brand:</strong> {shoe.brand}
              </p>
              <p>
                <strong>Price:</strong> ${shoe.price}
              </p>
              <p>
                <strong>Rating:</strong> {shoe.rating}⭐
              </p>
              <ul>
                {shoe.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComparePage;
