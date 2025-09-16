// import { Link } from "react-router-dom";

// const categories = [
//   { 
//     name: "Rings", 
//     href: "/categories/rings", 
//     image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop" 
//   },
//   { 
//     name: "Pendants", 
//     href: "/categories/pendants", 
//     image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop&crop=top" 
//   },
//   { 
//     name: "Bangles/Bracelets", 
//     href: "/categories/bangles_bracelets", 
//     image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop" 
//   },
//   { 
//     name: "Necklaces", 
//     href: "/categories/necklaces", 
//     image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=center" 
//   },
//   { 
//     name: "Earrings", 
//     href: "/categories/earrings", 
//     image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop" 
//   },
//   { 
//     name: "Accessories", 
//     href: "/categories/accessories", 
//     image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop&crop=center" 
//   },
// ];

// export default function CategoryGrid() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-6">
//       <h2 className="text-xl font-semibold text-center mb-4">
//         SHOP BY CATEGORIES
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {categories.map((cat) => (
//           <Link
//             key={cat.name}
//             to={cat.href}
//             className="group relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
//           >
//             {/* Category Image */}
//             <img
//               src={cat.image}
//               alt={cat.name}
//               className="w-full h-32 object-cover group-hover:scale-105 transition-transform"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//               <span className="text-white text-sm font-medium">
//                 {cat.name}
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }

import { Link } from "react-router-dom";

const categories = [
  { 
    name: "Rings", 
    href: "/categories/rings", 
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop&crop=center"
  },
  { 
    name: "Pendants", 
    href: "/categories/pendants", 
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=200&h=200&fit=crop&crop=center"
  },
  { 
    name: "Bangles/Bracelets", 
    href: "/categories/bangles_bracelets", 
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=200&h=200&fit=crop&crop=center"
  },
  { 
    name: "Necklaces", 
    href: "/categories/necklaces", 
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=200&h=200&fit=crop&crop=center"
  },
  { 
    name: "Earrings", 
    href: "/categories/earrings", 
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=200&h=200&fit=crop&crop=center"
  },
  { 
    name: "Accessories", 
    href: "/categories/accessories", 
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=200&h=200&fit=crop&crop=center"
  },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl font-semibold text-center mb-8">
        SHOP BY CATEGORIES
      </h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl">
          {categories.map((cat) => (
            <Link
              key={cat.name}
              to={cat.href}
              className="group flex flex-col items-center space-y-3"
            >
              {/* Square Image */}
              <div className="relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-24 h-24 rounded-lg object-cover border-2 border-gray-200 group-hover:border-gray-300 transition-all duration-300 group-hover:scale-105 shadow-md"
                />
              </div>
              {/* Text */}
              <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
