import React from "react";

const GroceryList = ({ drinks, onClearList }) => (
  <div>
    {drinks?.length > 0 ? (
      <div>
        <div className="drinks-container">
          <div className="drinks-list"></div>
        </div>
        <button className="content-button" onClick={onClearList}>
          Clear
        </button>
      </div>
    ) : (
      <div className="empty">
        <h2>Haven't added any recipes yet</h2>
      </div>
    )}
  </div>
);

export default GroceryList;
