import HomepageHeader from "../src/components/HomepageHeader";
import Footer from "../src/components/Footer";
import ShopByMaterial from "../src/components/MaterialGrid";
import ShopByStyle from "../src/components/Stylegrid";
import CategoryGrid from "../src/components/CategoryGrid";

export default function landingpage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Homepage Header with Discount Bar and Navigation */}
      <HomepageHeader />

      {/* Main Content */}
      <main className="flex-1 bg-[#92bce03b]">
        {/* Shop by Material and Style in same row */}
        <div className="px-4 md:px-6 pt-8 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <ShopByMaterial />
            </div>
            <div>
              <ShopByStyle />
            </div>
          </div>
        </div>
        {/* Categories below */}
        <div className="px-4 md:px-6 pb-8">
          <CategoryGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
