import { ShowProducts } from './components/ShowProducts';
import { ProductsProvider, useProducts } from './hooks/useProducts';

function App() {
  const { products } = useProducts();

  return (
    <ProductsProvider>
      <ShowProducts />
    </ProductsProvider>
  );
}

export default App;
