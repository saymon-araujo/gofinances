import React from "react";
import { render } from "@testing-library/react-native";

import { Input } from ".";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Input Component", () => {
  it("should have specific border color when active", () => {
    const { getByTestId } = render(
      <Input
        testID="input-general"
        placeholder="email"
        keyboardType="email-address"
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Providers,
      }
    );

    const inputComponent = getByTestId("input-general");

    expect(inputComponent.props.style[0].borderColor).toEqual(
      theme.colors.attention
    );
  });
});
