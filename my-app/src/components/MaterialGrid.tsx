// import { Link } from "react-router-dom";

// const materialCategories= [
//   { 
//     id: 1, 
//     name: 'Natural Diamond Jewelry', 
//     // image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&crop=face',
//     image:"src/assets/images/Ring2.jpeg",
//     href: '/material/natural_diamond'
//   },
//   { 
//     id: 2, 
//     name: 'Lab Grown Diamond Jewelry', 
//     image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop&crop=face',
//     href: '/material/lab_grown_diamond'
//   },
//   { 
//     id: 3, 
//     name: 'Plain Gold Jewelry', 
//     image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&crop=center',
//     href: '/material/plain_gold'
//   },
// ];


// export default function ShopByMaterial() {
//   return (
//     <section className="mb-6">
//       <h2 className="text-center text-xl font-semibold mb-4">SHOP BY MATERIAL</h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//         {materialCategories.map((cat) => (
//           <Link
//             key={cat.name}
//             to={cat.href}
//             className="group relative border rounded-lg overflow-hidden shadow hover:shadow-lg transition w-42 h-42"
//           >
//             {/* Category Image */}
//             <img
//               src={cat.image}
//               alt={cat.name}
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform"
//             />
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//               <span className="text-white text-sm font-medium text-center px-2">
//                 {cat.name}
//               </span>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

import { Link } from "react-router-dom";
import NaturalDiamondImage from "../assets/images/Natural_diamond.png";
import LabGrownDiamondImage from "../assets/images/Lab_grown_diamond.png";
import PlainGoldImage from "../assets/images/Plain_gold_jewelry.png";

const materialCategories = [
  { 
    id: 1, 
    name: 'Natural Diamond Jewelry', 
    image: NaturalDiamondImage,
    href: '/material/natural_diamond'
  },
  { 
    id: 2, 
    name: 'Lab Grown Diamond Jewelry', 
    image: LabGrownDiamondImage,
    href: '/material/lab_grown_diamond'
  },
  { 
    id: 3, 
    name: 'Plain Gold Jewelry', 
    image: PlainGoldImage,
    href: '/material/plain_gold'
  },
];

export default function ShopByMaterial() {
  return (
    <section className="mb-6">
      <h2 className="text-center text-xl font-semibold mb-6">SHOP BY MATERIAL</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          {materialCategories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.href}
              className="group flex flex-col items-center space-y-4"
            >
              {/* Square Image */}
              <div className="relative">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-40 h-40 rounded-lg object-cover border-2 border-gray-200 group-hover:border-gray-300 transition-all duration-300 group-hover:scale-105 shadow-md"
                />
              </div>
              {/* Text */}
              <span className="text-sm font-medium text-gray-700 text-center group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
