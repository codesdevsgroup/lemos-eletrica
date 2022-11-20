import { useProducts } from "../../hooks/useProducts";
import { Container } from "./styles";

export function ShowProducts() {
  const { products } = useProducts();

  return (
    <Container>
      {products.map(product => (
        <ul key={product.PRODUTOS_ID}>
          <li>{product.PRODUTO_NOME}</li>
          <li>{product.PRODUTO_PRECO_VENDA}</li>
        </ul> 
      ))}
    </Container>
  )
}

