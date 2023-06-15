import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface CatalogItems {
  catalog: {
    model: string;
    brand: string;
    type: string;
    img: string;
    price: string;
    info: string;
  };
}

function CatalogItems() {
  const [myCatalogItems, setmyCatalogItems] = useState<CatalogItems[]>([]);

  useEffect(() => {
    const carFilter = async () => {
      try {
        const response = await axios.get<CatalogItems[]>(
          "http://localhost:3001/catalogitems"
        );
        setmyCatalogItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    carFilter();
  }, []);

  return (
    <div className="md:flex flex-col justify-center items-center gap-4 text-center py-4">
      {myCatalogItems.map((catalogItem, index) => {
        return (
          <div key={index} className="p-4">
            <div className="border w-[90%] p-4">
              <h2>{catalogItem.catalog.model}</h2>
              <h4>{catalogItem.catalog.brand}</h4>
              <h5>{catalogItem.catalog.type}</h5>
              <Image
                src={catalogItem.catalog.img}
                alt="image"
                width={160}
                height={160}
                className="mx-auto"
              />
              <h3>{catalogItem.catalog.price}</h3>
              <p>{catalogItem.catalog.info}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CatalogItems;
