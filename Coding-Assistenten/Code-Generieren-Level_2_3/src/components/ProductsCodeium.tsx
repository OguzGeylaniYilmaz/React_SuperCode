import React from "react";

interface Product {
  title: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-lg font-bold mb-2">Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} className="flex items-center mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
