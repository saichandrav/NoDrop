import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import BrandFilterTabs from '../components/BrandFilterTabs';
import { getProductsByBrand, brands } from '../data/products';

const Products = () => {
  const { brand } = useParams();
  const navigate = useNavigate();

  // Single source of truth → URL
  const activeBrand =
    brand && brands.some((b) => b.id === brand) ? brand : 'all';

  useEffect(() => {
    if (!brand && activeBrand !== 'all') {
      navigate(`/products/${activeBrand}`, { replace: true });
    }
  }, [brand, activeBrand, navigate]);

  const filteredProducts = getProductsByBrand(activeBrand);

  const handleBrandChange = (brandId) => {
    navigate(
      brandId === 'all' ? '/products' : `/products/${brandId}`,
      { replace: true }
    );
  };

  return (
    <section className="min-h-screen pt-20 pb-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-5xl  font-bold mb-3">
            Our Water Products
          </h1>
          <p className="text-neutral-400">
            Choose from our premium water brands
          </p>
        </header>

        {/* Brand Filter */}
        <BrandFilterTabs
          activeBrand={activeBrand}
          onBrandChange={handleBrandChange}
        />

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="
            grid gap-5 sm:gap-6 mt-10
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
          ">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-neutral-400 mt-16">
            <p>No products found for this brand.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
