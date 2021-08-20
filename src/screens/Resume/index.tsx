import React, { useEffect, useState } from "react";
import { Container, Header, Title, Content } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { HistoryCard } from "../../components/HistoryCard";
import { categories } from "../../utils/categories";

const dataKey = "@gofinances:transactions";

export interface TransactionDataProps {
  id: string;
  type: "positive" | "negative";
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface CategoryData {
  key: string;
  name: string;
  total: string;
  color: string;
}

export function Resume() {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );

  async function loadData() {
    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensive: TransactionDataProps) => expensive.type === "negative"
    );

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionDataProps) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.amount);
        }
      });

      if (categorySum > 0) {
        const total = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        totalByCategory.push({
          key: category.key,
          name: category.name,
          color: category.color,
          total,
        });
      }
    });

    setTotalByCategories(totalByCategory);
  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Resumo por Categoria</Title>
      </Header>

      <Content>
        {totalByCategories.map((item) => (
          <HistoryCard
            title={item.name}
            amount={item.total}
            color={item.color}
            key={item.key}
          />
        ))}
      </Content>
    </Container>
  );
}
