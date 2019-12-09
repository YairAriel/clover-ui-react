import React from "react";
import { render, getByText } from "@testing-library/react";
import Card from "./Card";

describe("Card", () => {
  it("should have the option to receive any valid width and height values", () => {
    const { container } = render(<Card width="200px" height="50vh">test</Card>);
    const component = getByText(container, "test");
    expect(component).toHaveStyleRule("width", "200px");
    expect(component).toHaveStyleRule("height", "50vh");
  });

  it("should have the option for dark theme", () => {
    const { container } = render(<Card dark>test</Card>);
    const component = getByText(container, "test");
    expect(component).toHaveStyleRule("background", "#272121");
    expect(component).toHaveStyleRule("color", "#FFFFFF");
  });
});