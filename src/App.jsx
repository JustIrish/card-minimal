import { Suspense } from 'react';

import ThemeProvider from './theme';
import './App.css';

import LoadingScreen from './components/loading-screen/loading-screen';

import ProductCard from './components/ProductCard';

import productList from './data/productList.json';

function App() {
  return (
    <ThemeProvider>
      <Suspense fallback={<LoadingScreen />}>
        <ProductCard product={productList[0]} />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
