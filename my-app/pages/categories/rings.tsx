import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsPage from '../../src/components/ProductPage';

export default function Rings() {
  const [searchParams] = useSearchParams();
  const occasion = searchParams.get('occasion');

  // Build default filters based on URL parameters
  const defaultFilters: any = { category: ["rings"] };
  if (occasion) {
    defaultFilters.occasion = [occasion];
  }

  return (
    <ProductsPage
      heroLine1="Rings Collection"
      heroLine2="Discover our exquisite collection of rings for every occasion"
      defaultExpandedFilter="material"
      pageSize={12}
      defaultFilters={defaultFilters}
    />
  );
}
