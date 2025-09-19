import { Link } from "react-router-dom";
import MenImage from "../assets/images/Men_jewelry.png";
import WomenImage from "../assets/images/women_jewelry.png";

type Props = {
  iconSize?: "small" | "default";
};

type StyleCategory = {
  id: number;
  name: string;
  image: string;
  href: string;
};

const styleCategories: StyleCategory[] = [
  { id: 1, name: "Men", image: MenImage, href: "/style/men" },
  { id: 2, name: "Women", image: WomenImage, href: "/style/women" },
];

export default function ShopByStyle({ iconSize = "default" }: Props){
  const imgClass = "w-12 h-12";
  return (
    <section className=" max-w-7xl mx-auto px-4 py-3 w-full">
      <span className="text-base font-semibold mb-2 block text-left">SHOP BY STYLE</span>
      <div className="flex justify-start w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[80%]">
          {styleCategories.map((cat) => (
            <div
              key={cat.id}
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
