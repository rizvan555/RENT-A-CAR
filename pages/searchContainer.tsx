import React from "react";

function SearchContainer() {
  return (
    <div className="bg-dark py-10">
      <div className="text-slate-100">
        <h3>Search Your Best Cars</h3>
        <p>Using Content here, content here, making it look like readable</p>
      </div>
      <div className="flex gap-4">
        <input type="text" placeholder="Any Brand" />
        <input type="text" placeholder="Any Type" />
        <input type="text" placeholder="Price" />
      </div>
    </div>
  );
}

export default SearchContainer;
