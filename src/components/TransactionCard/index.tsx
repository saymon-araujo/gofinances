import React from "react";

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

export interface TransactionCardProps {
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

const categories = [
  { key: "purchases", name: "Compras", icon: "shopping-bag", color: "#5636D3" },
  { key: "food", name: "Alimentação", icon: "coffee", color: "#FF872C" },
  { key: "salary", name: "Salário", icon: "dollar-sign", color: "#12A454" },
  { key: "car", name: "Carro", icon: "crosshair", color: "#E83F5B" },
  { key: "leisure", name: "Lazer", icon: "heart", color: "#26195C" },
  { key: "studies", name: "Estudos", icon: "book", color: "#9C001A" },
];

export function TransactionCard({ data }: Props) {
  const [category] = categories.filter((item) => item.key === data.category);

  return (
    <Container>
      <Title>{data.name}</Title>

      <Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Amount>

      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>

        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
