import React from "react";
import { render, getByText } from "@testing-library/react";
import Flex from "./Flex";

describe("Flex", () => {
  it("should be 'flex-direction: row' by default", () => {
    const { container } = render(<Flex>This is a test</Flex>);
    const component = getByText(container, "This is a test");
    expect(component).toHaveStyleRule("flex-direction", "row");
  });

  it("should have the ability to get the attribute 'column' for 'flex-direction: column'", () => {
    const { container } = render(<Flex column>This is a test</Flex>);
    const component = getByText(container, "This is a test");
    expect(component).toHaveStyleRule("flex-direction", "column");
  });

  it("should be 'justify-content: flex-start' by default", () => {
    const { container } = render(<Flex>This is a test</Flex>);
    const component = getByText(container, "This is a test");
    expect(component).toHaveStyleRule("justify-content", "flex-start");
  });

  it("should have the 'justify' attribute (justify-content)", () => {
    const { container } = render(<Flex justify="flex-end">This is a test</Flex>);
    const component = getByText(container, "This is a test");
    expect(component).toHaveStyleRule("justify-content", "flex-end");
  });

  it("should be 'align-items: stretch' by default", () => {
    const { container } = render(<Flex>This is a test</Flex>);
    const component = getByText(container, "This is a test");
    expect(component).toHaveStyleRule("align-items", "stretch");
  });

  it("should have the 'align' attribute (align-items)", () => {
    const { container } = render(<Flex align="center">This is a test</Flex>);
    const component = getByText(container, "This is a test");
    expect(component).toHaveStyleRule("align-items", "center");
  });
});