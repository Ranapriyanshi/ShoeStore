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
      .post(process.env.REACT_APP_API_URL + "/shoes/compare", { ids })
      .then((res) => setShoes(res.data))
      .catch((err) => console.error(err));
  }, [ids, navigate]);

  return (
    <div style={{ padding: 20 }}>
      <button
        onClick={() => navigate("/")}
        style={{
          padding: "9px 18px",
          border: "1px solid black",
          cursor: "pointer",
          fontSize: "20px",
          borderRadius: "25px",
          backgroundColor: "black",
          color: "white",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        ⬅️ Back to Listing
      </button>
      <h1>Compare Shoes</h1>
      {shoes.length >= 2 && (
        <div style={{ display: "flex", gap: 40 }}>
          {shoes.map((shoe, index) => (
            <div
              key={index}
              style={{ border: "1px solid #ccc", padding: 20, width: "45%" }}
            >
              <img
                src={`/shoesImages/${shoe.name}.jpeg`}
                alt={shoe.name}
                style={{ width: "200px", height: "200px", objectFit: "fit" }}
              />
              {/* console.log(shoe.name); */}
              <div
                style={{
                  padding: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <h3>
                  {shoe.brand} {shoe.name}
                </h3>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p>
                    <strong> {shoe.rating}⭐</strong>
                  </p>
                  <button className="tag" id={shoe.saleStatus}>
                    {shoe.saleStatus}
                  </button>
                  <p>
                    Price:<strong> ${shoe.price}</strong>
                  </p>
                </div>
              </div>
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
