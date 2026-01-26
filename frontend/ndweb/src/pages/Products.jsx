import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import BrandFilterTabs from '../components/BrandFilterTabs';
import { getProductsByBrand, brands } from '../data/products';

const Products = () => {
  const { brand } = useParams();
  const navigate = useNavigate();
  
  // Determine active brand from URL or state
  const [activeBrand, setActiveBrand] = useState(() => {
    if (brand && brands.some((b) => b.id === brand)) {
      return brand;
    }
    return 'all';
  });

  // Update URL when brand changes
  useEffect(() => {
    if (activeBrand === 'all') {
      navigate('/products', { replace: true });
    } else {
      navigate(`/products/${activeBrand}`, { replace: true });
    }
  }, [activeBrand, navigate]);

  // Sync active brand with URL param
  useEffect(() => {
    if (brand) {
      setActiveBrand(brand);
    }
  }, [brand]);

  const filteredProducts = getProductsByBrand(activeBrand);

  const handleBrandChange = (brandId) => {
    setActiveBrand(brandId);
  };

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 pb-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4">
          Our Water Products
        </h1>
        <p className="text-center text-neutral-400 mb-12">
          Choose from our premium water brands
        </p>

        <BrandFilterTabs activeBrand={activeBrand} onBrandChange={handleBrandChange} />

        {filteredProducts.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-neutral-400">
            <p>No products found for this brand.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
