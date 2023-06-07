import React from "react";
import Button from "./components/resource/Button";

function SearchContainer() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#363636] py-10 w-full h-full">
      <div className="text-slate-100 flex flex-col gap-4">
        <h3 className="text-5xl">Search Your Best Cars</h3>
        <p className="text-xl">
          Using Content here, content here, making it look like readable
        </p>
      </div>
      <div className="flex gap-6 mt-10">
        <form action="" className="flex gap-6">
          <select className="flex gap-4 w-72 rounded text-2xl px-4">
            <option value="AnyBrands">Any Brands</option>
            <option value="Brand1">Brand1</option>
            <option value="Brand2">Brand2</option>
            <option value="Brand3">Brand3</option>
          </select>

          <select className="flex gap-4 w-72 rounded text-2xl px-4">
            <option value="AnyType">Any Type</option>
            <option value="Brand1">Type1</option>
            <option value="Brand2">Type2</option>
            <option value="Brand3">Type3</option>
          </select>

          <select className="flex gap-4 w-72 rounded text-2xl px-4">
            <option value="Price">Price</option>
            <option value="Brand1">$ 20000</option>
            <option value="Brand2">$ 30000</option>
            <option value="Brand3">$ 50000</option>
          </select>
        </form>
        <Button className="bg-primary text-slate-100 border-0 rounded">
          SEARCH NOW
        </Button>
      </div>
    </div>
  );
}

export default SearchContainer;
