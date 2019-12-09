import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { toBeDisabled } from "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { act } from 'react-dom/test-utils';
import TextField from "./TextField";

expect.extend({toBeDisabled});

describe("TextField", () => {
  it("should have the option to receive a placeholder", () => {
    const { queryByPlaceholderText } = render(<TextField placeholder="test" />);
    const input = queryByPlaceholderText("test");
    expect(input.placeholder).toEqual("test");
  });

  it("should have the option to be disabled", () => {
    const { queryByPlaceholderText } = render(<TextField placeholder="test" disabled/>);
    const input = queryByPlaceholderText("test");
    expect(input).toHaveAttribute("disabled");
    expect(input).toBeDisabled();
  });

  it("should have the option to receive any valid css color for the value text", () => {
    const { queryByPlaceholderText } = render(<TextField placeholder="test" textColor="#17A2B8" value="blue" onChange={() => {}}/>);
    const input = queryByPlaceholderText("test");
    expect(input).toHaveStyleRule("color", "#17A2B8");
  });

  it("should have the option to be rounded (border-radius)", () => {
    const { queryByPlaceholderText } = render(<TextField placeholder="test" rounded/>);
    const input = queryByPlaceholderText("test");
    expect(input).toHaveStyleRule("border-radius", "3px");
  });

  it("should have the 'isNotValid' attribute", () => {
    const { queryByPlaceholderText } = render(<TextField placeholder="test" isNotValid/>);
    const input = queryByPlaceholderText("test");
    expect(input).toHaveStyleRule("border", "1px solid #ff3860");
  })

  it("should have the option to change label text color to any valid css color value", () => {
    const { getByTestId } = render(<TextField labelText="test me" labelColor="brown"/>);
    const label = getByTestId("label");
    expect(label).toHaveStyleRule("color", "brown");
  });

  it("should have the option to display label text", () => {
    const { getByTestId } = render(<TextField labelText="test me" />);
    const label = getByTestId("label");
    expect(label).toHaveTextContent("test me");
  });

  it("should have the option of default input value", () => {
    const { getByTestId } = render(<TextField value="test value" onChange={() => {}} />);
    const input = getByTestId("input");
    expect(input).toHaveValue("test value");
  });

  it("should change value via the onChange method", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(<TextField onChange={handleChange} />);
    const input = getByTestId("input");

    fireEvent.change(input, { target: { value: 'a' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(input.value).toBe('a');
  });

  it("should implement the onFocus method", () => {
    const handleFocus = jest.fn();
    const { getByPlaceholderText } = render(<TextField onFocus={handleFocus} placeholder="type here" />);
    const input = getByPlaceholderText("type here");

    act(() => input.focus());
    expect(handleFocus).toHaveBeenCalledTimes(1);
    expect(input).toHaveFocus();
  });

  it("should implement the onBlur method", () => {
    const handleBlur = jest.fn();
    const { getByPlaceholderText } = render(<TextField onBlur={handleBlur} placeholder="type here" />);
    const input = getByPlaceholderText("type here");

    act(() => input.focus());
    act(() => input.blur());
    expect(handleBlur).toHaveBeenCalledTimes(1);
    expect(input).not.toHaveFocus();
  });
});