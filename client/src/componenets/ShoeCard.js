import React from "react";
import "../index.css";
const ShoeCard = ({ shoe, onToggleCompare, isSelected, showCheckbox }) => {
  return (
    <div
      onClick={() => showCheckbox && onToggleCompare(shoe._id)}
      style={{
        position: "relative",
        border: "2px solid #ccc",
        padding: "10px",
        margin: "auto",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        cursor: showCheckbox ? "pointer" : "default",
        display: "flex",

      }}
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

      {showCheckbox && isSelected && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            // backgroundColor: "rgba(0, 0, 0, 0.2)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            borderRadius: "10px",
            border: "3px solid Black",
          }}
        ></div>
      )}
    </div>
  );
};

export default ShoeCard;
