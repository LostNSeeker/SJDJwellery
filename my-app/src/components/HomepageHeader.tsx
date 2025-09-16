import React from 'react';
import Header from './Header';
import DiscountBar from './DiscountBar';
import PromoBanner from './PromoBanner';

const HomepageHeader: React.FC = () => {
  return (
    <>
      {/* Discount Bar */}
      <DiscountBar />
      
      {/* Main Header with Navigation */}
      <Header />
      
      {/* Promotional Banner */}
      <PromoBanner />
    </>
  );
};

export default HomepageHeader;
