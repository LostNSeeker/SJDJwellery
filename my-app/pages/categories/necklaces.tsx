import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsPage from '../../src/components/ProductPage';

export default function Necklaces() {
  const [searchParams] = useSearchParams();
  const occasion = searchParams.get('occasion');

  // Build default filters based on URL parameters
  const defaultFilters: any = { category: ["necklaces"] };
  if (occasion) {
    defaultFilters.occasion = [occasion];
  }

  return (
    <ProductsPage
      heroLine1="Necklaces Collection"
      heroLine2="Elegant necklaces to enhance your natural beauty"
      defaultExpandedFilter="material"
      pageSize={12}
      defaultFilters={defaultFilters}
    />
  );
}
