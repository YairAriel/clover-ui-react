import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import { toBeDisabled } from "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Button from "./Button";
import { theme } from "../../config/styles";

expect.extend({toBeDisabled});

describe("Button", () => {
  it("should display text", () => {
    const { container } = render(<Button>test</Button>);

    getByText(container, "test");
  });

  it("should handle click events", () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <Button onClick={onClickMock}>Click Me!</Button>
    );
    const component = container.firstChild;

    fireEvent.click(component);

    expect(onClickMock).toBeCalled();
  });

  it("should have an optional disabled attribute", () => {
    const { container } = render(<div><Button disabled>disabled</Button><Button>enabled</Button></div>);
    const disabled = getByText(container, "disabled");
    const enabled = getByText(container, "enabled");

    expect(disabled).toHaveAttribute("disabled");
    expect(disabled).toBeDisabled();
    expect(enabled).not.toBeDisabled();
  });

  it("should have an optional round attribute", () => {
    const { container } = render(<Button round>test</Button>);
    const component = getByText(container, "test");

    expect(component).toHaveStyleRule("border-radius", "50%");
    expect(component).toHaveStyleRule("width", "100px");

  });

  it("should have an optional fullwidth attribute", () => {
    const { container } = render(<Button fullwidth>test</Button>);
    const component = getByText(container, "test");

    expect(component).toHaveStyleRule("border-radius", "none");
    expect(component).toHaveStyleRule("width", "100%");
  });

  it("should have an optional large attribute", () => {
    const { container } = render(<Button large>test</Button>);
    const component = getByText(container, "test");

    expect(component).toHaveStyleRule("padding", "3.2vw 4.88vw");
    expect(component).toHaveStyleRule("font-size", "9.375vw");
  });

  it("should have a defalt primary color", () => {
    const { container } = render(<Button>test</Button>);
    const component = getByText(container, "test");

    expect(component).toHaveStyleRule("background", theme.colors.primary);
  });

  it("should have a margin of 0.5em", () => {
    const { container } = render(<Button>test</Button>);
    const component = getByText(container, "test");
  
    expect(component).toHaveStyleRule("margin", ".5em");
  });
});