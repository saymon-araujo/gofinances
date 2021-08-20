import React from "react";
import { Container } from "./styles";
import { TextInputProps } from "react-native";

type props = TextInputProps;

export function Input({ ...rest }: props) {
  return <Container {...rest}></Container>;
}
