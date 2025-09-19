import HomepageHeader from "../src/components/HomepageHeader";
import Footer from "../src/components/Footer";
import ShopByMaterial from "../src/components/MaterialGrid";
import ShopByStyle from "../src/components/Stylegrid";
import CategoryGrid from "../src/components/CategoryGrid";

export default function landingpage() {
  return (
    // Responsive, single view, no scroll, column layout, flex-start, auto width, left/right margin
    <div className="flex flex-col min-h-screen overflow-hidden">
      <HomepageHeader />
      <main className="flex-1 bg-[#fafcff] flex flex-col justify-start items-start overflow-hidden">
        {/* Stack grids column-wise, flex-start, left/right margin, auto width */}
        <div className="w-full flex flex-col items-start" style={{ marginLeft: "10%", marginRight: "10%" }}>
          <div className="w-full flex flex-col justify-start items-start mb-0.5" style={{ height: "22vh" }}>
            <ShopByMaterial iconSize="small" />
          </div>
          <div className="w-full flex flex-col justify-start items-start mb-0.5" style={{ height: "22vh" }}>
            <ShopByStyle iconSize="small" />
          </div>
          <div className="w-full flex flex-col justify-start items-start mb-0.5" style={{ height: "22vh" }}>
            <CategoryGrid iconSize="small" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
