import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { getProducts } from "../services/productService";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();
      setProducts(response.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <section className="bg-[#1550b7] py-20">
        <div className="max-w-7xl mx-auto px-6 ">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to Themes
          </h1>

          <p className="mt-4 text-md md:text-md text-blue-100 max-w-2xl">
            Discover beautiful, modern, and responsive themes to kickstart your
            next web project.
          </p>

          <div className="mt-8">
            <button className="px-6 py-3 bg-white text-[#1550b7] font-semibold rounded-lg shadow hover:bg-slate-100 transition">
              Explore Themes
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-slate-800">
            Featured Products
          </h2>

          <p className="mt-2 text-slate-500">
            Explore our most popular premium templates.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {products
              .filter((product) => product?.id && product?.title)
              .map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
