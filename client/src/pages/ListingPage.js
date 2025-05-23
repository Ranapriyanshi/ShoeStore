import React, { useEffect, useState } from "react";
import axios from "axios";
import ShoeCard from "../componenets/ShoeCard";
import { useNavigate } from "react-router-dom";
// import "dotenv/config";

const ListingPage = () => {
  const [shoes, setShoes] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [compareMode, setCompareMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL + "/shoes")
      .then((res) => setShoes(res.data))
      .catch((err) => console.error(err));
  }, []);

  const toggleCompare = (id) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) return prev.filter((sid) => sid !== id);
      if (prev.length === 3) return prev; // max 3
      return [...prev, id];
    });
  };

  const handleCompareNow = () => {
    if (selectedIds.length >= 2 && selectedIds.length <= 3) {
      navigate("/compare", { state: { ids: selectedIds } });
    } else {
      alert("Select 2 or 3 shoes to compare.");
    }
  };

  const handleCancelCompare = () => {
    setCompareMode(false);
    setSelectedIds([]);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0px 40px 20px 40px",
      }}
    >
      {!compareMode ? (
        <button
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
          onClick={() => setCompareMode(true)}
        >
          Compare your Favourites ➡️
        </button>
      ) : (
        <>
          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <button
              style={{
                padding: "9px 18px",
                border: "1px solid black",
                cursor: "pointer",
                fontSize: "20px",
                borderRadius: "25px",
                backgroundColor: "white",
              }}
              onClick={handleCompareNow}
              disabled={selectedIds.length < 2}
            >
              Compare Now ({selectedIds.length}/3)
            </button>
            <button onClick={handleCancelCompare} style={{ marginLeft: 10 }}>
              Cancel
            </button>
          </div>
          <p>
            <i>*Select more than 2 shoes to compre</i>
          </p>
        </>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // force 3 columns on desktop
          gap: "80px",
          marginTop: "50px",
          width: "100%",
          // maxWidth: "1200px",
        }}
      >
        {shoes.map((shoe) => (
          <ShoeCard
            key={shoe._id}
            shoe={shoe}
            isSelected={selectedIds.includes(shoe._id)}
            onToggleCompare={toggleCompare}
            showCheckbox={compareMode}
          />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
