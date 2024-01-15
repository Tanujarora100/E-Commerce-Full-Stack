import React from 'react'
import { API_URL } from '../utils/config'
import { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import Product from '../components/Product'
const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data.products);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      {loading ? <Spinner /> :
        (products.length > 0 ? (
          <div>
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <p>No Data Found</p>
        ))}
    </>
  );
}

export default Home
