import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CallApi } from "../components/utility/CallApi";
import { ProductDetails } from "./";
import { GB_CURRENCY } from "./utility/Constant";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    CallApi(`data/search.json`).then((searchResults) => {
      const categoryResults = searchResults[category];
      if (searchTerm) {
        const results = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className="min-w-[1000px] bg-white max-w-[1500px] mt-auto pt-4">
      {products &&
        products.map((product, key) => {
          return (
            <Link key={key} to={`/products/${product.id}`}>
              <div className="h-[250px] bg-gray-200 grid rounded grid-cols-12 mt-1 mb-1 w-full">
                <div className="col-span-2 p-4">
                  <img className="m-auto" src={product.image_small} />
                </div>
                <div className="col-span-10 bg-slate-50 border border-gray-100 hover:bg-gray-100">
                  <div className="font-medium text-black p-2">
                    <ProductDetails products={product} ratings={true} />
                    <div className="text-xl xl:text-2xl pt-1">{GB_CURRENCY.format(product.price)}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;