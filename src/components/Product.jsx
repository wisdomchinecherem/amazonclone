import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { GB_CURRENCY } from "../components/utility/Constant";
import { CallApi } from "../components/utility/CallApi";
import { ProductDetails } from "./";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const Product = () => {
  const { id } = useParams();
  const [products, setProducts] = useState("");
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addToCart(addQuantityToProduct()));
  // });

  const getProducts = () => {
    CallApi(`data/products.json`).then((productResults) => {
      setProducts(productResults[id]);
    });
  };

  const addQuantityToProduct = () => {
    setProducts((products.quantity = quantity));
    return products;
  };

  useEffect(() => {
    getProducts();
  }, []);

  !products?.title && <h1>Loading Prodct ...</h1>;

  return (
    products && (
      <div className="h-screen bg-amazonclone-background">
        <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
          <div className="grid grid-cols-10 gap-2">
            {/* left  */}
            <div className="col-span-3 p-8 w-[100%] rounded bg-white m-auto">
              <img src={products.image} />
            </div>
            {/* middle */}
            <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
              <div className="mb-3">
                <ProductDetails products={products} ratings={true} />
              </div>
              <div className="text-base xl:text-lg mt-3">
                {products.description}
              </div>
            </div>
            {/* right */}
            <div className="col-span-2 p-4 rounded bg-white">
              <div className="text-xl text-right xl:text-2xl text-red-700 font-semibold">
                {GB_CURRENCY.format(products.price)}
              </div>
              <div className="text-base text-right text-gray-500 xl:text-lg font-semibold">
                RRP:{" "}
                <span className="line-through">
                  {GB_CURRENCY.format(products.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-base text-blue-500 mt-3 font-semibold">
                FREE Returns
              </div>
              <div className="text-sm xl:text-base text-blue-500 mt-1 font-semibold">
                FREE Delivery
              </div>
              <div className="text-base xl:text-lg text-green-700 mt-1 font-semibold">
                In Stock
              </div>
              <div className="text-base mt-1 xl:text-lg">
                Quantity:
                <select
                  onChange={(e) => setQuantity(e.target.value)}
                  className="p-2 ml-2 bg-white border rounded-md focus:border-indigo-600"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <Link to={"/checkout"}>
                <button
                  onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                  className="bg-yellow-400 w-full p-2 text-xs xl:text-sm rounded-[30px] hover:bg-yellow-500 mt-3"
                >
                  Add to cart
                </button>
              </Link>
              <button className="bg-yellow-400 w-full p-2 text-xs xl:text-sm rounded-[35px] hover:bg-yellow-500 mt-3">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Product;
