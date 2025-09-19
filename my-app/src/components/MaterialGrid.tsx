import { Link } from "react-router-dom";
import NaturalDiamondImage from "../assets/images/Natural_diamond.png";
import LabGrownDiamondImage from "../assets/images/Lab_grown_diamond.png";
import PlainGoldImage from "../assets/images/Plain_gold_jewelry.png";

type Props = {
  iconSize?: "small" | "default";
};

const materialCategories = [
  { id: 1, name: 'Natural Diamond Jewelry', image: NaturalDiamondImage, href: '/material/natural_diamond' },
  { id: 2, name: 'Lab Grown Diamond Jewelry', image: LabGrownDiamondImage, href: '/material/lab_grown_diamond' },
  { id: 3, name: 'Plain Gold Jewelry', image: PlainGoldImage, href: '/material/plain_gold' },
];

export default function ShopByMaterial({ iconSize = "default" }: Props) {
  const imgClass = "w-9 h-9";
  return (
    <section className="max-w-7xl mx-auto px-4 py-3 w-full">
      <span className="text-base font-semibold mb-2 block text-left">SHOP BY MATERIAL</span>
      <div className="flex justify-start w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[80%]">
          {materialCategories.map((cat) => (
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
