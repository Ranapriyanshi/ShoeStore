import React from "react";

const ShoeCard = ({ shoe, onToggleCompare, isSelected, showCheckbox }) => {
  return (
    <div
      style={{ border: "1px solid #ccc", padding: 10, margin: 10, width: 200 }}
    >
      <img src={shoe.image} alt={shoe.name} style={{ width: "100%" }} />
      <h3>{shoe.name}</h3>
      <p>
        <strong>Brand:</strong> {shoe.brand}
      </p>
      <p>
        <strong>Price:</strong> ${shoe.price}
      </p>
      <p>
        <strong>Rating:</strong> {shoe.rating}⭐
      </p>

      {showCheckbox && (
        <label>
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onToggleCompare(shoe._id)}
          />
          Select
        </label>
      )}
    </div>
  );
};

export default ShoeCard;
