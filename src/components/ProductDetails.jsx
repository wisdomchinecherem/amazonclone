import { ProductBadge, ProductRating } from "./";

const ProductDetails = ({ products, ratings }) => {
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1">
        {products.title}
      </div>
      <div className="text-sm xl:text-base font-medium mb-1">
        by <span className="text-blue-500 text-base">{products.brand}</span>
      </div>
      {ratings && (
        <div className="text-sm xl:text-base mb-1">
          <ProductRating
            avgRating={products.avgRating}
            ratings={products.ratings}
          />
        </div>
      )}

      <div className="text-sm xl:text-base mb-1">{products.attribute}</div>
      <div>
        <ProductBadge badge={products.badge} />
      </div>
    </div>
  );
};

export default ProductDetails;
