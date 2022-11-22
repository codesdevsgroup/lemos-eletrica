import { useProducts } from "../../hooks/useProducts";
import { Container } from "./styles";

export function CardProduct() {
  const { products } = useProducts();
  
  return (
    <Container>
      {products.map(product => (
        <div className="card-container" key={product.PRODUTOS_ID}>
          <span className="product-name">{product.PRODUTO_NOME}</span>
          <span className="product-price">{new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(product.PRODUTO_PRECO_VENDA)}</span>
        </div> 
      ))}
  </Container>
  )
}