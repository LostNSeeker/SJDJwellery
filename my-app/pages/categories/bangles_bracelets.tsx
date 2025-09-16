import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductsPage from '../../src/components/ProductPage';

export default function BanglesBracelets() {
  const [searchParams] = useSearchParams();
  const occasion = searchParams.get('occasion');

  // Build default filters based on URL parameters
  const defaultFilters: any = { category: ["bangles_bracelets"] };
  if (occasion) {
    defaultFilters.occasion = [occasion];
  }

  return (
    <ProductsPage
      heroLine1="Bangles & Bracelets Collection"
      heroLine2="Adorn your wrists with our beautiful bangles and bracelets"
      defaultExpandedFilter="material"
      pageSize={12}
      defaultFilters={defaultFilters}
    />
  );
}
