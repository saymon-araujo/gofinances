import React from "react";
import { render } from "@testing-library/react-native";

import { Profile } from "../../screens/Profile";

describe("Testes na tela: Profile", () => {
  //Pode ser it ou test a função
  it('should have ---  if the input "nome" rendered correctly', () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText("Nome");

    expect(inputName.props.placeholder).toBeTruthy();
  });

  it("Checks if user data has been loaded", () => {
    const { getByTestId } = render(<Profile />);

    const inputName = getByTestId("input-name");
    const inputSurname = getByTestId("input-surname");

    expect(inputName.props.value).toEqual("Saymon");
    expect(inputSurname.props.value).toEqual("Araújo");
  });

  it("Checks if the title rendered correctly", () => {
    const { getByTestId } = render(<Profile />);

    const titleText = getByTestId("title-text");

    expect(titleText.props.children).toContain("Tela");
  });
});
