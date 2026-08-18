import { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { getProducts } from "../services/productService";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Products-ஐ API-லிருந்து எடுக்கிற function
    const fetchProducts = async () => {
      try {
        // API response வரும் வரை wait செய்
        const response = await getProducts();

        // Data இருந்தால் products-ல் வை
        // Data இல்லையென்றால் empty array வை
        setProducts(response.data || []);
      } catch (error) {
        // API error வந்தால்
        console.error("Products எடுக்க முடியவில்லை:", error);

        // Products-ஐ empty array-ஆக வை
        setProducts([]);
      } finally {
        // API call முடிந்துவிட்டது
        setLoading(false);
      }
    };

    // Function-ஐ call செய்
    fetchProducts();

    // Component முதலில் load ஆகும்போது மட்டும் run ஆகும்
  }, []);

  const validProducts = products.filter(
    (product) => product?.id && product?.title,
  );

  return (
    <div>
      <section className="bg-[#1550b7] py-20">
        <div className="max-w-7xl mx-auto px-6">
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

          {loading ? (
            <div className="mt-10 flex justify-center items-center py-16">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-[#1550b7] rounded-full animate-spin" />
            </div>
          ) : validProducts.length === 0 ? (
            <div className="mt-10 text-center py-16">
              <p className="text-lg font-medium text-slate-600">
                No products found
              </p>
              <p className="mt-2 text-sm text-slate-400">
                There are no products available at the moment.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {validProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
