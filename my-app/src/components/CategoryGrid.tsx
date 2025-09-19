import { Link } from "react-router-dom";
import RingImage from "../assets/images/Ring3.png";
import PendantImage from "../assets/images/Pendant.png";
import BraceletsImage from "../assets/images/Bracelets.png";
import NecklaceImage from "../assets/images/Necklace.png";
import EarringsImage from "../assets/images/Earrings.png";
import AccessoriesImage from "../assets/images/Accessories.png";

type Props = {
  iconSize?: "small" | "default";
};

const categories = [
  { name: "Rings", href: "/categories/rings", image: RingImage },
  { name: "Pendants", href: "/categories/pendants", image: PendantImage },
  { name: "Bangles/Bracelets", href: "/categories/bangles_bracelets", image: BraceletsImage },
  { name: "Necklaces", href: "/categories/necklaces", image: NecklaceImage },
  { name: "Earrings", href: "/categories/earrings", image: EarringsImage },
  { name: "Accessories", href: "/categories/accessories", image: AccessoriesImage },
];

export default function CategoryGrid({ iconSize = "default" }: Props) {
  const imgClass = "w-12 h-12";
  return (
    <section className="max-w-7xl mx-auto px-4 py-3 w-full">
      <span className="text-base font-semibold mb-2 block text-left">SHOP BY CATEGORIES</span>
      <div className="flex justify-start w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 w-[80%]">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center justify-center h-32 bg-white rounded-lg shadow-md p-3 space-y-2 w-full"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className={`${imgClass} rounded-full object-cover border border-gray-200 mb-1`}
              />
              <Link
                to={cat.href}
                className="text-xs font-bold text-gray-700 text-center hover:text-amber-600 transition"
                style={{ minWidth: "70px", maxWidth: "110px", wordBreak: "break-word" }}
              >
                {cat.name}
              </Link>
              <Link
                to={cat.href}
                className="mt-1 px-3 py-1 bg-amber-500 text-white rounded-full text-[10px] font-semibold hover:bg-amber-600 transition"
              >
                Shop Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
