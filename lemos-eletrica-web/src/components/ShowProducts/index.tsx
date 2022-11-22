import { useProducts } from "../../hooks/useProducts";
import { CardProduct } from "../CardProducts";
import { Container } from "./styles";

export function ShowProducts() {

  return (
    <Container>
      <CardProduct />
    </Container>
  )
}

