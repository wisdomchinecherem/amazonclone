const ProductBadge = ({ badge }) => {
  if (badge === "choice") {
    return (
      <div className="relative inline-flex items-center bg-[#232F3A] text-white px-2 py-1">
      <span className="mr-1">Amazon's</span> <span className="text-[#F69900]">Choice</span>
      <div className="slant absolute inset-0"></div>
    </div>
    );
  } else if (badge === "seller") {
    return (
      <span className="text-xs xl:text-sm bg-orange-500 text-white p-1">
        #1 Best Seller
      </span>
    );
  } else if (badge === "limited") {
    return (
      <span className="text-xs xl:text-sm bg-red-500 text-white p-1">
        Limited Time Deal
      </span>
    );
  }

  return <div></div>;
};

export default ProductBadge;
