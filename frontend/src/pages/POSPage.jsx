import { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import axios from "axios";
import { useState } from "react";
export default function POSPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]);

  //fetch backend data
  const fetchProducts = async () => {
    setIsLoading(true);
    const result = await axios.get("products");
    setProducts(await result.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProductToCart = async (product) => {
    console.log(product);
  };
  return (
    <MainLayout>
      <div className="row">
        {/* products */}
        <div className="col-lg-8">
          {isLoading ? (
            "Loading Items"
          ) : (
            <div className="row">
              {products.map((product, index) => (
                <div key={index} className="col-lg-4">
                  <div
                    className="border"
                    onClick={() => addProductToCart(product)}
                  >
                    <p>{product.name}</p>
                    <img
                      src={product.image}
                      alt="productimage"
                      className="img-thumbnail"
                    />
                    <p>Kes{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* calculator */}
        <div className="col-lg-4"></div>
      </div>
    </MainLayout>
  );
}
