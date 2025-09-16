import React from 'react';
import HomepageHeader from '../../src/components/HomepageHeader';
import Footer from '../../src/components/Footer';
import ProductGrid from '../../src/components/ProductGrid';

export default function Earrings() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Homepage Header with Discount Bar and Navigation */}
      <HomepageHeader />

      {/* Main Content */}
      <main className="flex-1">
        <ProductGrid category="earrings" />
      </main>

      <Footer />
    </div>
  );
}
