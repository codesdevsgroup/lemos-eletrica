import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Products {
  PRODUTOS_ID: number;
  PRODUTO_NOME: string;
  PRODUTO_PRECO_VENDA: number;
}

interface ProductsProviderProps {
  children: ReactNode
}

interface ProductContextData {
  products: Products[];
}

const ProductsContext = createContext<ProductContextData>(
  {} as ProductContextData
)

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState<Products[]>([])

  useEffect(() => {
    api.get('products')
      .then(response => setProducts(response.data))
  }, []);

  console.log(products)

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductsContext)

  return context
}