import React from 'react';
import { useParams } from 'react-router-dom';
import HomepageHeader from '../src/components/HomepageHeader';
import Footer from '../src/components/Footer';
import ProductGrid from '../src/components/ProductGrid';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Homepage Header with Discount Bar and Navigation */}
      <HomepageHeader />

      {/* Main Content */}
      <main className="flex-1">
        <ProductGrid category={category} />
      </main>

      <Footer />
    </div>
  );
};

export default CategoryPage;
