import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsPage from '../../src/components/ProductPage';

export default function Earrings() {
  const [searchParams] = useSearchParams();
  const occasion = searchParams.get('occasion');

  // Build default filters based on URL parameters
  const defaultFilters: any = { category: ["earrings"] };
  if (occasion) {
    defaultFilters.occasion = [occasion];
  }

  return (
    <ProductsPage
      heroLine1="Earrings Collection"
      heroLine2="Beautiful earrings to complement your style and personality"
      defaultExpandedFilter="material"
      pageSize={12}
      defaultFilters={defaultFilters}
    />
  );
}
