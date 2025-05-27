import { useState, useEffect } from "react";

const SearchBox = ({ userId }: { userId: string }) => {
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    // Fetch the user's product count
    const fetchProductCount = async () => {
      const response = await fetch(`/api/products/count?userId=${userId}`);
      const data = await response.json();
      setProductCount(data.count);
    };

    fetchProductCount();
  }, [userId]);

  return (
    <div>
      <input
        type="text"
        placeholder="Paste product link here"
        disabled={productCount >= 5} // Disable if 5 products are already added
        className="border p-2 rounded"
      />
      {productCount >= 5 && (
        <p className="text-red-500">You can only add up to 5 products.</p>
      )}
    </div>
  );
};

export default SearchBox;