import { Link } from "react-router-dom";

type StyleCategory = {
  id: number;
  name: string;
  image: string;
  href: string;
};

const styleCategories: StyleCategory[] = [
  { 
    id: 1, 
    name: "Men", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    href: "/style/men"
  },
  { 
    id: 2, 
    name: "Women", 
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop&crop=face",
    href: "/style/women"
  },
];

export default function ShopByStyle(){
  return (
    <section className="mb-6">
      <h2 className="text-center text-xl font-semibold mb-6">SHOP BY STYLE</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl">
          {styleCategories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group flex flex-col items-center space-y-4"
            >
              {/* Circular Avatar */}
              <div className="relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-gray-200 group-hover:border-gray-300 transition-all duration-300 group-hover:scale-110 shadow-lg"
                />
              </div>
              {/* Text */}
              <span className="text-lg font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
