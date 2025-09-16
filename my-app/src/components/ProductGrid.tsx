import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Eye } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  original_price: number;
  sale_price: number;
  discount: number;
  category: string;
  material: string;
  gemstone: string;
  occasion: string;
  in_stock: boolean;
  new_arrivals: boolean;
  certified: boolean;
  customizable: boolean;
  images: Array<{
    id: number;
    src: string;
    alt: string;
    is_primary: boolean;
  }>;
}

interface ProductGridProps {
  category?: string;
  material?: string;
  style?: string;
  occasion?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ category, material, style, occasion }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, [category, material, style, occasion]);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Build query parameters
      const params = new URLSearchParams();
      if (category) params.append('category', category);
      if (material) params.append('material', material);
      if (style) params.append('style', style);
      if (occasion) params.append('occasion', occasion);

      const response = await fetch(`http://localhost:8000/products/search?${params.toString()}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products. Please try again.');
      // Fallback to sample data if API fails
      setProducts(getSampleProducts());
    } finally {
      setLoading(false);
    }
  };

  const getSampleProducts = (): Product[] => [
    {
      id: 1,
      name: "Sapphire Halo Engagement Ring",
      description: "Beautiful blue sapphire surrounded by diamond halo",
      original_price: 1200,
      sale_price: 999,
      discount: 17,
      category: "rings",
      material: "gold",
      gemstone: "sapphire",
      occasion: "engagement",
      in_stock: true,
      new_arrivals: true,
      certified: true,
      customizable: true,
      images: [
        {
          id: 1,
          src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
          alt: "Sapphire Halo Ring",
          is_primary: true
        }
      ]
    },
    {
      id: 2,
      name: "Diamond Solitaire Ring",
      description: "Classic diamond solitaire in white gold",
      original_price: 2500,
      sale_price: 1999,
      discount: 20,
      category: "rings",
      material: "white_gold",
      gemstone: "diamond",
      occasion: "engagement",
      in_stock: true,
      new_arrivals: false,
      certified: true,
      customizable: true,
      images: [
        {
          id: 2,
          src: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop",
          alt: "Diamond Solitaire Ring",
          is_primary: true
        }
      ]
    },
    {
      id: 3,
      name: "Three Stone Diamond Ring",
      description: "Elegant three stone diamond ring",
      original_price: 1800,
      sale_price: 1499,
      discount: 17,
      category: "rings",
      material: "gold",
      gemstone: "diamond",
      occasion: "engagement",
      in_stock: true,
      new_arrivals: false,
      certified: true,
      customizable: true,
      images: [
        {
          id: 3,
          src: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop",
          alt: "Three Stone Diamond Ring",
          is_primary: true
        }
      ]
    },
    {
      id: 4,
      name: "Emerald Cut Ring",
      description: "Stunning emerald cut gemstone ring",
      original_price: 1500,
      sale_price: 1299,
      discount: 13,
      category: "rings",
      material: "silver",
      gemstone: "emerald",
      occasion: "engagement",
      in_stock: true,
      new_arrivals: true,
      certified: true,
      customizable: true,
      images: [
        {
          id: 4,
          src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
          alt: "Emerald Cut Ring",
          is_primary: true
        }
      ]
    },
    {
      id: 5,
      name: "Vintage Inspired Ring",
      description: "Beautiful vintage inspired aquamarine ring",
      original_price: 1100,
      sale_price: 899,
      discount: 18,
      category: "rings",
      material: "silver",
      gemstone: "aquamarine",
      occasion: "engagement",
      in_stock: true,
      new_arrivals: false,
      certified: true,
      customizable: true,
      images: [
        {
          id: 5,
          src: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop",
          alt: "Vintage Inspired Ring",
          is_primary: true
        }
      ]
    },
    {
      id: 6,
      name: "Classic Diamond Ring",
      description: "Timeless classic diamond engagement ring",
      original_price: 2200,
      sale_price: 1799,
      discount: 18,
      category: "rings",
      material: "gold",
      gemstone: "diamond",
      occasion: "engagement",
      in_stock: true,
      new_arrivals: false,
      certified: true,
      customizable: true,
      images: [
        {
          id: 6,
          src: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
          alt: "Classic Diamond Ring",
          is_primary: true
        }
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  if (loading) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Featured'} Jewelry
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beautifully crafted jewelry that'll get you an instant 'yes!' Explore and shop pieces with colored gems, diamonds, and precious metals.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg mb-3"></div>
                <div className="space-y-2">
                  <div className="bg-gray-200 h-4 rounded w-3/4"></div>
                  <div className="bg-gray-200 h-4 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-red-600 mb-4">{error}</p>
            <button 
              onClick={fetchProducts}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Featured'} Jewelry
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Beautifully crafted jewelry that'll get you an instant 'yes!' Explore and shop pieces with colored gems, diamonds, and precious metals.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-50">
                <img
                  src={product.images[0]?.src}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.new_arrivals && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </span>
                  )}
                  {product.certified && (
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                      Certified
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                    <Heart className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors">
                    <Eye className="h-4 w-4 text-gray-600" />
                  </button>
                </div>

                {/* Discount Badge */}
                {product.discount > 0 && (
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                      -{product.discount}%
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-medium text-gray-900 text-sm mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">
                      {formatPrice(product.sale_price)}
                    </span>
                    {product.discount > 0 && (
                      <span className="text-xs text-gray-500 line-through">
                        {formatPrice(product.original_price)}
                      </span>
                    )}
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product.in_stock 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.in_stock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="flex-1 bg-gray-900 text-white text-xs py-2 px-3 rounded-lg hover:bg-gray-800 transition-colors text-center"
                  >
                    View Details
                  </Link>
                  <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
